import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BgResultadoDirective } from './bg-resultado.directive';
import { BgHeaderDirective } from './bg-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    BgResultadoDirective,
    BgHeaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
