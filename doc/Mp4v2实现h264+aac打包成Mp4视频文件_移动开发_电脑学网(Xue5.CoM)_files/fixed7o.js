/*! ver:7o Copyright 2013 Baidu Inc. All Rights Reserved. */;(function(){var o=!0;window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/monitor7o",[],function(){return{sendLog:function(d){if(d=d.data&&d.data.monitorUrl){var f=new Image,g="log"+ +new Date;window[g]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=null;try{delete window[g]}catch(b){window[g]=void 0}};f.src=d}}}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/template7o",[],function(){function d(d){var b={'"':"&quot;",">":"&gt;","<":"&lt;","&":"&amp;"};return d.replace(/[\"<>\&]/g,function(c){return b[c]})}var f=/\{(\w+)\:(\w+)\}/g;return{a:function(g,b){return g.replace(f,function(c,a,f){c=b[a];switch(f){case "number":c=+c||0;break;case "boolean":c=!!c;break;case "html":c=d(c)}return c})}}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/material7o",["clb/template7o"],function(d){function f(b,c,a){if("string"===typeof b)return b;if(!b.type)return"";var i=g[b.type];return i?(b="string"===typeof i?d.a(i,b):i(b,c),a?b:"<!DOCTYPE html><body>"+b):""}var g={text:function(b){var c='<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
a=/\{events\}/;if(1===b.version)c=c.replace(a,"");else if(2===b.version)for(var c=c.replace(a," onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\""),a=["default",
"hover"],i=0;i<a.length;i++){var e=a[i],f=e+"Color",g=e+"Bold",j=e+"Italic",e=e+"Underline";b[f]="#"+b[f];b[g]=b[g]?"bold":"normal";b[j]=b[j]?"italic":"normal";b[e]=b[e]?"underline":"none"}return d.a(c,b)},image:'<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>',flash:function(b){b.file=b.hasLink?"cflash":"flash";b.imageClickUrl=b.clickUrl;b.hasLink||(b.clickUrl="");
return d.a('<script>var BD = BD || {};BD.MC = BD.MC || {};BD.MC.ADFlash = BD.MC.ADFlash || {};BD.MC.ADImg = BD.MC.ADImg || {};BD.MC.ADFlash.w = {width:number};BD.MC.ADFlash.h = {height:number};BD.MC.ADFlash.mu = "{src:string}";BD.MC.ADFlash.cu = "{clickUrl:string}";BD.MC.ADFlash.wm = {wmode:number};BD.MC.ADFlash.ct = "{clickTag:string}";BD.MC.ADImg.w = {imageWidth:number};BD.MC.ADImg.h = {imageHeight:number};BD.MC.ADImg.mu = "{imageSrc:string}";BD.MC.ADImg.cu = "{imageClickUrl:string}";BD.MC.ADImg.tw = "{target:string}";BD.MC.ADImg.flag = {backupImage:number};<\/script><script src ="http://cbjs.baidu.com/js/{file:string}.js"><\/script>',
b)},rich:function(b){return b.content},slide:function(b,c){for(var a=[],i=b.materials,e=0;e<i.length;e++){var g=i[e];"string"!==typeof g&&(g=f(g,c,o));a.push(g)}b.html="<div>"+a.join("</div><div>")+"</div>";b.width=c.width;b.height=c.height;return d.a('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>',
b)}};return{a:f}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/frame7o",["api"],function(d){function f(){var b=document.createElement("iframe"),c=!1;b.src="about:blank";document.body.insertBefore(b,document.body.firstChild);try{c=!b.contentWindow.document}catch(a){c=o}document.body.removeChild(b);f=function(){return c};return c}function g(){return f()?d.getConfig("domainPolicyFileUrl")||"/domain-policy.htm":"about:blank"}d.defineOnce("BAIDU_DUP_CLB_renderFrame",function(b){var c=document.getElementById("baidu_clb_slot_iframe_"+b),
a=d.getSlots(b);if(a)if(f()&&c.getAttribute("src",2)!==g())c.src=g();else if(a&&!a.status.finish)try{d.setStatus(b,"finish");var i=d.getInfo("#"+b).html;0>i.indexOf("<body>")&&(i="<!DOCTYPE html><body>"+i);var e=c.contentWindow.document;e.open("text/html","replace");e.write(i);e.close();e.body&&(e.body.style.backgroundColor="transparent")}catch(n){d.addErrorItem(b,"PermissionDenied")}});return{m:function(){return f()},i:g,h:function(b,c){var a;a=c.id;a='<iframe id="baidu_clb_slot_iframe_'+a+'" src="'+
g()+'" onload="BAIDU_DUP_CLB_renderFrame(\''+a+'\')" width="'+c.width+'" height="'+c.height+'" vspace="0" hspace="0" allowTransparency="true" scrolling="no" marginWidth="0" marginHeight="0" frameborder="0" style="border:0; vertical-align:bottom; margin:0; display:block;"></iframe>';b.innerHTML=a}}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/logService7o",["api"],function(d){return{g:function(){window.BAIDU_DUP_CLB_log_loaded||(window.BAIDU_DUP_CLB_log_loaded=o,d.bind(window,"load",function(){window.BAIDU_DUP_require(["clb/detect"],d.noop,o)}))}}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/fixed7o",["api","clb/monitor7o","clb/material7o","clb/frame7o","clb/logService7o"],function(d,f,g,b,c){return{render:function(a,i){c.g();a={id:a.id,data:a._html,j:a._fxp,k:a._isMlt,width:a._w,height:a._h};f.sendLog(a);if(!a.data&&!a.j)d.setStatus(a.id,"finish");else{if(a.k&&"sync"===d.getFillType(a.id)){var e="string"===typeof a.data?a.data:a.data.content;if(e){d.setStatus(a.id,"finish");document.write(e);return}}if(!i)return null;var e=document.getElementById(i),
n=g.a(a.data,a,o);d.putInfo("#"+a.id,{html:n});b.h(e,a)}}}});
})();window.BAIDU_DUP_define&&window.BAIDU_DUP_define("clb/detect",["api"],function(g){function e(a){a.url="";a.host=window.location.hostname;a.from="DUP";g.sendLog({data:a,a:"now"})}try{setTimeout(function(){var a=g.getSlots(),c;for(c in a){var b=a[c],h=b.status;if(h.render){for(var d=b.errors,i=!1,f=0;f<d.length;f++)if("PermissionDenied"===d[f]){i=!0;break}d=b.response.data&&b.response.data._html;if(i)e({type:"renderFail",id:c,error:"PermissionDenied",empty:!!d});else if(h.finish){if(1!==b.response.data._isMlt&&
(b=document.getElementById("baidu_clb_slot_iframe_"+c)))try{var j=b.contentWindow.document.body;(!j||!j.firstChild)&&e({type:"renderEmpty",id:c})}catch(k){}}else e({type:"renderFail",id:c,error:"NotFilled",empty:!!d})}}},0)}catch(k){}});