!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/arbiape-club-site/",t(t.s="mdyV")}({"7kP9":function(e,t,n){"use strict";var r=n("smq+"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,c,i,a,u,_=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),a=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){(r.stopPropagation(),t.format)&&(r.preventDefault(),void 0===r.clipboardData?(n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData(),window.clipboardData.setData(o[t.format]||o.default,e)):(r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)));t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),a.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");_=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),_=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(i):a.removeAllRanges()),u&&document.body.removeChild(u),c()}return _}},"8Jek":function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o;!function(){"use strict";function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=r(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=l.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)c.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}var c={}.hasOwnProperty;e.exports?(l.default=l,e.exports=l):"object"===r(n("K2jg"))&&n("K2jg")?void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o):window.classNames=l}()},K2jg:function(e){(function(t){e.exports=t}).call(this,{})},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,i={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:i[l]=t[l];if(arguments.length>2&&(i.children=arguments.length>3?x.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return c(e,i,r,o,null)}function c(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++P:o};return null==o&&null!=E.vnode&&E.vnode(l),l}function i(e){return e.children}function a(e,t){this.props=e,this.context=t}function u(e,t){if(null==t)return e.__?u(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?u(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function s(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!f.__r++||I!==E.debounceRendering)&&((I=E.debounceRendering)||D)(f)}function f(){for(var e;f.__r=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,o,l,c,i;e.__d&&(c=(l=(t=e).__v).__e,(i=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,g(i,l,o,t.__n,void 0!==i.ownerSVGElement,null!=l.__h?[c]:null,n,null==c?u(l):c,l.__h),j(n,l),l.__e!=c&&_(l)))}))}function d(e,t,n,r,o,l,a,_,s,f){var d,b,y,v,m,j,O,C=r&&r.__k||U,A=C.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?c(null,v,null,null,v):Array.isArray(v)?c(i,{children:v},null,null,null):v.__b>0?c(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(y=C[d])||y&&v.key==y.key&&v.type===y.type)C[d]=void 0;else for(b=0;b<A;b++){if((y=C[b])&&v.key==y.key&&v.type===y.type){C[b]=void 0;break}y=null}g(e,v,y=y||L,o,l,a,_,s,f),m=v.__e,(b=v.ref)&&y.ref!=b&&(O||(O=[]),y.ref&&O.push(y.ref,null,v),O.push(b,v.__c||m,v)),null!=m?(null==j&&(j=m),"function"==typeof v.type&&v.__k===y.__k?v.__d=s=p(v,s,e):s=h(e,v,y,C,m,s),"function"==typeof n.type&&(n.__d=s)):s&&y.__e==s&&s.parentNode!=e&&(s=u(y))}for(n.__e=j,d=A;d--;)null!=C[d]&&("function"==typeof n.type&&null!=C[d].__e&&C[d].__e==n.__d&&(n.__d=u(r,d+1)),w(C[d],C[d]));if(O)for(d=0;d<O.length;d++)k(O[d],O[++d],O[++d])}function p(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?p(r,t,n):h(n,r,r,o,r.__e,t));return t}function h(e,t,n,r,o,l){var c,i,a;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),c=null;else{for(i=l,a=0;(i=i.nextSibling)&&a<r.length;a+=2)if(i==o)break e;e.insertBefore(o,l),c=l}return void 0!==c?c:o.nextSibling}function b(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||M.test(t)?n:n+"px"}function y(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||b(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||b(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?m:v,l):e.removeEventListener(t,l?m:v,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function v(e){this.l[e.type+!1](E.event?E.event(e):e)}function m(e){this.l[e.type+!0](E.event?E.event(e):e)}function g(e,t,n,o,l,c,u,_,s){var f,p,h,b,y,v,m,g,j,k,w,A=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,_=t.__e=n.__e,t.__h=null,c=[_]),(f=E.__b)&&f(t);try{e:if("function"==typeof A){if(g=t.props,j=(f=A.contextType)&&o[f.__c],k=f?j?j.props.value:f.__:o,n.__c?m=(p=t.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?t.__c=p=new A(g,k):(t.__c=p=new a(g,k),p.constructor=A,p.render=C),j&&j.sub(p),p.props=g,p.state||(p.state={}),p.context=k,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(g,p.__s))),b=p.props,y=p.state,h)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&g!==b&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,k),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,k)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,k),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(b,y,v)}))}p.context=k,p.props=g,p.state=p.__s,(f=E.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(b,y)),w=null!=f&&f.type===i&&null==f.key?f.props.children:f,d(e,Array.isArray(w)?w:[w],t,n,o,l,c,u,_,s),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),m&&(p.__E=p.__=null),p.__e=!1}else null==c&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,l,c,u,s);(f=E.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=c)&&(t.__e=_,t.__h=!!s,c[c.indexOf(_)]=null),E.__e(e,t,n)}}function j(e,t){E.__c&&E.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){E.__e(e,t.__v)}}))}function O(e,t,n,r,l,c,i,a){var _,s,f,p=n.props,h=t.props,b=t.type,v=0;if("svg"===b&&(l=!0),null!=c)for(;v<c.length;v++)if((_=c[v])&&"setAttribute"in _==!!b&&(b?_.localName===b:3===_.nodeType)){e=_,c[v]=null;break}if(null==e){if(null===b)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,h.is&&h),c=null,a=!1}if(null===b)p===h||a&&e.data===h||(e.data=h);else{if(c=c&&x.call(e.childNodes),s=(p=n.props||L).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!a){if(null!=c)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||y(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||y(e,l,t[l],n[l],r)}(e,h,p,l,a),f)t.__k=[];else if(v=t.props.children,d(e,Array.isArray(v)?v:[v],t,n,r,l&&"foreignObject"!==b,c,i,c?c[0]:n.__k&&u(n,0),a),null!=c)for(v=c.length;v--;)null!=c[v]&&o(c[v]);a||("value"in h&&void 0!==(v=h.value)&&(v!==p.value||v!==e.value||"progress"===b&&!v)&&y(e,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&y(e,"checked",v,p.checked,!1))}return e}function k(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){E.__e(e,n)}}function w(e,t,n){var r,l;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||k(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&w(r[l],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function C(e,t,n){return this.constructor(e,n)}function A(e,t,n){var r,o,c;E.__&&E.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,c=[],g(t,e=(!r&&n||t).__k=l(i,null,[e]),o||L,L,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?x.call(t.childNodes):null,c,!r&&n?n:o?o.__e:t.firstChild,r),j(c,e)}function S(e,t){A(e,t,S)}n.d(t,"d",(function(){return A})),n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return E}));var x,E,P,T,D,I,L={},U=[],M=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x=U.slice,E={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},P=0,a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),s(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),s(this))},a.prototype.render=i,T=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f.__r=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.a,l=r.d,c=function(e){return e&&e.default?e.default:e};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof c(n("qVkA"))){var i=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=c(n("qVkA")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var a;t.url&&(a=t.url);i=l(o(e,{CLI_DATA:{preRenderData:t}}),document.body,i)}()}},qVkA:function(e,t,n){"use strict";function r(e,t){v.c.__h&&v.c.__h(b,e,x||t),x=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return x=1,function(e,t,n){var o=r(h++,2);return o.t=e,o.__c||(o.__=[n?n(t):a(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=b),o.__}(a,e)}function l(){var e;for(E.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=E.pop();)if(e.__P)try{e.__H.__h.forEach(c),e.__H.__h.forEach(i),e.__H.__h=[]}catch(t){e.__H.__h=[],v.c.__e(t,e.__v)}}function c(e){var t=b,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),b=t}function i(e){var t=b;e.__c=e.__(),b=t}function a(e,t){return"function"==typeof t?t(e):t}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var h,b,y,v=n("hosL"),m=n("8Jek"),g=n.n(m),j={icon:"icon__LPUtO",minus:"minus__JCcaL",plus:"plus__Lnhpq",twitter:"twitter__d80+2",discord:"discord__3zz+6",m:"m__QfXxV",l:"l__1IMqB"},O=function(e){var t=e.type,n=e.size,r=void 0===n?"m":n;return Object(v.a)("div",{className:g()(j.icon,j[t],j[r])})},k="icons__wtqyE",w=function(e){var t=e.class;return Object(v.a)("div",{class:g()(k,t)},Object(v.a)("a",{href:"https://twitter.com/ArbiApeClub",target:"_blank"},Object(v.a)(O,{type:"twitter",size:"l"})),Object(v.a)("a",{href:"https://discord.gg/ha4cqFgktD",target:"_blank"},Object(v.a)(O,{type:"discord",size:"l"})))},C={button:"button__lcwc6",title:"title__jQAGf",s:"s__Sg-KF",m:"m__lkSSd",disabled:"disabled__4mMdy"},A=function(e){var t,n,r,o=e.title,l=e.size,c=void 0===l?"m":l,i=e.disabled,a=e.children,u=e.onClick,_=e.class;return Object(v.a)("button",{type:"button",class:g()(C.button,C[c],(t={},n=C.disabled,r=i,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),_),onClick:i?void 0:u},a||Object(v.a)("div",{class:C.title},o))},S=function(e){var t,n=e.address,r=e.onConnect,o=e.class;return Object(v.a)(A,{class:o,title:n?(t=n,"".concat(t.slice(0,5),"...").concat(t.slice(-4))):"Connect",onClick:n?r:void 0})},x=0,E=[],P=v.c.__b,T=v.c.__r,D=v.c.diffed,I=v.c.__c,L=v.c.unmount;v.c.__b=function(e){b=null,P&&P(e)},v.c.__r=function(e){T&&T(e),h=0;var t=(b=e.__c).__H;t&&(t.__h.forEach(c),t.__h.forEach(i),t.__h=[])},v.c.diffed=function(e){D&&D(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==E.push(t)&&y===v.c.requestAnimationFrame||((y=v.c.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),U&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);U&&(t=requestAnimationFrame(n))})(l)),b=null},v.c.__c=function(e,t){t.some((function(e){try{e.__h.forEach(c),e.__h=e.__h.filter((function(e){return!e.__||i(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],v.c.__e(n,e.__v)}})),I&&I(e,t)},v.c.unmount=function(e){L&&L(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{c(e)}catch(e){t=e}})),t&&v.c.__e(t,n.__v))};var U="function"==typeof requestAnimationFrame,M=n("7kP9"),N=n.n(M),R=function(e,t){return e.reduce((function(n,r,o){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),c=(o+t)%e.length;return c<0&&(c+=e.length),l[r]=e[c],l}),{})},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13,n="abcdefghijklmnopqrstuvwxyz".split(""),r=R(n,t);return e.toLowerCase().split("").map((function(e){return r[e]||e})).join("")},F=function(e){var t=e.address,n=e.onConnect,r=s(o(!1),2),l=r[0],c=r[1],i=function(e){if(e){var t=e.substring(2);return H(t)}}(t),a="".concat(window.location.href,"/?ref=").concat(i);return Object(v.a)(A,{title:t?l?"Copied":"Copy link":"Connect",size:"s",onClick:t?function(){N()(a),c(!0),setTimeout((function(){return c(!1)}),1e3)}:n})},q="/".concat("arbiape-club-site"),B="left__2knTY",z="right__hTbSJ",W="img__I2YYj",V="connect__TKmN8",Y="mint__egw6b",J="form__gzZte",K="input__YIF2N",$="counter__U8ZGF",G="title__NBYAc",Q="description__47Tm1",X="features__sBrxO",Z="featureItem__eMocI",ee="iconButton__w9jJt",te=function(e){var t=e.icon,n=e.disabled,r=e.onClick;return Object(v.a)(A,{onClick:r,disabled:n,class:ee},t)},ne="hidden-md hidden-lg hidden-xl",re="hidden-xs hidden-sm",oe=function(e){var t=e.class,n=d(o(1),2),r=n[0],l=n[1];return Object(v.a)("div",{class:g()(Y,t)},Object(v.a)("form",{class:g()(J)},Object(v.a)("h2",{class:G},"switch to arbitrum"),Object(v.a)("div",{class:$},Object(v.a)(te,{icon:Object(v.a)(O,{type:"minus"}),onClick:function(){return l(r-1)},disabled:r<2}),Object(v.a)("input",{class:K,type:"text",placeholder:"amount",value:r,min:1,onKeyPress:function(e){return!/[0-9]/.test(e.key)&&e.preventDefault()},onInput:function(e){parseInt(e.target.value)>0&&l(parseInt(e.target.value))}}),Object(v.a)(te,{icon:Object(v.a)(O,{type:"plus"}),onClick:function(){return l(r+1)}})),Object(v.a)(A,{title:"Connect"})))},le=function(e){var t=e.class;return Object(v.a)("div",{class:Q},Object(v.a)("h3",{class:ne},"Meet the Apes"),Object(v.a)("p",{class:t},"AAC is a collection of 10,000 ArbiApe NFTs—unique digital collectibles living on the L2 Arbitrum blockchain. ",Object(v.a)("br",null),"ArbiApes are a fairly launched fork of Ethereum's BAYC. ",Object(v.a)("br",null),"They are ERC-721 tokens fully integrated and supported on the Arbitrum network, and will be listed on all major NFT marketplaces."))},ce=function(e){var t=e.child;return Object(v.a)("div",{class:X},Object(v.a)("div",{class:g()(Z,"col-sm-12","col-md-6")},Object(v.a)("h3",null,"Fair distribution"),Object(v.a)("p",null,"There are no bonding curves here. Buying an ArbiApe costs 0.05 ETH. There are no price tiers.")),Object(v.a)("div",{class:g()(Z,"col-sm-12","col-md-6")},Object(v.a)("h3",null,"Referrals"),Object(v.a)("p",null,"You know the drill: share your link and get 15% on all minted ArbiApes: ",Object(v.a)("br",null)),t))},ie=function(e){var t=e.account,n=e.chainId,r=e.error,o=e.provider,l=e.connect,c=e.refId;return Object(v.a)("div",{class:"container"},Object(v.a)("div",{class:"row"},Object(v.a)("div",{class:g()(B,"col-xs-12","col-md-7")},Object(v.a)("div",{class:"about"},Object(v.a)("div",{class:g()(V,ne)},Object(v.a)(w,null),Object(v.a)(S,{address:t,onConnect:l})),Object(v.a)("h1",null,"WELCOME TO THE ",Object(v.a)("br",null),"ARBIAPE L2 CLUB"),Object(v.a)("img",{src:"".concat(q,"/assets/images/overview.png"),class:g()(W,ne)}),Object(v.a)(oe,{account:t,chainId:n,error:r,provider:o,connect:l,refId:c,class:ne}),Object(v.a)(le,null),Object(v.a)(ce,{child:Object(v.a)(F,{address:t,onConnect:l})}))),Object(v.a)("div",{class:g()(z,"col-xs-12","col-md-5")},Object(v.a)("div",{class:g()(V,re)},Object(v.a)(w,null),Object(v.a)(S,{address:t,onConnect:l})),Object(v.a)("img",{src:"".concat(q,"/assets/images/overview.png"),class:g()(W,re)}))),Object(v.a)(oe,{account:t,chainId:n,error:r,provider:o,connect:l,refId:c,class:re}))};t.default=function(){return Object(v.a)("div",{id:"preact_root"},Object(v.a)(ie,{account:null,chainId:"",error:null,provider:null,connect:null,refId:null}))}},"smq+":function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}});
//# sourceMappingURL=bundle.1fa2a.js.map