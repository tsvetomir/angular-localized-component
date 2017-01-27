import { Component } from '@angular/core';
import { LocalizationService } from './localization.service';

/**
 * A sample component
 *
 */
@Component({
  providers: [LocalizationService],
  selector: 'localized-component',
  template: `
    <div>
        {{
            service.get('hello')
        }}
      <localized-component-messages
        i18n-hello="localized-component-hello" hello="Hello from Localized Component">
      </localized-component-messages>
    </div>
  `
})
export class LocalizedComponent {
    constructor(public service: LocalizationService) {}
}

