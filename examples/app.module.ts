import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BaseModule } from '../src/base.module';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, BaseModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
