import { Directive, HostListener, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[ngxEnterKey]'
})
export class NgxEnterKeyDirective {

  @Output('ngxEnterKey')
  readonly enterKey = new EventEmitter<KeyboardEvent>();

  private support: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: any
  ) {
    this.support = isPlatformBrowser(platformId) && 'isComposing' in KeyboardEvent.prototype;
  }

  @HostListener('keydown.enter', ['$event'])
  _onKeydownEnter(event: KeyboardEvent) {
    // サポートされていないブラウザではイベントをそのまま通す
    if (!this.support) {
      this.enterKey.emit(event);
      return;
    }

    const isComposing = (event as any || { isComposing: false }).isComposing as boolean;

    if (!isComposing) {
      this.enterKey.emit(event);
    }
  }

}
