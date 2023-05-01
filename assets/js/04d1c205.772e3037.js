"use strict";(self.webpackChunkmoyuk_docs=self.webpackChunkmoyuk_docs||[]).push([[745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="JS runtime",s={unversionedId:"apps/runtime",id:"apps/runtime",title:"JS runtime",description:"Moyuk's apps are executed in a sandboxed environment. The runtime consists of iframe sandbox, Web Worker and CSP.",source:"@site/docs/apps/runtime.md",sourceDirName:"apps",slug:"/apps/runtime",permalink:"/apps/runtime",draft:!1,editUrl:"https://github.com/moyukapp/moyuk-docs/tree/main/docs/apps/runtime.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Supported form types",permalink:"/apps/supported-types"},next:{title:"Terms of Service",permalink:"/terms"}},l={},p=[{value:"Browser requirements",id:"browser-requirements",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Eliminated APIs",id:"eliminated-apis",level:3},{value:"Network access",id:"network-access",level:2},{value:"Permissions",id:"permissions",level:3},{value:"CORS",id:"cors",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-runtime"},"JS runtime"),(0,o.kt)("p",null,"Moyuk's apps are executed in a sandboxed environment. The runtime consists of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox"},"iframe sandbox"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"},"Web Worker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"CSP"),"."),(0,o.kt)("h2",{id:"browser-requirements"},"Browser requirements"),(0,o.kt)("p",null,"Moyuk only tested on the latest versions of Chrome."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firefox is not supported yet. The runtime depends on dynamic module import and ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility"},"Firefox doesn't support it in worker yet"),"."),(0,o.kt)("li",{parentName:"ul"},"Safari seems to work, but it's not tested.")),(0,o.kt)("h2",{id:"available-apis"},"Available APIs"),(0,o.kt)("p",null,"Because the runtime is based on Web Worker, you can use all the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"APIs that are available in the Web Worker"),".\nHowever, there are some restrictions."),(0,o.kt)("h3",{id:"eliminated-apis"},"Eliminated APIs"),(0,o.kt)("p",null,"Moyuk's runtime eliminates some APIs that are unnecessary for Moyuk's apps.\nThe APIs that are eliminated are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The APIs only for the browsers.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Eliminating APIs is not for security reasons, but for the future compatibility."),(0,o.kt)("li",{parentName:"ul"},"Although Moyuk's runtime is currently based on Web Worker, we may change the implementation in the future."))),(0,o.kt)("h2",{id:"network-access"},"Network access"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," to access the network.\nHowever, there are some restrictions."),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"The runtime denies all network accesses by default. The users must explicitly grant the permissions to the apps. This feature imitates ",(0,o.kt)("a",{parentName:"p",href:"https://deno.land/manual/basics/permissions#network-access"},"Deno's allow-net permissions"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature is achieved by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"CSP"),". The runtime dynamically generates the CSP header based on the permissions users granted.")),(0,o.kt)("h3",{id:"cors"},"CORS"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," policy may affect the network access. The destination server must provide ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *")," header to allow the access."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Maybe we will provide a proxy server to bypass the CORS policy in the future.")))}m.isMDXComponent=!0}}]);