(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueIonicons = factory());
}(this, (function () { 'use strict';

  var A_ROTATE = 'rotate';
  var A_BEAT = 'beat';
  var A_SHAKE = 'shake';
  var IoniconsMixin = {
    computed: {
      ionClass: function ionClass() {
        var addClass = '';

        if (this.animate === A_ROTATE) {
          addClass = 'ion-rotate ';
        } else if (this.animate === A_BEAT) {
          addClass = 'ion-beat ';
        } else if (this.animate === A_SHAKE) {
          addClass = 'ion-shake ';
        }

        return "".concat(this.rootClass, " ").concat(addClass);
      }
    },
    props: {
      title: {
        type: String,
        "default": ''
      },
      rootClass: {
        type: String,
        "default": ''
      },
      w: {
        type: String,
        "default": '1em'
      },
      h: {
        type: String,
        "default": '1em'
      },
      animate: {
        type: String,
        "default": ''
      }
    }
  };

  //
  var script = {
    name: "cog-sharp-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Cog Sharp Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"cog-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.5 5.5 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.63a10.44 10.44 0 00.39-13.77l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.08-5.85a10.31 10.31 0 00-13.46 2.83L325 96.28a4.58 4.58 0 01-5.6 1.72c-.62-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.42 5.42 0 01-5.36 3.65h-9.75a5.53 5.53 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.46 2a10.46 10.46 0 00-8.57 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.28.89-7.26 2.78-9.51 3.63-2 .72-4.19-.07-6-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.39 10.39 0 00-13.61 2l-7.4 8.9a10.32 10.32 0 00.37 13.76l17.09 19.6a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.37 10.37 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.23 1.24c-.53 2.8-1 5.45-1.47 8.27a5.48 5.48 0 01-4.46 4.64l-25.7 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.5 5.5 0 015.82 2.81c1.5 2.8 3.12 5.64 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.64a10.41 10.41 0 00-.5 13.76l7.41 8.91a10.24 10.24 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.45 5.45 0 011.72 6.21l-9.26 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.39-1.73 3.6-2.5 5.24-1.84 3.47 1.44 5.8 2.25 9.93 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.44 10.44 0 0011.75-7.17l8.5-24.77a5.48 5.48 0 015.36-3.65h9.75a5.52 5.52 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.53-2.33 8.91-3.24l.6-.24c3.06-1.06 4.53.14 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.56 5.56 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.36 10.36 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.23-1.25c.53-2.8 1-5.44 1.47-8.26a5.48 5.48 0 014.46-4.64l25.7-4.14a10.43 10.43 0 009.17-10.28v-11.71zM171.59 361.27a135.12 135.12 0 01.5-210.94l60 105.61zM256 391.11a133.75 133.75 0 01-48.49-9.05L268 276.79h121.22C379.21 341.45 323.29 391.11 256 391.11zm12.06-155.9l-59.95-105.5a133.87 133.87 0 0147.89-8.82c67.29 0 123.21 49.66 133.22 114.32z"}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var cogSharp = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return cogSharp;

})));
