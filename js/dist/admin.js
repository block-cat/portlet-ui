module.exports=function(t){var e={};function s(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=48)}({1:function(t,e){t.exports=flarum.core.compat.app},11:function(t,e){t.exports=flarum.core.compat["helpers/icon"]},12:function(t,e){t.exports=flarum.core.compat["components/Switch"]},13:function(t,e){t.exports=flarum.core.compat["utils/isExtensionEnabled"]},23:function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},41:function(t,e){t.exports=flarum.core.compat["common/components/ExtensionPage"]},42:function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},48:function(t,e,s){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}s.r(e);var n=s(41),o=s.n(n),i=s(1),r=s.n(i),l=s(12),u=s.n(l),c=s(7),d=s.n(c),g=s(42),p=s.n(g),f=s(13),h=s.n(f),_=s(11),b=s.n(_),v=s(23),y=s.n(v),k=function(t){var e,s;function n(){return t.apply(this,arguments)||this}s=t,(e=n).prototype=Object.create(s.prototype),e.prototype.constructor=e,a(e,s);var o=n.prototype;return o.oninit=function(e){var s=this;t.prototype.oninit.call(this,e),this.welcomeSettings=JSON.parse(r.a.data.settings["block-cat.welcome_settings"]||null),this.welcomeSettings||(this.welcomeSettings={leftText:"",rightText:"",sliderItems:[]}),this.settings=JSON.parse(r.a.data.settings["block-cat.default_settings"]),this.routes=JSON.parse(r.a.data.settings["block-cat.default_routes"]),this.vasia_settings=JSON.parse(r.a.data.settings["block-cat.vasia_settings"]),this.loading=!1,this.modified=!1,this.settingStates={hideMainPageMenu:0,hideToolBar:0,hideDiscussionMenu:0},this.sameValue={},Object.keys(this.settings).map((function(t){"mainPageMenu"===t&&(s.settingStates.hideMainPageMenu=s.settings[t]),"toolbar"===t&&(s.settingStates.hideToolBar=s.settings[t]),"discussionMenu"===t&&(s.settingStates.hideDiscussionMenu=s.settings[t])}))},o.content=function(){var t=this,e=r.a.translator.trans("core.admin.basics.all_discussions_label");return m(".ExtensionPage-settings",[m(".container",[m("Form",{onsubmit:this.onsubmit.bind(this)},[m(".SettingsGroup",[m(".Welcome",[m("label.hello",r.a.translator.trans("block-cat-default.admin.welcome_settings.title")),Object.keys(this.welcomeSettings).map((function(e){return m(".Form-group."+e,[m("label",r.a.translator.trans("block-cat-default.admin.welcome_settings."+e)),m(".helpText",r.a.translator.trans("block-cat-default.admin.welcome_settings."+e+"_text")),m("sliderItems"===e?"textarea.FormControl":"input.FormControl",{type:"sliderItems"===e?void 0:"text",rows:"sliderItems"===e?6:void 0,value:"sliderItems"===e?t.welcomeSettings[e].join("\n"):t.welcomeSettings[e],placeholder:r.a.translator.trans("block-cat-default.admin.welcome_settings.placeholder"),oninput:function(s){t.welcomeSettings[e]="sliderItems"===e?s.target.value.split("\n"):s.target.value,t.modified=!0}})])}))]),m(".Settings",[m("label",r.a.translator.trans("block-cat-default.admin.settings.title")),Object.keys(this.vasia_settings).map((function(e){return"button_3d_new"===e||"sideNav_shadow"===e||"buttons_votes_comments_views"===e||"view_tags"===e||"view_hero"===e||"button_etichete"===e||"sidenav_fixed"===e||"button_adauga_right"===e||"remove_additional_space"===e||"show_item_sort"===e||"add_input_hover_style"===e||"display_pdf_files"===e||"add_borders"===e||"rankings_button_header"===e||"author_bottom"===e?[t.settingStates.hideDiscussionMenu?"":m(".Form-group",[u.a.component({state:t.vasia_settings[e]||!1,onchange:function(){t.vasia_settings[e]^=!0,t.modified=!0}},m("li",r.a.translator.trans("block-cat-default.admin.vasia_settings."+e)))])]:"tags_bottom"===e&&t.vasia_settings.view_tags||"modify_item_sort"===e&&t.vasia_settings.show_item_sort?[t.settingStates.hideDiscussionMenu?"":m(".Form-group .Form-group-children",[u.a.component({state:t.vasia_settings[e]||!1,onchange:function(){t.vasia_settings[e]^=!0,t.modified=!0}},m("li",r.a.translator.trans("block-cat-default.admin.vasia_settings."+e)))])]:"title_font_size"===e||"item_excerpt_font_size"===e||"item_excerpt_color"===e?[m(".Form-group .inline",""!==t.vasia_settings[e]?b()(t.vasia_settings[e]):"",""!==t.vasia_settings[e]?m("span",r.a.translator.trans("block-cat-default.admin.vasia_settings."+e)):"",m("input.FormControl",{type:"text",placeholder:"block-cat-default.admin.vasia_settings."+e,value:t.vasia_settings[e],oninput:function(s){t.vasia_settings[e]=s.target.value,t.modified=!0}}))]:void 0})),this.settingStates.hideMainPageMenu?"":m(".Form-group",[m("label",r.a.translator.trans("block-cat-default.admin.settings.icon")),m(".helpText",r.a.translator.trans("block-cat-default.admin.settings.icon_help_text",{text:e})),m(".inline",""!==this.settings.allDiscussionsIcon?b()(this.settings.allDiscussionsIcon):"",""!==this.settings.allDiscussionsIcon?m("span",r.a.translator.trans("core.admin.basics.all_discussions_label")):"",m("input.FormControl",{type:"text",placeholder:"far fa-comments",value:this.settings.allDiscussionsIcon,oninput:function(e){t.settings.allDiscussionsIcon=e.target.value,t.modified=!0}}))]),Object.keys(this.settings).map((function(e){if("allDiscussionsIcon"!==e)return"refreshButton"===e||"markAllAsReadButton"===e?[t.settingStates.hideToolBar?"":m(".Form-group",[u.a.component({state:t.settings[e]||!1,onchange:function(){t.settings[e]^=!0,t.modified=!0}},m("li",r.a.translator.trans("block-cat-default.admin.settings."+e))),m(".helpText",r.a.translator.trans("block-cat-default.admin.settings."+e+"_help_text"))])]:"controlsButton"===e||"scrubberDiv"===e?[t.settingStates.hideDiscussionMenu?"":m(".Form-group",[u.a.component({state:t.settings[e]||!1,onchange:function(){t.settings[e]^=!0,t.modified=!0}},m("li",r.a.translator.trans("block-cat-default.admin.settings."+e))),m(".helpText",r.a.translator.trans("block-cat-default.admin.settings."+e+"_help_text"))])]:[m(".Form-group",[u.a.component({state:t.settings[e]||!1,onchange:function(){t.settings[e]^=!0,t.modified=!0,"mainPageMenu"===e&&(t.settingStates.hideMainPageMenu^=!0),"toolbar"===e&&(t.settingStates.hideToolBar^=!0),"discussionMenu"===e&&(t.settingStates.hideDiscussionMenu^=!0)}},m("li",r.a.translator.trans("block-cat-default.admin.settings."+e))),m(".helpText",r.a.translator.trans("block-cat-default.admin.settings."+e+"_help_text"))])]}))]),m(".Routes",[m("label",r.a.translator.trans("block-cat-default.admin.routes.title")),Object.keys(this.routes).map((function(e){if(("flags"!==e||h()("flarum-flags"))&&("following"!==e||h()("flarum-subscriptions"))&&("tag"!==e&&"tags"!==e||h()("flarum-tags"))&&("user.mentions"!==e||h()("flarum-mentions"))&&("user.uploads"!==e||h()("fof-upload")))return m(".Form-group",[m("label",r.a.translator.trans("block-cat-default.admin.routes.route_label",{route:e})),m(".helpText",r.a.translator.trans("block-cat-default.admin.routes."+e)),m(".Default-Routes-Field",{className:t.routes[e].path?"Default-Routes-Field--with-value":"",title:e},[m(".Default-Routes-Field-Wrap",[m("input.FormControl.Default-Routes-Input",{type:"text",value:t.routes[e].path,pattern:t.routes[e].regex,oninput:function(s){""!==s.target.value?null!==s.target.value.match(s.target.pattern)?s.target.style.borderColor="green":s.target.style.borderColor="red":$(s.target).removeAttr("style"),t.routes[e].path=s.target.value,t.modified=!0},onfocusout:function(t){$(t.target).removeAttr("style")},onfocus:function(t){""!==t.target.value&&(null!==t.target.value.match(t.target.pattern)?t.target.style.borderColor="green":t.target.style.borderColor="red")}}),m(".Default-Routes-Placeholder",[m("span.Default-Routes-Placeholder-Hint",r.a.translator.trans("block-cat-default.admin.routes.hint"))," ",m("span",t.routes[e].placeholder)])])])])}))])]),d.a.component({type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.modified},r.a.translator.trans("core.admin.edit_header.submit_button"))])])])},o.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var s=0;if(Object.keys(this.routes).map((function(t){Object.keys(e.routes).map((function(a){""!==e.routes[t].path&&t!==a&&e.routes[t].path===e.routes[a].path&&($('.Default-Routes-Field[title="'+t+'"] > div > input').css("border-color","red"),s++)}))})),s>0)return r.a.alerts.show(y.a,{type:"error"},r.a.translator.trans("block-cat-default.admin.routes.same_value")),this.loading=!1,void(this.modified=!1);try{var a;p()(((a={})["block-cat.default_settings"]=JSON.stringify(this.settings),a["block-cat.welcome_settings"]=JSON.stringify(this.welcomeSettings),a["block-cat.default_routes"]=JSON.stringify(this.routes),a["block-cat.vasia_settings"]=JSON.stringify(this.vasia_settings),a)),r.a.alerts.show(y.a,{type:"success"},r.a.translator.trans("core.admin.settings.saved_message"))}catch(t){r.a.alerts.show(y.a,{type:"error"},r.a.translator.trans("core.lib.error.generic_message"))}finally{this.settings=JSON.parse(r.a.data.settings["block-cat.default_settings"]),this.welcomeSettings=JSON.parse(r.a.data.settings["block-cat.welcome_settings"]),this.routes=JSON.parse(r.a.data.settings["block-cat.default_routes"]),this.vasia_settings=JSON.parse(r.a.data.settings["block-cat.vasia_settings"]),this.loading=!1,this.modified=!1}},n}(o.a);app.initializers.add("block-cat/portlet-ui",(function(){app.extensionData.for("block-cat-portlet-ui").registerPage(k)}))},7:function(t,e){t.exports=flarum.core.compat["components/Button"]}});
//# sourceMappingURL=admin.js.map