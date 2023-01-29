"use strict";(self.webpackChunkmoyuk_docs=self.webpackChunkmoyuk_docs||[]).push([[453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var p=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,p,r=function(e,t){if(null==e)return{};var n,p,r={},i=Object.keys(e);for(p=0;p<i.length;p++)n=i[p],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)n=i[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=p.createContext({}),l=function(e){var t=p.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return p.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},y=p.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),y=r,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||i;return n?p.createElement(d,o(o({ref:t},c),{},{components:n})):p.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return p.createElement.apply(null,o)}return p.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var p=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="TypeScript in Moyuk",a={unversionedId:"apps/typescript",id:"apps/typescript",title:"TypeScript in Moyuk",description:"Moyuk's TypeScript aims to be as compatible as possible with Deno's. (Not fully compatible yet.)",source:"@site/docs/apps/typescript.md",sourceDirName:"apps",slug:"/apps/typescript",permalink:"/apps/typescript",draft:!1,editUrl:"https://github.com/moyukapp/moyuk-docs/tree/main/docs/apps/typescript.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create an App",permalink:"/apps/create-an-app"},next:{title:"Supported form types",permalink:"/apps/supported-types"}},s={},l=[{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:"Import",id:"import",level:2},{value:"Using npm packages",id:"using-npm-packages",level:2},{value:"Importing npm packages with npm specifiers",id:"importing-npm-packages-with-npm-specifiers",level:3},{value:"Importing npm packages with CDNs",id:"importing-npm-packages-with-cdns",level:3},{value:"TypeScript version",id:"typescript-version",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,p.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript-in-moyuk"},"TypeScript in Moyuk"),(0,r.kt)("p",null,"Moyuk's TypeScript aims to be as compatible as possible with Deno's. (Not fully compatible yet.)"),(0,r.kt)("h2",{id:"tsconfigjson"},"tsconfig.json"),(0,r.kt)("p",null,"Moyuk doesn't support customizing compiler options yet.\nThe tsconfig.json set by Moyuk looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n    "allowJs": true,\n    "esModuleInterop": true,\n    "experimentalDecorators": true,\n    "inlineSourceMap": true,\n    "isolatedModules": true,\n    "module": "esnext",\n    "moduleDetection": "force",\n    "strict": true,\n    "target": "esnext",\n    "useDefineForClassFields": true\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Moyuk's compiler options are basically same as ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/manual/advanced/typescript/configuration"},"Deno's"),".")),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"You can import modules from ",(0,r.kt)("inlineCode",{parentName:"p"},"https:")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm:")," URLs just like in Deno.\nMoyuk currently doesn't support importing TypeScript files directly, but you can use CDNs that support ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/manual/advanced/typescript/types#using-x-typescript-types-header"},"X-TypeScript-Types header")," to import pre-compiled modules."),(0,r.kt)("h2",{id:"using-npm-packages"},"Using npm packages"),(0,r.kt)("h3",{id:"importing-npm-packages-with-npm-specifiers"},"Importing npm packages with npm specifiers"),(0,r.kt)("p",null,"Moyuk supports importing modules from npm packages via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm:")," URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { marked } from 'npm:marked@^4.2';\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Moyuk uses ",(0,r.kt)("a",{parentName:"p",href:"https://esm.sh/"},"esm.sh")," internally to resolve npm specifiers.")),(0,r.kt)("h3",{id:"importing-npm-packages-with-cdns"},"Importing npm packages with CDNs"),(0,r.kt)("p",null,"Moyuk supports importing modules from CDNs that support ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/manual/advanced/typescript/types#using-x-typescript-types-header"},"X-TypeScript-Types header")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"https:")," URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { marked } from 'https://esm.sh/marked@4.2.12';\n")),(0,r.kt)("p",null,"Here is the list of the CDNs that support ",(0,r.kt)("inlineCode",{parentName:"p"},"X-TypeScript-Types"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://esm.sh/"},"esm.sh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.skypack.dev/"},"Skypack"))),(0,r.kt)("h2",{id:"typescript-version"},"TypeScript version"),(0,r.kt)("p",null,"You can check the TypeScript version in the ",(0,r.kt)("strong",{parentName:"p"},"App Info")," tab.\nMoyuk uses the latest TypeScript version."))}m.isMDXComponent=!0}}]);