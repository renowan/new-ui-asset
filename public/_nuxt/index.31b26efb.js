import{_ as Y}from"./ZbSelect.vue.85980a37.js";import{_ as J}from"./nuxt-link.545bc04a.js";import{_ as Q,a as X}from"./ZbModal.vue.0b2eb750.js";import{_ as ee}from"./ZbInput.2481279d.js";import{_ as te}from"./Button.36fc2aa3.js";import{_ as oe}from"./ButtonGroup.e68a4be8.js";import{_ as F,f as A,g as $,h as Z,i as C,j as D,k as se,o as u,c as x,a as e,l as le,v as ae,m as H,r as M,d as s,t as k,n as h,q as V,s as w,b as o,w as d,F as z,x as E,y as re,T as ne,z as b,A as f}from"./entry.17825305.js";import{_ as L,a as ie}from"./ZbTooltip.20258743.js";import{u as pe}from"./usePopper.13b29dd9.js";import"./appConfig.c8caa554.js";import"./index.a9ae74f2.js";import"./ZbButton.56a8403c.js";import"./Icon.bc1f476f.js";import"./_baseIsEqual.2ea895e4.js";import"./ZbIcon.vue.119874a2.js";import"./use-outside-click.90adcbe2.js";import"./disposables.f949f153.js";const ce=A({inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>$.ui.checkbox.default.color,validator(t){return $.ui.colors.includes(t)}},ui:{type:Object,default:()=>$.ui.checkbox}},emits:["update:modelValue"],setup(t,{emit:r}){const m=Z(),a=C(()=>D({},t.ui,m.ui.checkbox)),y=C({get(){return t.modelValue},set(i){r("update:modelValue",i)}}),g=C(()=>se(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",t.color),a.value.color.replaceAll("{color}",t.color)));return{ui:a,toggle:y,inputClass:g}}}),de={class:"flex items-center h-5"},ue=["id","name","required","value","disabled","checked","indeterminate"],me={key:0,class:"ms-3 text-sm"},xe=["for"];function ye(t,r,m,a,y,g){return u(),x("div",{class:h(t.ui.wrapper)},[e("div",de,[le(e("input",H({id:t.name,"onUpdate:modelValue":r[0]||(r[0]=i=>t.toggle=i),name:t.name,required:t.required,value:t.value,disabled:t.disabled,checked:t.checked,indeterminate:t.indeterminate,type:"checkbox",class:["form-checkbox",t.inputClass]},t.$attrs),null,16,ue),[[ae,t.toggle]])]),t.label||t.$slots.label?(u(),x("div",me,[e("label",{for:t.name,class:h(t.ui.label)},[M(t.$slots,"label",{},()=>[s(k(t.label),1)]),t.required?(u(),x("span",{key:0,class:h(t.ui.required)},"*",2)):V("",!0)],10,xe),t.help?(u(),x("p",{key:0,class:h(t.ui.help)},k(t.help),3)):V("",!0)])):V("",!0)],2)}const ge=F(ce,[["render",ye]]),_e=A({components:{UKbd:L},props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},ui:{type:Object,default:()=>$.ui.tooltip}},setup(t){const r=Z();console.log("props.ui",t.ui),console.log("appConfig2.ui.tooltip",r.ui.tooltip),console.log("props.popper",t.popper);const m=C(()=>D({},t.ui,r.ui.tooltip)),a=C(()=>D({},t.popper,m.value.popper));console.log("ui.value.popper",m.value.popper),console.log("computed: popper.value",a.value);const[y,g]=pe(a.value),i=w(!1);let l=null,n=null;function v(){n&&(clearTimeout(n),n=null),!i.value&&(l=l||setTimeout(()=>{i.value=!0,l=null},t.openDelay))}function O(){l&&(clearTimeout(l),l=null),i.value&&(n=n||setTimeout(()=>{i.value=!1,n=null},t.closeDelay))}return{ui:m,trigger:y,container:g,open:i,onMouseOver:v,onMouseLeave:O}}}),be=e("span",{class:"mx-1 text-gray-700 dark:text-gray-200"},"·",-1);function he(t,r,m,a,y,g){const i=L;return u(),x("div",{ref:"trigger",class:h(t.ui.wrapper),onMouseover:r[0]||(r[0]=(...l)=>t.onMouseOver&&t.onMouseOver(...l)),onMouseleave:r[1]||(r[1]=(...l)=>t.onMouseLeave&&t.onMouseLeave(...l))},[M(t.$slots,"default",{open:t.open},()=>[s(" Hover ")]),t.open&&!t.prevent?(u(),x("div",{key:0,ref:"container",class:h([t.ui.container,t.ui.width])},[o(ne,H({appear:""},t.ui.transition),{default:d(()=>{var l;return[e("div",{class:h([t.ui.base,t.ui.background,t.ui.color,t.ui.rounded,t.ui.shadow,t.ui.ring])},[M(t.$slots,"text",{},()=>[s(k(t.text),1)]),(l=t.shortcuts)!=null&&l.length?(u(),x("span",{key:0,class:h(t.ui.shortcuts)},[be,(u(!0),x(z,null,E(t.shortcuts,n=>(u(),re(i,{key:n,size:"xs"},{default:d(()=>[s(k(n),1)]),_:2},1024))),128))],2)):V("",!0)],2)]}),_:3},16)],2)):V("",!0)],34)}const fe=F(_e,[["render",he]]),ve={class:"flex text-sm text-gray-500 mr-4"},we=A({__name:"ZbFilterItem",props:{item:{type:Object,required:!0}},emits:["on-delete"],setup(t,{emit:r}){const m=t,a=()=>{r("on-delete",m.item)};return(y,g)=>(u(),x("span",ve,[s(k(t.item.label)+" ",1),e("span",{class:"border h-5 w-5 ml-1 rounded flex align-items-center justify-content-center border-gray-200 cursor-pointer"},[e("span",{class:"relative top-px left-px i-heroicons-x-mark h-4 w-4 text-gray-500","aria-hidden":"true",onClick:a})])]))}});const ke={class:"flex flex-1 flex-col overflow-auto"},Ce={class:"px-6 pt-6 mb-6"},Ve={class:"flex mb-2"},Se=e("h1",{class:"flex-1 text-2xl font-semibold text-green-500"}," GHG排出登録 ",-1),$e={class:"flex"},Oe={class:"mr-1"},Te={class:"text-sm mb-4"},Ue=e("h3",{class:"text-gray-400 font-semibold mb-2"},"フィルター",-1),Be={class:"grid grid-cols-6 gap-3"},De={class:"col-span-2"},Me=e("label",{class:"text-sm text-gray-700 block mb-1"},"Scope-Category",-1),Ae={class:"col-span-2"},Ge=e("label",{class:"text-sm text-gray-700 block mb-1"},"GHG",-1),Ne={class:"col-span-2"},qe=e("label",{class:"text-sm text-gray-700 block mb-1"},"算定対象の活動",-1),je={class:"col-span-3"},Fe=e("label",{class:"text-sm text-gray-700 block mb-1"},"ラベル",-1),Ze={class:"col-span-3"},He=e("label",{class:"text-sm text-gray-700 block mb-1"},"タグ",-1),ze={class:"flex flex-col bg-gray-50 p-3"},Ee={class:"grid md:grid-cols-2 gap-3 mb-2"},Le={class:"md:text-right"},Pe={class:"flex items-center"},Ie={class:"flex-1 mr-6"},Ke=e("span",{class:"text-sm mr-2"},"0個のアイテムを選択中",-1),Re={class:"flex flex-1 flex-col overflow-auto"},We={class:"border-collapse table-fixed w-full divide-y divide-gray-300 sticky-table ghg-table"},Ye={class:"bg-gray-100"},Je={class:""},Qe=e("th",{scope:"col",width:"60",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"行")],-1),Xe={scope:"col",width:"120",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},et={scope:"col",width:"180",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},tt={scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},ot={scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},st=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"タグ")],-1),lt=e("th",{scope:"col",width:"180",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"サプライヤー")],-1),at=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"符号")],-1),rt=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"活動量")],-1),nt=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"GHG")],-1),it=e("th",{scope:"col",width:"120",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"排出原単位")],-1),pt=e("th",{scope:"col",width:"120",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"排CO2排出量")],-1),ct=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"総排出量")],-1),dt=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"登録日時")],-1),ut=e("th",{scope:"col",width:"90",class:"text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"},[e("span",null,"操作")],-1),mt={class:"divide-y divide-gray-200 bg-white"},xt={class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"},yt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"}," 固定燃料 ",-1),gt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"}," Front-end Developer ",-1),_t=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),bt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),ht=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),ft=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),vt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),wt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),kt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),Ct=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),Vt=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),St=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),$t=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),Ot=e("td",{class:"whitespace-nowrap px-3 py-2 text-gray-500 text-sm"}," hoge ",-1),Tt={class:"flex flex-col"},Ut={class:"flex border-b border-gray-100 px-4 py-3 text-sm text-gray-500"},Bt=e("ul",null,[e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope1")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope2")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category1")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category2")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category3")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category4")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category5")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category6")]),e("li",{class:"flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"},[e("input",{type:"checkbox",class:"mr-2"}),s(" Scope3 Category7")])],-1),Wt={__name:"index",setup(t){const r=[{label:"2020",value:"2020"},{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"}],m=[{label:"1月",value:"01"},{label:"2月",value:"02"},{label:"3月",value:"03"},{label:"4月",value:"04"}],a=w(r[0]),y=w(m[0]),g=new Array(100),i=[{label:"Wade Cooper",value:1001},{label:"Arlene Mccoy",value:1002},{label:"Devon Webb",value:1003},{label:"Tom Cook",value:1004},{label:"Tanya Fox",value:1005},{label:"Hellen Schmidt",value:1006}],l=w(i[0]),n=w(""),v=w(!1),O=()=>{v.value=!0,console.log("event")},T=G=>{console.log(G)};return(G,p)=>{const S=Y,P=J,I=X,N=ee,_=te,q=oe,K=ge,R=fe,U=ie,B=we,W=Q;return u(),x("div",ke,[e("div",Ce,[e("div",Ve,[Se,e("div",$e,[e("div",Oe,[o(S,{modelValue:b(a),"onUpdate:modelValue":p[0]||(p[0]=c=>f(a)?a.value=c:null),options:r,"option-attribute":"label"},null,8,["modelValue"])]),o(S,{modelValue:b(y),"onUpdate:modelValue":p[1]||(p[1]=c=>f(y)?y.value=c:null),options:m,"option-attribute":"label"},null,8,["modelValue"])])]),e("div",Te,[s(" / "),o(P,{class:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-normal rounded text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 hover:text-primary-600 disabled:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 dark:disabled:text-primary-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",to:"/c/activity-emissions/hubs"},{default:d(()=>[s(" 拠点一覧 ")]),_:1}),s(" / 拠点名hoge ")]),Ue,e("div",Be,[e("div",De,[Me,o(I,{onClick:O})]),e("div",Ae,[Ge,o(S,{modelValue:b(l),"onUpdate:modelValue":p[2]||(p[2]=c=>f(l)?l.value=c:null),options:i},null,8,["modelValue"])]),e("div",Ne,[qe,o(S,{modelValue:b(l),"onUpdate:modelValue":p[3]||(p[3]=c=>f(l)?l.value=c:null),options:i},null,8,["modelValue"])]),e("div",je,[Fe,o(N,{modelValue:b(n),"onUpdate:modelValue":p[4]||(p[4]=c=>f(n)?n.value=c:null),placeholder:"placeholder",autofocus:!0},null,8,["modelValue"])]),e("div",Ze,[He,o(N,{modelValue:b(n),"onUpdate:modelValue":p[5]||(p[5]=c=>f(n)?n.value=c:null),placeholder:"placeholder",autofocus:!0},null,8,["modelValue"])])])]),e("div",ze,[e("div",Ee,[e("div",null,[o(_,{class:"mr-1",color:"gray",variant:"solid"},{default:d(()=>[s("入力項目追加")]),_:1}),o(_,{class:"mr-1",color:"gray",variant:"solid"},{default:d(()=>[s("一覧から新規追加")]),_:1})]),e("div",Le,[o(q,{size:"sm",class:"mr-1"},{default:d(()=>[o(_,{label:"マーケット",color:"green"}),o(_,{label:"ロケーション",color:"white"})]),_:1}),o(q,{size:"sm"},{default:d(()=>[o(_,{label:"tCO2",color:"green"}),o(_,{label:"kgCO2",color:"white"})]),_:1})])]),e("div",Pe,[e("div",Ie,[o(K,{label:"全選択"})]),e("div",null,[Ke,o(_,{class:"mr-1",color:"gray",variant:"solid"},{default:d(()=>[s("コピー")]),_:1}),o(_,{class:"mr-1",color:"red",variant:"solid"},{default:d(()=>[s("削除")]),_:1})])])]),e("div",Re,[e("table",We,[e("thead",Ye,[e("tr",Je,[Qe,e("th",Xe,[o(R,{text:"Tooltip説明文",popper:{placement:"top"}},{default:d(()=>[s(" Scope ")]),_:1})]),e("th",et,[o(U,{text:"CO2または他の温室効果ガス（GHG）を排出した活動の分類",popper:{placement:"top"}},{default:d(()=>[s(" 算定対象の活動 ")]),_:1})]),e("th",tt,[o(U,{text:"Tooltip説明文",popper:{placement:"top"}},{default:d(()=>[s(" 添付 ")]),_:1})]),e("th",ot,[o(U,{text:"Tooltip説明文",popper:{placement:"top"}},{default:d(()=>[s(" ラベル ")]),_:1})]),st,lt,at,rt,nt,it,pt,ct,dt,ut])]),e("tbody",mt,[(u(!0),x(z,null,E(b(g),(c,j)=>(u(),x("tr",{key:j,class:""},[e("td",xt,k(j+1),1),yt,gt,_t,bt,ht,ft,vt,wt,kt,Ct,Vt,St,$t,Ot]))),128))])])]),o(W,{title:"Scope-Category選択",modelValue:b(v),"onUpdate:modelValue":p[6]||(p[6]=c=>f(v)?v.value=c:null),"body-class":"p-0"},{default:d(()=>[e("div",Tt,[e("div",Ut,[o(B,{item:{label:"Scope1",code:"SCOPE1"},onOnDelete:T}),o(B,{item:{label:"Scope2",code:"SCOPE2"},onOnDelete:T}),o(B,{item:{label:"Scope3 Category5",code:"SCOPE3_CATEGORY5"},onOnDelete:T})]),Bt])]),_:1},8,["modelValue"])])}}};export{Wt as default};