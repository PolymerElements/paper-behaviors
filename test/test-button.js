import '../../polymer/polymer.js';
import { PaperButtonBehavior } from '../paper-button-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <slot></slot>
`,

  is: 'test-button',

  behaviors: [
    PaperButtonBehavior
  ]
});
