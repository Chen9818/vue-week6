(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ab77568"],{ca8d:function(t,e,n){"use strict";var c=n("7a23"),a={"aria-label":"Page navigation example"},i={class:"pagination pagination-lg"},o=Object(c["h"])("span",{"aria-hidden":"true"},"«",-1),s=[o],l={key:0,class:"page-link"},r=["onClick"],d=Object(c["h"])("span",{"aria-hidden":"true"},"»",-1),b=[d];function u(t,e,n,o,d,u){return Object(c["A"])(),Object(c["g"])("nav",a,[Object(c["h"])("ul",i,[Object(c["h"])("li",{class:Object(c["t"])(["page-item",{disabled:1===n.pages.current_page}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(c["ab"])((function(t){return u.emitPages(n.pages.current_page-1)}),["prevent"]))},s)],2),(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(n.pages.total_pages,(function(t,e){return Object(c["A"])(),Object(c["g"])("li",{key:e,class:Object(c["t"])(["page-item",{active:t===n.pages.current_page}])},[t===n.pages.current_page?(Object(c["A"])(),Object(c["g"])("span",l,Object(c["N"])(t),1)):(Object(c["A"])(),Object(c["g"])("a",{key:1,class:"page-link",href:"#",onClick:Object(c["ab"])((function(e){return u.emitPages(t)}),["prevent"])},Object(c["N"])(t),9,r))],2)})),128)),Object(c["h"])("li",{class:Object(c["t"])(["page-item",{disabled:n.pages.current_page===n.pages.total_pages}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(c["ab"])((function(t){return u.emitPages(n.pages.current_page+1)}),["prevent"]))},b)],2)])])}var p={props:["pages"],methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},g=n("6b0d"),f=n.n(g);const j=f()(p,[["render",u]]);e["a"]=j},e6dc:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a={class:"products w-100",style:{background:"#ccc"}},i={class:"filter d-flex justify-content-center pt-5 d-none d-xl-flex"},o={class:"dropdown d-block d-xl-none d-flex justify-content-center mt-5"},s={class:"btn btn-base dropdown-toggle fs-3",style:{color:"#fff",width:"80%"},type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},l={class:"dropdown-menu text-center","aria-labelledby":"dropdownMenuButton1",style:{width:"80%"}},r={class:"container"},d={class:"row"},b={class:"card mx-auto my-3",style:{width:"100%"}},u=["src","alt"],p={class:"card-body"},g={class:"d-flex"},f={class:"card-title"},j={class:"badge bg-base ms-2"},O={class:"card-text d-flex justify-content-between",style:{"font-size":"1.2rem"}},h={class:"text-decoration-line-through"},m={style:{color:"#ff0000"}},v={class:"d-flex justify-content-between"},k=["onClick","disabled"],y={key:0,class:"fas fa-spinner fa-pulse"},w=Object(c["j"])(" MORE "),x=["onClick","disabled"],P={key:0,class:"fas fa-spinner fa-pulse"},C=Object(c["j"])("コートに入れる");function _(t,e,n,_,I,N){var F=Object(c["K"])("Loading"),A=Object(c["K"])("NavbarView"),T=Object(c["K"])("MainImage"),z=Object(c["K"])("PaginationView"),M=Object(c["K"])("FooterView");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["k"])(F,{active:I.isLoading},null,8,["active"]),Object(c["k"])(A),Object(c["k"])(T,{title:I.MainTitle},null,8,["title"]),Object(c["h"])("ul",i,[Object(c["h"])("li",null,[Object(c["h"])("button",{type:"button",class:"btn btn-base",style:{color:"#fff","font-size":"30px"},onClick:e[0]||(e[0]=function(t){return N.getProducts()})},"全部")]),Object(c["h"])("li",null,[Object(c["h"])("button",{type:"button",class:"btn btn-base",style:{color:"#fff","font-size":"30px"},onClick:e[1]||(e[1]=function(t){return N.getFilter("乳膠枕")})},"パイプ枕")]),Object(c["h"])("li",null,[Object(c["h"])("button",{type:"button",class:"btn btn-base",style:{color:"#fff","font-size":"30px"},onClick:e[2]||(e[2]=function(t){return N.getFilter("絲絨枕")})},"わた枕")]),Object(c["h"])("li",null,[Object(c["h"])("button",{type:"button",class:"btn btn-base",style:{color:"#fff","font-size":"30px"},onClick:e[3]||(e[3]=function(t){return N.getFilter("機能枕")})},"機能枕")]),Object(c["h"])("li",null,[Object(c["h"])("button",{type:"button",class:"btn btn-base",style:{color:"#fff","font-size":"30px"},onClick:e[4]||(e[4]=function(t){return N.getFilter("兒童枕")})},"児童枕")])]),Object(c["h"])("div",o,[Object(c["h"])("button",s,Object(c["N"])(I.filterTitle),1),Object(c["h"])("ul",l,[Object(c["h"])("li",{class:"dropdown-item fs-3",onClick:e[5]||(e[5]=function(){return N.getProducts&&N.getProducts.apply(N,arguments)})},"全部"),Object(c["h"])("li",{class:"dropdown-item fs-3",onClick:e[6]||(e[6]=function(t){return N.getFilter("乳膠枕")})},"パイプ枕"),Object(c["h"])("li",{class:"dropdown-item fs-3",onClick:e[7]||(e[7]=function(t){return N.getFilter("絲絨枕")})},"わた枕"),Object(c["h"])("li",{class:"dropdown-item fs-3",onClick:e[8]||(e[8]=function(t){return N.getFilter("機能枕")})},"機能枕"),Object(c["h"])("li",{class:"dropdown-item fs-3",onClick:e[9]||(e[9]=function(t){return N.getFilter("兒童枕")})},"児童枕")])]),Object(c["h"])("div",r,[Object(c["h"])("div",d,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(I.products,(function(t){return Object(c["A"])(),Object(c["g"])("div",{class:"products col-12 col-md-4 d-flex flex-wrap",key:t.id},[Object(c["h"])("div",b,[Object(c["h"])("img",{src:t.imageUrl,class:"card-img-top",alt:t.title},null,8,u),Object(c["h"])("div",p,[Object(c["h"])("div",g,[Object(c["h"])("h4",f,[Object(c["j"])(Object(c["N"])(t.title)+" ",1),Object(c["h"])("span",j,Object(c["N"])(t.category),1)])]),Object(c["h"])("div",O,[Object(c["h"])("p",h," 元:NT"+Object(c["N"])(t.origin_price),1),Object(c["h"])("p",m," 特:NT"+Object(c["N"])(t.price),1)]),Object(c["h"])("div",v,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return N.getProduct(t.id)},disabled:I.loadingStatus.loadingItem===t.id||!t.is_enabled},[I.loadingStatus.loadingItem===t.id?(Object(c["A"])(),Object(c["g"])("i",y)):Object(c["f"])("",!0),w],8,k),Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return N.addToCart(t.id)},disabled:I.loadingStatus.loadingItem===t.id||!t.is_enabled},[I.loadingStatus.loadingItem===t.id?(Object(c["A"])(),Object(c["g"])("i",P)):Object(c["f"])("",!0),C],8,x)])])])])})),128))])]),Object(c["k"])(z,{pages:I.pagination,onEmitPages:N.getProducts,class:"d-flex justify-content-center"},null,8,["pages","onEmitPages"]),Object(c["k"])(M)])}n("99af"),n("4de4"),n("d3b7");var I=n("f796"),N=n("1652"),F=n("6f40"),A=n("ca8d"),T=n("0b0a"),z={name:"Products",data:function(){return{products:[],filterProducts:[],filterTitle:"",loadingStatus:{loadingItem:""},isLoading:!1,product:{},pagination:{},MainTitle:"商品一覧"}},components:{FooterView:I["a"],NavbarView:N["a"],PaginationView:A["a"],MainImage:F["a"]},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/products?page=").concat(e);this.$http.get(n).then((function(e){var n=e.data,c=n.products,a=n.pagination;t.products=c,t.pagination=a,t.filterTitle="全部",t.isLoading=!1})).catch((function(t){alert(t.response.data.message)}))},getProduct:function(t){this.$router.push("/product/".concat(t))},getFilter:function(t){var e=this;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/products/all");this.$http.get(n).then((function(n){e.filterProducts=n.data.products,e.filterTitle=t,e.products=e.filterProducts.filter((function(e){return e.category===t})),e.isLoading=!1})).catch((function(t){alert(t.response.data.message)}))},addToCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("wei-z","/cart");this.loadingStatus.loadingItem=t;var a={product_id:t,qty:n};this.$http.post(c,{data:a}).then((function(t){T["a"].emit("cart"),e.$httpMessageState(t,"コートに入れる"),e.loadingStatus.loadingItem=""})).catch((function(t){e.$httpMessageState(t.response,"コートに入れる")}))}}},M=(n("e7d8"),n("6b0d")),S=n.n(M);const L=S()(z,[["render",_],["__scopeId","data-v-6885eab4"]]);e["default"]=L},e7d8:function(t,e,n){"use strict";n("febe")},febe:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2ab77568.9fc2082c.js.map