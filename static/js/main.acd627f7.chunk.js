(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(45)},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(21),n=a.n(l),s=a(11),c=a(6),o=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),h=a(17),p=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(d.a)(a,2),n=l[0],s=l[1],c=Object(i.useState)([]),o=Object(d.a)(c,2),m=o[0],u=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var b=p,f=a(13),E=a(1),g=a.n(E),N=a(7),w=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:p,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,y=function(e){var t=e.className,i=Object(o.a)(e,["className"]),l=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(O,{src:a(34),alt:"Open",width:32,height:32}))))},j=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),h=v[0],p=v[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",O),document.addEventListener("click",j),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",j),w()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){h&&27===e.keyCode&&w()},j=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&w()},x=g()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:x}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(y,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?w:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:g()("header-nav",h&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:w},"Our Services"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Contact Us")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=j,D=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"About us")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"FAQ's")),r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0"},"Support"))))},C=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://google.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(o.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(y,null),r.a.createElement(C,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(D,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://github.com/RishiRajAnand"},"Baymax"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var H=k,A=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(H,null))},S=a(5),L={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},I={types:Object(S.a)({},L.types),defaults:Object(S.a)({},L.defaults)},P={types:Object(S.a)({},L.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(S.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},F={types:Object(S.a)({},L.types,{pushLeft:v.a.bool}),defaults:Object(S.a)({},L.defaults,{pushLeft:!1})},B=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},T=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var M=T,R=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},h=function(e){e.stopPropagation()},p=g()("modal",n&&"is-active",c&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:p,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:h},c?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:c})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};R.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=Object(S.a)({},I.defaults),U=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),h=Object(d.a)(v,2),p=(h[0],h[1],g()("hero section center-content",a&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t)),b=g()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},u,{className:p}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:b},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"AyushVeda Emergency Hospital ",r.a.createElement("span",{className:"text-color-primary"})),r.a.createElement("h4",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"A Multi Speciality Hospital"),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"ICU, NICU, PICU, BURN, NEURO SURGERY, ORTHO & TRAUMA"),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(B,null,r.a.createElement(M,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Explore Services"),r.a.createElement(M,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"Book Appointment"))))))))};U.defaultProps=z;var W=U,_=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(o.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(c,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};_.defaultProps={children:null,tag:"h2"};var q=_,V=Object(S.a)({},F.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),p=g()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:h},r.a.createElement(q,{data:{title:"About Us",paragraph:"As country\u2019s leading multispecialty health care facilities, AyushVeda Emergency Hospital has a well-earned reputation of being the pioneer of healthcare in India. Established in 2018, Apollo Hospitals has touched millions of lives, providing the best care and treatment for simple to most complicated diseases and conditions to the community. Combining the best available technology, medical expertise and equipment, we are redefining healthcare excellence to ensure all our patients receive comprehensive and integrated service with utmost compassion, support and care."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Most Advanced Healthcare Technology"),r.a.createElement("p",{className:"m-0 text-sm"},"Apollo Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Best Clinical Outcomes"),r.a.createElement("p",{className:"m-0 text-sm"},"Leveraging its vast medical expertise & technological advantage, Apollo Hospitals has consistently delivered best in class clinical outcomes.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"World class doctors and experts"),r.a.createElement("p",{className:"m-0 text-sm"},"Largest network of the world\u2019s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(38),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"ICU Service"),r.a.createElement("p",{className:"m-0 text-sm"},"ICU Service With All Required Infrastructure")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(39),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Emergency services"),r.a.createElement("p",{className:"m-0 text-sm"},"24 Hours Emergency Service")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(O,{src:a(40),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Surgical Services"),r.a.createElement("p",{className:"m-0 text-sm"},"Surgical Services With All Required Infrastructure"))))))))};K.defaultProps=V;var G=K,J=Object(S.a)({},P.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=g()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},p,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(q,{data:{title:"Why Choose Us",paragraph:"The AyushVeda Emergency Hospital are regarded as one of the best hospitals in India, performing a multitude of treatments and procedures."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("h3",{className:"mt-0 mb-12"},"24 X 7 Emergency Care"),r.a.createElement("p",{className:"m-0"},"Emergencies can happen anytime, at Specialist Hospital, we have ensured that we are available for you during those times. Our state of the art equipments, highly trained doctors specialised in trauma care are able to respond to emergency in a scientific and safe way.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(O,{src:a(41),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("h3",{className:"mt-0 mb-12"},"ICU availabilty"),r.a.createElement("p",{className:"m-0"},"We care for all emergencies.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(O,{src:a(42),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("h3",{className:"mt-0 mb-12"},"Experienced and Dedicated Nurses"),r.a.createElement("p",{className:"m-0"},"Whether the patient is catheterised or requires assistance in feeding or is recovering from accidental wounds or surgical incisions; our nursing care services in Hyderabad and Bangalore are comprehensive. The nurses have knowledge on how to manage and care for patients who suffer from all kinds of ailments")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(O,{src:a(43),alt:"Features split 03",width:528,height:396})))))))};Y.defaultProps=J;var Q=Y,X=Object(S.a)({},F.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(q,{data:{title:"Patient testimonials",paragraph:"We regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility."},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of AyushVeda Emergency Hospital, especially to your outstanding nurses and PCAs. They have been outstandingly helpful and provided a high quality of service, care and comfort to my wife. Thank you.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Kamlesh Kumar"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Buxar"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"I am writing to express my gratitude from my family for the care given to my mother. In the SICU, there was care, compassion, and respect. A special thank you to your social workers as well; they provided professional guidance, comfort, and strength to make our own decisions. Finally, I cannot praise the Palliative Care and Hospice team enough. They were patient and helpful. All our hope that you continue along this path.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Nikhil Kumar Shukla"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Patna"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"I recently had a nine day stay at Jamaica Hospital and I wanted to express how impressed I was with the level of care I received from everyone I encountered. The Trauma Center saved my life! I found it amazing and I am grateful that it services my community.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Dheeraj Kumar"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Patna")))))))))};$.defaultProps=X;var Z=$,ee=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(o.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};ee.defaultProps={children:null,labelHidden:!1,id:null};var te=ee,ae=function(e){var t=e.children,a=e.className,i=e.status,l=Object(o.a)(e,["children","className","status"]),n=g()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};ae.defaultProps={children:null,status:!1};var ie=ae,re=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,c=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(o.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=g()("form-input",h&&"form-input-".concat(h),c&&"form-".concat(c),t),O="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(te,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:N},r.a.createElement(O,Object.assign({},E,{type:"textarea"!==n?n:null,className:w,name:s,disabled:m,value:d,placeholder:p,rows:"textarea"===n?b:null})),a),f&&r.a.createElement(ie,{status:c},f))};re.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var le=re,ne=Object(S.a)({},I.defaults,{split:!1}),se=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"We'll love to reach out to you")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(le,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};se.defaultProps=ne;var ce=se,oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{className:"illustration-section-01"}),r.a.createElement(G,null),r.a.createElement(Q,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(Z,{topDivider:!0}),r.a.createElement(ce,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var me=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(b,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(m,{exact:!0,path:"/",component:oe,layout:A}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var de=Object(c.a)();n.a.render(r.a.createElement(s.b,{history:de},r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.acd627f7.chunk.js.map