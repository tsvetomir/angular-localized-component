import { Component, OnInit, forwardRef } from '@angular/core';
import { Message, props } from './messages.base';

@Component({
  providers: [
      {
          provide: Message,
          useExisting: forwardRef(() => CustomMessagesComponent)// tslint:disable-line:no-forward-ref
      }
  ],
  selector: 'component-messages',
  template: ``
})
export class CustomMessagesComponent extends Message implements OnInit{

    ngOnInit() {
        console.log('register custom messages');
        props.forEach(key => {
            this.service.register(key, this[key]);
        });
    }
}

