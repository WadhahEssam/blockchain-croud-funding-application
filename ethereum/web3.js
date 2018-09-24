// this web3 instance will be used by the front end to connect to the 
// campaign factory contract 

import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export default web3;