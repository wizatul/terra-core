(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1701:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(316),c=n(848),u=r.a.createElement(i.default,null);t.default=function(){return r.a.createElement(c.a,{icon:u,text:"Icon Tag",id:"iconTag"})}},848:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i),u=n(11),a=n.n(u),l=n(4),s=n.n(l),f=n(6),p=n.n(f),y=n(10);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=s.a.bind({"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___4QhDW","orion-fusion-theme":"Tag-module__orion-fusion-theme___BneaB",tag:"Tag-module__tag___2lysh","is-interactive":"Tag-module__is-interactive___1N9Dq","is-focused":"Tag-module__is-focused___F5hvj",icon:"Tag-module__icon___3iAGl"}),B={href:c.a.string,icon:c.a.element,onClick:c.a.func,onBlur:c.a.func,onFocus:c.a.func,onKeyUp:c.a.func,text:c.a.string.isRequired},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,i=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(O(t)),t.handleOnBlur=t.handleOnBlur.bind(O(t)),t}return t=c,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===y.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,i=e.onClick,c=(e.onBlur,e.onFocus),u=(e.onKeyUp,_(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),l=this.context,s=a()(j("tag",{"is-focused":this.state.focused},{"is-interactive":o||i},l.className),u.className),f=j("icon"),p=t?r.a.createElement("span",{className:f},t):null,y=o||i?o?"a":"button":"span";return r.a.createElement(y,d({},u,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:i,onFocus:c,href:o}),p,n)}}])&&b(t.prototype,n),o&&b(t,o),c}(r.a.Component);T.propTypes=B,T.contextType=p.a;t.a=T}}]);