function zhReport(e){var e=e||{},t={pro:"huya_web",pas:YA.cookie.get("username")||"",yyuid:YA.cookie.get("yyuid")||"",pageType:"root",rso:"",rso_desc:"",eid:"",eid_desc:""};for(var i in e)t[i]=e[i];"undefined"==typeof ya&&(window.ya=new YA(t.pro,t.pas,{pageType:t.pageType,yyuid:t.yyuid}),ya.reportProductStartUp({pro:t.pro,rso:t.rso,rso_desc:t.rso_desc}),ya.startProductHeartbeat({pro:t.pro,rso:t.rso,rso_desc:t.rso_desc}),ya.reportProductEvent({eid:t.eid,eid_desc:t.eid_desc}),$("body").on("click",".clickstat",function(){ya.reportProductEvent({eid:$(this).attr("eid"),eid_desc:$(this).attr("eid_desc")})}))}function parseQueryString(e){var t,i={};if(-1!=(t=e.indexOf("?")))for(var n=e.substring(t+1,e.length),o=n.split("&"),a=[],s=0,c=o.length;c>s;s++)a=o[s].split("="),i[a[0]]=a[1];return i}var DUYA_SUB={};!function(e){var t={},i=-1;e.publish=function(e,i){return t[e]?(setTimeout(function(){for(var n=t[e],o=n?n.length:0;o--;)n[o].func(e,i)},0),!0):!1},e.subscribe=function(e,n){t[e]||(t[e]=[]);var o=(++i).toString();return t[e].push({token:o,func:n}),o},e.unsubscribe=function(e){for(var i in t)if(t[i])for(var n=0,o=t[i].length;o>n;n++)if(t[i][n].token===e)return t[i].splice(n,1),e;return!1}}(DUYA_SUB);var pageType=window.pageType||"",checkPageType=new RegExp("index|indexShow|allGameList|allVideoList|indexFood|indexMobileGame|indexOnlineGame|indexPcGame|searchList|tvLive|allLive","ig"),huyaPage={isHuyaMainPage:new RegExp("^(.*)(huya.com)(/|/(G|g)/([A-Za-z0-9]+)(|/)|/(G|g)(#)(.*)|/(G|g)(|/)|/(L|l)(|/)|/(T|t)(|/)|/g_ol(|/)|/ol(|/)|/g_pc(|/)|/pc(|/)|/mp(|/)|/eat(|/)|/show(|/)|/(C|c)(|/)|/([A-Za-z0-9]+)/home(|/)|/90(|/)|/90([0-9]{3,4})(|/)|/c/([0-9]+)(|/)|/([A-Za-z0-9]+)/home/videos(|/)|/contact(|/))$").test(location.href),isHuyaLiveRoom:!new RegExp("^(.*)(huya.com)(/|/(G|g)/([A-Za-z0-9]+)(|/)|/(G|g)(#)(.*)|/(G|g)(|/)|/(L|l)(|/)|/(T|t)(|/)|/g_ol(|/)|/ol(|/)|/g_pc(|/)|/pc(|/)|/mp(|/)|/eat(|/)|/show(|/)|/(C|c)(|/)|/([A-Za-z0-9]+)/home(|/)|/90(|/)|/90([0-9]{3,4})(|/)|/c/([0-9]+)(|/)|/([A-Za-z0-9]+)/home/videos(|/)|/contact(|/)|(E/e)(|/)|/app(|/)|/zs(|/))$").test(location.href),isHuyaIndex:new RegExp("^(.*)(www.huya.com)(/)$").test(location.href)};!function(){var e=huyaPage.isHuyaLiveRoom?1300:0,t=1400,i=function(){var i=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth,n=document.body.className.replace(/ w-1000| w-1420/g,"");i>t?(document.body.className=n+" w-1420",DUYA_SUB.publish("resizeWide",i)):i>e&&t>i&&0!=e?(document.body.className=n.replace(/ w-1000| w-1420/g,""),DUYA_SUB.publish("resizeWide",i)):(document.body.className=n+" w-1000",DUYA_SUB.publish("resizeNarrow",i))};window.addEventListener?window.addEventListener("resize",function(){i()}):window.attachEvent&&window.attachEvent("onresize",function(){i()}),i()}(),function(){{var ORI_HOST="http://www.huya.com/";new RegExp("index|indexShow|allGameList|allVideoList|indexFood|indexMobileGame|indexOnlineGame|indexPcGame|searchList|tvLive|allLive","ig")}/(?:develop|test)\..+[hd]uya\.com$/.test(window.location.hostname)&&(ORI_HOST="http://test.www.huya.com/");var Util={_regExpTrim:/^(\s|\u00A0)+|(\s|\u00A0)+$/g,trim:function(e){return(e||"").replace(Util._regExpTrim,"")},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},createStyleSheet:function(e){var t;return document.createStyleSheet?(t=document.createStyleSheet(),t.cssText=e):(t=document.createElement("style"),t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)),t},deleteCookie:function(e,t,i){if(this.hasCookie(e)){var n=new Date;n.setTime(n.getTime()-864e5),document.cookie=e+"=_;expires="+n.toGMTString()+";domain="+t+";path="+i}},writeCookie:function(e,t,i,n,o){var a=e+"="+t+";domain="+i+";path="+n;o>0&&(a=a+";expires="+o.toGMTString()),document.cookie=a},hasCookie:function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t)return!0}return!1},getCookieVal:function(e){for(var t=document.cookie.split("; "),i=0;i<t.length;i+=1){var n=t[i].split("=");if(n[0]==e)return decodeURIComponent(n[1])}return""},getScript:function(e,t){if(window.jQuery)$.getScript(e,function(){Util.isFunction(t)&&t()});else{var i=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript",n.async=!0,n.charset="utf-8",n.src="http://assets.dwstatic.com/b=common/js&f=jquery-1.11.1.min.js,jquery-migrate-1.2.1.min.js&20141230",n.onload=n.onreadystatechange=function(){(!n.readyState||/loaded|complete/.test(n.readyState))&&(window.jQuery&&Util.isFunction(t)&&$.getScript(e,function(){Util.isFunction(t)&&t()}),n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n))},i.insertBefore(n,null)}}};window.NAV_INDEX=window.NAV_INDEX||"http://"+window.location.host+"/";var SUB_TPL=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<li class="subscribe-list-item">\r\n	<a class="video-link" href="'+(null==(__t=link)?"":__t)+'">\r\n	    <span class="video-info"><i class="media-icon"></i>'+(null==(__t=nick)?"":__t)+'</span>\r\n	    <em class="video-detail clearfix">\r\n	        <span class="video-num">\r\n	            <i class="name-icon"></i>'+(null==(__t=totalCount)?"":__t)+'\r\n	        </span>\r\n	        <span class="gametype">'+(null==(__t=gameFullName)?"":__t)+"</span>\r\n	    </em>\r\n	</a>\r\n</li>\r\n\r\n";return __p},MULTI_LOGIN=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="account-login-pop">\r\n    <h2>\u5e10\u53f7\u767b\u5f55</h2>\r\n    <div class="account-login-cont">\r\n        <div class="account-login-yy hiido_stat clickstat" hiido_code="10003433" eid="click/nav/yylogin" eid_desc="\u70b9\u51fb/\u5bfc\u822a/YY\u8d26\u53f7\u767b\u5f55"><a href="#" login-type="yy"><i></i>YY\u8d26\u53f7\u767b\u5f55</a></div>\r\n        <div class="account-login-qq hiido_stat clickstat" hiido_code="10003435" eid="click/nav/qqlogin" eid_desc="\u70b9\u51fb/\u5bfc\u822a/QQ\u8d26\u53f7\u767b\u5f55"><a href="#" login-type="qq"><i></i>QQ\u8d26\u53f7\u767b\u5f55</a></div>\r\n        <div class="account-login-weibo hiido_stat clickstat" hiido_code="10003437" eid="click/nav/weibologin" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u65b0\u6d6a\u5fae\u535a\u767b\u5f55"><a href="#" login-type="weibo"><i></i>\u65b0\u6d6a\u5fae\u535a\u767b\u5f55</a></div>\r\n    </div>\r\n    <a href="#" class="account-login-pop-close">&times;</a>\r\n</div>\r\n<div class="account-login-iframe">\r\n    <iframe src="about:blank" frameborder="0"></iframe>\r\n</div>\r\n<div class="account-login-mask"></div>';return __p};window.NAV_UTIL={login:function(){$("#nav-login").trigger("click")},udbLogin:function(){DUYA_HEAD.prototype.getUDB(function(){UDB.sdk.PCWeb.popupOpenLgn(NAV_INDEX+"udb_web/udbport2.php?do=authorizeURL",NAV_INDEX+"udb_web/udbport2.php?do=callback",NAV_INDEX+"udb_web/udbport2.php?do=denyCallback")})},logout:function(){DUYA_HEAD.prototype.getUDB(function(){$.get(NAV_INDEX+"udb_web/udbport2.php?do=logout",{},function(e,t){"success"==t&&UDB.sdk.PCWeb.deleteCrossmainCookieWithCallBack(e,function(){window.location.reload()})})})},getStatus:function(e){var t=DUYA_HEAD.prototype;"undefined"!=typeof t.islogin?Util.isFunction(e)&&e():t.getUDB(function(){$.getJSON(NAV_INDEX+"udb_web/udbport2.php?do=checkLogin",function(i){t.islogin=i.isLogined,t.userName=i.userName,t.userId=i.uid,window.a_userIsLogin=t.islogin,window.a_userName=t.userName,Util.isFunction(e)&&e()})})},setLoginInfo:function(){var e=DUYA_HEAD.prototype,t=this;e.getUDB(function(){t.getStatus(function(){""!=e.userName||e.islogin?($("#duya-header .success-login").show(),$("#duya-header .success-login #login-username").attr("title",e.userName).text(e.userName),DUYA_PUSH.init()):$("#duya-header .un-login").show()})})},isLogin:function(){return Util.hasCookie("username")},getUserInfo:function(){return Util.hasCookie("username")?{uName:Util.getCookieVal("username"),yyID:Util.getCookieVal("yyuid")}:null},checkLogin:function(e){var t=DUYA_HEAD.prototype,i=this;t.getUDB(function(){i.getStatus(function(){t.islogin?Util.isFunction(e)&&e(t.userId,t.userName):i.login()})})},check:function(e){var t=DUYA_HEAD.prototype,i=this;t.getUDB(function(){i.getStatus(function(){var i={};Util.isFunction(e)&&(i.isLogined=t.islogin,i.userName=t.userName,e(i))})})},reloadPage:function(){null!=this.minWindow&&this.minWindow.close(),window.location.reload()},loginOauth:function(e){var t=NAV_INDEX+"udb_web/udbport2.php?do=dummy3AuthorizeURL&loginType="+e;t=encodeURI(t),this.minWindow=window.open(t,"_loginWin","left=0, top=0, width=600, height=400"),this.minWindow.focus()},minWindow:null};var DUYA_HEAD=function(){var e=document.getElementsByTagName("script"),t=e[e.length-1].src,i=-1!==t.indexOf("?")?t.split("?").pop():"",n={};i.replace(/(\w+)(?:=([^&]*))?/g,function(e,t,i){n[t]="false"===i?!1:"true"===i?!0:i}),this.setting=n,this.isInitMultiLogin=!1;this.init()};DUYA_HEAD.prototype.getUDB=function(e){"undefined"!=typeof UDB?Util.isFunction(e)&&e():window.jQuery?Util.getScript("http://res.udb.duowan.com/lgn/js/oauth/udbsdk/pcweb/udb.sdk.pcweb.popup.min.js",function(){Util.isFunction(e)&&e()}):Util.getScript("http://assets.dwstatic.com/b=common/js&f=jquery-1.11.1.min.js,jquery-migrate-1.2.1.min.js&20141230",function(){Util.getScript("http://res.udb.duowan.com/lgn/js/oauth/udbsdk/pcweb/udb.sdk.pcweb.popup.min.js",function(){Util.isFunction(e)&&e()})})},DUYA_HEAD.prototype.initMultiLogin=function(){$("body").append(MULTI_LOGIN());var e=$(".account-login-pop");e.on("click",".account-login-yy a",function(t){t.preventDefault(),e.hide(),$(".account-login-mask").hide(),NAV_UTIL.udbLogin()}).on("click",".account-login-qq a",function(e){e.preventDefault(),NAV_UTIL.loginOauth("qq")}).on("click",".account-login-weibo a",function(e){e.preventDefault(),NAV_UTIL.loginOauth("weibo")}).on("click",".account-login-pop-close",function(t){t.preventDefault(),e.hide(),$(".account-login-mask").hide()})},DUYA_HEAD.prototype.headEven=function(){var e=this,t=$("#duya-header");t.find("#nav-login").click(function(t){t.preventDefault(),e.isInitMultiLogin?($(".account-login-pop").show(),$(".account-login-mask").show()):(e.initMultiLogin(),e.isInitMultiLogin=!0)}),t.find("#nav-loggout").click(function(e){e.preventDefault(),NAV_UTIL.logout()}),t.find(".nav-subscribe").hover(function(){e.subscribe(),e.isCheckSubscribe=!0}),t.find("#searchForm_id input").on("focus",function(){$(this).val("")}).on("blur",function(){""==$(this).val()&&$(this).val(navGetSearchRecomVal)})},DUYA_HEAD.prototype.statistics=function(){var e=this,t=e.setting;window._hiido=t.hiido!==!1?t.hiido||!0:!1,window._hiido_no=window.hiido_no||t.hiido_no||0,t.hiido_wid=t.hiido_wid||"www",t.hiido_wid=t.hiido_wid.split(","),window._hiido_wid=window.hiido_wid||t.hiido_wid,$(document).ready(function(){window._hiido&&Util.getScript("http://www.duowan.com/duowan.js"),$("body").on("click",".hiido_stat",function(){var e={act:"webevent",eventid:$(this).attr("hiido_code"),value:1,class1:"live",class2:$(this).attr("hiido_class2"),eventype:1,uid:""};window.appHiido.stat(e)})})},DUYA_HEAD.prototype.subscribe=function(){var e=this;if(!e.isCheckSubscribe){var t=$.ajax({url:"http://fw.huya.com/dispatch?do=livesubscribe&uid="+e.userId,type:"GET",dataType:"jsonp"});$.when(t).done(function(t){1e3==t.status&&e.subscribeList(t.result.list)})}},DUYA_HEAD.prototype.subscribeList=function(e){for(var t="",i=$(".nav-subscribe"),n=e.length,o=5,e=e.slice(0,o),a=0;a<e.length;a++)t+=SUB_TPL({link:ORI_HOST+e[a].privateHost,screenshot:e[a].screenshot,avatar180:e[a].avatar180,gameFullName:e[a].gameFullName,nick:e[a].nick,totalCount:e[a].totalCount});n>0?(i.find(".subscribe-hd").show(),i.find(".subscribe-bd").show(),i.find(".subscribe-list").append(t),i.find(".subscribe-key").text(n),i.find(".mod-list-more").hide(),n>o?i.find(".subscribe-all").show():i.find(".subscribe-all").hide()):(i.find(".subscribe-bd").show(),i.find(".more-loading").hide(),i.find(".more-empty").show(),i.find(".subscribe-all").hide())},window.navGameTab=function(e){var t="";if(1e3==+e.status){var i=e.result,n=i.hot,o=i.user,a=i.ad,s=0;if(n.length>0){t+='<dl class="clearfix"><dt>\u70ed\u95e8\u6e38\u620f</dt>';for(var c=0,r=n.length;r>c;c++)s++,t+="tlbb3"==n[c].host?'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+n[c].name+'" href="http://tl.huya.com">'+n[c].name+"</a></dd>":"lol"==n[c].host?'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+n[c].name+'" href="http://lol.huya.com">'+n[c].name+"</a></dd>":'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+n[c].name+'" href="http://www.huya.com/g/'+n[c].host+'">'+n[c].name+"</a></dd>";t+="</dl>"}if(o.length>0){t+='<dl class="clearfix"><dt>\u73a9\u5bb6\u63a8\u8350</dt>';for(var c=0,r=o.length;r>c;c++)s++,t+="tlbb3"==o[c].host?'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+o[c].name+'" href="http://tl.huya.com">'+o[c].name+"</a></dd>":"lol"==o[c].host?'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+o[c].name+'" href="http://tl.huya.com">'+o[c].name+"</a></dd>":'<dd><a class="clickstat" eid="click/navi/game/game'+s+'" eid_desc="\u70b9\u51fb/\u5bfc\u822a/\u6e38\u620f/\u6e38\u620f'+s+'" title="'+o[c].name+'" href="http://www.huya.com/g/'+o[c].host+'">'+o[c].name+"</a></dd>";t+="</dl>"}t+='<a href="http://www.huya.com/g" class="nav-expand-game-more">\u66f4\u591a</a>',a&&(t+='<a href="'+a.link+'" class="clickstat" eid="click/push/navigame" eid_desc="\u70b9\u51fb/\u63a8\u8350/\u5bfc\u822a\u6e38\u620f\u4e0b\u62c9\u56fe"><img src="'+a.picUrl+'" width="250" height="60" alt="'+a.title+'"/></a>')}else t+='<a href="http://www.huya.com/g" class="nav-expand-game-more">\u66f4\u591a</a>';$(".nav-expand-game").append(t);try{delete window.navGameTab}catch(d){window.navGameTab=void 0}},DUYA_HEAD.prototype.createGameTab=function(){$.ajax({type:"get",url:"http://www.huya.com/cache10min.php?m=Game&do=ajaxNavGame",dataType:"jsonp",jsonpCallback:"navGameTab",cache:!0})},window.navHistoryTab=function(e){var t="";if(1e3==+e.status&&e.result&&e.result.historyList.length>0){for(var i=e.result.historyList,n=new Date(1e3*+e.result.nowTime),o=n.setHours(0,0,0,0),a={today:[],yesterday:[],earlier:[]},s=0;s<i.length;s++)i[s].historyTime=1e3*i[s].historyTime,i[s].historyTime>o?a.today.push(i[s]):o-i[s].historyTime<864e5?a.yesterday.push(i[s]):a.earlier.push(i[s]);var c={today:"\u4eca\u5929",yesterday:"\u6628\u5929",earlier:"\u66f4\u65e9"},r={1:"pc",2:"phone",3:"web"};for(var d in a){var l=a[d];if(l.length>0){t+='<div class="history-hd"><em></em>'+c[d]+"</div>",t+='<ul class="history-bd">';for(var s=0;s<l.length;s++)t+="<li>",t+=1==l[s].isLive?'<a href="http://www.huya.com/'+l[s].privateHost+'" title="'+l[s].nick+'"><em class="live"></em><span class="history-nick">'+l[s].nick+'</span><span class="history-type" title="'+l[s].gameName+'">'+l[s].gameName+"</span></a>":'<em class="'+r[l[s].source]+'"></em><span class="history-nick">'+l[s].nick+'</span><span class="history-type" title="'+l[s].gameName+'">'+l[s].gameName+"</span>",t+="</li>";t+="</ul>"}}}else t='<p style="text-align: center;">\u6682\u65e0\u89c2\u770b\u8bb0\u5f55</p>';$(".load-history").html(t),e.result.historyList.length>=4&&$(".nav-expand-history-more").show();try{delete window.navHistoryTab}catch(u){window.navHistoryTab=void 0}},DUYA_HEAD.prototype.createhistoryTab=function(){Util.getCookieVal("yyuid")||Util.getCookieVal("guid")?$.ajax({type:"get",url:"http://fw.huya.com/dispatch",data:{"do":"userHistory",uid:Util.getCookieVal("yyuid"),guid:Util.getCookieVal("guid"),token:Util.getCookieVal("udb_n"),page:1,pageSize:4},dataType:"jsonp",jsonpCallback:"navHistoryTab",cache:!0}):($(".load-history").html('<p style="text-align: center;">\u6682\u65e0\u89c2\u770b\u8bb0\u5f55</p>'),$(".nav-expand-history-more").hide())},DUYA_HEAD.prototype.initUDB=function(){var e=this;$("#nav-main").one("mouseover",function(){e.createGameTab()}),$("#nav-history").one("mouseover",function(){e.createhistoryTab()}),e.getUDB(function(){NAV_UTIL.setLoginInfo(),e.headEven(),e.statistics(),e.getSearchRecom(),DUYA_PUSH.initRefreshTips()}),"allGameList"==window.pageType&&$("#nav-main").addClass("on")},DUYA_HEAD.prototype.getSearchRecom=function(){$.ajax({type:"get",url:"http://"+location.host+"/cache10min.php?m=Search&do=getHotword&v=2",dataType:"jsonp",jsonpCallback:"navGetSearchRecom",cache:!0})};var navGetSearchRecomVal="";window.navGetSearchRecom=function(e){e&&$.isArray(e)&&(navGetSearchRecomVal=e[0],$("#searchForm_id input").val(e[0]));try{delete window.navGetSearchRecom}catch(t){window.navGetSearchRecom=void 0}},DUYA_HEAD.prototype.init=function(){var e=this;window.jQuery?e.initUDB():Util.getScript("http://assets.dwstatic.com/b=common/js&f=jquery-1.11.1.min.js,jquery-migrate-1.2.1.min.js&20141230",function(){e.initUDB()}),$(".hy-nav-right .register-btn").hover(function(){$("#nav-login").addClass("gray")},function(){$("#nav-login").removeClass("gray")})};var DUYA_PUSH={userSubscribeList:[],cacheObj:{},isShowRefreshTips:!1,getSubSt:null,getAllLiveSt:null,tips_left:0,refreshPush:function(e){var t=$(".duya-header-tips"),i=this,n="";if("1"==Util.hasCookie("stopPushSub"))return clearInterval(i.getSubSt),void clearInterval(i.getAllLiveSt);if($.isEmptyObject(e))i.isShowRefreshTips||t.removeClass("appear-tips"),t.find("#refresh-wrap").hide();else{for(var o in e)n+="<p><span>"+e[o].nick+"</span><em>\u5f00\u64ad\u4e86\uff0c</em><a href="+ORI_HOST+e[o].privateHost+' class="refresh-current">\u7acb\u5373\u89c2\u770b</a></p>';t.find("#refresh-wrap").show(),t.find(".refresh-tips").empty().append(n).show(),t.addClass("appear-tips"),i.tips_left=t.offset().left,$(window).trigger("scroll")}},getUserSubscribe:function(){var e=this;$.ajax({url:"http://fw.huya.com/dispatch?do=userSubscribeAid&uid="+DUYA_INS.userId,type:"GET",dataType:"jsonp",success:function(t){1e3==t.status&&(e.userSubscribeList=t.result.list||[])}})},getNewestLive:function(){var e=this;$.ajax({url:"http://fw.huya.com/dispatch?do=newestLive&time=120",type:"GET",dataType:"jsonp",success:function(t){if(1e3==t.status){var i=e.mapSubscribeList(t.result,e.userSubscribeList);e.refreshPush(i)}}})},mapSubscribeList:function(e,t){var i=this,n={};for(var o in e)for(var a=0,s=t.length;s>a;a++)o.toString()==t[a].toString()&&(n[o]=e[o]);if(!$.isEmptyObject(i.cacheObj))for(var c in n)"undefined"!=typeof i.cacheObj[c]&&delete n[c];return i.cacheObj=n,n},init:function(){var e=this,t=$(".duya-header-tips");t.on("click",".refresh-current",function(){$(this).parent("p").remove(),0==$(".refresh-tips p").length&&t.removeClass("appear-tips")}).on("change","#checkTips",function(){if($(this).attr("checked")){var i=new Date;i.setTime(i.getTime()+864e5),Util.writeCookie("stopPushSub","1",document.domain,"/",i),$("#refresh-wrap").remove(),e.isShowRefreshTips||(t.removeClass("appear-tips"),e.isShowRefreshTips=!0)}}).on("click",".close-tips",function(){t.removeClass("appear-tips")}),"1"==Util.hasCookie("stopPushSub")&&t.find("#refresh-wrap").remove(),"1"!=Util.hasCookie("stopPushSub")&&DUYA_INS.islogin&&!location.host.match("admin.huya.com")&&(e.getSubSt=setTimeout(function(){e.getUserSubscribe(),clearTimeout(e.getSubSt),e.getSubSt=setInterval(function(){e.getUserSubscribe()},6e5)},59e3),e.getAllLiveSt=setInterval(function(){e.getNewestLive()},3e5)),$(window).on("scroll",function(){$(".duya-header-tips").length>0&&$(".duya-header-tips").hasClass("appear-tips")&&($(window).scrollTop()>$("#duya-header").height()?t.css({position:"fixed",top:"0px",left:e.tips_left}):t.attr("style",""))})},initRefreshTips:function(){var e=this,t=$(".duya-header-tips");t.on("click",".tips-top .refresh-current",function(){location.reload()}).on("click",".close-tips",function(){t.removeClass("appear-tips")}),huyaPage.isHuyaLiveRoom||huyaPage.isHuyaIndex||setTimeout(function(){t.addClass("appear-tips").find(".tips-top").show(),e.tips_left=t.offset().left,e.isShowRefreshTips=!0},18e5)}};window.DUYA_PUSH=DUYA_PUSH,window.DUYA_INS=new DUYA_HEAD}();