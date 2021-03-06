'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = init;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _immutable = require('immutable');

var _appLoader = require('./appLoader');

var _appLoader2 = _interopRequireDefault(_appLoader);

var _appMiddleware = require('./appMiddleware');

var _appMiddleware2 = _interopRequireDefault(_appMiddleware);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _appFactory = require('./appFactory');

var _appFactory2 = _interopRequireDefault(_appFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(option) {
	(0, _config2.default)(option);

	var currentConfig = _config2.default.current;

	if (currentConfig.apps) _appFactory2.default.registerApps(currentConfig.apps);

	var mw = [(0, _appMiddleware2.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];

	if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);

	var store = (0, _redux.createStore)(_reducer2.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(mw)));

	window.reduxStore = store;
	window.__mk_store__ = store;
}
module.exports = exports['default'];