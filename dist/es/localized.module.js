var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { LocalizedComponent } from './localized.component';
import { MessagesComponent } from './messages.component';
var COMPONENT_DIRECTIVES = [LocalizedComponent, MessagesComponent];
/**
 * Base module
 */
var LocalizedModule = (function () {
    function LocalizedModule() {
    }
    return LocalizedModule;
}());
LocalizedModule = __decorate([
    NgModule({
        declarations: [COMPONENT_DIRECTIVES],
        exports: [COMPONENT_DIRECTIVES]
    })
], LocalizedModule);
export { LocalizedModule };
