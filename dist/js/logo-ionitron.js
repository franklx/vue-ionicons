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
    name: "logo-ionitron-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Ionitron Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-ionitron-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M468.41 269.19c-2.64-33.39-11.76-58-31.44-57.39a1 1 0 00-.92 1.37c5.11 12.59 9.68 36.9 9.17 58.07a1 1 0 01-2 .08c-2.19-21.21-7.1-41.19-16.22-59.43a186.69 186.69 0 00-348.91 41 4 4 0 01-3.33 3.11l-8.65 1.22c-17.2 2.4-26.9 34.9-21.7 72.5s23.5 66.2 40.7 63.8l13.24-1.85a4 4 0 013.93 1.84 186.71 186.71 0 00339-56.07 4 4 0 013.68-3.08l4.4-.24c15.15-2.53 21.75-31.23 19.05-64.93zM94.5 270.42a1 1 0 011.59-1.19c9.63 10 20.25 27.65 23.32 49.86 3.24 23.05-2.24 45.2-9.13 57.87a1 1 0 01-1.84-.73c4.07-14.44 5.16-33.83 2.27-54.74-2.8-20.32-8.71-38.27-16.21-51.07zm178.77 109.79a15.53 15.53 0 01-15.41-13.83 15.48 15.48 0 1115.41 13.83zm81.84-4.72a15.37 15.37 0 1114.6-16.2 15.43 15.43 0 01-14.6 16.2z"}}),_c('path',{attrs:{"d":"M165.51 70a.31.31 0 01.1.2c.1.2.2.3.3.5v.1a5.78 5.78 0 002.3 2.7c2 1.5 5 2.4 8.6 3a63.69 63.69 0 0011.9.5 28.25 28.25 0 002.9-.2c-.4-.4-.8-.9-1.2-1.3h-1.3a52 52 0 01-11.6-.9 19.71 19.71 0 01-8.4-3.4 9.24 9.24 0 01-1.4-1.4 4.48 4.48 0 010-2.3c.5-2.3 2.4-4.8 5.5-7.4a57.25 57.25 0 0110.9-7c.9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2a24.69 24.69 0 00-.2 10.5c2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-3-4-23.3c10.8-4.6 16.3-16.1 14-28a25.8 25.8 0 00-3.9-9.5c-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1a135.27 135.27 0 0121.5-4.2c.6-.1 1.2-.1 1.8-.2l3.5-.3h.6a61.83 61.83 0 0110.8.3 29 29 0 016.1 1.4 5.71 5.71 0 00-.9 3.2 6.12 6.12 0 004.3 5.8 25.53 25.53 0 01-2.1 2.8 26 26 0 01-2.9 2.8c-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5a.35.35 0 00.2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4a29.15 29.15 0 003.2-2.8 29.86 29.86 0 002.4-2.8l.3-.6a6.14 6.14 0 005.4-6 6.06 6.06 0 00-6.1-6.1 6.81 6.81 0 00-2.8.7 24.6 24.6 0 00-8.2-2.7 63.48 63.48 0 00-15.5-.6 14.92 14.92 0 00-2.1.2 13.55 13.55 0 01-2 .2 25.15 25.15 0 00-18.7-3.7 25.86 25.86 0 00-17.8 13c-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9a60.75 60.75 0 00-13.9 9.1c-3.1 2.9-4.9 5.7-5.3 8.3a6.14 6.14 0 00.7 4 2.19 2.19 0 01.3.5z"}})])])};
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
    

    
    var logoIonitron = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoIonitron;

})));
