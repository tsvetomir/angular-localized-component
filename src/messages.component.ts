import { Component, Input } from '@angular/core';

@Component({
  selector: 'localized-component-messages',
  template: `{{hello}}`
})
export class MessagesComponent {
    @Input()
    public hello: string;
}

