import{E as Ct,n as P,Y as X,Z as Dt,_ as Y,$ as j,a0 as ze,A as ge,k as L,p as ce,a1 as We,a2 as kt,f as K,d as qe,j as le,D as Ge,a3 as vt,i as St,o as Pt,a4 as wt,a5 as Ot,a6 as Ft,a7 as It,a8 as Rt}from"./StyledButton-35pLkjI1.js";const Bt=(e,t)=>n=>t(e(n)),Ue=(...e)=>e.reduce(Bt);function Nt(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Kt(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ye(e,t,n){const r=e.getProps();return Ct(r,t,n!==void 0?n:r.custom,Nt(e),Kt(e))}let zt=P,je=P;const I=e=>e*1e3,w=e=>e/1e3,Wt={current:!1},Le=e=>Array.isArray(e)&&typeof e[0]=="number";function $e(e){return!!(!e||typeof e=="string"&&He[e]||Le(e)||Array.isArray(e)&&e.every($e))}const U=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,He={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:U([0,.65,.55,1]),circOut:U([.55,0,1,.45]),backIn:U([.31,.01,.66,-.59]),backOut:U([.33,1.53,.69,.99])};function _e(e){if(e)return Le(e)?U(e):Array.isArray(e)?e.map(_e):He[e]}function qt(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:a="loop",ease:c,times:l}={}){const o={[t]:n};l&&(o.offset=l);const u=_e(c);return Array.isArray(u)&&(o.easing=u),e.animate(o,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function Gt(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Ze=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ut=1e-7,jt=12;function Lt(e,t,n,r,i){let s,a,c=0;do a=t+(n-t)/2,s=Ze(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>Ut&&++c<jt);return a}function $(e,t,n,r){if(e===t&&n===r)return P;const i=s=>Lt(s,0,1,e,n);return s=>s===0||s===1?s:Ze(i(s),t,r)}const $t=$(.42,0,1,1),Ht=$(0,0,.58,1),Je=$(.42,0,.58,1),_t=e=>Array.isArray(e)&&typeof e[0]!="number",Qe=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Xe=e=>t=>1-e(1-t),be=e=>1-Math.sin(Math.acos(e)),Zt=Xe(be),Jt=Qe(be),Ye=$(.33,1.53,.69,.99),Ae=Xe(Ye),Qt=Qe(Ae),Xt=e=>(e*=2)<1?.5*Ae(e):.5*(2-Math.pow(2,-10*(e-1))),Yt={linear:P,easeIn:$t,easeInOut:Je,easeOut:Ht,circIn:be,circInOut:Jt,circOut:Zt,backIn:Ae,backInOut:Qt,backOut:Ye,anticipate:Xt},we=e=>{if(Array.isArray(e)){je(e.length===4);const[t,n,r,i]=e;return $(t,n,r,i)}else if(typeof e=="string")return Yt[e];return e},Ve=(e,t)=>n=>!!(X(n)&&Dt.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ee=(e,t,n)=>r=>{if(!X(r))return r;const[i,s,a,c]=r.match(Y);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},Et=e=>L(0,255,e),re={...ge,transform:e=>Math.round(Et(e))},F={test:Ve("rgb","red"),parse:Ee("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+re.transform(e)+", "+re.transform(t)+", "+re.transform(n)+", "+j(ze.transform(r))+")"};function en(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ue={test:Ve("#"),parse:en,transform:F.transform},N={test:Ve("hsl","hue"),parse:Ee("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ce.transform(j(t))+", "+ce.transform(j(n))+", "+j(ze.transform(r))+")"},v={test:e=>F.test(e)||ue.test(e)||N.test(e),parse:e=>F.test(e)?F.parse(e):N.test(e)?N.parse(e):ue.parse(e),transform:e=>X(e)?e:e.hasOwnProperty("red")?F.transform(e):N.transform(e)},E=(e,t,n)=>-n*e+n*t+e;function se(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function tn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;i=se(l,c,e+1/3),s=se(l,c,e),a=se(l,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}const ie=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},nn=[ue,F,N],rn=e=>nn.find(t=>t.test(e));function Oe(e){const t=rn(e);let n=t.parse(e);return t===N&&(n=tn(n)),n}const et=(e,t)=>{const n=Oe(e),r=Oe(t),i={...n};return s=>(i.red=ie(n.red,r.red,s),i.green=ie(n.green,r.green,s),i.blue=ie(n.blue,r.blue,s),i.alpha=E(n.alpha,r.alpha,s),F.transform(i))};function sn(e){var t,n;return isNaN(e)&&X(e)&&(((t=e.match(Y))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(We))===null||n===void 0?void 0:n.length)||0)>0}const tt={regex:kt,countKey:"Vars",token:"${v}",parse:P},nt={regex:We,countKey:"Colors",token:"${c}",parse:v.parse},rt={regex:Y,countKey:"Numbers",token:"${n}",parse:ge.parse};function ae(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function Z(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ae(n,tt),ae(n,nt),ae(n,rt),n}function st(e){return Z(e).values}function it(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Z(e),s=t.length;return a=>{let c=i;for(let l=0;l<s;l++)l<r?c=c.replace(tt.token,a[l]):l<r+n?c=c.replace(nt.token,v.transform(a[l])):c=c.replace(rt.token,j(a[l]));return c}}const an=e=>typeof e=="number"?0:e;function on(e){const t=st(e);return it(e)(t.map(an))}const z={test:sn,parse:st,createTransformer:it,getAnimatableNone:on},at=(e,t)=>n=>`${n>0?t:e}`;function ot(e,t){return typeof e=="number"?n=>E(e,t,n):v.test(e)?et(e,t):e.startsWith("var(")?at(e,t):lt(e,t)}const ct=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,a)=>ot(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}},cn=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ot(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},lt=(e,t)=>{const n=z.createTransformer(t),r=Z(e),i=Z(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Ue(ct(r.values,i.values),n):at(e,t)},ut=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Fe=(e,t)=>n=>E(e,t,n);function ln(e){return typeof e=="number"?Fe:typeof e=="string"?v.test(e)?et:lt:Array.isArray(e)?ct:typeof e=="object"?cn:Fe}function un(e,t,n){const r=[],i=n||ln(e[0]),s=e.length-1;for(let a=0;a<s;a++){let c=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||P:t;c=Ue(l,c)}r.push(c)}return r}function ft(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(je(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=un(t,r,i),c=a.length,l=o=>{let u=0;if(c>1)for(;u<e.length-2&&!(o<e[u+1]);u++);const h=ut(e[u],e[u+1],o);return a[u](h)};return n?o=>l(L(e[0],e[s-1],o)):l}function fn(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ut(0,t,r);e.push(E(n,1,i))}}function hn(e){const t=[0];return fn(t,e.length-1),t}function pn(e,t){return e.map(n=>n*t)}function dn(e,t){return e.map(()=>t||Je).splice(0,e.length-1)}function J({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=_t(r)?r.map(we):we(r),s={done:!1,value:t[0]},a=pn(n&&n.length===t.length?n:hn(t),e),c=ft(a,t,{ease:Array.isArray(i)?i:dn(t,i)});return{calculatedDuration:e,next:l=>(s.value=c(l),s.done=l>=e,s)}}function ht(e,t){return t?e*(1e3/t):0}const mn=5;function pt(e,t,n){const r=Math.max(t-mn,0);return ht(n-e(r),t-r)}const oe=.001,gn=.01,Ie=10,yn=.05,bn=1;function An({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;zt(e<=I(Ie));let a=1-t;a=L(yn,bn,a),e=L(gn,Ie,w(e)),a<1?(i=o=>{const u=o*a,h=u*e,g=u-n,f=fe(o,a),d=Math.exp(-h);return oe-g/f*d},s=o=>{const h=o*a*e,g=h*n+n,f=Math.pow(a,2)*Math.pow(o,2)*e,d=Math.exp(-h),m=fe(Math.pow(o,2),a);return(-i(o)+oe>0?-1:1)*((g-f)*d)/m}):(i=o=>{const u=Math.exp(-o*e),h=(o-n)*e+1;return-oe+u*h},s=o=>{const u=Math.exp(-o*e),h=(n-o)*(e*e);return u*h});const c=5/e,l=Tn(i,s,c);if(e=I(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const o=Math.pow(l,2)*r;return{stiffness:o,damping:a*2*Math.sqrt(r*o),duration:e}}}const Vn=12;function Tn(e,t,n){let r=n;for(let i=1;i<Vn;i++)r=r-e(r)/t(r);return r}function fe(e,t){return e*Math.sqrt(1-t*t)}const xn=["duration","bounce"],Mn=["stiffness","damping","mass"];function Re(e,t){return t.some(n=>e[n]!==void 0)}function Cn(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Re(e,Mn)&&Re(e,xn)){const n=An(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function dt({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],a={done:!1,value:i},{stiffness:c,damping:l,mass:o,duration:u,velocity:h,isResolvedFromDuration:g}=Cn({...r,velocity:-w(r.velocity||0)}),f=h||0,d=l/(2*Math.sqrt(c*o)),m=s-i,x=w(Math.sqrt(c/o)),M=Math.abs(m)<5;n||(n=M?.01:2),t||(t=M?.005:.5);let V;if(d<1){const p=fe(x,d);V=b=>{const A=Math.exp(-d*x*b);return s-A*((f+d*x*m)/p*Math.sin(p*b)+m*Math.cos(p*b))}}else if(d===1)V=p=>s-Math.exp(-x*p)*(m+(f+x*m)*p);else{const p=x*Math.sqrt(d*d-1);V=b=>{const A=Math.exp(-d*x*b),k=Math.min(p*b,300);return s-A*((f+d*x*m)*Math.sinh(k)+p*m*Math.cosh(k))/p}}return{calculatedDuration:g&&u||null,next:p=>{const b=V(p);if(g)a.done=p>=u;else{let A=f;p!==0&&(d<1?A=pt(V,p,b):A=0);const k=Math.abs(A)<=n,C=Math.abs(s-b)<=t;a.done=k&&C}return a.value=a.done?s:b,a}}}function Be({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:c,max:l,restDelta:o=.5,restSpeed:u}){const h=e[0],g={done:!1,value:h},f=y=>c!==void 0&&y<c||l!==void 0&&y>l,d=y=>c===void 0?l:l===void 0||Math.abs(c-y)<Math.abs(l-y)?c:l;let m=n*t;const x=h+m,M=a===void 0?x:a(x);M!==x&&(m=M-h);const V=y=>-m*Math.exp(-y/r),p=y=>M+V(y),b=y=>{const D=V(y),R=p(y);g.done=Math.abs(D)<=o,g.value=g.done?M:R};let A,k;const C=y=>{f(g.value)&&(A=y,k=dt({keyframes:[g.value,d(g.value)],velocity:pt(p,y,g.value),damping:i,stiffness:s,restDelta:o,restSpeed:u}))};return C(0),{calculatedDuration:null,next:y=>{let D=!1;return!k&&A===void 0&&(D=!0,b(y),C(y)),A!==void 0&&y>A?k.next(y-A):(!D&&b(y),g)}}}const Dn=e=>{const t=({timestamp:n})=>e(n);return{start:()=>K.update(t,!0),stop:()=>qe(t),now:()=>le.isProcessing?le.timestamp:performance.now()}},Ne=2e4;function Ke(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ne;)t+=n,r=e.next(t);return t>=Ne?1/0:t}const kn={decay:Be,inertia:Be,tween:J,keyframes:J,spring:dt};function Q({autoplay:e=!0,delay:t=0,driver:n=Dn,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:c="loop",onPlay:l,onStop:o,onComplete:u,onUpdate:h,...g}){let f=1,d=!1,m,x;const M=()=>{x=new Promise(T=>{m=T})};M();let V;const p=kn[i]||J;let b;p!==J&&typeof r[0]!="number"&&(b=ft([0,100],r,{clamp:!1}),r=[0,100]);const A=p({...g,keyframes:r});let k;c==="mirror"&&(k=p({...g,keyframes:[...r].reverse(),velocity:-(g.velocity||0)}));let C="idle",y=null,D=null,R=null;A.calculatedDuration===null&&s&&(A.calculatedDuration=Ke(A));const{calculatedDuration:ee}=A;let W=1/0,B=1/0;ee!==null&&(W=ee+a,B=W*(s+1)-a);let S=0;const te=T=>{if(D===null)return;f>0&&(D=Math.min(D,T)),f<0&&(D=Math.min(T-B/f,D)),y!==null?S=y:S=Math.round(T-D)*f;const q=S-t*(f>=0?1:-1),ke=f>=0?q<0:q>B;S=Math.max(q,0),C==="finished"&&y===null&&(S=B);let ve=S,Se=A;if(s){const ne=Math.min(S,B)/W;let H=Math.floor(ne),O=ne%1;!O&&ne>=1&&(O=1),O===1&&H--,H=Math.min(H,s+1),!!(H%2)&&(c==="reverse"?(O=1-O,a&&(O-=a/W)):c==="mirror"&&(Se=k)),ve=L(0,1,O)*W}const G=ke?{done:!1,value:r[0]}:Se.next(ve);b&&(G.value=b(G.value));let{done:Pe}=G;!ke&&ee!==null&&(Pe=f>=0?S>=B:S<=0);const Mt=y===null&&(C==="finished"||C==="running"&&Pe);return h&&h(G.value),Mt&&xt(),G},xe=()=>{V&&V.stop(),V=void 0},Me=()=>{C="idle",xe(),m(),M(),D=R=null},xt=()=>{C="finished",u&&u(),xe(),m()},Ce=()=>{if(d)return;V||(V=n(te));const T=V.now();l&&l(),y!==null?D=T-y:(!D||C==="finished")&&(D=T),C==="finished"&&M(),R=D,y=null,C="running",V.start()};e&&Ce();const De={then(T,q){return x.then(T,q)},get time(){return w(S)},set time(T){T=I(T),S=T,y!==null||!V||f===0?y=T:D=V.now()-T/f},get duration(){const T=A.calculatedDuration===null?Ke(A):A.calculatedDuration;return w(T)},get speed(){return f},set speed(T){T===f||!V||(f=T,De.time=w(S))},get state(){return C},play:Ce,pause:()=>{C="paused",y=S},stop:()=>{d=!0,C!=="idle"&&(C="idle",o&&o(),Me())},cancel:()=>{R!==null&&te(R),Me()},complete:()=>{C="finished"},sample:T=>(D=0,te(T))};return De}function vn(e){let t;return()=>(t===void 0&&(t=e()),t)}const Sn=vn(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pn=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),_=10,wn=2e4,On=(e,t)=>t.type==="spring"||e==="backgroundColor"||!$e(t.ease);function Fn(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Sn()&&Pn.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,c,l,o=!1;const u=()=>{l=new Promise(p=>{c=p})};u();let{keyframes:h,duration:g=300,ease:f,times:d}=i;if(On(t,i)){const p=Q({...i,repeat:0,delay:0});let b={done:!1,value:h[0]};const A=[];let k=0;for(;!b.done&&k<wn;)b=p.sample(k),A.push(b.value),k+=_;d=void 0,h=A,g=k-_,f="linear"}const m=qt(e.owner.current,t,h,{...i,duration:g,ease:f,times:d}),x=()=>{o=!1,m.cancel()},M=()=>{o=!0,K.update(x),c(),u()};return m.onfinish=()=>{o||(e.set(Gt(h,i)),r&&r(),M())},{then(p,b){return l.then(p,b)},attachTimeline(p){return m.timeline=p,m.onfinish=null,P},get time(){return w(m.currentTime||0)},set time(p){m.currentTime=I(p)},get speed(){return m.playbackRate},set speed(p){m.playbackRate=p},get duration(){return w(g)},play:()=>{a||(m.play(),qe(x))},pause:()=>m.pause(),stop:()=>{if(a=!0,m.playState==="idle")return;const{currentTime:p}=m;if(p){const b=Q({...i,autoplay:!1});e.setWithVelocity(b.sample(p-_).value,b.sample(p).value,_)}M()},complete:()=>{o||m.finish()},cancel:M}}function In({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:P,pause:P,stop:P,then:s=>(s(),Promise.resolve()),cancel:P,complete:P});return t?Q({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Rn={type:"spring",stiffness:500,damping:25,restSpeed:10},Bn=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Nn={type:"keyframes",duration:.8},Kn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zn=(e,{keyframes:t})=>t.length>2?Nn:Ge.has(e)?e.startsWith("scale")?Bn(t[1]):Rn:Kn,he=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(z.test(t)||t==="0")&&!t.startsWith("url(")),Wn=new Set(["brightness","contrast","saturate","opacity"]);function qn(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Y)||[];if(!r)return e;const i=n.replace(r,"");let s=Wn.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Gn=/([a-z-]*)\(.*?\)/g,pe={...z,getAnimatableNone:e=>{const t=e.match(Gn);return t?t.map(qn).join(" "):e}},Un={...vt,color:v,backgroundColor:v,outlineColor:v,fill:v,stroke:v,borderColor:v,borderTopColor:v,borderRightColor:v,borderBottomColor:v,borderLeftColor:v,filter:pe,WebkitFilter:pe},jn=e=>Un[e];function mt(e,t){let n=jn(e);return n!==pe&&(n=z),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const gt=e=>/^0[^.\s]+$/.test(e);function Ln(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||gt(e)}function $n(e,t,n,r){const i=he(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=r.from!==void 0?r.from:e.get();let c;const l=[];for(let o=0;o<s.length;o++)s[o]===null&&(s[o]=o===0?a:s[o-1]),Ln(s[o])&&l.push(o),typeof s[o]=="string"&&s[o]!=="none"&&s[o]!=="0"&&(c=s[o]);if(i&&l.length&&c)for(let o=0;o<l.length;o++){const u=l[o];s[u]=mt(t,c)}return s}function Hn({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:c,from:l,elapsed:o,...u}){return!!Object.keys(u).length}function yt(e,t){return e[t]||e.default||e}const _n={skipAnimations:!1},Zn=(e,t,n,r={})=>i=>{const s=yt(r,e)||{},a=s.delay||r.delay||0;let{elapsed:c=0}=r;c=c-I(a);const l=$n(t,e,n,s),o=l[0],u=l[l.length-1],h=he(e,o),g=he(e,u);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:d=>{t.set(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(Hn(s)||(f={...f,...zn(e,f)}),f.duration&&(f.duration=I(f.duration)),f.repeatDelay&&(f.repeatDelay=I(f.repeatDelay)),!h||!g||Wt.current||s.type===!1||_n.skipAnimations)return In(f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const d=Fn(t,e,f);if(d)return d}return Q(f)};function Jn(e){return!!(St(e)&&e.add)}const Qn=e=>/^\-?\d*\.?\d+$/.test(e);function Xn(e,t){e.indexOf(t)===-1&&e.push(t)}function Yn(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class En{constructor(){this.subscriptions=[]}add(t){return Xn(this.subscriptions,t),()=>Yn(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const er=e=>!isNaN(parseFloat(e));class tr{constructor(t,n={}){this.version="10.17.9",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:a}=le;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,K.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>K.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=er(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new En);const r=this.events[t].add(n);return t==="change"?()=>{r(),K.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ht(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bt(e,t){return new tr(e,t)}const At=e=>t=>t.test(e),nr={test:e=>e==="auto",parse:e=>e},Vt=[ge,Pt,ce,wt,Ot,Ft,nr],pr=e=>Vt.find(At(e)),rr=[...Vt,v,z],sr=e=>rr.find(At(e));function ir(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,bt(n))}function Te(e,t){const n=ye(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const a in s){const c=It(s[a]);ir(e,a,c)}}function de(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&Te(e,i),e.variantChildren&&e.variantChildren.forEach(s=>{de(s,t)})})}function dr(e,t){if(Array.isArray(t))return de(e,t);if(typeof t=="string")return de(e,[t]);Te(e,t)}function mr(e,t,n){var r,i;const s=Object.keys(t).filter(c=>!e.hasValue(c)),a=s.length;if(a)for(let c=0;c<a;c++){const l=s[c],o=t[l];let u=null;Array.isArray(o)&&(u=o[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(Qn(u)||gt(u))?u=parseFloat(u):!sr(u)&&z.test(o)&&(u=mt(l,o)),e.addValue(l,bt(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function ar(e,t){return t?(t[e]||t.default||t).from:void 0}function gr(e,t,n){const r={};for(const i in e){const s=ar(i,t);if(s!==void 0)r[i]=s;else{const a=n.getValue(i);a&&(r[i]=a.get())}}return r}function or({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function cr(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Tt(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...c}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const o=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const h in c){const g=e.getValue(h),f=c[h];if(!g||f===void 0||u&&or(u,h))continue;const d={delay:n,elapsed:0,...yt(s||{},h)};if(window.HandoffAppearAnimations){const M=e.getProps()[Rt];if(M){const V=window.HandoffAppearAnimations(M,h,g,K);V!==null&&(d.elapsed=V,d.isHandoff=!0)}}let m=!d.isHandoff&&!cr(g,f);if(d.type==="spring"&&(g.getVelocity()||d.velocity)&&(m=!1),g.animation&&(m=!1),m)continue;g.start(Zn(h,g,f,e.shouldReduceMotion&&Ge.has(h)?{type:!1}:d));const x=g.animation;Jn(l)&&(l.add(h),x.then(()=>l.remove(h))),o.push(x)}return a&&Promise.all(o).then(()=>{a&&Te(e,a)}),o}function me(e,t,n={}){const r=ye(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Tt(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:o=0,staggerChildren:u,staggerDirection:h}=i;return lr(e,t,o+l,u,h,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[l,o]=c==="beforeChildren"?[s,a]:[a,s];return l().then(()=>o())}else return Promise.all([s(),a(n.delay)])}function lr(e,t,n=0,r=0,i=1,s){const a=[],c=(e.variantChildren.size-1)*r,l=i===1?(o=0)=>o*r:(o=0)=>c-o*r;return Array.from(e.variantChildren).sort(ur).forEach((o,u)=>{o.notify("AnimationStart",t),a.push(me(o,t,{...s,delay:n+l(u)}).then(()=>o.notify("AnimationComplete",t)))}),Promise.all(a)}function ur(e,t){return e.sortNodePosition(t)}function yr(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>me(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=me(e,t,n);else{const i=typeof t=="function"?ye(e,t,n.custom):t;r=Promise.all(Tt(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const br={type:"spring",damping:24},Ar={type:"spring",stiffness:300,damping:20},Vr={duration:.35,type:"spring",stiffness:120,damping:20};export{En as S,br as a,bt as b,yr as c,dr as d,I as e,w as f,E as g,ut as h,Zn as i,z as j,Zt as k,Xn as l,Ar as m,Yn as n,yt as o,Ue as p,Qn as q,ye as r,Vr as s,pr as t,je as u,Jn as v,gr as w,mr as x,jn as y,Q as z};
