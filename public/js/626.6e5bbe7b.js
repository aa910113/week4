"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[626],{4670:function(e,l,a){a.r(l),a.d(l,{default:function(){return j}});var s=a(3396),t=a(7139),r=a.p+"img/user@2x.6e171eb8.png";const i={class:"displat-article"},c={key:0,class:"article"},n=(0,s.uE)('<div class="border-b-2 border-neutral-900 px-4 py-5"><ul class="flex"><li class="w-2.5 h-2.5 mr-1.5 bg-red-600 rounded-full border border-neutral-900"></li><li class="w-2.5 h-2.5 mr-1.5 bg-yellow-500 rounded-full border border-neutral-900"></li><li class="w-2.5 h-2.5 mr-1.5 bg-lime-500 rounded-full border border-neutral-900"></li></ul></div><div class="flex justify-center items-center h-20"><p class="text-zinc-500">目前尚無動態，新增一則貼文吧！</p></div>',2),d=[n],u={class:"article-header"},o={class:"flex items-center"},p=(0,s._)("li",{class:"w-11"},[(0,s._)("img",{src:r,alt:"avatar"})],-1),b={class:"ml-4"},g={class:"font-black"},m={class:"text-xs text-zinc-500"},w={class:"my-4"},f={class:"article-image"},h=["src"];function _(e,l,a,r,n,_){return(0,s.wg)(),(0,s.iD)("ul",i,[0===r.articles.data.length?((0,s.wg)(),(0,s.iD)("li",c,d)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(r.articles.data,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"article p-6",key:e._id},[(0,s._)("div",u,[(0,s._)("ul",o,[p,(0,s._)("li",b,[(0,s._)("p",g,(0,t.zw)(e.name),1),(0,s._)("p",m,(0,t.zw)(e.date.substring(0,10))+" "+(0,t.zw)(e.date.substring(11,19)),1)])])]),(0,s._)("div",w,[(0,s._)("p",null,(0,t.zw)(e.message),1)]),(0,s._)("div",f,[(0,s._)("img",{src:e.photo,alt:""},null,8,h)])])))),128))])}var v=a(4870),k=a(6265),x=a.n(k),y={name:"HomeView",setup(){const e=(0,v.qj)({data:[]});async function l(){try{const{data:l}=await x().get("https://desolate-garden-78877.herokuapp.com/api/article");e.data=l}catch(l){alert("user有錯誤")}}return l(),{articles:e}}},z=a(89);const D=(0,z.Z)(y,[["render",_]]);var j=D}}]);
//# sourceMappingURL=626.6e5bbe7b.js.map