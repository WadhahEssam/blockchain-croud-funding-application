const Web3 = require('web3');
const ganache = require('ganache-cli');
const assert = require('assert');

const compiledCampaign = require('../ethereum/build/Campaign.json');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const web3 = new Web3(ganache.provider());

let accounts, factoryContract, campaignContract, campaignContractAddress;
beforeEach( async () => {
  accounts = await web3.eth.getAccounts();
  factoryContract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factoryContract.methods.createCampaign('100').send({ from: accounts[0], gas: '1000000' });

  const addresses = await factoryContract.methods.getDeployedCampaigns().call();
  campaignContractAddress = addresses[0];

  // accessing already deploied contract
  campaignContract = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface), 
    campaignContractAddress
    ); 
});

describe('Campaign Contract', () => {
  it('deployes campaign and factory', () => {
    assert.ok(factoryContract.options.address);
    assert.ok(campaignContract.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const managerAddress = await campaignContract.methods.manager().call();
    assert.equal(accounts[0], managerAddress); 
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaignContract.methods.contribute().send({ from: accounts[1], value: 1000, gas: '1000000' });
    const isApprover = await campaignContract.methods.approvers(accounts[1]).call();
    assert(isApprover);
  });

  it('requires minimum contribution', async () => {
    try {
      await campaignContract.methods.contribute().send({ from: accounts[2], value: 99, gas: '1000000' });
      assert(false);
    } catch (error) {
      assert(true);
    }
  });

  it('allows manager to make a payment request', async () => {
    await campaignContract.methods.createRequest('buying stuff', '1000000', accounts[3], ).send({ from: accounts[0], gas: '1000000' });
    const requests = await campaignContract.methods.requests(0).call();
    assert.equal('buying stuff', requests.description);
    assert.equal('1000000', requests.value);
    assert.equal(accounts[3], requests.recipient);
  });

  it('processes request', async () => {
    await campaignContract.methods.contribute().send({ from: accounts[0], value: web3.utils.toWei('10', 'ether') });
    await campaignContract.methods.createRequest('buying anther stuff', web3.utils.toWei('2','ether'), accounts[3] ).send({ from: accounts[0], gas:'1000000' });
    await campaignContract.methods.approveRequest(0).send({ from: accounts[0], gas: '1000000' }); 
    await campaignContract.methods.finalizeRequest(0).send({ from: accounts[0], gas: '1000000'}); 
    
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    assert(balance > 99);
  });

});

