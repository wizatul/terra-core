(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1830:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(0),a=n.n(r),o=n(309),l=n(980),i=n(868),c=n(22),u=n(845),p=n(850),m=n(860);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(){var e=s(Object(r.useState)(),2),t=e[0],n=e[1];return a.a.createElement("div",null,a.a.createElement("label",null,"Alignment:",a.a.createElement("select",{onChange:function(e){n(e.target.value)}},a.a.createElement("option",{value:"start"},"start"),a.a.createElement("option",{value:"center"},"center"),a.a.createElement("option",{value:"end"},"end"))),a.a.createElement("br",null),a.a.createElement(i.a,{align:t},a.a.createElement(c.default,{text:"Edit",variant:"utility",icon:a.a.createElement(u.a,null)}),a.a.createElement(c.default,{text:"Add",variant:"utility",icon:a.a.createElement(p.a,null)}),a.a.createElement(c.default,{text:"Attachment",variant:"utility",icon:a.a.createElement(m.a,null)})))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function g(e){var t=e.components,n=O(e,["components"]);return Object(o.mdx)("wrapper",f({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport Toolbar from \'terra-toolbar\';\nimport Button from \'terra-button\';\nimport IconEdit from \'terra-icon/lib/icon/IconEdit\';\nimport IconAdd from \'terra-icon/lib/icon/IconAdd\';\nimport IconAttachment from \'terra-icon/lib/icon/IconAttachment\';\n\nexport default () => {\n  const [align, setAlign] = useState();\n  const handleOnChange = (event) => {\n    setAlign(event.target.value);\n  };\n\n  return (\n    <div>\n      <label>\n        Alignment:\n        <select onChange={handleOnChange}>\n          <option value="start">start</option>\n          <option value="center">center</option>\n          <option value="end">end</option>\n        </select>\n      </label>\n      <br />\n      <Toolbar align={align}>\n        <Button text="Edit" variant="utility" icon={<IconEdit />} />\n        <Button text="Add" variant="utility" icon={<IconAdd />} />\n        <Button text="Attachment" variant="utility" icon={<IconAttachment />} />\n      </Toolbar>\n    </div>\n  );\n};\n\n')))}g.isMDXComponent=!0;var y=n(800),h=n.n(y),j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(h.a,{title:t||"Default Toolbar",description:n,example:a.a.createElement(b,null),exampleSrc:a.a.createElement(g,null),isExpanded:r})},x=n(803),w=n.n(x);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=function(){return Object(o.mdx)(w.a,{rows:[{name:"align",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n "start",\n "end",\n "center"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'start'",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Content alignment. Align to start, end, or center."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Items to be displayed in toolbar such as buttons, button groups, and links."))}return t.isMDXComponent=!0,t({})}}]})};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A={};function S(e){var t=e.components,n=P(e,["components"]);return Object(o.mdx)("wrapper",T({},A,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-toolbar"},"Terra Toolbar"),Object(o.mdx)("p",null,"The terra-toolbar component is used to display bar containing items such as buttons, button groups, and links."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",T({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-toolbar"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",T({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",T({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",T({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",T({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",T({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",T({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),"import Toolbar from 'terra-toolbar';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",T({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support"))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",T({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support"))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",T({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",T({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support")),Object(o.mdx)("h2",T({parentName:"li"},{id:"examples"}),"Examples"),Object(o.mdx)(j,{mdxType:"DefaultToolbar"}),Object(o.mdx)("h2",T({parentName:"li"},{id:"toolbar-props"}),"Toolbar Props"),Object(o.mdx)(_,{mdxType:"PropsTable"}))))}S.isMDXComponent=!0},804:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=i},845:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M.1 48l5.7-12.8 7.1 7.1zm44.8-37.6l2.5-2.5a2.05 2.05 0 000-2.9L43 .6a2.05 2.05 0 00-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};i.displayName="IconEdit",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},t.a=i},850:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};i.displayName="IconAdd",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},t.a=i},860:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M32 8v29a8 8 0 01-16 0V8a5 5 0 0110 0v29a2 2 0 01-4 0V15h-3v22a5 5 0 0010 0V8a8 8 0 00-16 0v29a11 11 0 0022 0V8z"}))};i.displayName="IconAttachment",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.a=i},868:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),l=n.n(o),i=n(11),c=n.n(i),u=n(4),p=n.n(u),m=n(6),s=n.n(m);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=p.a.bind({"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___1wLO2","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___2085q",toolbar:"Toolbar-module__toolbar___1d-c9",item:"Toolbar-module__item___3UAcw","start-align":"Toolbar-module__start-align___1m77t","end-align":"Toolbar-module__end-align___1314K","center-align":"Toolbar-module__center-align___3p9r5"}),O={align:l.a.oneOf(["start","end","center"]),children:l.a.node},v=function(e){var t=e.align,n=e.children,r=b(e,["align","children"]),o=a.a.useContext(s.a),l=c()(f("toolbar","".concat(t,"-align"),o.className),r.className),i=a.a.Children.map(n,(function(e){return a.a.createElement("div",{className:f("item")},e)}));return a.a.createElement("div",d({},r,{className:l}),i)};v.propTypes=O,v.defaultProps={align:"start"};t.a=v},980:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(801),l=n.n(o),i=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toolbar",name:"terra-toolbar",version:"1.18.0",url:t})}}}]);