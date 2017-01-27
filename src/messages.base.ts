import { Input } from '@angular/core';
import { LocalizationService } from './localization.service';

const HELLO = 'hello';

export const props = [
    HELLO
];

//ts doesn't support es computed properties
export class Message {
    constructor(protected service: LocalizationService) {}

    @Input() public hello: string;
}
