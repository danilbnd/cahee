(function(g){var window=this;var Q5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.Y?{F:"div",X:["ytp-icon","ytp-icon-expand-watch-page"]}:{F:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},L:[{F:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{F:"g",N:{transform:"translate(-1.000000, -3.000000)"},L:[{F:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{F:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430";g.R(a.O().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.Y?{F:"div",X:["ytp-icon","ytp-icon-expand-miniplayer"]}:{F:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},L:[{F:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},
L:[{F:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},L:[{F:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c");g.W.call(this,{F:"button",X:["ytp-miniplayer-expand-watch-page-button",
"ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},L:[d]});this.w=a;this.ga("click",this.A,this);this.updateValue("title",g.sN(a,e,"i"));g.xi(this,g.ON(b.Va(),this.element))},R5=function(a){g.Ju.call(this,{F:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.J=!1;this.H=this.C=this.w=void 0;this.M(a,"minimized",this.OF);this.M(a,"onStateChange",this.MM)},S5=function(a){g.lQ.call(this,a);
this.o=new R5(this.player);this.o.hide();g.YK(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(Q5,g.W);Q5.prototype.A=function(){this.w.la("onExpandMiniplayer")};g.r(R5,g.Ju);g.h=R5.prototype;
g.h.show=function(){this.w=new g.Vm(this.NF,null,this);this.w.start();if(!this.J){this.D=new g.IR(this.player,this);g.H(this,this.D);g.YK(this.player,this.D.element,4);this.D.C=.6;this.T=new g.GQ(this.player);g.H(this,this.T);this.A=new g.W({F:"div",I:"ytp-miniplayer-scrim"});g.H(this,this.A);this.A.o(this.element);this.M(this.A.element,"click",this.Ry);var a=new g.W({F:"button",X:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},L:[g.IM()]});
g.H(this,a);a.o(this.A.element);this.M(a.element,"click",this.mx);a=new Q5(this.player,this);g.H(this,a);a.o(this.A.element);this.B=new g.W({F:"div",I:"ytp-miniplayer-controls"});g.H(this,this.B);this.B.o(this.A.element);this.M(this.B.element,"click",this.Ry);var b=new g.W({F:"div",I:"ytp-miniplayer-button-container"});g.H(this,b);b.o(this.B.element);a=new g.W({F:"div",I:"ytp-miniplayer-play-button-container"});g.H(this,a);a.o(this.B.element);var c=new g.W({F:"div",I:"ytp-miniplayer-button-container"});
g.H(this,c);c.o(this.B.element);this.P=new g.uO(this.player,this,!1);g.H(this,this.P);this.P.o(b.element);b=new g.rO(this.player,this);g.H(this,b);b.o(a.element);this.K=new g.uO(this.player,this,!0);g.H(this,this.K);this.K.o(c.element);this.H=new g.SP(this.player,this);g.H(this,this.H);this.H.o(this.A.element);this.C=new g.DO(this.player,this);g.H(this,this.C);g.YK(this.player,this.C.element,4);this.G=new g.W({F:"div",I:"ytp-miniplayer-buttons"});g.H(this,this.G);g.YK(this.player,this.G.element,4);
a=new g.W({F:"button",X:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},L:[g.IM()]});g.H(this,a);a.o(this.G.element);this.M(a.element,"click",this.mx);a=new g.W({F:"button",X:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},L:[g.VM()]});g.H(this,a);a.o(this.G.element);this.M(a.element,"click",this.FK);this.M(this.player,"presentingplayerstatechange",this.PF);this.M(this.player,"appresize",
this.Uq);this.M(this.player,"fullscreentoggled",this.Uq);this.Uq();this.J=!0}0!=this.player.getPlayerState()&&g.Ju.prototype.show.call(this);this.C.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.w&&(this.w.dispose(),this.w=void 0);g.Ju.prototype.hide.call(this);this.player.app.H.o||(this.J&&this.C.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.w&&(this.w.dispose(),this.w=void 0);g.Ju.prototype.Y.call(this)};
g.h.mx=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.FK=function(){this.player.playVideo()};
g.h.Ry=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.Pt(g.FK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.h.OF=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.app.H.o)};
g.h.NF=function(){g.FO(this.C);this.H.w();this.w&&this.w.start()};
g.h.PF=function(a){g.T(a.state,32)&&this.D.hide()};
g.h.Uq=function(){var a=this.C,b=g.GK(this.player).getPlayerSize().width;a.Aa=0;a.C=b;a.G=!1;g.HO(a)};
g.h.MM=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Va=function(){return this.D};
g.h.Rb=function(){return!1};
g.h.Ff=function(){return!1};
g.h.si=function(){return!1};
g.h.xs=function(){};
g.h.Tg=function(){};
g.h.uj=function(){};
g.h.gk=function(){return null};
g.h.Tq=function(){return new g.Yf(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Ji=function(a,b,c,d,e){var f=0,k=d=0,l=g.tg(a);if(b){c=g.gn(b,"ytp-prev-button")||g.gn(b,"ytp-next-button");var m=g.gn(b,"ytp-play-button"),n=g.gn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.qg(b,this.element),k=b.x,f=b.y-12):n&&(k=g.gn(b,"ytp-miniplayer-button-top-left"),f=g.qg(b,this.element),b=g.tg(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.GK(this.player).getPlayerSize().width;e=f+(e||0);l=g.ld(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Vq=function(){};
g.h.tf=function(){};g.r(S5,g.lQ);S5.prototype.create=function(){};
S5.prototype.We=function(){return!1};
S5.prototype.load=function(){this.player.hideControls();this.o.show()};
S5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.BQ.miniplayer=S5;})(_yt_player);
