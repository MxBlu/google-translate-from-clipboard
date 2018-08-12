#!/usr/bin/env node

const clipboard = require('clipboardy');
const gt = require('google-translate-api');
const dialog = require('dialog');

const lang = 'en';

let originalText = '';
clipboard.read()
.then((data) => {
  originalText = data;
  return gt(data, { to: lang });
})
.then((res) => {
  dialog.info(res.text, 'Translation');
})
.catch(err => {
  dialog.err(err.message || 'Unknown Error', 'Error');
});
