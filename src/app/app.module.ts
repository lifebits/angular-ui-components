import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { IspButton } from './button';
import { OverlayModuleCustom } from './overlay/overlay.module';

// import { PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER, PARENT_OR_NEW_MENU_STACK_PROVIDER } from '@angular/cdk/menu';
import { PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER, PARENT_OR_NEW_MENU_STACK_PROVIDER } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IspButton,
    OverlayModuleCustom,
  ],
  providers: [PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER('vertical'),],
  bootstrap: [AppComponent]
})
export class AppModule { }
