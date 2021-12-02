module.exports=function(t){var e={};function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=46)}([function(t,e){t.exports=flarum.core.compat.extend},,function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},,,function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["components/WelcomeHero"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListPane"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["states/ComposerState"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e,o){"use strict";(function(t){var o="object"==typeof t&&t&&t.Object===Object&&t;e.a=o}).call(this,o(44))},function(t,e){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["components/Composer"]},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["common/components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},,,function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e){t.exports=flarum.core.compat["common/components/ConfirmDocumentUnload.js"]},function(t,e,o){"use strict";o.r(e);var s=o(0),a=o(29),n=o.n(a);var i=o(3),r=o.n(i),c=o(5),l=o.n(c),u=o(30),p=o.n(u),d=o(25),f=o.n(d),h=o(14),b=o.n(h),v=o(15),g=o.n(v),y=o(31),N=o.n(y),x=o(4),_=o.n(x),w=o(6),S=o.n(w);function O(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(o)return(o=o.call(t)).next.bind(o);if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}var B=o(9),I=o.n(B),C=o(10),D=o.n(C),j=o(2),P=o.n(j),A=o(26),L=o.n(A),T=o(11),E=o.n(T),J=o(16),z=o.n(J),R=(o(43),o(27)),H=o.n(R),M=o(28),V=o.n(M),F=o(17),U=o.n(F),W=o(32),q=o.n(W),G=o(24),Z=o.n(G),K=o(19),Q=o.n(K),X=o(33),Y=o.n(X),tt=o(34),et=o.n(tt),ot=o(35),st="object"==typeof self&&self&&self.Object===Object&&self,at=(ot.a||st||Function("return this")()).Symbol;var nt=function(t,e){for(var o=-1,s=null==t?0:t.length,a=Array(s);++o<s;)a[o]=e(t[o],o,t);return a},it=Array.isArray,rt=Object.prototype,ct=rt.hasOwnProperty,lt=rt.toString,mt=at?at.toStringTag:void 0;var ut=function(t){var e=ct.call(t,mt),o=t[mt];try{t[mt]=void 0;var s=!0}catch(t){}var a=lt.call(t);return s&&(e?t[mt]=o:delete t[mt]),a},pt=Object.prototype.toString;var dt=function(t){return pt.call(t)},ft=at?at.toStringTag:void 0;var ht=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":ft&&ft in Object(t)?ut(t):dt(t)};var bt=function(t){return null!=t&&"object"==typeof t};var vt=function(t){return"symbol"==typeof t||bt(t)&&"[object Symbol]"==ht(t)},gt=at?at.prototype:void 0,yt=gt?gt.toString:void 0;var Nt=function t(e){if("string"==typeof e)return e;if(it(e))return nt(e,t)+"";if(vt(e))return yt?yt.call(e):"";var o=e+"";return"0"==o&&1/e==-1/0?"-0":o};var xt=function(t){return null==t?"":Nt(t)},_t=/[\\^$.*+?()[\]{}|]/g,wt=RegExp(_t.source);var St=function(t){return(t=xt(t))&&wt.test(t)?t.replace(_t,"\\$&"):t},Ot=o(7),kt=o.n(Ot),Bt=o(36),It=o.n(Bt);function Ct(){return(Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t}).apply(this,arguments)}var Dt=o(37),jt=o.n(Dt),Pt=o(38),At=o.n(Pt),Lt=o(22),Tt=o.n(Lt),Et=o(8),Jt=o.n(Et),zt=o(20),Rt=o.n(zt),Ht=o(21),Mt=o.n(Ht),Vt=(o(45),o(39)),$t=o.n(Vt),Ft=o(40),Ut=o.n(Ft),Wt=o(18),qt=o.n(Wt);app.initializers.add("block-cat/portlet-ui",(function(){var t,e;t=app.routes,e=JSON.parse(app.data.resources[0].attributes["block-cat.defaultRoutes"]),Object.keys(t).map((function(t){e.hasOwnProperty(t)&&""!==e[t].path&&(app.routes[t].path=e[t].path)})),Object(s.extend)(r.a.prototype,"navItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),o=app.search.stickyParams();""!==e.allDiscussionsIcon&&t.has("allDiscussions")&&t.replace("allDiscussions",l.a.component({href:app.route("index",o),icon:e.allDiscussionsIcon},app.translator.trans("core.forum.index.all_discussions_link")),100)})),Object(s.extend)(r.a.prototype,"sidebarItems",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).mainPageMenu&&t.has("nav")&&t.remove("nav")})),Object(s.extend)(r.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).toolbar&&t.children[1].children[0].children[1].children.shift()})),Object(s.extend)(r.a.prototype,"actionItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings"));e.refreshButton&&t.has("refresh")&&t.remove("refresh"),e.markAllAsReadButton&&t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(s.extend)(S.a.prototype,"view",(function(t){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).discussionMenu)try{t.children[1].children[1].children.shift()}catch(t){}})),Object(s.extend)(S.a.prototype,"sidebarItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings"));e.controlsButton&&t.has("controls")&&t.remove("controls"),e.scrubberDiv&&t.has("scrubber")&&t.remove("scrubber")})),Object(s.extend)(p.a.prototype,"headerItems",(function(t){var e=this,o=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),s=f.a.controls(this.attrs.post,this);if(o.discussionControlsToPost&&1===this.attrs.post.number()){var a=this.attrs.post.data.relationships.discussion.data,n=app.store.getById(a.type,a.id),i=g.a.moderationControls(n);i.has("lock")&&i.remove("lock"),i.has("sticky")&&i.remove("sticky"),i.has("rename")&&(i.get("rename").attrs.icon="fas fa-heading"),s.merge(i)}o.postControlsUp&&t.add("controls",m("aside",{className:"Post-actions-top"},m("ul",null,s.toArray().length?m("li",null,m(b.a,{className:"Post-controls-h",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return e.$(".Post-actions-top").addClass("open")},onhide:function(){return e.$(".Post-actions-top").removeClass("open")}},s.toArray())):"")))})),Object(s.override)(N.a.prototype,"view",(function(t){var e=this,o=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),s=this.elementAttrs();s.className=this.classes(s.className).join(" ");var a=f.a.controls(this.attrs.post,this);if(o.discussionControlsToPost){if(1===this.attrs.post.number()){var n=this.attrs.post.data.relationships.discussion.data,i=app.store.getById(n.type,n.id),r=g.a.moderationControls(i);r.has("lock")&&r.remove("lock"),r.has("sticky")&&r.remove("sticky"),r.has("rename")&&(r.get("rename").attrs.icon="fas fa-heading"),a.merge(r)}return m("article",s,m("div",null,this.content(),m("aside",{className:"Post-actions"},m("ul",null,_()(this.actionItems().toArray()),a.toArray().length?m("li",null,m(b.a,{className:"Post-controls",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return e.$(".Post-actions").addClass("open")},onhide:function(){return e.$(".Post-actions").removeClass("open")}},a.toArray())):"")),m("footer",{className:"Post-footer"},m("ul",null,_()(this.footerItems().toArray())))))}return t()})),Object(s.extend)(I.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).postCount&&t.children[2].children.pop()})),Object(s.override)(n.a.prototype,"view",(function(t){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).emoldovaButton){var e=app,o=e.history,s=e.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:s&&s.show.bind(s),onmouseleave:s&&s.onmouseleave.bind(s)},o.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[m("a",{class:"Button Button--icon hasIcon",href:"https://emoldova.org/",title:"EMoldova",active:"false",type:"button",target:"_self"},m("i",{class:"icon fas fa-home Button-icon"})),this.getDrawerButton()])}return t()})),Object(s.extend)(D.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).postReply&&t.children.map((function(e){"reply"===e.key&&t.children.pop()}))})),Object(s.extend)(I.a.prototype,"infoItems",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).terminalPost&&t.has("terminalPost")&&t.remove("terminalPost")})),Object(s.extend)(S.a.prototype,"oninit",(function(){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).pane&&app.pane.disable()})),Object(s.extend)(S.a.prototype,"oncreate",(function(){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).pane)for(var t,e=O(this.element.children);!(t=e()).done;){var o=t.value;"DiscussionPage-list"===o.className&&o.remove()}})),Object(s.extend)(r.a.prototype,"sidebarItems",(function(t){var e=JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings")),o=document.getElementsByClassName("FormControl");if(null!=o)for(var s=0;s<o.length;s++);if(e.button_3d_new){var a=document.getElementsByClassName("item-newDiscussion")[0];null!=a&&a.classList.add("item-newDiscussion_3d")}else{var n=document.getElementsByClassName("item-newDiscussion")[0];null!=n&&n.classList.add("item-newDiscussion-stackoverflow")}t.has("nav")&&t.remove("nav");for(var i=this.navItems(this).toArray(),r=0;r<i.length;r++)1==e.rankings_button_header&&"rankings"===i[r].itemName&&i.splice(r,1),0==e.button_etichete&&"tags"===i[r].itemName&&i.splice(r,1),"separator"===i[r].itemName&&i.splice(r,i.length--);for(var c=this.navItems(this).toArray(),l=0;l<c.length;l++)"separator"===c[l].itemName&&c.splice(0,l+1);if(e.sideNav_shadow){var m=document.getElementsByClassName("nav_Navigation")[0],u=document.getElementsByClassName("nav_Navigation")[1];null!=m&&(m.classList.add("nav_Navigation_shadow"),u.classList.add("nav_Navigation_shadow"))}else{var p=document.getElementsByClassName("sideNav")[0];null!=p&&p.classList.add("sideNav_border")}if(!e.view_hero){var d=document.getElementsByClassName("Hero")[0];null!=d&&d.classList.add("d-none")}if(e.sidenav_fixed){var f=document.getElementsByClassName("sideNav")[0];null!=f&&(f=f.getElementsByTagName("ul")[0]).classList.add("sidenav_fixed")}t.add("nav_Navigation",L.a.component({buttonClassName:"Button",className:"App-titleControl nav_Navigation",accessibleToggleLabel:P.a.translator.trans("core.forum.index.toggle_sidenav_dropdown_accessible_label")},i)),t.add("nav_Categories",L.a.component({buttonClassName:"Button",className:"App-titleControl nav_Navigation",accessibleToggleLabel:P.a.translator.trans("core.forum.index.toggle_sidenav_dropdown_accessible_label")},c))})),Object(s.override)(S.a.prototype,"view",(function(){var t=this.discussion;return m("div",{className:"DiscussionPage"},m(Q.a,{state:P.a.discussions}),m("div",{className:"DiscussionPage-discussion"},t?[Z.a.component({discussion:t}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,_()(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},D.a.component({discussion:t,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))]:m(Y.a,null)))})),Object(s.override)(I.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),o=t.isUnread(),s=t.isRead(),a=!this.showRepliesCount()&&o,n=0,i=g.a.controls(t,this).toArray(),r=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(n=c.number());var l=St(this.attrs.params.q);this.highlightRegExp=new RegExp(l+"|"+l.trim().replace(/\s+/g,"|"),"gi")}else n=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);for(var u,p=_()(this.infoItems().toArray())[0],d=0;d<_()(this.infoItems().toArray()).length;d++)_()(this.infoItems().toArray())[d].key&&"terminalPost"==_()(this.infoItems().toArray())[d].key&&_()(this.infoItems().toArray())[d];u=0!=e?e.data.attributes.displayName:"anonim";var f=JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings"));return f.add_borders&&(r.className+=" D-border"),m("div",r,i.length?b.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right",accessibleToggleLabel:P.a.translator.trans("core.forum.discussion_controls.toggle_dropdown_accessible_label")},i):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(o?"":" disabled"),onclick:this.markAsRead.bind(this)},E()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(o?" unread":"")+(s?" read":"")+(f.remove_additional_space?" D_remove_additional_space":"")},m("div",{style:"display: flex; flex-direction: column; margin-right: 15px; font-size: 10px"},f.author_bottom?"":m(et.a,{text:P.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:H()(t.createdAt())}),position:"right"},m(z.a,{className:"DiscussionListItem-author author_top",href:e?P.a.route.user(e):"#"},V()(e,{title:""}))),f.buttons_votes_comments_views?m(z.a,{href:P.a.route.discussion(t,n),className:"DiscussionListItem-options"},m("div",{className:"DiscussionListItem-options-blocks",title:"Voturi"},m("h3",{className:""},U()(t.data.attributes.votes?t.votes():"0",this.highlightRegExp)),m("p",{className:""},m("i",{class:"far fa-thumbs-up icon Button-icon",style:"margin: 0px;"}))),m("div",{className:"DiscussionListItem-options-blocks",title:"Comentarii"},m("h3",{className:""},U()(t.commentCount()-1,this.highlightRegExp)),m("p",{className:""},m("i",{class:"far fa-comments icon Button-icon",style:"margin: 0px;"}))),m("div",{className:"DiscussionListItem-options-blocks",title:"Vizualizări"},m("h3",{className:""},U()(t.viewCount(),this.highlightRegExp)),m("p",{className:""},m("i",{class:"far fa-eye icon Button-icon",style:"margin: 0px;"})))):""),m("ul",{className:"DiscussionListItem-badges badges"},_()(t.badges().toArray())),m(z.a,{href:P.a.route.discussion(t,n),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title",style:"font-size: "+f.title_font_size+"px !important;"},U()(t.title(),this.highlightRegExp)),f.view_tags&&!f.tags_bottom?m("ul",{className:"DiscussionListItem-info-tags"},p):"",m("ul",{className:"DiscussionListItem-info",style:"font-size: "+f.item_excerpt_font_size+"px !important; color: "+f.item_excerpt_color+" !important;"},_()(this.infoItems().toArray())[_()(this.infoItems().toArray()).length-1]),m("div",{className:"DiscussionListItem_tags_and_author"},f.view_tags&&f.tags_bottom?m("ul",{className:"DiscussionListItem-info-tags"},p):"",f.author_bottom?m("div",{className:"DiscussionListItem-options-author"},m(z.a,{className:"author-link",href:e?P.a.route.user(e):"#",style:"flex-direction: column;"},m("p",{style:"color: hsl(210,8%,45%);"},P.a.translator.trans("core.forum.discussion_list.started_text",{displayName:u,ago:H()(t.createdAt())})),m("div",{style:"display: flex;"},V()(e,{title:""}),m("div",null,m("p",{style:"font-size: 12px;"},u.replace("[șters]","anonim")),m("p",null,e.data?m("span",null,m("i",{class:"icon fas fa-trophy Button-icon",style:"font-size: 10px; margin-right: 2px;"}),e.data.attributes.points):""," ",e.data?m("span",null,m("i",{class:"icon fas fa-comment Button-icon",style:"font-size: 10px; margin-right: 2px;"}),e.data.attributes.discussionCount):""))))):"")),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:a?P.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},q()(t[a?"unreadCount":"replyCount"]()))))})),Object(s.extend)(r.a.prototype,"viewItems",(function(t){var e=JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings"));e.show_item_sort?e.modify_item_sort&&(t.has("sort")&&t.remove("sort"),t.add("Noi",l.a.component({title:"Noi",className:"Button Button--primary",href:"?sort=newest"},P.a.translator.trans("block-cat-default.forum.sort_button_3"))),t.add("Vechi",l.a.component({title:"Vechi",className:"Button Button--primary",href:"?sort=oldest"},P.a.translator.trans("block-cat-default.forum.sort_button_4"))),t.add("Votate",l.a.component({title:"Votate",className:"Button Button--primary",href:"?sort=votes"},P.a.translator.trans("block-cat-default.forum.sort_button_5"))),t.add("Vizualizate",l.a.component({title:"Vizualizate",className:"Button Button--primary",href:"?sort=popular"},P.a.translator.trans("block-cat-default.forum.sort_button_6")))):t.has("sort")&&t.remove("sort")})),Object(s.extend)(r.a.prototype,"sidebarItems",(function(t){JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings")).button_adauga_right&&t.has("newDiscussion")&&t.remove("newDiscussion")})),Object(s.extend)(r.a.prototype,"actionItems",(function(t){var e=this;if(JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings")).button_adauga_right){var o=P.a.forum.attribute("canStartDiscussion")||!P.a.session.user;t.add("newDiscussion",kt.a.component({icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:function(){return e.newDiscussionAction().catch((function(){}))},disabled:!o},P.a.translator.trans(o?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")))}})),Object(s.extend)(It.a.prototype,"items",(function(t){JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings")).rankings_button_header&&t.add("rankings",l.a.component({href:P.a.route("rankings"),icon:"fas fa-trophy",className:"Button Button--flat rankings_button"}),20)})),Object(s.override)(At.a.prototype,"view",(function(){var t=this.headerItems().toArray();t.splice(0,2);var e,o=this.headerItems().toArray();return e=this.attrs.user?this.attrs.user.data.attributes.displayName:"Anonim",m("div",{className:"ComposerBody "+(this.attrs.className||"")},m("div",{className:"ComposerBody-content"},m("div",{className:"ComposerBody-content-left"},m("ul",{className:"ComposerBody-header"},Jt()(t)),m("div",{className:"ComposerBody-editor"},$t.a.component({submitLabel:this.attrs.submitLabel,placeholder:this.attrs.placeholder,disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:this.jumpToPreview&&this.jumpToPreview.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),m("div",{className:"ComposerBody-content-right"},m("div",{className:"author"},this.attrs.user?Ut()(this.attrs.user,{className:"ComposerBody-avatar-right"}):""," ",m("p",{className:"my_displa_name"},e)),m("ul",{className:"ComposerBody-etichete"},Jt()(o[1])),m("div",{className:"Button Button_publicare",onclick:this.onsubmit.bind(this)},this.attrs.submitLabel))),m(Mt.a,{display:"unset",containerClassName:Rt()("ComposerBody-loading",this.loading&&"active"),size:"large"}))})),Object(s.override)(jt.a.prototype,"view",(function(){var t=this.state.body,e={normal:this.state.position===Tt.a.Position.NORMAL,minimized:this.state.position===Tt.a.Position.MINIMIZED,fullScreen:!0,active:this.active,visible:this.state.isVisible()},o=this.state.position===Tt.a.Position.MINIMIZED?this.state.show.bind(this.state):void 0;this.state.height=window.innerHeight+"px";var s=this.controlItems().toArray();return s.splice(1,1),m("div",{className:"Composer "+Rt()(e)},m("div",{className:"Composer-handle",oncreate:this.configHandle.bind(this)}),m("ul",{className:"Composer-controls"},Jt()(s)),m("div",{className:"Composer-content",onclick:o},t.componentClass?t.componentClass.component(Ct({},t.attrs,{composer:this.state,disabled:e.minimized})):""))})),Object(s.override)(S.a.prototype,"view",(function(){var t=r.a.prototype.sidebarItems(),e=this.discussion;if(e){var o=e.badges().toArray();console.log(o),o.length&&items.add("badges",m("ul",{className:"DiscussionHero-badges badges"},Jt()(o)),10)}return m("div",{className:"DiscussionPage"},m(Q.a,{state:P.a.discussions}),m("div",{className:"DiscussionPage-discussion"},e?[m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("div",{className:"sideNav"},m("ul",{className:""},Jt()(t.toArray()))),m("div",{className:"sideNavOffset",style:"width: 100%; padding-top: 30px;"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,Jt()(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},m("div",{className:"Hero_2"},m("h2",{className:"DiscussionHero-title"},e.title())),D.a.component({discussion:e,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))))]:m(Mt.a,null)))})),Object(s.extend)(S.a.prototype,"view",(function(t){if(JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings")).display_pdf_files){var e=document.getElementsByClassName("span_pdf");if(null!=e)for(var o=0;o<e.length;o++)e[o].classList.add("d-none");var s=document.getElementsByClassName("iframe_pdf");if(s.length>0)for(var a=0;a<s.length;a++)for(var n=0;n<s[a].attributes.length;n++){var i=s[a].innerHTML,r=i.search('<a href="');r+=9;var c=i.length,l=i.substring(r,c),m=l.search(".pdf");m+=4;var u=l.substring(0,m);"src"==s[a].attributes[n].name&&""==s[a].attributes[n].value&&(s[a].attributes[n].value=u)}}else{var p=document.getElementsByClassName("iframe_pdf");if(null!=p)for(var d=0;d<p.length;d++)p[d].classList.add("d-none")}})),qt.a.prototype.randomFeatures=function(){var t=Math.floor(Math.random()*this.features.length);this.feature=this.features[t],m.redraw()},Object(s.extend)(qt.a.prototype,"oninit",(function(){this.hidden=JSON.parse(this.hidden),this.hiddenTime=Number(localStorage.getItem("welcomeHiddenTime")),Date.now()>this.hiddenTime&&(this.hidden=!1),this.hidden||(this.welcomeSettings=JSON.parse(app.forum.attribute("block-cat.welcomeSettings")),this.features=this.welcomeSettings.sliderItems,this.feature=this.features[0],this.interval=setInterval(this.randomFeatures.bind(this),7e3))})),Object(s.override)(qt.a.prototype,"view",(function(t){var e=this;if(this.hidden||app.session.user)return t();var o=function(){e.$().slideUp(e.hide.bind(e))};return m("header",{className:"Welcome fixed w-11/12 rounded-lg text-center ml-14 p-12 mt-4 z-10"},m("div",{class:"container"},kt.a.component({icon:"fas fa-times rounded-full px-4 py-3 hover:bg-blue-100",onclick:o,className:"Hero-close Button Button--icon Button--link"}),m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title",class:"text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10"},app.forum.attribute("welcomeTitle")),m("div",{className:"Hero-subtitle",class:"text-lg text-white mt-2 mb-4"},m.trust(app.forum.attribute("welcomeMessage"))))),m("div",{class:"flex mt-4 max-w-5xl mx-auto"},m("div",{class:"w-1/2 bg-blue-100 rounded-lg mr-8"},m("i",{class:"icon fa fa-pencil-alt text-3xl text-blue-500 pt-8"}),m("h2",{className:"text-lg p-8 mx-auto"},this.welcomeSettings.leftText),m("div",{id:"writeFromWelcomeHero",class:"mb-8"},kt.a.component({onclick:function(){o(),$("button.Button.Button--primary.IndexPage-newDiscussion.hasIcon").click()},className:"bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded","aria-label":"Scrie un articol nou"},app.translator.trans("Scrie un articol nou")))),m("div",{class:"w-1/2 bg-red-100 rounded-lg"},m("i",{class:"icon fas fa-search text-3xl text-red-500 pt-8"}),m("h2",{className:"text-lg p-8 mx-auto"},this.welcomeSettings.rightText),m("div",{id:"browseFromWelcomeHero",class:"mb-8"},kt.a.component({onclick:function(){o()},className:"bg-red-500 hover:bg-red-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded","aria-label":"Navighează prin acest portlet"},app.translator.trans("Navighează prin acest portlet"))))),m("div",{class:"features flex mt-4 max-w-5xl mx-auto"},m("h1",{id:"features",class:"text-3xl text-blue-300 mx-auto"},this.feature)))})),Object(s.override)(qt.a.prototype,"hide",(function(t){clearTimeout(this.interval),localStorage.setItem("welcomeHidden","true"),localStorage.setItem("welcomeHiddenTime",Date.now()+72e6),this.hidden=!0}))}),-20)}]);
//# sourceMappingURL=forum.js.map