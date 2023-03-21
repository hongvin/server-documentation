"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Login to the server",s={unversionedId:"server-user/login",id:"server-user/login",title:"Login to the server",description:"Before we begin, let's understand some of the underlying theory.",source:"@site/docs/server-user/login.md",sourceDirName:"server-user",slug:"/server-user/login",permalink:"/server-documentation/server-user/login",draft:!1,editUrl:"https://github.com/hongvin/server-documentation/docs/server-user/login.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Server User",permalink:"/server-documentation/category/for-server-user"},next:{title:"Basic Information of the Server",permalink:"/server-documentation/server-user/server-info"}},l={},c=[{value:"Network configuration",id:"network-configuration",level:3},{value:"Accessing the server outside of campus",id:"accessing-the-server-outside-of-campus",level:3},{value:"Signup a Tailscale account",id:"signup-a-tailscale-account",level:4},{value:"Accept invite to server node on your Tailscale account",id:"accept-invite-to-server-node-on-your-tailscale-account",level:4},{value:"Access to the server",id:"access-to-the-server",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"login-to-the-server"},"Login to the server"),(0,o.kt)("p",null,"Before we begin, let's understand some of the underlying theory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSH: ",(0,o.kt)("strong",{parentName:"li"},"Secure Shell Protocol")," is a cryptographic network protocol for operating network services securely over an unsecured network. We will use SSH to communicate between your computer and the server. Once we establish the connection between you and the server, you can carried out any activities on the server, as if you are in front of the server. SSH is just a protocol, to initiate the connection, you need to use specific application, such as Terminal, Power Shell, VSCode, etc. Login tools are explained ",(0,o.kt)("a",{parentName:"li",href:"#login-tools"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Linux: Most of the server use Linux as the operating system. Specifically, our server uses Ubuntu distribution of Linux. Do familarize yourself with Linux and common command used for Linux. "),(0,o.kt)("li",{parentName:"ul"},"Basic Network knowledge. Every computer and server in a network is assigned with unique IP.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"IP: Example ",(0,o.kt)("inlineCode",{parentName:"li"},"20.212.19.176"),"."),(0,o.kt)("li",{parentName:"ul"},"Domain name: Example ",(0,o.kt)("inlineCode",{parentName:"li"},"www.um.edu.my"),", which redirect to the IP. It is easier for you to remember domain name than IP.")))),(0,o.kt)("h3",{id:"network-configuration"},"Network configuration"),(0,o.kt)("p",null,"To ease everything up, we use Tailscale VPN to bypass the campus network's firewall. Typically, a campus network disallow certain ports to be access outside of the network. Therefore, the simplest way is to setup a VPN to bypass the firewall. A simple illustration is shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network configuration diagram",src:r(6842).Z,width:"472",height:"171"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can access the server without VPN if you are using campus network. You just need to know the server's IP address. ")),(0,o.kt)("p",null,"So, how can you access the server outside of campus?"),(0,o.kt)("h3",{id:"accessing-the-server-outside-of-campus"},"Accessing the server outside of campus"),(0,o.kt)("p",null,"The VPN server used is ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com/"},"Tailscale"),". It's simple to setup on both client and server. To access the server, you need to have an account on the server. Please follow the following guide to obtain access."),(0,o.kt)("h4",{id:"signup-a-tailscale-account"},"Signup a Tailscale account"),(0,o.kt)("p",null,"First thing first, have an account with ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com/"},"Tailscale"),". Follow the guide to install the Tailscale client on your PC. Once you have complete installing client on your computer, please provide the following details to Dr Chuah."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Things needed to access the server")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Email address registered on Tailscale."),(0,o.kt)("li",{parentName:"ol"},"Preferred username on server. Your username may only contain lowercase letters, underscore (",(0,o.kt)("inlineCode",{parentName:"li"},"_"),"), and dash (",(0,o.kt)("inlineCode",{parentName:"li"},"-"),")."))),(0,o.kt)("h4",{id:"accept-invite-to-server-node-on-your-tailscale-account"},"Accept invite to server node on your Tailscale account"),(0,o.kt)("p",null,"Once your account is created, you will be given an invite link to accept invitation to the network. Navigate to the link given, then the server node will appear in your account, named as ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu22"),". To understand how sharing works, Tailscale has a good explanation ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com/kb/1084/sharing/#how-sharing-works"},"here"),"."),(0,o.kt)("p",null,"Server administrator will then create a new ACL rule in order for you to access to the server. Please wait 24 hours before contacting administrator."),(0,o.kt)("h4",{id:"access-to-the-server"},"Access to the server"),(0,o.kt)("p",null,"Before that, ensure that you have connect to your Tailscale. You can use any login tools to access the server via ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <username>@<ip>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <username>@ubuntu"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu")," is set to be the alias for the IP address of server. The IP should looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"100.xxx.xxx.xxx"),". This is a unique IP address that Tailscale allocate to the server. A good explanation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com/kb/1155/terminology-and-concepts/#tailscale-ip-address"},"here"),"."))}p.isMDXComponent=!0},6842:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vpn-2c84488d91329e071890473b71eaa693.png"}}]);