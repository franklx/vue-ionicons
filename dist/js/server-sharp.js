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
    name: "server-sharp-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Server Sharp Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"server-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M409.43 389.87C362 410 305.4 421.05 256 421.05s-105.87-11.3-153.44-31.18S48 353.16 48 353.16v38.2c0 31.15 18 43.64 67.32 64.35C153.13 471.59 203.18 480 256 480s102.87-8.41 140.68-24.29C446 435 464 422.51 464 391.36v-38.2s-7.14 16.59-54.57 36.71zM63.69 173.22c11.23 9.84 27.82 19.49 48 27.92 42.48 17.76 96.45 28.37 144.36 28.37s101.88-10.61 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92 6.06-5.31 10.85-10.12 13.47-12.85a8 8 0 002.22-5.54v-26.16c-.84-28.79-24.71-54.41-67.21-72.14C358.83 40.71 308.84 32 256 32s-102.83 8.71-140.74 24.53C72.85 74.22 49 99.78 48.05 128.5v26.33a8 8 0 002.21 5.54c2.58 2.73 7.36 7.54 13.43 12.85z"}}),_c('path',{attrs:{"d":"M409.43 221.91C365 241 305.4 253.09 256 253.09s-108.87-12.27-153.43-31.18S48 185.2 48 185.2v47.36c.08 7.52 5.5 16.2 15.69 25.13 11.24 9.84 27.82 19.5 48 27.92C154.12 303.38 208.09 314 256 314s101.88-10.6 144.36-28.37c20.13-8.42 36.72-18.08 47.95-27.92 10.25-9 15.68-17.71 15.69-25.27V185.2s-10.13 17.62-54.57 36.71z"}}),_c('path',{attrs:{"d":"M409.43 306.38C362 326 305.4 337.56 256 337.56s-109.87-12.8-153.43-31.18S48 269.67 48 269.67v46.25c0 7.55 5.44 16.28 15.69 25.26 11.23 9.84 27.81 19.5 48 27.92 42.48 17.77 96.44 28.37 144.36 28.37s101.88-10.6 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92 10.19-8.93 15.61-17.61 15.69-25.13v-46.38s-7.18 17.09-54.62 36.71z"}})])])};
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
    

    
    var serverSharp = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return serverSharp;

})));
