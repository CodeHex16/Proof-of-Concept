import{aY as V,k,ao as Ae,aT as Oe,H as x,J as le,p as y,au as je,Y as Me,f as g,aG as ue,aZ as T,a_ as Q,a$ as qe,b0 as Fe,b1 as Ue,aL as B,an as S,U as ce,P as de,r as ve,Q as me,b2 as Ye,q as N,v as $,b3 as Xe,b4 as Ge,a as d,x as fe,aS as Je,T as Ke,aX as ge,al as j,s as E,g as W,aO as Qe,N as he,i as Ze,a6 as Z,a7 as et,F as ye,a8 as tt,C as ee,b5 as nt,b6 as te,E as ne,a4 as at,a2 as st,aw as it,b7 as rt,b8 as ae,h as ot,aJ as lt,aE as ut}from"./index-D8v5APta.js";const be=["top","bottom"],ct=["start","end","left","right"];function Mt(e,t){let[n,a]=e.split(" ");return a||(a=V(be,n)?"start":V(ct,n)?"top":"center"),{side:se(n,t),align:se(a,t)}}function se(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function qt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Ft(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Ut(e){return{side:e.align,align:e.side}}function Yt(e){return V(be,e.side)?"y":"x"}function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return k()({name:n??Ae(Oe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...x()},setup(a,s){let{slots:i}=s;return()=>{var o;return le(a.tag,{class:[e,a.class],style:a.style},(o=i.default)==null?void 0:o.call(i))}}})}const M=y({tag:{type:String,default:"div"}},"tag"),dt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),vt=k(!1)({name:"VDefaultsProvider",props:dt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:i,root:o,scoped:r}=je(e);return Me(a,{reset:i,root:o,scoped:r,disabled:s}),()=>{var v;return(v=n.default)==null?void 0:v.call(n)}}});function q(e){return ue(()=>{const t=[],n={};if(e.value.background)if(Q(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&qe(e.value.background)){const a=Fe(e.value.background);if(a.a==null||a.a===1){const s=Ue(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Q(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function mt(e,t){const n=g(()=>({text:T(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=q(n);return{textColorClasses:a,textColorStyles:s}}function ft(e,t){const n=g(()=>({background:T(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=q(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const gt=["x-small","small","default","large","x-large"],pe=y({size:{type:[String,Number],default:"default"}},"size");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return ue(()=>{let n,a;return V(gt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:S(e.size),height:S(e.size)}),{sizeClasses:n,sizeStyles:a}})}const ht=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ce,...x(),...pe(),...M({tag:"i"}),...de()},"VIcon"),yt=k()({name:"VIcon",props:ht(),setup(e,t){let{attrs:n,slots:a}=t;const s=ve(),{themeClasses:i}=me(e),{iconData:o}=Ye(g(()=>s.value||e.icon)),{sizeClasses:r}=_e(e),{textColorClasses:v,textColorStyles:u}=mt(N(e,"color"));return $(()=>{var h,c;const l=(h=a.default)==null?void 0:h.call(a);l&&(s.value=(c=Xe(l).filter(_=>_.type===Ge&&_.children&&typeof _.children=="string")[0])==null?void 0:c.children);const m=!!(n.onClick||n.onClickOnce);return d(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,r.value,v.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:S(e.size),height:S(e.size),width:S(e.size)},u.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[l]})}),{}}}),Se=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ce(e){return{dimensionStyles:g(()=>{const n={},a=S(e.height),s=S(e.maxHeight),i=S(e.maxWidth),o=S(e.minHeight),r=S(e.minWidth),v=S(e.width);return a!=null&&(n.height=a),s!=null&&(n.maxHeight=s),i!=null&&(n.maxWidth=i),o!=null&&(n.minHeight=o),r!=null&&(n.minWidth=r),v!=null&&(n.width=v),n})}}function bt(e){return{aspectStyles:g(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ke=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...x(),...Se()},"VResponsive"),ie=k()({name:"VResponsive",props:ke(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=bt(e),{dimensionStyles:s}=Ce(e);return $(()=>{var i;return d("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[d("div",{class:"v-responsive__sizer",style:a.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&d("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),we=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{roundedClasses:g(()=>{const a=T(e)?e.value:e.rounded,s=T(e)?e.value:e.tile,i=[];if(a===!0||a==="")i.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const o of String(a).split(" "))i.push(`rounded-${o}`);else(s||a===!1)&&i.push("rounded-0");return i})}}const pt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,group:i,...o}=e,{component:r=i?Je:Ke,...v}=typeof a=="object"?a:{};return le(r,fe(typeof a=="string"?{name:s?"":a}:v,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:i}).filter(u=>{let[l,m]=u;return m!==void 0})),o),n)};function _t(e,t){if(!ge)return;const n=t.modifiers||{},a=t.value,{handler:s,options:i}=typeof a=="object"?a:{handler:a,options:{}},o=new IntersectionObserver(function(){var m;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const u=(m=e._observe)==null?void 0:m[t.instance.$.uid];if(!u)return;const l=r.some(h=>h.isIntersecting);s&&(!n.quiet||u.init)&&(!n.once||l||u.init)&&s(l,r,v),l&&n.once?Te(e,t):u.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function Te(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const St={mounted:_t,unmounted:Te},Ct=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ke(),...x(),...we(),...pt()},"VImg"),kt=k()({name:"VImg",directives:{intersect:St},props:Ct(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:i}=ft(N(e,"color")),{roundedClasses:o}=Ee(e),r=j("VImg"),v=E(""),u=ve(),l=E(e.eager?"loading":"idle"),m=E(),h=E(),c=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=g(()=>c.value.aspect||m.value/h.value||0);W(()=>e.src,()=>{w(l.value!=="idle")}),W(_,(f,b)=>{!f&&b&&u.value&&L(u.value)}),Qe(()=>w());function w(f){if(!(e.eager&&f)&&!(ge&&!f&&!e.eager)){if(l.value="loading",c.value.lazySrc){const b=new Image;b.src=c.value.lazySrc,L(b,null)}c.value.src&&he(()=>{var b;n("loadstart",((b=u.value)==null?void 0:b.currentSrc)||c.value.src),setTimeout(()=>{var C;if(!r.isUnmounted)if((C=u.value)!=null&&C.complete){if(u.value.naturalWidth||U(),l.value==="error")return;_.value||L(u.value,null),l.value==="loading"&&F()}else _.value||L(u.value),Y()})})}}function F(){var f;r.isUnmounted||(Y(),L(u.value),l.value="loaded",n("load",((f=u.value)==null?void 0:f.currentSrc)||c.value.src))}function U(){var f;r.isUnmounted||(l.value="error",n("error",((f=u.value)==null?void 0:f.currentSrc)||c.value.src))}function Y(){const f=u.value;f&&(v.value=f.currentSrc||f.src)}let H=-1;Ze(()=>{clearTimeout(H)});function L(f){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{if(clearTimeout(H),r.isUnmounted)return;const{naturalHeight:J,naturalWidth:K}=f;J||K?(m.value=K,h.value=J):!f.complete&&l.value==="loading"&&b!=null?H=window.setTimeout(C,b):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,h.value=1)};C()}const X=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Ne=()=>{var C;if(!c.value.src||l.value==="idle")return null;const f=d("img",{class:["v-img__img",X.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:F,onError:U},null),b=(C=a.sources)==null?void 0:C.call(a);return d(R,{transition:e.transition,appear:!0},{default:()=>[Z(b?d("picture",{class:"v-img__picture"},[b,f]):f,[[tt,l.value==="loaded"]])]})},Ie=()=>d(R,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&d("img",{class:["v-img__img","v-img__img--preload",X.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),He=()=>a.placeholder?d(R,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!a.error)&&d("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,We=()=>a.error?d(R,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&d("div",{class:"v-img__error"},[a.error()])]}):null,De=()=>e.gradient?d("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,G=E(!1);{const f=W(_,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.value=!0})}),f())})}return $(()=>{const f=ie.filterProps(e);return Z(d(ie,fe({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!G.value},s.value,o.value,e.class],style:[{width:S(e.width==="auto"?m.value:e.width)},i.value,e.style]},f,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>d(ye,null,[d(Ne,null,null),d(Ie,null,null),d(De,null,null),d(He,null,null),d(We,null,null)]),default:a.default}),[[et("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:u,state:l,naturalWidth:m,naturalHeight:h}}}),wt=y({border:[Boolean,Number,String]},"border");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{borderClasses:g(()=>{const a=T(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`border-${i}`);return s})}}const Tt=[null,"default","comfortable","compact"],xt=y({density:{type:String,default:"default",validator:e=>Tt.includes(e)}},"density");function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{densityClasses:g(()=>`${t}--density-${e.density}`)}}const Pt=["elevated","flat","tonal","outlined","text","plain"];function zt(e,t){return d(ye,null,[e&&d("span",{key:"overlay",class:`${t}__overlay`},null),d("span",{key:"underlay",class:`${t}__underlay`},null)])}const Bt=y({color:String,variant:{type:String,default:"elevated",validator:e=>Pt.includes(e)}},"variant");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();const n=g(()=>{const{variant:i}=ee(e);return`${t}--variant-${i}`}),{colorClasses:a,colorStyles:s}=q(g(()=>{const{variant:i,color:o}=ee(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const Rt=y({start:Boolean,end:Boolean,icon:ce,image:String,text:String,...wt(),...x(),...xt(),...we(),...pe(),...M(),...de(),...Bt({variant:"flat"})},"VAvatar"),Gt=k()({name:"VAvatar",props:Rt(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=me(e),{borderClasses:s}=Et(e),{colorClasses:i,colorStyles:o,variantClasses:r}=$t(e),{densityClasses:v}=Lt(e),{roundedClasses:u}=Ee(e),{sizeClasses:l,sizeStyles:m}=_e(e);return $(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,i.value,v.value,u.value,l.value,r.value,e.class],style:[o.value,m.value,e.style]},{default:()=>[n.default?d(vt,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?d(kt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(yt,{key:"icon",icon:e.icon},null):e.text,zt(!1,"v-avatar")]})),{}}}),Jt=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Kt(e){return{elevationClasses:g(()=>{const n=T(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function Vt(){const e=j("useRoute");return g(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Qt(){var e,t;return(t=(e=j("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Zt(e,t){var m,h;const n=nt("RouterLink"),a=g(()=>!!(e.href||e.to)),s=g(()=>(a==null?void 0:a.value)||te(t,"click")||te(e,"click"));if(typeof n=="string"||!("useLink"in n)){const c=N(e,"href");return{isLink:a,isClickable:s,href:c,linkProps:ne({href:c})}}const i=g(()=>({...e,to:N(()=>e.to||"")})),o=n.useLink(i.value),r=g(()=>e.to?o:void 0),v=Vt(),u=g(()=>{var c,_,w;return r.value?e.exact?v.value?((w=r.value.isExactActive)==null?void 0:w.value)&&at(r.value.route.value.query,v.value.query):((_=r.value.isExactActive)==null?void 0:_.value)??!1:((c=r.value.isActive)==null?void 0:c.value)??!1:!1}),l=g(()=>{var c;return e.to?(c=r.value)==null?void 0:c.route.value.href:e.href});return{isLink:a,isClickable:s,isActive:u,route:(m=r.value)==null?void 0:m.route,navigate:(h=r.value)==null?void 0:h.navigate,href:l,linkProps:ne({href:l,"aria-current":g(()=>u.value?"page":void 0)})}}const en=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let D=!1;function tn(e,t){let n=!1,a,s;st&&(he(()=>{window.addEventListener("popstate",i),a=e==null?void 0:e.beforeEach((o,r,v)=>{D?n?t(v):v():setTimeout(()=>n?t(v):v()),D=!0}),s=e==null?void 0:e.afterEach(()=>{D=!1})}),it(()=>{window.removeEventListener("popstate",i),a==null||a(),s==null||s()}));function i(o){var r;(r=o.state)!=null&&r.replaced||(n=!0,setTimeout(()=>n=!1))}}const A=Symbol("rippleStop"),Nt=80;function re(e,t){e.style.transform=t,e.style.webkitTransform=t}function O(e){return e.constructor.name==="TouchEvent"}function xe(e){return e.constructor.name==="KeyboardEvent"}const It=function(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!xe(e)){const h=t.getBoundingClientRect(),c=O(e)?e.touches[e.touches.length-1]:e;a=c.clientX-h.left,s=c.clientY-h.top}let i=0,o=.3;(m=t._ripple)!=null&&m.circle?(o=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((a-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-i*2)/2}px`,v=`${(t.clientHeight-i*2)/2}px`,u=n.center?r:`${a-i}px`,l=n.center?v:`${s-i}px`;return{radius:i,scale:o,x:u,y:l,centerX:r,centerY:v}},I={show(e,t){var c;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=t==null?void 0:t._ripple)!=null&&c.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:i,scale:o,x:r,y:v,centerX:u,centerY:l}=It(e,t,n),m=`${i*2}px`;s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(a);const h=window.getComputedStyle(t);h&&h.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),re(s,`translate(${r}, ${v}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),re(s,`translate(${u}, ${l}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Le(e){return typeof e>"u"||!!e}function P(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[A])){if(e[A]=!0,O(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||xe(e),n._ripple.class&&(t.class=n._ripple.class),O(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{I.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Nt)}else I.show(e,n,t)}}function oe(e){e[A]=!0}function p(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{p(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),I.hide(t)}}function Pe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let z=!1;function ze(e){!z&&(e.keyCode===ae.enter||e.keyCode===ae.space)&&(z=!0,P(e))}function Be(e){z=!1,p(e)}function $e(e){z&&(z=!1,p(e))}function Re(e,t,n){const{value:a,modifiers:s}=t,i=Le(a);if(i||I.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,rt(a)&&a.class&&(e._ripple.class=a.class),i&&!n){if(s.stop){e.addEventListener("touchstart",oe,{passive:!0}),e.addEventListener("mousedown",oe);return}e.addEventListener("touchstart",P,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",Pe,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",P),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",ze),e.addEventListener("keyup",Be),e.addEventListener("blur",$e),e.addEventListener("dragstart",p,{passive:!0})}else!i&&n&&Ve(e)}function Ve(e){e.removeEventListener("mousedown",P),e.removeEventListener("touchstart",P),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",Pe),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",ze),e.removeEventListener("keyup",Be),e.removeEventListener("dragstart",p),e.removeEventListener("blur",$e)}function Ht(e,t){Re(e,t,!1)}function Wt(e){delete e._ripple,Ve(e)}function Dt(e,t){if(t.value===t.oldValue)return;const n=Le(t.oldValue);Re(e,t,n)}const nn={mounted:Ht,unmounted:Wt,updated:Dt};function At(){const e=E(!1);return ot(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:lt(e)}}const Ot=y({scrollable:Boolean,...x(),...Se(),...M({tag:"main"})},"VMain"),an=k()({name:"VMain",props:Ot(),setup(e,t){let{slots:n}=t;const{dimensionStyles:a}=Ce(e),{mainStyles:s}=ut(),{ssrBootStyles:i}=At();return $(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,i.value,a.value,e.style]},{default:()=>{var o,r;return[e.scrollable?d("div",{class:"v-main__scroller"},[(o=n.default)==null?void 0:o.call(n)]):(r=n.default)==null?void 0:r.call(n)]}})),{}}});export{pt as A,mt as B,Qt as C,se as D,Mt as E,qt as F,Ft as G,Ut as H,Yt as I,tn as J,St as K,R as M,nn as R,ie as V,kt as a,an as b,Xt as c,Gt as d,yt as e,wt as f,Se as g,Jt as h,we as i,ft as j,Et as k,Ce as l,M as m,Kt as n,Ee as o,xt as p,pe as q,Bt as r,en as s,$t as t,At as u,Lt as v,_e as w,Zt as x,zt as y,vt as z};
