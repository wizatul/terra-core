(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1332:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(7),a=n(317);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h={en:{"App.locale":"en"},"en-US":{"App.locale":"en-US"}},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,n,o,i=f(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).state={locale:"en"},e.handleSwitchLocale=e.handleSwitchLocale.bind(p(e)),e}return e=s,(n=[{key:"handleSwitchLocale",value:function(){"en"!==this.state.locale?this.setState({locale:"en"}):this.setState({locale:"en-US"})}},{key:"render",value:function(){return r.a.createElement(a.default,{locale:this.state.locale,customMessages:h[this.state.locale]},r.a.createElement("div",{id:"message"},r.a.createElement(c.FormattedMessage,{id:"App.locale"})),r.a.createElement("button",{type:"button",id:"switch",onClick:this.handleSwitchLocale},"Switch"))}}])&&u(e.prototype,n),o&&u(e,o),s}(r.a.Component);e.default=b}}]);