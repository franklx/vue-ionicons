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
    name: "baseball-sharp-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Baseball Sharp Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"baseball-sharp-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M302.16 56.2a13.88 13.88 0 01-3.42 8.91l-.11 5.13-27.71-.57c0 1.3.09 2.61.16 3.91a177.33 177.33 0 003.45 26.31l24.72-7.18 7.81 26.88-24.71 7.18a177.21 177.21 0 0013.34 27.69l21.27-15 16.16 22.86-21.29 15.05q5.25 6.33 11.11 12.19c3.91 3.91 8 7.6 12.2 11.1l15.71-22.22 22.86 16.16L358 216.75a178.78 178.78 0 0027.68 13.32l7.49-25.8 26.89 7.81-7.5 25.83a177.8 177.8 0 0031 3.67l-.41-24.67 17.41-.29A208 208 0 00301.82 52.93a13.65 13.65 0 01.34 3.27zM214 441.64l27.91.49a177.46 177.46 0 00-3.62-29.95l-24.14 7-7.81-26.88 24.11-7a177.92 177.92 0 00-13.33-27.68L196.79 372l-16.16-22.86L201 334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91 19.68L141 314.93l13.9-19.66a177.26 177.26 0 00-27.7-13.33l-6.37 21.94-26.89-7.81 6.38-22a177.32 177.32 0 00-26.32-3.4c-1.59-.09-3.18-.16-4.78-.2l.4 22.34-17.71.32a207.88 207.88 0 00161.81 166.48z"}}),_c('path',{attrs:{"d":"M444.65 302.67l-.55-33.06a206 206 0 01-39.33-4.74L397 291.8l-26.94-7.8 7.83-27a206.91 206.91 0 01-36.06-17.35l-16.36 23.15-22.86-16.16 16.33-23.11a204.21 204.21 0 01-30-30l-22.19 15.67-16.16-22.87 22.17-15.67a206 206 0 01-17.38-36.06l-25.75 7.48-7.81-26.89 25.73-7.47q-2-9.21-3.18-18.64h-.47l-.78-14-.33-6-17.94-.32a13.38 13.38 0 01-1.79-.16l-6.35-.13.06-2.47a14 14 0 01-5.66-11.49 13.27 13.27 0 01.13-1.67A208 208 0 0052.16 217.43l16.1-.28.45 25.18 6.83.38 14 .77v.48q9.42 1.17 18.64 3.18l6.68-23L141.7 232l-6.7 23a205.3 205.3 0 0136.06 17.38l14.53-20.56L208.47 268 194 288.5a203.5 203.5 0 0130 30l21.3-15 16.16 22.86-21.36 15.05a206.86 206.86 0 0117.34 36.06l25.27-7.33 7.81 26.86-25.24 7.33a205.9 205.9 0 014.72 38.3l29.42.53-.29 16.48a207.94 207.94 0 00160-157.21z"}})])])};
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
    

    
    var baseballSharp = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return baseballSharp;

})));
