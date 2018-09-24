'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _contract = require('./contract.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _web2.default.eth.Contract(_CampaignFactory.ABI, _contract.contractAddress);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJldGgiLCJDb250cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBUyxBQUFULEFBQW9CLEFBQXBCOztBQUNBLEFBQVMsQUFBVCxBQUFnQyxBQUFoQyxBQUVBOzs7O2tCQUFlLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixBQUFzQixBQUF0QixBQUEyQixBQUEzQixBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRDoveGFtcHAvaHRkb2NzL2Jsb2NrY2hhaW4tY3JvdWQtZnVuZGluZy1hcHBsaWNhdGlvbiJ9