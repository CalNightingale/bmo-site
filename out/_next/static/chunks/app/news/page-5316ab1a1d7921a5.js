(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{5443:function(){},4129:function(){},345:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},b:function(){return r}});var i=n(9268),o=n(7671);function a(e){return(0,i.jsx)(s,{size:{"@initial":"mobile","@md":"desktop"},verticalPadding:!0,...e})}function r(e){let{verticalPadding:t="0",verticalPaddingMobile:n=t,...o}=e;return(0,i.jsx)(s,{size:{"@initial":"mobile","@md":"desktop"},verticalPadding:!1,css:{paddingTop:t,paddingBottom:t,"@md":{paddingTop:n,paddingBottom:n}},...o})}let s=(0,o.zo)("div",{maxWidth:"".concat(1200,"px"),margin:"auto",variants:{size:{mobile:{padding:"16px"},desktop:{padding:"48px"}},verticalPadding:{true:{},false:{paddingTop:0,paddingBottom:0}}}})},6811:function(e,t,n){"use strict";n.d(t,{Dv:function(){return s},uG:function(){return l},z:function(){return d}});var i=n(9268),o=n(7671),a=n(2393),r=n(7911);function s(e){let{content:t,element:n}=e,o=[...t].sort((e,t)=>t[0]-e[0]).map(e=>{let[t,i]=e;return n(t,i)});return(0,i.jsx)(a.sg,{gap:"64px",align:"stretch",children:o})}function l(e){let{year:t,contentName:n,content:o,element:r}=e,s=o.map(e=>r(e));return(0,i.jsxs)(a.sg,{gap:"32px",gapMobile:"16px",align:"stretch",children:[(0,i.jsx)(a.X2,{justify:"space-between",children:(0,i.jsx)(d,{first:"".concat(t),second:n})}),(0,i.jsx)(c,{columns:{"@initial":"1","@md":"2","@lg":"3"},children:s})]})}let c=(0,o.zo)("div",{display:"grid",columnGap:"16px",rowGap:"16px",variants:{columns:{1:{gridTemplateColumns:"1fr"},2:{gridTemplateColumns:"1fr 1fr"},3:{gridTemplateColumns:"1fr 1fr 1fr"}}}});function d(e){let{first:t,second:n}=e;return(0,i.jsxs)(a.X2,{gap:"12px",gapMobile:"8px",children:[(0,i.jsx)(r.Z,{style:"h2",children:"".concat(t)}),(0,i.jsx)(r.Z,{style:"h2",color:"secondary",children:"".concat(n)})]})}},2393:function(e,t,n){"use strict";n.d(t,{X2:function(){return a},sg:function(){return r}});var i=n(9268),o=n(7671);function a(e){return(0,i.jsx)(s,{direction:"row",...e})}function r(e){return(0,i.jsx)(s,{direction:"column",...e})}function s(e){let{direction:t,justify:n="start",align:o="start",gap:a="0",gapMobile:r=a,padding:s="0",paddingMobile:c=s,...d}=e;return(0,i.jsx)(l,{css:{flexDirection:t,justifyContent:null!=n?n:"start",alignItems:null!=o?o:"start",gap:r,padding:c,"@md":{gap:a,padding:s}},...d})}let l=(0,o.zo)("div",{display:"flex"})},7911:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(9268),o=n(7671);function a(e){let{style:t,children:n,maxLines:a,css:r,color:s}=e,l="h"==t[0]?t:"p",c="h"==t[0]||"caption"==t?t:"body";return(0,i.jsx)(o.k$,{as:l,css:{fontSize:"$".concat(c,"Mobile"),"@md":{fontSize:"$".concat(c,"Desktop")},lineClamp:"".concat(null!=a?a:"none"),"-webkit-line-clamp":"".concat(null!=a?a:"none"),textOverflow:"".concat(void 0!=a?"ellipsis":"inherit"),overflow:"".concat(void 0!=a?"hidden":"inherit"),display:"-webkit-box","-webkit-box-orient":"vertical",...r},style:t,color:s,children:n})}},7671:function(e,t,n){"use strict";n.d(t,{AV:function(){return l},MC:function(){return h},W0:function(){return s},k$:function(){return u},wv:function(){return m},zo:function(){return c},zx:function(){return p}});var i=n(5952),o=n(5778),a=n(5846),r=n.n(a);let s=(0,o.zY)({"*":{margin:0,padding:0},"button, input":{fontFamily:"inherit"}}),l=[620,1024],{styled:c,css:d}=(0,o.Th)({media:{md:"(min-width: ".concat(l[0],"px)"),lg:"(min-width: ".concat(l[1],"px)")},theme:{colors:{...i.MA,...i.U2,...i.Q6},fontSizes:{h1Desktop:"108px",h1Mobile:"48px",h2Desktop:"48px",h2Mobile:"32px",h3Desktop:"36px",h3Mobile:"24px",h6Desktop:"32px",h6Mobile:"20px",bodyDesktop:"18px",bodyMobile:"16px",caption:"12px"}}}),u=c("p",{variants:{style:{h1:{fontWeight:"800",lineHeight:"80%",letterSpacing:"-0.02em"},h2:{fontWeight:"700"},h3:{fontWeight:"700"},h6:{fontWeight:"400",lineHeight:"1"},subtitle:{fontWeight:"600"},body:{},paragraph:{lineHeight:"150%",whiteSpace:"pre-line"},caption:{}},color:{primary:{color:"$gray12"},secondary:{color:"$gray11"},tertiary:{color:"$gray10"},accent:{color:"$red11"}}}}),p=c("button",{border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",variants:{size:{mobile:{height:"44px",padding:"8px",borderRadius:"16px",fontSize:"100%",gap:"8px"},desktop:{height:"56px",padding:"8px",borderRadius:"16px",fontSize:"100%",gap:"8px"}},color:{neutral:{backgroundColor:"$gray3","&:hover":{backgroundColor:"$gray4"},"&:focus":{backgroundColor:"$gray5"},color:"$gray11"},primary:{backgroundColor:"$red3","&:hover":{backgroundColor:"$red4"},"&:focus":{backgroundColor:"$red5"},color:"$red11"}}},defaultVariants:{color:"neutral"}}),g={"&:link":{textDecoration:"none"},"&:visited":{textDecoration:"none"},"&:hover":{textDecoration:"none"},"&:active":{textDecoration:"none"}},h=c("a",{...g}),m=c(r(),{...g})},5295:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(9268),o=n(345),a=n(6811),r=n(5598),s=n.n(r),l=n(7671),c=n(2393),d=n(7911);function u(e){let{article:t,style:n}=e;return(0,i.jsxs)(p,{gap:"16px",align:"stretch",style:n,children:[(0,i.jsx)(s(),{src:t.image,alt:"Image for ".concat(t.headline),sizes:"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",width:0,height:0,style:{width:"100%",height:"auto",borderRadius:"16px",aspectRatio:"calc(16/9)",objectFit:"cover"}}),(0,i.jsxs)(c.sg,{gap:"8px",children:[(0,i.jsx)(d.Z,{style:"subtitle",children:t.headline}),void 0!==t.dropline&&(0,i.jsx)(d.Z,{style:"subtitle",color:"secondary",children:t.dropline}),(0,i.jsx)(d.Z,{style:"paragraph",color:"secondary",maxLines:"card"==n?4:12,children:t.text})]}),void 0!==t.link&&(0,i.jsx)(l.MC,{href:t.link,target:"_blank",rel:"noopener noreferrer",style:{width:"100%"},children:(0,i.jsx)(l.zx,{size:{"@initial":"mobile","@md":"desktop"},style:{width:"100%"},children:(0,i.jsx)(d.Z,{style:"subtitle",color:"secondary",children:"Full Recap"})})})]})}let p=(0,l.zo)(c.sg,{variants:{style:{card:{},feature:{gridColumnEnd:"span 2"}}},defaultVariants:{style:"card"}});var g=JSON.parse('{"2020":{"articles":[{"image":"/images/azeez_flowo_2020.jpg","headline":"Florida Warmup Recap","text":"BMo kicked off its season at the aptly-named Florida Warm Up. The tournament’s ~strange~ format pitted us against a series of elite opponents, as well as some underrated competition eager to take a shot at the defending champs...","link":"https://docs.google.com/document/d/1JOI1KxAVJXCwgTzd38V48uBKIqlB3_Cj1awIuHOkOWQ/edit?usp=sharing"},{"image":"/images/ccc_2019_team.jpg","headline":"Classic City Classic Recap","text":"BMo traveled south to the Classic City Classic Nov the weekend of Nov 16 eager for some out-of region play against a field riddled with natties teams. We struggled Saturday, failing to bring the energy and intensity that it takes to compete at a high level...","link":"https://docs.google.com/document/d/1BWJ2mrtT1zqYxTbNN9JAefMbVGv_ag1EzugER6XDtoo/edit?usp=sharing"},{"image":"/images/lobby_p_2019_team.jpg","headline":"Lobster Pot Champs!","text":"A brave band of hellfish travelled up to Portland for our second appearance at the Lobster Pot. Keeping our eyes on the ($1000 first-place) prize all weekend, we cruised through pools on Saturday despite having under two lines of active players...","link":"https://docs.google.com/document/d/1lZPt2M_HkpA4NenhPlx3be_EYXyGhefE_zz6T33MDjQ/edit?usp=sharing"}]},"2022":{"rankings":{"ultiworld":2,"usaultimate":1},"articles":[{"image":"/images/willis_nationals.jpg","headline":"Triple Crown Champs","dropline":"BMo finishes 2nd at nationals, wins all regular season tournaments","text":"We really began this season at the end of January, without the usual October to December tinkering and bonding that the team goes through absent a fall championship. It would have made sense for this team, with all 12 (?) of its rookies, to be a little rough around the edges. Maybe even serving more as a development year. Instead, we swept our regular season tournaments: Florida Warmup, Smoky Mountain Invite, and Easterns. We then walked through sectionals and regionals, taking care of business against the region’s best. It wasn’t always pretty (needing to break somewhere between 2 and a million times in a row to beat NC State on double game point), but we usually got lucky and found a way to win – every game in fact, except our first of the season, against Minnesota. Arriving at Nationals, we knew we had put in the work to be able to beat any team in the field. After an up and down opening win against Cal Poly, things started clicking. While Evan Lepler will tell you all about Jacques’ pinpoint blades and John’s first step, our undefeated run to the final was fueled by the contributions of the entirety of our roster...","link":"https://docs.google.com/document/d/1LBJ9QVeEHWyV3eiZ6MZDjgbbf7JAS89b1NKCk_IPCas/edit?usp=sharing"}]}}');function h(e){let{rankings:t}=e;return(0,i.jsxs)(m,{padding:"24px",gap:"24px",align:"stretch",children:[(0,i.jsx)(d.Z,{style:"subtitle",color:"secondary",children:"Rankings"}),(0,i.jsx)(f,{imageSrc:"/images/ultiworld.jpg",name:"Ultiworld",rank:t.ultiworld,link:"https://ultiworld.com/college-rankings/#college-d-i-mens"}),(0,i.jsx)(f,{imageSrc:"/images/usau.jpg",name:"USA Ultimate",rank:t.usaultimate,link:"https://play.usaultimate.org/teams/events/team_rankings/?RankSet=College-Men"})]})}let m=(0,l.zo)(c.sg,{borderRadius:"24px",border:"solid 1px $gray7",height:"fit-content"});function f(e){let{imageSrc:t,name:n,rank:o,link:a}=e;return(0,i.jsxs)(c.X2,{gap:"16px",align:"center",children:[(0,i.jsx)(s(),{src:t,alt:"".concat(n," logo"),width:40,height:40}),(0,i.jsx)(d.Z,{style:"subtitle",css:{flex:"1 1 100%"},children:n}),(0,i.jsxs)(x,{justify:"center",align:"center",children:[(0,i.jsx)(d.Z,{style:"subtitle",color:"secondary",children:"#"}),(0,i.jsx)(d.Z,{style:"subtitle",color:"primary",children:"".concat(o)})]})]})}let x=(0,l.zo)(c.X2,{width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",borderRadius:"24px",backgroundColor:"$gray3"});function b(){return(0,i.jsx)(o.Z,{children:(0,i.jsx)(a.Dv,{content:new Map(Object.entries(g).map(e=>{let t=parseInt(e[0]),n=e[1];return[t,n]})),element:(e,t)=>{let n=[t.rankings,...t.articles].filter(e=>void 0!==e).map(e=>e);return(0,i.jsx)(a.uG,{year:e,contentName:"News",content:n,element:n=>"headline"in n?(0,i.jsx)(u,{article:n,style:t.articles.length>1?"card":"feature"},n.link):(0,i.jsx)(h,{rankings:n},"".concat(e,"rankings"))},e)}})})}},1436:function(e,t,n){Promise.resolve().then(n.bind(n,5295))}},function(e){e.O(0,[619,786,598,667,961,560],function(){return e(e.s=1436)}),_N_E=e.O()}]);