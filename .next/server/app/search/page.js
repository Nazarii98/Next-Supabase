(()=>{var e={};e.id=797,e.ids=[797],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6704:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>h,tree:()=>c});var r=t(7096),n=t(6132),a=t(7284),i=t.n(a),l=t(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=["",{children:["search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5058)),"/Users/nazarii/Desktop/Work/NextStudy/Next-Supabase/app/search/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2371)),"/Users/nazarii/Desktop/Work/NextStudy/Next-Supabase/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/nazarii/Desktop/Work/NextStudy/Next-Supabase/app/search/page.tsx"],x="/search/page",m={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/search/page",pathname:"/search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7653:(e,s,t)=>{Promise.resolve().then(t.bind(t,4257)),Promise.resolve().then(t.t.bind(t,7490,23))},1260:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,7490,23))},8259:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3579,23)),Promise.resolve().then(t.t.bind(t,619,23)),Promise.resolve().then(t.t.bind(t,1459,23)),Promise.resolve().then(t.t.bind(t,3456,23)),Promise.resolve().then(t.t.bind(t,847,23)),Promise.resolve().then(t.t.bind(t,7303,23))},4257:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var r=t(3854),n=t(1018),a=t(4218);function i(){let e=(0,n.useRouter)(),[s,t]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"text-left text-lg py-3 m-auto flex justify-center",children:[r.jsx("input",{className:"rounded  mr-3 p-2 w-[450px]",type:"text",placeholder:"State, city or town",value:s,onChange:e=>t(e.target.value)}),r.jsx("button",{className:"rounded bg-red-600 px-9 py-2 text-white",onClick:()=>{"banana"!==s&&e.push("/search")},children:"Let's go"})]})}},3854:(e,s,t)=>{"use strict";e.exports=t(2337).vendored["react-ssr"].ReactJsxRuntime},1018:(e,s,t)=>{"use strict";e.exports=t(7804)},6109:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>o});var r=t(5153);let n=(0,r.createProxy)(String.raw`/Users/nazarii/Desktop/Work/NextStudy/Next-Supabase/app/components/SearchBar.tsx`),{__esModule:a,$$typeof:i}=n,l=n.default,o=l},2371:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(4656),n=t(4353),a=t.n(n);function i(){return(0,r.jsxs)("nav",{className:"bg-white p-2 flex justify-between",children:[r.jsx(a(),{href:"/",className:"font-bold text-gray-700 text-2xl",children:"OpenTable"}),r.jsx("div",{children:(0,r.jsxs)("div",{className:"flex",children:[r.jsx("button",{className:"bg-blue-400 text-white border p-1 px-4 rounded mr-3",children:"Sign in"}),r.jsx("button",{className:"border p-1 px-4 rounded",children:"Sign up"})]})})]})}function l({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{}),r.jsx("body",{children:r.jsx("main",{className:"bg-gray-100 min-h-screen w-screen",children:(0,r.jsxs)("main",{className:"max-w-screen-2xl m-auto bg-white",children:[r.jsx(i,{}),e]})})})]})}t(7272)},5058:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var r=t(4656),n=t(6109);function a(){return r.jsx("div",{className:"bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2",children:r.jsx(n.ZP,{})})}function i(){return(0,r.jsxs)("div",{className:"w-1/5",children:[(0,r.jsxs)("div",{className:"border-b pb-4",children:[r.jsx("h1",{className:"mb-2",children:"Region"}),r.jsx("p",{className:"font-light text-reg",children:"Toronto"}),r.jsx("p",{className:"font-light text-reg",children:"Ottawa"}),r.jsx("p",{className:"font-light text-reg",children:"Montreal"}),r.jsx("p",{className:"font-light text-reg",children:"Hamilton"}),r.jsx("p",{className:"font-light text-reg",children:"Kingston"}),r.jsx("p",{className:"font-light text-reg",children:"Niagara"})]}),(0,r.jsxs)("div",{className:"border-b pb-4 mt-3",children:[r.jsx("h1",{className:"mb-2",children:"Cuisine"}),r.jsx("p",{className:"font-light text-reg",children:"Mexican"}),r.jsx("p",{className:"font-light text-reg",children:"Italian"}),r.jsx("p",{className:"font-light text-reg",children:"Chinese"})]}),(0,r.jsxs)("div",{className:"mt-3 pb-4",children:[r.jsx("h1",{className:"mb-2",children:"Price"}),(0,r.jsxs)("div",{className:"flex",children:[r.jsx("button",{className:"border w-full text-reg font-light rounded-l p-2",children:"$"}),r.jsx("button",{className:"border-r border-t border-b w-full text-reg font-light p-2",children:"$$"}),r.jsx("button",{className:"border-r border-t border-b w-full text-reg font-light p-2 rounded-r",children:"$$$"})]})]})]})}var l=t(4353),o=t.n(l);function c(){return(0,r.jsxs)("div",{className:"border-b flex pb-5",children:[r.jsx("img",{src:"https://images.otstatic.com/prod1/49153814/2/medium.jpg",alt:"",className:"w-44 rounded"}),(0,r.jsxs)("div",{className:"pl-5",children:[r.jsx("h2",{className:"text-3xl",children:"Aiāna Restaurant Collective"}),(0,r.jsxs)("div",{className:"flex items-start",children:[r.jsx("div",{className:"flex mb-2",children:"*****"}),r.jsx("p",{className:"ml-2 text-sm",children:"Awesome"})]}),r.jsx("div",{className:"mb-9",children:(0,r.jsxs)("div",{className:"font-light flex text-reg",children:[r.jsx("p",{className:"mr-4",children:"$$$"}),r.jsx("p",{className:"mr-4",children:"Mexican"}),r.jsx("p",{className:"mr-4",children:"Ottawa"})]})}),r.jsx("div",{className:"text-red-600",children:r.jsx(o(),{href:"/restaurant/milestones-stones",children:"View more information"})})]})]})}function d(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a,{}),(0,r.jsxs)("div",{className:"flex py-4 m-auto w-2/3 justify-between items-start",children:[r.jsx(i,{}),r.jsx("div",{className:"w-5/6",children:r.jsx(c,{})})]})]})}},7272:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[488],()=>t(6704));module.exports=r})();