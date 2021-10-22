module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/DefaultSettingsPage.js":
/*!*****************************************************!*\
  !*** ./src/admin/components/DefaultSettingsPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/ExtensionPage */ "flarum/common/components/ExtensionPage");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/isExtensionEnabled */ "flarum/utils/isExtensionEnabled");
/* harmony import */ var flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__);










var DefaultSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultSettingsPage, _ExtensionPage);

  function DefaultSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = DefaultSettingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oninit.call(this, vnode); // get settings name in Object format


    this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_settings"]); // get routes name in Object format

    this.routes = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_routes"]); // is used when data is saving

    this.loading = false; // is used to check modification

    this.modified = false; // is used to check settings with with another settings dependencies

    this.settingStates = {
      // is used for sidebarmenu from IndexPage
      hideMainPageMenu: 0,
      // is used for toolbar from IndexPage
      hideToolBar: 0,
      // is used for sidebarmenu from DiscussionPage
      hideDiscussionMenu: 0
    };
    this.sameValue = {}; // check value for settings with dependencies
    // if value === 1 then some settings should to hide on page

    Object.keys(this.settings).map(function (key) {
      if (key === 'mainPageMenu') {
        _this.settingStates.hideMainPageMenu = _this.settings[key];
      }

      if (key === 'toolbar') {
        _this.settingStates.hideToolBar = _this.settings[key];
      }

      if (key === 'discussionMenu') {
        _this.settingStates.hideDiscussionMenu = _this.settings[key];
      }
    });
  };

  _proto.content = function content() {
    var _this2 = this;

    var allDiscussions = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.basics.all_discussions_label');
    return (// standard containers on extensions page
      m('.ExtensionPage-settings', [m('.container', [// insert all in form tag
      m('Form', {
        // onsubmit action call onsubmit method
        onsubmit: this.onsubmit.bind(this)
      }, [m('.SettingsGroup', [// container to flex in 2 column
      m('.Settings', [// Start Settings Column
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.title')), !this.settingStates.hideMainPageMenu ? // check if 'mainPageMenu' is not selected
      m('.Form-group', [// allDiscussionsIcon
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.icon')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.icon_help_text', {
        text: allDiscussions
      })), m('.inline', // if icon exists this will be displayed realtime on page
      this.settings['allDiscussionsIcon'] !== "" ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(this.settings['allDiscussionsIcon']) : '', this.settings['allDiscussionsIcon'] !== "" ? m('span', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.basics.all_discussions_label')) : '', m('input.FormControl', {
        type: 'text',
        placeholder: "far fa-comments",
        value: this.settings['allDiscussionsIcon'],
        oninput: function oninput(e) {
          _this2.settings['allDiscussionsIcon'] = e.target.value;
          _this2.modified = true;
        }
      }))]) : '', Object.keys(this.settings).map(function (key) {
        // exit because element was created yet
        if (key === 'allDiscussionsIcon') return;

        if (key === 'refreshButton' || key === 'markAllAsReadButton') {
          return [!_this2.settingStates.hideToolBar ? // check if 'toolbar' is not selected
          m('.Form-group', [// refreshButton and markAllAsReadButton
          flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
            state: _this2.settings[key] || false,
            onchange: function onchange() {
              _this2.settings[key] ^= true;
              _this2.modified = true;
            }
          }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key))), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))]) : ''];
        }

        if (key === 'controlsButton' || key === 'scrubberDiv') {
          return [!_this2.settingStates.hideDiscussionMenu ? // check if 'discussionMenu' is not selected
          m('.Form-group', [// controlsButton and scrubberDiv
          flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
            state: _this2.settings[key] || false,
            onchange: function onchange() {
              _this2.settings[key] ^= true;
              _this2.modified = true;
            }
          }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key))), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))]) : ''];
        } // create another elements


        return [m('.Form-group', [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
          state: _this2.settings[key] || false,
          onchange: function onchange() {
            _this2.settings[key] ^= true;
            _this2.modified = true; // mentioned elements have dependencies

            key === 'mainPageMenu' ? _this2.settingStates.hideMainPageMenu ^= true : '';
            key === 'toolbar' ? _this2.settingStates.hideToolBar ^= true : '';
            key === 'discussionMenu' ? _this2.settingStates.hideDiscussionMenu ^= true : '';
          }
        }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key))), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))])];
      })]), // End Settings Column
      m('.Routes', [// Start Routes Column
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.routes.title')), Object.keys(this.routes).map(function (key) {
        // hide flags input if extension is disable
        if (key === 'flags' && !flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('flarum-flags')) {
          return;
        } // hide following input if extension is disable


        if (key === 'following' && !flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('flarum-subscriptions')) {
          return;
        } // hide tag inputs if extension is disable


        if ((key === 'tag' || key === 'tags') && !flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('flarum-tags')) {
          return;
        } // hide mentions input if extension is disable


        if (key === 'user.mentions' && !flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('flarum-mentions')) {
          return;
        } // hide uploads input if extension is disable


        if (key === 'user.uploads' && !flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('fof-upload')) {
          return;
        } // render another routes


        return m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.routes.route_label', {
          route: key
        })), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.routes." + key)), m('.Default-Routes-Field', {
          className: _this2.routes[key].path ? 'Default-Routes-Field--with-value' : '',
          title: key
        }, [m('.Default-Routes-Field-Wrap', [m('input.FormControl.Default-Routes-Input', {
          type: 'text',
          value: _this2.routes[key].path,
          pattern: _this2.routes[key].regex,
          oninput: function oninput(e) {
            if (e.target.value !== "") {
              if (e.target.value.match(e.target.pattern) !== null) {
                e.target.style.borderColor = "green";
              } else {
                e.target.style.borderColor = "red";
              }
            } else {
              $(e.target).removeAttr("style");
            }

            _this2.routes[key].path = e.target.value;
            _this2.modified = true;
          },
          onfocusout: function onfocusout(e) {
            $(e.target).removeAttr("style");
          },
          onfocus: function onfocus(e) {
            if (e.target.value !== "") {
              if (e.target.value.match(e.target.pattern) !== null) {
                e.target.style.borderColor = "green";
              } else {
                e.target.style.borderColor = "red";
              }
            }
          }
        }), m('.Default-Routes-Placeholder', [m('span.Default-Routes-Placeholder-Hint', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.routes.hint')), ' ', m('span', _this2.routes[key].placeholder)])])])]);
      })]) // End Routes Column
      ]), // save button
      flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        type: 'submit',
        className: 'Button Button--primary',
        loading: this.loading,
        disabled: !this.modified
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.edit_header.submit_button'))])])])
    );
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.loading = true;
    var k = 0;
    Object.keys(this.routes).map(function (key1) {
      Object.keys(_this3.routes).map(function (key2) {
        if (_this3.routes[key1].path !== "") {
          if (key1 !== key2 && _this3.routes[key1].path === _this3.routes[key2].path) {
            $('.Default-Routes-Field[title="' + key1 + '"] > div > input').css("border-color", "red");
            k++;
          }
        }
      });
    });

    if (k > 0) {
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "error"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.routes.same_value'));
      this.loading = false;
      this.modified = false;
      return;
    }

    try {
      var _saveSettings;

      flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default()((_saveSettings = {}, _saveSettings["block-cat.default_settings"] = JSON.stringify(this.settings), _saveSettings["block-cat.default_routes"] = JSON.stringify(this.routes), _saveSettings));
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "success"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.settings.saved_message'));
    } catch (_unused) {
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "error"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.lib.error.generic_message'));
    } finally {
      this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_settings"]);
      this.routes = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_routes"]);
      this.loading = false;
      this.modified = false;
    }
  };

  return DefaultSettingsPage;
}(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DefaultSettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DefaultSettingsPage */ "./src/admin/components/DefaultSettingsPage.js");

app.initializers.add('block-cat/portlet-ui', function () {
  app.extensionData["for"]('block-cat-portlet-ui').registerPage(_components_DefaultSettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/ExtensionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ExtensionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/isExtensionEnabled":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/isExtensionEnabled']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/isExtensionEnabled'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map