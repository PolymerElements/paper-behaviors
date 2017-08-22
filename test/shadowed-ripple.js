import '../../polymer/polymer.js';
import { IronButtonState } from '../../iron-behaviors/iron-button-state.js';
import { PaperRippleBehavior } from '../paper-ripple-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { IronControlState } from '../../iron-behaviors/iron-control-state.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        width: 200px;
      }
      #separate, #wrapper {
        height: 50px;
      }
      #separate {
        background: blue;
      }
      #wrapper {
        background: red;
      }
      #wrapper > ::slotted(#source) {
        height: 25px;
        width: 50px;
        background: green;
      }
    </style>
    <div id="separate">
      <div id="target">
        Internal Text Node
      </div>
    </div>
    <div id="wrapper">
      <slot id="content"></slot>
    </div>
`,

  is: 'sd-ripple',

  behaviors: [
    IronButtonState,
    IronControlState,
    PaperRippleBehavior
  ]
});
