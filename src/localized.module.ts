import { NgModule }       from '@angular/core';
import { LocalizedComponent } from './localized.component';
import { MessagesComponent } from './messages.component';

const COMPONENT_DIRECTIVES: any[] = [LocalizedComponent, MessagesComponent];

/**
 * Base module
 */
@NgModule({
    declarations: [COMPONENT_DIRECTIVES],
    exports: [COMPONENT_DIRECTIVES]
})
export class LocalizedModule {}

