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
    name: "baseball-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Baseball Icon";
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"baseball-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M444 295.67l-.47-26.07a205.42 205.42 0 01-39.27-4.73l-5 17.35a14 14 0 11-26.88-7.81l5-17.38a206.47 206.47 0 01-36.05-17.35l-10.44 14.77a14 14 0 01-22.87-16.16l10.41-14.73a204.8 204.8 0 01-30-30L273.71 204a14 14 0 01-16.16-22.87l14.74-10.42a205.3 205.3 0 01-17.38-36.06l-17.32 5a14 14 0 11-7.81-26.89l17.3-5a205.88 205.88 0 01-4.43-32.59q-.17-3-.24-6l-18.22-.33a14 14 0 01-13.74-14A208 208 0 0055 202.42a16 16 0 0115 15.66l.44 24.43c1.58.05 3.16.11 4.73.2a205.88 205.88 0 0132.59 4.43l5-17.3a14 14 0 0126.89 7.81l-5 17.32a205.21 205.21 0 0136 17.38L181 257.61a14 14 0 0122.87 16.16l-10.39 14.73a205.65 205.65 0 0115.79 14.23 203.79 203.79 0 0114.23 15.79l14.73-10.41A14 14 0 01254.39 331l-14.76 10.43A206.86 206.86 0 01257 377.47l17.38-5.05a14 14 0 017.81 26.89l-17.35 5a205.89 205.89 0 014.7 38.28l18.27.33a16 16 0 0115.71 16.28 11.69 11.69 0 01-.08 1.19 208 208 0 00153.39-151.03A14 14 0 01444 295.67z"}}),_c('path',{attrs:{"d":"M301.49 56.2A14 14 0 01287.5 70h-.25l-16.81-.3c.05 1.31.1 2.62.17 3.93a178.83 178.83 0 003.44 26.31l16.29-4.74a14 14 0 017.81 26.8l-16.27 4.73a178.06 178.06 0 0013.33 27.69l13.84-9.78a14 14 0 1116.16 22.87l-13.86 9.79q5.25 6.33 11.12 12.19c3.9 3.91 8 7.6 12.2 11.1l9.78-13.84A14 14 0 11367.32 203l-9.76 13.8a178.83 178.83 0 0027.68 13.33l4.76-16.28a14 14 0 0126.89 7.81l-4.73 16.26a177.72 177.72 0 0030.95 3.65l-.16-9a14 14 0 0113.75-14.24h.25a14.67 14.67 0 012.59.25 208 208 0 00-158-163.51c-.06.4-.04.76-.05 1.13zM208.44 457.55a16 16 0 0116.28-15.71l16.76.29a178.49 178.49 0 00-3.62-29.95l-16.26 4.72a14 14 0 11-7.81-26.9l16.21-4.7a177.92 177.92 0 00-13.33-27.68l-13.8 9.76a14 14 0 11-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79 13.86a14 14 0 11-22.87-16.16l9.78-13.84a177.16 177.16 0 00-27.69-13.33L122 298.21a14 14 0 11-26.9-7.81l4.73-16.29a177.32 177.32 0 00-26.31-3.44c-.89-.05-1.79-.08-2.68-.12l.16 10.59a16 16 0 01-15.71 16.28H55a16 16 0 01-3.94-.51 208 208 0 00157.65 163.87 15.72 15.72 0 01-.27-3.23z"}})])])};
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
    

    
    var baseball = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return baseball;

})));
