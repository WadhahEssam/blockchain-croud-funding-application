const HDWalledProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('../ethereum/build/CampaignFactory.json');
const fs = require('fs-extra');
const path = require('path');

const ethreumPath = path.resolve(__dirname, 'contract.json'); 

const provider = new HDWalledProvider(
  'interest route dry word remind argue dinner stomach rebel virtual travel subject',
  'https://rinkeby.infura.io/v3/eefad425f6784d09b0e483759b44d7a6'
);


const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);

  fs.outputJsonSync(ethreumPath, { deployer: accounts[0], contractAddress: result.options.address});

};

deploy();

