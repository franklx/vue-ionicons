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
    name: "construct-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Construct Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"construct-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M503.58 126.2a16.85 16.85 0 00-27.07-4.55l-51.15 51.15a11.15 11.15 0 01-15.66 0l-22.48-22.48a11.17 11.17 0 010-15.67l50.88-50.89a16.85 16.85 0 00-5.27-27.4c-39.71-17-89.08-7.45-120 23.29-26.81 26.61-34.83 68-22 113.7a11 11 0 01-3.16 11.1L114.77 365.1a56.76 56.76 0 1080.14 80.18L357 272.08a11 11 0 0110.9-3.17c45 12 86 4 112.43-22 15.2-15 25.81-36.17 29.89-59.71 3.83-22.2 1.41-44.44-6.64-61z"}}),_c('path',{attrs:{"d":"M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 00383.72 464h1.1a30.11 30.11 0 0021-8.62l.07-.07 33.43-33.37a29.46 29.46 0 00-2-43.53zM118.54 214.55a20.48 20.48 0 00-3-10.76 2.76 2.76 0 012.62-4.22h.06c.84.09 5.33.74 11.7 4.61 4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 007.22 22.12l66.23-61.55a33.73 33.73 0 00-21.6-9.2 2.65 2.65 0 01-.21-.26l-.65-.69-24.54-33.84a28.45 28.45 0 01-4-26.11 35.23 35.23 0 0111.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a52.92 52.92 0 0115.19.94 65.57 65.57 0 017.06 2.13 15.46 15.46 0 002.15.63 16 16 0 0016.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85 91.85 0 00-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13 123.13 0 00-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222.14 222.14 0 0063.7 129.5a27 27 0 00-4.7 11.77 7.33 7.33 0 01-7.71 6.17H50.2a20.65 20.65 0 00-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 00-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0014.65 6 20.65 20.65 0 0014.59-5.9l29.46-28.79a20.51 20.51 0 006.17-14.76z"}})])])};
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
    

    
    var construct = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return construct;

})));
