(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1430:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),o=n(205),a=n(812),i=n(957);t.default=function(){return l.a.createElement(i.a,{legend:"I am the Hidden Legend",help:"Families are eligible for family package plans",required:!0,isLegendHidden:!0},l.a.createElement(o.a,{label:"First",isInline:!0,required:!0,htmlFor:"first"},l.a.createElement(a.a,{id:"first",type:"text",name:"first",defaultValue:""})),l.a.createElement(o.a,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},l.a.createElement(a.a,{id:"middle",type:"text",name:"middle",defaultValue:""})),l.a.createElement(o.a,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},l.a.createElement(a.a,{id:"last",type:"text",name:"last",defaultValue:""})))}},812:function(e,t,n){"use strict";var r=n(0),l=n.n(r),o=n(1),a=n.n(o),i=n(11),u=n.n(i),c=n(4),s=n.n(c),d=n(6),f=n.n(d);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var l=w(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=s.a.bind({"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2i8DL","orion-fusion-theme":"Input-module__orion-fusion-theme___2Cscj","form-input":"Input-module__form-input___3YNQv","form-error":"Input-module__form-error___DFrVY","form-incomplete":"Input-module__form-incomplete___1Jx-6"}),P={defaultValue:a.a.oneOfType([a.a.string,a.a.number]),disabled:a.a.bool,isIncomplete:a.a.bool,isInvalid:a.a.bool,onBlur:a.a.func,onChange:a.a.func,onFocus:a.a.func,onInput:a.a.func,name:a.a.string,pattern:a.a.string,refCallback:a.a.func,required:a.a.bool,type:a.a.string,value:a.a.oneOfType([a.a.string,a.a.number]),ariaLabel:a.a.string},q={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o=O(a);function a(){return h(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,o=t.isIncomplete,a=t.isInvalid,i=t.onBlur,c=t.onChange,s=t.onFocus,d=t.onInput,f=t.name,p=t.pattern,h=t.refCallback,g=t.required,v=t.type,O=t.ariaLabel,j=t.value,w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},_(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,q=u()(I("form-input",{"form-error":a},{"form-incomplete":o&&g&&!a},P.className),w.className);return w&&Object.prototype.hasOwnProperty.call(w,"aria-label")?e=O||w["aria-label"]:O&&(e=O),w["aria-label"]=e,g&&(w["aria-required"]="true"),void 0!==j?w.value=j:void 0!==n&&(w.defaultValue=n),w.placeholder&&(w.placeholder=null),l.a.createElement("input",m({},w,{ref:function(e){h&&h(e)},name:f,type:v,pattern:p,onBlur:i,onChange:c,onFocus:s,onInput:d,disabled:r,required:g,className:q}))}}])&&g(t.prototype,n),r&&g(t,r),a}(l.a.Component);x.propTypes=P,x.defaultProps=q,x.contextType=f.a,x.isInput=!0;t.a=x},957:function(e,t,n){"use strict";var r=n(0),l=n.n(r),o=n(1),a=n.n(o),i=n(11),u=n.n(i),c=n(4),s=n.n(c),d=n(6),f=n.n(d);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=s.a.bind({"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___3t2xi","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___30dHA",fieldset:"Fieldset-module__fieldset___288Ll","fieldset-required":"Fieldset-module__fieldset-required___2qdQq",legend:"Fieldset-module__legend___z993f","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___3tCgx","help-text":"Fieldset-module__help-text___3D6sI","fieldset-children":"Fieldset-module__fieldset-children___v80HG"}),y={children:a.a.node,help:a.a.node,legend:a.a.string,legendAttrs:a.a.object,required:a.a.bool,isLegendHidden:a.a.bool},_=function(e){var t=e.children,n=e.help,r=e.legend,o=e.legendAttrs,a=e.isLegendHidden,i=e.required,c=m(e,["children","help","legend","legendAttrs","isLegendHidden","required"]),s=l.a.useContext(f.a),d=u()(b(["fieldset",{"fieldset-required":i},s.className]),c.className),y=b(["legend",o.className,{"legend-visually-hidden":a}]);return l.a.createElement("fieldset",p({},c,{className:d}),r&&l.a.createElement("legend",p({},o,{className:y}),r),n&&l.a.createElement("small",{className:b("help-text"),tabIndex:"-1"},n),l.a.createElement("div",{className:b("fieldset-children")},t))};_.propTypes=y,_.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};t.a=_}}]);