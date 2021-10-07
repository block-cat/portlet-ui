module.exports=function(t){var e={};function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=31)}([function(t,e){t.exports=flarum.core.compat.extend},,function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},,function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},,function(t,e){t.exports=flarum.core.compat["components/Link"]},,function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e,o){"use strict";(function(t){var o="object"==typeof t&&t&&t.Object===Object&&t;e.a=o}).call(this,o(30))},,,,function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e,o){"use strict";o.r(e);var a=o(0),s=o(18),n=o.n(s);var r=o(3),i=o.n(r),c=o(9),l=o.n(c),u=o(19),p=o.n(u),f=o(16),d=o.n(f),h=o(10),b=o.n(h),v=o(11),g=o.n(v),y=o(20),N=o.n(y),x=o(4),S=o.n(x),_=o(5),k=o.n(_);function O(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(o)return(o=o.call(t)).next.bind(o);if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}var I=o(6),j=o.n(I),A=o(21),B=o.n(A),C=o(2),P=o.n(C),D=o(17),L=o.n(D),R=o(8),J=o.n(R),E=o(14),T=o.n(E),M=(o(28),o(29),o(22)),$=o.n(M),U=o(12),q=o.n(U),F=o(23),G=o.n(F),V=o(24),z="object"==typeof self&&self&&self.Object===Object&&self,H=(V.a||z||Function("return this")()).Symbol;var K=function(t,e){for(var o=-1,a=null==t?0:t.length,s=Array(a);++o<a;)s[o]=e(t[o],o,t);return s},Q=Array.isArray,W=Object.prototype,X=W.hasOwnProperty,Y=W.toString,Z=H?H.toStringTag:void 0;var tt=function(t){var e=X.call(t,Z),o=t[Z];try{t[Z]=void 0;var a=!0}catch(t){}var s=Y.call(t);return a&&(e?t[Z]=o:delete t[Z]),s},et=Object.prototype.toString;var ot=function(t){return et.call(t)},at=H?H.toStringTag:void 0;var st=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":at&&at in Object(t)?tt(t):ot(t)};var nt=function(t){return null!=t&&"object"==typeof t};var rt=function(t){return"symbol"==typeof t||nt(t)&&"[object Symbol]"==st(t)},it=H?H.prototype:void 0,ct=it?it.toString:void 0;var lt=function t(e){if("string"==typeof e)return e;if(Q(e))return K(e,t)+"";if(rt(e))return ct?ct.call(e):"";var o=e+"";return"0"==o&&1/e==-1/0?"-0":o};var ut=function(t){return null==t?"":lt(t)},mt=/[\\^$.*+?()[\]{}|]/g,pt=RegExp(mt.source);var ft=function(t){return(t=ut(t))&&pt.test(t)?t.replace(mt,"\\$&"):t};app.initializers.add("block-cat/portlet-ui",(function(){var t,e;t=app.routes,e=JSON.parse(app.data.resources[0].attributes["block-cat.defaultRoutes"]),Object.keys(t).map((function(t){e.hasOwnProperty(t)&&""!==e[t].path&&(app.routes[t].path=e[t].path)})),Object(a.extend)(i.a.prototype,"navItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),o=app.search.stickyParams();""!==e.allDiscussionsIcon&&t.has("allDiscussions")&&t.replace("allDiscussions",l.a.component({href:app.route("index",o),icon:e.allDiscussionsIcon},app.translator.trans("core.forum.index.all_discussions_link")),100)})),Object(a.extend)(i.a.prototype,"sidebarItems",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).mainPageMenu&&t.has("nav")&&t.remove("nav")})),Object(a.extend)(i.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).toolbar&&t.children[1].children[0].children[1].children.shift()})),Object(a.extend)(i.a.prototype,"actionItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings"));e.refreshButton&&t.has("refresh")&&t.remove("refresh"),e.markAllAsReadButton&&t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(a.extend)(k.a.prototype,"view",(function(t){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).discussionMenu)try{t.children[1].children[1].children.shift()}catch(t){}})),Object(a.extend)(k.a.prototype,"sidebarItems",(function(t){var e=JSON.parse(app.forum.attribute("block-cat.defaultSettings"));e.controlsButton&&t.has("controls")&&t.remove("controls"),e.scrubberDiv&&t.has("scrubber")&&t.remove("scrubber")})),Object(a.extend)(p.a.prototype,"headerItems",(function(t){var e=this,o=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),a=d.a.controls(this.attrs.post,this);if(o.discussionControlsToPost&&1===this.attrs.post.number()){var s=this.attrs.post.data.relationships.discussion.data,n=app.store.getById(s.type,s.id),r=g.a.moderationControls(n);r.has("lock")&&r.remove("lock"),r.has("sticky")&&r.remove("sticky"),r.has("rename")&&(r.get("rename").attrs.icon="fas fa-heading"),a.merge(r)}o.postControlsUp&&t.add("controls",m("aside",{className:"Post-actions-top"},m("ul",null,a.toArray().length?m("li",null,m(b.a,{className:"Post-controls-h",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return e.$(".Post-actions-top").addClass("open")},onhide:function(){return e.$(".Post-actions-top").removeClass("open")}},a.toArray())):"")))})),Object(a.override)(N.a.prototype,"view",(function(t){var e=this,o=JSON.parse(app.forum.attribute("block-cat.defaultSettings")),a=this.elementAttrs();a.className=this.classes(a.className).join(" ");var s=d.a.controls(this.attrs.post,this);if(o.discussionControlsToPost){if(1===this.attrs.post.number()){var n=this.attrs.post.data.relationships.discussion.data,r=app.store.getById(n.type,n.id),i=g.a.moderationControls(r);i.has("lock")&&i.remove("lock"),i.has("sticky")&&i.remove("sticky"),i.has("rename")&&(i.get("rename").attrs.icon="fas fa-heading"),s.merge(i)}return m("article",a,m("div",null,this.content(),m("aside",{className:"Post-actions"},m("ul",null,S()(this.actionItems().toArray()),s.toArray().length?m("li",null,m(b.a,{className:"Post-controls",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return e.$(".Post-actions").addClass("open")},onhide:function(){return e.$(".Post-actions").removeClass("open")}},s.toArray())):"")),m("footer",{className:"Post-footer"},m("ul",null,S()(this.footerItems().toArray())))))}return t()})),Object(a.extend)(j.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).postCount&&t.children[2].children.pop()})),Object(a.override)(n.a.prototype,"view",(function(t){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).emoldovaButton){var e=app,o=e.history,a=e.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:a&&a.show.bind(a),onmouseleave:a&&a.onmouseleave.bind(a)},o.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[m("a",{class:"Button Button--icon hasIcon",href:"https://emoldova.org/",title:"EMoldova",active:"false",type:"button",target:"_self"},m("i",{class:"icon fas fa-home Button-icon"})),this.getDrawerButton()])}return t()})),Object(a.extend)(B.a.prototype,"view",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).postReply&&t.children.map((function(e){"reply"===e.key&&t.children.pop()}))})),Object(a.extend)(j.a.prototype,"infoItems",(function(t){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).terminalPost&&t.has("terminalPost")&&t.remove("terminalPost")})),Object(a.extend)(k.a.prototype,"oninit",(function(){JSON.parse(app.forum.attribute("block-cat.defaultSettings")).pane&&app.pane.disable()})),Object(a.extend)(k.a.prototype,"oncreate",(function(){if(JSON.parse(app.forum.attribute("block-cat.defaultSettings")).pane)for(var t,e=O(this.element.children);!(t=e()).done;){var o=t.value;"DiscussionPage-list"===o.className&&o.remove()}})),Object(a.extend)(i.a.prototype,"sidebarItems",(function(t){var e=JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings"));if(e.button_3d_new){var o=document.getElementsByClassName("item-newDiscussion")[0];null!=o&&o.classList.add("item-newDiscussion_3d")}else{var a=document.getElementsByClassName("item-newDiscussion")[0];null!=a&&a.classList.add("item-newDiscussion-stackoverflow")}t.has("nav")&&t.remove("nav");for(var s=this.navItems(this).toArray(),n=0;n<s.length;n++)"separator"===s[n].itemName&&s.splice(n,s.length--);for(var r=this.navItems(this).toArray(),i=0;i<r.length;i++)"separator"===r[i].itemName&&r.splice(0,i+1);if(e.sideNav_shadow){var c=document.getElementsByClassName("nav_Navigation")[0],l=document.getElementsByClassName("nav_Navigation")[1];null!=c&&(c.classList.add("nav_Navigation_shadow"),l.classList.add("nav_Navigation_shadow"))}else{var u=document.getElementsByClassName("sideNav")[0];null!=u&&u.classList.add("sideNav_border")}if(!e.view_hero){var m=document.getElementsByClassName("Hero")[0];null!=m&&m.classList.add("d-none")}t.add("nav_Navigation",L.a.component({buttonClassName:"Button",className:"App-titleControl nav_Navigation",accessibleToggleLabel:P.a.translator.trans("core.forum.index.toggle_sidenav_dropdown_accessible_label")},s)),t.add("nav_Categories",L.a.component({buttonClassName:"Button",className:"App-titleControl nav_Navigation",accessibleToggleLabel:P.a.translator.trans("core.forum.index.toggle_sidenav_dropdown_accessible_label")},r))})),Object(a.override)(j.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),o=t.isUnread(),a=t.isRead(),s=!this.showRepliesCount()&&o,n=0,r=g.a.controls(t,this).toArray(),i=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(n=c.number());var l=ft(this.attrs.params.q);this.highlightRegExp=new RegExp(l+"|"+l.trim().replace(/\s+/g,"|"),"gi")}else n=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);for(var u,p,f=S()(this.infoItems().toArray())[0],d=0;d<S()(this.infoItems().toArray()).length;d++)S()(this.infoItems().toArray())[d].key&&"terminalPost"==S()(this.infoItems().toArray())[d].key&&(u=S()(this.infoItems().toArray())[d]);p=0!=e?e.data.attributes.displayName:"anonim";var h=JSON.parse(P.a.forum.attribute("block-cat.vasiaSettings"));return m("div",i,r.length?b.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right",accessibleToggleLabel:P.a.translator.trans("core.forum.discussion_controls.toggle_dropdown_accessible_label")},r):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(o?"":" disabled"),onclick:this.markAsRead.bind(this)},J()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(o?" unread":"")+(a?" read":"")},m(T.a,{href:P.a.route.discussion(t,n),className:"DiscussionListItem-options"},h.buttons_votes_answers_views?m("div",{className:"DiscussionListItem-options-blocks"},m("h3",{className:""},q()(t.data.attributes.votes?t.votes():"0",this.highlightRegExp)),m("p",{className:""},P.a.translator.trans("block-cat-default.forum.likes"))):"",h.buttons_votes_answers_views?m("div",{className:"DiscussionListItem-options-blocks"},m("h3",{className:""},q()(t.commentCount()-1,this.highlightRegExp)),m("p",{className:""},P.a.translator.trans("block-cat-default.forum.comments"))):"",h.buttons_votes_answers_views?m("div",{className:"DiscussionListItem-options-blocks"},m("h3",{className:""},q()(t.viewCount(),this.highlightRegExp)),m("p",{className:""},P.a.translator.trans("block-cat-default.forum.views"))):""),m("ul",{className:"DiscussionListItem-badges badges"},S()(t.badges().toArray())),m(T.a,{href:P.a.route.discussion(t,n),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},q()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},S()(this.infoItems().toArray())[S()(this.infoItems().toArray()).length-1]),m("div",{className:"DiscussionListItem_tags_and_author"},h.view_tags?m("ul",{className:"DiscussionListItem-info-tags"},f):"",m("div",{className:"DiscussionListItem-options-author"},m(T.a,{className:"author-link",href:e?P.a.route.user(e):"#"},$()(e,{title:""}),m("div",null,m("p",null,p),m("p",null,S()(u))))))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:s?P.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},G()(t[s?"unreadCount":"replyCount"]()))))})),Object(a.extend)(i.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),t.add("Noi",l.a.component({title:"Noi",className:"Button Button--primary",href:"?sort=newest"},P.a.translator.trans("block-cat-default.forum.sort_button_3"))),t.add("Vechi",l.a.component({title:"Vechi",className:"Button Button--primary",href:"?sort=oldest"},P.a.translator.trans("block-cat-default.forum.sort_button_4")))})),Object(a.extend)(i.a.prototype,"actionItems",(function(t){}))}),-20)}]);
//# sourceMappingURL=forum.js.map