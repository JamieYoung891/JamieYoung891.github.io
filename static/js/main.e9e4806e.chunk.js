(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{164:function(e,t,a){e.exports=a(393)},169:function(e,t,a){},185:function(e,t){},187:function(e,t){},219:function(e,t){},220:function(e,t){},264:function(e,t){},266:function(e,t){},289:function(e,t){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(162),l=a.n(s),r=(a(169),a(18)),o=a(163),i=a.n(o),m=a(51),u=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),l=Object(r.a)(s,2),o=l[0],u=l[1],d=Object(n.useState)(0),f=Object(r.a)(d,2),v=f[0],p=f[1];return Object(n.useEffect)((function(){var e=m.contents,t=m.componentData,a=m.layout,n=m.dataKey,s=Object.keys(n).length;u(s);var l={contents:e,componentData:t,layout:a},r=0,o=function(e){var t=n[e];i.a.init({key:t,simpleSheet:!1,callback:function(t){!function(e,t){var a={};Object.keys(t).forEach((function(e){return a[e]=t[e].elements})),l[e]=a,p(++r)}(e,t)}})};for(var d in n)o(d);c(l)}),[]),{data:a,loadInfo:{loadDataNum:o,loadedDataNum:v,isDataReady:o&&o===v}}};a(380),a(381);var d=function(e){var t=e.data,a=t.loadDataNum,s=t.loadedDataNum,l=Object(n.useState)("load-indicator position-center"),o=Object(r.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){a&&a===s&&(m((function(e){return"".concat(e," fade-out")})),setTimeout((function(){m((function(e){return"".concat(e," display-none")}))}),1500))}),[a,s]),c.a.createElement("section",{id:"load-indicator",className:i},c.a.createElement("div",{className:"load-indicator-wrapper fade-in"},c.a.createElement("progress",{className:"load-indicator-progress",max:a,value:s}),c.a.createElement("div",{className:"load-indicator-text"},function(){var e=Math.floor(s/a*100);return e||0}()+"%")))},f=function(){var e=document.getElementsByClassName("jamie-who-nav")[0];e&&e.classList.toggle("nav-show")};a(382);var v=function(e){var t=e.data,a=t.contents,n=t.info,s=t.contentMode,l=t.setContentMode,r=n.website[0];return c.a.createElement("header",{className:"jamie-who-header "+("intro"===s?"header-special fade-in":"header-normal")},c.a.createElement("div",{className:"jamie-who-header-wrapper"},c.a.createElement("div",{onClick:"intro"===s?null:f,className:"header-title "+("intro"===s?"text-heading":"jamie-who-logo button")},c.a.createElement("span",null,"intro"===s?r.title:"J")),c.a.createElement("div",{className:"header-dscrp"},r.description),function(){if("intro"===s){var e=[];return a.forEach((function(t){return e.push(c.a.createElement("li",{key:"header_nav_"+t.name,className:"header-nav-item button "+t.name,onClick:function(){var e=document.getElementsByClassName("jamie-who-header-wrapper")[0];e.classList.add("fade-out"),setTimeout((function(){e.classList.remove("fade-out"),l(t.name)}),1300)}},t.title))})),c.a.createElement("nav",{className:"header-nav fade-in"},c.a.createElement("ul",{className:"header-nav-list"},e))}}()))},p=function(e,t){if("portfolio"!==t){var a=document.getElementsByClassName("nav-sub-contents")[0];a.childElementCount>0&&function(){for(var n=a.children,c=document.getElementsByClassName("jamie-who-content")[0].children,s=function(a){var s=function(){return c[a].getBoundingClientRect()};"portfolio"!==t&&s().top<=window.innerHeight/5&&s().bottom>window.innerHeight/5?n[a].classList.contains(e)||n[a].classList.add(e):"portfolio"!==t&&n[a].classList.contains(e)&&n[a].classList.remove(e)},l=0;l<n.length;l++)s(l)}()}};a(383),a(384);var E=function(e){var t=e.data,a=t.contentMode,s=t.setContentMode,l=t.contents,r=t.content,o=t.itemNum,i=t.setItemNum,m=document.getElementById("root"),u={trigger:{hide:"nav-hide",indicate:"nav-indicate",mainCurrent:"nav-main-current",subCurrent:"nav-sub-current"},set:{list:function(e){return e?"nav-sub-contents":"nav-main-contents"},item:function(e,t,n){var c,s=u.trigger;return e?c="nav-sub-item button nav-sub-item-"+t:(c="nav-main-item button nav-main-item-"+t,n===a&&(c+=" "+s.mainCurrent)),c},nav:function(){var e=u.trigger;switch(a){case"intro":case"contacts":return e.hide;default:return e.indicate}}}},d=function(e){s(e),f(),document.getElementById("root").scrollTo(0,0)},v=function(e){var t,n=[];if(e&&!r);else{t=e?r.index:l;for(var s=function(s){var l=t[s];n.push(c.a.createElement("li",{key:s,className:u.set.item(e,s,l.name),onClick:e?function(){return function(e){switch(a){case"portfolio":for(var t=0;t<r.index.length;t++)r.index[t].name===e&&i(Object.assign({},o,{portfolio:t}));break;default:var n=document.getElementsByClassName("section-".concat(e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))));n.length&&m.scrollTo(0,n[0].getBoundingClientRect().top+m.scrollTop)}document.getElementsByClassName("jamie-who-nav")[0].classList.contains("nav-show")&&f()}(l.name)}:function(){return d(l.name)}},c.a.createElement("div",{className:"item-text"},l.title)))},v=0;v<t.length;v++)s(v)}return c.a.createElement("ul",{className:u.set.list(e)},n)};return Object(n.useEffect)((function(){var e=document.getElementById("root"),t=function(){return p(u.trigger.subCurrent,a)};return e.addEventListener("scroll",t),function(){e.removeEventListener("scroll",t)}}),[a,u.trigger.subCurrent]),Object(n.useEffect)((function(){if("portfolio"===a)for(var e=document.getElementsByClassName("nav-sub-contents")[0].children,t=u.trigger.subCurrent,n=0;n<e.length;n++)o.portfolio===n?e[n].classList.contains(t)||e[n].classList.add(t):e[n].classList.contains(t)&&e[n].classList.remove(t)}),[a,o,u.trigger.subCurrent]),Object(n.useEffect)((function(){var e=document.getElementsByClassName("nav-sub-contents")[0];if(0!==e.childElementCount&&"portfolio"!==a)for(var t=e.children,n=u.trigger.subCurrent,c=0;c<t.length;c++)0===c?t[c].classList.contains(n)||t[c].classList.add(n):t[c].classList.contains(n)&&t[c].classList.remove(n)}),[u.trigger.subCurrent,a]),c.a.createElement("nav",{className:"jamie-who-nav fade-in "+u.set.nav()},c.a.createElement("section",{className:"nav-wrapper"},c.a.createElement("div",{className:"nav-logo jamie-who-logo button",onClick:function(){return d("intro")}},c.a.createElement("span",{className:"nav-logo-txt"},"J")),v(a),v(),c.a.createElement("div",{className:"nav-close close-button",onClick:f})))};a(385);var N=function(e){var t=e.data,a=function(e){var a=[],n=t.filter((function(t){return t.category===e}));if(n)for(var s=0;s<n.length;s++){var l=n[s],r="slogan-".concat(e," ").concat(e,"-").concat(s);a.push(c.a.createElement("span",{key:s,className:r},c.a.createElement("em",null,l.em),l.coda)),s!==n.length-1&&a.push(c.a.createElement("span",{key:"spacer"+s,className:"slogan-spacer"}," "))}return c.a.createElement("div",{key:e,className:"footer-slogan-"+e},c.a.createElement("span",{className:"slogan-text"},a),c.a.createElement("span",{className:"slogan-filler"}))};return c.a.createElement("section",{className:"footer-slogan"},a("main"),a("sub"),a("theme"))};a(386);var h=function(e){var t=e.data.info,a=t.contact,n=t.developer,s=t.slogan;return c.a.createElement("footer",{className:"jamie-who-footer"},c.a.createElement(N,{data:s}),c.a.createElement("section",{className:"footer-info"},c.a.createElement("div",{className:"footer-info-wrapper"},c.a.createElement("div",{className:"info-copyright"},"\xa9 2019 ",c.a.createElement("span",{className:"copyright-owner"},n[0].nameEn),", All Rights Reserved."),c.a.createElement("div",{className:"info-developer"},c.a.createElement("span",{className:"developer-name"},n[0].nameEn),c.a.createElement("span",{className:"developer-title"},n[0].titleEn.toLowerCase())),c.a.createElement("div",{className:"info-contact"},function(){for(var e=[],t=0;t<a.length;t++){var n=a[t],s="contact-"+t;e.push(c.a.createElement("a",{key:s,className:s+" contact-item contact-item-"+n.name.toLowerCase(),href:n.address},c.a.createElement("span",null,n.title)))}return e}()))))};a(387);var g=function(e){var t=e.data,a=t.info,n=t.portfolio,s=t.resume,l=t.skills,r=t.itemNum,o=t.setItemNum;return c.a.createElement("article",{className:"jamie-who-content content-resume fade-in"},c.a.createElement("section",{className:"resume-developer section-jamie-young"},c.a.createElement("div",{className:"resume-developer-wrapper"},c.a.createElement("div",{className:"developer-div-image",style:{backgroundImage:"url(".concat(a.developer[0].imgURL,")")}}),c.a.createElement("div",{className:"developer-div-info"},c.a.createElement("span",{className:"developer-info-name"},a.developer[0].nameKr,c.a.createElement("span",null,a.developer[0].nameEn)),c.a.createElement("span",{className:"developer-info-title"},a.developer[0].titleEn.toLowerCase())),c.a.createElement("div",{className:"developer-div-contact"},function(){for(var e=[],t=a.contact,n=0;n<t.length;n++){var s=t[n];e.push(c.a.createElement("a",{key:"contact-"+n,className:"developer-contact-item developer-contact-"+s.name.toLowerCase(),rel:"noopener noreferrer",target:"_blank",href:s.prefix+s.address},c.a.createElement("span",null,s.title)))}return e}()))),function(){for(var e=s.index,t=[],a=function(e){var t=[],a=e.name.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}));return function(){switch(e.name){case"sideProjects":for(var i=n.info,m=0;m<i.length;m++){var u=i[m];t.push(c.a.createElement("div",{key:"".concat(a,"-").concat(m),className:"list-item list-item-".concat(a)},c.a.createElement("dt",null,c.a.createElement("span",null,u.title),c.a.createElement("span",null,u.desc)),c.a.createElement("dd",null,c.a.createElement("ul",null,c.a.createElement("li",null,u.detail),""!==u.skills?c.a.createElement("li",{dangerouslySetInnerHTML:{__html:u.skills}}):""))))}break;case"technicalSkills":for(var d=l.index,f=["Client-Side","Server-Side","Development-Tool"],v=function(e){for(var n=d.filter((function(t){return t.subCategory===f[e]})),s=[],l=function(t){var l=n[t];s.push(c.a.createElement("li",{key:"".concat(a,"-").concat(e,"-").concat(t),onClick:function(){return o(Object.assign({},r,{skills:l.name}))},className:"button"},l.em?c.a.createElement("em",null,l.title):l.title))},i=0;i<n.length;i++)l(i);t.push(c.a.createElement("li",{key:"".concat(a,"-").concat(e),className:"list-item list-item-".concat(a)},c.a.createElement("div",{className:"sublist-title"},f[e]),c.a.createElement("ul",null,s)))},p=0;p<f.length;p++)v(p);break;default:for(var E=s.data.filter((function(t){return t.category===e.name})),N=0;N<E.length;N++){var h=E[N],g=[];h.desc.includes(", ")?g=h.desc.split(", "):g.push(h.desc);for(var k=0;k<g.length;k++)g[k]=c.a.createElement("span",{key:k},g[k]);t.push(c.a.createElement("li",{key:"".concat(a,"-").concat(N),className:"list-item list-item-".concat(a)},c.a.createElement("div",{className:"list-item-title"},c.a.createElement("span",null,h.subCategory)),c.a.createElement("div",{className:"list-item-desc"},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:h.title}}),g)))}}}(),c.a.createElement("section",{key:a,className:"resume-section section-".concat(a)},c.a.createElement("div",{className:"resume-section-wrapper section-".concat(a,"-wrapper")},c.a.createElement("div",{className:"section-list-title list-".concat(a,"-title")},c.a.createElement("span",null,e.titleKr),c.a.createElement("span",null,e.name)),c.a.createElement("ul",{className:"section-list list-".concat(a)},t)))},i=1;i<e.length;i++)t.push(a(e[i]));return t}())},k=(a(388),a(389),function(e){e&&e.classList.toggle("hidden-right")});var b=function(e){var t=e.data,a=e.itemNum,n=e.setItemNum,s=t.info[a],l=function(e,t){for(var a=e.split("\n"),n=0;n<a.length;n++)a[n]=c.a.createElement("li",{key:"".concat(t,"-").concat(n),className:"list-item"},a[n]);return a},r=l(s.circumstances,"circumstances"),o=l(s.solutions,"solutions");return c.a.createElement("section",{className:"jamie-who-portfolio-item show-right hidden-right"},c.a.createElement("div",{className:"jamie-who-portfolio-item-title"},c.a.createElement("div",{className:"name"},s.title),c.a.createElement("div",{className:"desc"},s.desc),""===s.url?null:c.a.createElement("div",null,c.a.createElement("a",{href:"/".concat(s.url),target:"_blank"},c.a.createElement("span",{className:"outer-link"})))),c.a.createElement("div",{className:"jamie-who-portfolio-item-desc"},c.a.createElement("div",{className:"circumstances"},c.a.createElement("div",{className:"title"},"circumstances"),c.a.createElement("ul",{className:"list"},r)),c.a.createElement("div",{className:"solutions"},c.a.createElement("div",{className:"title"},"solutions"),c.a.createElement("ul",{className:"list"},o)),c.a.createElement("div",{className:"narrative"})),c.a.createElement("div",{className:"jamie-who-portfolio-item-nav"},a>0?c.a.createElement("div",{className:"before button",onClick:function(){return n(a-1)}}):null,a<t.info.length-1?c.a.createElement("div",{className:"after button",onClick:function(){return n(a+1)}}):null),c.a.createElement("div",{className:"close-button",onClick:function(){return k(document.getElementsByClassName("jamie-who-portfolio-item")[0])}}))};var y=function(e){var t,a=e.data,n=a.itemNum,s=a.setItemNum,l=a.portfolio,r=l.info;return c.a.createElement("article",{className:"jamie-who-content content-portfolio fade-in"},function(){for(var e=[],t=function(t){e.push(c.a.createElement("li",{key:"button-".concat(t),className:"portfolio-item button ".concat(n.portfolio===t?"ticked":"unticked"),onClick:function(){return s(Object.assign({},n,{portfolio:t}))}}))},a=0;a<r.length;a++)t(a);return c.a.createElement("ul",{className:"portfolio-buttons"},e)}(),(t=r[n.portfolio],c.a.createElement("section",{className:"portfolio-template"},c.a.createElement("div",{className:"portfolio-template-img button",onClick:function(){return k(document.getElementsByClassName("jamie-who-portfolio-item")[0])}}),c.a.createElement("div",{className:"portfolio-template-text"},c.a.createElement("div",{className:"portfolio-template-text-heading"},c.a.createElement("div",{className:"portfolio-template-heading-title"},t.title,""===t.url?null:c.a.createElement("a",{href:"/".concat(t.url),target:"_blank"},c.a.createElement("span",{className:"outer-link"}))),c.a.createElement("div",{className:"portfolio-template-heading-desc"},t.desc)),c.a.createElement("div",{className:"portfolio-template-text-content"},c.a.createElement("div",{className:"portfolio-template-content-detail"},t.detail),""!==t.skills?c.a.createElement("div",{className:"portfolio-template-content-skills",dangerouslySetInnerHTML:{__html:t.skills}}):null)))),c.a.createElement(b,{data:l,itemNum:n.portfolio,setItemNum:s}))};a(390);var w=function(e){var t=e.data,a=t.narrative,n=t.skills,s=t.itemNum,l=t.setItemNum;return c.a.createElement("article",{className:"jamie-who-content content-narrative fade-in"},function(){for(var e=a.index,r=[],o=function(e){for(var t=[],r=e.name.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())})),o=a.narrative.filter((function(t){return t.section===e.name})),i=function(e){var a=o[e];if(a.isList)!function(){for(var o=n.index.filter((function(e){return e.category===a.sentence})),i=[],m=function(e){i[e]=c.a.createElement("li",{key:"".concat(a.sentence,"-").concat(e),className:"narrative-section-skills-list-item skills-list-item button",onClick:function(){return l(Object.assign({},s,{skills:o[e].name}))}},o[e].em?c.a.createElement("em",null,o[e].title):c.a.createElement("span",null,o[e].title))},u=0;u<o.length;u++)m(u);t.push(c.a.createElement("ul",{key:"".concat(r,"-").concat(e),className:"narrative-section-item narrative-section-skills-list ".concat(a.sentence,"-skills-list")},i))}();else{var i=[];a.sentence.includes("\n")?i=a.sentence.split("\n"):i.push(a.sentence);for(var m=0;m<i.length;m++)if(i[m].includes('"')){var u=i[m].split('"');i[m]=c.a.createElement("span",{key:m},u[0],c.a.createElement("em",null,u[1]),u[2])}else i[m]=c.a.createElement("span",{key:m},i[m]);t.push(c.a.createElement("div",{key:"".concat(r,"-").concat(e),className:"narrative-section-item ".concat(a.className)},i))}},m=0;m<o.length;m++)i(m);return c.a.createElement("section",{key:r,className:"narrative-section section-".concat(r)},c.a.createElement("div",{className:"narrative-section-signpost"},c.a.createElement("div",{className:"narrative-section-signpost-text"},e.title)),c.a.createElement("div",{className:"narrative-section-wrapper"},t))},i=0;i<e.length;i++)r.push(o(e[i]));return r.push(c.a.createElement(y,{key:"portfolio",data:t})),r}())};a(391);function C(e){var t=e.data.info.contact;return c.a.createElement("article",{className:"jamie-who-content content-contacts fade-in"},c.a.createElement("section",{className:"contacts-title-section"},c.a.createElement("div",{className:"contacts-info-section-wrapper"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"title-text"},"\uc2dc\uac04\uc744 \ub0b4\uc5b4 \uc8fc\uc154\uc11c",c.a.createElement("em",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4!"))))),c.a.createElement("section",{className:"contacts-info-section"},c.a.createElement("div",{className:"contacts-info-section-wrapper"},function(){for(var e=[],a=0;a<t.length;a++){var n=t[a],s="contacts-info-list-item-".concat(a);e.push(c.a.createElement("li",{key:s,className:"contacts-info-list-item ".concat(s)},c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:n.prefix+n.address},c.a.createElement("span",{className:"item-info"},n.address))))}return c.a.createElement("ul",{className:"contacts-info-list"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"title-text"},"contacts")),e)}())))}var j=function(e,t){var a=function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(c.a.createElement("li",{key:a,className:"list-item"},c.a.createElement("span",{className:"date"},n.date),c.a.createElement("span",{className:"title"},n.title),c.a.createElement("span",{className:"institution"},n.institution)))}return t}(function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],c=Date.parse(n.date);if(a>0)for(var s=0;s<a;s++){if(Date.parse(t[s].date)<c){t.splice(s,0,n);break}a-1===s&&t.push(n)}else t.push(n)}return t}(t));if(0!==a.length)return c.a.createElement("div",{className:"description-div ".concat(e.toLowerCase())},c.a.createElement("h3",{className:"title"},e),c.a.createElement("ul",{className:"list"},a))};a(392);function L(e){var t=e.data,a=t.skills,n=a.index,s=a.education,l=t.itemNum,r=t.setItemNum,o=n.filter((function(e){return e.name===l.skills}))[0],i=s.filter((function(e){return e.skill===l.skills})),m=j("Education",i),u=function(e,t){return t?e?e[t]:null:e||null};return c.a.createElement("article",{id:"technical-skills-description",className:"jamie-who-description technical-skills-description ".concat(o?"description-show":"description-hide")},c.a.createElement("div",{className:"wrapper"},c.a.createElement("section",{className:"title"},c.a.createElement("div",{className:"title"},u(o,"title")),c.a.createElement("div",{className:"category"},u(o,"category")),o?""===o.subCategory?null:c.a.createElement("div",{className:"sub-category"},o.subCategory.toLowerCase()):null),c.a.createElement("section",{className:"comment"},u(o,"comment")),c.a.createElement("section",{className:"description"},u(m)),c.a.createElement("div",{className:"close-button",onClick:function(){document.getElementById("technical-skills-description").classList.replace("description-show","description-hide"),setTimeout((function(){r(Object.assign({},l,{skills:!1}))}),500)}})))}var O=function(e){var t=Object(n.useState)("intro"),a=Object(r.a)(t,2),s=a[0],l=a[1],o=u(),i=o.data,m=o.loadInfo,f=Object(n.useState)({portfolio:0,skills:!1}),p=Object(r.a)(f,2),N=p[0],k=p[1];return c.a.createElement("div",{className:"jamie-who"},c.a.createElement(d,{data:m}),function(){if(m.isDataReady){var e=[],t=[];return"intro"===s?e.push("header"):"contacts"===s?Object.assign(e,["header","nav","content"]):Object.assign(e,i.layout),e.forEach((function(a){"content"===a&&(a=s);for(var n={},r=i.componentData[a],o=0;o<r.length;o++){var m=!1,u=r[o];switch(u){case"contentMode":m=s;break;case"setContentMode":m=l;break;case"itemNum":m=N;break;case"setItemNum":m=k;break;case"content":if(!i[s])break;m=i[s];break;default:m=i[u]}n[u]=m}switch(a){case"header":t.push(c.a.createElement(v,{key:a,data:n}));break;case"nav":t.push(c.a.createElement(E,{key:a,data:n}));break;case"footer":t.push(c.a.createElement(h,{key:a,data:n}));break;case"intro":break;case"resume":t.push(c.a.createElement(g,{key:s,data:n}));break;case"portfolio":t.push(c.a.createElement(y,{key:s,data:n}));break;case"narrative":t.push(c.a.createElement(w,{key:s,data:n}));break;case"contacts":t.push(c.a.createElement(C,{key:s,data:n}));break;case"skillsDescription":t.push(c.a.createElement(L,{key:e,data:n}))}})),t}}())};var I=function(){var e=Object(n.useState)("JamieWho"),t=Object(r.a)(e,2),a=t[0],s=t[1];return function(e){switch(e){case"JamieWho":return c.a.createElement(O,{setAppMode:s});default:return null}}(a)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e){e.exports=JSON.parse('{"dataKey":{"info":"1QyN6ObNJWxUukoGc_zy_FkjuWKKE656JW4HGsk1L4Pc","resume":"11MxX_AUm6muovkobVb0BhsWlFs5BANi2XNsdITYHvW8","skills":"179EZYW-v8GNDRHCfYnLbN_lZSlRebj3kwtmzmBKjmNE","portfolio":"1oYPYrTDTU454ywq1qY2cl-VFU4EvTsNgq9GfMYMF2hQ","narrative":"1GE9h7z614wH6zjGVhy8oWaHN4-UGkQTCaqDLAVcXJHM"},"contents":[{"name":"resume","title":"\uc774\ub825\uc11c"},{"name":"portfolio","title":"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"},{"name":"narrative","title":"\uc774\uc57c\uae30"},{"name":"contacts","title":"\uc5f0\ub77d\ucc98"}],"layout":["header","nav","content","footer","skillsDescription"],"componentData":{"loadIndicator":["loadInfo"],"header":["info","contents","contentMode","setContentMode"],"nav":["contents","content","contentMode","setContentMode","itemNum","setItemNum"],"footer":["info"],"resume":["resume","info","portfolio","skills","itemNum","setItemNum"],"portfolio":["portfolio","itemNum","setItemNum"],"narrative":["narrative","skills","portfolio","itemNum","setItemNum"],"contacts":["info"],"skillsDescription":["itemNum","setItemNum","skills","portfolio"]}}')}},[[164,1,2]]]);
//# sourceMappingURL=main.e9e4806e.chunk.js.map