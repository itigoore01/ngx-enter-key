import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEnterKeyDirective } from './ngx-enter-key.directive';

@NgModule({
  declarations: [NgxEnterKeyDirective],
  exports: [NgxEnterKeyDirective],
  imports: [
    CommonModule
  ]
})
export class NgxEnterKeyModule { }
