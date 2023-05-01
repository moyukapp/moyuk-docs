"use strict";(self.webpackChunkmoyuk_docs=self.webpackChunkmoyuk_docs||[]).push([[204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Create an App",p={unversionedId:"apps/create-an-app",id:"apps/create-an-app",title:"Create an App",description:"An app is just a TypeScript function.",source:"@site/docs/apps/create-an-app.md",sourceDirName:"apps",slug:"/apps/create-an-app",permalink:"/apps/create-an-app",draft:!1,editUrl:"https://github.com/moyukapp/moyuk-docs/tree/main/docs/apps/create-an-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is an App?",permalink:"/apps/overview"},next:{title:"TypeScript in Moyuk",permalink:"/apps/typescript"}},l={},s=[{value:"How to create an app",id:"how-to-create-an-app",level:2},{value:"Edit the code",id:"edit-the-code",level:2},{value:"Code to create a form",id:"code-to-create-a-form",level:3},{value:"Example",id:"example",level:4}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-app"},"Create an App"),(0,r.kt)("p",null,"An app is just a TypeScript function.\nMoyuk automatically generates a form from the default export function's signature."),(0,r.kt)("h2",{id:"how-to-create-an-app"},"How to create an app"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"+")," Button on the navigation bar or ",(0,r.kt)("strong",{parentName:"li"},"New App")," button on the dashboard."),(0,r.kt)("li",{parentName:"ol"},"Edit the TypeScript code in the editor. Make sure to export a function as ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,r.kt)("li",{parentName:"ol"},"Name the app in ",(0,r.kt)("strong",{parentName:"li"},"App Info")," tab."),(0,r.kt)("li",{parentName:"ol"},"(Optional) Customize the form in ",(0,r.kt)("strong",{parentName:"li"},"Form Customization")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Publish changes")," button to release the app.")),(0,r.kt)("h2",{id:"edit-the-code"},"Edit the code"),(0,r.kt)("p",null,"You can edit the code in the editor in the ",(0,r.kt)("strong",{parentName:"p"},"Code")," tab.\nThe editor is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor"),", which is the same editor used in Visual Studio Code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Moyuk currently doesn't support multiple files.")),(0,r.kt)("h3",{id:"code-to-create-a-form"},"Code to create a form"),(0,r.kt)("p",null,"Moyuk finds the default export function and generates a form from its signature."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The parameters of the function are used as the form's input fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The parameter's type is used to determine the input field's type."),(0,r.kt)("li",{parentName:"ul"},"The parameter's default value is used as the input field's default value."),(0,r.kt)("li",{parentName:"ul"},"The parameter's name is used as the input field's label. (Converted to title case)"))),(0,r.kt)("li",{parentName:"ul"},"The return value of the function is used as the form's output."),(0,r.kt)("li",{parentName:"ul"},"The compiled function handles the form's submission.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"By default, the function is called when the input values are changed."),(0,r.kt)("li",{parentName:"ul"},"You can change this behavior in ",(0,r.kt)("strong",{parentName:"li"},"Form Customization")," tab.")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default function run(\n    name: string, // This becomes a text input field.\n    age: number = 20, // This becomes a number input field with the default value of 20.\n) {\n    return `Hello, ${name || 'unknown'}! You are ${age} years old.`; // This becomes a readonly text field.\n}\n")),(0,r.kt)("p",null,"This code generates a form like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generated form",src:a(1238).Z,width:"1912",height:"424"})))}c.isMDXComponent=!0},1238:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/form-example1-33f977fa410daf2b64866008da3c8588.png"}}]);