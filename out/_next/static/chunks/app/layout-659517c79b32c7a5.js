(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{345:function(e,t,o){"use strict";o.d(t,{Z:function(){return r},b:function(){return a}});var n=o(9268),i=o(7671);function r(e){return(0,n.jsx)(l,{size:{"@initial":"mobile","@md":"desktop"},verticalPadding:!0,...e})}function a(e){let{verticalPadding:t="0",verticalPaddingMobile:o=t,...i}=e;return(0,n.jsx)(l,{size:{"@initial":"mobile","@md":"desktop"},verticalPadding:!1,css:{paddingTop:t,paddingBottom:t,"@md":{paddingTop:o,paddingBottom:o}},...i})}let l=(0,i.zo)("div",{maxWidth:"".concat(1200,"px"),margin:"auto",variants:{size:{mobile:{padding:"16px"},desktop:{padding:"48px"}},verticalPadding:{true:{},false:{paddingTop:0,paddingBottom:0}}}})},2393:function(e,t,o){"use strict";o.d(t,{X2:function(){return r},sg:function(){return a}});var n=o(9268),i=o(7671);function r(e){return(0,n.jsx)(l,{direction:"row",...e})}function a(e){return(0,n.jsx)(l,{direction:"column",...e})}function l(e){let{direction:t,justify:o="start",align:i="start",gap:r="0",gapMobile:a=r,padding:l="0",paddingMobile:d=l,...c}=e;return(0,n.jsx)(s,{css:{flexDirection:t,justifyContent:null!=o?o:"start",alignItems:null!=i?i:"start",gap:a,padding:d,"@md":{gap:r,padding:l}},...c})}let s=(0,i.zo)("div",{display:"flex"})},7911:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(9268),i=o(7671);function r(e){let{style:t,children:o,maxLines:r,css:a,color:l}=e,s="h"==t[0]?t:"p",d="h"==t[0]||"caption"==t?t:"body";return(0,n.jsx)(i.k$,{as:s,css:{fontSize:"$".concat(d,"Mobile"),"@md":{fontSize:"$".concat(d,"Desktop")},lineClamp:"".concat(null!=r?r:"none"),"-webkit-line-clamp":"".concat(null!=r?r:"none"),textOverflow:"".concat(void 0!=r?"ellipsis":"inherit"),overflow:"".concat(void 0!=r?"hidden":"inherit"),display:"-webkit-box","-webkit-box-orient":"vertical",...a},style:t,color:l,children:o})}},7671:function(e,t,o){"use strict";o.d(t,{AV:function(){return s},MC:function(){return g},W0:function(){return l},k$:function(){return u},wv:function(){return f},zo:function(){return d},zx:function(){return h}});var n=o(5952),i=o(5778),r=o(5846),a=o.n(r);let l=(0,i.zY)({"*":{margin:0,padding:0},"button, input":{fontFamily:"inherit"}}),s=[620,1024],{styled:d,css:c,getCssText:p}=(0,i.Th)({media:{md:"(min-width: ".concat(s[0],"px)"),lg:"(min-width: ".concat(s[1],"px)")},theme:{colors:{...n.MA,...n.U2,...n.Q6},fontSizes:{h1Desktop:"108px",h1Mobile:"48px",h2Desktop:"48px",h2Mobile:"32px",h3Desktop:"36px",h3Mobile:"24px",h6Desktop:"32px",h6Mobile:"20px",bodyDesktop:"18px",bodyMobile:"16px",caption:"12px"}}}),u=d("p",{variants:{style:{h1:{fontWeight:"800",lineHeight:"80%",letterSpacing:"-0.02em"},h2:{fontWeight:"700"},h3:{fontWeight:"700"},h6:{fontWeight:"400",lineHeight:"1"},subtitle:{fontWeight:"600"},body:{},paragraph:{lineHeight:"150%",whiteSpace:"pre-line"},caption:{}},color:{primary:{color:"$gray12"},secondary:{color:"$gray11"},tertiary:{color:"$gray10"},accent:{color:"$red11"}}}}),h=d("button",{border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",variants:{size:{mobile:{height:"44px",padding:"8px",borderRadius:"16px",fontSize:"100%",gap:"8px"},desktop:{height:"56px",padding:"8px",borderRadius:"16px",fontSize:"100%",gap:"8px"}},color:{neutral:{backgroundColor:"$gray3","&:hover":{backgroundColor:"$gray4"},"&:focus":{backgroundColor:"$gray5"},color:"$gray11"},primary:{backgroundColor:"$red3","&:hover":{backgroundColor:"$red4"},"&:focus":{backgroundColor:"$red5"},color:"$red11"}}},defaultVariants:{color:"neutral"}}),x={"&:link":{textDecoration:"none"},"&:visited":{textDecoration:"none"},"&:hover":{textDecoration:"none"},"&:active":{textDecoration:"none"}},g=d("a",{...x}),f=d(a(),{...x})},6432:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return M}});var n=o(9268),i=o(2546),r=o.n(i),a=o(7671),l=o(2393),s=o(898),d=o(6008),c=o(5952),p=o(6006),u=o(9714),h=o(7911),x=o(345);function g(){var e;(0,d.useRouter)();let t=(0,d.usePathname)(),[o,i]=(0,p.useState)(),r=!["/","/roster","/support"].includes(t);return(0,p.useEffect)(()=>i(window),[]),(0,n.jsxs)(f,{children:[(0,n.jsx)(x.b,{verticalPadding:"12px",children:(0,n.jsxs)(b,{children:[(0,n.jsx)(s.ck,{children:(0,n.jsx)(v,{title:"Home",selectedPath:t,pathname:"/"})}),(0,n.jsx)(s.ck,{children:(0,n.jsx)(v,{title:"Roster",selectedPath:t,pathname:"/roster"})}),(0,n.jsx)(s.ck,{children:(0,n.jsx)(v,{title:"Support",selectedPath:t,pathname:"/support"})}),(0,n.jsxs)(s.ck,{children:[(0,n.jsxs)(y,{selected:r,size:{"@initial":"mobile","@md":"desktop"},color:"neutral",children:[(0,n.jsx)(h.Z,{style:"subtitle",children:"More"}),(0,n.jsx)($,{})]}),(0,n.jsx)(j,{size:{"@initial":"mobile","@md":"desktop"},children:(0,n.jsxs)(l.sg,{children:[(0,n.jsx)(w,{title:"Zip’s Tips",pathname:"/zipstips",selectedPath:t}),(0,n.jsx)(w,{title:"Videos",pathname:"/videos",selectedPath:t}),(0,n.jsx)(w,{title:"Photos",pathname:"https://photos.app.goo.gl/U1kvAPF6PReKE6nY6",selectedPath:t}),(0,n.jsx)(w,{title:"News",pathname:"/news",selectedPath:t})]})})]})]})}),(null!==(e=null==o?void 0:o.innerWidth)&&void 0!==e?e:0)<a.AV[0]&&(0,n.jsx)(s.l_,{})]})}let f=(0,a.zo)(s.fC,{borderBottom:"solid 1px $gray7"}),b=(0,a.zo)(s.aV,{all:"unset",display:"flex",listStyle:"none",gap:"4px"}),m={outline:"none",userSelect:"none",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",variants:{size:{mobile:{padding:"8px 12px"},desktop:{padding:"12px 16px"}},color:{neutral:{color:c.MA.gray11,"&:focus":{position:"relative",boxShadow:"0 0 0 2px ".concat(c.MA.gray7)},"&:hover":{backgroundColor:c.MA.gray4}},accent:{color:c.Q6.red11,"&:focus":{position:"relative",boxShadow:"0 0 0 2px ".concat(c.Q6.red7)},"&:hover":{backgroundColor:c.Q6.red4}}},selected:{true:{},false:{}}},compoundVariants:[{color:"neutral",selected:!0,css:{color:c.MA.gray11,backgroundColor:c.MA.gray3}},{color:"accent",selected:!0,css:{color:c.Q6.red11,backgroundColor:c.Q6.red3}}]};function v(e){let{title:t,pathname:o,selectedPath:i}=e;return(0,d.useRouter)(),(0,n.jsx)(k,{href:o,color:"/"==o?"accent":"neutral",selected:o==i,size:{"@initial":"mobile","@md":"desktop"},children:(0,n.jsx)(h.Z,{style:"subtitle",children:t})})}let k=(0,a.zo)(a.wv,{...m}),y=(0,a.zo)(s.xz,{all:"unset",...m}),j=(0,a.zo)(s.VY,{variants:{size:{mobile:{width:"100%"},desktop:{position:"absolute",backgroundColor:"$gray1",width:"fit-content",padding:"8px",borderRadius:"16px",border:"solid 1px $gray7"}}}});function w(e){let{title:t,pathname:o,selectedPath:i}=e,r=o==i;return(0,n.jsx)(z,{href:o,size:{"@initial":"mobile","@md":"desktop"},children:(0,n.jsxs)(l.X2,{gap:"12px",justify:"space-between",align:"center",style:{width:"100%"},children:[(0,n.jsx)(h.Z,{style:r?"subtitle":"body",color:r?"primary":"secondary",children:t}),r&&(0,n.jsx)(u.nQG,{})]})})}let z=(0,a.zo)(a.wv,{display:"flex",alignItems:"center",width:"100%",boxSizing:"border-box",cursor:"pointer","&:hover":{backgroundColor:"$gray4"},"&:focus":{backgroundColor:"$gray5"},variants:{size:{mobile:{padding:"12px 16px"},desktop:{padding:"12px 16px",borderRadius:"8px",minWidth:"196px"}}}}),$=(0,a.zo)(u.VAA,{position:"relative",color:c.MA.gray10,top:1,"[data-state=open] &":{transform:"rotate(-180deg)"},"@media (prefers-reduced-motion: no-preference)":{transition:"transform 250ms ease"}});function C(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:"BMo Ultimate Frisbee"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"images/BlackHellfish.svg",type:"image/svg+xml"})]})}function M(e){let{children:t}=e;return(0,a.W0)(),(0,n.jsxs)("html",{lang:"en",className:r().className,children:[(0,n.jsx)("head",{children:(0,n.jsx)(C,{})}),(0,n.jsx)("body",{children:(0,n.jsxs)(l.sg,{style:{height:"100%",width:"100vw"},align:"stretch",children:[(0,n.jsx)(g,{}),(0,n.jsx)(P,{children:t})]})})]})}let P=(0,a.zo)("div",{overflowY:"scroll",width:"-webkit-fill-available",height:"-webkit-fill-available"})},8592:function(e,t,o){Promise.resolve().then(o.bind(o,6432))}},function(e){e.O(0,[744,619,786,309,659,667,961,560],function(){return e(e.s=8592)}),_N_E=e.O()}]);