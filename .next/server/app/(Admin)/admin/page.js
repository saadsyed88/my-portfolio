(()=>{var e={};e.id=782,e.ids=[782],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3451:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=r(482),n=r(9108),a=r(2563),i=r.n(a),o=r(8300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["(Admin)",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4041)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Admin)/admin/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6240)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Admin)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1016)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/layout.tsx"],template:[()=>Promise.resolve().then(r.bind(r,2612)),"/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/template.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Admin)/admin/page.tsx"],u="/(Admin)/admin/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(Admin)/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5979:(e,t,r)=>{let s={"21305f7536ec61fae6f5622240cc842a6d9c5bae":()=>Promise.resolve().then(r.bind(r,6567)).then(e=>e.$$ACTION_1)};async function n(e,...t){return(await s[e]()).apply(null,t)}e.exports={"21305f7536ec61fae6f5622240cc842a6d9c5bae":n.bind(null,"21305f7536ec61fae6f5622240cc842a6d9c5bae")}},8225:(e,t,r)=>{Promise.resolve().then(r.bind(r,8492))},7391:(e,t,r)=>{Promise.resolve().then(r.bind(r,2909))},6970:(e,t,r)=>{Promise.resolve().then(r.bind(r,9648))},784:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},8547:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},8492:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5344),n=r(3729),a=r(6212),i=r(9224);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,i.Z)("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]),d=(0,i.Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);var l=r(6506);r(8428);let c=()=>{let[e,t]=(0,n.useState)([]);console.log("\uD83D\uDE80 ~ UpdateProjects ~ projects:",e);let r=async()=>{t([]);let e=await fetch("api/projects");t(await e.json())};(0,n.useEffect)(()=>{r()},[]);let i=e=>{console.log("asdas",e)};return(0,s.jsxs)("div",{children:[s.jsx(a.z,{className:"p-4",children:s.jsx(l.default,{href:"/admin/addproject",children:"Add Project"})}),e?.map((e,t)=>s.jsxs("div",{className:" border-gray-300 p-4 my-5 gap-4 border flex justify-between w-[90%]",children:[s.jsxs("div",{className:"border flex flex-col gap-y-4 w-[60%]",children:[s.jsxs("div",{className:"flex py-4 gap-x-4 border-b-2",children:[s.jsx("h4",{children:"Project ID:"}),s.jsx("p",{children:e.id})]}),s.jsxs("div",{className:"flex gap-x-4 py-4 border-b-2",children:[s.jsx("h4",{children:"Image Url:"}),s.jsx("p",{children:e.imageUrl})]}),s.jsxs("div",{className:"flex gap-x-4 py-4 border-b-2",children:[s.jsx("h4",{children:"Category:"}),s.jsx("p",{children:e.category})]}),s.jsxs("div",{className:"flex gap-x-4 py-4 border-b-2",children:[s.jsx("h4",{children:"Description:"}),s.jsx("p",{children:e.description})]}),s.jsxs("div",{className:"flex gap-x-4 py-4",children:[s.jsx("h4",{children:"Github Link:"}),s.jsx("p",{children:e.githubLink})]})]}),s.jsxs("div",{className:"flex gap-x-4",children:[s.jsx(a.z,{onClick:()=>i(e),children:s.jsx(o,{size:14})}),s.jsx(l.default,{href:`/admin/editproject/${e.id}`,children:s.jsx(a.z,{children:s.jsx(d,{size:14})})})]})]},t))]})},u=()=>s.jsx(s.Fragment,{children:s.jsx("div",{children:s.jsx(c,{})})})},2909:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5344),n=r(3729);let a=()=>{let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY,r=document.body.scrollHeight-window.innerHeight;r&&t(100*Number((e/r).toFixed(2)))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e};var i=r(2852);let o={hidden:{opacity:0},enter:{opacity:1}},d=({children:e})=>{let t=a();return(0,s.jsxs)(s.Fragment,{children:[s.jsx(i.E.main,{variants:o,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:e}),s.jsx("span",{style:{transform:`translateY(${t-100}%)`},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},9648:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeProvider:()=>a});var s=r(5344),n=r(6256);function a({children:e,attribute:t,defaultTheme:r}){return s.jsx(n.f,{attribute:t,defaultTheme:r,children:e})}},6212:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var s=r(5344),n=r(3729),a=r(2751),i=r(8720),o=r(1626);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...i},l)=>{let c=n?a.g7:"button";return s.jsx(c,{className:(0,o.cn)(d({variant:t,size:r,className:e})),ref:l,...i})});l.displayName="Button"},1626:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(6815),n=r(9377);function a(...e){return(0,n.m6)((0,s.W)(e))}},9224:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(3729),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,s.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:l="",children:c,...u},p)=>(0,s.createElement)("svg",{ref:p,...n,width:i,height:i,stroke:r,strokeWidth:d?24*Number(o)/Number(i):o,className:["lucide",`lucide-${a(e)}`,l].join(" "),...u},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},6506:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(1476),n=r.n(s)},6567:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_1:()=>d,default:()=>l});var s=r(5036),n=r(4471);r(8616),r(2);var a=r(6274),i=r(867),o=r(7913);async function d(){return(0,i.redirect)("/login")}let l=()=>((0,n.U)("21305f7536ec61fae6f5622240cc842a6d9c5bae",d),(0,s.jsxs)("nav",{className:"hidden bg-white justify-center my-4  xl:flex gap-x-8 items-center",children:[[{path:"/admin",name:"My Projects"},{path:"/contact",name:"Contact"}].map((e,t)=>s.jsx(a.default,{href:e.path,className:"capitalize relative hover:text-primary transition-all ",children:e.name},t)),s.jsx(a.default,{href:"/",children:s.jsx(o.z,{children:"Home "})})]}))},4041:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/(Admin)/admin/page.tsx`),{__esModule:n,$$typeof:a}=s,i=s.default},6240:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var s=r(5036),n=r(6567);let a={title:"Admin Portal",description:"Generated by create next app"};function i({children:e}){return(0,s.jsxs)("section",{children:[s.jsx(n.default,{}),e]})}},1016:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>u});var s=r(5036),n=r(5939),a=r.n(n),i=r(6843);let o=(0,i.createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/context/ThemeProvider.tsx`),{__esModule:d,$$typeof:l}=o;o.default;let c=(0,i.createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/components/context/ThemeProvider.tsx#ThemeProvider`);r(7272);let u={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return s.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:s.jsx("body",{className:a().className,children:s.jsx(c,{attribute:"class",defaultTheme:"light",children:e})})})}},2612:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/Users/saad.shah/Documents/Nextjs/NextDC/my-portfolio/app/template.tsx`),{__esModule:n,$$typeof:a}=s,i=s.default},7913:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var s=r(5036),n=r(2),a=r(5303),i=r(8134),o=r(5752);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...i},l)=>{let c=n?a.g7:"button";return s.jsx(c,{className:(0,o.cn)(d({variant:t,size:r,className:e})),ref:l,...i})});l.displayName="Button"},5752:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(990),n=r(1774);function a(...e){return(0,n.m6)((0,s.W)(e))}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,886,337,893,896,918],()=>r(3451));module.exports=s})();