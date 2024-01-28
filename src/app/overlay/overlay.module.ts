import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";

import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayComponent
  ]
})
export class OverlayModuleCustom { }
