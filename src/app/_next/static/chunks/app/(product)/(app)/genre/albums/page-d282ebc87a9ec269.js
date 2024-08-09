(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4897],{72301:function(e,t,i){Promise.resolve().then(i.bind(i,60255))},60255:function(e,t,i){"use strict";i.r(t);var a=i(9753),n=i(74717),l=i(95946);t.default=()=>{let e=(0,n.useSearchParams)().get("metatagId");return e||(0,n.notFound)(),(0,a.jsx)(l.rT,{metatagId:e})}},4491:function(e,t,i){"use strict";i.d(t,{IT:function(){return r.ArtistCard},xG:function(){return s.ArtistContextMenu},o9:function(){return l},v2:function(){return o.useArtistDisclaimer}});var a=i(42288),n=i(33589);let l=a.V5.model("ArtistMeta",{artist:n.Go,lastMonthListeners:a.V5.maybe(a.V5.number)});var r=i(99654),s=i(54864),o=i(66975)},66975:function(e,t,i){"use strict";i.d(t,{useArtistDisclaimer:function(){return r}});var a=i(98639),n=i(3429),l=i(44367);let r=e=>{let{artist:t,callback:i,shouldHistoryBack:r}=e,{disclaimer:s,modals:{disclaimerModal:o}}=(0,l.oR)(),u=(0,a.useRef)(String((0,n.Z)())),d=(0,a.useRef)(!1),c=(0,l.uK)().get(l.ce);return(0,a.useEffect)(()=>{s.isUnsafeDisclaimerConfirmed&&s.id===u.current&&!d.current&&(null==i||i(),d.current=!0)},[i,s.id,s.isUnsafeDisclaimerConfirmed]),(0,a.useCallback)(async e=>{let a=c.get(l.BU.ExEx);if((null==t?void 0:t.isUnsafeLegal)&&(null==a?void 0:a.includes("".concat(l.co.ARTIST,"_").concat(t.id)))){null==i||i();return}if((null==t?void 0:t.isLegalRejected)||(null==t?void 0:t.isUnsafeLegal)){null==e||e.preventDefault(),await s.getArtistDisclaimer({artistId:t.id}),t.isUnsafeLegal&&s.setType(l.Gq.UNSAFE),s.setId(u.current),s.setEntityId(t.id),s.setEntityType(l.co.ARTIST),s.setShouldHistoryBack(!!r),d.current=!1,o.open();return}null==e||e.preventDefault(),null==i||i()},[null==t?void 0:t.id,null==t?void 0:t.isLegalRejected,null==t?void 0:t.isUnsafeLegal,i,s,o,c,r])}},99654:function(e,t,i){"use strict";i.d(t,{ArtistCard:function(){return b}});var a=i(9753),n=i(60836),l=i(9544),r=i(98639),s=i(80542),o=i(31014),u=i(52122),d=i(23881),c=i(84338),m=i(39513),g=i(27491),p=i(28852),v=i(12404),y=i(2570),_=i(33589),f=i(44367),C=i(67868),N=i(66975),S=i(54864),x=i(62914),h=i.n(x);let b=(0,l.Pi)(e=>{let{artist:t,className:i,children:l,contentLinesCount:x}=e,{ref:b,intersectionPropertyId:k}=(0,f.Vf)(),P=(0,f.x5)(),{formatMessage:E}=(0,s.Z)(),[j,V]=(0,r.useState)(!1),[T,L]=(0,r.useState)(!1),[G,A]=(0,r.useState)(!1),{sendLikeSearchFeedback:R,sendNavigateSearchFeedback:B,sendPlaySearchFeedback:D}=(0,f.sA)(),I=(0,f.zx)(),O=(0,_.SB)(t),w=(0,_.BV)(t),{id:F,name:W,coverUri:U,isLiked:z}=t,q=(0,f.s0)(t.url),M=(0,f.s0)(t.url,!0),[Z,J]=(0,r.useState)(!1),Q=(0,r.useMemo)(()=>{let e=E({id:"entity-names.artist-name"},{artistName:W}),t=z?E({id:"entity-names.has-your-like"}):"";return"".concat(e," ").concat(t)},[W,z,E]),{isPlaying:K,togglePlay:H}=(0,f.qm)({playContextParams:{contextData:{type:c.Ak.Artist,meta:{id:Number(F)},from:P},loadContextMeta:!0}}),Y=(0,N.useArtistDisclaimer)({artist:t,callback:q}),X=(0,N.useArtistDisclaimer)({artist:t,callback:M}),$=(0,N.useArtistDisclaimer)({artist:t,callback:H}),ee=(0,_.ik)(X,Y),et=(0,r.useCallback)(e=>{null==B||B(),I({to:u.qU.ArtistScreen}),ee(e)},[B,I,ee]),ei=(0,r.useCallback)(e=>{et(e)},[et]),ea=(0,r.useCallback)(()=>{j||K||(V(!0),null==D||D()),$()},[K,j,D,$]),en=(0,r.useCallback)(()=>{T||z||(L(!0),null==R||R()),O()},[z,O,T,R]),el=(0,r.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),er=(0,r.useCallback)(()=>{A(!G),J(!G)},[G]),es=(0,r.useMemo)(()=>(0,a.jsx)(S.ArtistContextMenu,{artist:t,onOpenChange:er,open:G,returnFocus:!1,reference:(0,a.jsx)(m.z,{onClick:el,className:(0,n.W)(h().menuButton,h().control),"aria-label":E({id:"interface-actions.context-menu"}),icon:(0,a.jsx)(p.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,d.BA)(d.bG.artist.ARTIST_CONTEXT_MENU_BUTTON)})}),[t,E,el,er,G]),eo=(0,r.useMemo)(()=>{if(t.isAvailable)return(0,a.jsx)(g.kk,{isVisible:G||Z,className:h().controls,radius:"round",playControl:(0,a.jsx)(C.JM,{buttonVariant:"default",withHover:!1,className:(0,n.W)(h().playButton,h().control),iconSize:"xl",variant:"filled",onClick:ea,isPlaying:K,disabled:!t.isAvailableForPlaying}),likeControl:(0,a.jsx)(C.dJ,{className:(0,n.W)(h().likeButton,h().control),isLiked:z,onClick:en,variant:"default",size:"s",iconSize:"xxs"}),menuControl:es,pinControl:(0,a.jsx)(C.RT,{onClick:w,isPinned:t.isPinned,className:(0,n.W)(h().pinButton,h().control),withRipple:!1})})},[t.isAvailable,t.isAvailableForPlaying,es,en,ea,G,Z,z,K,t.isPinned,w]),eu=(0,r.useMemo)(()=>(0,a.jsx)(v.Paper,{className:h().cover,radius:"round",withShadow:!0,...(0,d.BA)(d.bG.artist.ARTIST_CARD),children:(0,a.jsxs)("div",{className:h().coverBlock,onClick:ei,children:[(0,a.jsx)(C.BE,{className:h().image,src:U,size:200,fit:"cover",alt:Q,withAvatarReplace:!0,isAvailable:t.isAvailable,"aria-hidden":!0}),eo]})}),[ei,U,Q,t.isAvailable,eo]);return(0,a.jsx)(g.m7,{ref:b,className:(0,n.W)(h().root,i),textPosition:"center","aria-label":Q,title:(0,a.jsx)(y.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,a.jsx)(C.rU,{className:h().titleLink,href:t.url,"aria-label":Q,onClick:et,...(0,d.BA)(d.bG.artist.ARTIST_TITLE),children:W})}),srTitle:(0,a.jsx)(C.rU,{href:t.url,onClick:et,children:Q}),"data-intersection-property-id":k,description:(0,a.jsx)(y.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",...(0,d.BA)(d.bG.artist.ARTIST_SUBTITLE),children:(0,a.jsx)(o.Z,{id:"entity-names.singer"})}),contentLinesCount:x,view:eu,...(0,d.BA)(d.bG.artist.ARTIST_ITEM),children:l})})},54864:function(e,t,i){"use strict";i.d(t,{ArtistContextMenu:function(){return d}});var a=i(9753),n=i(9544),l=i(98639),r=i(385),s=i(33589),o=i(44367),u=i(67868);let d=(0,n.Pi)(e=>{var t,i,n;let{artist:d,lastMonthListeners:c,reference:m,onOpenChange:g,open:p,returnFocus:v}=e,{settings:y,experiments:_,trailer:f}=(0,o.oR)(),C=(0,s.BV)(d),N=(0,s.SB)(d),S="".concat(o.aU.ARTIST,"-").concat(null==d?void 0:d.id),x=y.layout===o.t8.Mobile,h=_.checkExperiment(o.pe.WebNextEntityTrailer,"on")&&true&&(null==d?void 0:null===(t=d.trailer)||void 0===t?void 0:t.isAvailable),{href:b}=(0,o.qK)(null!==(i=null==d?void 0:d.url)&&void 0!==i?i:""),{isPlaying:k,togglePlay:P}=(0,o.Qh)({seeds:null!==(n=null==d?void 0:d.seeds)&&void 0!==n?n:[],pageIdForFrom:o.Rh.RADIO,blockIdForFrom:S}),E=(0,l.useCallback)(()=>{k||P()},[k,P]),j=(0,l.useCallback)(()=>{(null==d?void 0:d.id)&&f.openArtistTrailer(null==d?void 0:d.id)},[null==d?void 0:d.id,f]);return(0,o.ZP)(p),(0,a.jsxs)(r.v2,{reference:m,isMobile:x,title:null==d?void 0:d.name,description:c,offsetOptions:10,open:p,onOpenChange:g,returnFocus:v,children:[!x&&(0,a.jsx)(u.Zd,{onClick:C,isPinned:null==d?void 0:d.isPinned}),(0,a.jsx)(u.xZ,{onClick:N,isLiked:null==d?void 0:d.isLiked,disabled:!(null==d?void 0:d.isAvailable)}),h&&(0,a.jsx)(u.NB,{onClick:j}),(0,a.jsx)(u.GQ,{onClick:E,disabled:!(null==d?void 0:d.isAvailable),variant:"artist"}),(0,a.jsx)(u.zq,{disabled:!d,shareLink:b,entityVariant:"artist",entityTitle:null==d?void 0:d.name})]})})},5293:function(e,t,i){"use strict";i.d(t,{I7:function(){return v},b4:function(){return s},at:function(){return _},zU:function(){return y}});var a=i(9753),n=i(98639),l=i.t(n,2),r=i(67868);let s=e=>{let{children:t,title:i,className:l}=e,{setTitleElement:s,setTitle:o}=(0,n.useContext)(r.pI),u=(0,n.useRef)(null);return(0,n.useEffect)(()=>{(null==u?void 0:u.current)&&s(u),i&&o(i)},[u,i,s,o]),(0,n.useEffect)(()=>()=>{o("")},[o]),(0,a.jsx)("div",{ref:u,className:l,children:t})};var o=i(9544),u={810:e=>{e.exports=l}},d={},c={};(()=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useScroll=void 0;let e=function e(t){var i=d[t];if(void 0!==i)return i.exports;var a=d[t]={exports:{}};return u[t](a,a.exports,e),a.exports}(810);c.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),c.__esModule;var m=c.useScroll,g=i(44367);let p=e=>{let{element:t,scrollTop:i,isMobile:a}=e,n=.4*t.clientHeight;return i+(a?56:72)>=t.offsetTop+n},v=(0,o.Pi)(e=>{let{children:t,scrollElement:i,outerTitle:l="",headerElement:s,headerThreshold:o}=e,[u,d]=(0,n.useState)(l),[c,v]=(0,n.useState)(null),[y,_]=(0,n.useState)(!1),[f,C]=(0,n.useState)(!1),{settings:N}=(0,g.oR)(),S=N.layout===g.t8.Mobile;(0,n.useLayoutEffect)(()=>{d(l)},[l]);let x=(0,n.useCallback)(()=>{if(!i)return;let e=null!=o?o:10,t=s?Number(s.offsetTop)-e:e;t<0&&(t=0),C(i.scrollTop>t),(null==c?void 0:c.current)&&_(p({element:null==c?void 0:c.current,scrollTop:i.scrollTop,isMobile:S}))},[i,o,s,c,S]);(0,n.useEffect)(()=>{i&&(null==i?void 0:i.scrollTop)!==0||C(!1)},[i,null==i?void 0:i.scrollTop]),m(x);let h=(0,n.useMemo)(()=>({title:u,setTitle:d,titleElement:c,scrollElement:i,setTitleElement:v,isScrolledTitle:y,isScrolling:f}),[u,y,c,i,f]);return(0,a.jsx)(r.pI.Provider,{value:h,children:t})});i(66414);let y=()=>{let[e,t]=(0,n.useState)(null),i=(0,n.useCallback)(i=>{e!==i&&t(i)},[e]);return[e,i]},_=(e,t)=>((0,g.uK)().get(g.Xt),[(0,n.useMemo)(()=>{if(void 0!==t){let i=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:i,"px)"),opacity:1}}return{}},[t,!1,e]),(0,n.useMemo)(()=>({"--average-color-background":e}),[e])])},55784:function(e,t,i){"use strict";i.d(t,{h:function(){return n.h},n:function(){return a.n}});var a=i(33861),n=i(34906)},31579:function(e,t,i){"use strict";i.d(t,{vY:function(){return l.EmptyPlaylistBlock},ZL:function(){return a.PlaylistCard},Nn:function(){return v},d2:function(){return u},VD:function(){return n.PlaylistsCarousel},RE:function(){return N},Q9:function(){return f},VB:function(){return C}});var a=i(22003),n=i(18921),l=i(6030),r=i(42288),s=i(33589),o=i(12090);let u=o.Cd.props({artists:r.V5.maybe(r.V5.array(s.Go))});var d=i(44367),c=i(13196),m=i(59131);let g=r.V5.model("PlaylistOwner",{uid:r.V5.number,login:r.V5.string,name:r.V5.string,sex:r.V5.enumeration(Object.values(m.oF)),verified:r.V5.boolean}),p=r.V5.model("PlaylistOwner",{userInfo:r.V5.maybeNull(g),caseForms:r.V5.maybeNull(c.S2)}),v=o.Cd.props({owner:r.V5.maybe(g),modified:r.V5.string,description:r.V5.maybe(r.V5.string),madeFor:r.V5.maybeNull(p)}).views(e=>({get seeds(){var t;return["playlist:".concat(null===(t=e.owner)||void 0===t?void 0:t.login,"_").concat(e.kind)]}})).actions(e=>({changeDescription:(0,r.ls)(function*(t){if(!(0,r.fh)(e))return d.SL.ERROR;if(e.description===t)return d.SL.OK;if(t.length>o.Zn)return d.SL.ERROR;let{usersResource:i,modelActionsLogger:a}=(0,r.dU)(e);if(e.canUserChange){let n=e.description;e.description=t;try{let a=yield i.changePlaylistDescription({description:t,userId:e.uid,playlistKind:e.kind});return e.description=a.description,d.SL.OK}catch(t){e.description=n,a.error(t)}}return d.SL.ERROR}),changePlaylistCover:(0,r.ls)(function*(t){if(!(0,r.fh)(e))return d.SL.ERROR;let{usersResource:i,modelActionsLogger:a}=(0,r.dU)(e);try{return yield i.uploadPlaylistCover({userId:e.uid,formData:t,playlistKind:e.kind}),d.SL.OK}catch(e){a.error(e)}return d.SL.ERROR})})),y=e=>({uid:e.uid,login:e.login,name:e.name,sex:e.sex,verified:e.verified}),_=e=>(0,r.pj)({userInfo:e.userInfo?y(e.userInfo):null,caseForms:e.caseForms?(0,d.GA)(e.caseForms):null}),f=e=>(0,r.pj)({...(0,o.PV)(e),owner:e.owner?y(e.owner):void 0,description:e.description,modified:e.modified,madeFor:e.madeFor?_(e.madeFor):null}),C=e=>{var t,i;return(0,r.pj)({...(0,o.PV)(e),artists:null!==(i=null==e?void 0:null===(t=e.artists)||void 0===t?void 0:t.map(s.d))&&void 0!==i?i:[]})},N=e=>{var t,i;let{playlist:a,generatedPlaylistType:n,likesCount:l}=e;return(0,r.pj)({isAvailable:null===(i=a.available)||void 0===i||i,uuid:a.playlistUuid,title:a.title,uid:a.uid,kind:a.kind,coverUri:null===(t=a.cover)||void 0===t?void 0:t.uri,generatedPlaylistType:n,likesCount:l})}},6030:function(e,t,i){"use strict";i.d(t,{EmptyPlaylistBlock:function(){return c}});var a=i(9753),n=i(60836),l=i(98639),r=i(31014),s=i(28852),o=i(2570),u=i(98746),d=i.n(u);let c=e=>{let{className:t,isEmptySearch:i}=e,u=(0,l.useMemo)(()=>i?(0,a.jsx)(r.Z,{id:"search-results.not-found-title"}):(0,a.jsx)(r.Z,{id:"error-messages.empty-collection-playlist-title"}),[i]),c=(0,l.useMemo)(()=>i?(0,a.jsx)(r.Z,{id:"search-results.not-found-description"}):(0,a.jsx)(r.Z,{id:"error-messages.empty-collection-playlist-description"}),[i]);return(0,a.jsxs)("div",{className:(0,n.W)(d().root,t),children:[(0,a.jsx)("div",{className:d().iconBackground,children:(0,a.jsx)(s.J,{variant:"search",size:"l",className:d().icon})}),(0,a.jsx)(o.Heading,{variant:"h3",size:"xs",className:d().title,children:u}),(0,a.jsx)(o.Caption,{variant:"span",size:"l",className:d().subtitle,children:c})]})}},22003:function(e,t,i){"use strict";i.d(t,{PlaylistCard:function(){return k}});var a=i(9753),n=i(60836),l=i(9544),r=i(98639),s=i(80542),o=i(52122),u=i(23881),d=i(84338),c=i(39513),m=i(27491),g=i(28852),p=i(12404),v=i(2570),y=i(33589),_=i(12090),f=i(44367),C=i(67868);let N=e=>{let{formatMessage:t}=(0,s.Z)();return(0,r.useMemo)(()=>{let i="";e.isLiked&&!e.actualLikesCount?i=t({id:"entity-names.has-your-like"}):"number"==typeof e.actualLikesCount&&(i=e.actualLikesCount>0?t({id:"entity-names.likes-counter"},{counter:e.actualLikesCount}):t({id:"entity-names.likes-counter-empty"}));let a=t({id:"entity-names.playlist-name"},{playlistName:e.title});return"".concat(a," ").concat(i)},[t,e])};var S=i(385);let x=(0,l.Pi)(e=>{var t;let{playlist:i,reference:n,onOpenChange:l,open:s,returnFocus:o}=e,{settings:u,experiments:d,trailer:c}=(0,f.oR)(),m=(0,_.SB)(i),g=(0,_.BV)(i),p=u.layout===f.t8.Mobile,v=d.checkExperiment(f.pe.WebNextEntityTrailer,"on")&&true&&(null===(t=i.trailer)||void 0===t?void 0:t.isAvailable);(0,f.ZP)(s);let y=(0,r.useCallback)(()=>{c.openPlaylistTrailer(i.id)},[i.id,c]);return(0,a.jsxs)(S.v2,{title:i.title,onOpenChange:l,open:s,offsetOptions:10,reference:n,isMobile:p,returnFocus:o,children:[!p&&(0,a.jsx)(C.Zd,{onClick:g,isPinned:i.isPinned}),!i.isFavouritePlaylist&&(0,a.jsx)(C.xZ,{onClick:m,isLiked:i.isLiked}),v&&(0,a.jsx)(C.NB,{onClick:y})]})});var h=i(88308),b=i.n(h);let k=(0,l.Pi)(e=>{let{className:t,playlist:i,children:l,contentLinesCount:S,customDescription:h}=e,{ref:k,intersectionPropertyId:P}=(0,f.Vf)(),E=(0,f.x5)(),{formatMessage:j}=(0,s.Z)(),{sendLikeSearchFeedback:V,sendNavigateSearchFeedback:T,sendPlaySearchFeedback:L}=(0,f.sA)(),[G,A]=(0,r.useState)(!1),[R,B]=(0,r.useState)(!1),[D,I]=(0,r.useState)(!1),O=N(i),w=(0,_.SB)(i),F=(0,_.BV)(i),W=(0,f.zx)(),U=(0,f.s0)(i.url),z=(0,f.s0)(i.url,!0),q=(0,y.ik)(z,U),[M,Z]=(0,r.useState)(!1),{isPlaying:J,togglePlay:Q}=(0,f.qm)({playContextParams:{contextData:{type:d.Ak.Playlist,meta:{id:i.id,uuid:i.uuid},from:E},loadContextMeta:!0}}),K=(0,r.useCallback)(()=>{W({to:o.qU.PlaylistScreen}),null==T||T()},[W,T]),H=(0,r.useCallback)(e=>{K(),q(e)},[q,K]),Y=(0,r.useCallback)(()=>{G||J||(A(!0),null==L||L()),Q()},[J,G,L,Q]),X=(0,r.useCallback)(()=>{R||i.isLiked||(B(!0),null==V||V()),w()},[w,R,i.isLiked,V]),$=(0,r.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),ee=(0,r.useCallback)(()=>{I(!D),Z(!D)},[D]),et=(0,r.useMemo)(()=>{var e;return h?(0,a.jsx)(v.Caption,{variant:"span",type:"entity",size:"s",weight:"medium",lineClamp:2,children:h}):(null===(e=i.artists)||void 0===e?void 0:e.length)?(0,a.jsx)(y.jO,{className:b().artists,artists:i.artists,lineClamp:1,linkClassName:b().artistLink,captionSize:"s"}):void 0},[i.artists,h]),ei=(0,r.useMemo)(()=>{if(!i.isFavouritePlaylist)return(0,a.jsx)(C.dJ,{className:(0,n.W)(b().likeButton,b().control),isLiked:i.isLiked,onClick:X,variant:"default",size:"s",iconSize:"xxs"})},[X,i.isFavouritePlaylist,i.isLiked]),ea=(0,r.useMemo)(()=>(0,a.jsx)(p.Paper,{className:b().cover,radius:"s",withShadow:!0,...(0,u.BA)(u.bG.playlist.PLAYLIST_CARD),children:(0,a.jsxs)("div",{className:b().coverBlock,onClick:H,children:[(0,a.jsx)(C.BE,{className:b().image,src:i.coverUri,size:200,fit:"cover",alt:O,withAvatarReplace:!0,"aria-hidden":!0}),(0,a.jsx)(m.kk,{isVisible:D||M,className:b().controls,playControl:(0,a.jsx)(C.JM,{className:(0,n.W)(b().playButton,b().control),buttonVariant:"default",withHover:!1,iconSize:"xl",variant:"filled",onClick:Y,isPlaying:J,disabled:!i.isAvailable}),likeControl:ei,menuControl:(0,a.jsx)(x,{playlist:i,onOpenChange:ee,open:D,returnFocus:!1,reference:(0,a.jsx)(c.z,{onClick:$,className:(0,n.W)(b().menuButton,b().control),"aria-label":j({id:"interface-actions.context-menu"}),icon:(0,a.jsx)(g.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON)})}),pinControl:(0,a.jsx)(C.RT,{onClick:F,isPinned:i.isPinned,className:(0,n.W)(b().pinButton,b().control),withRipple:!1})})]})}),[H,i,O,D,M,Y,J,ei,ee,$,j,F]),en=!!i.actualLikesCount&&!i.isLikesCountHidden;return(0,a.jsxs)(m.m7,{ref:k,"aria-label":O,className:(0,n.W)(b().root,t),title:(0,a.jsx)(v.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,...(0,u.BA)(u.bG.playlist.PLAYLIST_TITLE),children:(0,a.jsx)(C.rU,{className:b().titleLink,href:i.url,onClick:K,children:i.title})}),srTitle:(0,a.jsx)(C.rU,{href:i.url,onClick:K,children:i.title}),"data-intersection-property-id":P,contentLinesCount:S,view:ea,description:et,...(0,u.BA)(u.bG.playlist.PLAYLIST_ITEM),children:[en&&(0,a.jsx)(C.DB,{ariaLabel:j({id:"entity-names.likes-counter"},{counter:i.actualLikesCount}),likesCount:i.actualLikesCount,isLiked:i.isLiked,handleLikeClick:w}),l]})})},18921:function(e,t,i){"use strict";i.d(t,{PlaylistsCarousel:function(){return o}});var a=i(9753),n=i(98639),l=i(67868),r=i(22003);let s=e=>{let{forwardRef:t,isShimmerVisible:i,isShimmerActive:n,title:s,description:o,playlists:u,containerClassName:d,className:c,headerClassName:m,viewAllActionLink:g,...p}=e;return(0,a.jsx)(l.HY,{isShimmerVisible:i,isShimmerActive:n,className:c,headerClassName:m,containerClassName:d,ref:t,title:s,description:o,viewAllActionLink:g,...p,children:null==u?void 0:u.map(e=>(0,a.jsx)(r.PlaylistCard,{playlist:e,contentLinesCount:3},e.key))})},o=(0,n.forwardRef)((e,t)=>(0,a.jsx)(s,{forwardRef:t,...e}))},95946:function(e,t,i){"use strict";i.d(t,{rT:function(){return n.GenreAlbumsPage},eq:function(){return l.GenreArtistsPage},a0:function(){return a.GenrePage},Kx:function(){return f},Fe:function(){return r.GenrePlaylistsPage}});var a=i(5112),n=i(70660),l=i(12788),r=i(91477);i(20806);var s=i(42288),o=i(10542),u=i(93490),d=i(31579),c=i(33589),m=i(44367),g=i(13196);let p=s.V5.model("GenreAlbumsPage",{loadingState:s.V5.enumeration(Object.values(m.Gu)),pager:s.V5.maybeNull(g.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(u.ug))}).views(e=>({get isNotFound(){var t;let i=e.loadingState===m.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,a=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===m.Gu.REJECT&&a||i},get isSomethingWrong(){return e.loadingState===m.Gu.REJECT&&!this.isNotFound}})).actions(e=>({getData:(0,s.ls)(function*(t){let{metatagId:i,page:a=0,pageSize:n=20}=t,{metatagsResource:l,modelActionsLogger:r}=(0,s.dU)(e);if(!(e.loadingState===m.Gu.PENDING&&e.pendingPages.has("".concat(a))||e.alreadyRequestedPages.has("".concat(a)))){"number"==typeof a&&e.alreadyRequestedPages.set("".concat(a),a);try{var d;e.loadingState=m.Gu.PENDING,e.pendingPages.set("".concat(a),a);let t=yield l.getMetatagAlbums({id:i,offset:a,limit:n});e.fullTitle=t.title.fullTitle;let r={page:a,perPage:n,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:r.total},()=>null)));let o=t.albums.map(u.ym);(0,m.AG)({items:e.items,mappedRawItems:o,page:a,pageSize:n}),e.pager=r,e.requests=(null!==(d=e.requests)&&void 0!==d?d:0)+1,e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.RESOLVE)}catch(t){r.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.REJECT)}finally{e.pendingPages.delete("".concat(a))}}}),reset(){e.loadingState=m.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}})),v=s.V5.model("GenreArtistsPage",{loadingState:s.V5.enumeration(Object.values(m.Gu)),pager:s.V5.maybeNull(g.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(c.Go))}).views(e=>({get isNotFound(){var t;let i=e.loadingState===m.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,a=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===m.Gu.REJECT&&a||i},get isSomethingWrong(){return e.loadingState===m.Gu.REJECT&&!this.isNotFound}})).actions(e=>({getData:(0,s.ls)(function*(t){let{metatagId:i,page:a=0,pageSize:n=20}=t,{metatagsResource:l,modelActionsLogger:r}=(0,s.dU)(e);if(!(e.loadingState===m.Gu.PENDING&&e.pendingPages.has("".concat(a))||e.alreadyRequestedPages.has("".concat(a)))){"number"==typeof a&&e.alreadyRequestedPages.set("".concat(a),a);try{var u;e.loadingState=m.Gu.PENDING,e.pendingPages.set("".concat(a),a);let t=yield l.getMetatagArtists({id:i,offset:a,limit:n,period:"week"});e.fullTitle=t.title.fullTitle;let r={page:a,perPage:n,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:r.total},()=>null)));let o=t.artists.map(e=>(0,c.d)(e.artist));(0,m.AG)({items:e.items,mappedRawItems:o,page:a,pageSize:n}),e.pager=r,e.requests=(null!==(u=e.requests)&&void 0!==u?u:0)+1,e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.RESOLVE)}catch(t){r.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.REJECT)}finally{e.pendingPages.delete("".concat(a))}}}),reset(){e.loadingState=m.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}}));var y=i(12090);let _=s.V5.model("GenrePlaylistsPage",{loadingState:s.V5.enumeration(Object.values(m.Gu)),pager:s.V5.maybeNull(g.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(y.Cd))}).views(e=>({get isNotFound(){var t;let i=e.loadingState===m.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,a=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===m.Gu.REJECT&&a||i},get isSomethingWrong(){return!this.isNotFound&&e.loadingState===m.Gu.REJECT&&0===e.alreadyRequestedPages.size}})).actions(e=>({getData:(0,s.ls)(function*(t){let{metatagId:i,page:a=0,pageSize:n=20}=t,{metatagsResource:l,modelActionsLogger:r}=(0,s.dU)(e);if(!(e.loadingState===m.Gu.PENDING&&e.pendingPages.has("".concat(a))||e.alreadyRequestedPages.has("".concat(a)))){"number"==typeof a&&e.alreadyRequestedPages.set("".concat(a),a);try{var o;e.loadingState=m.Gu.PENDING,e.pendingPages.set("".concat(a),a);let t=yield l.getMetatagPlaylists({id:i,offset:a,limit:n,withLikesCount:!0});e.fullTitle=t.title.fullTitle;let r={page:a,perPage:n,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:r.total},()=>null)));let u=t.playlists.map(y.PV);(0,m.AG)({items:e.items,mappedRawItems:u,page:a,pageSize:n}),e.pager=r,e.requests=(null!==(o=e.requests)&&void 0!==o?o:0)+1,e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.RESOLVE)}catch(t){r.error(t),e.alreadyRequestedPages.delete("".concat(a)),e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.REJECT)}finally{e.pendingPages.delete("".concat(a))}}}),reset(){e.loadingState=m.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}})),f=s.V5.model("GenrePage",{id:s.V5.maybeNull(s.V5.string),errorStatusCode:s.V5.maybeNull(s.V5.number),loadingState:s.V5.enumeration(Object.values(m.Gu)),fullTitle:s.V5.maybeNull(s.V5.string),artists:s.V5.array(c.Go),albums:s.V5.array(u.ug),playlists:s.V5.array(d.d2),albumsSubpage:p,artistsSubpage:v,playlistsSubpage:_}).views(e=>({get isLoading(){return e.loadingState===m.Gu.IDLE||e.loadingState===m.Gu.PENDING},get hasAlbums(){return e.loadingState===m.Gu.IDLE||e.loadingState===m.Gu.PENDING||e.albums.length>0},get hasArtists(){return e.loadingState===m.Gu.IDLE||e.loadingState===m.Gu.PENDING||e.artists.length>0},get hasPlaylists(){return e.loadingState===m.Gu.IDLE||e.loadingState===m.Gu.PENDING||e.playlists.length>0},get isNotFound(){let t=e.loadingState===m.Gu.RESOLVE&&!this.hasAlbums&&!this.hasArtists&&!this.hasPlaylists,i=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===m.Gu.REJECT&&i||t}})).actions(e=>({getData:(0,s.ls)(function*(t){let{id:i}=t,{metatagsResource:a,modelActionsLogger:n}=(0,s.dU)(e);if(e.loadingState!==m.Gu.PENDING)try{e.loadingState=m.Gu.PENDING;let t=yield a.getMetatagById({id:i});e.id=t.id,e.fullTitle=t.title.fullTitle,e.artists=(0,s.pj)(t.artists.map(c.d)),e.albums=(0,s.pj)(t.albums.map(u.ym)),e.playlists=(0,s.pj)(t.playlists.map(d.Q9)),e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.RESOLVE)}catch(t){n.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==m.Gu.IDLE&&(e.loadingState=m.Gu.REJECT)}}),reset(){e.loadingState=m.Gu.IDLE,e.fullTitle=null,e.artists=(0,s.pj)([]),e.albums=(0,s.pj)([]),e.playlists=(0,s.pj)([])}}))},23948:function(e,t,i){"use strict";i.d(t,{T:function(){return a.NotFound}});var a=i(8964)},8964:function(e,t,i){"use strict";i.d(t,{NotFound:function(){return p}});var a=i(9753),n=i(60836),l=i(9544),r=i(31014),s=i(39513),o=i(28852),u=i(2570),d=i(55784),c=i(44367),m=i(23067),g=i.n(m);let p=(0,l.Pi)(e=>{let{className:t}=e,{contentRef:i}=(0,c.$Y)(),l=(0,c.s0)("/");return(0,c.ZP)(!0),(0,a.jsxs)("div",{className:(0,n.W)(g().root,{[g().root_desktop]:!i},t),children:[(0,a.jsx)(d.n,{withBackwardFallback:"/",className:g().navigation,withForwardControl:!1}),(0,a.jsxs)("div",{className:g().content,children:[(0,a.jsx)(o.J,{className:g().icon,variant:"musicLogo",size:"xxl"}),(0,a.jsx)(u.Heading,{className:(0,n.W)(g().title,g().important),variant:"h3",size:"xs",children:(0,a.jsx)(r.Z,{id:"page-error.page-does-not-exist"})}),(0,a.jsx)(u.Caption,{className:(0,n.W)(g().text,g().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,a.jsx)(r.Z,{id:"page-error.page-does-not-exist-description"})}),(0,a.jsx)(s.z,{onClick:l,className:g().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,a.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,a.jsx)(r.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(e,t,i){"use strict";i.d(t,{D:function(){return a.SomethingWentWrong}});var a=i(18723)},18723:function(e,t,i){"use strict";i.d(t,{SomethingWentWrong:function(){return v}});var a=i(9753),n=i(60836),l=i(9544),r=i(98639),s=i(31014),o=i(39513),u=i(28852),d=i(2570),c=i(55784),m=i(44367),g=i(88178),p=i.n(g);let v=(0,l.Pi)(e=>{let{className:t,withBackwardControl:i=!0}=e,l=(0,r.useCallback)(()=>{window.location.href="/"},[]),{contentRef:g}=(0,m.$Y)();return(0,a.jsxs)("div",{className:(0,n.W)(p().root,t),children:[i&&(0,a.jsx)(c.n,{withBackwardFallback:"/",className:(0,n.W)(p().navigation,{[p().navigation_desktop]:!g}),withForwardControl:!1}),(0,a.jsxs)("div",{className:(0,n.W)(p().content,{[p().content_shrink]:!i}),children:[(0,a.jsx)(u.J,{className:p().icon,variant:"attention",size:"xxl"}),(0,a.jsx)(d.Heading,{className:(0,n.W)(p().title,p().important),variant:"h3",size:"xs",children:(0,a.jsx)(s.Z,{id:"error-messages.something-went-wrong"})}),(0,a.jsxs)(d.Caption,{className:(0,n.W)(p().text,p().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,a.jsx)(s.Z,{id:"page-error.try-to-restart-app"})]}),(0,a.jsx)(o.z,{onClick:l,className:p().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,a.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,a.jsx)(s.Z,{id:"page-error.restart-app-button"})]})})]})]})})},62914:function(e){e.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",control:"ArtistCard_control___qv5j"}},98746:function(e){e.exports={root:"EmptyPlaylistBlock_root__wpA0j",iconBackground:"EmptyPlaylistBlock_iconBackground__pnUlz",title:"EmptyPlaylistBlock_title__pQQLf",subtitle:"EmptyPlaylistBlock_subtitle__P4Q7x"}},88308:function(e){e.exports={root:"PlaylistCard_root__i3pR4",controls:"PlaylistCard_controls__Ej8Rz",cover:"PlaylistCard_cover__tpK5L",coverBlock:"PlaylistCard_coverBlock__1slsN",image:"PlaylistCard_image__Li6oy",titleLink:"PlaylistCard_titleLink__H8qEc",artists:"PlaylistCard_artists__HtVIF",artistLink:"PlaylistCard_artistLink__jx3KB",playButton:"PlaylistCard_playButton__eaduk",likeButton:"PlaylistCard_likeButton__RYXJz",menuButton:"PlaylistCard_menuButton__jFcWr",pinButton:"PlaylistCard_pinButton__jhWnL",control:"PlaylistCard_control__73YUq"}},23067:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(e){e.O(0,[5675,7169,6113,5725,5107,2498,7873,7403,3621,4367,7868,3196,4901,3490,1055,154,2171,361,1744],function(){return e(e.s=72301)}),_N_E=e.O()}]);
