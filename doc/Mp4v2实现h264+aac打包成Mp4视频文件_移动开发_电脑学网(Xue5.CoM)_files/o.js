/*! Copyright 2013 Baidu Inc. All Rights Reserved. */;(function(){var m=void 0,n=!0,o=null,p=!1,s="BAIDU_DUP_require",u="BAIDU_DUP_define",v=["search!"],x=document,z={},A=0,B=1,C=2,D=3,E=4,F=5;function G(a){var c=H(a),d=c[0],c=c[1];this.id=a;this.name=c;this.uri=I(c);this.ga=!c;this.status=A;d&&c&&(this.la=J(K(d+"!"))||{load:function(){}});this.n=[]}var P=window[s]||function(a,c,d){L(a,function(){for(var b=[],f=0;f<a.length;f++)b[f]=J(K(a[f]));M(c)&&c.apply(window,b)},d)};
function L(a,c,d){var b=a.length;if(0===b)c();else for(var f=b,e=0;e<b;e++)(function(a){function h(){if(a.status<C)b();else{for(var h=a.n,f=[],c=0;c<h.length;c++){var t=h[c];t&&K(t).status<D&&f.push(t)}0===f.length?b():L(f,b,d)}}function b(){a&&a.status<D&&(a.status=D);0===--f&&c()}var e=a.la;e&&(e.normalize&&(a.name=e.normalize(a.name,I)),e.name2url&&(a.uri=e.name2url(a.name)));a.status<C?e&&M(e.load)?e.load(a.name,P,function(h){Q(a.id,[],function(){return h});b()}):R(a,h,d):h()})(K(a[e]))}
var S={},T={},U={};function R(a,c,d){a.status=B;U[a.id]?c():T[a.id]?S[a.id].push(c):(T[a.id]=n,S[a.id]=[c],d?(c=a.uri,a=x.createElement("script"),a.charset="utf-8",a.async=n,a.src=c,c=x.getElementsByTagName("head")[0]||x.body,c.insertBefore(a,c.firstChild)):x.write('<script charset="utf-8" src="'+a.uri+'"><\/script>'))}var Q=window[u]||function(a,c,d){var b=K(a);b.status<C&&(b.n=c,b.factory=d,b.status=b.ga?D:C);if(T[a]){delete T[a];U[a]=n;c=S[a];for(delete S[a];a=c.shift();)a()}};
function J(a){if(!a)return o;if(a.status>=E)return a.J;if(a.status<D&&a.J===m)return o;a.status=E;for(var c=[],d=0;d<a.n.length;d++)c[d]=J(K(a.n[d]));var b=d=a.factory;M(d)&&(b=d.apply(window,c));a.status=F;return a.J=b}function I(a){return/^https?:\/\//.test(a)?a:"http://dup.baidustatic.com/painter/"+a+".js"}function K(a){return z[a]||(z[a]=new G(a))}function H(a){var c,d=a?a.indexOf("!"):-1;-1<d&&(c=a.slice(0,d),a=a.slice(d+1,a.length));return[c,a]}
function M(a){return"[object Function]"===Object.prototype.toString.call(a)}
Q("util/lang",[],function(){function a(a){for(var b={},f="Array Boolean Date Error Function Number RegExp String".split(" "),c=0,g=f.length;c<g;c++)b["[object "+f[c]+"]"]=f[c].toLowerCase();return a==o?"null":b[Object.prototype.toString.call(a)]||"object"}var c=Object.prototype.hasOwnProperty;return{z:c,a:a,getAttribute:function(a,b){for(var f=a,c=b.split(".");c.length;){if(f===m||f===o)return;f=f[c.shift()]}return f},P:function(d){if("object"!==a(d))return"";var b=[],f;for(f in d)c.call(d,f)&&b.push(f+
"="+encodeURIComponent(d[f]));return b.join("&")},l:function(c){var b=[];switch(a(c)){case "object":b=Array.prototype.slice.call(c);break;case "array":b=c;break;case "number":case "string":b.push(c)}return b},unique:function(a){for(var b=[],c={},e=a.length,g=0;g<e;g++){var h=a[g];c[h]||(b[b.length]=h,c[h]=n)}return b},removeItem:function(a,b){for(var c=[].slice.call(a),e=c.length-1;0<=e;e--)c[e]===b&&c.splice(e,1);return c},B:function(){}}});
Q("util/browser",["util/lang"],function(a){var c={},d=navigator.userAgent,b=window.RegExp;/msie (\d+\.\d)/i.test(d)&&(c.M=document.documentMode||+b.$1);/opera\/(\d+\.\d)/i.test(d)&&(c.opera=+b.$1);/firefox\/(\d+\.\d)/i.test(d)&&(c.ua=+b.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(d)&&!/chrome/i.test(d)&&(c.Fa=+(b.$1||b.$2));if(/chrome\/(\d+\.\d)/i.test(d)){c.V=+b.$1;var f="scoped"in document.createElement("style");if(f){var e=document.createElement("div");e.innerHTML='<div style="position:absolute;left:-2000px;" id="microdataItem" itemscope itemtype="http://example.net/user"><p>baidu <span id="microdataProperty" itemprop="name">DUP</span>.</p></div>';
document.body.appendChild(e);var g=document.getElementById("microdataItem"),h=document.getElementById("microdataProperty"),f=f&&"itemValue"in h&&"properties"in g;document.body.removeChild(e)}f&&(c.qa=n)}try{/(\d+\.\d)/.test(a.getAttribute(window,"external.max_version"))&&(c.Da=+b.$1)}catch(i){}a="Android iPad iPhone Linux Macintosh Windows".split(" ");b="";for(f=0;f<a.length&&!(b=a[f],d.match(RegExp(b.toLowerCase(),"i")));f++);c.platform=b;return c});
Q("util/dom",["util/lang"],function(a){function c(a){try{if(a&&"object"===typeof a&&a.document&&"setInterval"in a)return n}catch(b){}return p}function d(a,b){b=2===arguments.length?b:a.parent;return a!=b||!c(a)}function b(a){return 9===a.nodeType?a:a.ownerDocument||a.document}return{c:function(b,c){return"string"===a.a(b)?(c||window).document.getElementById(b):b.nodeName&&(1===b.nodeType||9===b.nodeType)?b:o},ha:c,i:d,t:function(a,b){for(var b=2===arguments.length?b:a.parent,c=0;10>c++&&d(a,b);){var h;
try{h=!!a.parent.location.toString()}catch(i){h=p}if(!h)return n;a=a.parent}return 10<=c?n:p},$:b,s:function(a){a=b(a);return a.parentWindow||a.defaultView||o},m:function(a){a=c(a)?a.document:b(a);return"CSS1Compat"===a.compatMode?a.documentElement:a.body}}});
Q("util/style",["util/lang","util/dom","util/browser"],function(a,c,d){function b(a,b){if(!a)return"";var d="",d=-1<b.indexOf("-")?b.replace(/[-][^-]{1}/g,function(a){return a.charAt(1).toUpperCase()}):b.replace(/[A-Z]{1}/g,function(a){return"-"+a.charAt(0).toLowerCase()}),e=c.s(a);if(e&&e.getComputedStyle){if(e=e.getComputedStyle(a,o))return e.getPropertyValue(b)||e.getPropertyValue(d)}else if(a.currentStyle)return e=a.currentStyle,e[b]||e[d];return""}function f(a){var i={top:0,left:0};if(a===c.m(a))return i;
var e=c.$(a),d=e.body,e=e.documentElement;a.getBoundingClientRect&&(a=a.getBoundingClientRect(),i.left=Math.floor(a.left)+Math.max(e.scrollLeft,d.scrollLeft),i.top=Math.floor(a.top)+Math.max(e.scrollTop,d.scrollTop),i.left-=e.clientLeft,i.top-=e.clientTop,a=b(d,"borderLeftWidth"),d=b(d,"borderTopWidth"),a=parseInt(a,10),d=parseInt(d,10),i.left-=isNaN(a)?2:a,i.top-=isNaN(d)?2:d);return i}function e(a,c){var d=b(a,"margin"+c).toString().toLowerCase().replace("px","").replace("auto","0");return parseInt(d,
10)||0}function g(b){for(var i=c.s(b),e=100;b&&b.tagName;){var g=100;if(d.M){if(5<d.M)try{g=parseInt(a.getAttribute(b,"filters.alpha.opacity"),10)||100}catch(f){}e=e>g?g:e}else{try{g=100*(i.getComputedStyle(b,o).opacity||1)}catch(q){}e*=g/100}b=b.parentNode}return 0===e?0:e||100}return{Ba:b,Aa:f,w:function(a){var b=c.c(a);if(!b)return p;a=f(b);b=c.s(b);if(!b)return a;for(var e=0;b!==b.parent&&10>e++&&!c.t(b)&&b.frameElement;){var d=f(b.frameElement);a.left+=d.left;a.top+=d.top;b=b.parent}return a},
va:e,za:function(a,b){var d=c.c(a),g=d.offsetWidth;b&&(g+=e(d,"Left")+e(d,"Right"));return g},ya:function(a,b){var d=c.c(a),g=d.offsetHeight;b&&(g+=e(d,"Top")+e(d,"Bottom"));return g},xa:g,wa:function(a){for(var b=c.c(a),a=c.s(b),b=g(b),d=0;10>d++&&c.i(a)&&!c.t(a);){var e=a.frameElement?g(a.frameElement):100,b=b*(e/100);a=a.parent}return b},ea:function(a){return c.m(a||window).scrollWidth||-1},da:function(a){return c.m(a||window).scrollHeight||-1},q:function(a){return c.m(a||window).clientWidth||
-1},p:function(a){return c.m(a||window).clientHeight||-1}}});Q("util/event",["util/dom"],function(a){return{bind:function(c,d,b){if(c=a.ha(c)?c:a.c(c))if(c.addEventListener)c.addEventListener(d,b,p);else if(c.attachEvent)c.attachEvent("on"+d,b);else{var f=c["on"+d];c["on"+d]=function(){f&&f.apply(this,arguments);b.apply(this,arguments)}}return c}}});
Q("util/cookie",["util/lang"],function(a){return{get:function(a,d){var b=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie);return b?d?decodeURIComponent(b[2]):b[2]:""},set:function(c,d,b,f){var e=b.expires;"number"===a.a(e)&&(e=new Date,e.setTime(+e+b.expires));document.cookie=c+"="+(f?encodeURIComponent(d):d)+(b.path?"; path="+b.path:"")+(e?"; expires="+e.toGMTString():"")+(b.domain?"; domain="+b.domain:"")}}});
Q("util/data",["util/lang"],function(a){function c(b,c){var d=c;switch(a.a(b)){default:d=p;break;case "string":var i=b.split(".");if(1<i.length)for(var j=f;i.length;){var k=i.shift();j[k]=i.length?j[k]?j[k]:{}:c;j=j[k]}else f[b]=c}return d}function d(b){var c=p;switch(a.a(b)){case "string":c=a.getAttribute(f,b)}return c}function b(a,b,h){if(!a||!b)return p;var i=d(a)||{};switch(h){case "+1":h=i[b]||0;i[b]=++h;break;default:i[b]=parseInt(h,10)}c(a,i);return i[b]}var f={};return{h:function(a,b){var c=
window;return c[a]?c[a]:c[a]=b},L:function(a){var b=window,c=b[a];b[a]=m;return c},C:c,g:d,H:function(a,c){return b(a,c,"+1")},Ea:function(a,c,d){return b(a,c,d)},count:b,Z:function(a,b){return!a||!b?p:(d(a)||{})[b]||0},pa:function(a,b){if(!a||!b)return p;var h=d("pageConfig")||{};h[a]=b;c("pageConfig",h);return n},Y:function(a){return!a?p:(d("pageConfig")||{})[a]}}});
Q("util/storage",[],function(){function a(a,b){if(c){var f=c.getItem(a);return b&&f?decodeURIComponent(f):f}return o}var c=window.localStorage;return{getItem:a,S:function(d,b,f){if(c){b=f?encodeURIComponent(b):b;f=a(d)||"";try{c.setItem(d,f+((f&&"|")+b))}catch(e){}}},R:function(d,b,f){if(c)if(b=f?encodeURIComponent(b):b,f=a(d)||"",f=f.replace(RegExp(b+"\\|?","g"),"").replace(/\|$/,""))try{c.setItem(d,f)}catch(e){}else c.removeItem(d)}}});
Q("util/log",["util/lang","util/event","util/storage"],function(a,c,d){function b(a,b){var c=new Image,d="BAIDU_DUP_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=c;c.onload=c.onerror=c.onabort=function(){c.onload=c.onerror=c.onabort=o;c=window[d]=o;b&&b(f,a,n)};c.src=a}var f="BAIDU_DUP_log_storage";return{Ca:b,ra:function(){var a=d.getItem(f);if(a)for(var a=a.split("|"),c=0,h=a.length;c<h;c++)b(decodeURIComponent(a[c]),d.R)},D:function(e){var e="object"===a.a(e)?e:{},g=e.url||
"http://cbjslog.baidu.com/log",h=e.option||"now",e=a.P(e.data||{}),g=g+((0<=g.indexOf("?")?"&":"?")+e+(e?"&":"")+"rdm="+ +new Date);switch(h){case "now":b(g);break;case "block":break;default:d.S(f,g,n),c.bind(window,"unload",function(){b(g,d.R)})}}}});Q("util","util/lang,util/dom,util/style,util/event,util/cookie,util/data,util/storage,util/log,util/browser".split(","),function(a,c,d,b,f,e,g,h,i){return{lang:a,b:c,style:d,event:b,cookie:f,data:e,Ga:g,log:h,U:i}});
Q("biz",["util"],function(a){function c(a){var b={},d="",e=window;try{d=e.top.location.search,"string"!==typeof d&&(d=e.location.search)}catch(f){d=e.location.search}d=d||"";0===d.indexOf("?")&&(d=d.substring(1));d=d.split("&");for(e=0;e<d.length;e++){var l=d[e].split("=");b[l[0]]=l[1]}c=function(a){return b[a]};return b[a]}function d(b,c){var d=/^[0-9a-zA-Z]+$/;return!b||!d.test(b)||!c?[]:c="array"===a.lang.a(c)?c:Array.prototype.slice.call(arguments,1)}function b(b,c,d){if(!c||!c.length)return p;
var d=d||{G:p,N:p,O:p},j=d.N?a.data.g(f):{},k=d.G?e:f,j=d.O?{}:a.data.g(k)||j,d={},l;for(l in j)a.lang.z.call(j,l)&&(d[l]="array"===a.lang.a(j[l])?j[l].slice():j[l]);var j=d[b]||[],q=c.length;for(l=0;l<q;l++){var t=c[l];"string"===typeof t&&(t=encodeURIComponent(t),100>=t.length&&(j[j.length]=t))}if(!j.length)return p;d[b]=a.lang.unique(j);a.data.C(k,d);return n}var f="bizOrientations",e="bizUrgentOrientations";return{ca:c,I:function(a,c){var e=d.apply(this,arguments);return b(a,e)},T:function(a,
c){var e=d.apply(this,arguments);return b(a,e,{G:n,N:n})},sa:function(a,c){var e=d.apply(this,arguments);return b(a,e,{G:n,O:n})},ba:function(b){var b=Math.max(0,Math.min(b||500,500)),c=[],d=a.data.g(e)||a.data.g(f)||{};if("object"===a.lang.a(d))for(var j in d)a.lang.z.call(d,j)&&(c[c.length]=j+"="+d[j].join(","));a.data.C(e,m);c.sort(function(a,b){return a.length-b.length});d="";j=c.length;for(var k=0;k<j&&!(d.length+c[k].length>=b);k++)d+=(k?"&":"")+c[k];return d}}});
Q("preview",["biz"],function(a){function c(){var c=a.ca,b=c("baidu_clb_preview_sid")||c("baidu_dup_preview_sid"),f=c("baidu_clb_preview_mid")||c("baidu_dup_preview_mid"),e=c("baidu_clb_preview_vc")||c("baidu_dup_preview_vc"),c=+c("baidu_clb_preview_ts")||+c("baidu_dup_preview_ts");return 3E4>=+new Date-c?{Q:b,ia:f,ta:e}:o}return{fa:function(a){var b=[],f=c();f&&a==f.Q&&(b.push("mid="+f.ia),b.push("sid="+f.ta));return b.join("&")},g:c}});
Q("slot",["util"],function(a){function c(){for(var a={response:{},holder:"",stack:[],errors:[],status:{}},b=i.length-1;0<=b;b--)a.status[i[b]]=0;return a}function d(a,b){var c=p;"fillAsync"===b&&(c=n);l[a]&&-1!==l[a].stack.join(" ").toLowerCase().indexOf("async")&&(c=n);return c}function b(a,b){if(!a)return"";var c=q+a;b&&(c+="_"+b);return c}function f(a,b,c){if(!a||!b)return p;c===m&&(c=+new Date);return l[a]?(l[a].status[b]=c,n):p}function e(a,b){g(a,"errors",b)}function g(b,c,d){b&&c&&d&&(b=l[b])&&
"array"===a.lang.a(b[c])&&b[c].push(d)}function h(a){return!a?l:l[a]||p}var i="add,create,request,response,render,finish".split(","),j=[],k={},l={},q="BAIDU_DUP_wrapper_";return{add:function(){var b={ids:[],preloadIds:[]},d=a.lang.l(arguments);if(!d.length)return b;for(var d=d.join(",").split(","),e=[],i=[],g=d.length,q=0;q<g;q++){var r=d[q];if(k.hasOwnProperty(r)){var y=r+"_"+k[r],w=h(y).stack||[];if("preload"===w[w.length-1]){b.preloadIds.push(y);continue}k[r]+=1}else k[r]=0;r=r+"_"+k[r];l[r]=new c;
f(r,"add");i.push(r);e.push(r)}j=j.concat(i);b.ids=e;return b},create:function(c,h,i){if(!c||!h)return p;var g=b(c),j=n;if(a.b.c(g))return l[c].wrapper=g,j;if(d(c,h)){i=i||"";l[c].holder=i;i=a.b.c(i);try{if(i){var k=document.createElement("div");k.id=g;i.insertBefore(k,i.firstChild);l[c].holder=i.id}}catch(q){e(c,"Failed to insert wrapper"),j=p}}else if(document.write('<div id="'+g+'"></div>'),!a.b.c(g))try{var y=document.getElementsByTagName("script"),w=y[y.length-1];if(w){var N=w.parentNode;if(N){var O=
document.createElement("div");O.id=b(c,"b");N.insertBefore(O,w)}}}catch(V){e(c,"Failed to create backup wrapper")}f(c,"create");return j},W:d,aa:function(a){return d(a)?"async":"sync"},K:function(c){return!c?"":(c=a.b.c(l[c].holder)||a.b.c(b(c))||a.b.c(b(c,"b")))&&c.id||""},r:h,F:function(a,b){if(!a||!b)return p;return l[a]?(l[a].response=b,f(a,"response"),n):p},j:f,k:e,u:function(a,b){g(a,"stack",b)},v:function(b){b=a.lang.l(b);if(!b.length)return p;var c=[],d={},e;for(e=0;e<j.length;e++)d[j[e]]=
e+1;for(e=0;e<b.length;e++){var f=d[""+b[e]];f===m&&(f=0);c.push(f)}return c},w:function(c){c=a.lang.l(c);if(!c.length)return["-1x-1"];for(var d=[],f=0;f<c.length;f++){var h=c[f],i;try{var g=a.b.c(b(h))||a.b.c(b(h,"b"));if(g){var j=a.style.w(g);j&&(i=[j.top,j.left])}}catch(k){e(h,"Unable to get ps")}i=i?i:[-1,-1];d.push(i.join("x"))}return d}}});
Q("api",["slot","util"],function(a,c){return{getDai:a.v,getSlots:a.r,getFillType:a.aa,getFillWrapperId:a.K,setStatus:a.j,addErrorItem:a.k,addStackItem:a.u,bind:c.event.bind,getType:c.lang.a,noop:c.lang.B,sendLog:c.log.D,putInfo:c.data.C,getInfo:c.data.g,defineOnce:c.data.h,addCount:c.data.H,getCount:c.data.Z,getConfig:c.data.Y}});
Q("param",["slot","preview","biz","util"],function(a,c,d,b){function f(a,b){for(var b=b||0,c=[],d=0,e=a.length;d<e;d++)c.push(a[d].split("_")[b]);return c.join(",")}function e(a){a=a||window.document.domain;0===a.indexOf("www.")&&(a=a.substr(4));"."===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));var b=a.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm|tw|ma|in|vn|name|mx|gd|im)(?:\\.(?:cn|jp|tw|ru|th))?)$","i"));return b?
b[0]:a}var g=window,h=g.document,i=g.screen,j=g.navigator,k=+new Date,l,q=[{key:"di",value:function(a){return f(a.id)}},{key:"dcb",value:function(){return"BAIDU_DUP_define"}},{key:"dtm",value:function(){return"BAIDU_DUP_SETJSONADSLOT"}},{key:"dbv",value:function(){var a=b.U;return a.qa?"1":a.V?"2":"0"}},{key:"dci",value:function(b){for(var c="-1",d={fill:"0",fillOnePiece:"1",fillAsync:"2",preload:"3"},e=0;e<b.id.length;e++){var f=a.r(b.id[e]);if(f){var f=f.stack,h=f.length;if(1<=h){c=d[f[h-1]];break}}}return c}},
{key:"dri",value:function(a){return f(a.id,1)}},{key:"dis",value:function(){var a=0;b.b.i(g)&&(a+=1);b.b.t(g,g.top)&&(a+=2);var c=b.style.q(),d=b.style.p();if(40>c||10>d)a+=4;return a}},{key:"dai",value:function(b){return a.v(b.id).join(",")}},{key:"dds",value:function(){var a=b.data.g("dds");return b.lang.P(a)}},{key:"drs",value:function(){var a={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};try{return a[h.readyState]}catch(b){return-1}}},{key:"dvi",value:function(){return"7o"}},{key:"ltu",
o:n,value:function(){var a,c=0,d=g,e=0,f=0,h="";a=d.location.href;if(b.b.i(d)){for(;10>c;c++)if(b.b.t(d)){a=d.document.referrer||d.location.href;break}else{e=b.style.q(d);f=b.style.p(d);h=d.location.href;d=d.parent;if(400<e&&120<f){a=h;break}if(!b.b.i(d)){a=d.location.href;break}}10<=c&&(a=d.document.referrer||d.location.href)}return a}},{key:"liu",o:n,value:function(){return b.b.i(g)?h.URL:""}},{key:"ltr",o:n,value:function(){var a;try{a=g.opener?g.opener.document.location.referrer:m}catch(b){}return a=
a||h.referrer}},{key:"lcr",o:n,value:function(){var a=h.referrer,c=a.replace(/^https?:\/\//,""),c=c.split("/")[0],c=c.split(":")[0],c=e(c),d=e(),f=b.cookie.get("BAIDU_DUP_lcr")||b.cookie.get("BAIDU_CLB_REFER");if(f&&d===c)return f;return d!==c?(b.cookie.set("BAIDU_DUP_lcr",a,{domain:d}),a):""}},{key:"ps",value:function(b){return a.w(b.id).join(",")}},{key:"psr",value:function(){return[i.width,i.height].join("x")}},{key:"par",value:function(){return[i.availWidth,i.availHeight].join("x")}},{key:"pcs",
value:function(){return[b.style.q(),b.style.p()].join("x")}},{key:"pss",value:function(){return[b.style.ea(),b.style.da()].join("x")}},{key:"pis",value:function(){return(b.b.i(g)?[b.style.q(),b.style.p()]:[-1,-1]).join("x")}},{key:"cfv",value:function(){var a=0;if(j.plugins&&j.mimeTypes.length){var b=j.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0")}else if(g.ActiveXObject&&!g.opera)for(b=10;2<=b;b--)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+
b);c&&(a=c.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,"."))}catch(d){}return parseInt(a,10)}},{key:"ccd",value:function(){return i.colorDepth||0}},{key:"chi",value:function(){return g.history.length||0}},{key:"cja",value:function(){return j.javaEnabled().toString()}},{key:"cpl",value:function(){return j.plugins.length||0}},{key:"cmi",value:function(){return j.mimeTypes.length||0}},{key:"cce",value:function(){return j.cookieEnabled||0}},{key:"col",value:function(){return(j.language||j.browserLanguage||
j.systemLanguage).replace(/[^a-zA-Z0-9\-]/g,"")}},{key:"cec",value:function(){return(h.characterSet?h.characterSet:h.charset)||""}},{key:"cdo",value:function(){var a=window.orientation;a===m&&(a=-1);return a}},{key:"tsr",value:function(){var a=0,b=+new Date;k&&(a=b-k);return a}},{key:"tlm",value:function(){return Date.parse(h.lastModified)/1E3}},{key:"tcn",value:function(){return Math.round(+new Date/1E3)}},{key:"tpr",value:function(a){var a=a&&a.max_age?a.max_age:24E4,b=+new Date;l?b-l>=a&&(l=b):
l=b;return l||""}},{key:"_preview",value:function(a){return c.fa(f(a.id))}},{key:"baidu_id",value:function(){return b.cookie.get("BAIDUID")}},{key:"_orientation",value:function(){return d.ba()}}];return{get:function(a,b){for(var c=[],d=0,e=q.length;d<e;d++){var f;try{var h=q[d],i=h.key,g=h.o,j=h.value,j="function"===typeof j?j(a):j,j=g?encodeURIComponent(j):j;if(b&&b===i)return j;f=i&&0!==i.indexOf("_")?i+"="+j:j}catch(k){f=encodeURIComponent(k.toString()),f=f.slice(0,100)}f&&c.push(f)}c=c.join("&");
return c.slice(0,2048)}}});
Q("request",["param","slot","util"],function(a,c,d){Q("request!",[],{name2url:function(b){return"http://cb.baidu.com/ecom?"+a.get({id:b.split(",")})}});Q("batch!",[],{name2url:function(b){return"http://cb.baidu.com/ecom?"+a.get({id:b.split(",")})}});return{send:function(a,f,e){if(!a||!f||e===m)return p;var g=[];if("array"!==d.lang.a(a))c.j(a,"request"),g=["request!"+a];else{for(g=0;g<a.length;g++)c.j(a[g],"request");g=1===a.length?["request!"+a[0]]:["batch!"+a.join(",")]}P(g,f,e);return n}}});
Q("control",["slot","request","preview","util"],function(a,c,d,b){function f(c,d,e){var f=d.deps,g=d.data,q=a.K(c);if(e&&!q)a.k(c,"HolderNotFound");else{0>f[0].indexOf("clb/")&&a.j(c,"finish");var t=0.01>=Math.random();t&&b.log.D({data:{type:"beforeLoadPainter"},ja:"now"});P(f,function(d){t&&b.log.D({data:{type:"afterLoadPainter"},ja:"now"});if("object"===b.lang.a(g))if(g.id=c,d.render)try{a.j(c,"render"),d.render(g,q)}catch(e){a.k(c,"RenderException")}else a.k(c,"RenderNotFound");else a.k(c,"ResponseFormatError")},
e)}}function e(b,d,e){if(!b)return p;var e=e||"",g=a.add(b),b=g.ids[0]||g.preloadIds[0];if(!b)return p;var l=a.W(b,d);a.u(b,d);a.create(b,d,e);g.ids.length?c.send(b,function(c){a.F(b,c);f(b,c,l)},l):g.preloadIds.length&&(d=a.r(b).response,f(b,d,l));return n}function g(b){for(var c=0,d=b+"_"+c;0!==a.v([d])[0];){var e=a.r(d);if((e=e&&e.response)&&0===e.deps[0].indexOf("clb/")){var f=e.data,e=f._isMlt;(0===e&&""!==f._html||e===p&&f._fxp)&&a.j(d,"finish",0)}d=b+"_"+ ++c}if(b!==m&&(b=(c=window.BAIDU_CLB_SLOTS_MAP)&&
c[b],b!==m&&(e=b._isMlt,0===e&&""!==b._html||e===p&&b._fxp)))b._done=p}window.BAIDU_CLB_prepareMoveSlot=g;return{fill:function(a){return e(a,"fill")},X:function(a,b){return e(a,"fillAsync",b)},ma:function(){function e(d){c.send(d,function(c){if("array"===b.lang.a(c)){if(c&&c.length===d.length)for(var e=0;e<d.length;e++)a.F(d[e],c[e])}else"object"===b.lang.a(c)&&c&&1===d.length&&a.F(d[0],c)},p)}var f=b.lang.l(arguments),f=b.lang.unique(f),g=d.g();if(g)for(var k=0,l=f.length;k<l;k++)f[k]==g.Q&&(f.splice(k,
1),k--);for(f=a.add(f).ids;f.length;){g=f.splice(0,16);for(k=0;k<g.length;k++)a.u(g[k],"preload");e(g)}},na:g}});
Q("global",["control","biz","util"],function(a,c,d){function b(a){a=a.split(".");return i[a[0]]+a[1]}function f(){var a=h.BAIDU_DUP;if(!("object"===d.lang.a(a)&&a.push)){if("array"===d.lang.a(a)&&a.length)for(var b=0;b<a.length;b++)e(a[b]);h.BAIDU_DUP=m;d.data.h("BAIDU_DUP",{push:e});d.data.h("BAIDU_DUP_proxy",function(a){if(a)return function(){return e([a].concat(d.lang.l(arguments)))}});for(b in k)b&&d.lang.z.call(k,b)&&d.data.h(b,h.BAIDU_DUP_proxy(b));g()}}function e(a){if("array"!==d.lang.a(a))return p;
var b=a.shift();d.data.H("apiCount",b);return(b=k[b]||l[b]||p)&&b.apply(o,a)}function g(){function a(b){for(var c=0,d=v.length;c<d;c++)if(0===b.indexOf(v[c]))return n;return p}d.data.h(s,function(b){for(var c=0,d=b.length;c<d;c++)if(a(b[c]))return;P.apply(o,arguments)});d.data.h(u,function(b,c){for(var d=0,e=c.length;d<e;d++)if(a(c[d]))return;Q.apply(o,arguments)})}var h=window,i={clb:"BAIDU_CLB_",dan:"BAIDU_DAN_",nova:"cpro"},j=[{e:["clb.fillSlot","clb.singleFillSlot","clb.fillSlotWithSize"],f:["fill"],
d:a.fill},{e:["clb.fillSlotAsync"],f:["fillAsync"],d:a.X},{e:["clb.preloadSlots"],f:["preload"],d:a.ma},{e:["clb.prepareMoveSlot"],f:["prepareMove"],d:a.na},{e:["clb.addOrientation"],f:["addOrientation"],d:c.I},{e:["clb.addOrientationOnce"],f:["addOrientationOnce"],d:c.T},{e:["clb.setOrientationOnce"],f:["setOrientationOnce"],d:c.sa},{e:["clb.setConfig"],f:["putConfig"],d:d.data.pa},{e:["clb.addSlot","clb.enableAllSlots","clb.SETHTMLSLOT"],f:[],d:d.lang.B}],j=function(a){for(var c={},d={},e=0;e<a.length;e++){for(var f=
a[e],g=f.e,h=f.f,f=f.d;g.length;)c[b(g.shift())]=f;for(;h.length;)d[h.shift()]=f}return{ka:c,oa:d}}(j),k=j.ka,l=j.oa;return{A:function(){var e=d.data.L(b("clb.ORIENTATIONS"));if(e)for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&c.I(g,e[g]);a.fill(d.data.L(b("clb.SLOT_ID")));f()}}});Q("logService",["util/lang","util/event","util/log"],function(a,c,d){return{A:function(){window.BAIDU_DUP_log_loaded||(window.BAIDU_DUP_log_loaded=n,d.ra(),c.bind(window,"load",function(){P(["detect"],a.B,n)}))}}});
P(["global"],function(a){a.A()});P(["logService"],function(a){a.A()});})();
window.BAIDU_DUP_define("detect",["api"],function(f){function g(a){a.url="";a.host=window.location.hostname;a.from="DUP";f.sendLog({data:a,a:"now"})}try{setTimeout(function(){var a=f.getSlots(),d;for(d in a){var b=a[d],c=b.response,e=!1;if("object"!==f.getType(c))e=!0;else{var e=!0,h;for(h in c)if(Object.prototype.hasOwnProperty.call(c,h)){e=!1;break}}var i=b.status,b=b.stack;e?g({type:"preload"===b[0]?"preloadFail":"loadFail",id:d}):!i.render&&!i.finish&&g({type:"renderFail",id:d,error:"preload"===
b[0]?"PreloadNotFilled":"NotFilled",empty:!(!c.data||!c.data._html)})}},0)}catch(j){}});