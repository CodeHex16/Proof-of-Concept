import{_ as O}from"./CompanyDrawer.vue_vue_type_script_setup_true_lang-j_-k1XgS.js";import{p as U,r as I,s as T,f as v,g as _,h as q,i as X,j as $,m as J,k as W,u as Q,l as Z,n as ee,q as D,v as K,a as t,x as Y,y as te,d as ae,z as B,w as i,F as oe,A as se,B as le,o as L,b as V,e as b,C as E,t as S,D as ne}from"./index-D8v5APta.js";import{V as ie,a as re,b as M,c as H,d as j}from"./VNavigationDrawer-CrFHWEss.js";import{m as ue,V as R,a as de,b as me,c as ce}from"./VVirtualScroll-CoAX7znH.js";import{u as pe,b as he,d as ve,a as fe}from"./VMain-DmIzdHhK.js";import{V as ge}from"./VBtn-BdXj8AZX.js";import{V as P,a as z}from"./VCard-B8kkKoQa.js";import{V as ye}from"./VContainer-YaJaod4k.js";import{V as we}from"./VSheet-DLq6ThIQ.js";import{V as Ie}from"./VTextField-DULQKaXj.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-D_UPvi8m.js";import"./scopeId-C1HPDjxw.js";import"./getScrollParent-D7uDFKzb.js";import"./VLabel-BpltMJ55.js";const Te="/myapp/assets/logo_icon-BThqzSX-.png",N=["Hello World","I am feeling great today!","The weather is wonderful.","My favorite color is blue.","It's great to meet you.","I love traveling to new places.","Do you like to read books?","I enjoy listening to music every day.","It's been a busy week for me.","I like to spend my weekends hiking.","Technology is always evolving.","I've been working on some new projects.","The sunrise this morning was beautiful.","I'm learning to cook new recipes.","It's important to stay hydrated.","I enjoy spending time with friends.","Have you ever tried meditation?","Exercise helps me stay healthy.","I just finished watching a great movie.","Life is full of opportunities.","The city is so vibrant at night.","My favorite season is autumn.","I'm always up for an adventure.","There's nothing like a cup of coffee in the morning.","I love trying new cuisines.","Reading books can transport you to another world.","The beach is my happy place.","I believe in the power of kindness.","Sometimes a good laugh is all you need.","I love solving puzzles.","Learning something new every day keeps me motivated.","What a beautiful sunset!","I am passionate about photography.","There's always something to be grateful for.","I love to spend my free time painting.","Today is a good day to start a new project.","Music has the power to change your mood.","A great day starts with a positive mindset.","I enjoy spending time in nature.","It's important to take breaks throughout the day.","Traveling opens up new perspectives.","There are so many books I want to read.","I'm learning to speak another language.","It's important to stay curious.","I can't wait to see what tomorrow brings.","The world is full of amazing places.","Every day is a new opportunity to grow.","I enjoy helping others.","Sometimes, the best moments are the quiet ones.","I love the smell of fresh flowers.","Being creative is so fulfilling.","Today is a great day for a walk.","Laughter truly is the best medicine.","I love watching the stars at night.","Music is a universal language.","I'm working on improving my skills.","I believe in the power of positivity.","The mountains are calling.","I enjoy exploring new cities.","There's nothing like a good cup of tea.","I enjoy learning about different cultures.","Life is better when you're surrounded by good friends.","I believe in the importance of self-care.","I love to write in my journal.","Good things come to those who wait.","The future is full of possibilities.","I am grateful for every opportunity I have.","Chasing your dreams is worth it.","It's always a good time to start something new.","Nature has a calming effect.","I enjoy spending time in the kitchen.","Sometimes it's good to take a break and relax.","I love the sound of the ocean waves.","I believe in setting goals and achieving them.","It's always nice to receive a compliment.","There's no place like home.","I enjoy trying new activities.","I'm working on being more mindful every day.","I appreciate the small things in life.","Life is full of surprises.","It's important to take care of your mental health.","The best moments are often the simplest ones.","I love the sound of birds chirping in the morning.","Taking risks is how we grow.","I enjoy exploring new hobbies.","The sky is so clear tonight.","There's always something new to learn.","I'm looking forward to the weekend.","There's no limit to what you can achieve.","I love experiencing new adventures.","The journey is just as important as the destination.","I enjoy spending time at a coffee shop.","Today is a great day to be productive.","I enjoy spending time with my family.","Happiness is a choice.","It's important to stay true to yourself.","I believe that everything happens for a reason.","A positive attitude makes all the difference.","There's always a way to improve.","I love the feeling of accomplishment.","It's nice to take a moment to appreciate the present.","I believe in the power of hard work.","There's always room for growth and improvement.","I'm grateful for the support of my friends.","Life is about the journey, not the destination.","I love learning about history.","The night sky is so peaceful.","I believe in following your dreams.","It's always good to have a plan.","Every experience teaches us something new.","Taking time to relax is essential.","I enjoy working on creative projects.","I love trying new foods.","Success comes with perseverance.","It's important to appreciate the people around you."];function F(){let a="";const f=(r,h)=>Math.floor(Math.random()*(h-r+1)+r);for(let r=0;r<f(1,5);r++){const h=Math.floor(Math.random()*N.length);a+=N[h]+" "}return a}const ke=U({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ve(a){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:r}=f;let h=0,p=0;const o=I(null),s=T(0),m=T(0),y=T(0),w=T(!1),c=T(!1),g=v(()=>Number(a.scrollThreshold)),u=v(()=>$((g.value-s.value)/g.value||0)),e=()=>{const d=o.value;if(!d||r&&!r.value)return;h=s.value,s.value="window"in d?d.pageYOffset:d.scrollTop;const n=d instanceof Window?document.documentElement.scrollHeight:d.scrollHeight;if(p!==n){p=n;return}c.value=s.value<h,y.value=Math.abs(s.value-g.value)};return _(c,()=>{m.value=m.value||s.value}),_(w,()=>{m.value=0}),q(()=>{_(()=>a.scrollTarget,d=>{var x;const n=d?document.querySelector(d):window;n&&n!==o.value&&((x=o.value)==null||x.removeEventListener("scroll",e),o.value=n,o.value.addEventListener("scroll",e,{passive:!0}))},{immediate:!0})}),X(()=>{var d;(d=o.value)==null||d.removeEventListener("scroll",e)}),r&&_(r,e,{immediate:!0}),{scrollThreshold:g,currentScroll:s,currentThreshold:y,isScrollActive:w,scrollRatio:u,isScrollingUp:c,savedScroll:m}}const Se=U({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:a=>["top","bottom"].includes(a)},...ue(),...J(),...ke(),height:{type:[Number,String],default:64}},"VAppBar"),xe=W()({name:"VAppBar",props:Se(),emits:{"update:modelValue":a=>!0},setup(a,f){let{slots:r}=f;const h=I(),p=Q(a,"modelValue"),o=v(()=>{var k;const l=new Set(((k=a.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),s=v(()=>{const l=o.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!p.value}),{currentScroll:m,scrollThreshold:y,isScrollingUp:w,scrollRatio:c}=Ve(a,{canScroll:s}),g=v(()=>o.value.hide||o.value.fullyHide),u=v(()=>a.collapse||o.value.collapse&&(o.value.inverted?c.value>0:c.value===0)),e=v(()=>a.flat||o.value.fullyHide&&!p.value||o.value.elevate&&(o.value.inverted?m.value>0:m.value===0)),d=v(()=>o.value.fadeImage?o.value.inverted?1-c.value:c.value:void 0),n=v(()=>{var C,A;if(o.value.hide&&o.value.inverted)return 0;const l=((C=h.value)==null?void 0:C.contentHeight)??0,k=((A=h.value)==null?void 0:A.extensionHeight)??0;return g.value?m.value<y.value||o.value.fullyHide?l+k:l:l+k});Z(v(()=>!!a.scrollBehavior),()=>{te(()=>{g.value?o.value.inverted?p.value=m.value>y.value:p.value=w.value||m.value<y.value:p.value=!0})});const{ssrBootStyles:x}=pe(),{layoutItemStyles:G}=ee({id:a.name,order:v(()=>parseInt(a.order,10)),position:D(a,"location"),layoutSize:n,elementSize:T(void 0),active:p,absolute:D(a,"absolute")});return K(()=>{const l=R.filterProps(a);return t(R,Y({ref:h,class:["v-app-bar",{"v-app-bar--bottom":a.location==="bottom"},a.class],style:[{...G.value,"--v-toolbar-image-opacity":d.value,height:void 0,...x.value},a.style]},l,{collapse:u.value,flat:e.value}),r)}),{}}}),_e=W()({name:"VAppBarTitle",props:de(),setup(a,f){let{slots:r}=f;return K(()=>t(me,Y(a,{class:"v-app-bar-title"}),r)),{}}}),je={key:0,class:"d-flex justify-end pa-2"},Be={class:"text-caption float-inline-end"},Le={key:1,class:"d-flex justify-start pa-2"},Me={class:"text-caption float-inline-end"},He=ae({__name:"chat",setup(a){var g;const f=se(),r=le();I([{name:"Ergon",users:10},{name:"Test",users:20}]).value.find(u=>u.name===f.params.company)||r.push("/404");const p=I(""),o=I(),s=I([]),m=(u,e)=>Math.floor(Math.random()*(e-u+1)+u),y=["chatbot","user"];for(let u=0;u<15;u++)s.value.push({id:u,user:y[m(0,1)],message:F(),timestamp:(((g=s.value[s.value.length-1])==null?void 0:g.timestamp)??Date.now()-1e4)+m(1e3,1e4)});q(()=>{o.value.scrollToIndex(s.value.length-1)});const w=()=>{var u,e;s.value.push({id:((u=s.value[s.value.length-1])==null?void 0:u.id)+1,user:y[m(0,1)],message:F(),timestamp:(((e=s.value[s.value.length-1])==null?void 0:e.timestamp)??Date.now()-1e4)+m(1e3,1e4)})},c=I(!0);return(u,e)=>{const d=O;return L(),B(oe,null,[t(d,{app:"","onClick:chat":e[0]||(e[0]=()=>c.value=!c.value)}),t(ie,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=n=>c.value=n),app:""},{default:i(()=>[e[6]||(e[6]=V("h2",{class:"pa-2"}," Chats ",-1)),t(re,{density:"compact"},{default:i(()=>[t(M),t(H,null,{default:i(()=>e[3]||(e[3]=[b("Today")])),_:1}),t(j,{title:"Infomation about the product of a very long name",value:"1234"}),t(j,{title:"About the company",value:"1233"}),t(M),t(H,null,{default:i(()=>e[4]||(e[4]=[b("Yesterday")])),_:1}),t(j,{title:"Food or Drink?",value:"1232"}),t(M),t(H,null,{default:i(()=>e[5]||(e[5]=[b("More 3 days ago")])),_:1}),t(j,{title:"Welcome to the chat...",value:"1231"})]),_:1})]),_:1},8,["modelValue"]),t(xe,{density:"compact",app:""},{prepend:i(()=>[t(ve,{rounded:"0",size:"50"},{default:i(()=>[t(fe,{class:"logo",src:E(Te),cover:!1},null,8,["src"])]),_:1})]),append:i(()=>[t(ge,{icon:"mdi-dots-vertical"})]),default:i(()=>[t(_e,null,{default:i(()=>[b(S(E(f).params.company),1)]),_:1})]),_:1}),t(he,{class:"d-flex flex-column",app:"","max-height":"100vh"},{default:i(()=>[t(ce,{ref_key:"scrollRef",ref:o,class:"flex-grow-1",items:s.value},{default:i(({item:n})=>[n.user==="chatbot"?(L(),B("div",je,[t(P,{class:"pa-2",color:"primary","max-width":"75%"},{default:i(()=>[t(z,null,{default:i(()=>[b(S(n.message)+" ",1),e[7]||(e[7]=V("br",null,null,-1)),V("small",Be,S(new Date(n.timestamp).toLocaleTimeString()),1)]),_:2},1024)]),_:2},1024)])):(L(),B("div",Le,[t(P,{class:"pa-2",color:"secondary","max-width":"75%"},{default:i(()=>[t(z,null,{default:i(()=>[b(S(n.message)+" ",1),e[8]||(e[8]=V("br",null,null,-1)),V("small",Me,S(new Date(n.timestamp).toLocaleTimeString()),1)]),_:2},1024)]),_:2},1024)]))]),_:1},8,["items"]),t(ye,{class:"position-sticky bottom-0 flex-shrink-0 flex-grow-0"},{default:i(()=>[t(we,{rounded:"xl"},{default:i(()=>[t(Ie,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=n=>p.value=n),class:"mb-4","hide-details":"",rounded:"xl",variant:"outlined",density:"comfortable","single-line":"","append-inner-icon":"mdi-send","onClick:appendInner":w,onKeydown:ne(w,["enter"])},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}}}),Oe=be(He,[["__scopeId","data-v-2dcbfb52"]]);export{Oe as default};
