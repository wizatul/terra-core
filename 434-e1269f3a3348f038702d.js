(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{1715:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(810);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}e.default=function(){var t=r(Object(i.useState)(!1),2),e=t[0],n=t[1];return a.a.createElement("div",null,a.a.createElement("button",{type:"button",id:"trigger-toggle",onClick:function(){n(!e)},"aria-expanded":e,"aria-controls":"toggle"},"Animated Toggle"),a.a.createElement(o.a,{id:"toggle",isOpen:e,isAnimated:!0},a.a.createElement("p",null,"Lorem ipsum dolor sit amet,",a.a.createElement("a",{id:"link",href:"#test"},"consectetur")," ","adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"text-input"},"Text input"),a.a.createElement("input",{id:"text-input",className:"test",type:"text"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),a.a.createElement("select",{id:"select-field"},a.a.createElement("option",null,"Option 01"),a.a.createElement("option",null,"Option 02"))),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"textarea"},"Textarea"),a.a.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("button",{type:"button",id:"button"},"button"))))}},810:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(4),l=n.n(s),u=n(811),c=n.n(u);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var f=l.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),d={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},p=function(t){var e,n=t.isAnimated,i=t.isOpen,o=t.children,r=m(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?a.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},o):i&&o,a.a.createElement("div",h({},r,{className:f("toggle",r.className),"aria-hidden":!i}),e)};p.propTypes=d,p.defaultProps={isAnimated:!1,isOpen:!1};e.a=p},811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),s=u(n(1)),l=u(n(11));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";p(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.delay,s=o.duration,u=o.height,h=o.onAnimationEnd,m=o.onAnimationStart;if(this.contentElement&&u!==t.height){var f;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=s+r,S=null,E={height:null,overflow:"hidden"},w="auto"===e.height;p(u)?(S=u<0||"0"===u?0:u,E.height=S):g(u)?(S="0%"===u?0:u,E.height=S):(S=b,E.height="auto",E.overflow=null),w&&(E.height=S,S=b);var O=(0,l.default)((c(f={},this.animationStateClasses.animating,!0),c(f,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(f,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(f,this.animationStateClasses.animatingToHeightZero,0===E.height),c(f,this.animationStateClasses.animatingToHeightAuto,"auto"===E.height),c(f,this.animationStateClasses.animatingToHeightSpecific,E.height>0),f)),C=this.getStaticStateClasses(E.height);this.setState({animationStateClasses:O,height:S,overflow:"hidden",shouldUseTransitions:!w}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),w?(E.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(E),y(m,{newHeight:E.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:C,shouldUseTransitions:!1}),a.hideContent(E.height),y(h,{newHeight:E.height})}),v)):(y(m,{newHeight:S}),this.timeoutID=setTimeout((function(){E.animationStateClasses=C,E.shouldUseTransitions=!1,a.setState(E),"auto"!==u&&a.hideContent(S),y(h,{newHeight:S})}),v))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,u=n.className,h=n.contentClassName,d=n.delay,p=n.duration,g=n.easing,y=n.id,b=n.style,v=this.state,S=v.height,E=v.overflow,w=v.animationStateClasses,O=v.shouldUseTransitions,C=a({},b,{height:S,overflow:E||b.overflow});O&&o&&(C.transition="height "+p+"ms "+g+" "+d+"ms",b.transition&&(C.transition=b.transition+", "+C.transition),C.WebkitTransition=C.transition);var T={};i&&(T.transition="opacity "+p+"ms "+g+" "+d+"ms",T.WebkitTransition=T.transition,0===S&&(T.opacity=0));var A=(0,l.default)((c(t={},w,!0),c(t,u,u),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===S;return r.default.createElement("div",a({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":j,className:A,id:y,style:C}),r.default.createElement("div",{className:h,style:T,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);