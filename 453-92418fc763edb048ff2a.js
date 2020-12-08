(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1803:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return V}));var r=t(0),o=t.n(r),a=t(309),c=t(877),l=t(816),m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{summaryId:"default-header-table",summary:"This table displays the default layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Default Header"},{id:"header-key-1",key:"key-1",children:"Default Header"}]}}),o.a.createElement(l.b,{summaryId:"chevron-header-table",summary:"This table displays the chevron layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Chevron"},{id:"header-key-1",key:"key-1",children:"Selection Style Chevron"}]}}),o.a.createElement(l.b,{summaryId:"check-header-table",summary:"This table displays the checkmark layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",checkStyle:"toggle",headerData:{selectAllColumn:{checkLabel:"Column Title"},cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Checkmark"},{id:"header-key-1",key:"key-1",children:"Selection Style Checkmark"}]}}))};function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p={};function s(e){var n=e.components,t=i(e,["components"]);return Object(a.mdx)("wrapper",u({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderRowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-header-table\"\n      summary=\"This table displays the default layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },\n          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"chevron-header-table\"\n      summary=\"This table displays the chevron layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"check-header-table\"\n      summary=\"This table displays the checkmark layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Column Title',\n        },\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },\n        ],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderRowExample;\n\n")))}s.isMDXComponent=!0;var d=t(800),y=t.n(d),h=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Header Row Example",description:t,example:o.a.createElement(m,null),exampleSrc:o.a.createElement(s,null),isExpanded:r})},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{summaryId:"example-check-cell",summary:"This table displaying a default check column.",rowStyle:"toggle",checkStyle:"icon",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title"},cells:[{id:"column-0",key:"key-0",children:"Default"}]}}),o.a.createElement(l.b,{summaryId:"empty-check-cell",summary:"This table displaying a selectable unchecked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"empty"},cells:[{id:"column-0",key:"key-0",children:"Selectable Unchecked"}]}}),o.a.createElement(l.b,{summaryId:"checked-check-cell",summary:"This table displaying a selectable checked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"checked"},cells:[{id:"column-0",key:"key-0",children:"Selectable Checked"}]}}),o.a.createElement(l.b,{summaryId:"indeterminate-check-cell",summary:"This table displaying a selectable indeterminate column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"indeterminate"},cells:[{id:"column-0",key:"key-0",children:"Selectable Indeterminate"}]}}),o.a.createElement(l.b,{summaryId:"disabled-check-cell",summary:"This table displaying a disabled check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},isDisabled:!0},cells:[{id:"column-0",key:"key-0",children:"Disabled"}]}}),o.a.createElement(l.b,{summaryId:"alignment-check-cell",summary:"This table displaying a vertically aligned check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkAlignment:"1rem"},cells:[{id:"column-0",key:"key-0",children:"Vertical Alignment 1rem"}]}}))};function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var k={};function O(e){var n=e.components,t=x(e,["components"]);return Object(a.mdx)("wrapper",f({},k,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderCheckMarkCellExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"example-check-cell\"\n      summary=\"This table displaying a default check column.\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],\n      }}\n    />\n    <Table\n      summaryId=\"empty-check-cell\"\n      summary=\"This table displaying a selectable unchecked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],\n      }}\n    />\n    <Table\n      summaryId=\"checked-check-cell\"\n      summary=\"This table displaying a selectable checked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],\n      }}\n    />\n    <Table\n      summaryId=\"indeterminate-check-cell\"\n      summary=\"This table displaying a selectable indeterminate column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],\n      }}\n    />\n    <Table\n      summaryId=\"disabled-check-cell\"\n      summary=\"This table displaying a disabled check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],\n      }}\n    />\n    <Table\n      summaryId=\"alignment-check-cell\"\n      summary=\"This table displaying a vertically aligned check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderCheckMarkCellExample;\n\n")))}O.isMDXComponent=!0;var v=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Header Check Mark Cell Example",description:t,example:o.a.createElement(b,null),exampleSrc:o.a.createElement(O,null),isExpanded:r})},j=t(803),g=t.n(j);function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function D(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var T=function(){return Object(a.mdx)(g.a,{rows:[{name:"cells",type:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",C({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "headerCellShape"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The cells to be displayed within the header."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback returning the html node for the header."))}return n.isMDXComponent=!0,n({})}},{name:"selectAllColumn",type:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=D(n,["components"]);return Object(a.mdx)("wrapper",C({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The select all column header's properties."))}return n.isMDXComponent=!0,n({})}}]})};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function M(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var X=function(){return Object(a.mdx)(g.a,{rows:[{name:"id",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,'The id of the header cell for the row cells to set within their "headers" prop.'))}return n.isMDXComponent=!0,n({})}},{name:"key",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The react key to apply to the cell."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Content to be displayed for the column header."))}return n.isMDXComponent=!0,n({})}},{name:"isSortDesc",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the sort indicator is descending."))}return n.isMDXComponent=!0,n({})}},{name:"isSortActive",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the column is to be marked as a sorted column."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return n.isMDXComponent=!0,n({})}},{name:"onCellAction",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for actions or selections."))}return n.isMDXComponent=!0,n({})}},{name:"onSortAction",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for sorting."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback returning the html node for the header cell."))}return n.isMDXComponent=!0,n({})}},{name:"removeInner",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))}return n.isMDXComponent=!0,n({})}},{name:"attrs",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to be passed to the cell."))}return n.isMDXComponent=!0,n({})}}]})};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function L(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var E=function(){return Object(a.mdx)(g.a,{rows:[{name:"checkStatus",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",S({parentName:"pre"},{className:"language-json"}),'[\n "empty",\n "checked",\n "indeterminate"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The status of the select all checkbox."))}return n.isMDXComponent=!0,n({})}},{name:"checkAlignment",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding."))}return n.isMDXComponent=!0,n({})}},{name:"checkLabel",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The text label for the column header's interaction."))}return n.isMDXComponent=!0,n({})}},{name:"onCheckAction",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The function callback triggering when the checkbox within the column header has an interaction."))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not interaction should be disabled."))}return n.isMDXComponent=!0,n({})}}]})};function A(){return(A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var I={};function V(e){var n=e.components,t=P(e,["components"]);return Object(a.mdx)("wrapper",A({},I,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-table---header"},"Terra Table - Header"),Object(a.mdx)("p",null,"The table's header is comprised of a cells and an optional selectAllColumn. The checkLabel should be provided if the table has toggle behavior."),Object(a.mdx)("h1",{id:"examples"},"Examples"),Object(a.mdx)(h,{mdxType:"HeaderRowExample"}),Object(a.mdx)(v,{mdxType:"HeaderCheckMarkCellExample"}),Object(a.mdx)("h2",{id:"table-header-props"},"Table Header Props"),Object(a.mdx)(T,{mdxType:"HeaderProps"}),Object(a.mdx)("h2",{id:"table-header-cell-props"},"Table Header Cell Props"),Object(a.mdx)(X,{mdxType:"HeaderCellProps"}),Object(a.mdx)("h2",{id:"table-select-all-column-props"},"Table Select All Column Props"),Object(a.mdx)(E,{mdxType:"SelectAllColumnProps"}))}V.isMDXComponent=!0},804:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(12);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=function(e){var n=c({},e);return o.a.createElement(a.a,n,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=l},877:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),o=t.n(r),a=t(801),c=t.n(a),l=function(e){var n=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.19.0",url:n})}}}]);