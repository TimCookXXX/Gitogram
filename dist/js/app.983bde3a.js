(function(){"use strict";var t={387:function(t,e,n){var s={};n.r(s),n.d(s,{fork:function(){return ce},home:function(){return St},logo:function(){return Bt},logout:function(){return Et},star:function(){return ne},triangle:function(){return X}});var r=n(963),a=n(252);function o(t,e,n,s,r,o){const i=(0,a.up)("Feeds");return(0,a.wg)(),(0,a.j4)(i)}const i={class:"header"},l={class:"stories"};function c(t,e,n,s,r,o){const c=(0,a.up)("logo"),u=(0,a.up)("navigation"),d=(0,a.up)("story-user-item"),p=(0,a.up)("Header"),C=(0,a.up)("user-content");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a.Wm)(p,null,{headline:(0,a.w5)((()=>[(0,a.Wm)(c),(0,a.Wm)(u)])),content:(0,a.w5)((()=>[(0,a._)("ul",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.items,(n=>((0,a.wg)(),(0,a.iD)("li",{class:"stories-item",key:n.id},[(0,a.Wm)(d,(0,a.dG)(o.getFeedData(n),{onOnPress:e[0]||(e[0]=e=>o.handlePress(t.story.id))}),null,16)])))),128))])])),_:1})]),(0,a.Wm)(C)],64)}const u={class:"header"},d={class:"x-container"},p={class:"headline"},C={key:0,class:"content"};function g(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",d,[(0,a._)("div",p,[(0,a.WI)(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?((0,a.wg)(),(0,a.iD)("div",C,[(0,a.WI)(t.$slots,"content",{},void 0,!0)])):(0,a.kq)("",!0)])])}var v={},m=n(118);const h=(0,m.Z)(v,[["render",g],["__scopeId","data-v-0b0bc1bd"]]);var f=h,w=n(577);const _={class:"avatar"},L=["src"],b={class:"username"};function y(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=e=>t.$emit("onPress"))},[(0,a._)("div",_,[(0,a._)("img",{src:n.avatar,alt:"username avatar",class:"img"},null,8,L)]),(0,a._)("div",b,(0,w.zw)(n.username),1)])}var Z={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const V=(0,m.Z)(Z,[["render",y],["__scopeId","data-v-b4b2df22"]]);var H=V,k=JSON.parse('[{"id":"1","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Josh"},{"id":"2","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Andrew"},{"id":"3","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Camille"},{"id":"4","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Marselle"},{"id":"5","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Piter"},{"id":"6","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Can"},{"id":"7","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Iloveanime"},{"id":"8","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Diself"},{"id":"9","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Gartor"},{"id":"10","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Camilr"}]');const D=t=>((0,a.dD)("data-v-1da10ad0"),t=t(),(0,a.Cn)(),t),M={class:"user__post-list"},j={class:"profile-post"},O={class:"reviews"},x={key:0,class:"comments"},I={class:"comments-list"},W=D((()=>(0,a._)("div",{class:"date"},"15 may",-1)));function S(t,e,n,s,r,o){const i=(0,a.up)("user"),l=(0,a.up)("user-post-content"),c=(0,a.up)("toggler"),u=(0,a.up)("comment");return(0,a.wg)(),(0,a.iD)("div",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.items,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"user-post-container",key:t.id},[(0,a._)("div",j,[(0,a.Wm)(i,(0,w.vs)((0,a.F4)(o.getFeedData(t))),null,16),(0,a.Wm)(l,(0,w.vs)((0,a.F4)(o.getFeedData(t))),null,16),(0,a._)("div",O,[(0,a.Wm)(c,{onOnToggle:o.toggle},null,8,["onOnToggle"]),r.shown?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("ul",I,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(8,(t=>(0,a._)("li",{class:"comments-item",key:t},[(0,a.Wm)(u,{class:"oops",text:"Some text",username:"John Doe"})]))),64))])])):(0,a.kq)("",!0)]),W])])))),128))])}const F={class:"profile-info"},P={class:"profile-img"},q=["src"],z={class:"profile-name"};function $(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",P,[(0,a._)("img",{src:n.avatar,alt:"avatar",class:"profile-avatar-img"},null,8,q)]),(0,a._)("div",z,(0,w.zw)(n.username),1)])}var T={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const B=(0,m.Z)(T,[["render",$],["__scopeId","data-v-9fbb0c1c"]]);var Y=B;const U={class:"text"},J={class:"icon"};function K(t,e,n,s,r,o){const i=(0,a.up)("icon");return(0,a.wg)(),(0,a.iD)("button",{class:(0,w.C_)(["button",{active:r.isOpened}]),onClick:e[0]||(e[0]=(...t)=>o.toggle&&o.toggle(...t))},[(0,a._)("span",U,(0,w.zw)(r.isOpened?"Hide":"Show")+" issues",1),(0,a._)("span",J,[(0,a.Wm)(i,{name:"triangle"})])],2)}const N={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A=(0,a._)("path",{d:"M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z",fill:"#212121"},null,-1),E=[A];function G(t,e){return(0,a.wg)(),(0,a.iD)("svg",N,E)}const R={},Q=(0,m.Z)(R,[["render",G]]);var X=Q,tt={components:{icon:X},data(){return{isOpened:!1,shown:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const et=(0,m.Z)(tt,[["render",K],["__scopeId","data-v-5e6cf5f4"]]);var nt=et;const st={class:"c-comment"},rt={class:"username"};function at(t,e,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",st,[(0,a._)("p",null,[(0,a._)("span",rt,(0,w.zw)(n.username),1),(0,a.Uk)(" "+(0,w.zw)(n.text),1)])])}var ot={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const it=(0,m.Z)(ot,[["render",at],["__scopeId","data-v-2302e6ae"]]);var lt=it;const ct=t=>((0,a.dD)("data-v-e152ad84"),t=t(),(0,a.Cn)(),t),ut={class:"user__post-wrap"},dt={class:"user__post-content"},pt={class:"user__post-title"},Ct={class:"user__post-desc"},gt=ct((()=>(0,a._)("button",{class:"button"},null,-1))),vt=ct((()=>(0,a._)("div",{class:"c-feed"},null,-1)));function mt(t,e,n,s,r,o){const i=(0,a.up)("info-panel");return(0,a.wg)(),(0,a.iD)("div",ut,[(0,a._)("div",dt,[(0,a._)("div",pt,(0,w.zw)(n.title),1),(0,a._)("div",Ct,(0,w.zw)(n.description),1),(0,a.Wm)(i,{stars:n.stars,forks:n.forks},null,8,["stars","forks"])]),gt,vt])}const ht=t=>((0,a.dD)("data-v-c62d3536"),t=t(),(0,a.Cn)(),t),ft={class:"ratings__list"},wt={class:"ratings__item"},_t=ht((()=>(0,a._)("div",{class:"ratings__star-title"},"Star",-1))),Lt={class:"ratings__item"},bt={class:"ratings__item-title"},yt={class:"ratings__item"},Zt=ht((()=>(0,a._)("div",{class:"ratings__fork-title"},"Fork",-1))),Vt={class:"ratings__item"},Ht={class:"ratings__item-num"};function kt(t,e,n,s,r,o){const i=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("ul",ft,[(0,a._)("li",wt,[(0,a.Wm)(i,{class:"ratings__star",name:"star"}),_t]),(0,a._)("li",Lt,[(0,a._)("div",bt,(0,w.zw)(n.stars),1)]),(0,a._)("li",yt,[(0,a.Wm)(i,{class:"ratings__star",name:"fork"}),Zt]),(0,a._)("li",Vt,[(0,a._)("div",Ht,(0,w.zw)(n.forks),1)])])}function Dt(t,e,n,s,r,o){return(0,a.wg)(),(0,a.j4)((0,a.LL)(n.name))}const Mt={width:"24",height:"26",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jt=(0,a._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"#262626"},null,-1),Ot=[jt];function xt(t,e){return(0,a.wg)(),(0,a.iD)("svg",Mt,Ot)}const It={},Wt=(0,m.Z)(It,[["render",xt]]);var St=Wt;const Ft={width:"175",height:"37",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pt=(0,a.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="#292929"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="#292929"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="#292929"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="#292929"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="#292929"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="#292929"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="#292929"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="#292929"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="#292929"></path>',9),qt=[Pt];function zt(t,e){return(0,a.wg)(),(0,a.iD)("svg",Ft,qt)}const $t={},Tt=(0,m.Z)($t,[["render",zt]]);var Bt=Tt;const Yt={width:"26",height:"21",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ut=(0,a._)("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"#262626"},null,-1),Jt=[Ut];function Kt(t,e){return(0,a.wg)(),(0,a.iD)("svg",Yt,Jt)}const Nt={},At=(0,m.Z)(Nt,[["render",Kt]]);var Et=At;const Gt={width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Rt=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"#586069"},null,-1),Qt=[Rt];function Xt(t,e){return(0,a.wg)(),(0,a.iD)("svg",Gt,Qt)}const te={},ee=(0,m.Z)(te,[["render",Xt]]);var ne=ee;const se={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re=(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#586069"},null,-1),ae=[re];function oe(t,e){return(0,a.wg)(),(0,a.iD)("svg",se,ae)}const ie={},le=(0,m.Z)(ie,[["render",oe]]);var ce=le,ue={name:"Icon",components:{...s},props:{name:{type:String,required:!0}}};const de=(0,m.Z)(ue,[["render",Dt]]);var pe=de,Ce={components:{Icon:pe},props:{stars:Number,forks:Number}};const ge=(0,m.Z)(Ce,[["render",kt],["__scopeId","data-v-c62d3536"]]);var ve=ge,me={name:"userPostContent",components:{infoPanel:ve},props:["title","description","stars","forks"]};const he=(0,m.Z)(me,[["render",mt],["__scopeId","data-v-e152ad84"]]);var fe=he,we=n(196);const _e="https://api.github.com",Le=({url:t,method:e="get",data:n={},headers:s={}})=>(0,we.Z)({url:t,method:e,data:n,baseURL:_e,headers:s}),be=t=>t<10?`0${t}`:t,ye=(t="javascript")=>{const e=new URLSearchParams,n=6048e5,s=new Date(Date.now()-n),r=[s.getFullYear(),be(s.getMonth()+1),be(s.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("q",`language:${t} created:>${r}`),e.append("per_page","10"),Le({url:`/search/repositories?${e}`})};var Ze={components:{toggler:nt,Comment:lt,user:Y,userPostContent:fe},data(){return{shown:!1,items:{}}},methods:{toggle(t){this.shown=t},getFeedData(t){return{username:t.owner.login,title:t.name,description:t.description,stars:t.stargazers_count,forks:t.forks,avatar:t.owner.avatar_url}}},async created(){try{const{data:t}=await ye();this.items=t.items}catch(t){console.log(t)}}};const Ve=(0,m.Z)(Ze,[["render",S],["__scopeId","data-v-1da10ad0"]]);var He=Ve;const ke=t=>((0,a.dD)("data-v-7e7ea9e5"),t=t(),(0,a.Cn)(),t),De={class:"user-info"},Me={class:"home"},je=ke((()=>(0,a._)("div",{class:"user-photo"},[(0,a._)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg",class:"img-avatar",alt:"user photo"})],-1))),Oe={class:"logout"};function xe(t,e,n,s,r,o){const i=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",De,[(0,a._)("div",Me,[(0,a.Wm)(i,{name:"home"})]),je,(0,a._)("div",Oe,[(0,a.Wm)(i,{name:"logout"})])])}var Ie={components:{Icon:pe}};const We=(0,m.Z)(Ie,[["render",xe],["__scopeId","data-v-7e7ea9e5"]]);var Se=We;const Fe={class:"logo"},Pe={href:"https://loftschool.com",target:"_blank",rel:"noopener noreferrer"};function qe(t,e,n,s,r,o){const i=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",Fe,[(0,a._)("a",Pe,[(0,a.Wm)(i,{name:"logo"})])])}var ze={components:{Icon:pe}};const $e=(0,m.Z)(ze,[["render",qe],["__scopeId","data-v-4046edce"]]);var Te=$e,Be={name:"Feeds",components:{Header:f,storyUserItem:H,userContent:He,navigation:Se,logo:Te},async created(){try{const{data:t}=await ye();this.items=t.items}catch(t){console.log(t)}},data(){return{stories:k,items:[]}},methods:{handlePress(){console.log(1)},getFeedData(t){return{avatar:t.owner.avatar_url,username:t.owner.login}}}};const Ye=(0,m.Z)(Be,[["render",c],["__scopeId","data-v-0d8b84c7"]]);var Ue=Ye,Je={name:"App",components:{Feeds:Ue}};const Ke=(0,m.Z)(Je,[["render",o]]);var Ne=Ke;(0,r.ri)(Ne).mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,a){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],a=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(i=!1,a<o&&(o=a));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,r,a]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(e&&e(s);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(387)}));s=n.O(s)})();
//# sourceMappingURL=app.983bde3a.js.map