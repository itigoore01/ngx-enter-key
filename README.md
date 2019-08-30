[![Build Status](https://travis-ci.org/itigoore01/ngx-enter-key.svg?branch=master)](https://travis-ci.org/itigoore01/ngx-enter-key)
[![npm version](https://badge.fury.io/js/ngx-enter-key.svg)](https://badge.fury.io/js/ngx-enter-key)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# ngx-enter-key

Does not trigger enter key pressed during composing input.

## Installation

```bash
npm install --save ngx-enter-key
```

## Usage

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEnterKeyModule } from 'ngx-enter-key';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        NgxEnterKeyModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

```typescript
@Component({
  selector: 'app-form',
  template: `
  <input (ngxEnterKey)="onEnterKey($event)">
  `
})
export class FormComponent {

  onEnterKey(event: KeyboardEvent) {
    console.log(event);
  }

}
```
