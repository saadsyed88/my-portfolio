(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{6076:function(e,t,a){Promise.resolve().then(a.bind(a,8330)),Promise.resolve().then(a.bind(a,9629))},8330:function(e,t,a){"use strict";a.r(t);var s=a(3827),n=a(8792),r=a(997);let i=[{path:"/",name:(0,s.jsx)(r.oK$,{})},{path:"/",name:(0,s.jsx)(r.ExP,{})},{path:"/",name:(0,s.jsx)(r.q7V,{})},{path:"/",name:(0,s.jsx)(r.NqZ,{})},{path:"/",name:(0,s.jsx)(r.Nrw,{})}];t.default=e=>{let{containerStyles:t,iconStyles:a}=e;return(0,s.jsx)("div",{className:"".concat(t),children:i.map((e,t)=>(0,s.jsx)(n.default,{href:e.path,children:(0,s.jsx)("div",{className:"".concat(a),children:e.name})},t))})}},5754:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(3827),n=a(4090),r=a(9143),i=a(7742),o=a(1657);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:a,variant:n,size:i,asChild:d=!1,...c}=e,u=d?r.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:a})),ref:t,...c})});d.displayName="Button"},9629:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var s=a(3827),n=a(7907),r=a(4090),i=a(703),o=a(8792),l=()=>(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)(i.default,{src:"/logo.svg",width:54,height:54,priority:!0,alt:"Logo"})}),d=a(7802),c=a(8330),u=a(6555),f=a(7742),m=a(2235),x=a(1657);let h=u.fC,p=u.xz;u.x8;let g=u.h_,j=r.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(u.aV,{className:(0,x.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n,ref:t})});j.displayName=u.aV.displayName;let b=(0,f.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=r.forwardRef((e,t)=>{let{side:a="right",className:n,children:r,...i}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(j,{}),(0,s.jsxs)(u.VY,{ref:t,className:(0,x.cn)(b({side:a}),n),...i,children:[r,(0,s.jsxs)(u.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(m.Z,{className:"h-6 w-6"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});y.displayName=u.VY.displayName,r.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(u.Dx,{ref:t,className:(0,x.cn)("text-lg font-semibold text-foreground",a),...n})}).displayName=u.Dx.displayName,r.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(u.dk,{ref:t,className:(0,x.cn)("text-sm text-muted-foreground",a),...n})}).displayName=u.dk.displayName;var v=a(5406);let N=[{path:"/",name:"Home"},{path:"/projects",name:"My Projects"},{path:"/contact",name:"Contact"}];var w=e=>{let{containerStyles:t,linkStyles:a,underlineStyles:r}=e,i=(0,n.usePathname)();return(0,s.jsx)("nav",{className:"".concat(t),children:N.map((e,t)=>(0,s.jsxs)(o.default,{href:e.path,className:"capitalize ".concat(a),children:[e.path===i&&(0,s.jsx)(v.E.span,{initial:{y:"-100%"},animate:{y:0},transition:{type:"tween"},layoutId:"underline",className:"".concat(r)}),e.name]},t))})},k=()=>(0,s.jsxs)(h,{children:[(0,s.jsx)(p,{asChild:!0,children:(0,s.jsx)(d.Z,{className:"cursor-pointer"})}),(0,s.jsx)(y,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-between h-full py-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-y-32",children:[(0,s.jsx)(l,{}),(0,s.jsx)(w,{containerStyles:"flex flex-col items-center gap-y-6",linkStyles:"text-2xl "})]}),(0,s.jsx)(c.default,{containerStyles:"flex gap-x-4",iconStyles:"text-2xl"})]})})]}),z=a(1047),E=a(2891),S=a(1774),C=a(5754),V=()=>{let{theme:e,setTheme:t}=(0,S.F)();return(0,s.jsx)("div",{children:(0,s.jsxs)(C.z,{variant:"outline",size:"icon",className:"rounded-full",onClick:()=>t("dark"===e?"light":"dark"),children:[(0,s.jsx)(z.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}),(0,s.jsx)(E.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})})},_=()=>{let[e,t]=(0,r.useState)(!1),a=(0,n.usePathname)();return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsx)("header",{className:" ".concat(e?"py-4 bg-white shadow-lg dark:bg-accent ":"py-6 dark:bg-transparent"," sticky top-0 z-30 transition-all ").concat("/"===a&&"bg-[#fef9f5]"),children:(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(l,{}),(0,s.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,s.jsx)(w,{containerStyles:"hidden xl:flex gap-x-8 items-center",linkStyles:"relative hover:text-primary transition-all",underlineStyles:"absolute left-0 top-full h-[2px] bg-primary w-full"}),(0,s.jsx)(V,{}),(0,s.jsx)("div",{className:"xl:hidden ",children:(0,s.jsx)(k,{})})]})]})})})}},1657:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var s=a(3167),n=a(1367);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,s.W)(t))}}},function(e){e.O(0,[522,363,250,844,406,106,971,69,744],function(){return e(e.s=6076)}),_N_E=e.O()}]);