import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { ButtonModule, IspButton } from './button';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IspButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
