'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/steven/Documents/GitHub/ham/invision/example/with-redux/components/Clock.js';

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    className: 'jsx-3148902309' + ' ' + ((light ? 'light' : '') || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: '3148902309',
    css: 'div.jsx-3148902309{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-3148902309{background-color:#999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3dCLEFBUVMsYUFQRCxTQVF2QixZQVBnQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9DbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVuL0RvY3VtZW50cy9HaXRIdWIvaGFtL2ludmlzaW9uL2V4YW1wbGUvd2l0aC1yZWR1eCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGlnaHQgPyAnbGlnaHQnIDogJyd9PlxuICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICM4MkZBNTg7XG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcblxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogblxuIl19 */\n/*@ sourceURL=components/Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOlsibGFzdFVwZGF0ZSIsImxpZ2h0IiwiZm9ybWF0IiwiRGF0ZSIsInBhZCIsInQiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztrQkFBZSxnQkFBMkI7TUFBeEIsQUFBd0Isa0JBQXhCLEFBQXdCO01BQVosQUFBWSxhQUFaLEFBQVksQUFDeEM7O3lCQUNFLGNBQUE7MENBQWdCLFFBQUEsQUFBUSxVQUF4QixBQUFrQyxPQUFsQzs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxTQUNVLElBQUEsQUFBSSxLQURkLEFBQ0csQUFBTyxBQUFTO2FBRG5CO1NBREYsQUFDRSxBQWlCSDtBQWpCRztBQUZKOztBQXFCQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFVBQUE7U0FBUSxJQUFJLEVBQVosQUFBUSxBQUFJLEFBQUUsdUJBQWtCLElBQUksRUFBcEMsQUFBZ0MsQUFBSSxBQUFFLHlCQUFvQixJQUFJLEVBQTlELEFBQTBELEFBQUksQUFBRTtBQUEvRTs7QUFFQSxJQUFNLE1BQU0sU0FBTixBQUFNLE9BQUE7U0FBSyxJQUFBLEFBQUksV0FBSixBQUFhLElBQWxCLEFBQXdCO0FBQXBDIiwiZmlsZSI6IkNsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW4vRG9jdW1lbnRzL0dpdEh1Yi9oYW0vaW52aXNpb24vZXhhbXBsZS93aXRoLXJlZHV4In0=