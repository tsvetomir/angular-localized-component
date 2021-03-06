import { Component, OnInit, forwardRef } from '@angular/core';
import { Message, props } from './messages.base';

@Component({
  providers: [
      {
          provide: Message,
          useExisting: forwardRef(() => LocalizedMessagesComponent)// tslint:disable-line:no-forward-ref
      }
  ],
  selector: 'localized-component-messages',
  template: ``
})
export class LocalizedMessagesComponent extends Message implements OnInit{

    ngOnInit() {
        console.log('register localized messages');
        props.forEach(key => {
            this.service.register(key, this[key]);
        });
    }
}
