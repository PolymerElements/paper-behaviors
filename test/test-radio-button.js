import '../../polymer/polymer.js';
import { PaperCheckedElementBehavior } from '../paper-checked-element-behavior.js';
import '../../paper-ripple/paper-ripple.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host #ink {
        position: absolute;
        top: -16px;
        left: -16px;
        width: 48px;
        height: 48px;
      }
    </style>
    
    <div id="container">
      <paper-ripple id="ink" class="circle" center=""></paper-ripple>
    </div>
`,

  is: 'test-radio-button',

  behaviors: [
    PaperCheckedElementBehavior
  ]
});
