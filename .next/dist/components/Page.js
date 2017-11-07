'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _AddCount = require('./AddCount');

var _AddCount2 = _interopRequireDefault(_AddCount);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Jumbotron = require('react-bootstrap/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/steven/Documents/GitHub/ham/invision/example/with-redux/components/Page.js';
// import { Button } from 'react-bootstrap'


// TODO: NEXT, on the second page make a div with an input amd figure out where the number is being stored and store it there.


exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Simply Social'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/custom.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), _react2.default.createElement(_Nav2.default, { className: 'navbar navbar-dark bg-dark', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', { className: 'navbar-brand', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Navbar'), _react2.default.createElement(_Form2.default, { className: 'form-inline pull-right', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement(_Button2.default, { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Search'))), _react2.default.createElement(_Jumbotron2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Hello, world!'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_Button2.default, { bsStyle: 'primary', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Learn more')), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, 'Navigate'))), _react2.default.createElement(_Nav2.default, { bsStyle: 'tabs', activeKey: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_NavItem2.default, { eventKey: '1', href: '/other', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'ALL POSTS'), _react2.default.createElement(_NavItem2.default, { eventKey: '2', title: 'Item', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, 'PHOTOS'), _react2.default.createElement(_NavItem2.default, { eventKey: '3', title: 'NextItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'VIDEOS'))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), _react2.default.createElement(_Button2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Default'), _react2.default.createElement(_AddCount2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkNsb2NrIiwiQWRkQ291bnQiLCJCdXR0b24iLCJKdW1ib3Ryb24iLCJOYXYiLCJOYXZJdGVtIiwiRm9ybSIsIkhlYWQiLCJzdGF0ZSIsInRpdGxlIiwibGlua1RvIiwibGFzdFVwZGF0ZSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYzs7OztBQUVyQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFOUDs7O0FBYUEsQUFRQTs7OzJDQUF1QixpQkFBQTtTQUFBLEFBQVM7QUFBakIsQ0FBQSxFQUF3QixnQkFBMEM7TUFBdkMsQUFBdUMsYUFBdkMsQUFBdUM7TUFBaEMsQUFBZ0MsY0FBaEMsQUFBZ0M7TUFBeEIsQUFBd0Isa0JBQXhCLEFBQXdCO01BQVosQUFBWSxhQUFaLEFBQVksQUFDL0U7O3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDBEQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBSEYsQUFHRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQUxKLEFBQ0UsQUFJRSxBQUdGO0FBSEU7dUJBR0YsQUFBQywrQkFBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSwyQkFBQSxBQUFDLGdDQUFLLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjs4Q0FDUyxXQUFQLEFBQWlCLHdCQUF1QixNQUF4QyxBQUE2QyxVQUFTLGFBQXRELEFBQWtFLFVBQVMsY0FBM0UsQUFBc0Y7Z0JBQXRGO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUMsa0NBQU8sV0FBUixBQUFrQix3Q0FBdUMsTUFBekQsQUFBOEQ7Z0JBQTlEO2tCQUFBO0FBQUE7S0FaTixBQVFFLEFBRUUsQUFFRSxBQUdKLDZCQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EsbUpBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBRztBQUFIO0FBQUEscUJBQUcsQUFBQyxrQ0FBTyxTQUFSLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBSEwsQUFHRSxBQUFHLEFBQ0gsZ0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUx4QixBQUlFLEFBQ0UsQUFBb0IsQUFleEIsK0JBQUEsQUFBQywrQkFBSSxTQUFMLEFBQWEsUUFBTyxXQUFwQixBQUE4QjtnQkFBOUI7a0JBQUEsQUFDSTtBQURKO3FCQUNJLEFBQUMsbUNBQVEsVUFBVCxBQUFrQixLQUFJLE1BQXRCLEFBQTJCO2dCQUEzQjtrQkFBQTtBQUFBO0tBREosQUFDSSxBQUNBLDhCQUFBLEFBQUMsbUNBQVEsVUFBVCxBQUFrQixLQUFJLE9BQXRCLEFBQTRCLFFBQU8sTUFBbkMsQUFBd0M7Z0JBQXhDO2tCQUFBO0FBQUE7S0FGSixBQUVJLEFBQ0EsMkJBQUEsQUFBQyxtQ0FBUSxVQUFULEFBQWtCLEtBQUksT0FBdEIsQUFBNEI7Z0JBQTVCO2tCQUFBO0FBQUE7S0F0Q04sQUFlRSxBQW9CQSxBQUdJLEFBSUosNkJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsS0FERixBQUNFLEFBQ0Esd0JBQUEsQUFBQyxpQ0FBTSxZQUFQLEFBQW1CLFlBQVksT0FBL0IsQUFBc0M7Z0JBQXRDO2tCQUZGLEFBRUUsQUFDQTtBQURBO3NCQUNBLEFBQUM7O2dCQUFEO2tCQUFBO0FBQUE7QUFBQSxLQUhGLEFBR0UsQUFDQSw0QkFBQSxBQUFDOztnQkFBRDtrQkEvQ04sQUFDRSxBQTBDRSxBQUlFLEFBS1A7QUFMTztBQUFBO0FBaERSLEFBQWUiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVuL0RvY3VtZW50cy9HaXRIdWIvaGFtL2ludmlzaW9uL2V4YW1wbGUvd2l0aC1yZWR1eCJ9