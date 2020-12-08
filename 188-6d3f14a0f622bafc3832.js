(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1827:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(0),o=n.n(r),a=n(309),c=n(825),l=n(98),i=n(814),s=n(4),p=n.n(s),m=n(838),u=p.a.bind(m.a),d=function(){return o.a.createElement(l.default,{role:"listbox","aria-label":"example-label"},o.a.createElement(l.Item,{key:"default"},o.a.createElement(i.c,{title:"Default ListItem",className:u("placeholder")})),o.a.createElement(l.Item,{key:"chevron",hasChevron:!0},o.a.createElement(i.c,{title:"Chevron ListItem",className:u("placeholder")})),o.a.createElement(l.Item,{key:"selectable",isSelectable:!0},o.a.createElement(i.c,{title:"Selectable ListItem",className:u("placeholder")})),o.a.createElement(l.Item,{key:"selected",isSelectable:!0,isSelected:!0},o.a.createElement(i.c,{title:"Selected ListItem",className:u("placeholder")})))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y={};function x(e){var t=e.components,n=b(e,["components"]);return Object(a.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List role="listbox" aria-label="example-label">\n    <Item\n      key="default"\n    >\n      <Placeholder title="Default ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="chevron"\n      hasChevron\n    >\n      <Placeholder title="Chevron ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selectable"\n      isSelectable\n    >\n      <Placeholder title="Selectable ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selected"\n      isSelectable\n      isSelected\n    >\n      <Placeholder title="Selected ListItem" className={cx(\'placeholder\')} />\n    </Item>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}x.isMDXComponent=!0;var h=n(800),v=n.n(h),O=n(839),j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"List Item",description:n,example:o.a.createElement(d,null),exampleCssSrc:o.a.createElement(O.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})},g=n(803),w=n.n(g);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=function(){return Object(a.mdx)(w.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The content element to be placed inside the list item for display."))}return t.isMDXComponent=!0,t({})}},{name:"hasChevron",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item has a disclosure indicator presented."))}return t.isMDXComponent=!0,t({})}},{name:"isSelected",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item should have selection styles applied."))}return t.isMDXComponent=!0,t({})}},{name:"isSelectable",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item should have styles to indicate the item is selectable."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(a.mdx)("wrapper",L({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for the ref of the li."))}return t.isMDXComponent=!0,t({})}}]})};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={};function S(e){var t=e.components,n=I(e,["components"]);return Object(a.mdx)("wrapper",X({},C,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"list-item"},"List Item"),Object(a.mdx)("p",null,"The list item provides a pattern for selection/selectability for li surrounded child content. Whenever, the list item has a prop ",Object(a.mdx)("inlineCode",{parentName:"p"},"isSelectable=true")," then ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-label")," must be provided to List for accessibility.  The onSelect event is the primary means for interaction, as it yields the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greater granularity is required."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import List, { Item } from 'terra-list/lib/List';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(j,{mdxType:"ListItemExample"}),Object(a.mdx)("h2",{id:"list-item-props"},"List Item Props"),Object(a.mdx)(M,{mdxType:"ListItemPropsTable"}))}S.isMDXComponent=!0},804:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},825:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(801),c=n.n(a),l=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.41.0",url:t})}},838:function(e,t,n){"use strict";t.a={placeholder:"ListDocCommon-module__placeholder___3a1of"}},839:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var r=n(309);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={};function l(e){var t=e.components,n=a(e,["components"]);return Object(r.mdx)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}l.isMDXComponent=!0}}]);