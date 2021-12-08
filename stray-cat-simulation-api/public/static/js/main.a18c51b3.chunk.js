(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(t,e,c){},64:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(9),i=c.n(a),o=(c(63),c(14)),s=c(17),r=c(20),d=c(19),l=(c(64),c(25)),h=c(79),f=c(58),p=c(78),u=c(81),j=c(57),O=c(1),b=function(t){var e="images/".concat(t.cat.image),c=t.cat;return Object(O.jsxs)("div",{className:"cat-card",children:[Object(O.jsx)(h.a,{trigger:["hover","focus"],placement:"right",overlay:Object(O.jsx)(f.a,{children:Object(O.jsxs)(f.a.Body,{children:["Equipment: ",Object(O.jsx)("ul",{children:t.accessories.map((function(t){return Object(O.jsx)("li",{children:t.name},"".concat(t.id))}))})]})}),children:Object(O.jsx)("img",{src:e,alt:t.cat.image})},c.id),Object(O.jsxs)("div",{className:"cat-name",children:[c.name," ",Object(O.jsx)(p.a,{variant:"dark",size:"sm",onClick:function(){t.handleActionClick(c.id,"rename")},children:Object(O.jsx)(j.a,{})})]}),Object(O.jsxs)("div",{className:"cat-health",children:["Health: ",t.cat.hp,"/10",Object(O.jsx)(u.a,{min:"0",max:"10",now:c.hp})]}),Object(O.jsxs)("div",{className:"cat-food",children:["Food: ",t.cat.food,"/10",Object(O.jsx)(u.a,{min:"0",max:"10",now:c.food})]}),Object(O.jsxs)("div",{className:"cat-affection",children:["Affection: ",t.cat.affection,"/10",Object(O.jsx)(u.a,{min:"0",max:"10",now:c.affection})]}),Object(O.jsx)(p.a,{className:"btn-heal",onClick:function(){t.handleActionClick(c.id,"heal")},children:"Heal"}),Object(O.jsx)(p.a,{className:"btn-feed",onClick:function(){t.handleActionClick(c.id,"feed")},children:"Feed"}),Object(O.jsx)(p.a,{className:"btn-pet",onClick:function(){t.handleActionClick(c.id,"pet")},children:"Pet"})]})},A=function(t){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("h1",{children:["Actions: ",t.actions," "]}),Object(O.jsx)(p.a,{variant:"outline-light",size:"lg",onClick:function(){t.handleActionClick(null,"gift")},children:"Gift"}),Object(O.jsx)(p.a,{variant:"outline-light",size:"lg",onClick:function(e){t.nextDayHandler()},children:"Next Day"})]})},C=c(29),x=c(80),y=function(t){Object(r.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).renderBody=function(){var e=t.props.accessory;if(e)return Object(O.jsxs)("ul",{children:[0!==e.hp?Object(O.jsxs)("li",{children:["HP: ",e.hp]}):null,0!==e.affection?Object(O.jsxs)("li",{children:["Affection: ",e.affection]}):null,0!==e.food?Object(O.jsxs)("li",{children:["Food: ",e.food]}):null,0!==e.toughness?Object(O.jsxs)("li",{children:["Toughness: ",e.toughness]}):null]})},t.renderCatButtons=function(){if(t.props.accessory)return t.props.cats.map((function(e){return Object(O.jsx)(C.a,{variant:"primary",onClick:function(){t.props.hideModal(),t.props.giftAccessory(t.props.accessory.id,e.id)},children:e.name},e.id)}))},t}return Object(s.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(x.a,{size:"lg",show:this.props.showModal,onHide:this.props.hideModal(),children:[Object(O.jsx)(x.a.Header,{closeButton:!0,children:Object(O.jsx)(x.a.Title,{children:this.props.accessory?"Found ".concat(this.props.accessory.name,"!"):"No Accessory Found"})}),Object(O.jsx)(x.a.Body,{children:this.renderBody()}),Object(O.jsxs)(x.a.Footer,{children:[Object(O.jsx)(C.a,{variant:"secondary",onClick:this.props.hideModal(),children:"Close"}),this.renderCatButtons()]})]})}}]),c}(n.Component),m=Object(l.b)(null,(function(t){return{useAction:function(){t({type:"USE_ACTION"})}}}))(y),g=c(54),T=c.n(g).a,N=function(t){Object(r.a)(c,t);var e=Object(d.a)(c);function c(){var t;return Object(o.a)(this,c),(t=e.call(this)).renderCatCards=function(){return t.props.cats.map((function(e){var c=t.props.accessories.filter((function(t){return t.cat_id===e.id}));return Object(O.jsx)(b,{cat:e,handleActionClick:t.handleActionClick,accessories:c},T())}))},t.freeAccessories=function(){return t.props.accessories.filter((function(t){return null===t.cat_id}))},t.hideModal=function(){t.setState({showActionModal:!1,showGiftModal:!1}),t.props.actions>0&&t.props.useAction()},t.handleActionClick=function(e,c){if(t.props.actions>0){switch(c){case"feed":t.props.feedCat(e);break;case"heal":t.props.healCat(e);break;case"pet":t.props.petCat(e);break;case"rename":var n=prompt("Name Your Friend:","");t.props.renameCat(e,n);break;case"gift":t.setState({showActionModal:!1,showGiftModal:!0})}t.props.useAction()}else t.setState({showActionModal:!0})},t.nextDayHandler=function(){t.props.proceedToNextDay(t.props.cats,t.props.actions,t.props.accessories)},t.handleGiftAcc=function(e,c){t.props.giftAccessory(e,c),t.hideModal()},t.state={showActionModal:!1,showGiftModal:!1},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchTodaysCats(),this.props.fetchActionsAvailable(),this.props.fetchAccessories()}},{key:"render",value:function(){var t=this;return this.props.cats.length>0&&!1===this.props.loading?Object(O.jsxs)("div",{className:"cats-container",children:[this.renderCatCards(),Object(O.jsx)(x.a,{size:"sm",show:this.state.showActionModal,onHide:function(){return t.hideModal()},"aria-labelledby":"example-modal-sizes-title-sm",children:Object(O.jsx)(x.a.Header,{closeButton:!0,children:Object(O.jsx)(x.a.Title,{id:"example-modal-sizes-title-sm",children:"No Actions Left for Today"})})}),Object(O.jsx)(m,{showModal:this.state.showGiftModal,hideModal:function(){return t.hideModal},cats:this.props.cats,accessory:this.props.accessories[Math.floor(3*Math.random())],giftAccessory:this.handleGiftAcc}),Object(O.jsx)(A,{nextDayHandler:this.nextDayHandler,actions:this.props.actions,handleActionClick:this.handleActionClick})]}):Object(O.jsxs)("div",{className:"cats-container",children:["NO CATS",Object(O.jsx)(A,{nextDayHandler:this.nextDayHandler,actions:this.props.actions,handleActionClick:this.handleActionClick})]})}}]),c}(n.Component),S=Object(l.b)((function(t){return{cats:t.cats.cats,loading:t.cats.loading,actions:t.user.actions,accessories:t.accessories.accessories}}),(function(t){return{fetchTodaysCats:function(){t((function(t){t({type:"LOADING_CATS"}),fetch("/api/cats",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){var c=e.filter((function(t){return t.affection>=Math.floor(11*Math.random())}));t({type:"LOAD_CATS_SUCCESS",cats:c})}))}))},feedCat:function(e){t({type:"FEED_CAT",catId:e})},healCat:function(e){t({type:"HEAL_CAT",catId:e})},petCat:function(e){t({type:"PET_CAT",catId:e})},renameCat:function(e,c){t({type:"RENAME_CAT",catId:e,name:c})},proceedToNextDay:function(e,c,n){t(function(t,e,c){return function(n){n({type:"LOADING_NEXT_DAY"}),t.forEach((function(t){var e={id:t.id,name:t.name,hp:t.hp,food:t.food,affection:t.affection},c={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};fetch("/api/cats/".concat(t.id),c)}));var a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({actions:e})},i={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({actions:e})};fetch("/api/cats/overnight-adventures",a),fetch("/api/user",i).then((function(){n({type:"WAIT_TO_CONTINUE"})})),c.forEach((function(t){var e={id:t.id,cat_id:t.cat_id},c={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};fetch("/api/accessories/".concat(t.id),c)}))}}(e,c,n))},useAction:function(){t({type:"USE_ACTION"})},fetchActionsAvailable:function(){t((function(t){t({type:"GETTING_ACTIONS"}),fetch("/api/user",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e),t({type:"GET_ACTIONS_SUCCESS",actions:e.actions})}))}))},fetchAccessories:function(){t((function(t){t({type:"LOADING_ACCESSORIES"}),fetch("/api/accessories",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t({type:"LOAD_ACCESSORIES_SUCCESS",accessories:e})}))}))},giftAccessory:function(e,c){t({type:"GIFT_ACCESSORY",accId:e,catId:c})}}}))(N),v=function(t){Object(r.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).clickHandler=function(){t.props.completeNextDayTransition()},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this;return this.props.loadingNextDay?Object(O.jsxs)("div",{id:"next-day",className:"fade-in",children:[Object(O.jsx)("span",{children:"On to the Next Day..."}),Object(O.jsx)(C.a,{id:"next-day-btn",onClick:function(){t.clickHandler()},children:"Continue"}),Object(O.jsx)("img",{id:"background",src:"/images/bgdark.png",alt:"on to the next day"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{id:"background",src:"/images/background.png",alt:"Suburban Porch"}),Object(O.jsx)(S,{})]})}}]),c}(n.Component),E=Object(l.b)((function(t){return{loadingNextDay:t.user.loadingNextDay}}),(function(t){return{completeNextDayTransition:function(){t({type:"LOADED_NEXT_DAY"})}}}))(v),_=c(37),I=c(56),D=c(3),k=c(55),M=c(11),w=c(2);function G(t){return t.food+=5,t.affection+=1,t.hp+=1,t.hp>10&&(t.hp=10),t.food>10&&(t.food=10),t.affection>10&&(t.affection=10),t}function H(t){return t.hp+=5,t.food+=1,t.affection+=1,t.hp>10&&(t.hp=10),t.food>10&&(t.food=10),t.affection>10&&(t.affection=10),t}function L(t){return t.affection+=3,t.hp+=1,t.hp>10&&(t.hp=10),t.food>10&&(t.food=10),t.affection>10&&(t.affection=10),t}function F(t,e){return t.name=e,t}var U=Object(_.b)({cats:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cats:[],loading:!1},c=arguments.length>1?arguments[1]:void 0;switch(console.log(c),c.type){case"LOADING_CATS":return Object(w.a)(Object(w.a)({},e),{},{cats:e.cats,loading:!0});case"LOAD_CATS_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{cats:c.cats,loading:!1});case"FEED_CAT":return t=e.cats.findIndex((function(t){return t.id===c.catId})),e.cats[t]=G(e.cats[t]),Object(w.a)(Object(w.a)({},e),{},{cats:Object(M.a)(e.cats),loading:!1});case"HEAL_CAT":return t=e.cats.findIndex((function(t){return t.id===c.catId})),e.cats[t]=H(e.cats[t]),Object(w.a)(Object(w.a)({},e),{},{cats:Object(M.a)(e.cats),loading:!1});case"PET_CAT":return t=e.cats.findIndex((function(t){return t.id===c.catId})),e.cats[t]=L(e.cats[t]),Object(w.a)(Object(w.a)({},e),{},{cats:Object(M.a)(e.cats),loading:!1});case"RENAME_CAT":return t=e.cats.findIndex((function(t){return t.id===c.catId})),e.cats[t]=F(e.cats[t],c.name),Object(w.a)(Object(w.a)({},e),{},{cats:Object(M.a)(e.cats),loading:!1});default:return e}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{actions:5,loadingNextDay:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USE_ACTION":return Object(w.a)(Object(w.a)({},t),{},{actions:t.actions-1});case"GETTING_ACTIONS":return Object(w.a)({},t);case"GET_ACTIONS_SUCCESS":return Object(w.a)(Object(w.a)({},t),{},{actions:e.actions});case"LOADING_NEXT_DAY":case"WAIT_TO_CONTINUE":return Object(w.a)(Object(w.a)({},t),{},{loadingNextDay:!0});case"LOADED_NEXT_DAY":return Object(w.a)(Object(w.a)({},t),{},{loadingNextDay:!1});default:return t}},accessories:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{accessories:[]},e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"LOADING_ACCESSORIES":return Object(w.a)({},t);case"LOAD_ACCESSORIES_SUCCESS":return Object(w.a)(Object(w.a)({},t),{},{accessories:e.accessories});case"GIFT_ACCESSORY":var c=t.accessories.findIndex((function(t){return t.id===e.accId}));return t.accessories[c].cat_id=e.catId,console.log(t.accessories[c]),Object(w.a)(Object(w.a)({},t),{},{accessories:Object(M.a)(t.accessories)});default:return t}}}),B=Object(_.c)(U,Object(_.a)(k.a));i.a.render(Object(O.jsx)(l.a,{store:B,children:Object(O.jsx)(I.a,{children:Object(O.jsx)(D.c,{children:Object(O.jsx)(D.a,{path:"/",element:Object(O.jsx)(E,{})})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a18c51b3.chunk.js.map