(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{858:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),c=n.n(i),a=n(11),l=n.n(a),s=n(4),u=n.n(s),p=n(6),f=n.n(p),y=n(10),b=n(207);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=u.a.bind({"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___2dtgA","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___1vN_Z","section-header":"SectionHeader-module__section-header___35ADh","is-interactable":"SectionHeader-module__is-interactable___2xmsi","is-active":"SectionHeader-module__is-active___2oHH7","is-transparent":"SectionHeader-module__is-transparent___2MOds",title:"SectionHeader-module__title___pX59R","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___30qX5","accordion-icon":"SectionHeader-module__accordion-icon___2C_Fz","is-open":"SectionHeader-module__is-open___2CIL2"}),E={title:c.a.string.isRequired,onClick:c.a.func,isOpen:c.a.bool,level:c.a.oneOf([1,2,3,4,5,6]),isTransparent:c.a.bool},C={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},K=function(e){return e.nativeEvent.keyCode===y.KEY_RETURN||e.nativeEvent.keyCode===y.KEY_SPACE},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,i=j(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(g(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(g(t)),t}return t=c,(n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){K(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){K(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.onClick,r=e.isOpen,i=e.isTransparent,c=e.level,a=m(e,["title","onClick","isOpen","isTransparent","level"]),s=this.context,u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);n&&(u.tabIndex="0",u.onKeyDown=this.wrapOnKeyDown(u.onKeyDown),u.onKeyUp=this.wrapOnKeyUp(u.onKeyUp),u.role="button");var p=k(["accordion-icon",{"is-open":n&&r}]),f=o.a.createElement("div",{className:k("accordion-icon-wrapper")},o.a.createElement("span",{className:p})),y=l()(k("section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":i},s.className),a.className),_="h".concat(c);return o.a.createElement("div",d({},u,{onClick:n,className:y}),o.a.createElement(b.default,{fitStart:n&&f,fill:o.a.createElement(_,{className:k("title")},t)}))}}])&&h(t.prototype,n),r&&h(t,r),c}(o.a.Component);D.propTypes=E,D.defaultProps=C,D.contextType=f.a;t.a=D}}]);