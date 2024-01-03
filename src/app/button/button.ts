import {ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation} from "@angular/core";

import { IspButtonBase } from './button-base';

@Component({
  selector: `button[isp-button], button[isp-solid-button], button[isp-outlined-button]`,
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  host: {
    '[class]': 'color ? "isp-" + color : "isp-primary"',
    '[class.isp-button--small]': 'size === "small"',
    '[class.isp-button--large]': 'size === "large"'
  },
  exportAs: 'ispButton',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IspButton extends IspButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
