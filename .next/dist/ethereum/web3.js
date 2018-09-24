'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;

// when code is executed in the browser and metamax is available
// this web3 instance will be used by the front end to connect to the 
// campaign factory contract 
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // same as before
  web3 = new _web2.default(window.web3.currentProvider);
  console.log('metamask');
}
// when we are on the server or metamask isn't installed
// so we are going to use infura
else {
    // that is how we can make our own provider with out the use of metamask or 
    // hd-trffle-wallet.
    // this httpprovider will take the infura link as the first arguement
    // it is okey if people saw your infura link
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/eefad425f6784d09b0e483759b44d7a6');
    web3 = new _web2.default(provider);
    console.log('server');
  }

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxBQUFPOzs7Ozs7QUFFUDs7QUFFQSxJQUFJLFlBQUo7O0FBRUE7QUFSQTtBQUNBO0FBUUEsSUFBSyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQXBELEFBQTZELGFBQWMsQUFDekU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDNUI7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNiOztBQUNEO0FBTEEsQUFNQTtLQUNLLEFBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUFnQyxBQUNqRDtXQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2hCO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDoveGFtcHAvaHRkb2NzL2Jsb2NrY2hhaW4tY3JvdWQtZnVuZGluZy1hcHBsaWNhdGlvbiJ9