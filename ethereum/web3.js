// this web3 instance will be used by the front end to connect to the 
// campaign factory contract 
import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);

let web3;

// when code is executed in the browser and metamax is available
if ( typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ) {
  // same as before
  web3 = new Web3(window.web3.currentProvider);
} 
// when we are on the server or metamask isn't installed
// so we are going to use infura
else {
  // that is how we can make our own provider with out the use of metamask or 
  // hd-trffle-wallet.
  // this httpprovider will take the infura link as the first arguement
  // it is okey if people saw your infura link
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/eefad425f6784d09b0e483759b44d7a6');
  web3 = new Web3(provider);
}

export default web3;