import {Directive, ElementRef, Input} from '@angular/core';

/** List of classes to add to buttons instances based on host attribute selector. */
const HOST_SELECTOR_ISP_CLASS_PAIR: { attribute: string; ispClasses: string[] }[] = [
  {
    attribute: 'isp-button',
    ispClasses: ['isp-button', 'isp-button--inline'],
  },
  {
    attribute: 'isp-solid-button',
    ispClasses: ['isp-button', 'isp-button--solid'],
  },
  {
    attribute: 'isp-outlined-button',
    ispClasses: ['isp-button', 'isp-button--outlined'],
  },
];

@Directive()
export class IspButtonBase {
  /** Theme color palette of the button */
  @Input() color?: 'primary' | 'accent' | 'success' | 'error' | 'warn' | null;

  constructor(private elementRef: ElementRef) {
    const element = elementRef.nativeElement;
    const classList = (element as HTMLElement).classList;
    for (const { attribute, ispClasses} of HOST_SELECTOR_ISP_CLASS_PAIR) {
      if (element.hasAttribute(attribute)) {
        classList.add(...ispClasses);
      }
    }
  }
}
