(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1611:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),o=t(4),s=t.n(o),l=t(903),c=t(895);function u(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return d(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var g=s.a.bind(c.a);a.default=function(){var e=u(Object(n.useState)(1),2),a=e[0],t=e[1];return r.a.createElement("div",{className:g("paginator-wrapper")},r.a.createElement(i.default,{id:"button-9",text:"Set Page to 9",onClick:function(){t(9)}}),r.a.createElement(i.default,{id:"button-15",text:"Set Page to 15",onClick:function(){t(15)}}),r.a.createElement(i.default,{id:"button-45",text:"Set Page to 45",onClick:function(){t(45)}}),r.a.createElement(l.a,{onPageChange:function(e){t(e)},selectedPage:a}))}},895:function(e,a,t){"use strict";a.a={"paginator-wrapper":"ControlledPaginatorTestCommon-module__paginator-wrapper___3FzCb"}},903:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),o=t.n(i),s=t(4),l=t.n(s),c=t(6),u=t.n(c),d=t(7),g=t(206),f=t(160),p=t(10),h=t(851),b=t(856),m=t(857);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function C(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=E(e);if(a){var r=E(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return w(this,t)}}function w(e,a){return!a||"object"!==y(a)&&"function"!=typeof a?k(e):a}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=l.a.bind(h.a),N={onPageChange:o.a.func.isRequired,selectedPage:o.a.number.isRequired,totalCount:o.a.number,itemCountPerPage:o.a.number,intl:d.intlShape.isRequired},D=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(o,e);var a,t,n,i=C(o);function o(e){var a;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),(a=i.call(this,e)).handlePageChange=a.handlePageChange.bind(k(a)),a.buildPageButtons=a.buildPageButtons.bind(k(a)),a.reducedPaginator=a.reducedPaginator.bind(k(a)),a.setPaginator=a.setPaginator.bind(k(a)),a.state={showReducedPaginator:!1},a}return a=o,(t=[{key:"handlePageChange",value:function(e){var a=this;return function(t){return t.nativeEvent.keyCode!==p.KEY_RETURN&&t.nativeEvent.keyCode!==p.KEY_SPACE||t.preventDefault(),Number.isNaN(Number(e))?(a.props.onPageChange(t.currentTarget.attributes["aria-label"].value),!1):(a.props.onPageChange(e),!1)}}},{key:"setPaginator",value:function(e){var a="tiny"===e;this.state.showReducedPaginator!==a&&this.setState({showReducedPaginator:a})}},{key:"buildPageButtons",value:function(e,a){var t=this.props,n=t.totalCount,i=t.itemCountPerPage,o=t.selectedPage,s=t.intl,l=Object(b.b)(o,Object(b.a)(n,i)),c=[];return l.forEach((function(t){var n=T(["nav-link",t===o?"is-selected":null]);t>e||c.push(r.a.createElement(m.a,{ariaLabel:s.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:t}),ariaCurrent:t===o,className:n,key:"pageButton_".concat(t),onClick:a(t),onKeyDown:a(t),tabIndex:t===o?"-1":"0"},t))})),c}},{key:"defaultPaginator",value:function(){var e=this.context,a=this.props,t=a.selectedPage,n=a.intl,i=a.totalCount,o=a.itemCountPerPage,s=Object(b.a)(i,o),l=1===t?1:t-1,c=t===s?s:t+1;return r.a.createElement("div",{className:T("paginator",!i&&"pageless",e.className)},i&&r.a.createElement(m.a,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:T(["nav-link","left-controls",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.a.createElement(m.a,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:T(["nav-link","left-controls","previous",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},r.a.createElement("span",{className:T("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),i&&this.buildPageButtons(s,this.handlePageChange),r.a.createElement(m.a,{ariaDisabled:t===s,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:T(["nav-link","right-controls","next",t===s&&"is-disabled"]),disabled:t===s,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},n.formatMessage({id:"Terra.paginator.next"}),r.a.createElement("span",{className:T("icon")})),i&&r.a.createElement(m.a,{ariaDisabled:t===s,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:T(["nav-link","right-controls",t===s&&"is-disabled"]),disabled:t===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},n.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.context,a=this.props,t=a.selectedPage,n=a.intl,i=a.totalCount,o=a.itemCountPerPage,s=Object(b.a)(i,o),l=1===t?1:t-1,c=t===s?s:t+1;return r.a.createElement("div",{className:T("paginator",!i&&"pageless",e.className),role:"navigation","aria-label":"pagination"},i&&r.a.createElement(m.a,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:T(["nav-link","left-controls",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.a.createElement(m.a,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:T(["nav-link","left-controls","previous",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},r.a.createElement("span",{className:T("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),i&&n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:t}),r.a.createElement(m.a,{ariaDisabled:t===s,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:T(["nav-link","right-controls","next","icon-only",t===s&&"is-disabled"]),disabled:t===s,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.a.createElement(f.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),r.a.createElement("span",{className:T("icon")})),i&&r.a.createElement(m.a,{ariaDisabled:t===s,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:T(["nav-link","right-controls",t===s&&"is-disabled"]),disabled:t===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},n.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return r.a.createElement(g.a,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&P(a.prototype,t),n&&P(a,n),o}(r.a.Component);D.propTypes=N,D.contextType=u.a,a.a=Object(d.injectIntl)(D)}}]);