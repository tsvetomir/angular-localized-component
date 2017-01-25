import { Component } from '@angular/core';

/**
 * A sample component
 *
 */
@Component({
  selector: 'localized-component',
  template: `
    <div>
      <localized-component-messages
        i18n-hello="localized-component-hello" hello="Hello from Localized Component">
      </localized-component-messages>
    </div>
  `
})
export class LocalizedComponent {
}

