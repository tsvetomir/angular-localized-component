"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * A sample component
 *
 */
var BaseComponent = (function () {
    function BaseComponent() {
    }
    return BaseComponent;
}());
BaseComponent = __decorate([
    core_1.Component({
        selector: 'kendo-component',
        template: "<div><kendo-component-messages i18n-hello=\"kendo-component-hello\" hello=\"Hello from Kendo UI\"></kendo-component-messages></div>"
    })
], BaseComponent);
exports.BaseComponent = BaseComponent;
