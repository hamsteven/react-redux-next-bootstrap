'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/steven/Documents/GitHub/ham/invision/example/with-redux/pages/other.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { title: 'Other Page', linkTo: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());
      return { isServer: isServer };
    }
  }]);

  return Counter;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_store.startClock, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL290aGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwic3RhcnRDbG9jayIsImFkZENvdW50Iiwic2VydmVyUmVuZGVyQ2xvY2siLCJ3aXRoUmVkdXgiLCJQYWdlIiwiQ291bnRlciIsInRpbWVyIiwicHJvcHMiLCJjbGVhckludGVydmFsIiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFZLEFBQVUsQUFBeUI7O0FBQ25FLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7O3dDQU9pQixBQUNuQjtXQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBbEIsQUFBYSxBQUFXLEFBQ3pCOzs7OzJDQUV1QixBQUN0QjtvQkFBYyxLQUFkLEFBQW1CLEFBQ3BCOzs7OzZCQUVTLEFBQ1I7NkJBQ0UsQUFBQyxnQ0FBSyxPQUFOLEFBQVksY0FBYSxRQUF6QixBQUFnQztvQkFBaEM7c0JBREYsQUFDRSxBQUVIO0FBRkc7T0FBQTs7OzswQ0FoQnlDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztZQUFBLEFBQU0sU0FBUyw4QkFBZixBQUFlLEFBQWtCLEFBQ2pDO1lBQUEsQUFBTSxTQUFOLEFBQWUsQUFDZjthQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7Ozs7O0VBTG1CLGdCQUFNLEE7O0FBc0I1QixJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7Z0JBQVksQUFBbUIsa0RBRmpDLEFBQU8sQUFFTyxBQUErQixBQUU5QztBQUpRLEFBQ0w7QUFGSixBQU9BOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXJCLEFBQTJCLG9CQUExQyxBQUFlLEFBQStDIiwiZmlsZSI6Im90aGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW4vRG9jdW1lbnRzL0dpdEh1Yi9oYW0vaW52aXNpb24vZXhhbXBsZS93aXRoLXJlZHV4In0=