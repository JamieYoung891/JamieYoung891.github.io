(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{164:function(e,t,a){e.exports=a(392)},169:function(e,t,a){},185:function(e,t){},187:function(e,t){},219:function(e,t){},220:function(e,t){},264:function(e,t){},266:function(e,t){},289:function(e,t){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(162),r=a.n(o),l=(a(169),a(18)),s=a(163),i=a.n(s),m=a(51),u=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),r=Object(l.a)(o,2),s=r[0],u=r[1],d=Object(n.useState)(0),f=Object(l.a)(d,2),v=f[0],p=f[1];return Object(n.useEffect)((function(){var e=m.contents,t=m.componentData,a=m.layout,n=m.dataKey,o=Object.keys(n).length;u(o);var r={contents:e,componentData:t,layout:a},l=0,s=function(e){var t=n[e];i.a.init({key:t,simpleSheet:!1,callback:function(t){!function(e,t){var a={};Object.keys(t).forEach((function(e){return a[e]=t[e].elements})),r[e]=a,p(++l)}(e,t)}})};for(var d in n)s(d);c(r)}),[]),{data:a,loadInfo:{loadDataNum:s,loadedDataNum:v,isDataReady:s&&s===v}}};a(380),a(381);var d=function(e){var t=e.data,a=t.loadDataNum,o=t.loadedDataNum,r=Object(n.useState)("load-indicator position-center"),s=Object(l.a)(r,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){a&&a===o&&(m((function(e){return"".concat(e," fade-out")})),setTimeout((function(){m((function(e){return"".concat(e," display-none")}))}),1500))}),[a,o]),c.a.createElement("section",{id:"load-indicator",className:i},c.a.createElement("div",{className:"load-indicator-wrapper fade-in"},c.a.createElement("progress",{className:"load-indicator-progress",max:a,value:o}),c.a.createElement("div",{className:"load-indicator-text"},function(){var e=Math.floor(o/a*100);return e||0}()+"%")))},f=function(){var e=document.getElementsByClassName("jamie-who-nav")[0];e&&e.classList.toggle("nav-show")};a(382);var v=function(e){var t=e.data,a=t.contents,n=t.info,o=t.contentMode,r=t.setContentMode,l=n.website[0];return c.a.createElement("header",{className:"jamie-who-header "+("intro"===o?"header-special fade-in":"header-normal")},c.a.createElement("div",{className:"jamie-who-header-wrapper"},c.a.createElement("div",{onClick:"intro"===o?null:f,className:"header-title "+("intro"===o?"text-heading":"jamie-who-logo button")},c.a.createElement("span",null,"intro"===o?l.title:"J")),c.a.createElement("div",{className:"header-dscrp"},l.description),function(){if("intro"===o){var e=[];return a.forEach((function(t){return e.push(c.a.createElement("li",{key:"header_nav_"+t.name,className:"header-nav-item button "+t.name,onClick:function(){var e=document.getElementsByClassName("jamie-who-header-wrapper")[0];e.classList.add("fade-out"),setTimeout((function(){e.classList.remove("fade-out"),r(t.name)}),1300)}},t.title))})),c.a.createElement("nav",{className:"header-nav fade-in"},c.a.createElement("ul",{className:"header-nav-list"},e))}}()))};a(383),a(384);var p=function(e){var t=e.data,a=t.contentMode,n=t.setContentMode,o=t.contents,r=t.content,l=t.itemNum,s=t.setItemNum,i=document.getElementById("root"),m={trigger:{hide:"nav-hide",indicate:"nav-indicate",mainCurrent:"nav-main-current",subCurrent:"nav-sub-current"},set:{list:function(e){return e?"nav-sub-contents":"nav-main-contents"},item:function(e,t,n){var c,o=m.trigger;return e?c="nav-sub-item button nav-sub-item-"+t:(c="nav-main-item button nav-main-item-"+t,n===a&&(c+=" "+o.mainCurrent)),c},nav:function(){var e=m.trigger;switch(a){case"intro":case"contacts":return e.hide;default:return e.indicate}}}},u=function(e){n(e),f(),document.getElementById("root").scrollTo(0,0)},d=function(e){var t,n=[];if(e&&!r);else{t=e?r.index:o;for(var d=function(o){var d=t[o];n.push(c.a.createElement("li",{key:o,className:m.set.item(e,o,d.name),onClick:e?function(){!function(e){switch(a){case"portfolio":for(var t=0;t<r.index.length;t++)r.index[t].name===e&&s(Object.assign({},l,{portfolio:t}));break;default:var n=document.getElementsByClassName("section-".concat(e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))));n.length&&i.scrollTo(0,n[0].getBoundingClientRect().top+i.scrollTop)}document.getElementsByClassName("jamie-who-nav")[0].classList.contains("nav-show")&&f()}(d.name)}:function(){return u(d.name)}},c.a.createElement("div",{className:"item-text"},d.title)))},v=0;v<t.length;v++)d(v)}return c.a.createElement("ul",{className:m.set.list(e)},n)};return c.a.createElement("nav",{className:"jamie-who-nav fade-in "+m.set.nav()},c.a.createElement("section",{className:"nav-wrapper"},c.a.createElement("div",{className:"nav-logo jamie-who-logo button",onClick:function(){return u("intro")}},c.a.createElement("span",{className:"nav-logo-txt"},"J")),d(a),d(),c.a.createElement("div",{className:"nav-close close-button",onClick:f})))};a(385);var E=function(e){var t=e.data,a=function(e){var a=[],n=t.filter((function(t){return t.category===e}));if(n)for(var o=0;o<n.length;o++){var r=n[o],l="slogan-".concat(e," ").concat(e,"-").concat(o);a.push(c.a.createElement("span",{key:o,className:l},c.a.createElement("em",null,r.em),r.coda)),o!==n.length-1&&a.push(c.a.createElement("span",{key:"spacer"+o,className:"slogan-spacer"}," "))}return c.a.createElement("div",{key:e,className:"footer-slogan-"+e},c.a.createElement("span",{className:"slogan-text"},a),c.a.createElement("span",{className:"slogan-filler"}))};return c.a.createElement("section",{className:"footer-slogan"},a("main"),a("sub"),a("theme"))};a(386);var N=function(e){var t=e.data.info,a=t.contact,n=t.developer,o=t.slogan;return c.a.createElement("footer",{className:"jamie-who-footer"},c.a.createElement(E,{data:o}),c.a.createElement("section",{className:"footer-info"},c.a.createElement("div",{className:"footer-info-wrapper"},c.a.createElement("div",{className:"info-copyright"},"\xa9 2019 ",c.a.createElement("span",{className:"copyright-owner"},n[0].nameEn),", All Rights Reserved."),c.a.createElement("div",{className:"info-developer"},c.a.createElement("span",{className:"developer-name"},n[0].nameEn),c.a.createElement("span",{className:"developer-title"},n[0].titleEn.toLowerCase())),c.a.createElement("div",{className:"info-contact"},function(){for(var e=[],t=0;t<a.length;t++){var n=a[t],o="contact-"+t;e.push(c.a.createElement("a",{key:o,className:o+" contact-item contact-item-"+n.name.toLowerCase(),href:n.address},c.a.createElement("span",null,n.title)))}return e}()))))};a(387);var h=function(e){var t=e.data,a=t.info,n=t.portfolio,o=t.resume,r=t.skills;return c.a.createElement("article",{className:"jamie-who-content content-resume fade-in"},c.a.createElement("section",{className:"resume-developer section-jamie-young"},c.a.createElement("div",{className:"resume-developer-wrapper"},c.a.createElement("div",{className:"developer-div-image"}),c.a.createElement("div",{className:"developer-div-info"},c.a.createElement("span",{className:"developer-info-name"},a.developer[0].nameKr,c.a.createElement("span",null,a.developer[0].nameEn)),c.a.createElement("span",{className:"developer-info-title"},a.developer[0].titleEn.toLowerCase())),c.a.createElement("div",{className:"developer-div-contact"},function(){for(var e=[],t=a.contact,n=0;n<t.length;n++){var o=t[n];e.push(c.a.createElement("a",{key:"contact-"+n,className:"developer-contact-item developer-contact-"+o.name.toLowerCase(),rel:"noopener noreferrer",target:"_blank",href:o.prefix+o.address},c.a.createElement("span",null,o.title)))}return e}()))),function(){for(var e=o.index,t=[],a=function(e){var t=[],a=e.name.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}));return function(){switch(e.name){case"sideProjects":for(var l=n.info,s=0;s<l.length;s++){var i=l[s];t.push(c.a.createElement("div",{key:"".concat(a,"-").concat(s),className:"list-item list-item-".concat(a)},c.a.createElement("dt",null,c.a.createElement("span",null,i.title),c.a.createElement("span",null,i.desc)),c.a.createElement("dd",null,c.a.createElement("ul",null,c.a.createElement("li",null,i.detail),""!==i.skills?c.a.createElement("li",{dangerouslySetInnerHTML:{__html:i.skills}}):""))))}break;case"technicalSkills":for(var m=r.index,u=["Client-Side","Server-Side","Development-Tool"],d=function(e){for(var n=m.filter((function(t){return t.subCategory===u[e]})),o=[],r=function(t){var r=n[t];o.push(c.a.createElement("li",{key:"".concat(a,"-").concat(e,"-").concat(t)},r.em?c.a.createElement("em",null,r.title):r.title))},l=0;l<n.length;l++)r(l);t.push(c.a.createElement("li",{key:"".concat(a,"-").concat(e),className:"list-item list-item-".concat(a)},c.a.createElement("div",{className:"sublist-title"},u[e]),c.a.createElement("ul",null,o)))},f=0;f<u.length;f++)d(f);break;default:for(var v=o.data.filter((function(t){return t.category===e.name})),p=0;p<v.length;p++){var E=v[p],N=[];E.desc.includes(", ")?N=E.desc.split(", "):N.push(E.desc);for(var h=0;h<N.length;h++)N[h]=c.a.createElement("span",{key:h},N[h]);t.push(c.a.createElement("li",{key:"".concat(a,"-").concat(p),className:"list-item list-item-".concat(a)},c.a.createElement("div",{className:"list-item-title"},c.a.createElement("span",null,E.subCategory)),c.a.createElement("div",{className:"list-item-desc"},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:E.title}}),N)))}}}(),c.a.createElement("section",{key:a,className:"resume-section section-".concat(a)},c.a.createElement("div",{className:"resume-section-wrapper section-".concat(a,"-wrapper")},c.a.createElement("div",{className:"section-list-title list-".concat(a,"-title")},c.a.createElement("span",null,e.titleKr),c.a.createElement("span",null,e.name)),c.a.createElement("ul",{className:"section-list list-".concat(a)},t)))},l=1;l<e.length;l++)t.push(a(e[l]));return t}())},g=(a(388),a(389),function(e){e&&e.classList.toggle("hidden-right")});var k=function(e){var t=e.data,a=e.itemNum,n=e.setItemNum,o=t.info[a],r=function(e,t){for(var a=e.split("\n"),n=0;n<a.length;n++)a[n]=c.a.createElement("li",{key:"".concat(t,"-").concat(n),className:"list-item"},a[n]);return a},l=r(o.circumstances,"circumstances"),s=r(o.solutions,"solutions");return c.a.createElement("section",{className:"jamie-who-portfolio-item show-right hidden-right"},c.a.createElement("div",{className:"jamie-who-portfolio-item-title"},c.a.createElement("div",{className:"name"},o.title),c.a.createElement("div",{className:"desc"},o.desc)),c.a.createElement("div",{className:"jamie-who-portfolio-item-desc"},c.a.createElement("div",{className:"circumstances"},c.a.createElement("div",{className:"title"},"circumstances"),c.a.createElement("ul",{className:"list"},l)),c.a.createElement("div",{className:"solutions"},c.a.createElement("div",{className:"title"},"solutions"),c.a.createElement("ul",{className:"list"},s)),c.a.createElement("div",{className:"narrative"})),c.a.createElement("div",{className:"jamie-who-portfolio-item-nav"},a>0?c.a.createElement("div",{className:"before button",onClick:function(){return n(a-1)}}):null,a<t.info.length-1?c.a.createElement("div",{className:"after button",onClick:function(){return n(a+1)}}):null),c.a.createElement("div",{className:"close-button",onClick:function(){return g(document.getElementsByClassName("jamie-who-portfolio-item")[0])}}))};var b=function(e){var t,a=e.data,n=a.itemNum,o=a.setItemNum,r=a.portfolio,l=r.info;return c.a.createElement("article",{className:"jamie-who-content content-portfolio fade-in"},function(){for(var e=[],t=function(t){e.push(c.a.createElement("li",{key:"button-".concat(t),className:"portfolio-item button ".concat(n.portfolio===t?"ticked":"unticked"),onClick:function(){return o(Object.assign({},n,{portfolio:t}))}}))},a=0;a<l.length;a++)t(a);return c.a.createElement("ul",{className:"portfolio-buttons"},e)}(),(t=l[n.portfolio],c.a.createElement("section",{className:"portfolio-template"},c.a.createElement("div",{className:"portfolio-template-img button",onClick:function(){return g(document.getElementsByClassName("jamie-who-portfolio-item")[0])}}),c.a.createElement("div",{className:"portfolio-template-text"},c.a.createElement("div",{className:"portfolio-template-text-heading"},c.a.createElement("div",{className:"portfolio-template-heading-title"},t.title),c.a.createElement("div",{className:"portfolio-template-heading-desc"},t.desc)),c.a.createElement("div",{className:"portfolio-template-text-content"},c.a.createElement("div",{className:"portfolio-template-content-detail"},t.detail),""!==t.skills?c.a.createElement("div",{className:"portfolio-template-content-skills",dangerouslySetInnerHTML:{__html:t.skills}}):null)))),c.a.createElement(k,{data:r,itemNum:n.portfolio,setItemNum:o}))};a(390);var y=function(e){var t=e.data,a=t.narrative,n=t.skills;return c.a.createElement("article",{className:"jamie-who-content content-narrative fade-in"},function(){for(var e=a.index,o=[],r=function(e){for(var t=[],o=e.name.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())})),r=a.narrative.filter((function(t){return t.section===e.name})),l=function(e){var a=r[e];if(a.isList){for(var l=n.index.filter((function(e){return e.category===a.sentence})),s=0;s<l.length;s++)l[s]=c.a.createElement("li",{key:"".concat(a.sentence,"-").concat(s),className:"narrative-section-skills-list-item skills-list-item"},l[s].em?c.a.createElement("em",null,l[s].title):c.a.createElement("span",null,l[s].title));t.push(c.a.createElement("ul",{key:"".concat(o,"-").concat(e),className:"narrative-section-item narrative-section-skills-list ".concat(a.sentence,"-skills-list")},l))}else{var i=[];a.sentence.includes("\n")?i=a.sentence.split("\n"):i.push(a.sentence);for(var m=0;m<i.length;m++)if(i[m].includes('"')){var u=i[m].split('"');i[m]=c.a.createElement("span",{key:m},u[0],c.a.createElement("em",null,u[1]),u[2])}else i[m]=c.a.createElement("span",{key:m},i[m]);t.push(c.a.createElement("div",{key:"".concat(o,"-").concat(e),className:"narrative-section-item ".concat(a.className)},i))}},s=0;s<r.length;s++)l(s);return c.a.createElement("section",{key:o,className:"narrative-section section-".concat(o)},c.a.createElement("div",{className:"narrative-section-signpost"},c.a.createElement("div",{className:"narrative-section-signpost-text"},e.title)),c.a.createElement("div",{className:"narrative-section-wrapper"},t))},l=0;l<e.length;l++)o.push(r(e[l]));return o.push(c.a.createElement(b,{data:t})),o}())};a(391);function w(e){var t=e.data.info.contact;return c.a.createElement("article",{className:"jamie-who-content content-contacts fade-in"},c.a.createElement("section",{className:"contacts-title-section"},c.a.createElement("div",{className:"contacts-info-section-wrapper"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"title-text"},"\uc2dc\uac04\uc744 \ub0b4\uc5b4 \uc8fc\uc154\uc11c",c.a.createElement("em",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4!"))))),c.a.createElement("section",{className:"contacts-info-section"},c.a.createElement("div",{className:"contacts-info-section-wrapper"},function(){for(var e=[],a=0;a<t.length;a++){var n=t[a],o="contacts-info-list-item-".concat(a);e.push(c.a.createElement("li",{key:o,className:"contacts-info-list-item ".concat(o)},c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:n.prefix+n.address},c.a.createElement("span",{className:"item-info"},n.address))))}return c.a.createElement("ul",{className:"contacts-info-list"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"title-text"},"contacts")),e)}())))}var j=function(e){var t=Object(n.useState)("intro"),a=Object(l.a)(t,2),o=a[0],r=a[1],s=u(),i=s.data,m=s.loadInfo,f=Object(n.useState)({portfolio:0}),E=Object(l.a)(f,2),g=E[0],k=E[1];return c.a.createElement("div",{className:"jamie-who"},c.a.createElement(d,{data:m}),function(){if(m.isDataReady){var e=[],t=[];return"intro"===o?e.push("header"):"contacts"===o?Object.assign(e,["header","nav","content"]):Object.assign(e,i.layout),e.forEach((function(e){"content"===e&&(e=o);for(var a={},n=i.componentData[e],l=0;l<n.length;l++){var s=!1,m=n[l];switch(m){case"contentMode":s=o;break;case"setContentMode":s=r;break;case"itemNum":s=g;break;case"setItemNum":s=k;break;case"content":if(!i[o])break;s=i[o];break;default:s=i[m]}a[m]=s}switch(e){case"header":t.push(c.a.createElement(v,{key:e,data:a}));break;case"nav":t.push(c.a.createElement(p,{key:e,data:a}));break;case"footer":t.push(c.a.createElement(N,{key:e,data:a}));break;case"intro":break;case"resume":t.push(c.a.createElement(h,{key:o,data:a}));break;case"portfolio":t.push(c.a.createElement(b,{key:o,data:a}));break;case"narrative":t.push(c.a.createElement(y,{key:o,data:a}));break;case"contacts":t.push(c.a.createElement(w,{key:o,data:a}))}})),t}}())};var C=function(){var e=Object(n.useState)("JamieWho"),t=Object(l.a)(e,2),a=t[0],o=t[1];return function(e){switch(e){case"JamieWho":return c.a.createElement(j,{setAppMode:o});default:return null}}(a)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e){e.exports=JSON.parse('{"dataKey":{"info":"1QyN6ObNJWxUukoGc_zy_FkjuWKKE656JW4HGsk1L4Pc","resume":"11MxX_AUm6muovkobVb0BhsWlFs5BANi2XNsdITYHvW8","skills":"179EZYW-v8GNDRHCfYnLbN_lZSlRebj3kwtmzmBKjmNE","portfolio":"1oYPYrTDTU454ywq1qY2cl-VFU4EvTsNgq9GfMYMF2hQ","narrative":"1GE9h7z614wH6zjGVhy8oWaHN4-UGkQTCaqDLAVcXJHM"},"contents":[{"name":"resume","title":"\uc774\ub825\uc11c"},{"name":"portfolio","title":"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"},{"name":"narrative","title":"\uc774\uc57c\uae30"},{"name":"contacts","title":"\uc5f0\ub77d\ucc98"}],"layout":["header","nav","content","footer"],"componentData":{"resume":["resume","info","portfolio","skills"],"portfolio":["portfolio","itemNum","setItemNum"],"narrative":["narrative","skills","portfolio","itemNum","setItemNum"],"contacts":["info"],"loadIndicator":["loadInfo"],"header":["info","contents","contentMode","setContentMode"],"nav":["contents","content","contentMode","setContentMode","itemNum","setItemNum"],"footer":["info"]}}')}},[[164,1,2]]]);
//# sourceMappingURL=main.ac0e498f.chunk.js.map