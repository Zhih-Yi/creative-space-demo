(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48754d0c"],{2909:function(e,t,a){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,c=new Array(t);a<t;a++)c[a]=e[a];return c}function i(e){if(Array.isArray(e))return c(e)}a.d(t,"a",(function(){return o}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}a("fb6a"),a("b0c0");function l(e,t){if(e){if("string"===typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return i(e)||n(e)||l(e)||r()}},cdea:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),i={class:"container"},n={class:"row"},l=Object(c["i"])("div",{class:"col-12 py-5 text-center"},[Object(c["i"])("h1",null,"文章管理")],-1),r={class:"col-12 text-end py-3"},o={class:"col-12"},s={class:"table-responsive"},u={key:0,class:"table",id:"table-product"},d=Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th",null,"名稱"),Object(c["i"])("th",null,"創立時間"),Object(c["i"])("th",null,"公開/私人"),Object(c["i"])("th",null,"編輯")])],-1),b={class:"col-12"};function m(e,t,a,m,p,f){var h=Object(c["D"])("BackPagination"),g=Object(c["D"])("MainModal"),j=Object(c["D"])("DeleteModal");return Object(c["w"])(),Object(c["e"])("div",i,[Object(c["i"])("div",n,[l,Object(c["i"])("div",r,[Object(c["i"])("button",{type:"button",class:"btn btn-primary btn-hv-style",onClick:t[1]||(t[1]=function(e){return f.openModal(!0)})}," 新增文章 ")]),Object(c["i"])("div",o,[Object(c["i"])("div",s,[p.articleAll.length>0?(Object(c["w"])(),Object(c["e"])("table",u,[d,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(p.articleAll,(function(t){return Object(c["w"])(),Object(c["e"])("tr",{key:t.id},[Object(c["i"])("td",null,Object(c["H"])(t.title),1),Object(c["i"])("td",null,Object(c["H"])(e.$filters.date(t.create_at)),1),Object(c["i"])("td",null,Object(c["H"])(t.isPublic?"公開":"私人"),1),Object(c["i"])("td",null,[Object(c["i"])("button",{type:"button",class:"btn btn-outline-primary me-2",onClick:function(e){return f.openModal(!1,t)}},"修改",8,["onClick"]),Object(c["i"])("button",{type:"button",class:"btn btn-outline-dark",onClick:function(e){return f.openDeleteModal(t)}},"刪除",8,["onClick"])])])})),128))])])):Object(c["f"])("",!0)])]),Object(c["i"])("div",b,[Object(c["i"])(h,{pageItem:p.pageItem,onUpdatePage:f.getArticle},null,8,["pageItem","onUpdatePage"])])]),Object(c["i"])(g,{ref:"modalMain",currentItem:p.currentArticle,onUpdateArticle:f.updateArticle},{title:Object(c["Q"])((function(){return[Object(c["h"])(Object(c["H"])(p.modalTitle),1)]})),_:1},8,["currentItem","onUpdateArticle"]),Object(c["i"])(j,{ref:"modalDelete",currentItem:p.currentArticle,onDeleteItem:f.deleteArticle},{title:Object(c["Q"])((function(){return[Object(c["h"])(Object(c["H"])(p.modalTitle),1)]})),_:1},8,["currentItem","onDeleteItem"])])}var p=a("5530"),f=a("2909"),h=(a("99af"),a("a15b"),a("a4d3"),a("e01a"),{class:"modal fade",ref:"modal",id:"articleModal",tabindex:"-1","aria-labelledby":"articleModalLabel","aria-hidden":"true"}),g={class:"modal-dialog modal-xl"},j={class:"modal-content"},O={class:"modal-header bg-primary text-white"},v={class:"modal-title",id:"articleModalLabel"},y=Object(c["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),A={class:"modal-body"},w={class:"row"},M={class:"col-12"},k={class:"mb-3"},x=Object(c["i"])("label",{for:"title",class:"form-label"},"*標題",-1),I={class:"mb-3"},P=Object(c["i"])("label",{for:"description",class:"form-label"},"*描述",-1),$={class:"mb-3"},S=Object(c["i"])("label",{for:"tag",class:"form-label"},"*分類標籤",-1),C=Object(c["g"])('<option value="" disabled>請選擇</option><option value="客廳">客廳</option><option value="廚房">廚房</option><option value="飯廳">飯廳</option><option value="臥房">臥房</option><option value="浴室">浴室</option><option value="工作室">工作室</option><option value="陽台">陽台</option>',8),D={class:"mb-3"},U=Object(c["i"])("label",{for:"code",class:"form-label"},"*圖片",-1),_={class:"mb-3"},T=Object(c["i"])("label",{for:"author",class:"form-label"},"*作者",-1),H={class:"mb-3"},N=Object(c["i"])("label",{for:"content",class:"form-label"},"*內容",-1),R={class:"mb-3"},V={class:"form-check"},B=Object(c["i"])("label",{class:"form-check-label",for:"isPublic"}," *是否公開 ",-1),L={class:"modal-footer"},J=Object(c["i"])("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"},"取消",-1);function Q(e,t,a,i,n,l){return Object(c["w"])(),Object(c["e"])("div",h,[Object(c["i"])("div",g,[Object(c["i"])("div",j,[Object(c["i"])("div",O,[Object(c["i"])("h5",v,[Object(c["C"])(e.$slots,"title")]),y]),Object(c["i"])("div",A,[Object(c["i"])("div",w,[Object(c["i"])("div",M,[Object(c["i"])("div",k,[x,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.currentArticle.title=e}),placeholder:"請輸入標題"},null,512),[[c["M"],n.currentArticle.title]])]),Object(c["i"])("div",I,[P,Object(c["R"])(Object(c["i"])("textarea",{class:"form-control",id:"description","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.currentArticle.description=e}),placeholder:"請輸入描述"},null,512),[[c["M"],n.currentArticle.description]])]),Object(c["i"])("div",$,[S,Object(c["R"])(Object(c["i"])("select",{name:"tag",id:"tag",multiple:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.currentArticle.tag=e}),class:"form-select"},[C],512),[[c["L"],n.currentArticle.tag]])]),Object(c["i"])("div",D,[U,Object(c["i"])("input",{type:"file",class:"form-control",id:"code",ref:"imageUpload",onChange:t[4]||(t[4]=function(){return l.updateImage&&l.updateImage.apply(l,arguments)})},null,544),Object(c["i"])("img",{src:n.currentArticle.image,alt:n.currentArticle.title,class:"img-fluid w-50"},null,8,["src","alt"])]),Object(c["i"])("div",_,[T,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.currentArticle.author=e}),placeholder:"請輸入作者"},null,512),[[c["M"],n.currentArticle.author]])]),Object(c["i"])("div",H,[N,Object(c["R"])(Object(c["i"])("textarea",{class:"form-control",id:"content","onUpdate:modelValue":t[6]||(t[6]=function(e){return n.currentArticle.content=e}),placeholder:"請輸入內容"},null,512),[[c["M"],n.currentArticle.content]])]),Object(c["i"])("div",R,[Object(c["i"])("div",V,[Object(c["R"])(Object(c["i"])("input",{class:"form-check-input",type:"checkbox",id:"isPublic","onUpdate:modelValue":t[7]||(t[7]=function(e){return n.currentArticle.isPublic=e})},null,512),[[c["K"],n.currentArticle.isPublic]]),B])])])])]),Object(c["i"])("div",L,[J,Object(c["i"])("button",{type:"button",class:"btn btn-primary btn-hv-style",onClick:t[8]||(t[8]=function(e){return l.updateArticle(n.currentArticle)})},"儲存")])])])],512)}var E=a("5191"),F={name:"articleMainModal",props:{currentItem:{type:Object}},mixins:[E["a"]],data:function(){return{currentArticle:{}}},watch:{currentItem:function(){this.currentArticle=this.currentItem}},methods:{updateArticle:function(e){this.$emit("updateArticle",this.currentArticle)},updateImage:function(){var e=this,t=new FormData,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/upload"),c=this.$refs.imageUpload.files[0];t.append("file-to-upload",c),e.$http.post(a,t).then((function(t){t.data.success?e.currentArticle.image=t.data.imageUrl:e.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:t.data.message,icon:"fas fa-exclamation-circle"})})).catch((function(t){e.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:t,icon:"fas fa-exclamation-circle"})}))}}};F.render=Q;var K=F,q=a("d58b"),z=a("feb1"),G={name:"ArticleManage",components:{MainModal:K,DeleteModal:q["a"],BackPagination:z["a"]},data:function(){return{articleAll:[],modalTitle:"",isNew:!0,currentArticle:{},pageItem:{}}},methods:{getArticle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/articles?page=").concat(e);t.emitter.emit("loading",!0),t.$http.get(a).then((function(e){e.data.success?(t.articleAll=Object(f["a"])(e.data.articles),t.pageItem=Object(p["a"])({},e.data.pagination)):t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e.data.message,icon:"fas fa-exclamation-circle"}),t.emitter.emit("loading",!1)})).catch((function(e){t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e,icon:"fas fa-exclamation-circle"}),t.emitter.emit("loading",!1)}))},openModal:function(e,t){var a=this;if(e)a.modalTitle="新增文章",a.currentArticle={isPublic:!1},a.isNew=e,a.$refs.modalMain.showModal();else{var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/article/").concat(t.id);a.modalTitle="修改文章",a.$http.get(c).then((function(t){t.data.success?(a.currentArticle=Object(p["a"])({},t.data.article),a.isNew=e,a.$refs.modalMain.showModal()):a.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:t.data.message,icon:"fas fa-exclamation-circle"})})).catch((function(e){a.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e,icon:"fas fa-exclamation-circle"}),a.emitter.emit("loading",!1)}))}},openDeleteModal:function(e){this.currentArticle=Object(p["a"])({},e),this.modalTitle="刪除文章",this.$refs.modalDelete.showModal()},updateArticle:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/article"),c="post",i=Object(p["a"])(Object(p["a"])({},e),{},{create_at:Math.floor(new Date/1e3)});this.isNew||(a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/article/").concat(e.id),c="put"),t.emitter.emit("loading",!0),t.$refs.modalMain.hideModal(),t.$http[c](a,{data:i}).then((function(e){e.data.success?(t.emitter.emit("push-message",{style:"success",title:"訊息通知",content:"文章更新成功",icon:"fas fa-check-circle"}),t.getArticle(t.pageItem.currentPage)):t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e.data.message.join("、"),icon:"fas fa-exclamation-circle"}),t.emitter.emit("loading",!1)})).catch((function(e){t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e,icon:"fas fa-exclamation-circle"}),t.emitter.emit("loading",!1)}))},deleteArticle:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("creativespace","/admin/article/").concat(e);t.$http.delete(a).then((function(e){e.data.success?(t.$refs.modalDelete.hideModal(),t.emitter.emit("push-message",{style:"success",title:"訊息通知",content:"文章刪除成功",icon:"fas fa-check-circle"}),t.getArticle(t.pageItem.currentPage)):t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e.data.message,icon:"fas fa-exclamation-circle"})})).catch((function(e){t.emitter.emit("push-message",{style:"danger",title:"錯誤通知",content:e,icon:"fas fa-exclamation-circle"}),t.emitter.emit("loading",!1)}))}},created:function(){this.getArticle()}};G.render=m;t["default"]=G},d28b:function(e,t,a){var c=a("746f");c("iterator")},e01a:function(e,t,a){"use strict";var c=a("23e7"),i=a("83ab"),n=a("da84"),l=a("5135"),r=a("861d"),o=a("9bf2").f,s=a("e893"),u=n.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};s(b,u);var m=b.prototype=u.prototype;m.constructor=b;var p=m.toString,f="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;o(m,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=p.call(e);if(l(d,e))return"";var a=f?t.slice(7,-1):t.replace(h,"$1");return""===a?void 0:a}}),c({global:!0,forced:!0},{Symbol:b})}},fb6a:function(e,t,a){"use strict";var c=a("23e7"),i=a("861d"),n=a("e8b5"),l=a("23cb"),r=a("50c4"),o=a("fc6a"),s=a("8418"),u=a("b622"),d=a("1dde"),b=d("slice"),m=u("species"),p=[].slice,f=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var a,c,u,d=o(this),b=r(d.length),h=l(e,b),g=l(void 0===t?b:t,b);if(n(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return p.call(d,h,g);for(c=new(void 0===a?Array:a)(f(g-h,0)),u=0;h<g;h++,u++)h in d&&s(c,u,d[h]);return c.length=u,c}})},feb1:function(e,t,a){"use strict";a("a9e3");var c=a("7a23"),i={"aria-label":"Page navigation"},n={class:"pagination justify-content-center"};function l(e,t,a,l,r,o){return Object(c["w"])(),Object(c["e"])("nav",i,[Object(c["i"])("ul",n,[Object(c["i"])("li",{class:["page-item",{disabled:!a.pageItem.has_pre}]},[Object(c["i"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=Object(c["S"])((function(e){return o.updatePage(Number(a.pageItem.current_page)-1)}),["prevent"]))},"«")],2),(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(a.pageItem.total_pages,(function(e){return Object(c["w"])(),Object(c["e"])("li",{class:["page-item",{active:a.pageItem.current_page===e}],key:e},[Object(c["i"])("a",{class:"page-link",href:"#",onClick:Object(c["S"])((function(t){return o.updatePage(e)}),["prevent"])},Object(c["H"])(e),9,["onClick"])],2)})),128)),Object(c["i"])("li",{class:["page-item",{disabled:!a.pageItem.has_next}]},[Object(c["i"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(c["S"])((function(e){return o.updatePage(Number(a.pageItem.current_page)+1)}),["prevent"]))},"»")],2)])])}var r={name:"BackPagination",props:["pageItem"],methods:{updatePage:function(e){this.$emit("updatePage",e)}}};r.render=l;t["a"]=r}}]);
//# sourceMappingURL=chunk-48754d0c.887e3607.js.map