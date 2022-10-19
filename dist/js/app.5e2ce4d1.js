(function(){"use strict";var t={6391:function(t,e,n){var s={};n.r(s),n.d(s,{arrow:function(){return Ft},closeBtn:function(){return Lt},fork:function(){return gt},home:function(){return T},loading:function(){return Ht},logo:function(){return U},logout:function(){return tt},star:function(){return it},triangle:function(){return N}});var r=n(9963),a=n(3907),o=n(196);const i="https://api.github.com",l=({url:t,method:e="get",data:n={},headers:s={}})=>(0,o.Z)({url:t,method:e,data:n,baseURL:i,headers:s}),c=t=>t<10?`0${t}`:t,d=(t="javascript")=>{const e=new URLSearchParams,n=6048e5,s=new Date(Date.now()-n),r=[s.getFullYear(),c(s.getMonth()+1),c(s.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("q",`language:${t} created:>${r}`),e.append("per_page","10"),l({url:`/search/repositories?${e}`})},u=({owner:t,repo:e})=>{const n="application/vnd.github.v3.html+json";return l({url:`/repos/${t}/${e}/readme`,headers:{accept:n}})};var p={namespaced:!0,state:{data:[]},mutations:{SET_TRENDINGS:(t,e)=>{t.data=e},SET_README:(t,e)=>{t.data=t.data.map((t=>(e.id===t.id&&(t.readme=e.content),t)))}},getters:{getRepoById:t=>e=>t.data.find((t=>t.id===e))},actions:{async fetchTrendings({state:t,commit:e,rootState:n}){if(!(t.data.length>0)){console.log(n);try{const{data:t}=await d();e("SET_TRENDINGS",t.items)}catch(s){throw console.log(s),s}}},async fetchReadme({commit:t,getters:e},{id:n,owner:s,repo:r}){const a=e.getRepoById(n);if(void 0===a.readme)try{const{data:e}=await u({owner:s,repo:r});t("SET_README",{id:n,content:e})}catch(o){throw console.log(o),o}}}},v=(0,a.MT)({modules:{trendings:p}}),g=n(6252);function h(t,e,n,s,r,a){const o=(0,g.up)("router-view");return(0,g.wg)(),(0,g.j4)(o)}var m={name:"App",components:{}},C=n(8118);const w=(0,C.Z)(m,[["render",h]]);var f=w,_=n(2201);n(7658);const L={class:"wrapper"},y={class:"header"},b={class:"x-container"},D={class:"content"};function x(t,e,n,s,r,a){const o=(0,g.up)("logo"),i=(0,g.up)("icon"),l=(0,g.up)("storiesSlider");return(0,g.wg)(),(0,g.iD)("div",L,[(0,g._)("header",y,[(0,g._)("div",b,[(0,g._)("button",{class:"logo",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},[(0,g.Wm)(o)]),(0,g._)("button",{class:"close-btn",onClick:e[1]||(e[1]=e=>t.$router.push("/"))},[(0,g.Wm)(i,{name:"close-btn"})])])]),(0,g._)("div",D,[(0,g.Wm)(l,{initialSlide:Number(t.$route.params.initialSlide)},null,8,["initialSlide"])])])}function Z(t,e,n,s,r,a){return(0,g.wg)(),(0,g.j4)((0,g.LL)(n.name))}const S={width:"24",height:"26",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k=(0,g._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"#262626"},null,-1),H=[k];function V(t,e){return(0,g.wg)(),(0,g.iD)("svg",S,H)}const I={},M=(0,C.Z)(I,[["render",V]]);var T=M;const O={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=(0,g._)("path",{d:"M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z",fill:"#212121"},null,-1),F=[W];function j(t,e){return(0,g.wg)(),(0,g.iD)("svg",O,F)}const P={},$=(0,C.Z)(P,[["render",j]]);var N=$;const B={width:"175",height:"37",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=(0,g.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="currentColor"></path>',9),E=[R];function q(t,e){return(0,g.wg)(),(0,g.iD)("svg",B,E)}const z={},A=(0,C.Z)(z,[["render",q]]);var U=A;const Y={width:"26",height:"21",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=(0,g._)("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"#262626"},null,-1),G=[K];function J(t,e){return(0,g.wg)(),(0,g.iD)("svg",Y,G)}const X={},Q=(0,C.Z)(X,[["render",J]]);var tt=Q;const et={width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nt=(0,g._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"#586069"},null,-1),st=[nt];function rt(t,e){return(0,g.wg)(),(0,g.iD)("svg",et,st)}const at={},ot=(0,C.Z)(at,[["render",rt]]);var it=ot;const lt={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ct=(0,g._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#586069"},null,-1),dt=[ct];function ut(t,e){return(0,g.wg)(),(0,g.iD)("svg",lt,dt)}const pt={},vt=(0,C.Z)(pt,[["render",ut]]);var gt=vt;const ht={width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},mt=(0,g._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"#FFFFFF"},null,-1),Ct=[mt];function wt(t,e){return(0,g.wg)(),(0,g.iD)("svg",ht,Ct)}const ft={},_t=(0,C.Z)(ft,[["render",wt]]);var Lt=_t;const yt={width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bt=(0,g._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M40.4296 22.0006C40.4296 11.8225 32.1786 3.57153 22.0005 3.57153C21.1721 3.57153 20.5005 2.89996 20.5005 2.07153C20.5005 1.24311 21.1721 0.571533 22.0005 0.571533C33.8355 0.571533 43.4296 10.1657 43.4296 22.0006C43.4296 33.8356 33.8355 43.4298 22.0005 43.4298C10.1656 43.4298 0.571411 33.8356 0.571411 22.0006C0.571411 21.1722 1.24298 20.5006 2.07141 20.5006C2.89984 20.5006 3.57141 21.1722 3.57141 22.0006C3.57141 32.1788 11.8224 40.4298 22.0005 40.4298C32.1786 40.4298 40.4296 32.1788 40.4296 22.0006Z",fill:"#31AE54"},null,-1),Dt=(0,g._)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0",to:"360",dur:"2s",repeatCount:"indefinite"},null,-1),xt=[bt,Dt];function Zt(t,e){return(0,g.wg)(),(0,g.iD)("svg",yt,xt)}const St={},kt=(0,C.Z)(St,[["render",Zt]]);var Ht=kt;const Vt={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},It=(0,g._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z"},null,-1),Mt=[It];function Tt(t,e){return(0,g.wg)(),(0,g.iD)("svg",Vt,Mt)}const Ot={},Wt=(0,C.Z)(Ot,[["render",Tt]]);var Ft=Wt,jt={name:"Icon",components:{...s},props:{name:{type:String,required:!0}}};const Pt=(0,C.Z)(jt,[["render",Z]]);var $t=Pt;function Nt(t,e,n,s,r,a){const o=(0,g.up)("Icon");return(0,g.wg)(),(0,g.iD)("button",{class:"logo",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},[(0,g.Wm)(o,{name:"logo"})])}var Bt={components:{Icon:$t}};const Rt=(0,C.Z)(Bt,[["render",Nt],["__scopeId","data-v-1e72d320"]]);var Et=Rt;const qt={class:"c-stories-slider"},zt={class:"stories-container"},At={class:"stories",ref:"slider"};function Ut(t,e,n,s,r,a){const o=(0,g.up)("story-post-item");return(0,g.wg)(),(0,g.iD)("div",qt,[(0,g._)("div",zt,[(0,g._)("ul",At,[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(t.trendings,((t,e)=>((0,g.wg)(),(0,g.iD)("li",{class:"stories-item",key:t.id,ref_for:!0,ref:"item"},[(0,g.Wm)(o,{data:a.getStoryData(t),active:r.slideNdx===e,loading:r.slideNdx===e&&r.loading,btnsShown:a.activeBtns,onNext:t=>a.handleSlide(e+1),onPrev:t=>a.handleSlide(e-1),onOnFinish:t=>a.handleSlide(e+1)},null,8,["data","active","loading","btnsShown","onNext","onPrev","onOnFinish"])])))),128))],512)])])}var Yt=n(3577);const Kt={class:"stories-container"},Gt={class:"header"},Jt={class:"progess"},Xt={class:"user"},Qt={class:"content"},te={key:0,class:"loader"},ee={key:1,class:"info"},ne=["innerHTML"],se={class:"button"},re={key:0,class:"btns"},ae={class:"icon"},oe={class:"icon"};function ie(t,e,n,s,r,a){const o=(0,g.up)("xprogress"),i=(0,g.up)("user"),l=(0,g.up)("spinner"),c=(0,g.up)("placeholder"),d=(0,g.up)("xbutton"),u=(0,g.up)("icon");return(0,g.wg)(),(0,g.iD)("div",{class:(0,Yt.C_)(["c-story-post-item",{active:n.active}])},[(0,g._)("div",Kt,[(0,g._)("div",Gt,[(0,g._)("div",Jt,[(0,g.Wm)(o,{active:n.active,onOnFinish:e[0]||(e[0]=e=>t.$emit("onFinish"))},null,8,["active"])]),(0,g._)("div",Xt,[(0,g.Wm)(i,{class:"user",username:n.data.username,avatar:n.data.avatar},null,8,["username","avatar"])])]),(0,g._)("div",Qt,[n.loading?((0,g.wg)(),(0,g.iD)("div",te,[(0,g.Wm)(l,{class:"spinner"})])):((0,g.wg)(),(0,g.iD)("div",ee,[n.data.content?.length?((0,g.wg)(),(0,g.iD)("div",{key:0,class:"content-text",innerHTML:n.data.content},null,8,ne)):((0,g.wg)(),(0,g.j4)(c,{key:1,paragraphs:2}))]))]),(0,g._)("div",se,[(0,g.Wm)(d,{hoverText:"Unfollow"},{default:(0,g.w5)((()=>[(0,g.Uk)("Follow")])),_:1})])]),n.active?((0,g.wg)(),(0,g.iD)("div",re,[n.btnsShown.includes("prev")?((0,g.wg)(),(0,g.iD)("button",{key:0,class:"btn btn-prev",onClick:e[1]||(e[1]=e=>t.$emit("prev"))},[(0,g._)("span",ae,[(0,g.Wm)(u,{class:"icon-arrow",name:"arrow"})])])):(0,g.kq)("",!0),n.btnsShown.includes("next")?((0,g.wg)(),(0,g.iD)("button",{key:1,class:"btn btn-next",onClick:e[2]||(e[2]=e=>t.$emit("next"))},[(0,g._)("span",oe,[(0,g.Wm)(u,{class:"icon-arrow",name:"arrow"})])])):(0,g.kq)("",!0)])):(0,g.kq)("",!0)],2)}const le=["data-hover-text"],ce={class:"btn-text"};function de(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("button",{class:(0,Yt.C_)(["c-button","theme-green",{"hover-text":a.withHoverText}]),"data-hover-text":n.hoverText},[(0,g._)("span",ce,[(0,g.WI)(t.$slots,"default",{},void 0,!0)])],10,le)}var ue={props:{hoverText:{type:String}},computed:{withHoverText(){return this.hoverText?.length}}};const pe=(0,C.Z)(ue,[["render",de],["__scopeId","data-v-24a96497"]]);var ve=pe;const ge={ref:"indicator",class:"indicator"};function he(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("div",{class:(0,Yt.C_)([{active:t.startrogress},"c-progress"])},[(0,g._)("div",ge,null,512)],2)}var me={data(){return{startProgress:!1}},props:{active:{type:Boolean}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){setTimeout((()=>{this.startProgress=this.active}),0),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)},watch:{active(){this.startProgress=!this.startProgress}}};const Ce=(0,C.Z)(me,[["render",he],["__scopeId","data-v-d67bc92e"]]);var we=Ce;const fe={class:"loading"};function _e(t,e,n,s,r,a){const o=(0,g.up)("icon");return(0,g.wg)(),(0,g.iD)("div",fe,[(0,g.Wm)(o,{class:"loading-img",name:"loading"})])}var Le={components:{icon:$t}};const ye=(0,C.Z)(Le,[["render",_e],["__scopeId","data-v-e4b6d8b4"]]);var be=ye;const De={class:"profile-info"},xe={class:"profile-img"},Ze=["src"],Se={class:"profile-name"};function ke(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("div",De,[(0,g._)("div",xe,[(0,g._)("img",{src:n.avatar,alt:"avatar",class:"profile-avatar-img"},null,8,Ze)]),(0,g._)("div",Se,(0,Yt.zw)(n.username),1)])}var He={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const Ve=(0,C.Z)(He,[["render",ke],["__scopeId","data-v-9fbb0c1c"]]);var Ie=Ve;const Me=t=>((0,g.dD)("data-v-67567493"),t=t(),(0,g.Cn)(),t),Te={class:"placeholder"},Oe=Me((()=>(0,g._)("div",{class:"img"},null,-1))),We=Me((()=>(0,g._)("div",{class:"line line1"},null,-1))),Fe=Me((()=>(0,g._)("div",{class:"line line2"},null,-1))),je=[We,Fe];function Pe(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("div",Te,[Oe,((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(n.paragraphs,(t=>((0,g.wg)(),(0,g.iD)("div",{class:"paragraph",key:t},je)))),128))])}var $e={name:"Placeholder",props:{paragraphs:{type:Number,default:1}}};const Ne=(0,C.Z)($e,[["render",Pe],["__scopeId","data-v-67567493"]]);var Be=Ne,Re={components:{xprogress:we,user:Ie,spinner:be,xbutton:ve,placeholder:Be,Icon:$t},props:{active:Boolean,loading:Boolean,hoverText:{type:String},btnsShown:{type:Array,default:()=>["next","prev"],validator(t){return t.every((t=>"next"===t||"prev"===t))}},data:{type:Object,required:!0,default:()=>({})}}};const Ee=(0,C.Z)(Re,[["render",ie],["__scopeId","data-v-934789f6"]]);var qe=Ee,ze={components:{storyPostItem:qe},props:{initialSlide:{type:Number}},emits:["onFinish","onNext","onPrev"],data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},computed:{...(0,a.rn)({trendings:t=>t.trendings.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,a.nv)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"}),async fetchReadmeForActiveSlide(){const{id:t,owner:e,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:t,owner:e.login,repo:n})},moveSlider(t){const{slider:e,item:n}=this.$refs,s=parseInt(getComputedStyle(n[t]).getPropertyValue("width"),10);this.slideNdx=t,this.sliderPosition=-s*t,e.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(t){throw console.log(t),t}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(t){this.moveSlider(t),await this.loadReadme()},getStoryData(t){return{id:t.id,avatar:t.owner?.avatar_url,username:t.owner?.login,content:t.readme}}},async mounted(){if(this.initialSlide){const t=this.trendings.findIndex((t=>t.id===this.initialSlide));await this.handleSlide(t)}await this.fetchTrendings(),await this.loadReadme()}};const Ae=(0,C.Z)(ze,[["render",Ut],["__scopeId","data-v-18a5b7ec"]]);var Ue=Ae,Ye={components:{icon:$t,logo:Et,storiesSlider:Ue}};const Ke=(0,C.Z)(Ye,[["render",x],["__scopeId","data-v-e48b6f84"]]);var Ge=Ke;const Je={class:"header"},Xe={class:"stories"};function Qe(t,e,n,s,r,a){const o=(0,g.up)("logo"),i=(0,g.up)("navigation"),l=(0,g.up)("story-user-item"),c=(0,g.up)("Header"),d=(0,g.up)("user-content");return(0,g.wg)(),(0,g.iD)(g.HY,null,[(0,g._)("div",Je,[(0,g.Wm)(c,null,{headline:(0,g.w5)((()=>[(0,g.Wm)(o,{class:"logo logo-stories"}),(0,g.Wm)(i)])),content:(0,g.w5)((()=>[(0,g._)("ul",Xe,[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(t.trendings,(e=>((0,g.wg)(),(0,g.iD)("li",{class:"stories-item",key:e.id},[(0,g.Wm)(l,(0,g.dG)(a.getFeedData(e),{onOnPress:n=>t.$router.push({name:"stories",params:{initialSlide:e.id}})}),null,16,["onOnPress"])])))),128))])])),_:1})]),(0,g.Wm)(d)],64)}const tn={class:"header"},en={class:"x-container"},nn={class:"headline"},sn={key:0,class:"content"};function rn(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("div",tn,[(0,g._)("div",en,[(0,g._)("div",nn,[(0,g.WI)(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?((0,g.wg)(),(0,g.iD)("div",sn,[(0,g.WI)(t.$slots,"content",{},void 0,!0)])):(0,g.kq)("",!0)])])}var an={};const on=(0,C.Z)(an,[["render",rn],["__scopeId","data-v-0b0bc1bd"]]);var ln=on;const cn={class:"avatar"},dn=["src"],un={class:"username"};function pn(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=e=>t.$emit("onPress"))},[(0,g._)("div",cn,[(0,g._)("img",{src:n.avatar,alt:"username avatar",class:"img"},null,8,dn)]),(0,g._)("div",un,(0,Yt.zw)(n.username),1)])}var vn={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const gn=(0,C.Z)(vn,[["render",pn],["__scopeId","data-v-b4b2df22"]]);var hn=gn,mn=JSON.parse('[{"id":"1","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Josh"},{"id":"2","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Andrew"},{"id":"3","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Camille"},{"id":"4","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Marselle"},{"id":"5","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Piter"},{"id":"6","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Can"},{"id":"7","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Iloveanime"},{"id":"8","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Diself"},{"id":"9","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Gartor"},{"id":"10","avatar":"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg","username":"Camilr"}]');const Cn=t=>((0,g.dD)("data-v-fd0a5e96"),t=t(),(0,g.Cn)(),t),wn={class:"user__post-list"},fn={class:"profile-post"},_n=Cn((()=>(0,g._)("div",{class:"date"},"15 may",-1)));function Ln(t,e,n,s,r,a){const o=(0,g.up)("user"),i=(0,g.up)("user-post-content"),l=(0,g.up)("comments");return(0,g.wg)(),(0,g.iD)("div",wn,[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(r.items,(t=>((0,g.wg)(),(0,g.iD)("div",{class:"user-post-container",key:t.id},[(0,g._)("div",fn,[(0,g.Wm)(o,(0,Yt.vs)((0,g.F4)(a.getFeedData(t))),null,16),(0,g.Wm)(i,(0,Yt.vs)((0,g.F4)(a.getFeedData(t))),null,16),(0,g.Wm)(l),_n])])))),128))])}const yn=t=>((0,g.dD)("data-v-e152ad84"),t=t(),(0,g.Cn)(),t),bn={class:"user__post-wrap"},Dn={class:"user__post-content"},xn={class:"user__post-title"},Zn={class:"user__post-desc"},Sn=yn((()=>(0,g._)("button",{class:"button"},null,-1))),kn=yn((()=>(0,g._)("div",{class:"c-feed"},null,-1)));function Hn(t,e,n,s,r,a){const o=(0,g.up)("info-panel");return(0,g.wg)(),(0,g.iD)("div",bn,[(0,g._)("div",Dn,[(0,g._)("div",xn,(0,Yt.zw)(n.title),1),(0,g._)("div",Zn,(0,Yt.zw)(n.description),1),(0,g.Wm)(o,{stars:n.stars,forks:n.forks},null,8,["stars","forks"])]),Sn,kn])}const Vn=t=>((0,g.dD)("data-v-c62d3536"),t=t(),(0,g.Cn)(),t),In={class:"ratings__list"},Mn={class:"ratings__item"},Tn=Vn((()=>(0,g._)("div",{class:"ratings__star-title"},"Star",-1))),On={class:"ratings__item"},Wn={class:"ratings__item-title"},Fn={class:"ratings__item"},jn=Vn((()=>(0,g._)("div",{class:"ratings__fork-title"},"Fork",-1))),Pn={class:"ratings__item"},$n={class:"ratings__item-num"};function Nn(t,e,n,s,r,a){const o=(0,g.up)("Icon");return(0,g.wg)(),(0,g.iD)("ul",In,[(0,g._)("li",Mn,[(0,g.Wm)(o,{class:"ratings__star",name:"star"}),Tn]),(0,g._)("li",On,[(0,g._)("div",Wn,(0,Yt.zw)(n.stars),1)]),(0,g._)("li",Fn,[(0,g.Wm)(o,{class:"ratings__star",name:"fork"}),jn]),(0,g._)("li",Pn,[(0,g._)("div",$n,(0,Yt.zw)(n.forks),1)])])}var Bn={components:{Icon:$t},props:{stars:Number,forks:Number}};const Rn=(0,C.Z)(Bn,[["render",Nn],["__scopeId","data-v-c62d3536"]]);var En=Rn,qn={name:"userPostContent",components:{infoPanel:En},props:["title","description","stars","forks"]};const zn=(0,C.Z)(qn,[["render",Hn],["__scopeId","data-v-e152ad84"]]);var An=zn;const Un={class:"reviews"},Yn={key:0,class:"comments"},Kn={class:"comments-list"};function Gn(t,e,n,s,r,a){const o=(0,g.up)("toggler"),i=(0,g.up)("comment");return(0,g.wg)(),(0,g.iD)("div",Un,[(0,g.Wm)(o,{onOnToggle:a.toggle},null,8,["onOnToggle"]),r.shown?((0,g.wg)(),(0,g.iD)("div",Yn,[(0,g._)("ul",Kn,[((0,g.wg)(),(0,g.iD)(g.HY,null,(0,g.Ko)(8,(t=>(0,g._)("li",{class:"comments-item",key:t},[(0,g.Wm)(i,{class:"oops",text:"Some text",username:"John Doe"})]))),64))])])):(0,g.kq)("",!0)])}const Jn={class:"text"},Xn={class:"icon"};function Qn(t,e,n,s,r,a){const o=(0,g.up)("icon");return(0,g.wg)(),(0,g.iD)("button",{class:(0,Yt.C_)(["button",{active:r.isOpened}]),onClick:e[0]||(e[0]=(...t)=>a.toggle&&a.toggle(...t))},[(0,g._)("span",Jn,(0,Yt.zw)(r.isOpened?"Hide":"Show")+" issues",1),(0,g._)("span",Xn,[(0,g.Wm)(o,{name:"triangle"})])],2)}var ts={components:{icon:N},data(){return{isOpened:!1,shown:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const es=(0,C.Z)(ts,[["render",Qn],["__scopeId","data-v-5e6cf5f4"]]);var ns=es;const ss={class:"c-comment"},rs={class:"username"};function as(t,e,n,s,r,a){return(0,g.wg)(),(0,g.iD)("div",ss,[(0,g._)("p",null,[(0,g._)("span",rs,(0,Yt.zw)(n.username),1),(0,g.Uk)(" "+(0,Yt.zw)(n.text),1)])])}var os={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const is=(0,C.Z)(os,[["render",as],["__scopeId","data-v-2302e6ae"]]);var ls=is,cs={components:{toggler:ns,Comment:ls},data(){return{shown:!1}},methods:{toggle(t){this.shown=t}}};const ds=(0,C.Z)(cs,[["render",Gn]]);var us=ds,ps={components:{user:Ie,userPostContent:An,comments:us},data(){return{items:{}}},methods:{getFeedData(t){return{username:t.owner.login,title:t.name,description:t.description,stars:t.stargazers_count,forks:t.forks,avatar:t.owner.avatar_url}}},async created(){try{const{data:t}=await d();this.items=t.items}catch(t){console.log(t)}}};const vs=(0,C.Z)(ps,[["render",Ln],["__scopeId","data-v-fd0a5e96"]]);var gs=vs;const hs=t=>((0,g.dD)("data-v-7e7ea9e5"),t=t(),(0,g.Cn)(),t),ms={class:"user-info"},Cs={class:"home"},ws=hs((()=>(0,g._)("div",{class:"user-photo"},[(0,g._)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg",class:"img-avatar",alt:"user photo"})],-1))),fs={class:"logout"};function _s(t,e,n,s,r,a){const o=(0,g.up)("Icon");return(0,g.wg)(),(0,g.iD)("div",ms,[(0,g._)("div",Cs,[(0,g.Wm)(o,{name:"home"})]),ws,(0,g._)("div",fs,[(0,g.Wm)(o,{name:"logout"})])])}var Ls={components:{Icon:$t}};const ys=(0,C.Z)(Ls,[["render",_s],["__scopeId","data-v-7e7ea9e5"]]);var bs=ys,Ds={name:"Feeds",components:{Header:ln,storyUserItem:hn,userContent:gs,navigation:bs,logo:Et},computed:{...(0,a.rn)({trendings:t=>t.trendings.data})},async created(){try{const{data:t}=await d();this.items=t.items}catch(t){console.log(t)}},data(){return{stories:mn,items:[]}},methods:{handlePress(){console.log(1)},getFeedData(t){return{avatar:t.owner.avatar_url,username:t.owner.login}},...(0,a.nv)({fetchTrendings:"trendings/fetchTrendings"})},mounted(){this.fetchTrendings()}};const xs=(0,C.Z)(Ds,[["render",Qe],["__scopeId","data-v-11905060"]]);var Zs=xs,Ss=[{path:"/",name:"feeds",component:Zs},{path:"/stories/:initialSlide",name:"stories",component:Ge}],ks=(0,_.p7)({history:(0,_.r5)(),routes:Ss});const Hs=(0,r.ri)(f);Hs.use(ks),Hs.use(v),Hs.mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,a){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],a=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(i=!1,a<o&&(o=a));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,r,a]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(e&&e(s);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},s=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6391)}));s=n.O(s)})();
//# sourceMappingURL=app.5e2ce4d1.js.map