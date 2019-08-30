[![Build Status](https://travis-ci.org/itigoore01/ngx-enter-key.svg?branch=master)](https://travis-ci.org/itigoore01/ngx-enter-key)
[![npm version](https://badge.fury.io/js/ngx-enter-key.svg)](https://badge.fury.io/js/ngx-enter-key)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# ngx-enter-key

## Installation

```bash
npm install --save ngx-enter-key
```

## Usage

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
