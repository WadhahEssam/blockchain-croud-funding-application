webpackHotUpdate("static\\development\\pages\\campaigns\\new.js",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");

var _jsxFileName = "D:\\xampp\\htdocs\\blockchain-croud-funding-application\\pages\\campaigns\\new.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var NewCampaign =
/*#__PURE__*/
function (_Component) {
  _inherits(NewCampaign, _Component);

  function NewCampaign() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewCampaign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewCampaign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      loading: false,
      responseMessage: '',
      responseColor: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // creating a new campaign
                // we don't have to specify the amount of gas 
                // cuz metamask is going to do that automatically

                _this.setState({
                  value: '',
                  loading: true
                });

                _context.next = 4;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__["default"].eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__["default"].methods.createCampaign(_this.state.value).send({
                  from: accounts[0]
                }).then(function (response) {
                  _this.setState({
                    loading: false
                  });
                }).catch(function (error) {
                  _this.setState({
                    loading: false
                  });
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(NewCampaign, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.s, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        inverted: true,
        color: this.state.responseColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.responseMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Create a Campaign"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Minimum Contribution :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
        loading: this.state.loading
      }, this.state.loading ? {
        iconPosition: 'left'
      } : {}, {
        disabled: this.state.loading,
        label: "wei",
        labelPosition: "right",
        type: "number",
        value: this.state.value,
        onChange: function onChange(e) {
          _this2.setState({
            value: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Create"))));
    }
  }]);

  return NewCampaign;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewCampaign);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=new.js.6f60c178680696c320d5.hot-update.js.map