(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1514:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),n=t(4),r=t.n(n),o=t(807),d=t(930),s=r.a.bind(o.a);a.default=function(){return i.a.createElement("div",{className:s("content-wrapper")},i.a.createElement(d.a,{label:"Select Field",placeholder:"Select a number",selectId:"tagSelectField",maxHeight:300},i.a.createElement(d.a.Option,{value:"1",display:"One"}),i.a.createElement(d.a.Option,{value:"2",display:"Two"}),i.a.createElement(d.a.Option,{value:"3",display:"Three"}),i.a.createElement(d.a.Option,{value:"4",display:"Four"}),i.a.createElement(d.a.Option,{value:"5",display:"Five"}),i.a.createElement(d.a.Option,{value:"6",display:"Six"}),i.a.createElement(d.a.Option,{value:"7",display:"Seven"}),i.a.createElement(d.a.Option,{value:"8",display:"Eight"}),i.a.createElement(d.a.Option,{value:"9",display:"Nine"}),i.a.createElement(d.a.Option,{value:"10",display:"Ten"}),i.a.createElement(d.a.Option,{value:"11",display:"Eleven"}),i.a.createElement(d.a.Option,{value:"12",display:"Twelve"}),i.a.createElement(d.a.Option,{value:"13",display:"Thirteen"})))}},807:function(e,a,t){"use strict";a.a={"content-wrapper":"Select-test-module__content-wrapper___200CU","bottom-left":"Select-test-module__bottom-left___JP1So"}},930:function(e,a,t){"use strict";var l=t(0),i=t.n(l),n=t(1),r=t.n(n),o=t(7),d=t(205),s=t(212),c=t(53),u=t(33);function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,l,i=function(e,a){if(null==e)return{};var t,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h={children:r.a.node,label:r.a.string.isRequired,defaultValue:r.a.oneOfType([r.a.string,r.a.number,r.a.array]),disabled:r.a.bool,error:r.a.node,help:r.a.node,hideRequired:r.a.bool,intl:o.intlShape.isRequired,isIncomplete:r.a.bool,isInline:r.a.bool,isInvalid:r.a.bool,isLabelHidden:r.a.bool,isTouchAccessible:r.a.bool,labelAttrs:r.a.object,maxSelectionCount:r.a.number,maxHeight:r.a.number,maxWidth:r.a.string,onChange:r.a.func,placeholder:r.a.string,required:r.a.bool,selectAttrs:r.a.object,selectId:r.a.string.isRequired,showOptional:r.a.bool,value:r.a.oneOfType([r.a.string,r.a.number,r.a.array])},m={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},v=function(e){var a,t=e.children,l=e.defaultValue,n=e.disabled,r=e.error,o=e.help,c=e.hideRequired,u=e.intl,h=e.isIncomplete,m=e.isInline,v=e.isInvalid,O=e.isLabelHidden,f=e.isTouchAccessible,y=e.label,g=e.labelAttrs,I=e.maxSelectionCount,x=e.maxHeight,E=e.maxWidth,w=e.onChange,S=e.placeholder,q=e.required,A=e.selectAttrs,T=e.selectId,H=e.showOptional,C=e.value,j=b(e,["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]),_=o;if(void 0!==I&&I>=2){var R=u.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:I});_=o?i.a.createElement("span",null,R," ",o):R}return o&&r&&v?a="".concat(T,"-error ").concat(T,"-help"):(o&&(a="".concat(T,"-help")),r&&v&&(a="".concat(T,"-error"))),i.a.createElement(d.a,p({},j,{label:y,labelAttrs:g,error:r,help:_,hideRequired:c,required:q,showOptional:H,isInvalid:v,isInline:m,isLabelHidden:O,htmlFor:T,maxWidth:E}),i.a.createElement(s.a,p({},A,{ariaLabel:y,"aria-describedby":a,disabled:A.disabled||n,inputId:T,isIncomplete:h,isInvalid:v,isTouchAccessible:f,defaultValue:l,maxHeight:x||A.maxHeight,maxSelectionCount:void 0!==I&&I<2?void 0:I,onChange:w,placeholder:S,required:q,value:C}),t))};v.propTypes=h,v.defaultProps=m,v.Option=u.a,v.OptGroup=c.a,a.a=Object(o.injectIntl)(v)}}]);