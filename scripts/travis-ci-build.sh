#!/bin/bash -eu
npm run lint
npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
npm run build
cp ./README.md ./dist/ngx-enter-key
cp ./LICENSE ./dist/ngx-enter-key
