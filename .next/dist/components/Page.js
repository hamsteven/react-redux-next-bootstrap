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

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/steven/Documents/GitHub/ham/invision/example/with-redux/components/Page.js';
// import { Button } from 'react-bootstrap'

// import Layout                 from '../components/Layout';


// const buttonsInstance = (
//   <ButtonToolbar>
//     {/* Standard button */}
//     <Button>Default</Button>

//     {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//     <Button bsStyle="primary">Primary</Button>

//     {/* Indicates a successful or positive action */}
//     <Button bsStyle="success">Success</Button>

//     {/* Contextual button for informational alert messages */}
//     <Button bsStyle="info">Info</Button>

//     {/* Indicates caution should be taken with this action */}
//     <Button bsStyle="warning">Warning</Button>

//     {/* Indicates a dangerous or potentially negative action */}
//     <Button bsStyle="danger">Danger</Button>

//     {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//     <Button bsStyle="link">Link</Button>
//   </ButtonToolbar>
// );

// const jumbotronInstance = (
//   <Jumbotron>
//     <h1>Hello, world!</h1>
//     <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//     <p><Button bsStyle="primary">Learn more</Button></p>
//   </Jumbotron>
// );

// ReactDOM.render(jumbotronInstance, mountNode);

// ReactDOM.render(buttonsInstance, mountNode);
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
      lineNumber: 51
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Simply Social'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/custom.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), _react2.default.createElement(_Nav2.default, { className: 'navbar navbar-light bg-light justify-content-between', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement('a', { className: 'navbar-brand', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, 'Navbar'), _react2.default.createElement(_Form2.default, { className: 'form-inline', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement(_Button2.default, { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, 'Search'))), _react2.default.createElement(_Jumbotron2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Hello, world!'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_Button2.default, { bsStyle: 'primary', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, 'Learn more'))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }), _react2.default.createElement(_Button2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, 'Default'), _react2.default.createElement(_AddCount2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, 'Navigate')))));
});


{/* <Layout>
         <Nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Navbar</a>
          <Form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
          </Form>
        </Nav>
         <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
         <div>
          <h1>{title}</h1>
          <Clock lastUpdate={lastUpdate} light={light} />
          <Button>Default</Button>
          <AddCount />
          <nav>
            <Link href={linkTo}><a>Navigate</a></Link>
          </nav>
        </div>
   
      </Layout> */}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkNsb2NrIiwiQWRkQ291bnQiLCJCdXR0b24iLCJKdW1ib3Ryb24iLCJOYXYiLCJGb3JtIiwiSGVhZCIsInN0YXRlIiwidGl0bGUiLCJsaW5rVG8iLCJsYXN0VXBkYXRlIiwibGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7O0FBTlA7O0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxBQUNBOzJDQUF1QixpQkFBQTtTQUFBLEFBQVM7QUFBakIsQ0FBQSxFQUF3QixnQkFBMEM7TUFBdkMsQUFBdUMsYUFBdkMsQUFBdUM7TUFBaEMsQUFBZ0MsY0FBaEMsQUFBZ0M7TUFBeEIsQUFBd0Isa0JBQXhCLEFBQXdCO01BQVosQUFBWSxhQUFaLEFBQVksQUFDL0U7O3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDBEQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBSEYsQUFHRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQUxKLEFBQ0UsQUFJRSxBQUdGO0FBSEU7dUJBR0YsQUFBQywrQkFBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSwyQkFBQSxBQUFDLGdDQUFLLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjs4Q0FDUyxXQUFQLEFBQWlCLHdCQUF1QixNQUF4QyxBQUE2QyxVQUFTLGFBQXRELEFBQWtFLFVBQVMsY0FBM0UsQUFBc0Y7Z0JBQXRGO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUMsa0NBQU8sV0FBUixBQUFrQix3Q0FBdUMsTUFBekQsQUFBOEQ7Z0JBQTlEO2tCQUFBO0FBQUE7S0FaTixBQVFFLEFBRUUsQUFFRSxBQUlKLDZCQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EsbUpBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBRztBQUFIO0FBQUEscUJBQUcsQUFBQyxrQ0FBTyxTQUFSLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBbkJQLEFBZ0JFLEFBR0UsQUFBRyxBQUdMLGlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBREYsQUFDRSxBQUNBLHdCQUFBLEFBQUMsaUNBQU0sWUFBUCxBQUFtQixZQUFZLE9BQS9CLEFBQXNDO2dCQUF0QztrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFBQTtBQUFBO0FBQUEsS0FIRixBQUdFLEFBQ0EsNEJBQUEsQUFBQzs7Z0JBQUQ7a0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUFvQjtBQUFwQjtxQkFBb0IsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBN0I1QixBQUNFLEFBc0JFLEFBS0UsQUFDRSxBQUFvQixBQUs3QjtBQW5DRCxBQUFlOzs7QUF1Q2YsQ0FBQyxBQTJCZ0IiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVuL0RvY3VtZW50cy9HaXRIdWIvaGFtL2ludmlzaW9uL2V4YW1wbGUvd2l0aC1yZWR1eCJ9