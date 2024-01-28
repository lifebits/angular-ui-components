import {Component, Inject, inject, InjectionToken, Optional, SkipSelf} from '@angular/core';
import { MenuStack } from '@angular/cdk/menu';

export const MENU_STACK = new InjectionToken<MenuStack>('cdk-menu-stack');

/** Provider that provides the parent menu stack, or a new menu stack if there is no parent one. */
export const PARENT_OR_NEW_MENU_STACK_PROVIDER = {
  provide: MENU_STACK,
  deps: [[new Optional(), new SkipSelf(), new Inject(MENU_STACK)]],
  useFactory: (parentMenuStack?: MenuStack) => parentMenuStack || new MenuStack(),
};

/** Provider that provides the parent menu stack, or a new inline menu stack if there is no parent one. */
export const PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER = (
  orientation: 'vertical' | 'horizontal',
) => ({
  provide: MENU_STACK,
  deps: [[new Optional(), new SkipSelf(), new Inject(MENU_STACK)]],
  useFactory: (parentMenuStack?: MenuStack) => parentMenuStack || MenuStack.inline(orientation),
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-16'

  private readonly _menuStack = inject(MENU_STACK);

  onClick() {
    console.log('ON_CLICK');
    this._menuStack.closeAll({focusParentTrigger: true});
  }

  trigger(options?: {keepOpen: boolean}) {
    // const {keepOpen} = {...options};
    // if (!this.disabled && !this.hasMenu) {
    //   this.triggered.next();
    //   if (!keepOpen) {
    //     this._menuStack.closeAll({focusParentTrigger: true});
    //   }
    // }
  }
}
