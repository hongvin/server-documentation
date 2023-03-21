"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},a="Basic Information of the Server",s={unversionedId:"server-user/server-info",id:"server-user/server-info",title:"Basic Information of the Server",description:"File structure",source:"@site/docs/server-user/server-info.md",sourceDirName:"server-user",slug:"/server-user/server-info",permalink:"/server-documentation/server-user/server-info",draft:!1,editUrl:"https://github.com/hongvin/server-documentation/docs/server-user/server-info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Login to the server",permalink:"/server-documentation/server-user/login"},next:{title:"Useful Resources",permalink:"/server-documentation/server-user/useful-things"}},u={},l=[{value:"File structure",id:"file-structure",level:3},{value:"Dangerous Actions to avoid",id:"dangerous-actions-to-avoid",level:3},{value:"Setting up your requirement from scratch",id:"setting-up-your-requirement-from-scratch",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basic-information-of-the-server"},"Basic Information of the Server"),(0,n.kt)("h3",{id:"file-structure"},"File structure"),(0,n.kt)("p",null,"By default, your home folder should be ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/<username>"),". You are not able to access other user's file, except the dataset folder. The second disk is mounted at ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/dataset"),". This folder is accessible by all user. This folder is meant to store dataset, and so do not delete any other file on this folder."),(0,n.kt)("h3",{id:"dangerous-actions-to-avoid"},"Dangerous Actions to avoid"),(0,n.kt)("p",null,"To enable you to install certain software and requirements for your project, by default, you have the sudo previlage for your account. However, if you did not use it with care, you might corrupt the whole server! Below are some of the ",(0,n.kt)("strong",{parentName:"p"},"dangerous")," actions tha you should ",(0,n.kt)("strong",{parentName:"p"},"avoid at all cost"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"sudo apt-get upgrade"),". This will upgrade the whole system to the newest release of Ubuntu. This might cause a lot of ",(0,n.kt)("strong",{parentName:"p"},"mismatch requirements")," for your project, especially when the newest release has yet been used by most project maintainer. Although many online tutorial ask you to run this command, ",(0,n.kt)("strong",{parentName:"p"},"please skip this command"),", since it is usually not required.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Installing NVIDIA driver"),". NVIDIA driver is shared for all user in the server. If you specifically required certain version of the driver, please contact administrator before installing yourself! You should try to run the source code / project you intended to run before contacting administrator, since most of the time it's just compatible.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/opt/")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/nvidia/bin"),". Avoid at all cost. Do not try to delete or edit any file in the folder. If you use conda, the cudatoolkit is independent from ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt"),"."))),(0,n.kt)("h3",{id:"setting-up-your-requirement-from-scratch"},"Setting up your requirement from scratch"))}p.isMDXComponent=!0}}]);