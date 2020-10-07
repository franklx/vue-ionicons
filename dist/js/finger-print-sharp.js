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
    name: "finger-print-sharp-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Finger Print Sharp Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"finger-print-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M56.79 200.58l12.36 7.5 7.35-13.58C93.07 166.75 143.78 102 256 102c115 0 164 70.32 180.1 93.46l8.16 12.7L469.88 192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15 86.82 311.5 72.25 256 72.25c-128.07 0-186.69 75.11-206 107.25L42.63 192 54 198.86a14.09 14.09 0 001.63 1.1 12.57 12.57 0 001.16.62z"}}),_c('path',{attrs:{"d":"M379.22 172.32c-35.54-28.93-78.12-44.25-123.22-44.25-97.52 0-162.31 66-183.33 131.47C53.42 320 76.82 407.61 77.8 411.36l4.38 13.81 29.93-6.43-4.74-15c-.21-.75-22.1-82.93-5.41-135.21 9-28.08 27.73-55.4 51.35-74.79C181.81 170.39 217.35 158 256 158c90.58 0 141.93 70.61 156.45 108.11 11.27 28.93 8.67 61.82-6.28 82-5.53 7.39-15.28 16.07-30.12 15.32-33.81-1.72-39.66-18.43-47.79-50.25-3.9-15.32-7.9-31.18-17.87-44-12.14-15.75-29.8-23.36-54.28-23.36-26.33 0-46.27 8.68-59.38 25.72-28.6 37.28-10 100.93-9.21 103.61l.22.85c1.41 3.86 36.08 96.65 128.93 119.68l14.77 3.21 8.09-28.71-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.44 152.44 0 01-5.1-29.79c-1.08-14.46-.32-34.39 9.43-47.14 7.15-9.32 18.64-13.82 35-13.82 29.79 0 34.78 14.57 42.58 44.79 7.58 29.46 18 69.85 75.84 72.75 22.21 1.07 42.26-8.79 56.34-27.65 21.13-28.28 25.14-71.57 10.19-110.14-11.68-30.36-34.21-60.54-61.73-83.04z"}}),_c('path',{attrs:{"d":"M154.18 343.21c-3.47-28.28 1.41-71 26.55-98.78 17.44-19.29 42.79-29 75.19-29 37.49 0 65.87 16.72 84.51 49.61a154 154 0 0117.88 53.25l1.43 14.69 30-2.2a112.63 112.63 0 00-1-15.6c-.11-1.28-3.57-32.46-21-63.75-24.06-43.11-62.63-65.93-111.74-65.93-41.5 0-74.55 13.18-98.06 39.11-31.85 35.14-38.35 86.25-33.91 122.35v.33c7.97 54.53 28.97 98.14 66.12 137.14l11.6 11.22 20.95-21.79-10.34-9.79c-32.72-34.28-51.25-72.64-58.18-120.86zM132.47 72.66c11.08-6.72 50.27-26.77 123.53-26.77 87.54 0 126.44 28.72 126.87 28.93l13.9 8.86L413 58.47l-13.22-8.56c-.52-.38-1.06-.76-1.6-1.12C385.5 40.54 340.54 16 256 16c-87.71 0-132.75 26.48-143.41 33.71L99 58.52l16.2 25.21z"}}),_c('path',{attrs:{"d":"M390.59 415.21c-33.37 3.75-60.45-2.67-80.71-18.85-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88-30.53 2.23 1.31 15c.22 2.46 5.2 60.75 49.62 96.54 22.11 17.89 49.74 26.89 82.24 26.89a187 187 0 0021.56-1.29l16.59-2.09-6.1-29.71z"}})])])};
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
    

    
    var fingerPrintSharp = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return fingerPrintSharp;

})));
