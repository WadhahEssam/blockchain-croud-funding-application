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
  campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignContractAddress); 
});

describe('Campaign Contract', () => {
  it('test',  () => {
      console.log(campaignContractAddress);
  });
});