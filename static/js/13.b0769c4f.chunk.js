"use strict";(self.webpackChunktest_task_tweet_cards=self.webpackChunktest_task_tweet_cards||[]).push([[13],{899:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(165),a=r(861),o=r(439),s=r(791),c={card:"TweetCard_card__QzHVm",cardAvatar:"TweetCard_cardAvatar__Xh2gV",cardLine:"TweetCard_cardLine__2U-wa",cardLogo:"TweetCard_cardLogo__kvFXr",cardPicture:"TweetCard_cardPicture__HYV2M",cardTweets:"TweetCard_cardTweets__igk2T",cardFollowers:"TweetCard_cardFollowers__GWwn6",cardButtonFollow:"TweetCard_cardButtonFollow__A5Re8",cardButtonFollowing:"TweetCard_cardButtonFollowing__GBrVY"},l=r(703),i=r(888),u=r(243),d="https://64579cc11a4c152cf98605f9.mockapi.io/phonebook",w=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(d,"/users"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.put("".concat(d,"/users/").concat(t),r);case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),_=r(184);function f(e){var t=e.card,r=JSON.parse(localStorage.getItem("following"))||[],u=(0,s.useState)(r.includes(t.id)?"Following":"Follow"),d=(0,o.Z)(u,2),w=d[0],f=d[1],h=(0,s.useState)(t.followers),g=(0,o.Z)(h,2),v=g[0],m=g[1];function x(e,t){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t,r);case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),b.apply(this,arguments)}return(0,_.jsxs)("div",{className:c.card,children:[(0,_.jsx)("img",{src:t.avatar,alt:t.user,width:"80",height:"80",className:c.cardAvatar}),(0,_.jsx)("div",{className:c.cardLine}),(0,_.jsx)("img",{src:l.Z,alt:"logo GoIT",className:c.cardLogo}),(0,_.jsx)("img",{src:i.Z,alt:"background_image",className:c.cardPicture}),(0,_.jsxs)("p",{className:c.cardTweets,children:[Number(t.tweets).toLocaleString("en")," Tweets"]}),(0,_.jsxs)("p",{className:c.cardFollowers,children:[Number(v).toLocaleString("en")," Followers"]}),(0,_.jsx)("button",{type:"button",onClick:function(){var e=JSON.parse(localStorage.getItem("following"))||[];if("Follow"===w&&(x(t.id,{followers:v+1}),m(v+1),f("Following"),e.push(t.id),window.localStorage.setItem("following",JSON.stringify(e))),"Following"===w){x(t.id,{followers:v-1}),m(v-1),f("Follow");var r=e.filter((function(e){return e!==t.id}));window.localStorage.setItem("following",JSON.stringify(r))}},className:"Follow"===w?c.cardButtonFollow:c.cardButtonFollowing,children:w})]})}var h={tweetsMenu:"Tweets_tweetsMenu__kcdUt",cards:"Tweets_cards__iiP7G",buttonBack:"Tweets_buttonBack__NnuCc",buttonLoadmore:"Tweets_buttonLoadmore__VWzhe",link:"Tweets_link__KqW3h",active:"Tweets_active__fzgdo",buttonSpan:"Tweets_buttonSpan__67YNL",error:"Tweets_error__UCIaG",text:"Tweets_text__h3rsR"},g=r(87),v=r(617),m={dropdown:"Dropdown_dropdown__9z800",buttonDropdown:"Dropdown_buttonDropdown__WO-zS"};function x(e){var t=e.types,r=e.showType,n=e.active;return(0,_.jsx)("div",{className:m.dropdown,children:t.map((function(e){return(0,_.jsx)("button",{className:m.buttonDropdown,type:"button",active:n,onClick:function(){return r(e)},children:e},e)}))})}var b=r(424);function k(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),r=t[0],c=t[1],l=(0,s.useState)(3),i=(0,o.Z)(l,2),u=i[0],d=i[1],p=(0,s.useState)(null),m=(0,o.Z)(p,2),k=m[0],j=m[1],N=(0,s.useState)([]),T=(0,o.Z)(N,2),S=T[0],Z=T[1],F=["All","Follow","Following"],y=(0,s.useState)(F[0]),C=(0,o.Z)(y,2),L=C[0],B=C[1];(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:t=e.sent,c(t),Z(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O=function(){Z(r)},A=function(){var e=JSON.parse(localStorage.getItem("following"))||[];Z(r.filter((function(t){return r=t.id,!e.includes(r);var r})))},I=function(){var e=JSON.parse(localStorage.getItem("following"))||[];Z(r.filter((function(t){return r=t.id,e.includes(r);var r})))};return(0,_.jsxs)("div",{className:h.tweetsWrapper,children:[!k&&(0,_.jsxs)("div",{className:h.tweetsMenu,children:[(0,_.jsx)("button",{className:h.buttonBack,type:"button",children:(0,_.jsxs)(g.OL,{className:function(e){return e.isActive?h.active:h.link},to:"/",children:[(0,_.jsx)(v.jTe,{size:"24"}),(0,_.jsx)("span",{className:h.buttonSpan,children:"Back"})]})}),(0,_.jsx)(x,{types:F,showType:function(e){switch(e){case"All":O(),B(e);break;case"Follow":A(),B(e);break;case"Following":I(),B(e);break;default:O(),B(F[0])}},active:L})]}),(0,_.jsx)("ul",{className:h.cards,children:null===S||void 0===S?void 0:S.slice(0,u).map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(f,{card:e,showAll:O})},e.id)}))}),u<S.length&&S.length>0&&(0,_.jsx)("button",{className:h.buttonLoadmore,type:"button",onClick:function(){d((function(e){return e+3}))},children:"Load more"}),!k&&0===S.length&&(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{className:h.text,children:"There are no following cards."}),(0,_.jsx)(b.Z,{})]}),k&&(0,_.jsxs)("div",{className:h.error,children:[(0,_.jsxs)("p",{children:["Ooops, something went wrong: ",k.message,"."]}),(0,_.jsx)("p",{children:"Please try again."}),(0,_.jsx)(b.Z,{})]})]})}}}]);
//# sourceMappingURL=13.b0769c4f.chunk.js.map