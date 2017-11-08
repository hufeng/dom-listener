"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DOMListener = /** @class */ (function (_super) {
    __extends(DOMListener, _super);
    function DOMListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleEvent = function (e) {
            _this.props.handleEvent(e);
        };
        return _this;
    }
    DOMListener.prototype.componentDidMount = function () {
        for (var _i = 0, _a = this.props.events; _i < _a.length; _i++) {
            var e = _a[_i];
            if (window.addEventListener) {
                window.addEventListener(e.toLocaleLowerCase(), this._handleEvent, false);
            }
            else {
                //IE
                window.attachEvent("on" + e.toLowerCase(), this._handleEvent);
            }
        }
    };
    DOMListener.prototype.componentWillUnmount = function () {
        for (var _i = 0, _a = this.props.events; _i < _a.length; _i++) {
            var e = _a[_i];
            if (window.removeEventListener) {
                window.removeEventListener(e.toLowerCase(), this._handleEvent, false);
            }
            else {
                //IE
                window.detachEvent(e.toLowerCase(), this._handleEvent);
            }
        }
    };
    DOMListener.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    DOMListener.defaultProps = {
        events: [],
        handleEvent: function () { }
    };
    return DOMListener;
}(React.Component));
exports.default = DOMListener;
