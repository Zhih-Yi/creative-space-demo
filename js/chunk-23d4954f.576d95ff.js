(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d4954f"],{2378:function(e,t,a){e.exports=a.p+"img/page-title11.b55d3ebe.png"},"2c8d":function(e,t,a){"use strict";var c=a("7a23"),r={class:"d-flex progress list-unstyled"};function s(e,t,a,s,i,n){return Object(c["w"])(),Object(c["e"])("ul",r,[Object(c["i"])("li",{class:["progress-item",{active:1===a.step}]},"確認訂單",2),Object(c["i"])("li",{class:["progress-item",{active:2===a.step}]},"填寫資料",2),Object(c["i"])("li",{class:["progress-item",{active:3===a.step}]},"結帳付款",2)])}a("a9e3");var i={name:"CheckoutProgress",props:{step:{type:Number}}};i.render=s;t["a"]=i},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var c=a("1d80"),r=a("5899"),s="["+r+"]",i=RegExp("^"+s+s+"*"),n=RegExp(s+s+"*$"),l=function(e){return function(t){var a=String(c(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(n,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5ec5":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),r={class:"container"},s=Object(c["h"])("結帳-填寫資料"),i={class:"row mh-wrapper"},n={class:"col-12 py-3"},l={class:"row justify-content-center"},o={class:"col-md-8"},u={class:"bg-light p-5"},d={class:"col-md-6 mb-3"},m=Object(c["i"])("label",{for:"userName",class:"form-label"},[Object(c["i"])("span",{class:"text-danger"},"*"),Object(c["h"])("姓名: ")],-1),b={class:"col-md-6 mb-3"},f=Object(c["i"])("label",{for:"email",class:"form-label"},[Object(c["i"])("span",{class:"text-danger"},"*"),Object(c["h"])("email: ")],-1),p={class:"col-md-6 mb-3"},O=Object(c["i"])("label",{for:"tel",class:"form-label"},[Object(c["i"])("span",{class:"text-danger"},"*"),Object(c["h"])("電話: ")],-1),g={class:"col-md-6 mb-3"},j=Object(c["i"])("label",{for:"addr",class:"form-label"},[Object(c["i"])("span",{class:"text-danger"},"*"),Object(c["h"])("地址: ")],-1),h={class:"col-12 mb-3"},v=Object(c["i"])("label",{for:"msg",class:"form-label"},"留言/備註:",-1),x=Object(c["i"])("div",{class:"col-12 text-end"},[Object(c["i"])("button",{type:"submit",class:"btn btn-lg btn-major"},[Object(c["h"])(" 下一步，結帳付款"),Object(c["i"])("i",{class:"fas fa-shipping-fast ms-2"})])],-1);function y(e,t,y,N,I,w){var V=Object(c["D"])("PageTitle"),C=Object(c["D"])("CheckoutProgress"),E=Object(c["D"])("Field"),k=Object(c["D"])("ErrorMessage"),S=Object(c["D"])("Form");return Object(c["w"])(),Object(c["e"])("div",r,[Object(c["i"])(V,{path:a("2378")},{default:Object(c["Q"])((function(){return[s]})),_:1},8,["path"]),Object(c["i"])("div",i,[Object(c["i"])("div",n,[Object(c["i"])("div",l,[Object(c["i"])("div",o,[Object(c["i"])(C,{step:2})])]),Object(c["i"])("div",u,[Object(c["i"])(S,{onSubmit:w.ConfirmSend,class:"row g-4"},{default:Object(c["Q"])((function(e){var a=e.errors;return[Object(c["i"])("div",d,[m,Object(c["i"])(E,{type:"text",name:"姓名",id:"userName",class:["form-control",{"is-invalid":a["姓名"]}],modelValue:I.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return I.user.name=e}),rules:"required",placeholder:"請輸入姓名"},null,8,["modelValue","class"]),Object(c["i"])(k,{name:"姓名",class:"invalid-feedback"})]),Object(c["i"])("div",b,[f,Object(c["i"])(E,{type:"email",name:"email",id:"email",class:["form-control",{"is-invalid":a["email"]}],modelValue:I.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return I.user.email=e}),rules:"email|required",placeholder:"example@gmail.com"},null,8,["modelValue","class"]),Object(c["i"])(k,{name:"email",class:"invalid-feedback"})]),Object(c["i"])("div",p,[O,Object(c["i"])(E,{type:"text",name:"電話",id:"tel",class:["form-control",{"is-invalid":a["電話"]}],modelValue:I.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return I.user.tel=e}),rules:"digits:10|required",placeholder:"0920123456"},null,8,["modelValue","class"]),Object(c["i"])(k,{name:"電話",class:"invalid-feedback"})]),Object(c["i"])("div",g,[j,Object(c["i"])(E,{type:"text",name:"地址",id:"addr",class:["form-control",{"is-invalid":a["地址"]}],modelValue:I.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return I.user.address=e}),rules:"required",placeholder:"新北市新店區安康路二段100號3樓"},null,8,["modelValue","class"]),Object(c["i"])(k,{name:"地址",class:"invalid-feedback"})]),Object(c["i"])("div",h,[v,Object(c["R"])(Object(c["i"])("textarea",{name:"msg",id:"msg",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return I.message=e})},null,512),[[c["M"],I.message]])]),x]})),_:1},8,["onSubmit"])])])])])}a("99af");var N=a("72ca"),I=a("2c8d"),w={name:"CheckoutInfo",components:{PageTitle:N["a"],CheckoutProgress:I["a"]},data:function(){return{user:{email:"",name:"",tel:"",address:""},message:""}},methods:{createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/order"),a={user:e.user,message:e.message,payment_method:e.payment_method};e.emitter.emit("loading",!0),e.$http.post(t,{data:a}).then((function(t){if(t.data.success){e.emitter.emit("getCart"),e.emitter.emit("RefreshCart");var a=t.data.orderId;e.$router.push("/checkoutPay/".concat(a))}else e.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:t.data.message,icon:"fas fa-exclamation-circle"});e.emitter.emit("loading",!1)})).catch((function(t){e.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:t,icon:"fas fa-exclamation-circle"}),e.emitter.emit("loading",!1)}))},ConfirmSend:function(){var e=this;e.$swal({title:"確認送出?",text:"送出後即無法更改聯絡資訊",showCancelButton:!0,confirmButtonText:"確認送出！",cancelButtonText:"取消",icon:"info"}).then((function(t){t.isConfirmed&&e.createOrder()}))}},created:function(){this.emitter.emit("cartVisible",!1)}};w.render=y;t["default"]=w},7156:function(e,t,a){var c=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var s,i;return r&&"function"==typeof(s=t.constructor)&&s!==a&&c(i=s.prototype)&&i!==a.prototype&&r(e,i),e}},"72ca":function(e,t,a){"use strict";var c=a("7a23"),r={class:"page-title-wrapper"},s={class:"page-title-layer py-3 px-2 px-md-5 py-md-4"},i={class:"h2"};function n(e,t,a,n,l,o){return Object(c["w"])(),Object(c["e"])("div",r,[Object(c["i"])("img",{src:a.path,alt:"標題圖片",class:"page-img"},null,8,["src"]),Object(c["i"])("div",s,[Object(c["i"])("h1",i,[Object(c["C"])(e.$slots,"default")])])])}var l={name:"PageTitle",props:["path"]};l.render=n;t["a"]=l},a9e3:function(e,t,a){"use strict";var c=a("83ab"),r=a("da84"),s=a("94ca"),i=a("6eeb"),n=a("5135"),l=a("c6b6"),o=a("7156"),u=a("c04e"),d=a("d039"),m=a("7c73"),b=a("241c").f,f=a("06cf").f,p=a("9bf2").f,O=a("58a8").trim,g="Number",j=r[g],h=j.prototype,v=l(m(h))==g,x=function(e){var t,a,c,r,s,i,n,l,o=u(e,!1);if("string"==typeof o&&o.length>2)if(o=O(o),t=o.charCodeAt(0),43===t||45===t){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+o}for(s=o.slice(2),i=s.length,n=0;n<i;n++)if(l=s.charCodeAt(n),l<48||l>r)return NaN;return parseInt(s,c)}return+o};if(s(g,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var y,N=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof N&&(v?d((function(){h.valueOf.call(a)})):l(a)!=g)?o(new j(x(t)),a,N):x(t)},I=c?b(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;I.length>w;w++)n(j,y=I[w])&&!n(N,y)&&p(N,y,f(j,y));N.prototype=h,h.constructor=N,i(r,g,N)}},b0c0:function(e,t,a){var c=a("83ab"),r=a("9bf2").f,s=Function.prototype,i=s.toString,n=/^\s*function ([^ (]*)/,l="name";c&&!(l in s)&&r(s,l,{configurable:!0,get:function(){try{return i.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-23d4954f.576d95ff.js.map