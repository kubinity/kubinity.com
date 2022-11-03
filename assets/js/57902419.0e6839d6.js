"use strict";(self.webpackChunkkubinity=self.webpackChunkkubinity||[]).push([[725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={},i="Roadmap",c={unversionedId:"about/roadmap",id:"about/roadmap",title:"Roadmap",description:"We're tracking ongoing development in a [public",source:"@site/docs/about/roadmap.md",sourceDirName:"about",slug:"/about/roadmap",permalink:"/docs/about/roadmap",draft:!1,editUrl:"https://github.com/kubinity-com/documentation/tree/main/docs/about/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/category/about"}},o={},l=[{value:"Milestone 1: MVP (Reached! \ud83c\udf89)",id:"milestone-1-mvp-reached-",level:2},{value:"Milestone 2: Service Abstraction (Reached! \ud83c\udf89)",id:"milestone-2-service-abstraction-reached-",level:2},{value:"Milestone 3: User Autonomy",id:"milestone-3-user-autonomy",level:2},{value:"Milestone 4: Web presence",id:"milestone-4-web-presence",level:2},{value:"Milestone 5: Pay-as-you-go",id:"milestone-5-pay-as-you-go",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"We're tracking ongoing development in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubinity-com/issues/issues"},"public\nrepository"),". Got feature requests\nor suggestions? Feel free to open an issue!"),(0,r.kt)("h2",{id:"milestone-1-mvp-reached-"},"Milestone 1: MVP (Reached! \ud83c\udf89)"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Admins can onboard new users via a simple command"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Users are able to authenticate against the cluster to view, deploy and delete resources"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A user can only access resources in their namespace"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Users can consult the documentation to see how to access the cluster and deploy services")),(0,r.kt)("h2",{id:"milestone-2-service-abstraction-reached-"},"Milestone 2: Service Abstraction (Reached! \ud83c\udf89)"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Users can leverage preexisting tools like ingress and storage")),(0,r.kt)("h2",{id:"milestone-3-user-autonomy"},"Milestone 3: User Autonomy"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Users can create an account via a web service to access the cluster"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Users can create multiple namespaces"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Users can fetch their access token, or, if they wish, the entire kubeconfig file"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Users can regenerate their access token"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Users can delete their account, whereby the namespace is deleted")),(0,r.kt)("h2",{id:"milestone-4-web-presence"},"Milestone 4: Web presence"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A landing page advertising the service, with links to docs and contact"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A blog with news to the platform")),(0,r.kt)("h2",{id:"milestone-5-pay-as-you-go"},"Milestone 5: Pay-as-you-go"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'A new "pay as you go" tier for namespaces, billed monthly')))}u.isMDXComponent=!0}}]);