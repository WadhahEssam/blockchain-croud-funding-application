webpackHotUpdate(5,{

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(497);

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
  }

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQOztBQUVBLElBQUksWUFBSjs7QUFFQTtBQVJBO0FBQ0E7QUFRQSxJQUFLLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBcEQsQUFBNkQsYUFBYyxBQUN6RTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3Qjs7QUFDRDtBQUpBLEFBS0E7S0FDSyxBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFBZ0MsQUFDakQ7V0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDoveGFtcHAvaHRkb2NzL2Jsb2NrY2hhaW4tY3JvdWQtZnVuZGluZy1hcHBsaWNhdGlvbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\xampp\\htdocs\\blockchain-croud-funding-application\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\xampp\\htdocs\\blockchain-croud-funding-application\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wYjAzYzM0Zjg2MGUzODU0ODM5My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz9kZTQwYmFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgd2ViMyBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgYnkgdGhlIGZyb250IGVuZCB0byBjb25uZWN0IHRvIHRoZSBcclxuLy8gY2FtcGFpZ24gZmFjdG9yeSBjb250cmFjdCBcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcblxyXG4vLyBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuLy8gd2hlbiBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWF4IGlzIGF2YWlsYWJsZVxyXG5pZiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcbiAgLy8gc2FtZSBhcyBiZWZvcmVcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxufSBcclxuLy8gd2hlbiB3ZSBhcmUgb24gdGhlIHNlcnZlciBvciBtZXRhbWFzayBpc24ndCBpbnN0YWxsZWRcclxuLy8gc28gd2UgYXJlIGdvaW5nIHRvIHVzZSBpbmZ1cmFcclxuZWxzZSB7XHJcbiAgLy8gdGhhdCBpcyBob3cgd2UgY2FuIG1ha2Ugb3VyIG93biBwcm92aWRlciB3aXRoIG91dCB0aGUgdXNlIG9mIG1ldGFtYXNrIG9yIFxyXG4gIC8vIGhkLXRyZmZsZS13YWxsZXQuXHJcbiAgLy8gdGhpcyBodHRwcHJvdmlkZXIgd2lsbCB0YWtlIHRoZSBpbmZ1cmEgbGluayBhcyB0aGUgZmlyc3QgYXJndWVtZW50XHJcbiAgLy8gaXQgaXMgb2tleSBpZiBwZW9wbGUgc2F3IHlvdXIgaW5mdXJhIGxpbmtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvZWVmYWQ0MjVmNjc4NGQwOWIwZTQ4Mzc1OWI0NGQ3YTYnKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V0aGVyZXVtL3dlYjMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFRQTtBQUVBO0FBQUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=