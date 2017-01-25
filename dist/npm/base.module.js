"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var base_component_1 = require("./base.component");
var messages_component_1 = require("./messages.component");
var COMPONENT_DIRECTIVES = [base_component_1.BaseComponent, messages_component_1.MessagesComponent];
/**
 * Base module
 */
var BaseModule = (function () {
    function BaseModule() {
    }
    return BaseModule;
}());
BaseModule = __decorate([
    core_1.NgModule({
        declarations: [COMPONENT_DIRECTIVES],
        exports: [COMPONENT_DIRECTIVES]
    })
], BaseModule);
exports.BaseModule = BaseModule;
