(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1876c3bc"],{"057f":function(e,t,r){var i=r("fc6a"),c=r("241c").f,a={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(e){try{return c(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==a.call(e)?o(e):c(i(e))}},"06fa":function(e,t,r){"use strict";r.r(t);var i=r("7a23"),c={class:"container"},a=Object(i["h"])("限時優惠"),n={class:"row mh-wrapper"},o={class:"col-12 py-5"},s=Object(i["i"])("div",{class:"pb-5 text-center"},[Object(i["i"])("p",{class:"h5"},"想要節省支出又兼顧時尚美觀?"),Object(i["i"])("p",{class:"h5"},"精選商品限時優惠，經濟實惠的商品任您挑選")],-1),u={class:"row"},p={class:"py-1 text-end"},f=Object(i["i"])("p",{class:"h3"},[Object(i["i"])("i",{class:"bi bi-arrow-left me-3"}),Object(i["h"])("回首頁")],-1);function l(e,t,l,d,g,b){var v=Object(i["D"])("PageTitle"),m=Object(i["D"])("ProductCard"),O=Object(i["D"])("router-link");return Object(i["w"])(),Object(i["e"])("div",c,[Object(i["i"])(v,{path:r("d18e")},{default:Object(i["Q"])((function(){return[a]})),_:1},8,["path"]),Object(i["i"])("div",n,[Object(i["i"])("div",o,[s,Object(i["i"])("div",u,[(Object(i["w"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(g.DiscountJson,(function(e){return Object(i["w"])(),Object(i["e"])("div",{class:"col-sm-6 col-md-4 col-lg-3 mb-4",key:e.id},[Object(i["i"])(m,{data:e},null,8,["data"])])})),128))]),Object(i["i"])("div",p,[Object(i["i"])(O,{to:"/"},{default:Object(i["Q"])((function(){return[f]})),_:1})])])])])}var d=r("72ca"),g=r("1927"),b=r("bd6c"),v={name:"Discount",components:{PageTitle:d["a"],ProductCard:g["a"]},data:function(){return{DiscountJson:b}},created:function(){this.emitter.emit("cartVisible",!0)}};v.render=l;t["default"]=v},1927:function(e,t,r){"use strict";r("99af"),r("a4d3"),r("e01a");var i=r("7a23"),c={class:"card h-100 shadow"},a={class:"card-img-wrapper"},n=Object(i["i"])("div",{class:"card-img-layer d-flex justify-content-center align-items-center"},[Object(i["i"])("p",{class:"h5"},"點選查看")],-1),o={class:"card-body"},s={class:"card-title h5 mb-1"},u={class:"d-flex justify-content-between align-items-center pb-1"},p={class:"card-text card-gray-text"},f={key:0,class:"badge rounded-pill bg-success"},l={class:"d-flex justify-content-between align-items-center pb-1"},d={class:"card-text text-danger"},g={key:0,class:"card-text"};function b(e,t,r,b,v,m){var O=Object(i["D"])("router-link"),j=Object(i["E"])("lazy");return Object(i["w"])(),Object(i["e"])(O,{to:"/product/".concat(r.data.id,"?categoryMain=").concat(r.categoryMain,"&category=").concat(r.category,"&page=").concat(r.page)},{default:Object(i["Q"])((function(){return[Object(i["i"])("div",c,[Object(i["i"])("div",a,[Object(i["R"])(Object(i["i"])("img",{class:"card-img-top img-card",alt:r.data.title},null,8,["alt"]),[[j,r.data.imageUrl]]),n]),Object(i["i"])("div",o,[Object(i["i"])("p",s,Object(i["H"])(r.data.title),1),Object(i["i"])("div",u,[Object(i["i"])("span",p,[Object(i["i"])("small",null,Object(i["H"])(r.data.description),1)]),r.data.price!=r.data.origin_price?(Object(i["w"])(),Object(i["e"])("span",f,"特價")):Object(i["f"])("",!0)]),Object(i["i"])("div",l,[Object(i["i"])("span",d,[Object(i["i"])("strong",null,Object(i["H"])(e.$filters.currency(r.data.price)),1)]),r.data.price!=r.data.origin_price?(Object(i["w"])(),Object(i["e"])("span",g,[Object(i["i"])("del",null,Object(i["H"])(e.$filters.currency(r.data.origin_price)),1)])):Object(i["f"])("",!0)])])])]})),_:1},8,["to"])}r("a9e3");var v={name:"ProductCard",props:{data:{type:Object},category:{type:String,default:""},categoryMain:{type:String,default:""},page:{type:[Number,String],default:1}}};v.render=b;t["a"]=v},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var i=r("1d80"),c=r("5899"),a="["+c+"]",n=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(e){return function(t){var r=String(i(t));return 1&e&&(r=r.replace(n,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,r){var i=r("861d"),c=r("d2bb");e.exports=function(e,t,r){var a,n;return c&&"function"==typeof(a=t.constructor)&&a!==r&&i(n=a.prototype)&&n!==r.prototype&&c(e,n),e}},"72ca":function(e,t,r){"use strict";var i=r("7a23"),c={class:"page-title-wrapper"},a={class:"page-title-layer py-3 px-2 px-md-5 py-md-4"},n={class:"h2"};function o(e,t,r,o,s,u){return Object(i["w"])(),Object(i["e"])("div",c,[Object(i["i"])("img",{src:r.path,alt:"標題圖片",class:"page-img"},null,8,["src"]),Object(i["i"])("div",a,[Object(i["i"])("h1",n,[Object(i["C"])(e.$slots,"default")])])])}var s={name:"PageTitle",props:["path"]};s.render=o;t["a"]=s},"746f":function(e,t,r){var i=r("428f"),c=r("5135"),a=r("e538"),n=r("9bf2").f;e.exports=function(e){var t=i.Symbol||(i.Symbol={});c(t,e)||n(t,e,{value:a.f(e)})}},a4d3:function(e,t,r){"use strict";var i=r("23e7"),c=r("da84"),a=r("d066"),n=r("c430"),o=r("83ab"),s=r("4930"),u=r("fdbf"),p=r("d039"),f=r("5135"),l=r("e8b5"),d=r("861d"),g=r("825a"),b=r("7b0b"),v=r("fc6a"),m=r("c04e"),O=r("5c6c"),j=r("7c73"),y=r("df75"),h=r("241c"),S=r("057f"),B=r("7418"),F=r("06cf"),w=r("9bf2"),I=r("d1e7"),N=r("9112"),x=r("6eeb"),G=r("5692"),D=r("f772"),k=r("d012"),E=r("90e3"),P=r("b622"),M=r("e538"),A=r("746f"),C=r("d44e"),T=r("69f3"),z=r("b727").forEach,U=D("hidden"),V="Symbol",J="prototype",W=P("toPrimitive"),L=T.set,Z=T.getterFor(V),Q=Object[J],H=c.Symbol,q=a("JSON","stringify"),X=F.f,K=w.f,R=S.f,Y=I.f,_=G("symbols"),$=G("op-symbols"),ee=G("string-to-symbol-registry"),te=G("symbol-to-string-registry"),re=G("wks"),ie=c.QObject,ce=!ie||!ie[J]||!ie[J].findChild,ae=o&&p((function(){return 7!=j(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var i=X(Q,t);i&&delete Q[t],K(e,t,r),i&&e!==Q&&K(Q,t,i)}:K,ne=function(e,t){var r=_[e]=j(H[J]);return L(r,{type:V,tag:e,description:t}),o||(r.description=t),r},oe=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},se=function(e,t,r){e===Q&&se($,t,r),g(e);var i=m(t,!0);return g(r),f(_,i)?(r.enumerable?(f(e,U)&&e[U][i]&&(e[U][i]=!1),r=j(r,{enumerable:O(0,!1)})):(f(e,U)||K(e,U,O(1,{})),e[U][i]=!0),ae(e,i,r)):K(e,i,r)},ue=function(e,t){g(e);var r=v(t),i=y(r).concat(ge(r));return z(i,(function(t){o&&!fe.call(r,t)||se(e,t,r[t])})),e},pe=function(e,t){return void 0===t?j(e):ue(j(e),t)},fe=function(e){var t=m(e,!0),r=Y.call(this,t);return!(this===Q&&f(_,t)&&!f($,t))&&(!(r||!f(this,t)||!f(_,t)||f(this,U)&&this[U][t])||r)},le=function(e,t){var r=v(e),i=m(t,!0);if(r!==Q||!f(_,i)||f($,i)){var c=X(r,i);return!c||!f(_,i)||f(r,U)&&r[U][i]||(c.enumerable=!0),c}},de=function(e){var t=R(v(e)),r=[];return z(t,(function(e){f(_,e)||f(k,e)||r.push(e)})),r},ge=function(e){var t=e===Q,r=R(t?$:v(e)),i=[];return z(r,(function(e){!f(_,e)||t&&!f(Q,e)||i.push(_[e])})),i};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),r=function(e){this===Q&&r.call($,e),f(this,U)&&f(this[U],t)&&(this[U][t]=!1),ae(this,t,O(1,e))};return o&&ce&&ae(Q,t,{configurable:!0,set:r}),ne(t,e)},x(H[J],"toString",(function(){return Z(this).tag})),x(H,"withoutSetter",(function(e){return ne(E(e),e)})),I.f=fe,w.f=se,F.f=le,h.f=S.f=de,B.f=ge,M.f=function(e){return ne(P(e),e)},o&&(K(H[J],"description",{configurable:!0,get:function(){return Z(this).description}}),n||x(Q,"propertyIsEnumerable",fe,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),z(y(re),(function(e){A(e)})),i({target:V,stat:!0,forced:!s},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var r=H(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){ce=!0},useSimple:function(){ce=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!o},{create:pe,defineProperty:se,defineProperties:ue,getOwnPropertyDescriptor:le}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:de,getOwnPropertySymbols:ge}),i({target:"Object",stat:!0,forced:p((function(){B.f(1)}))},{getOwnPropertySymbols:function(e){return B.f(b(e))}}),q){var be=!s||p((function(){var e=H();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}));i({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,r){var i,c=[e],a=1;while(arguments.length>a)c.push(arguments[a++]);if(i=t,(d(t)||void 0!==e)&&!oe(e))return l(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!oe(t))return t}),c[1]=t,q.apply(null,c)}})}H[J][W]||N(H[J],W,H[J].valueOf),C(H,V),k[U]=!0},a9e3:function(e,t,r){"use strict";var i=r("83ab"),c=r("da84"),a=r("94ca"),n=r("6eeb"),o=r("5135"),s=r("c6b6"),u=r("7156"),p=r("c04e"),f=r("d039"),l=r("7c73"),d=r("241c").f,g=r("06cf").f,b=r("9bf2").f,v=r("58a8").trim,m="Number",O=c[m],j=O.prototype,y=s(l(j))==m,h=function(e){var t,r,i,c,a,n,o,s,u=p(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:i=2,c=49;break;case 79:case 111:i=8,c=55;break;default:return+u}for(a=u.slice(2),n=a.length,o=0;o<n;o++)if(s=a.charCodeAt(o),s<48||s>c)return NaN;return parseInt(a,i)}return+u};if(a(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var S,B=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof B&&(y?f((function(){j.valueOf.call(r)})):s(r)!=m)?u(new O(h(t)),r,B):h(t)},F=i?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;F.length>w;w++)o(O,S=F[w])&&!o(B,S)&&b(B,S,g(O,S));B.prototype=j,j.constructor=B,n(c,m,B)}},bd6c:function(e){e.exports=JSON.parse('[{"description":"L3DE0LD27","id":"-MbjwvATDJBsS9e9AlMS","title":"類硅藻土清水模塗料","price":"2520","origin_price":"2600","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623228298326.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cnVl9fc73kZ6vJOlVeEeVZy7gPejfjt%2FYNvPWOZrb0%2FyREuebCS50lKZ48sogUcoPvOzrXY9hjVyPQzfWTIfq%2Fv3T%2B4ruBjEUurOk%2BrN%2FKy0Bl4zmppWeLdP5GiccWFk52GXn9u23I%2FcOaY7OE6HpUxb3dlaPZZ9lCUPfrU2sfVVjIRjNSnACq23rN2FXNiV%2FBaiH%2FSdOktCm4BklAJuJZgDmgGEn8uMgOjmPF28Ez6r%2Be5nO67GLXLeiJThZRTO9Fv0xedAOJZIwnKyzX6QV9sfcjbxuvWFLEm9ZykgnxDS3AP4RdNno4q096t7FzlB8dOzunRan2ZFKxNTMmkMRQ%3D%3D"},{"description":"MDOL3SS2","id":"-MbijPkkL3hO3gcW41Xb","title":"繽紛彩磚文化石","price":"11500","origin_price":"12000","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623207880767.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oNjCyjDDFOf2ojUpIHRitlrxa%2B56fs1Qv1GJnf9ZImJESBuPaavapTfdwUBQTWuaZPCIfxeXzQWGqEGOm6JMpUORKw5nQccncB0Blbwf%2B2dBU4nkURGI2060yAaZCaMpxqa3mE113FshXNTVOhxNJITgjWUg71ECumIeA7tUnuWQQ8HRgvlBnY4LCv%2FAPvsTC3zdVJGkahpgT3Jkx8iN6ReE8aQOjkr46vx8W48T%2FDIojBU%2Fu7hT49Jvs%2FN8F93prH99VLIcgiJLIL7Ef%2B97r8X5INVLes%2Bc%2Bswd4s8kvO16Ztyu8Fk7Xpu8u1Q25Ax0RSyQ9QHEGLBs7ulsARb%2FpA%3D%3D"},{"description":"F9837SKLR","id":"-Mbk-VKGHpkeHhE_nyMH","title":"雲紋清水模塗料","price":"2240","origin_price":"2500","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1624860980036.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k4kxLyQYn2KqrFRIrjb4hyPbE7jJDZ9VigwBdm2H2sXNyB3gWPRBtWy1ZXejRAP%2BD2ohVmhX8OpOZurCdwBqgY0c6rO6DAuzeG227sFebUqS0f4iipZuIviGJ5isqNhnM5QINTVZFjfo1Z0wve0e0BxAKRGg%2BrT3IqDF%2BplsL%2Br4qs2CV%2Fd%2B9lpiz0Yby6cfNIT9iNJnHmzO07uDaTy5z08FflGfHNZrNelYUfzEzHsLFMPzLgkECCImuGa2ZIIudWFB4WdVuMdgjs4hBqiI5AmHM87VBu0mJdPIvIIHxTprjGSPeUrOzoy8Wg011V2U8yOANUlsLPCwsNklibkoCg%3D%3D"},{"description":"J9W2SS2","id":"-Mbixo2X5jWAXQ44dNc3","title":"刷紋預鑄牆好樂地輕質文化石","price":"15900","origin_price":"16000","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623211733787.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bCoI01bZmk%2BMukDjxBsgG7liyiOdfElgh16Ovc67grPHWF3b%2BmwSm5kYCCqk%2Br6%2Bo9LkoPW8fUjMCu3M%2F%2FYr%2FNn9u91FZe30Sjhk8P1Dsa4CuLfvJWKAedWWZuWIe1fI1DG3%2B47jmvxFCt%2F%2B46LlBM7xKy5tlgw7WGtgnISjcYS7aOOnnvsifk%2B2Vhk3TdlWYsrBoS8uXXZqMr0IhG95U3WfxUM6ZEPDU2HCo6SCOiO8y6vi6Vj1CcmPPBwXG%2B68tm%2FfFtYQ4ksFdpXxMh3lt5WCCXblwuEg6Rl72xqQCAD5%2FTq%2BvPg1aR24DUwpLbUSCJ%2FoCCaXUTEcr7imek%2FebQ%3D%3D"},{"description":"U9375LDS","id":"-Mbjz5_6MT2yY_3GfMRq","title":"金箔雲紋清水模塗料","price":"2560","origin_price":"2600","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623228946929.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iXXGcdqFh757bV1mhaSG8QSZq%2BuNZCBTGSHictKvNeEJISRiKrrNtiuuCPEAyKKBAPHwWJwE%2FZ9yOj42ld1gGScHbLKiqWVTeQ2ezMUPOPSRZ5lR4gx2rHK1c%2Bq19zSwV7TKPiNSNzxfIZQZAVBVHSlpf4dKPju8oGaT2kiMzLXTPMKC2VyHtKB1ATaTpnHT761F7SaOeFYH2661QMgeFFJ7WTrxaBfI1a9Tf6hp75KUcvCO7mkGLSM045OiKHeZL7We7c2h7IZziODb9zgG%2F0dSbqI7nFV9PYBWUbpWCqaNIhLaM9r64SKUXp9KhLfs%2BA1Th2b2wuCza4u76BAWIw%3D%3D"},{"description":"JFIW3066KOG","id":"-MbnooUFSWo-HGAlBB4p","title":"北美是原橡岩沐系列石塑地板","price":"1410","origin_price":"1500","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1626576449976.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ShqnCnseqohrMfIsZUfah2tvk6AeVvMNOC2atn2qDbpqn8egBbtTGuz3V2IPv4243Fee6tbne6dwreZQJjbE2GfTmUynKlYX0%2FOC%2Fg8qxWV7nQv3YCwVaVv3Z6Yi4uHpgliOLTzRlDinhhVUUv8tjrqRRz2GcKJkGk0rSJEnDxfQtL30et5SmCbCoo9bKDyeIw682oLT%2Fqx8K%2FGYSc66KFBpqDCA0zED7otJlnLohcn7WzzSVG7uGUaZgdNP598DpWLMaswBzQ36r2ek5JDiP2s4%2BYnB1JTfAcfWLgTqHZGqktCK5M36h3uhxQrunnFljMJH%2BBsK9rv3sq1ncrGbXQ%3D%3D"},{"description":"F823JS2","id":"-MbjhZrU6M37eTnGHX_B","title":"熱帶花卉壁紙","price":"320","origin_price":"330","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623224304844.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VbK3bwsNU%2BfH0Sg1SwEBX%2Bs%2Bg7u1ngXNRhWqc1vpS%2BZQXJiWNiK3Lb4ScAT1kTJQ%2F8QmmOREsM4i7awJiXr1zKTDmWSV8XNG3BAXJD6SMmpgLdNEwKRybg%2B%2Bh1IMW2Jh4xOC%2FS457yUDz%2BiN0iwlEvWrBvsxAYo0h%2BdVHAwNJF6%2BiV%2BhURZODDaXEp7GihdRBQyjb5d8gndSg1s1IurGD5VqSWQomIbvMcy3liMAq43BWqDUxFgSPeferr1EoNPlj5vpdESFyArQNM9ZAZD0bmB1tH6TcLBrGKVfrMv4ChByfI81898V7MB5tpWK1c1crLlqIZ7C%2FewPLP8J7j0VbQ%3D%3D"},{"description":"H5S305L","id":"-MbjcU2w4ceXstF_fVjw","title":"竹紋壁紙","price":"300","origin_price":"310","imageUrl":"https://storage.googleapis.com/vue-course-api.appspot.com/creativespace/1623222968854.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q22VB%2BFyMdj1z1oG7CyURoSi5XHFrxz0MlrJUi%2Bf3TWB1CBY0Yo44ecZ3Hi%2F9Jkh8Nhrfn7X0MrVSBQNdFItesHYQtnV1Dgy5NvbyGb%2FzLNxsI5V5Q%2BIDrf3v2HDxWzFTpImR4HzGUGOajYnATI5AGafkIZu7i4xv67oJyAlk3tmPHNQg5NrXGQanP15eYfedbq1ztN6qLelkUGKSqodqVINeqxOXdsdtn%2Fw8d6JxXgYpfQ90S%2Bww0EH8CpGmNVMJsAyQovj%2BLxktMTdO%2BJGwPPZoiFK55Op5Xz1lfI%2B8Ddl45bi6lJfL2P5n7lGsytdrtLmowaBS4wX%2BHWB9aU4rQ%3D%3D"}]')},d18e:function(e,t,r){e.exports=r.p+"img/page-title8.27e0a9e0.png"},e01a:function(e,t,r){"use strict";var i=r("23e7"),c=r("83ab"),a=r("da84"),n=r("5135"),o=r("861d"),s=r("9bf2").f,u=r("e893"),p=a.Symbol;if(c&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var f={},l=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof l?new p(e):void 0===e?p():p(e);return""===e&&(f[t]=!0),t};u(l,p);var d=l.prototype=p.prototype;d.constructor=l;var g=d.toString,b="Symbol(test)"==String(p("test")),v=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=g.call(e);if(n(f,e))return"";var r=b?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:l})}},e538:function(e,t,r){var i=r("b622");t.f=i}}]);
//# sourceMappingURL=chunk-1876c3bc.c7a5f27e.js.map