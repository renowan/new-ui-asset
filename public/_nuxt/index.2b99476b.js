import{_ as l}from"./nuxt-link.545bc04a.js";import{_ as d,B as c,c as h,d as o,b as a,w as r,a as i,C as _,o as f}from"./entry.17825305.js";const g={setup(){console.log("nest index page setup");const u=c();return{testnavigateTo:()=>{_({name:"nest",query:{hoge:"3"}})},testRouterPush:()=>{u.push({name:"nest",query:{hoge:"4"}})}}}},x={class:"p-4"};function p(u,e,m,t,v,b){const s=l;return f(),h("div",x,[o(" this is index page "),a(s,{class:"font-medium text-blue-600 hover:underline mr-2",to:{name:"nest",query:{hoge:"1"}}},{default:r(()=>[o(" hoge: 1 ")]),_:1}),a(s,{class:"font-medium text-blue-600 hover:underline mr-2",to:{name:"nest",query:{hoge:"2"}}},{default:r(()=>[o(" hoge: 2 ")]),_:1}),a(s,{class:"font-medium text-blue-600 hover:underline mr-2",to:{name:"nest-sub"}},{default:r(()=>[o(" nest-sub ")]),_:1}),i("button",{class:"font-medium text-blue-600 hover:underline mr-2",onClick:e[0]||(e[0]=(...n)=>t.testnavigateTo&&t.testnavigateTo(...n))},"testnavigateTo 3"),i("button",{class:"font-medium text-blue-600 hover:underline mr-2",onClick:e[1]||(e[1]=(...n)=>t.testRouterPush&&t.testRouterPush(...n))},"testRouterPush 4")])}const k=d(g,[["render",p]]);export{k as default};