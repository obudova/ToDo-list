'use strict';

var _toDoBuilder = require('./toDoBuilder');

var _toDoBuilder2 = _interopRequireDefault(_toDoBuilder);

var _sw = require('./sw');

var _sw2 = _interopRequireDefault(_sw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = new _toDoBuilder2.default(document.querySelector('.board'));
(0, _sw2.default)();