import{r as t,_ as x,j as n}from"./index--5ksn-NW.js";import{u as y}from"./Markdown-hPnvBnnz.js";import{u as w,F as k}from"./Gallery-y5a9DiCD.js";import"./helper-ABMQuD8K.js";import"./spring-ldJAPupP.js";import"./StyledButton-35pLkjI1.js";import"./LinkCard-HwNQ76Ou.js";import"./Divider-e8U1y6Id.js";import"./owner-3DfCGdUI.js";import"./utils-_EhTFuXB.js";import"./Collapse-O--UZ6Ei.js";import"./RichLink-SQz0dZoP.js";const O=o=>{const[E,m]=t.useState(!0),[v,a]=t.useState(""),[c,u]=t.useState(""),[_,l]=t.useState(),[h,f]=t.useState(),g=y();t.useEffect(()=>{x(()=>import("./mermaid.core-LCJJnp0l.js").then(r=>r.b4),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(async r=>{r.default.initialize({theme:g?"dark":"default"})})},[g]);const d=t.useId().split(":").join("");t.useEffect(()=>{if(!o.content)return;a(""),m(!0);let r=!1;x(()=>import("./mermaid.core-LCJJnp0l.js").then(s=>s.b4),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(async s=>{var p;const I=s.default;let i;try{i=await I.render(`mermaid-${d}`,o.content)}catch(e){(p=document.getElementById(`dmermaid-${d}`))==null||p.remove(),e instanceof Error&&a(e.message),u(""),l(void 0),f(void 0)}if(!r){if(i){u(i.svg);const e=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e!=null&&e[1]&&(e!=null&&e[2])&&(l(parseInt(e==null?void 0:e[1])),f(parseInt(e==null?void 0:e[2]))),a("")}return m(!1),()=>{r=!0}}})},[d,o.content]);const{w:S}=w(),b=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(b)))}`;return E?n.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-slate-100 text-sm dark:bg-neutral-800",children:"Mermaid Loading..."}):c?n.jsx("div",{children:n.jsx(k,{containerWidth:S,src:j,width:_,height:h})}):n.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:v||"Error"})};export{O as Mermaid};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./mermaid.core-LCJJnp0l.js","./index--5ksn-NW.js","./index-uxB4I8Jc.css","./owner-3DfCGdUI.js","./utils-_EhTFuXB.js","./helper-ABMQuD8K.js","./StyledButton-35pLkjI1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
