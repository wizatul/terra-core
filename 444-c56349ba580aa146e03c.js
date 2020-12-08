(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{1774:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(0),o=n.n(r),a=n(309),c=n(923),l=n(837);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=i(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{primaryOptionLabel:"Reply",onSelect:function(){return n("Reply clicked")}},o.a.createElement(l.a,{label:"Reply All",onSelect:function(){return n("Reply All clicked")}}),o.a.createElement(l.a,{label:"Forward",onSelect:function(){return n("Forward clicked")}}),o.a.createElement(l.a,{label:"Reply in 10 minutes",onSelect:function(){return n("Reply in 10 minutes clicked")}}),o.a.createElement(l.a,{label:"Selective Reply",onSelect:function(){return n("Selective Reply clicked")}})),o.a.createElement("p",null,t))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function b(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)("wrapper",m({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Reply\"\n        onSelect={() => setMessage('Reply clicked')}\n      >\n        <Item label=\"Reply All\" onSelect={() => setMessage('Reply All clicked')} />\n        <Item label=\"Forward\" onSelect={() => setMessage('Forward clicked')} />\n        <Item label=\"Reply in 10 minutes\" onSelect={() => setMessage('Reply in 10 minutes clicked')} />\n        <Item label=\"Selective Reply\" onSelect={() => setMessage('Selective Reply clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}b.isMDXComponent=!0;var f=n(800),y=n.n(f),O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Default Split Button",description:n,example:o.a.createElement(u,null),exampleSrc:o.a.createElement(b,null),isExpanded:r})};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){var e=x(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{primaryOptionLabel:"Reply",onSelect:function(){return n("Reply clicked")},variant:"ghost"},o.a.createElement(l.a,{label:"Reply All",onSelect:function(){return n("Reply All clicked")}}),o.a.createElement(l.a,{label:"Forward",onSelect:function(){return n("Forward clicked")}}),o.a.createElement(l.a,{label:"Reply in 10 minutes",onSelect:function(){return n("Reply in 10 minutes clicked")}}),o.a.createElement(l.a,{label:"Selective Reply",onSelect:function(){return n("Selective Reply clicked")}})),o.a.createElement("p",null,t))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S={};function w(e){var t=e.components,n=g(e,["components"]);return Object(a.mdx)("wrapper",v({},S,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst GhostSplitButton = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Reply\"\n        onSelect={() => setMessage('Reply clicked')}\n        variant=\"ghost\"\n      >\n        <Item label=\"Reply All\" onSelect={() => setMessage('Reply All clicked')} />\n        <Item label=\"Forward\" onSelect={() => setMessage('Forward clicked')} />\n        <Item label=\"Reply in 10 minutes\" onSelect={() => setMessage('Reply in 10 minutes clicked')} />\n        <Item label=\"Selective Reply\" onSelect={() => setMessage('Selective Reply clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default GhostSplitButton;\n\n")))}w.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Ghost Split Button",description:n,example:o.a.createElement(h,null),exampleSrc:o.a.createElement(w,null),isExpanded:r})};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(){var e=k(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{primaryOptionLabel:"Primary Option",onSelect:function(){return n("Primary option clicked")},isDisabled:!0},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var N={};function I(e){var t=e.components,n=T(e,["components"]);return Object(a.mdx)("wrapper",X({},N,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Primary Option\"\n        onSelect={() => setMessage('Primary option clicked')}\n        isDisabled\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}I.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Disabled Split Button",description:n,example:o.a.createElement(D,null),exampleSrc:o.a.createElement(I,null),isExpanded:r})};function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(){var e=C(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{primaryOptionLabel:"Primary Option",onSelect:function(){return n("Primary option clicked")},isBlock:!0},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var F={};function q(e){var t=e.components,n=A(e,["components"]);return Object(a.mdx)("wrapper",P({},F,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Primary Option\"\n        onSelect={() => setMessage('Primary option clicked')}\n        isBlock\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}q.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Block Split Button",description:n,example:o.a.createElement(B,null),exampleSrc:o.a.createElement(q,null),isExpanded:r})},G=n(803),U=n.n(G);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=function(){return Object(a.mdx)(U.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The options to display in the dropdown. Should be comprised of the subcomponent ",Object(a.mdx)("inlineCode",{parentName:"p"},"Item"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isBlock",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Determines whether the component should have block styles applied. The dropdown will match the component's width."))}return t.isMDXComponent=!0,t({})}},{name:"isCompact",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the button has reduced padding for use in tables and single-row lists."))}return t.isMDXComponent=!0,t({})}},{name:"isDisabled",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Determines whether the primary button and expanding the dropdown should be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"primaryOptionLabel",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the text that will be shown on the primary button which is outside the dropdown."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"What will be called when the primary button is pressed."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",$({parentName:"pre"},{className:"language-json"}),'[\n "neutral",\n "ghost"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'neutral'",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the styles of the component, one of ",Object(a.mdx)("inlineCode",{parentName:"p"},"neutral"),", or ",Object(a.mdx)("inlineCode",{parentName:"p"},"ghost"),"."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=z(t,["components"]);return Object(a.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}}]})};function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var K=function(){return Object(a.mdx)(U.a,{rows:[{name:"label",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The text that is displayed on the option."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(a.mdx)("wrapper",W({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}}]})};function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Z={};function _(e){var t=e.components,n=Y(e,["components"]);return Object(a.mdx)("wrapper",Q({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"split-button"},"Split Button"),Object(a.mdx)("p",null,"The Split Button provides the user with the ability to choose the primary action or an action from a listing of alternative actions.\nAn example is email. The primary action is ",Object(a.mdx)("em",{parentName:"p"},"reply"),", but the user can also ",Object(a.mdx)("em",{parentName:"p"},"forward")," or ",Object(a.mdx)("em",{parentName:"p"},"reply all"),". ",Object(a.mdx)("em",{parentName:"p"},"Reply")," would be the primary action, while ",Object(a.mdx)("em",{parentName:"p"},"forward")," and ",Object(a.mdx)("em",{parentName:"p"},"reply all")," would be contained inside the dropdown."),Object(a.mdx)("p",null,"Children must be the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Item")," subcomponent for proper functionality and appearance."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",Q({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-dropdown-button"))))),Object(a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(a.mdx)("p",null,"The SplitButton component must be composed inside the ",Object(a.mdx)("a",Q({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Q({parentName:"pre"},{className:"language-jsx"}),"import { Item, SplitButton } from 'terra-dropdown-button';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(O,{mdxType:"DefaultSplitButton"}),Object(a.mdx)(M,{mdxType:"GhostSplitButton"}),Object(a.mdx)(R,{mdxType:"DisabledSplitButton"}),Object(a.mdx)(V,{mdxType:"BlockSplitButton"}),Object(a.mdx)("h2",{id:"split-button-props"},"Split Button Props"),Object(a.mdx)(J,{mdxType:"SplitButtonPropsTable"}),Object(a.mdx)("h2",{id:"item-props"},"Item Props"),Object(a.mdx)(K,{mdxType:"ItemPropsTable"}))}_.isMDXComponent=!0},804:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},923:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(801),c=n.n(a),l=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dropdown-button",name:"terra-dropdown-button",version:"1.23.0",url:t})}}}]);