import { NgModule }       from '@angular/core';
import { LocalizedComponent } from './localized.component';
import { LocalizedMessagesComponent } from './messages.component';
import { CustomMessagesComponent } from './custom.messages.component';

/**
 * Base module
 */
@NgModule({
    declarations: [
        LocalizedComponent,
        LocalizedMessagesComponent,
        CustomMessagesComponent
    ],
    exports: [
        LocalizedComponent,
        CustomMessagesComponent
    ]
})
export class LocalizedModule {}

