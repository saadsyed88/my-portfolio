(()=>{var e={};e.id=469,e.ids=[469],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var a=s(482),r=s(9108),i=s(2563),n=s.n(i),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(Home)",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3362)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Home)/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2773)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Home)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1016)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/layout.tsx"],template:[()=>Promise.resolve().then(s.bind(s,2612)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/template.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Home)/contact/page.tsx"],m="/(Home)/contact/page",x={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(Home)/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7391:(e,t,s)=>{Promise.resolve().then(s.bind(s,2909))},6970:(e,t,s)=>{Promise.resolve().then(s.bind(s,9648))},1566:(e,t,s)=>{Promise.resolve().then(s.bind(s,1103)),Promise.resolve().then(s.bind(s,5371))},784:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},2286:()=>{},2909:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(5344),r=s(3729);let i=()=>{let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=()=>{let e=window.scrollY,s=document.body.scrollHeight-window.innerHeight;s&&t(100*Number((e/s).toFixed(2)))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e};var n=s(2852);let o={hidden:{opacity:0},enter:{opacity:1}},l=({children:e})=>{let t=i();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.E.main,{variants:o,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:e}),a.jsx("span",{style:{transform:`translateY(${t-100}%)`},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},9648:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ThemeProvider:()=>i});var a=s(5344),r=s(6256);function i({children:e,attribute:t,defaultTheme:s}){return a.jsx(r.f,{attribute:t,defaultTheme:s,children:e})}},1103:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(5344),r=s(6506),i=s(3337);let n=[{path:"/",name:a.jsx(i.oK$,{})},{path:"/",name:a.jsx(i.ExP,{})},{path:"/",name:a.jsx(i.q7V,{})},{path:"/",name:a.jsx(i.NqZ,{})},{path:"/",name:a.jsx(i.Nrw,{})}],o=({containerStyles:e,iconStyles:t})=>a.jsx("div",{className:`${e}`,children:n.map((e,s)=>a.jsx(r.default,{href:e.path,children:a.jsx("div",{className:`${t}`,children:e.name})},s))})},6212:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var a=s(5344),r=s(3729),i=s(2751),n=s(8720),o=s(1626);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...n},d)=>{let c=r?i.g7:"button";return a.jsx(c,{className:(0,o.cn)(l({variant:t,size:s,className:e})),ref:d,...n})});d.displayName="Button"},5371:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>q});var a=s(5344),r=s(8428),i=s(3729),n=s(9410),o=s(6506);let l=()=>a.jsx(o.default,{href:"/",children:a.jsx(n.default,{src:"/logo.svg",width:54,height:54,priority:!0,alt:"Logo"})});var d=s(2169),c=s(1103),m=s(1331),x=s(8720),u=s(4513),p=s(1626);let h=m.fC,f=m.xz;m.x8;let g=m.h_,v=i.forwardRef(({className:e,...t},s)=>a.jsx(m.aV,{className:(0,p.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));v.displayName=m.aV.displayName;let y=(0,x.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),b=i.forwardRef(({side:e="right",className:t,children:s,...r},i)=>(0,a.jsxs)(g,{children:[a.jsx(v,{}),(0,a.jsxs)(m.VY,{ref:i,className:(0,p.cn)(y({side:e}),t),...r,children:[s,(0,a.jsxs)(m.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(u.Z,{className:"h-6 w-6"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));b.displayName=m.VY.displayName,i.forwardRef(({className:e,...t},s)=>a.jsx(m.Dx,{ref:s,className:(0,p.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=m.Dx.displayName,i.forwardRef(({className:e,...t},s)=>a.jsx(m.dk,{ref:s,className:(0,p.cn)("text-sm text-muted-foreground",e),...t})).displayName=m.dk.displayName;var j=s(2852);let N=[{path:"/",name:"Home"},{path:"/projects",name:"My Projects"},{path:"/contact",name:"Contact"}],w=({containerStyles:e,linkStyles:t,underlineStyles:s})=>{let i=(0,r.usePathname)();return a.jsx("nav",{className:`${e}`,children:N.map((e,r)=>(0,a.jsxs)(o.default,{href:e.path,className:`capitalize ${t}`,children:[e.path===i&&a.jsx(j.E.span,{initial:{y:"-100%"},animate:{y:0},transition:{type:"tween"},layoutId:"underline",className:`${s}`}),e.name]},r))})},k=()=>(0,a.jsxs)(h,{children:[a.jsx(f,{asChild:!0,children:a.jsx(d.Z,{className:"cursor-pointer"})}),a.jsx(b,{children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-between h-full py-8",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-y-32",children:[a.jsx(l,{}),a.jsx(w,{containerStyles:"flex flex-col items-center gap-y-6",linkStyles:"text-2xl "})]}),a.jsx(c.default,{containerStyles:"flex gap-x-4",iconStyles:"text-2xl"})]})})]});var P=s(8714),z=s(7180),S=s(6256),C=s(6212);let D=()=>{let{theme:e,setTheme:t}=(0,S.F)();return a.jsx("div",{children:(0,a.jsxs)(C.z,{variant:"outline",size:"icon",className:"rounded-full",onClick:()=>t("dark"===e?"light":"dark"),children:[a.jsx(P.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}),a.jsx(z.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})})},q=()=>{let[e,t]=(0,i.useState)(!1),s=(0,r.usePathname)();return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.jsx("header",{className:` ${e?"py-4 bg-white shadow-lg dark:bg-accent ":"py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all ${"/"===s&&"bg-[#fef9f5]"}`,children:a.jsx("div",{className:"container mx-auto",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[a.jsx(l,{}),(0,a.jsxs)("div",{className:"flex items-center gap-x-6",children:[a.jsx(w,{containerStyles:"hidden xl:flex gap-x-8 items-center",linkStyles:"relative hover:text-primary transition-all",underlineStyles:"absolute left-0 top-full h-[2px] bg-primary w-full"}),a.jsx(D,{}),a.jsx("div",{className:"xl:hidden ",children:a.jsx(k,{})})]})]})})})}},1626:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var a=s(6815),r=s(9377);function i(...e){return(0,r.m6)((0,a.W)(e))}},3362:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(5036),r=s(9508);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),n=(0,r.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),o=(0,r.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var l=s(2),d=s(7913),c=s(5752);let m=l.forwardRef(({className:e,type:t,...s},r)=>a.jsx("input",{type:t,className:(0,c.cn)("flex h-[54px] w-full rounded-md border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...s}));m.displayName="Input";let x=l.forwardRef(({className:e,...t},s)=>a.jsx("textarea",{className:(0,c.cn)("flex min-h-[180px] w-full rounded-[5px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...t}));x.displayName="Textarea";let u=()=>(0,a.jsxs)("form",{className:"flex flex-col gap-y-4",children:[(0,a.jsxs)("div",{className:"relative flex items-center",children:[a.jsx(m,{type:"name",id:"name",placeholder:"Name"}),a.jsx(i,{className:"absolute right-6",size:20})]}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[a.jsx(m,{type:"email",id:"email",placeholder:"Email"}),a.jsx(n,{className:"absolute right-6",size:20})]}),a.jsx("div",{className:"relative flex items-center",children:a.jsx(x,{id:"desc",placeholder:"Share Your Thoughts..."})}),a.jsx("div",{className:"flex w-full justify-end",children:(0,a.jsxs)(d.z,{className:"flex items-center gap-x-1 max-w-[166px]",children:["Let's Talk",a.jsx(o,{size:18})]})})]}),p=(0,r.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),h=(0,r.Z)("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]),f=()=>a.jsx("section",{children:(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsxs)("div",{className:"grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-4 text-primary text-lg mb-4",children:[a.jsx("span",{className:"w-[30px] h-[2px] bg-primary"}),"Say Hello"]}),a.jsx("h1",{className:"h1 max-w-md mb-8",children:"Let's Work Together."}),a.jsx("p",{className:"subtitle max-w-[400px]",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum odit facilis alias doloribus, velit veniam maxime officia nam quo ex iusto perferendis architecto? Exercitationem obcaecati quae magnam eaque cum!"})]}),a.jsx("div",{className:"hidden xl:flex w-full bg-contact_illustration_light bg-contain bg-no-repeat bg-top"})]}),(0,a.jsxs)("div",{className:"grid xl:grid-cols-2 mb-24 xl:mb-32",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-8",children:[a.jsx(n,{size:18,className:"text-primary"}),a.jsx("div",{children:"saadali7142@gmail.com"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-x-8",children:[a.jsx(p,{size:18,className:"text-primary"}),a.jsx("div",{children:"Street#3 Aziz Gardens, Sialkot"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-x-8",children:[a.jsx(h,{size:18,className:"text-primary"}),a.jsx("div",{children:"+92 3364973745"})]})]}),a.jsx(u,{})]})]})})},2773:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>c});var a=s(5036),r=s(1660);let i=()=>a.jsx("footer",{className:"bg-secondary py-12",children:a.jsx("div",{className:"container mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-between",children:[a.jsx(r.ZP,{containerStyles:"flex gap-x-6 mx-auto xl:mx-0 mb-4",iconStyles:"text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all  "}),a.jsx("div",{className:"text-muted-foreground",children:"Copyright \xa9 Syed Saad. All rights reserved."})]})})}),n=(0,s(6843).createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/ui/shared/Header.tsx`),{__esModule:o,$$typeof:l}=n,d=n.default,c={title:"APP",description:"Generated by create next app"};function m({children:e}){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(d,{}),e,a.jsx(i,{})]})}},1016:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>m});var a=s(5036),r=s(5939),i=s.n(r),n=s(6843);let o=(0,n.createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/context/ThemeProvider.tsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,n.createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/context/ThemeProvider.tsx#ThemeProvider`);s(7272);let m={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return a.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:a.jsx("body",{className:i().className,children:a.jsx(c,{attribute:"class",defaultTheme:"light",children:e})})})}},2612:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let a=(0,s(6843).createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/template.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default},1660:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>n});let a=(0,s(6843).createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/ui/HomeScreen/Socials.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default},7913:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var a=s(5036),r=s(2),i=s(5303),n=s(8134),o=s(5752);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...n},d)=>{let c=r?i.g7:"button";return a.jsx(c,{className:(0,o.cn)(l({variant:t,size:s,className:e})),ref:d,...n})});d.displayName="Button"},5752:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var a=s(990),r=s(1774);function i(...e){return(0,r.m6)((0,a.W)(e))}},9508:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(2),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,t)=>{let s=(0,a.forwardRef)(({color:s="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:c,...m},x)=>(0,a.createElement)("svg",{ref:x,...r,width:n,height:n,stroke:s,strokeWidth:l?24*Number(o)/Number(n):o,className:["lucide",`lucide-${i(e)}`,d].join(" "),...m},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,886,337,893,896,683,701],()=>s(9998));module.exports=a})();