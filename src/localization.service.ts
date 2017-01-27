import { Injectable } from '@angular/core';

@Injectable()
export class LocalizationService {
    private dictionary = {};

    public get(key: string): string {
        return this.dictionary[key];
    }

    public register(key: string, value: string): void {
        if (!this.dictionary[key]) {
            this.dictionary[key] = value;
        }
    }
}
