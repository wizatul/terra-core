(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1608:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(100);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,i=a(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=i.call(this)).state={show:!0},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(s(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(s(e)),e}return t=f,(n=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return this.state.show?o.a.createElement(u.default,{isOpen:!0,onRequestClose:this.handleOnRequestESC,id:"fullscreen_overlay",zIndex:"6000"},o.a.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),o.a.createElement("br",null),o.a.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key.")):null}}])&&c(t.prototype,n),r&&c(t,r),f}(o.a.Component);t.default=y}}]);