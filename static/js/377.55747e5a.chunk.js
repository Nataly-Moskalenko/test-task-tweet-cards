"use strict";(self.webpackChunktest_task_tweet_cards=self.webpackChunktest_task_tweet_cards||[]).push([[377],{377:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var r=a(165),n=a(861),c=a(439),o=a(791),s={card:"TweetCard_card__QzHVm",cardAvatar:"TweetCard_cardAvatar__Xh2gV",cardLine:"TweetCard_cardLine__2U-wa",cardLogo:"TweetCard_cardLogo__kvFXr",cardPicture:"TweetCard_cardPicture__HYV2M",cardTweets:"TweetCard_cardTweets__igk2T",cardFollowers:"TweetCard_cardFollowers__GWwn6",cardButtonFollow:"TweetCard_cardButtonFollow__A5Re8",cardButtonFollowing:"TweetCard_cardButtonFollowing__GBrVY"},l=a(703),u=a(888),i=a(184);function d(t){var e=t.card,a=(0,o.useState)(e.followers),r=(0,c.Z)(a,2),n=r[0],d=r[1],w=(0,o.useState)("Follow"),_=(0,c.Z)(w,2),p=_[0],h=_[1];return(0,i.jsxs)("div",{className:s.card,children:[(0,i.jsx)("img",{src:e.avatar,alt:e.user,width:"80",height:"80",className:s.cardAvatar}),(0,i.jsx)("div",{className:s.cardLine}),(0,i.jsx)("img",{src:l.Z,alt:"logo GoIT",className:s.cardLogo}),(0,i.jsx)("img",{src:u.Z,alt:"backgroung_image",className:s.cardPicture}),(0,i.jsxs)("p",{className:s.cardTweets,children:[Number(e.tweets).toLocaleString("en")," Tweets"]}),(0,i.jsxs)("p",{className:s.cardFollowers,children:[Number(n).toLocaleString("en")," Followers"]}),(0,i.jsx)("button",{type:"button",onClick:function(){"Follow"===p&&(d(n+1),h("Following")),"Following"===p&&(d(n-1),h("Follow"))},className:"Follow"===p?s.cardButtonFollow:s.cardButtonFollowing,children:p})]})}var w=a(243),_="https://64579cc11a4c152cf98605f9.mockapi.io/phonebook";function p(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.Z.get("".concat(_,"/users"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m={cards:"Tweets_cards__iiP7G",buttonBack:"Tweets_buttonBack__NnuCc",buttonLink:"Tweets_buttonLink__Z7A9L",buttonLoadmore:"Tweets_buttonLoadmore__VWzhe"},f=a(87);function b(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),a=e[0],s=e[1],l=(0,o.useState)(3),u=(0,c.Z)(l,2),w=u[0],_=u[1];return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:e=t.sent,s(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,i.jsxs)("div",{className:m.tweetsWrapper,children:[(0,i.jsx)("button",{className:m.buttonBack,type:"button",children:(0,i.jsx)(f.OL,{className:m.buttonLink,to:"/",children:"Back"})}),(0,i.jsx)("ul",{className:m.cards,children:null===a||void 0===a?void 0:a.slice(0,w).map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(d,{card:t})},t.id)}))}),w<a.length&&(0,i.jsx)("button",{className:m.buttonLoadmore,type:"button",onClick:function(){_((function(t){return t+3}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=377.55747e5a.chunk.js.map