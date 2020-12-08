(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1795:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return H}));var r=t(0),o=t.n(r),a=t(309),l=t(815),i=t(928),p=t(4),c=t.n(p),m=t(808),s=c.a.bind(m.a),u=function(){return o.a.createElement(i.a,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:s("form-select")},o.a.createElement(i.a.Option,{value:"xSmall",display:"Extra Small"}),o.a.createElement(i.a.Option,{value:"small",display:"Small"}),o.a.createElement(i.a.Option,{value:"medium",display:"Medium"}),o.a.createElement(i.a.Option,{value:"large",display:"Large"}),o.a.createElement(i.a.Option,{value:"xLarge",display:"Extra Large"}))};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var x={};function f(e){var n=e.components,t=b(e,["components"]);return Object(a.mdx)("wrapper",d({},x,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}f.isMDXComponent=!0;var O=t(800),y=t.n(O),v=t(809),h=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Combobox Field",description:t,example:o.a.createElement(u,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},j=c.a.bind(m.a),g=function(){return o.a.createElement(i.a,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:j("form-select")},o.a.createElement(i.a.Option,{value:"xSmall",display:"Extra Small"}),o.a.createElement(i.a.Option,{value:"small",display:"Small"}),o.a.createElement(i.a.Option,{value:"medium",display:"Medium"}),o.a.createElement(i.a.Option,{value:"large",display:"Large"}),o.a.createElement(i.a.Option,{value:"xLarge",display:"Extra Large"}))};function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var M={};function D(e){var n=e.components,t=w(e,["components"]);return Object(a.mdx)("wrapper",C({},M,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}D.isMDXComponent=!0;var X=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Required Combobox Field",description:t,example:o.a.createElement(g,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(D,null),isExpanded:r})},L=c.a.bind(m.a),T=function(){return o.a.createElement(i.a,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:L("form-select")},o.a.createElement(i.a.Option,{value:"xSmall",display:"Extra Small"}),o.a.createElement(i.a.Option,{value:"small",display:"Small"}),o.a.createElement(i.a.Option,{value:"medium",display:"Medium"}),o.a.createElement(i.a.Option,{value:"large",display:"Large"}),o.a.createElement(i.a.Option,{value:"xLarge",display:"Extra Large"}))};function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var N={};function F(e){var n=e.components,t=S(e,["components"]);return Object(a.mdx)("wrapper",E({},N,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}F.isMDXComponent=!0;var q=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Incomplete Combobox Field",description:t,example:o.a.createElement(T,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(F,null),isExpanded:r})},I=t(803),V=t.n(I);function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=function(){return Object(a.mdx)(V.a,{rows:[{name:"allowClear",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether a clear option is available to clear the selection."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The select options."))}return n.isMDXComponent=!0,n({})}},{name:"label",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The field label."))}return n.isMDXComponent=!0,n({})}},{name:"defaultValue",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"error",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message displayed when the select is invalid."))}return n.isMDXComponent=!0,n({})}},{name:"help",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help message to display with the select."))}return n.isMDXComponent=!0,n({})}},{name:"hideRequired",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to hide the required indicator on the label."))}return n.isMDXComponent=!0,n({})}},{name:"isIncomplete",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return n.isMDXComponent=!0,n({})}},{name:"isInline",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return n.isMDXComponent=!0,n({})}},{name:"isInvalid",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return n.isMDXComponent=!0,n({})}},{name:"isLabelHidden",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return n.isMDXComponent=!0,n({})}},{name:"isTouchAccessible",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(a.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))}return n.isMDXComponent=!0,n({})}},{name:"labelAttrs",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the label."))}return n.isMDXComponent=!0,n({})}},{name:"maxHeight",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The max height of the dropdown."))}return n.isMDXComponent=!0,n({})}},{name:"maxWidth",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return n.isMDXComponent=!0,n({})}},{name:"placeholder",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Placeholder text."))}return n.isMDXComponent=!0,n({})}},{name:"required",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is required."))}return n.isMDXComponent=!0,n({})}},{name:"selectAttrs",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the select."))}return n.isMDXComponent=!0,n({})}},{name:"selectId",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return n.isMDXComponent=!0,n({})}},{name:"showOptional",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return n.isMDXComponent=!0,n({})}},{name:"value",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}}]})};function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function W(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var k={};function H(e){var n=e.components,t=W(e,["components"]);return Object(a.mdx)("wrapper",R({},k,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-combobox-field"},"Terra Form Combobox Field"),Object(a.mdx)("p",null,"A convenience wrapper assembling a ",Object(a.mdx)("a",R({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/Combobox.jsx"}),"terra-form-select Combobox")," within a ",Object(a.mdx)("a",R({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",R({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",R({parentName:"pre"},{className:"language-jsx"}),"import ComboboxField from 'terra-form-select/lib/ComboboxField';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",R({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(h,{title:"Combobox Field Example",mdxType:"ComboboxFieldExample"}),Object(a.mdx)(X,{title:"Required Combobox Field Example",mdxType:"RequiredComboboxFieldExample"}),Object(a.mdx)(q,{title:"Incomplete Combobox Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteComboboxFieldExample"}),Object(a.mdx)("h2",{id:"combobox-field-props"},"Combobox Field Props"),Object(a.mdx)(A,{mdxType:"ComboboxFieldPropsTable"}))}H.isMDXComponent=!0},804:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(12);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=function(e){var n=l({},e);return o.a.createElement(a.a,n,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=i},808:function(e,n,t){"use strict";n.a={"form-select":"FormSelectDocCommon-module__form-select___m9WxS"}},809:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(0);var r=t(309);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={};function i(e){var n=e.components,t=a(e,["components"]);return Object(r.mdx)("wrapper",o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-scss"}),":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},815:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),o=t.n(r),a=t(801),l=t.n(a),i=function(e){var n=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.22.0",url:n})}},928:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1),l=t.n(a),i=t(205),p=t(208),c=t(53),m=t(33);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d={allowClear:l.a.bool,children:l.a.node,label:l.a.string.isRequired,defaultValue:l.a.oneOfType([l.a.string,l.a.number,l.a.array]),disabled:l.a.bool,error:l.a.node,help:l.a.node,hideRequired:l.a.bool,isIncomplete:l.a.bool,isInline:l.a.bool,isInvalid:l.a.bool,isLabelHidden:l.a.bool,isTouchAccessible:l.a.bool,labelAttrs:l.a.object,maxHeight:l.a.number,maxWidth:l.a.string,onChange:l.a.func,placeholder:l.a.string,required:l.a.bool,selectAttrs:l.a.object,selectId:l.a.string.isRequired,showOptional:l.a.bool,value:l.a.oneOfType([l.a.string,l.a.number,l.a.array])},b={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isTouchAccessible:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},x=function(e){var n,t=e.allowClear,r=e.children,a=e.defaultValue,l=e.disabled,c=e.error,m=e.help,d=e.hideRequired,b=e.isIncomplete,x=e.isInline,f=e.isInvalid,O=e.isLabelHidden,y=e.isTouchAccessible,v=e.label,h=e.labelAttrs,j=e.maxHeight,g=e.maxWidth,C=e.onChange,w=e.placeholder,M=e.required,D=e.selectAttrs,X=e.selectId,L=e.showOptional,T=e.value,E=u(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return m&&c&&f?n="".concat(X,"-error ").concat(X,"-help"):(m&&(n="".concat(X,"-help")),c&&f&&(n="".concat(X,"-error"))),o.a.createElement(i.a,s({},E,{label:v,labelAttrs:h,error:c,help:m,hideRequired:d,required:M,showOptional:L,isInvalid:f,isInline:x,isLabelHidden:O,htmlFor:X,maxWidth:g}),o.a.createElement(p.a,s({},D,{ariaLabel:v,allowClear:t,"aria-describedby":n,disabled:D.disabled||l,inputId:X,isIncomplete:b,isInvalid:f,isTouchAccessible:y,defaultValue:a,maxHeight:j||D.maxHeight,onChange:C,placeholder:w,required:M,value:T}),r))};x.propTypes=d,x.defaultProps=b,x.Option=m.a,x.OptGroup=c.a,n.a=x}}]);