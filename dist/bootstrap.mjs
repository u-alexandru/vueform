/*!
 * Vueform v1.9.6 (https://github.com/vueform/vueform)
 * Copyright (c) 2024 Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */

import { resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, createVNode, withCtx, Fragment, renderList, createElementVNode, toDisplayString, mergeProps, withDirectives, withKeys, vShow, createSlots, vModelCheckbox, vModelText, toRefs, getCurrentInstance, ref, computed, watch, nextTick, onMounted, onBeforeUnmount, Teleport, vModelSelect, vModelRadio, onUnmounted, normalizeProps, guardReactiveProps, normalizeStyle } from 'vue';

var script$22 = {
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    }
  };

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormElements = resolveComponent("FormElements");

  return (openBlock(), createElementBlock("form", {
    class: normalizeClass(_ctx.classes.form),
    onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.submit && _ctx.submit(...args)), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "empty", { classes: _ctx.classes }, () => [
      (_ctx.showMessages)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormMessages"), { key: 0 }))
        : createCommentVNode("v-if", true),
      (_ctx.showErrors)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormErrors"), { key: 1 }))
        : createCommentVNode("v-if", true),
      (_ctx.showLanguages)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormLanguages"), { key: 2 }))
        : createCommentVNode("v-if", true),
      (_ctx.showTabs)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormTabs"), { key: 3 }))
        : createCommentVNode("v-if", true),
      (_ctx.showSteps)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormSteps"), { key: 4 }))
        : createCommentVNode("v-if", true),
      createVNode(_component_FormElements, null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.showStepsControls)
        ? (openBlock(), createBlock(resolveDynamicComponent("FormStepsControls"), { key: 5 }))
        : createCommentVNode("v-if", true)
    ])
  ], 34 /* CLASS, NEED_HYDRATION */))
}

script$22.render = render$Y;
script$22.__file = "themes/blank/templates/Vueform.vue";

var script$21 = {
    name: 'Vueform',
    render: script$22.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    },
  };

script$21.__file = "themes/vueform/templates/Vueform.vue";

var script$20 = {
    name: 'FormErrors',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          error: '',
        }
      }
    }
  };

const _hoisted_1$I = ["innerHTML"];

function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.errors, (error, key, index) => {
      return (openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.classes.error),
        innerHTML: error,
        key: index
      }, null, 10 /* CLASS, PROPS */, _hoisted_1$I))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$20.render = render$X;
script$20.__file = "themes/blank/templates/FormErrors.vue";

var script$1$ = {
    name: 'FormErrors',
    render: script$20.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-errors',
          container_sm: 'vf-errors-sm',
          container_md: '',
          container_lg: 'vf-errors-lg',
          error: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ])
        }
      }
    }
  };

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$Y = ".vf-errors {\n  background: var(--vf-bg-danger);\n  color: var(--vf-color-danger);\n  border-radius: var(--vf-radius-input);\n  margin-bottom: var(--vf-gutter);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-errors.vf-errors-sm {\n  border-radius: var(--vf-radius-input-sm);\n  margin-bottom: var(--vf-gutter-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-errors.vf-errors-lg {\n  border-radius: var(--vf-radius-input-lg);\n  margin-bottom: var(--vf-gutter-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n  padding: 0.75rem 1rem;\n}";
styleInject(css_248z$Y);

script$1$.__file = "themes/vueform/templates/FormErrors.vue";

var script$1_ = {
    name: 'FormMessages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          message: '',
        }
      }
    }
  };

const _hoisted_1$H = ["innerHTML"];

function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (message, key, index) => {
      return (openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.classes.message),
        innerHTML: message,
        key: index
      }, null, 10 /* CLASS, PROPS */, _hoisted_1$H))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$1_.render = render$W;
script$1_.__file = "themes/blank/templates/FormMessages.vue";

var script$1Z = {
    name: 'FormMessages',
    render: script$1_.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-messages',
          container_sm: 'vf-messages-sm',
          container_md: '',
          container_lg: 'vf-messages-lg',
          message: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ])
        }
      }
    }
  };

var css_248z$X = ".vf-messages {\n  background: var(--vf-bg-success);\n  color: var(--vf-color-success);\n  border-radius: var(--vf-radius-input);\n  margin-bottom: var(--vf-gutter);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-messages.vf-messages-sm {\n  border-radius: var(--vf-radius-input-sm);\n  margin-bottom: var(--vf-gutter-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n  padding: 0.5rem 0.75rem;\n}\n\n.vf-messages.vf-messages-lg {\n  border-radius: var(--vf-radius-input-lg);\n  margin-bottom: var(--vf-gutter-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n  padding: 0.75rem 1rem;\n}";
styleInject(css_248z$X);

script$1Z.__file = "themes/vueform/templates/FormMessages.vue";

var script$1Y = {
    name: 'FormLanguages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    }
  };

function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormLanguage = resolveComponent("FormLanguage");

  return (openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.languages, (lang, code, key) => {
        return (openBlock(), createBlock(_component_FormLanguage, {
          language: lang,
          code: code,
          key: key,
          onSelect: _ctx.handleSelect
        }, null, 8 /* PROPS */, ["language", "code", "onSelect"]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}

script$1Y.render = render$V;
script$1Y.__file = "themes/blank/templates/FormLanguages.vue";

var script$1X = {
    name: 'FormLanguages',
    render: script$1Y.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-languages',
          container_sm: 'vf-languages-sm',
          container_md: '',
          container_lg: 'vf-languages-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$W = ".vf-languages {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-languages.vf-languages-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-languages.vf-languages-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$W);

script$1X.__file = "themes/vueform/templates/FormLanguages.vue";

var script$1W = {
    name: 'FormLanguage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("a", {
      href: "#",
      class: normalizeClass(_ctx.classes.wrapper),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.select && _ctx.select(...args)), ["prevent"]))
    }, toDisplayString(_ctx.language), 3 /* TEXT, CLASS */)
  ], 2 /* CLASS */))
}

script$1W.render = render$U;
script$1W.__file = "themes/blank/templates/FormLanguage.vue";

var script$1V = {
    name: 'FormLanguage',
    render: script$1W.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-language',
          wrapper: 'vf-language-wrapper',
          wrapper_sm: 'vf-language-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-language-wrapper-lg',
          wrapper_active: 'vf-language-wrapper-active',
          wrapper_inactive: '',
          $wrapper: (classes, { selected, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            selected ? classes.wrapper_active : classes.wrapper_inactive
          ]),
        }
      }
    }
  };

var css_248z$V = ".vf-language {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.vf-language-wrapper {\n  padding: 0.5rem 1rem;\n  display: block;\n  margin-left: 1px;\n  margin-right: 1px;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n  color: var(--vf-color-input);\n  text-align: center;\n}\n\n.vf-language-wrapper:hover {\n  text-decoration: none;\n}\n\n.vf-language-wrapper.vf-language-wrapper-sm {\n  padding: 0.375rem 0.875rem;\n}\n\n.vf-language-wrapper.vf-language-wrapper-lg {\n  padding: 0.5rem 1rem;\n}\n\n.vf-language-wrapper.vf-language-wrapper-active {\n  border-color: var(--vf-primary);\n}\n\n.vf-language-wrapper.vf-language-wrapper-invalid {\n  border-color: var(--vf-danger);\n  color: var(--vf-color-danger);\n}";
styleInject(css_248z$V);

script$1V.__file = "themes/vueform/templates/FormLanguage.vue";

var script$1U = {
    name: 'FormTabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormTab = resolveComponent("FormTab");

  return (openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.classes.container),
    role: "tablist"
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs, (tab, name, i) => {
        return (openBlock(), createBlock(_component_FormTab, mergeProps({ ref_for: true }, tab, {
          name: name,
          index: i,
          key: name
        }), null, 16 /* FULL_PROPS */, ["name", "index"]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}

script$1U.render = render$T;
script$1U.__file = "themes/blank/templates/FormTabs.vue";

var script$1T = {
    name: 'FormTabs',
    render: script$1U.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-tabs',
          container_sm: 'vf-tabs-sm',
          container_md: '',
          container_lg: 'vf-tabs-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$U = ".vf-tabs {\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  padding: 0;\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-tabs.vf-tabs-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-tabs.vf-tabs-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$U);

script$1T.__file = "themes/vueform/templates/FormTabs.vue";

var script$1S = {
    name: 'FormTab',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

const _hoisted_1$G = ["aria-selected"];
const _hoisted_2$q = { key: 0 };
const _hoisted_3$f = ["innerHTML"];

function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.classes.wrapper),
      tabindex: "0",
      role: "tab",
      "aria-selected": _ctx.active,
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.select && _ctx.select(...args)), ["prevent"])),
      onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => (_ctx.select && _ctx.select(...args)), ["prevent"]), ["enter","space"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createCommentVNode(" If label is a component "),
        (_ctx.isLabelComponent)
          ? (openBlock(), createElementBlock("span", _hoisted_2$q, [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.tabLabel), { form$: _ctx.form$ }, null, 8 /* PROPS */, ["form$"]))
            ]))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" If label is HTML "),
              createElementVNode("span", { innerHTML: _ctx.tabLabel }, null, 8 /* PROPS */, _hoisted_3$f)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ])
    ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1$G)
  ], 2 /* CLASS */)), [
    [vShow, _ctx.visible]
  ])
}

script$1S.render = render$S;
script$1S.__file = "themes/blank/templates/FormTab.vue";

var script$1R = {
    name: 'FormTab',
    render: script$1S.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-tab',
          wrapper: 'vf-tab-wrapper',
          wrapper_active: 'vf-tab-wrapper-active',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: 'vf-tab-wrapper-invalid',
          wrapper_sm: 'vf-tab-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-tab-wrapper-lg',
          $container: (classes, {}) => ([
            classes.container,
          ]),
          $wrapper: (classes, { active, invalid, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            active ? classes.wrapper_active : classes.wrapper_inactive,
            invalid ? classes.wrapper_invalid : classes.wrapper_valid,
          ]),
        }
      }
    }
  };

var css_248z$T = ".vf-tab-wrapper {\n  padding: 0.5rem 1rem;\n  display: block;\n  margin-left: 1px;\n  margin-right: 1px;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n  color: var(--vf-color-input);\n}\n\n.vf-tab-wrapper:hover {\n  text-decoration: none;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-sm {\n  padding: 0.375rem 0.875rem;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-lg {\n  padding: 0.5rem 1rem;\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-active {\n  border-color: var(--vf-primary);\n}\n\n.vf-tab-wrapper.vf-tab-wrapper-invalid {\n  border-color: var(--vf-danger);\n  color: var(--vf-color-danger);\n}";
styleInject(css_248z$T);

script$1R.__file = "themes/vueform/templates/FormTab.vue";

var script$1Q = {
    name: 'FormSteps',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  };

function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormStep = resolveComponent("FormStep");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container),
    role: "tablist"
  }, [
    createElementVNode("ul", {
      class: normalizeClass(_ctx.classes.wrapper)
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.steps, (step, name) => {
          return (openBlock(), createBlock(_component_FormStep, mergeProps({ ref_for: true }, step, {
            name: name,
            key: name
          }), null, 16 /* FULL_PROPS */, ["name"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$1Q.render = render$R;
script$1Q.__file = "themes/blank/templates/FormSteps.vue";

var script$1P = {
    name: 'FormSteps',
    render: script$1Q.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-steps-container',
          container_sm: 'vf-steps-container-sm',
          container_md: '',
          container_lg: 'vf-steps-container-lg',
          wrapper: 'vf-steps-wrapper',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$S = ".vf-steps-container {\n  width: 100%;\n  position: relative;\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-steps-container:before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-bg-passive);\n  position: absolute;\n  top: 0.375rem;\n  left: 0.125rem;\n  right: 0.125rem;\n  height: 0.25rem;\n}\n\n.vf-steps-container.vf-steps-container-sm {\n  margin: 0 0 var(--vf-gutter) 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-steps-container.vf-steps-container-lg {\n  margin: 0 0 var(--vf-gutter-lg) 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-steps-wrapper {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  overflow-x: auto;\n}";
styleInject(css_248z$S);

script$1P.__file = "themes/vueform/templates/FormSteps.vue";

var script$1O = {
    name: 'FormStepsControls',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormStepsControl = resolveComponent("FormStepsControl");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createVNode(_component_FormStepsControl, {
      type: "previous",
      labels: _ctx.labels
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "previous")
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["labels"]),
    createVNode(_component_FormStepsControl, {
      type: "next",
      labels: _ctx.labels
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "next")
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["labels"]),
    createVNode(_component_FormStepsControl, {
      type: "finish",
      labels: _ctx.labels
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "finish")
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["labels"])
  ], 2 /* CLASS */))
}

script$1O.render = render$Q;
script$1O.__file = "themes/blank/templates/FormStepsControls.vue";

var script$1N = {
    name: 'FormStepsControls',
    render: script$1O.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-steps-controls',
          container_sm: 'vf-steps-controls-sm',
          container_md: '',
          container_lg: 'vf-steps-controls-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$R = ".vf-steps-controls {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--vf-gutter-lg) 0 0 0;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-steps-controls.vf-steps-controls-sm {\n  margin: var(--vf-gutter) 0 0 0;\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-md);\n}\n\n.vf-steps-controls.vf-steps-controls-lg {\n  margin: var(--vf-gutter-lg) 0 0 0;\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}";
styleInject(css_248z$R);

script$1N.__file = "themes/vueform/templates/FormStepsControls.vue";

var script$1M = {
    name: 'FormStepsControl',
    data() {
      return {
        merge: true,
        defaultClasses: {
          button: '',
        }
      }
    }
  };

const _hoisted_1$F = ["disabled"];
const _hoisted_2$p = ["innerHTML", "disabled"];
const _hoisted_3$e = ["disabled"];

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" If label is a component "),
    (_ctx.visible && _ctx.label && _ctx.isLabelComponent)
      ? (openBlock(), createElementBlock("button", {
          key: 0,
          disabled: _ctx.isDisabled,
          class: normalizeClass(_ctx.classes.button),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
          onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]), ["enter","space"]))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { step$: _ctx.current$ }, null, 8 /* PROPS */, ["step$"]))
        ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1$F))
      : (_ctx.visible && _ctx.label)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" If label is HTML "),
            createElementVNode("button", {
              innerHTML: _ctx.label,
              disabled: _ctx.isDisabled,
              class: normalizeClass(_ctx.classes.button),
              onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
              onKeypress: _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]), ["enter","space"]))
            }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_2$p)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (_ctx.visible)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createCommentVNode(" If label is a slot "),
              createElementVNode("button", {
                disabled: _ctx.isDisabled,
                class: normalizeClass(_ctx.classes.button),
                onClick: _cache[4] || (_cache[4] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
                onKeypress: _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]), ["enter","space"]))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3$e)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1M.render = render$P;
script$1M.__file = "themes/blank/templates/FormStepsControl.vue";

var script$1L = {
    name: 'FormStepsControl',
    render: script$1M.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          button: 'vf-btn',
          button_previous: '',
          button_previous_enabled: 'vf-btn-secondary',
          button_previous_disabled: 'vf-btn-secondary vf-btn-disabled',
          button_next: '',
          button_next_enabled: 'vf-btn-primary',
          button_next_disabled: 'vf-btn-primary vf-btn-disabled',
          button_next_loading: 'vf-btn-loading vf-btn-loading-primary',
          button_finish: '',
          button_finish_enabled: 'vf-btn-primary',
          button_finish_disabled: 'vf-btn-primary vf-btn-disabled',
          button_finish_loading: 'vf-btn-loading vf-btn-loading-primary',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $button: (classes, { isDisabled, isLoading, type, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            classes[`button_${type}`],
            isDisabled ? classes[`button_${type}_disabled`] : classes[`button_${type}_enabled`],
            isLoading ? classes[`button_${type}_loading`] : null,
          ]),
        }
      }
    }
  };

script$1L.__file = "themes/vueform/templates/FormStepsControl.vue";

var script$1K = {
    name: 'FormStep',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

const _hoisted_1$E = ["tabindex", "aria-selected"];
const _hoisted_2$o = { key: 0 };
const _hoisted_3$d = ["innerHTML"];

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.visible)
    ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass(_ctx.classes.container)
      }, [
        createElementVNode("a", {
          href: "",
          class: normalizeClass(_ctx.classes.wrapper),
          tabindex: _ctx.isDisabled ? -1 : 0,
          role: "tab",
          "aria-selected": _ctx.active,
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.select && _ctx.select(...args)), ["prevent"])),
          onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => (_ctx.select && _ctx.select(...args)), ["prevent"]), ["enter","space"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createCommentVNode(" If label is a component "),
            (_ctx.isLabelComponent)
              ? (openBlock(), createElementBlock("span", _hoisted_2$o, [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.stepLabel), { form$: _ctx.form$ }, null, 8 /* PROPS */, ["form$"]))
                ]))
              : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createCommentVNode(" If label is HTML "),
                  createElementVNode("span", { innerHTML: _ctx.stepLabel }, null, 8 /* PROPS */, _hoisted_3$d)
                ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          ])
        ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1$E)
      ], 2 /* CLASS */))
    : createCommentVNode("v-if", true)
}

script$1K.render = render$O;
script$1K.__file = "themes/blank/templates/FormStep.vue";

var script$1J = {
    name: 'FormStep',
    render: script$1K.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-step',
          wrapper: '',
          container_active: 'vf-step-active',
          container_inactive: '',
          container_invalid: 'vf-step-invalid',
          container_valid: '',
          container_disabled: 'vf-step-disabled',
          container_enabled: '',
          container_completed: 'vf-step-completed',
          container_incompleted: '',
          container_pending: 'vf-step-pending',
          $container: (classes, { active, isDisabled, completed, invalid, pending }) => ([
            classes.container,
            active ? classes.container_active : classes.container_inactive,
            isDisabled ? classes.container_disabled : classes.container_enabled,
            completed ? classes.container_completed : classes.container_incompleted,
            invalid ? classes.container_invalid : classes.container_valid,
            pending ? classes.container_pending : null,
          ]),
        }
      }
    }
  };

var css_248z$Q = ".vf-step {\n  display: block;\n  position: relative;\n  white-space: nowrap;\n  flex: 1 1;\n  text-align: center;\n  padding: 1.25rem 0.625rem 0;\n}\n\n.vf-step a {\n  text-decoration: none !important;\n  color: inherit;\n}\n\n.vf-step a:hover, .vf-step a:focus, .vf-step a:active {\n  text-decoration: none !important;\n  color: inherit;\n}\n\n.vf-step a:before {\n  content: \" \";\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  position: absolute;\n  background: var(--vf-primary);\n  border-radius: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 0px;\n}\n\n.vf-step a:after {\n  content: \" \";\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  position: absolute;\n  background: #FFFFFF;\n  border-radius: 50%;\n  left: calc(50% - 0.25rem);\n  transform: scale(0);\n  top: 0.25rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.vf-step:first-of-type {\n  padding-left: 0;\n  text-align: left;\n}\n\n.vf-step:first-of-type:before {\n  display: none;\n}\n\n.vf-step:first-of-type:after {\n  left: 0;\n}\n\n.vf-step:first-of-type a:before {\n  left: 0;\n  transform: none;\n}\n\n.vf-step:first-of-type a:after {\n  left: 0.25rem;\n  transform: scale(0);\n}\n\n.vf-step:last-of-type {\n  padding-right: 0;\n  text-align: right;\n}\n\n.vf-step:last-of-type:after {\n  display: none;\n}\n\n.vf-step:last-of-type:before {\n  right: 0;\n}\n\n.vf-step:last-of-type a:before {\n  right: 0;\n  left: auto;\n  left: initial;\n  transform: none;\n}\n\n.vf-step:last-of-type a:after {\n  left: auto;\n  left: initial;\n  transform: scale(0);\n  right: 0.25rem;\n}\n\n.vf-step.vf-step-disabled:before {\n  background: var(--vf-bg-passive);\n  left: -100%;\n}\n\n.vf-step.vf-step-disabled a {\n  color: var(--vf-color-passive);\n}\n\n.vf-step.vf-step-disabled a:before {\n  background: var(--vf-bg-passive);\n}\n\n.vf-step.vf-step-completed + .vf-step:not(.vf-step-completed):before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-primary);\n  position: absolute;\n  top: 0.375rem;\n  left: 0px;\n  right: 50%;\n  height: 0.25rem;\n}\n\n.vf-step.vf-step-completed + .vf-step:last-of-type:before {\n  right: 0px;\n}\n\n.vf-step.vf-step-completed:before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-primary);\n  position: absolute;\n  top: 0.375rem;\n  left: 0px;\n  right: 0px;\n  height: 0.25rem;\n}\n\n.vf-step.vf-step-completed a:after {\n  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check\" class=\"svg-inline--fa fa-check fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"white\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>');\n  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check\" class=\"svg-inline--fa fa-check fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"white\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>');\n  mask-size: 0.5rem 0.5rem;\n  -webkit-mask-size: 0.5rem 0.5rem;\n  mask-position: 0 0;\n  -webkit-mask-position: 0 0;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n  border-radius: 0;\n  transform: scale(1);\n}\n\n.vf-step.vf-step-active a:after {\n  mask-image: none;\n  -webkit-mask-image: none;\n  background-color: var(--vf-color-on-primary);\n  top: 0.25rem;\n  transform: scale(1);\n  border-radius: 50%;\n}\n\n.vf-step.vf-step-invalid a {\n  color: var(--vf-bg-btn-danger);\n}\n\n.vf-step.vf-step-invalid a:before {\n  background-color: var(--vf-bg-btn-danger);\n}\n\n.vf-step.vf-step-invalid a:after {\n  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"exclamation\" class=\"svg-inline--fa fa-exclamation fa-w-6\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 512\"><path fill=\"white\" d=\"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z\"></path></svg>');\n  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"exclamation\" class=\"svg-inline--fa fa-exclamation fa-w-6\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 512\"><path fill=\"white\" d=\"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z\"></path></svg>');\n  mask-size: 0.5rem 0.5rem;\n  -webkit-mask-size: 0.5rem 0.5rem;\n  mask-position: 0 0;\n  -webkit-mask-position: 0 0;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  background-color: var(--vf-color-btn-danger);\n  width: 0.5rem;\n  height: 0.5rem;\n  top: 0.25rem;\n  border-radius: 0;\n}\n\n.vf-step.vf-step-invalid.vf-step-active a:after {\n  mask-image: none;\n  -webkit-mask-image: none;\n  background-color: var(--vf-color-on-primary);\n  transform: scale(1);\n  border-radius: 50%;\n}\n\n.vf-step.vf-step-pending a:after {\n  animation: 1s linear infinite step-loading;\n  background: var(--vf-color-btn-danger);\n  top: 0.25rem;\n  border-radius: 50%;\n}\n\n@keyframes step-loading {\n  0% {\n    transform: scale(0.5);\n  }\n\n  20% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(0.5);\n  }\n}";
styleInject(css_248z$Q);

script$1J.__file = "themes/vueform/templates/FormStep.vue";

var script$1I = {
    name: 'FormElements',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.schema, (element, name) => {
        return (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
          name: name,
          key: name
        }), null, 16 /* FULL_PROPS */, ["name"]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 2 /* CLASS */))
}

script$1I.render = render$N;
script$1I.__file = "themes/blank/templates/FormElements.vue";

var script$1H = {
    name: 'FormElements',
    render: script$1I.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-row',
          container_sm: 'vf-row-sm',
          container_md: '',
          container_lg: 'vf-row-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$P = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$P);

script$1H.__file = "themes/vueform/templates/FormElements.vue";

var script$1G = {
    name: 'ElementLayout',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          outerWrapper: '',
          innerContainer: '',
          innerWrapperBefore: '',
          innerWrapper: '',
          innerWrapperAfter: '',
        },
      }
    },
  };

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabel = resolveComponent("ElementLabel");
  const _component_ElementText = resolveComponent("ElementText");
  const _component_ElementDescription = resolveComponent("ElementDescription");
  const _component_ElementError = resolveComponent("ElementError");
  const _component_ElementMessage = resolveComponent("ElementMessage");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.classes.outerWrapper)
    }, [
      createVNode(_component_ElementLabel, null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "label")
        ]),
        info: withCtx(() => [
          renderSlot(_ctx.$slots, "info")
        ]),
        _: 3 /* FORWARDED */
      }),
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.innerContainer)
      }, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.innerWrapperBefore)
        }, [
          createVNode(_component_ElementText, { type: "before" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "before")
            ]),
            _: 3 /* FORWARDED */
          })
        ], 2 /* CLASS */),
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.innerWrapper)
        }, [
          renderSlot(_ctx.$slots, "element")
        ], 2 /* CLASS */),
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.innerWrapperAfter)
        }, [
          createVNode(_component_ElementText, { type: "between" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "between")
            ]),
            _: 3 /* FORWARDED */
          }),
          createVNode(_component_ElementDescription, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "description")
            ]),
            _: 3 /* FORWARDED */
          }),
          createVNode(_component_ElementError),
          createVNode(_component_ElementMessage),
          createVNode(_component_ElementText, { type: "after" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "after")
            ]),
            _: 3 /* FORWARDED */
          })
        ], 2 /* CLASS */)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */)
  ], 2 /* CLASS */)), [
    [vShow, _ctx.visible]
  ])
}

script$1G.render = render$M;
script$1G.__file = "themes/blank/templates/ElementLayout.vue";

var script$1F = {
    name: 'ElementLayout',
    render: script$1G.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-layout',
          container_sm: 'vf-element-layout-sm',
          container_md: '',
          container_lg: 'vf-element-layout-lg',
          container_error: 'vf-element-layout-error',
          outerWrapper: 'vf-element-layout-outer-wrapper',
          innerContainer: 'vf-layout-inner-container',
          innerWrapperBefore: 'vf-layout-inner-wrapper-before',
          innerWrapper: 'vf-layout-inner-wrapper',
          innerWrapperAfter: 'vf-layout-inner-wrapper-after',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            el$.columnsClasses.container,
            el$.classes.container,
            !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null
          ]),
          $innerContainer:  (classes, { el$ }) => ([
            classes.innerContainer,
            el$.columnsClasses.innerContainer,
          ]),
          $innerWrapper:  (classes, { el$ }) => ([
            classes.innerWrapper,
            el$.columnsClasses.wrapper,
          ]),
        }
      }
    }
  };

var css_248z$O = "/* Some styles are contained in Vueform.vue */\n\n.vf-element-layout {\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-element-layout.vf-element-layout-sm {\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-element-layout.vf-element-layout-lg {\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-layout-inner-container {\n  flex: 1 1 0%;\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n.vf-layout-inner-container .vf-layout-inner-wrapper,\n.vf-layout-inner-container .vf-layout-inner-wrapper-before,\n.vf-layout-inner-container .vf-layout-inner-wrapper-after {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.vf-layout-inner-wrapper-before,\n.vf-layout-inner-wrapper-after {\n  grid-column: span 12/span 12;\n  padding-left: var(--vf-gutter);\n  padding-right: var(--vf-gutter);\n}\n\n.vf-element-layout-outer-wrapper {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}";
styleInject(css_248z$O);

script$1F.__file = "themes/vueform/templates/ElementLayout.vue";

var script$1E = {
    name: 'ElementLayoutInline',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  };

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabel = resolveComponent("ElementLabel");
  const _component_ElementText = resolveComponent("ElementText");
  const _component_ElementDescription = resolveComponent("ElementDescription");
  const _component_ElementError = resolveComponent("ElementError");
  const _component_ElementMessage = resolveComponent("ElementMessage");

  return withDirectives((openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createVNode(_component_ElementLabel, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "label")
      ]),
      _: 3 /* FORWARDED */
    }),
    createVNode(_component_ElementText, { type: "before" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "before")
      ]),
      _: 3 /* FORWARDED */
    }),
    renderSlot(_ctx.$slots, "element"),
    createVNode(_component_ElementText, { type: "between" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "between")
      ]),
      _: 3 /* FORWARDED */
    }),
    createVNode(_component_ElementDescription, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "description")
      ]),
      _: 3 /* FORWARDED */
    }),
    createVNode(_component_ElementError),
    createVNode(_component_ElementMessage),
    createVNode(_component_ElementText, { type: "after" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "after")
      ]),
      _: 3 /* FORWARDED */
    })
  ], 2 /* CLASS */)), [
    [vShow, _ctx.visible]
  ])
}

script$1E.render = render$L;
script$1E.__file = "themes/blank/templates/ElementLayoutInline.vue";

var script$1D = {
    name: 'ElementLayoutInline',
    render: script$1E.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-inline-layout',
          container_error: 'has-error',
          $container: (classes, { el$ }) => ([
            classes.container,
            !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null
          ]),
        }
      }
    }
  };

var css_248z$N = ".vf-inline-layout {\n  display: flex;\n}";
styleInject(css_248z$N);

script$1D.__file = "themes/vueform/templates/ElementLayoutInline.vue";

var script$1C = {
    name: 'ElementLoader',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          loader: '',
        }
      }
    }
  };

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("span", {
      class: normalizeClass(_ctx.classes.loader)
    }, null, 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$1C.render = render$K;
script$1C.__file = "themes/blank/templates/ElementLoader.vue";

var script$1B = {
    name: 'ElementLoader',
    render: script$1C.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-loader-container',
          loader: 'vf-element-loader',
          loader_sm: 'vf-element-loader-sm',
          loader_md: '',
          loader_lg: 'vf-element-loader-lg',
          $loader: (classes, { Size }) => ([
            classes.loader,
            classes[`loader_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$M = ".vf-element-loader-container {\n  position: relative;\n  z-index: 1;\n  order: 1;\n}\n\n.vf-element-loader {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  display: block;\n  right: var(--vf-px-input);\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.vf-element-loader:before, .vf-element-loader:after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  margin: -0.5rem 0 0 -0.5rem;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-color: var(--vf-primary) transparent transparent;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: 0 0 0 1px transparent;\n  box-sizing: border-box;\n}\n\n.vf-element-loader:before {\n  animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);\n}\n\n.vf-element-loader:after {\n  animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);\n}\n\n.vf-element-loader.vf-element-loader-sm {\n  right: var(--vf-px-input-sm);\n}\n\n.vf-element-loader.vf-element-loader-lg {\n  right: var(--vf-px-input-lg);\n}\n\n@keyframes vf-element-loader {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(2turn);\n  }\n}";
styleInject(css_248z$M);

script$1B.__file = "themes/vueform/templates/ElementLoader.vue";

var script$1A = {
    name: 'ElementLabelFloating',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          label: '',
        }
      }
    }
  };

const _hoisted_1$D = ["innerHTML"];

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("span", {
      class: normalizeClass(_ctx.classes.label),
      innerHTML: _ctx.floating
    }, null, 10 /* CLASS, PROPS */, _hoisted_1$D)
  ], 2 /* CLASS */))
}

script$1A.render = render$J;
script$1A.__file = "themes/blank/templates/ElementLabelFloating.vue";

var script$1z = {
    name: 'ElementLabelFloating',
    render: script$1A.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-floating-wrapper',
          label: 'vf-floating-label',
          label_enabled: '',
          label_disabled: 'vf-floating-label-disabled',
          label_danger: 'vf-floating-label-danger',
          label_success: 'vf-floating-label-success',
          label_focused: 'vf-floating-label-focus',
          label_sm: 'vf-floating-label-sm',
          label_md: '',
          label_lg: 'vf-floating-label-lg',
          label_invisible: '',
          label_visible: 'vf-floating-label-visible',
          $label: (classes, { visible, Size, el$ }) => ([
            classes.label,
            classes[`label_${Size}`],
            visible ? classes.label_visible : classes.label_invisible,
            el$.focused ? classes.label_focused : null,
            !el$.isDisabled && !el$.isDanger && !el$.isSuccess ? classes.label_enabled : null,
            el$.isDisabled ? classes.label_disabled : null,
            el$.isDanger ? classes.label_danger : null,
            el$.isSuccess ? classes.label_success : null,
          ]),
        }
      }
    }
  };

var css_248z$L = ".vf-floating-wrapper {\n  position: relative;\n}\n\n.vf-floating-label {\n  position: absolute;\n  z-index: 1;\n  left: var(--vf-px-input);\n  font-size: 0.6875rem;\n  background-color: var(--vf-bg-input);\n  padding: 0 1px;\n  line-height: 1px;\n  transition-property: box-shadow, color, background-color, border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  opacity: 0;\n  visibility: hidden;\n  white-space: nowrap;\n  color: var(--vf-color-floating);\n  margin-top: var(--vf-floating-top);\n}\n\n.vf-floating-label.vf-floating-label-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vf-floating-label.vf-floating-label-sm {\n  left: var(--vf-px-input-sm);\n  margin-top: var(--vf-floating-top-sm);\n}\n\n.vf-floating-label.vf-floating-label-lg {\n  left: var(--vf-px-input-lg);\n  margin-top: var(--vf-floating-top-lg);\n  background-color: transparent !important;\n}\n\n.vf-floating-label.vf-floating-label-disabled {\n  background-color: var(--vf-bg-disabled);\n}\n\n.vf-floating-label.vf-floating-label-focus {\n  background-color: var(--vf-bg-input-focus);\n  color: var(--vf-color-floating-focus);\n}\n\n.vf-floating-label.vf-floating-label-danger {\n  background-color: var(--vf-bg-input-danger);\n  color: var(--vf-color-floating-danger);\n}\n\n.vf-floating-label.vf-floating-label-success {\n  background-color: var(--vf-bg-input-success);\n  color: var(--vf-color-floating-success);\n}\n\n.vf-input-group .vf-floating-label {\n  top: calc(var(--vf-border-width-input-t) * -1);\n}\n\n[dir=rtl] .vf-floating-label {\n  left: auto;\n  right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-floating-label.vf-floating-label-sm {\n  left: auto;\n  right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-floating-label.vf-floating-label-lg {\n  left: auto;\n  right: var(--vf-px-input-lg);\n}";
styleInject(css_248z$L);

script$1z.__file = "themes/vueform/templates/ElementLabelFloating.vue";

var script$1y = {
    name: 'ElementLabel',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

const _hoisted_1$C = ["for", "id"];
const _hoisted_2$n = ["for", "id"];
const _hoisted_3$c = ["innerHTML"];
const _hoisted_4$7 = ["for", "id"];
const _hoisted_5$5 = ["for", "id"];

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementInfo = resolveComponent("ElementInfo");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" If label is a component "),
    (_ctx.label && _ctx.isLabelComponent)
      ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(_ctx.classes.container),
          for: _ctx.name,
          id: _ctx.id
        }, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.classes.wrapper)
          }, [
            (_ctx.isLabelComponent)
              ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { key: 0 }))
              : createCommentVNode("v-if", true)
          ], 2 /* CLASS */),
          createVNode(_component_ElementInfo, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "info")
            ]),
            _: 3 /* FORWARDED */
          })
        ], 10 /* CLASS, PROPS */, _hoisted_1$C))
      : (_ctx.label)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" If label is HTML "),
            createElementVNode("label", {
              class: normalizeClass(_ctx.classes.container),
              for: _ctx.name,
              id: _ctx.id
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.wrapper),
                innerHTML: _ctx.label
              }, null, 10 /* CLASS, PROPS */, _hoisted_3$c),
              createVNode(_component_ElementInfo, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "info")
                ]),
                _: 3 /* FORWARDED */
              })
            ], 10 /* CLASS, PROPS */, _hoisted_2$n)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (_ctx.isSlot)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createCommentVNode(" If label is a slot "),
              createElementVNode("label", {
                class: normalizeClass(_ctx.classes.container),
                for: _ctx.name,
                id: _ctx.id
              }, [
                createElementVNode("span", {
                  class: normalizeClass(_ctx.classes.wrapper)
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2 /* CLASS */),
                createVNode(_component_ElementInfo, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "info")
                  ]),
                  _: 3 /* FORWARDED */
                })
              ], 10 /* CLASS, PROPS */, _hoisted_4$7)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : (_ctx.hasLabel)
            ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createCommentVNode(" If labels are forced but has no value "),
                createElementVNode("label", {
                  class: normalizeClass(_ctx.classes.container),
                  for: _ctx.name,
                  id: _ctx.id
                }, null, 10 /* CLASS, PROPS */, _hoisted_5$5)
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1y.render = render$I;
script$1y.__file = "themes/blank/templates/ElementLabel.vue";

var script$1x = {
    name: 'ElementLabel',
    render: script$1y.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-label',
          container_sm: 'vf-label-sm',
          container_md: '',
          container_lg: 'vf-label-lg',
          container_horizontal_sm: 'vf-horizontal-label-sm',
          container_horizontal_md: 'vf-horizontal-label',
          container_horizontal_lg: 'vf-horizontal-label-lg',
          container_vertical_sm: 'vf-vertical-label-sm',
          container_vertical_md: 'vf-vertical-label',
          container_vertical_lg: 'vf-vertical-label-lg',
          wrapper: '',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            !el$.inline ? el$.columnsClasses.label : null,
            el$.cols.default.label < 12 ? classes[`container_horizontal_${Size}`] : classes[`container_vertical_${Size}`],
            ...(Object.keys(el$.cols).length > 1 ? (el$.$vueform.config.breakpoints||['sm', 'md', 'lg', 'xl', '2xl']).map((breakpoint) => {
              if (!el$.cols[breakpoint]?.label) {
                return null
              }

              return el$.cols[breakpoint].label < 12
                ? classes[`container_horizontal_${Size}`].map(c => `vf-${breakpoint}:${c}`).join(' ')
                : classes[`container_vertical_${Size}`].map(c => `vf-${breakpoint}:${c}`).join(' ')
            }) : []),
          ]),
        }
      }
    }
  };

var css_248z$K = "/* Styles can be found at scss/_label.scss */";
styleInject(css_248z$K);

script$1x.__file = "themes/vueform/templates/ElementLabel.vue";

var script$1w = {
    name: 'ElementInfo',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          content: '',
        }
      }
    }
  };

const _hoisted_1$B = ["id"];
const _hoisted_2$m = ["innerHTML"];

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.info || _ctx.isSlot)
    ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        onMouseover: _cache[0] || (_cache[0] = (...args) => (_ctx.handleMouseOver && _ctx.handleMouseOver(...args)))
      }, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.wrapper),
          id: _ctx.id
        }, [
          (_ctx.isSlot)
            ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.classes.content)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */))
            : (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(_ctx.classes.content),
                innerHTML: _ctx.info
              }, null, 10 /* CLASS, PROPS */, _hoisted_2$m))
        ], 10 /* CLASS, PROPS */, _hoisted_1$B)
      ], 34 /* CLASS, NEED_HYDRATION */))
    : createCommentVNode("v-if", true)
}

script$1w.render = render$H;
script$1w.__file = "themes/blank/templates/ElementInfo.vue";

var script$1v = {
    name: 'ElementInfo',
    render: script$1w.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-info',
          wrapper: 'vf-element-info-wrapper',
          wrapper_left: 'vf-element-info-wrapper-left',
          wrapper_right: 'vf-element-info-wrapper-right',
          wrapper_top: 'vf-element-info-wrapper-top',
          wrapper_bottom: 'vf-element-info-wrapper-bottom',
          content: 'vf-element-info-content',
          $wrapper: (classes, { position }) => ([
            classes.wrapper,
            classes[`wrapper_${position}`],
          ]),
        }
      }
    }
  };

var css_248z$J = ".vf-element-info {\n  margin-left: 0.25rem;\n  position: relative;\n  top: 1px;\n  cursor: pointer;\n}\n\n.vf-element-info:before {\n  content: \"\";\n  mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-passive);\n  width: 0.875rem;\n  height: 0.875rem;\n  display: inline-block;\n}\n\n.vf-element-info:hover .vf-element-info-wrapper {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vf-element-info-wrapper {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s;\n  z-index: 1000;\n  width: 12.5rem;\n}\n\n.vf-element-info-wrapper.vf-element-info-wrapper-left {\n  top: -0.5625rem;\n  right: 1.375rem;\n}\n\n.vf-element-info-wrapper.vf-element-info-wrapper-right {\n  top: -0.5625rem;\n  left: 1.375rem;\n}\n\n.vf-element-info-wrapper.vf-element-info-wrapper-top {\n  bottom: 1.375rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.vf-element-info-wrapper.vf-element-info-wrapper-bottom {\n  top: 1.375rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.vf-element-info-content {\n  background: rgba(0, 0, 0, 0.85);\n  color: #FFFFFF;\n  border-radius: var(--vf-radius-small);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  padding: 0.3125rem 0.625rem;\n  font-style: normal;\n  display: inline-block;\n  position: relative;\n}\n\n.vf-element-info-content:after {\n  right: 100%;\n  top: 0.625rem;\n  border: solid transparent;\n  content: \"\";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(0, 0, 0, 0);\n  border-right-color: rgba(0, 0, 0, 0.85);\n  border-width: 5px;\n}";
styleInject(css_248z$J);

script$1v.__file = "themes/vueform/templates/ElementInfo.vue";

var script$1u = {
    name: 'ElementDescription',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

const _hoisted_1$A = ["innerHTML", "id"];
const _hoisted_2$l = ["id"];

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" If description is HTML "),
    (_ctx.description)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.container),
          innerHTML: _ctx.description,
          id: _ctx.id
        }, null, 10 /* CLASS, PROPS */, _hoisted_1$A))
      : (_ctx.isSlot)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" If description is a slot "),
            createElementVNode("div", {
              class: normalizeClass(_ctx.classes.container),
              id: _ctx.id
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 10 /* CLASS, PROPS */, _hoisted_2$l)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1u.render = render$G;
script$1u.__file = "themes/blank/templates/ElementDescription.vue";

var script$1t = {
    name: 'ElementDescription',
    render: script$1u.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-description',
          container_sm: 'vf-description-sm',
          container_md: '',
          container_lg: 'vf-description-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$I = ".vf-description {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-muted);\n  margin-top: 0.25rem;\n}\n\n.vf-description.vf-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-description.vf-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$I);

script$1t.__file = "themes/vueform/templates/ElementDescription.vue";

var script$1s = {
    name: 'ElementError',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

const _hoisted_1$z = ["id", "innerHTML"];

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.error)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        id: _ctx.id,
        "aria-live": "assertive",
        innerHTML: _ctx.error
      }, null, 10 /* CLASS, PROPS */, _hoisted_1$z))
    : createCommentVNode("v-if", true)
}

script$1s.render = render$F;
script$1s.__file = "themes/blank/templates/ElementError.vue";

var script$1r = {
    name: 'ElementError',
    render: script$1s.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-error',
          container_sm: 'vf-element-error-sm',
          container_md: '',
          container_lg: 'vf-element-error-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$H = ".vf-element-error {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-danger);\n  margin-top: 0.25rem;\n}\n\n.vf-element-error.vf-element-error-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-element-error.vf-element-error-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$H);

script$1r.__file = "themes/vueform/templates/ElementError.vue";

var script$1q = {
    name: 'ElementMessage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

const _hoisted_1$y = ["innerHTML"];

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.message)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.classes.container),
        innerHTML: _ctx.message
      }, null, 10 /* CLASS, PROPS */, _hoisted_1$y))
    : createCommentVNode("v-if", true)
}

script$1q.render = render$E;
script$1q.__file = "themes/blank/templates/ElementMessage.vue";

var script$1p = {
    name: 'ElementMessage',
    render: script$1q.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-message',
          container_sm: 'vf-element-message-sm',
          container_md: '',
          container_lg: 'vf-element-message-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$G = ".vf-element-message {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  color: var(--vf-color-success);\n  margin-top: 0.25rem;\n}\n\n.vf-element-message.vf-element-message-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: 0.125rem;\n}\n\n.vf-element-message.vf-element-message-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}";
styleInject(css_248z$G);

script$1p.__file = "themes/vueform/templates/ElementMessage.vue";

var script$1o = {
    name: 'ElementText',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

const _hoisted_1$x = ["innerHTML"];

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" If content is HTML "),
    (_ctx.content)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.container),
          innerHTML: _ctx.content
        }, null, 10 /* CLASS, PROPS */, _hoisted_1$x))
      : (_ctx.isSlot)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" If content is a slot "),
            createElementVNode("div", {
              class: normalizeClass(_ctx.classes.container)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1o.render = render$D;
script$1o.__file = "themes/blank/templates/ElementText.vue";

var script$1n = {
    name: 'ElementText',
    render: script$1o.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_before: '',
          container_between: '',
          container_after: '',
          $container: (classes, { type }) => ([
            classes.container,
            classes[`container_${type}`]
          ]),
        }
      }
    }
  };

script$1n.__file = "themes/vueform/templates/ElementText.vue";

var script$1m = {
    name: 'ElementAddon',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

const _hoisted_1$w = ["innerHTML"];

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" If addon is a component "),
    (_ctx.addon && _ctx.isAddonComponent)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.container)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.wrapper)
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.addon)))
          ], 2 /* CLASS */)
        ], 2 /* CLASS */))
      : (_ctx.addon)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" If addon is HTML "),
            createElementVNode("div", {
              class: normalizeClass(_ctx.classes.container)
            }, [
              createElementVNode("div", {
                class: normalizeClass(_ctx.classes.wrapper),
                innerHTML: _ctx.addon
              }, null, 10 /* CLASS, PROPS */, _hoisted_1$w)
            ], 2 /* CLASS */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (_ctx.isSlot)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createCommentVNode(" If addon is a slot "),
              createElementVNode("div", {
                class: normalizeClass(_ctx.classes.container)
              }, [
                createElementVNode("div", {
                  class: normalizeClass(_ctx.classes.wrapper)
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2 /* CLASS */)
              ], 2 /* CLASS */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1m.render = render$C;
script$1m.__file = "themes/blank/templates/ElementAddon.vue";

var script$1l = {
    name: 'ElementAddon',
    render: script$1m.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-addon',
          container_before: 'vf-addon-before',
          container_after: 'vf-addon-after',
          container_sm: 'vf-addon-sm',
          container_md: '',
          container_lg: 'vf-addon-lg',
          container_before_sm: '',
          container_before_md: '',
          container_before_lg: '',
          container_after_sm: '',
          container_after_md: '',
          container_after_lg: '',
          wrapper: 'vf-addon-wrapper',
          $container: (classes, { type, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            classes[`container_${type}`],
            classes[`container_${type}_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$F = ".vf-addon {\n  background: var(--vf-bg-addon);\n  color: var(--vf-color-addon);\n  border-radius: var(--vf-radius-input);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 0%;\n}\n\n.vf-addon.vf-addon-before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);\n}\n\n.vf-addon.vf-addon-before.vf-addon-sm {\n  padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);\n}\n\n.vf-addon.vf-addon-before.vf-addon-lg {\n  padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);\n}\n\n.vf-addon.vf-addon-after {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);\n  order: 2;\n}\n\n.vf-addon.vf-addon-after.vf-addon-sm {\n  padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);\n}\n\n.vf-addon.vf-addon-after.vf-addon-lg {\n  padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);\n}\n\n.vf-addon-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}";
styleInject(css_248z$F);

script$1l.__file = "themes/vueform/templates/ElementAddon.vue";

var script$1k = {
    name: 'ButtonElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: '',
        },
      }
    }
  };

const _hoisted_1$v = ["tabindex", "disabled"];
const _hoisted_2$k = ["innerHTML", "tabindex", "disabled"];
const _hoisted_3$b = ["tabindex", "disabled"];
const _hoisted_4$6 = ["tabindex"];
const _hoisted_5$4 = ["innerHTML", "tabindex"];
const _hoisted_6$3 = ["tabindex"];

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createCommentVNode(" Use `button` tag "),
      (_ctx.buttonType === 'button')
        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createCommentVNode(" Use it as a component "),
            (_ctx.buttonLabel && _ctx.isButtonLabelComponent)
              ? (openBlock(), createElementBlock("button", mergeProps({ key: 0 }, {
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                  disabled: _ctx.isDisabled,
                  class: _ctx.classes.button,
                  onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
                }), [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.buttonLabel)))
                ], 16 /* FULL_PROPS */, _hoisted_1$v))
              : (_ctx.buttonLabel)
                ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createCommentVNode(" Use it as HTML "),
                    createElementVNode("button", mergeProps({
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                      innerHTML: _ctx.buttonLabel,
                      tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                      class: _ctx.classes.button,
                      disabled: _ctx.isDisabled,
                      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
                    }), null, 16 /* FULL_PROPS */, _hoisted_2$k)
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createCommentVNode(" Use it as slot "),
                    createElementVNode("button", mergeProps({
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                      tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                      class: _ctx.classes.button,
                      disabled: _ctx.isDisabled,
                      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
                    }), [
                      renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                      ])
                    ], 16 /* FULL_PROPS */, _hoisted_3$b)
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          ], 64 /* STABLE_FRAGMENT */))
        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Use `anchor` tag "),
            createCommentVNode(" Use it as a component "),
            (_ctx.buttonLabel && _ctx.isButtonLabelComponent)
              ? (openBlock(), createElementBlock("a", mergeProps({ key: 0 }, {
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                  tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                  class: _ctx.classes.button,
                  onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
                }), [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.buttonLabel)))
                ], 16 /* FULL_PROPS */, _hoisted_4$6))
              : (_ctx.buttonLabel)
                ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createCommentVNode(" Use it as HTML "),
                    createElementVNode("a", mergeProps({
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                      innerHTML: _ctx.buttonLabel,
                      tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                      class: _ctx.classes.button,
                      onClick: _cache[4] || (_cache[4] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
                    }), null, 16 /* FULL_PROPS */, _hoisted_5$4)
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createCommentVNode(" Use it as slot "),
                    createElementVNode("a", mergeProps({
            ..._ctx.button,
            ..._ctx.aria,
          }, {
                      tabindex: _ctx.isDisabled || _ctx.isLoading ? -1 : undefined,
                      class: _ctx.classes.button,
                      onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
                    }), [
                      renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                      ])
                    ], 16 /* FULL_PROPS */, _hoisted_6$3)
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          ], 64 /* STABLE_FRAGMENT */))
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$1k.render = render$B;
script$1k.__file = "themes/blank/templates/elements/ButtonElement.vue";

var script$1j = {
    name: 'ButtonElement',
    render: script$1k.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          button: 'vf-btn',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_loading: 'vf-btn-loading',
          button_loading_primary: 'vf-btn-loading-primary',
          button_loading_secondary: 'vf-btn-loading-secondary',
          button_loading_danger: 'vf-btn-loading-danger',
          button_primary: 'vf-btn-primary',
          button_secondary: 'vf-btn-secondary',
          button_danger: 'vf-btn-danger',
          button_full: 'vf-btn-full',
          button_not_full: '',
          button_left: 'vf-btn-left',
          button_center: 'vf-btn-center',
          button_right: 'vf-btn-right',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $button: (classes, { isDisabled, isLoading, buttonClass, Size, danger, secondary, full, align }) => ([
            classes.button,
            danger ? classes.button_danger : null,
            secondary ? classes.button_secondary : null,
            !danger && !secondary ? classes.button_primary : null,
            classes[`button_${Size}`],
            isDisabled ? classes.button_disabled : null,
            !isDisabled && !isLoading ? classes.button_enabled : null,
            isLoading ? classes.button_loading : null,
            isLoading && danger ? classes.button_loading_danger : null,
            isLoading && secondary ? classes.button_loading_secondary : null,
            isLoading && !secondary && !danger ? classes.button_loading_primary : null,
            full ? classes.button_full : classes.button_not_full,
            align === 'left' ? classes.button_left : null,
            align === 'center' ? classes.button_center : null,
            align === 'right' ? classes.button_right : null,
            buttonClass,
          ]),
        }
      }
    }
  };

var css_248z$E = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$E);

script$1j.__file = "themes/vueform/templates/elements/ButtonElement.vue";

var script$1i = {
    name: 'CaptchaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          captcha: '',
        },
      }
    },
  };

const _hoisted_1$u = ["id"];

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      (_ctx.shouldVerify)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.classes.wrapper)
          }, [
            createElementVNode("div", {
              id: _ctx.fieldId,
              class: normalizeClass(_ctx.classes.captcha),
              ref: "input"
            }, null, 10 /* CLASS, PROPS */, _hoisted_1$u)
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$1i.render = render$A;
script$1i.__file = "themes/blank/templates/elements/CaptchaElement.vue";

var script$1h = {
    name: 'CaptchaElement',
    render: script$1i.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          captcha: '',
        }
      }
    }
  };

script$1h.__file = "themes/vueform/templates/elements/CaptchaElement.vue";

var script$1g = {
    name: 'CheckboxElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$t = ["name", "id", "true-value", "false-value", "disabled"];
const _hoisted_2$j = ["innerHTML"];

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("label", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", mergeProps({
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event))
        }, _ctx.aria, {
          class: _ctx.classes.input,
          name: _ctx.path,
          id: _ctx.fieldId,
          "true-value": _ctx.trueValue,
          "false-value": _ctx.falseValue,
          disabled: _ctx.isDisabled,
          ref: "input"
        }), null, 16 /* FULL_PROPS */, _hoisted_1$t), [
          [vModelCheckbox, _ctx.value]
        ]),
        createCommentVNode(" If label is HTML "),
        (_ctx.Text)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10 /* CLASS, PROPS */, _hoisted_2$j))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" If label is slot "),
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.text)
              }, [
                renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ], 2 /* CLASS */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$1g.render = render$z;
script$1g.__file = "themes/blank/templates/elements/CheckboxElement.vue";

var script$1f = {
    name: 'CheckboxElement',
    render: script$1g.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-contains-link',
          wrapper: 'vf-checkbox-wrapper',
          wrapper_sm: 'vf-checkbox-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-wrapper-lg',
          wrapper_left: 'vf-checkbox-wrapper-left',
          wrapper_right: 'vf-checkbox-wrapper-right',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_danger: 'vf-checkbox-danger',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          input_left: 'vf-checkbox-left',
          input_right: 'vf-checkbox-right',
          text: 'vf-checkbox-text',
          text_left: 'vf-checkbox-text-left',
          text_right: 'vf-checkbox-text-right',
          $wrapper: (classes, { Size, align }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            align === 'left' ? classes.wrapper_left : null,
            align === 'right' ? classes.wrapper_right : null,
          ]),
          $input: (classes, { isDisabled, Size, isDanger, align }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            !isDisabled && isDanger ? classes.input_danger : null,
            align === 'left' ? classes.input_left : null,
            align === 'right' ? classes.input_right : null,
          ]),
          $text: (classes, { align }) => ([
            classes.text,
            align === 'left' ? classes.text_left : null,
            align === 'right' ? classes.text_right : null,
          ]),
        }
      }
    }
  };

var css_248z$D = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$D);

script$1f.__file = "themes/vueform/templates/elements/CheckboxElement.vue";

var script$1e = {
    name: 'CheckboxgroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

const _hoisted_1$s = ["aria-labelledby"];

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckboxgroupCheckbox = resolveComponent("CheckboxgroupCheckbox");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        "aria-labelledby": _ctx.labelId,
        role: "group"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resolvedOptions, (item, index, key) => {
          return (openBlock(), createBlock(_component_CheckboxgroupCheckbox, {
            items: _ctx.resolvedOptions,
            index: index,
            item: item,
            value: item.value,
            key: key,
            attrs: _ctx.aria
          }, {
            default: withCtx((scope) => [
              renderSlot(_ctx.$slots, "checkbox", mergeProps({ ref_for: true }, scope, { el$: _ctx.el$ }), () => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.checkbox), mergeProps({ ref_for: true }, scope, { el$: _ctx.el$ }), null, 16 /* FULL_PROPS */, ["el$"]))
              ])
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["items", "index", "item", "value", "attrs"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 10 /* CLASS, PROPS */, _hoisted_1$s)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$1e.render = render$y;
script$1e.__file = "themes/blank/templates/elements/CheckboxgroupElement.vue";

var script$1d = {
    name: 'CheckboxgroupElement',
    render: script$1e.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-wrapper',
          wrapper_sm: 'vf-checkboxgroup-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$C = ".vf-checkboxgroup-wrapper {\n  cursor: pointer;\n}\n\n.vf-checkboxgroup-wrapper .vf-checkbox-container {\n  padding-top: 0;\n}";
styleInject(css_248z$C);

script$1d.__file = "themes/vueform/templates/elements/CheckboxgroupElement.vue";

var script$1c = {
    name: 'CheckboxgroupElement_tabs',
    render: script$1e.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-tabs-wrapper',
          wrapper_sm: 'vf-checkboxgroup-tabs-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-tabs-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$B = ".vf-checkboxgroup-tabs-wrapper {\n  display: grid;\n  grid-auto-flow: column;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$B);

script$1c.__file = "themes/vueform/templates/elements/CheckboxgroupElement_tabs.vue";

var script$1b = {
    name: 'CheckboxgroupElement_blocks',
    render: script$1e.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-blocks-wrapper',
          wrapper_sm: 'vf-checkboxgroup-blocks-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-blocks-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$A = ".vf-checkboxgroup-blocks-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$A);

script$1b.__file = "themes/vueform/templates/elements/CheckboxgroupElement_blocks.vue";

var script$1a = {
    name: 'DateElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          inputWrapper: '',
          input: '',
        }
      }
    }
  };

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_DatepickerWrapper = resolveComponent("DatepickerWrapper");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.inputContainer)
      }, [
        (_ctx.hasAddonBefore)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-before']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasAddonAfter)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-after']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasFloating && !_ctx.empty)
          ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8 /* PROPS */, ["visible"]))
          : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.inputWrapper)
        }, [
          createVNode(_component_DatepickerWrapper, {
            value: _ctx.model,
            options: _ctx.fieldOptions,
            id: _ctx.fieldId,
            class: normalizeClass(_ctx.classes.input),
            placeholder: _ctx.Placeholder,
            disabled: _ctx.isDisabled,
            readonly: _ctx.readonly,
            attrs: _ctx.aria,
            onChange: _ctx.handleChange,
            ref: "input"
          }, null, 8 /* PROPS */, ["value", "options", "id", "class", "placeholder", "disabled", "readonly", "attrs", "onChange"])
        ], 2 /* CLASS */)
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$1a.render = render$x;
script$1a.__file = "themes/blank/templates/elements/DateElement.vue";

var script$19 = {
    name: 'DateElement',
    render: script$1a.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          inputWrapper: 'vf-datepicker-wrapper',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$z = "/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */\n\n.vf-datepicker-wrapper {\n  display: block;\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$z);

script$19.__file = "themes/vueform/templates/elements/DateElement.vue";

var script$18 = {
    name: 'DatesElement',
    render: script$1a.render,
    staticRenderFns: script$1a.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

script$18.__file = "themes/blank/templates/elements/DatesElement.vue";

var script$17 = {
    name: 'DatesElement',
    render: script$18.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          inputWrapper: 'vf-datepicker-wrapper',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$y = "/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */";
styleInject(css_248z$y);

script$17.__file = "themes/vueform/templates/elements/DatesElement.vue";

var script$16 = {
    name: 'FileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: '',
        }
      }
    }
  };

const _hoisted_1$r = ["aria-labelledby", "aria-placeholder"];
const _hoisted_2$i = ["id", "accept"];

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragAndDrop = resolveComponent("DragAndDrop");
  const _component_FilePreview = resolveComponent("FilePreview");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createCommentVNode(" Drag n drop "),
      (_ctx.drop && _ctx.canDrop && _ctx.canSelect)
        ? (openBlock(), createBlock(_component_DragAndDrop, {
            key: 0,
            title: _ctx.form$.translations.vueform.elements[_ctx.type].dndTitle,
            description: _ctx.form$.translations.vueform.elements[_ctx.type].dndDescription,
            disabled: _ctx.isDisabled,
            onClick: _ctx.handleClick,
            onDrop: _ctx.handleDrop
          }, null, 8 /* PROPS */, ["title", "description", "disabled", "onClick", "onDrop"]))
        : (_ctx.canSelect)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" Upload button "),
              createElementVNode("div", mergeProps(_ctx.aria, {
                class: _ctx.classes.button,
                "aria-labelledby": _ctx.labelId,
                "aria-placeholder": _ctx.form$.translations.vueform.elements[_ctx.type].select,
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
                onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["enter","space"])),
                role: "button",
                tabindex: "0"
              }), toDisplayString(_ctx.form$.translations.vueform.elements[_ctx.type].select), 17 /* TEXT, FULL_PROPS */, _hoisted_1$r)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
      createCommentVNode(" Hidden file input "),
      (_ctx.canSelect && !_ctx.isDisabled && !_ctx.preparing)
        ? withDirectives((openBlock(), createElementBlock("input", {
            key: 2,
            id: _ctx.fieldId,
            type: "file",
            accept: _ctx.accept,
            onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
            ref: "input"
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2$i)), [
            [vShow, false]
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Preview "),
      renderSlot(_ctx.$slots, "preview", {}, () => [
        (openBlock(), createBlock(_component_FilePreview, {
          key: _ctx.view,
          attrs: _ctx.aria
        }, null, 8 /* PROPS */, ["attrs"]))
      ])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$16.render = render$w;
script$16.__file = "themes/blank/templates/elements/FileElement.vue";

var script$15 = {
    name: 'FileElement',
    render: script$16.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file vf-text-type',
          container_removing: 'vf-file-removing',
          button: 'vf-btn vf-btn-secondary',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          assertiveText: 'vf-assertive-text',
          $container: (classes, { removing }) => ([
            classes.container,
            removing ? classes.container_removing : null,
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        }
      }
    }
  };

var css_248z$x = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$x);

script$15.__file = "themes/vueform/templates/elements/FileElement.vue";

var script$14 = {
    name: 'GroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  };

const _hoisted_1$q = ["aria-labelledby"];

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), {
    multiple: true,
    ref: "container"
  }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        role: "group",
        "aria-labelledby": _ctx.labelId
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.children, (element, name) => {
            return (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
              name: name,
              key: name
            }), null, 16 /* FULL_PROPS */, ["name"]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 10 /* CLASS, PROPS */, _hoisted_1$q)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$14.render = render$v;
script$14.__file = "themes/blank/templates/elements/GroupElement.vue";

var script$13 = {
    name: 'GroupElement',
    render: script$14.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-row',
          wrapper_sm: 'vf-row-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-row-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$w = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$w);

script$13.__file = "themes/vueform/templates/elements/GroupElement.vue";

var script$12 = {
    name: 'HiddenElement',
    data() {
      return {
        merge: true,
        defaultClasses: {}
      }
    },
  };

const _hoisted_1$p = {
  key: 0,
  ref: "container"
};
const _hoisted_2$h = ["name", "id"];

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (!_ctx.meta)
    ? (openBlock(), createElementBlock("span", _hoisted_1$p, [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event)),
          type: "hidden",
          name: _ctx.name,
          id: _ctx.fieldId,
          ref: "input"
        }, null, 8 /* PROPS */, _hoisted_2$h), [
          [vModelText, _ctx.value]
        ])
      ], 512 /* NEED_PATCH */))
    : createCommentVNode("v-if", true)
}

script$12.render = render$u;
script$12.__file = "themes/blank/templates/elements/HiddenElement.vue";

var script$11 = {
    name: 'HiddenElement',
    render: script$12.render,
    data() {
      return {
        merge: true,
        defaultClasses: {}
      }
    }
  };

script$11.__file = "themes/vueform/templates/elements/HiddenElement.vue";

var script$10 = {
    name: 'ListElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          remove: '',
          removeIcon: '',
          add: '',
        },
      }
    },
  };

const _hoisted_1$o = ["aria-labelledby"];
const _hoisted_2$g = ["data-id"];
const _hoisted_3$a = ["aria-roledescription", "id", "onClick", "onKeypress"];
const _hoisted_4$5 = ["id", "innerHTML"];

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createCommentVNode(" Sorting container "),
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.list),
        role: "list",
        "aria-labelledby": _ctx.labelId,
        ref: "list"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, (val, i) => {
          return (openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(_ctx.classes.listItem),
            role: "listitem",
            "data-id": `${_ctx.path}-${i}`
          }, [
            renderSlot(_ctx.$slots, "default", { index: i }, () => [
              (_ctx.prototype.type)
                ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(_ctx.prototype)), mergeProps({
                    key: 0,
                    ref_for: true
                  }, _ctx.prototype, {
                    name: i,
                    key: i
                  }), null, 16 /* FULL_PROPS */, ["name"]))
                : createCommentVNode("v-if", true)
            ]),
            createCommentVNode(" Sort handle "),
            (_ctx.hasSort)
              ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.classes.handle),
                  "data-handle": ""
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classes.handleIcon)
                  }, null, 2 /* CLASS */)
                ], 2 /* CLASS */))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Remove button "),
            (_ctx.hasRemove)
              ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  "aria-roledescription": _ctx.form$.translations.vueform.a11y.list.remove,
                  class: normalizeClass(_ctx.classes.remove),
                  id: `${_ctx.path}-${i}-remove-button`,
                  onClick: withModifiers($event => (_ctx.handleRemove(i)), ["prevent"]),
                  onKeypress: withKeys($event => (_ctx.handleRemove(i)), ["space","enter"]),
                  role: "button",
                  tabindex: "0"
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classes.removeIcon)
                  }, null, 2 /* CLASS */)
                ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3$a))
              : createCommentVNode("v-if", true)
          ], 10 /* CLASS, PROPS */, _hoisted_2$g))
        }), 128 /* KEYED_FRAGMENT */))
      ], 10 /* CLASS, PROPS */, _hoisted_1$o),
      createCommentVNode(" Add button "),
      (_ctx.hasAdd)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.classes.add),
            id: `${_ctx.fieldId}-add-button`,
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleAdd && _ctx.handleAdd(...args)), ["prevent"])),
            onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.handleAdd && _ctx.handleAdd(...args)), ["enter","space"])),
            innerHTML: _ctx.addLabel,
            role: "button",
            tabindex: "0"
          }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_4$5))
        : createCommentVNode("v-if", true)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$10.render = render$t;
script$10.__file = "themes/blank/templates/elements/ListElement.vue";

var script$$ = {
    name: 'ListElement',
    render: script$10.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: 'vf-rowset',
          list_sm: 'vf-rowset-sm',
          list_md: '',
          list_lg: 'vf-rowset-lg',
          list_disabled: 'vf-list-disabled',
          list_sorting: 'vf-list-sorting',
          listItem: 'vf-row',
          listItem_sm: 'vf-row-sm',
          listItem_md: '',
          listItem_lg: 'vf-row-lg',
          handle: 'vf-list-handle',
          handle_sm: 'vf-list-handle-sm',
          handle_md: '',
          handle_lg: 'vf-list-handle-lg',
          handleIcon: 'vf-list-handle-icon',
          remove: 'vf-list-remove',
          removeIcon: 'vf-list-remove-icon',
          add: 'vf-btn vf-btn-primary vf-btn-small vf-btn-list-add',
          add_sm: 'vf-btn-small-sm vf-btn-list-add-sm',
          add_md: '',
          add_lg: 'vf-btn-small-lg vf-btn-list-add-lg',
          $list: (classes, { isDisabled, sorting, Size }) => ([
            classes.list,
            classes[`list_${Size}`],
            isDisabled ? classes.list_disabled : null,
            sorting ? classes.list_sorting : null,
          ]),
          $listItem: (classes, { Size }) => ([
            classes.listItem,
            classes[`listItem_${Size}`],
          ]),
          $handle: (classes, { Size }) => ([
            classes.handle,
            classes[`handle_${Size}`],
          ]),
          $add: (classes, { Size }) => ([
            classes.add,
            classes[`add_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$v = "/* Some styles are contained in Vueform.vue */\n\n.vf-rowset > .vf-row {\n  position: relative;\n}\n\n.vf-rowset > .vf-row:hover > .vf-list-remove, .vf-rowset > .vf-row:hover > .vf-list-handle {\n  visibility: visible;\n  opacity: 1;\n}\n\n.vf-rowset.vf-list-sorting > div:hover .vf-list-handle, .vf-rowset.vf-list-sorting > div:hover .vf-list-remove {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.vf-list-remove, .vf-list-handle {\n  opacity: 0;\n  transition: 0.3s;\n}\n\n.vf-list-remove span, .vf-list-handle span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.vf-list-remove {\n  position: absolute;\n  left: 0;\n  transform: translateX(-50%) translateY(-50%);\n  top: 0;\n  z-index: 999;\n  background-color: var(--vf-bg-passive);\n  border-radius: 999px;\n  transition: 0.15s;\n}\n\n.vf-list-remove:hover {\n  filter: brightness(0.9);\n}\n\n.vf-list-remove:focus {\n  opacity: 1;\n}\n\n.vf-list-remove-icon {\n  display: flex;\n  width: 1.125rem;\n  height: 1.125rem;\n  align-items: center;\n  justify-content: center;\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.75rem 0.75rem;\n  -webkit-mask-size: 0.75rem 0.75rem;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  background-color: var(--vf-color-passive);\n}\n\n.vf-list-handle {\n  position: absolute;\n  left: 0;\n  transform: translateX(-100%);\n  top: 0;\n  cursor: grab;\n  z-index: 999;\n}\n\n.vf-list-handle:active {\n  cursor: grabbing;\n}\n\n.vf-list-handle-icon {\n  width: var(--vf-min-height-input);\n  height: var(--vf-min-height-input);\n  mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  mask-size: 0.7rem 0.7rem;\n  -webkit-mask-size: 0.7rem 0.7rem;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  background-color: var(--vf-color-passive);\n}\n\n.vf-list-handle-sm .vf-list-handle-icon {\n  width: var(--vf-min-height-input-sm);\n  height: var(--vf-min-height-input-sm);\n}\n\n.vf-list-handle-lg .vf-list-handle-icon {\n  width: var(--vf-min-height-input-lg);\n  height: var(--vf-min-height-input-lg);\n}\n\n.vf-btn-list-add {\n  margin-top: var(--vf-gutter);\n}\n\n.vf-btn-list-add.vf-btn-list-add-sm {\n  margin-top: var(--vf-gutter-sm);\n}\n\n.vf-btn-list-add.vf-btn-list-add-lg {\n  margin-top: var(--vf-gutter-lg);\n}\n\n.sortable-ghost {\n  opacity: 0.6;\n}";
styleInject(css_248z$v);

script$$.__file = "themes/vueform/templates/elements/ListElement.vue";

var script$_ = {
    name: 'LocationElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

const _hoisted_1$n = ["name", "id", "placeholder", "disabled", "readonly", "aria-labelledby"];

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.inputContainer)
      }, [
        (_ctx.hasAddonBefore)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-before']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasAddonAfter)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-after']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasFloating && !_ctx.empty)
          ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8 /* PROPS */, ["visible"]))
          : createCommentVNode("v-if", true),
        createElementVNode("input", mergeProps({
          type: "search",
          name: _ctx.name,
          id: _ctx.fieldId,
          class: _ctx.classes.input,
          placeholder: _ctx.Placeholder,
          disabled: _ctx.isDisabled,
          readonly: _ctx.readonly,
          "aria-labelledby": _ctx.labelId,
          autocomplete: "off"
        }, _ctx.attrs, {
          ref: "input",
          onBlur: _cache[0] || (_cache[0] = (...args) => (_ctx.handleLocationBlur && _ctx.handleLocationBlur(...args)))
        }), null, 16 /* FULL_PROPS */, _hoisted_1$n)
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$_.render = render$s;
script$_.__file = "themes/blank/templates/elements/LocationElement.vue";

var script$Z = {
    name: 'LocationElement',
    render: script$_.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$u = "/* Google */\n\n.pac-container {\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n}\n\n.pac-item {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  cursor: pointer;\n}\n\n.pac-item > span:last-of-type {\n  font-size: 0.75rem;\n  color: var(--vf-color-muted);\n}\n\n.pac-item:hover, .pac-item.pac-item-selected {\n  background: var(--vf-bg-selected);\n}\n\n.pac-item-query {\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-right: 0.25rem;\n  padding-right: 0.25rem;\n  color: var(--vf-color-input);\n}\n\n.pac-icon-marker {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background: var(--vf-bg-icon);\n  width: 0.875rem;\n  width: 0.875rem;\n  margin-right: 0.75rem;\n  margin-top: 0;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  box-sizing: content-box;\n  flex-shrink: 0;\n}\n\n.pac-logo:after {\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n\n.pac-icon, .hdpi .pac-icon {\n  background-image: none;\n}";
styleInject(css_248z$u);

script$Z.__file = "themes/vueform/templates/elements/LocationElement.vue";

var script$Y = {
    name: 'MultifileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          dnd: '',
          button: '',
        },
      }
    }
  };

const _hoisted_1$m = ["aria-labelledby", "aria-placeholder"];
const _hoisted_2$f = ["id", "accept", "disabled"];

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragAndDrop = resolveComponent("DragAndDrop");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), {
    multiple: true,
    ref: "container"
  }, createSlots({
    element: withCtx(() => [
      createCommentVNode(" Drag n drop "),
      (_ctx.drop && _ctx.canDrop && _ctx.hasAdd)
        ? (openBlock(), createBlock(_component_DragAndDrop, {
            key: 0,
            title: _ctx.form$.translations.vueform.elements[_ctx.type].dndTitle,
            description: _ctx.form$.translations.vueform.elements[_ctx.type].dndDescription,
            disabled: _ctx.isDisabled,
            class: normalizeClass(_ctx.classes.dnd),
            onClick: _ctx.handleClick,
            onDrop: _ctx.handleDrop
          }, null, 8 /* PROPS */, ["title", "description", "disabled", "class", "onClick", "onDrop"]))
        : (_ctx.hasAdd)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" Upload button "),
              createElementVNode("div", mergeProps(_ctx.aria, {
                class: _ctx.classes.button,
                "aria-labelledby": _ctx.labelId,
                "aria-placeholder": _ctx.form$.translations.vueform.elements.multifile.uploadButton,
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
                onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["enter","space"])),
                role: "button",
                tabindex: "0"
              }), toDisplayString(_ctx.form$.translations.vueform.elements.multifile.uploadButton), 17 /* TEXT, FULL_PROPS */, _hoisted_1$m)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
      createCommentVNode(" Actual input field "),
      withDirectives(createElementVNode("input", {
        multiple: "",
        id: _ctx.fieldId,
        type: "file",
        onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
        accept: _ctx.accept,
        disabled: _ctx.isDisabled,
        ref: "input"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2$f), [
        [vShow, false]
      ]),
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.classes.list),
        key: `${_ctx.fieldId}-${_ctx.length}`,
        ref: "list"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, (val, i) => {
          return (openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(_ctx.classes.listItem)
          }, [
            (_ctx.prototype.type)
              ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(_ctx.prototype)), mergeProps({
                  key: 0,
                  ref_for: true
                }, _ctx.prototype, {
                  disabled: !_ctx.hasRemove,
                  embed: true,
                  name: i,
                  onRemove: $event => (_ctx.remove(i))
                }), null, 16 /* FULL_PROPS */, ["disabled", "name", "onRemove"]))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Sort handle "),
            (_ctx.hasSort)
              ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(_ctx.classes.handle),
                  "data-handle": ""
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classes.handleIcon)
                  }, null, 2 /* CLASS */)
                ], 2 /* CLASS */))
              : createCommentVNode("v-if", true)
          ], 2 /* CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */)), [
        [vShow, !_ctx.empty]
      ])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$Y.render = render$r;
script$Y.__file = "themes/blank/templates/elements/MultifileElement.vue";

var script$X = {
    name: 'MultifileElement',
    render: script$Y.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          list: 'vf-multifile-list',
          list_sm: 'vf-multifile-list-sm',
          list_md: '',
          list_lg: 'vf-multifile-list-lg',
          list_file: 'vf-multifile-list-file',
          list_file_sm: '',
          list_file_md: '',
          list_file_lg: '',
          list_image: 'vf-multifile-list-image',
          list_image_sm: 'vf-multifile-list-image-sm',
          list_image_md: '',
          list_image_lg: 'vf-multifile-list-image-lg',
          list_gallery: 'vf-multifile-list-gallery',
          list_gallery_sm: 'vf-multifile-list-gallery-sm',
          list_gallery_md: '',
          list_gallery_lg: 'vf-multifile-list-gallery-lg',
          list_disabled: 'vf-multifile-list-disabled',
          list_sorting: 'vf-multifile-list-sorting',
          listItem: '',
          handle: '',
          handle_file: 'vf-multifile-handle-file',
          handle_file_sm: 'vf-multifile-handle-file-sm',
          handle_file_md: '',
          handle_file_lg: 'vf-multifile-handle-file-lg',
          handle_image: 'vf-multifile-handle-image',
          handle_image_sm: 'vf-multifile-handle-image-sm',
          handle_image_md: '',
          handle_image_lg: 'vf-multifile-handle-image-lg',
          handle_gallery: 'vf-multifile-handle-gallery',
          handle_gallery_sm: '',
          handle_gallery_md: '',
          handle_gallery_lg: '',
          handleIcon: '',
          handleIcon_file: 'vf-multifile-handle-icon-file',
          handleIcon_image: 'vf-multifile-handle-icon-image',
          handleIcon_gallery: 'vf-multifile-handle-icon-gallery',
          dnd: '',
          button: 'vf-btn vf-btn-secondary',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $list: (classes, { isDisabled, sorting, view, Size }) => ([
            classes.list,
            classes[`list_${Size}`],
            isDisabled ? classes.list_disabled : null,
            sorting ? classes.list_sorting : null,
            classes[`list_${view}`],
            classes[`list_${view}_${Size}`],
          ]),
          $handle: (classes, { view, Size }) => ([
            classes.handle,
            classes[`handle_${view}`],
            classes[`handle_${view}_${Size}`],
          ]),
          $handleIcon: (classes, { view }) => ([
            classes.handleIcon,
            classes[`handleIcon_${view}`],
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        }
      }
    }
  };

var css_248z$t = "/* Some styles are contained in Vueform.vue */\n\n.vf-multifile-list {\n  margin-top: var(--vf-gutter);\n}\n\n.vf-multifile-list.vf-multifile-list-sm {\n  margin-top: var(--vf-gutter-sm);\n}\n\n.vf-multifile-list.vf-multifile-list-lg {\n  margin-top: var(--vf-gutter-lg);\n}\n\n.vf-multifile-list-file,\n.vf-multifile-list-image {\n  display: grid;\n}\n\n.vf-multifile-list-file > .vf-row,\n.vf-multifile-list-image > .vf-row {\n  position: relative;\n}\n\n.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-file,\n.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-image,\n.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-file,\n.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-image {\n  visibility: visible;\n  opacity: 1;\n}\n\n.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,\n.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image,\n.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,\n.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.vf-multifile-list-file {\n  row-gap: calc(var(--vf-gutter) / 2);\n}\n\n.vf-multifile-list-file.vf-multifile-list-file-sm {\n  row-gap: calc(var(--vf-gutter-sm) / 2);\n}\n\n.vf-multifile-list-file.vf-multifile-list-file-lg {\n  row-gap: calc(var(--vf-gutter-lg) / 2);\n}\n\n.vf-multifile-list-image {\n  row-gap: calc(var(--vf-gutter) / 2);\n}\n\n.vf-multifile-list-image.vf-multifile-list-image-sm {\n  row-gap: calc(var(--vf-gutter-sm) / 2);\n}\n\n.vf-multifile-list-image.vf-multifile-list-image-lg {\n  row-gap: calc(var(--vf-gutter-lg) / 2);\n}\n\n.vf-multifile-list-gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: calc(var(--vf-gutter) / 2);\n}\n\n.vf-multifile-list-gallery.vf-multifile-list-sorting > div:hover .vf-multifile-handle-gallery {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.vf-multifile-list-gallery > div {\n  position: relative;\n}\n\n.vf-multifile-list-gallery > div:hover .vf-multifile-handle-gallery {\n  visibility: visible;\n  opacity: 1;\n}\n\n.vf-multifile-handle-file,\n.vf-multifile-handle-image {\n  position: absolute;\n  left: var(--vf-gutter);\n  transform: translateX(-100%);\n  top: 0;\n  cursor: grab;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.3s;\n}\n\n.vf-multifile-handle-file:active,\n.vf-multifile-handle-image:active {\n  cursor: grabbing;\n}\n\n.vf-multifile-handle-icon-file,\n.vf-multifile-handle-icon-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: var(--vf-min-height-input);\n  height: var(--vf-min-height-input);\n  mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  mask-size: 0.7rem 0.7rem;\n  -webkit-mask-size: 0.7rem 0.7rem;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  background-color: currentColor;\n}\n\n.vf-multifile-handle-file.vf-multifile-handle-file-sm .vf-multifile-handle-icon-file {\n  width: var(--vf-min-height-input-sm);\n  height: var(--vf-min-height-input-sm);\n}\n\n.vf-multifile-handle-file.vf-multifile-handle-file-lg .vf-multifile-handle-icon-file {\n  width: var(--vf-min-height-input-lg);\n  height: var(--vf-min-height-input-lg);\n}\n\n.vf-multifile-handle-image.vf-multifile-handle-image-sm .vf-multifile-handle-icon-image {\n  width: var(--vf-min-height-input-sm);\n  height: var(--vf-min-height-input-sm);\n}\n\n.vf-multifile-handle-image.vf-multifile-handle-image-lg .vf-multifile-handle-icon-image {\n  width: var(--vf-min-height-input-lg);\n  height: var(--vf-min-height-input-lg);\n}\n\n.vf-multifile-handle-gallery {\n  position: absolute;\n  cursor: grab;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.3s;\n  border-radius: 999px;\n  left: 0.1875rem;\n  top: 0.1875rem;\n  transform: none;\n  background: var(--vf-gray-200);\n}\n\n.vf-multifile-handle-gallery:active {\n  cursor: grabbing;\n}\n\n.vf-multifile-handle-gallery:hover {\n  background-color: var(--vf-gray-300);\n}\n\n.vf-multifile-handle-icon-gallery {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 1rem;\n  height: 1rem;\n  mask-size: 0.75rem 0.75rem;\n  -webkit-mask-size: 0.75rem 0.75rem;\n  mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  background-color: var(--vf-gray-600);\n}\n\n.sortable-ghost {\n  opacity: 0.6;\n}";
styleInject(css_248z$t);

script$X.__file = "themes/vueform/templates/elements/MultifileElement.vue";

function isNullish$1 (val) {
  return [null, undefined].indexOf(val) !== -1
}

function useData (props, context, dep)
{
  const { object, valueProp, mode } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;

  // =============== METHODS ==============

  const update = (val, triggerInput = true) => {
    // Setting object(s) as internal value
    iv.value = makeInternal(val);

    // Setting object(s) or plain value as external 
    // value based on `option` setting
    const externalVal = makeExternal(val);

    context.emit('change', externalVal, $this);

    if (triggerInput) {
      context.emit('input', externalVal);
      context.emit('update:modelValue', externalVal);
    }
  }; 

  // no export
  const makeExternal = (val) => {
    // If external value should be object
    // no transformation is required
    if (object.value) {
      return val
    }

    // No need to transform if empty value
    if (isNullish$1(val)) {
      return val
    }

    // If external should be plain transform
    // value object to plain values
    return !Array.isArray(val) ? val[valueProp.value] : val.map(v => v[valueProp.value])
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === 'single' ? {} : []
    }

    return val
  };

  return {
    update,
  }
}

function useValue$3 (props, context)
{
  const { value, modelValue, mode, valueProp } = toRefs(props);

  // ================ DATA ================

  // internalValue
  const iv = ref(mode.value !== 'single' ? [] : {});

  // ============== COMPUTED ==============

  /* istanbul ignore next */
  // externalValue
  const ev = computed(() => {
    return modelValue && modelValue.value !== undefined ? modelValue.value : value.value
  });

  const plainValue = computed(() => {
    return mode.value === 'single' ? iv.value[valueProp.value] : iv.value.map(v=>v[valueProp.value])
  });

  const textValue = computed(() => {
    return mode.value !== 'single' ? iv.value.map(v=>v[valueProp.value]).join(',') : iv.value[valueProp.value]
  });

  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue,
  }
}

function useSearch (props, context, dep)
{
  const { regex } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const open = dep.open;

  // ================ DATA ================

  const search = ref(null);

  // =============== METHODS ==============

  const clearSearch = () => {
    search.value = '';
  };

  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };

  const handleKeypress = (e) => {
    if (regex && regex.value) {
      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }

      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };

  const handlePaste = (e) => {
    if (regex && regex.value) {
      let clipboardData = e.clipboardData || /* istanbul ignore next */ window.clipboardData;
      let pastedData = clipboardData.getData('Text');

      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }
      
      if (!pastedData.split('').every(c => !!c.match(regexp))) {
        e.preventDefault();
      }
    }

    context.emit('paste', e, $this);
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }

    context.emit('search-change', val, $this);
  });

  return {
    search,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste,
  }
}

function usePointer$1 (props, context, dep)
{
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);

  // ================ DATA ================

  const pointer = ref(null);

  // =============== METHODS ==============

  const setPointer = (option) => {
    if (option === undefined || (option !== null && option[disabledProp.value])) {
      return
    }

    if (groups.value && option && option.group && (mode.value === 'single' || !groupSelect.value)) {
      return
    }

    pointer.value = option;
  };

  const clearPointer = () => {
    setPointer(null);
  };

  return {
    pointer,
    setPointer,
    clearPointer,
  }
}

function normalize (str, strict = true) {
  return strict
    ? String(str).toLowerCase().trim()
    : String(str).toLowerCase()
                 .normalize('NFD')
                 .trim()
                 .replace(new RegExp(/æ/g), 'ae')
                 .replace(new RegExp(/œ/g), 'oe')
                 .replace(new RegExp(/ø/g), 'o')
                 .replace(/\p{Diacritic}/gu, '')
}

function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

function arraysEqual$1 (array1, array2) {
  const array2Sorted = array2.slice().sort();

  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
      return value === array2Sorted[index];
  })
}

function useOptions (props, context, dep)
{
  const { 
    options, mode, trackBy: trackBy_, limit, hideSelected, createTag, createOption: createOption_, label,
    appendNewTag, appendNewOption: appendNewOption_, multipleLabel, object, loading, delay, resolveOnLoad,
    minChars, filterResults, clearOnSearch, clearOnSelect, valueProp, allowAbsent, groupLabel,
    canDeselect, max, strict, closeOnSelect, closeOnDeselect, groups: groupped, reverse, infinite,
    groupOptions, groupHideEmpty, groupSelect, onCreate, disabledProp, searchStart, searchFilter,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;

  // ================ DATA ================

  // no export
  // appendedOptions
  const ap = ref([]);

  // no export
  // resolvedOptions
  const ro = ref([]);

  const resolving = ref(false);

  // no export
  const searchWatcher = ref(null);

  const offset = ref(infinite.value && limit.value === -1 ? 10 : limit.value);

  // ============== COMPUTED ==============

  // no export
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const appendNewOption = computed(() => {
    if (appendNewTag.value !== undefined) {
      return appendNewTag.value
    } else if (appendNewOption_.value !== undefined) {
      return appendNewOption_.value
    }

    return true
  });

  // no export
  // extendedOptions
  const eo = computed(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */ [];

      let eo = [];

      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });

      return eo
    } else {
      let eo = optionsToArray(ro.value || /* istanbul ignore next */ []);

      if (ap.value.length) {
        eo = eo.concat(ap.value);
      }

      return eo
    }
  });

  // preFilteredOptions
  const pfo = computed(() => {
    let options = eo.value;

    if (reverse.value) {
      options = options.reverse();
    }

    if (createdOption.value.length) {
      options = createdOption.value.concat(options);
    }

    return filterOptions(options)
  });

  // filteredOptions
  const fo = computed(() => {
    let options = pfo.value;

    if (offset.value > 0) {
      options = options.slice(0, offset.value);
    }

    return options
  });

  // no export
  // extendedGroups
  const eg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let eg = [];
    let groups = ro.value || /* istanbul ignore next */ [];

    if (ap.value.length) {
      eg.push({
        [groupLabel.value]: ' ',
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }

    return eg.concat(groups)
  });

  // preFilteredGroups
  const pfg = computed(() => {
    let groups = [...eg.value].map(g => ({...g}));

    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: ' ',
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }

    return groups
  });

  // filteredGroups
  const fg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let options = pfg.value;

    return filterGroups((options || /* istanbul ignore next */ []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);

      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
      }
      // Difference between __VISIBLE__ and {groupOptions}: visible does not contain selected options when hideSelected=true
    }))
  });

  const hasSelected = computed(() => {
    switch (mode.value) {
      case 'single':
        return !isNullish$1(iv.value[valueProp.value])

      case 'multiple':
      case 'tags':
        return !isNullish$1(iv.value) && iv.value.length > 0
    }
  });

  const multipleLabelText = computed(() => {
    return multipleLabel !== undefined && multipleLabel.value !== undefined
      ? multipleLabel.value(iv.value, $this)
      : (iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`)
  });

  const noOptions = computed(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length
  });


  const noResults = computed(() => {
    return eo.value.length > 0 && fo.value.length == 0 && ((search.value && groupped.value) || !groupped.value)
  });

  // no export
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return []
    }

    if (getOptionByTrackBy(search.value) !== -1) {
      return []
    }

    return [{
      [valueProp.value]: search.value,
      [trackBy.value[0]]: search.value,
      [label.value]: search.value,
      __CREATE__: true,
    }]
  });

  const trackBy = computed(() => {
    return trackBy_.value ? (Array.isArray(trackBy_.value) ? trackBy_.value : [trackBy_.value]) : [label.value]
  });

  // no export
  const nullValue = computed(() => {
    switch (mode.value) {
      case 'single':
        return null

      case 'multiple':
      case 'tags':
        return []
    }
  });

  const busy = computed(() => {
    return loading.value || resolving.value
  });

  // =============== METHODS ==============

  /**
   * @param {array|object|string|number} option 
   */
  const select = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        update(option);
        break

      case 'multiple':
      case 'tags':
        update((iv.value).concat(option));
        break
    }

    context.emit('select', finalValue(option), option, $this);
  };

  const deselect = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        clear();
        break

      case 'tags':
      case 'multiple':
        update(Array.isArray(option)
          ? iv.value.filter(v => option.map(o => o[valueProp.value]).indexOf(v[valueProp.value]) === -1)
          : iv.value.filter(v => v[valueProp.value] != option[valueProp.value]));
        break
    }

    context.emit('deselect', finalValue(option), option, $this);
  };

  // no export
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value]
  };

  const remove = (option) => {
    deselect(option);
  };

  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return
    }

    remove(option);
  };

  const clear = () => {
    update(nullValue.value);
    context.emit('clear', $this);
  };

  const isSelected = (option) => {
    if (option.group !== undefined) {
      return mode.value === 'single' ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length
    }

    switch (mode.value) {
      case 'single':
        return !isNullish$1(iv.value) && iv.value[valueProp.value] == option[valueProp.value]

      case 'tags':
      case 'multiple':
        return !isNullish$1(iv.value) && iv.value.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    }
  };

  const isDisabled = (option) => {
    return option[disabledProp.value] === true
  };

  const isMax = () => {
    if (max === undefined || max.value === -1 || (!hasSelected.value && max.value > 0)) {
      return false
    }
    
    return iv.value.length >= max.value
  };

  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return
    }

    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;

      option = onCreate.value(option, $this);
      
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });

        return
      } 
    }

    handleOptionSelect(option);
  };

  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    
    switch (mode.value) {
      case 'single':
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        /* istanbul ignore else */
        if (clearOnSelect.value) {
          clearSearch();
        }

        if (closeOnSelect.value) {
          clearPointer();
          close();
        }

        if (option) {
          select(option);
        }
        break

      case 'multiple':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
          select(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break

      case 'tags':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (option) {
          select(option);
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break
    }

    if (!closeOnSelect.value) {
      focus();
    }
  };

  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === 'single' || !groupSelect.value) {
      return
    }

    switch (mode.value) {
      case 'multiple':
      case 'tags':
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(group[groupOptions.value]
            .filter(o => iv.value.map(v => v[valueProp.value]).indexOf(o[valueProp.value]) === -1)
            .filter(o => !o[disabledProp.value])
            .filter((o, k) => iv.value.length + 1 + k <= max.value || max.value === -1)
          );
        }

        if (hideSelected.value && pointer.value) {
          // Refresh pointer because pointer.__VISIBLE__ are not reactive #354
          setPointer(fg.value.filter(g => !g[disabledProp.value])[pointer.value.index]);
        }
        break
    }

    if (closeOnSelect.value) {
      deactivate();
    }
  };

  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === undefined && createOption.value) {
      context.emit('tag', option[valueProp.value], $this);
      context.emit('option', option[valueProp.value], $this);
      context.emit('create', option[valueProp.value], $this);

      if (appendNewOption.value) {
        appendOption(option);
      }

      clearSearch();
    }
  };

  const selectAll = () => {
    if (mode.value === 'single') {
      return
    }

    select(fo.value.filter(o => !o.disabled && !isSelected(o)));
  };

  // no export
  const areAllEnabledSelected = (options) => {
    return options.find(o => !isSelected(o) && !o[disabledProp.value]) === undefined
  };

  // no export
  const areAllSelected = (options) => {
    return options.find(o => !isSelected(o)) === undefined
  };

  const getOption = (val) => {
    return eo.value[eo.value.map(o => String(o[valueProp.value])).indexOf(String(val))]
  };

  // no export
  const getOptionByTrackBy = (val) => {
    return eo.value.findIndex((o) => {
      return trackBy.value.some((track) => {
        return (parseInt(o[track]) == o[track] ? parseInt(o[track]) : o[track]) === (parseInt(val) == val ? parseInt(val) : val)
      })
    })
  };

  // no export
  const shouldHideOption = (option) => {
    return ['tags', 'multiple'].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option)
  };

  // no export
  const appendOption = (option) => {
    ap.value.push(option);
  };

  // no export
  const filterGroups = (groups) => {
    // If the search has value we need to filter among 
    // the ones that are visible to the user to avoid
    // displaying groups which technically have options
    // based on search but that option is already selected.
    return groupHideEmpty.value
      ? groups.filter(g => search.value
          ? g.__VISIBLE__.length
          : g[groupOptions.value].length
        )
      : groups.filter(g => search.value ? g.__VISIBLE__.length : true)
  };

  // no export
  const filterOptions = (options, excludeHideSelected = true) => {
    let fo = options;
    
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;

      if (!filter) {
        filter = (option, query, $this) => {
          return trackBy.value.some(track => {
            let target = normalize(localize(option[track]), strict.value);

            return searchStart.value
                ? target.startsWith(normalize(query, strict.value))
                : target.indexOf(normalize(query, strict.value)) !== -1;
          })
        };
      }

      fo = fo.filter((o) => {
        return filter(o, search.value, $this)
      });
    }

    if (hideSelected.value && excludeHideSelected) {
      fo = fo.filter((option) => !shouldHideOption(option));
    }

    return fo
  };

  // no export
  const optionsToArray = (options) => {
    let uo = options;
    
    // Transforming an object to an array of objects
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];

        return { [valueProp.value]: key, [trackBy.value[0]]: val, [label.value]: val}
      });
    }

    // Transforming an plain arrays to an array of objects
    uo = uo.map((val) => {
      return typeof val === 'object' ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val}
    });

    return uo
  };

  // no export
  const initInternalValue = () => {
    if (!isNullish$1(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };

  const resolveOptions = (callback) => {
    resolving.value = true;

    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];

        if (typeof callback == 'function') {
          callback(response);
        }

        resolving.value = false;
      }).catch((e) => {
        console.error(e);

        ro.value = [];

        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    })
  };

  // no export
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return
    }

    if (mode.value === 'single') {
      let option = getOption(iv.value[valueProp.value]);

      /* istanbul ignore else */
      if (option !== undefined) {
        let newLabel = option[label.value];

        iv.value[label.value] = newLabel;

        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);

        /* istanbul ignore else */
        if (option !== undefined) {
          let newLabel = option[label.value];

          iv.value[i][label.value] = newLabel;

          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };

  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === 'single' ? {} : []
    }

    if (object.value) {
      return val
    }

    // If external should be plain transform value object to plain values
    return mode.value === 'single' ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value[0]]: val,
    } : {}) : val.filter(v => !!getOption(v) || allowAbsent.value).map(v => getOption(v) || {
      [label.value]: v,
      [valueProp.value]: v,
      [trackBy.value[0]]: v,
    })
  };

  // no export
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || (!query && minChars.value !== 0)) {
        return
      }

      resolving.value = true;

      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return
        }

        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter(o => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch( /* istanbul ignore next */ (e) => {
          console.error(e);
        });
      }, delay.value);

    }, { flush: 'sync' });
  };

  // ================ HOOKS ===============

  if (mode.value !== 'single' && !isNullish$1(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`)
  }

  if (options && typeof options.value == 'function') {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  }
  else {
    ro.value = options.value;

    initInternalValue();
  }
  
  // ============== WATCHERS ==============

  if (delay.value > -1) {
    initSearchWatcher();
  }

  watch(delay, (value, old) => {
    /* istanbul ignore else */
    if (searchWatcher.value) {
      searchWatcher.value();
    }

    if (value >= 0) {
      initSearchWatcher();
    }
  });

  watch(ev, (newValue) => {
    if (isNullish$1(newValue)) {
      update(makeInternal(newValue), false);
      return
    }

    switch (mode.value) {
      case 'single':
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break

      case 'multiple':
      case 'tags':
        if (!arraysEqual$1(object.value ? newValue.map(o => o[valueProp.value]) : newValue, iv.value.map(o => o[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break
    }
  }, { deep: true });

  watch(options, (n, o) => {
    if (typeof props.options === 'function') {
      if (resolveOnLoad.value && (!o || (n && n.toString() !== o.toString()))) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;

      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }

      refreshLabels();
    }
  });

  watch(label, refreshLabels);

  watch(limit, (n,o) => {
    offset.value = infinite.value && n === -1 ? 10 : n;
  });

  return {
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels,
  }
}

function usePointer (props, context, dep)
{
  const {
    valueProp, showOptions, searchable, groupLabel,
    groups: groupped, mode, groupSelect, disabledProp,
    groupOptions,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;

  // ============== COMPUTED ==============

  // no export
  const options = computed(() => {
    return fo.value.filter(o => !o[disabledProp.value])
  });

  const groups = computed(() => {
    return fg.value.filter(g => !g[disabledProp.value])
  });

  const canPointGroups = computed(() => {
    return mode.value !== 'single' && groupSelect.value
  });

  const isPointerGroup = computed(() => {
    return pointer.value && pointer.value.group
  });

  const currentGroup = computed(() => {
    return getParentGroup(pointer.value)
  });

  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : /* istanbul ignore next */ getParentGroup(pointer.value);
    const groupIndex = groups.value.map(g => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup = groups.value[groupIndex - 1];

    if (prevGroup === undefined) {
      prevGroup = lastGroup.value;
    }

    return prevGroup
  });
  
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map(g => g.label).indexOf(isPointerGroup.value
      ? pointer.value[groupLabel.value]
      : getParentGroup(pointer.value)[groupLabel.value]) + 1;

    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }

    return groups.value[nextIndex]
  });

  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0]
  });
  
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter(o => !o[disabledProp.value])[0]
  });

  const currentGroupPrevEnabledOption = computed(() => {
    const options = currentGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1]
  });
  
  const currentGroupNextEnabledOption = computed(() => {
    const options = getParentGroup(pointer.value).__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1]
  });

  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  // =============== METHODS ==============

  const isPointed = (option) => {
    return (!!pointer.value && (
      (!option.group && pointer.value[valueProp.value] === option[valueProp.value]) ||
      (option.group !== undefined && pointer.value[groupLabel.value] === option[groupLabel.value])
    )) ? true : undefined
  };

  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };

  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return
    }

    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };

  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? (!groups.value[0].__CREATE__ ? groups.value[0] : options.value[0]) : options.value[0]) || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;

      if (nextPointer === undefined) {
        nextPointer = nextGroup.value;

        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }

      setPointer(nextPointer || /* istanbul ignore next */ null);
    } else {
      let next = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;

      if (options.value.length <= next) {
        next = 0;
      }

      setPointer(options.value[next] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];

      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;

        if (prevPointer === undefined) {
          prevPointer = lastGroup.value;
        }
      }

      setPointer(prevPointer  || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;

      if (prevPointer === undefined) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;

        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;

          if (prevPointer === undefined) {
            prevPointer = prevGroup.value;
          }
        }
      }

      setPointer(prevPointer || /* istanbul ignore next */ null);
    } else {
      let prevIndex = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;

      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }

      setPointer(options.value[prevIndex] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    })
  };

  // no export
  /* istanbul ignore next */
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);

    if (!pointedOption) {
      return
    }

    let wrapper = pointedOption.parentElement.parentElement;

    if (groupped.value) {
      wrapper = isPointerGroup.value
        ? pointedOption.parentElement.parentElement.parentElement
        : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }

    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });

  watch(isOpen, (val) => {
    if (val && multiselect?.value) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];

      if (!firstSelected) {
        return
      }

      let wrapper = firstSelected.parentElement.parentElement;
      
      nextTick(() => {
        /* istanbul ignore next */
        if (wrapper.scrollTop > 0) {
          return
        }

        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });

  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer,
  }
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect$1(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function useDropdown (props, context, dep)
{
  const { disabled, appendTo, appendToBody, openDirection } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const multiselect = dep.multiselect;
  const dropdown = dep.dropdown;

  // ================ DATA ================

  const isOpen = ref(false);
  const popper = ref(null);
  const forcedPlacement = ref(null);
  
  // ============== COMPUTED ==============

  const appended = computed(() => {
    return appendTo.value || appendToBody.value
  });

  const placement = computed(() => {
    return (openDirection.value === 'top' && forcedPlacement.value === 'bottom') ||
           (openDirection.value === 'bottom' && forcedPlacement.value !== 'top')
            ? 'bottom'
            : 'top'
  });

  // =============== METHODS ==============

  const open = () => {
    if (isOpen.value || disabled.value) {
      return
    }

    isOpen.value = true;
    context.emit('open', $this);


    if (appended.value) {
      nextTick(() => {
        updatePopper();
      });
    }
  };

  const close = () => {
    if (!isOpen.value) {
      return
    }

    isOpen.value = false;
    context.emit('close', $this);
  };

  const updatePopper = () => {
    if (!popper.value) {
      return
    }

    let borderTopWidth = parseInt(window.getComputedStyle(dropdown.value).borderTopWidth.replace('px', ''));
    let borderBottomWidth = parseInt(window.getComputedStyle(dropdown.value).borderBottomWidth.replace('px', ''));
    
    popper.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {
          name: 'offset',
          options: {
            offset: [0, (placement.value === 'top' ? borderTopWidth : borderBottomWidth) * -1],
          },
        },
      ]
    }));

    popper.value.update();
  };

  /* istanbul ignore next: UI feature */
  const hasFixedParent = (element) => {
    while (element && element !== document.body) {
      const style = getComputedStyle(element);

      if (style.position === 'fixed') {
          return true
      }

      element = element.parentElement;
    }
    
    return false
  };

  onMounted(() => {
    if (!appended.value) {
      return
    }

    /* istanbul ignore next: popper mock */
    popper.value = createPopper(multiselect.value, dropdown.value, {
      strategy: hasFixedParent(multiselect.value) ? /* istanbul ignore next: UI feature */ 'fixed' : undefined,
      placement: openDirection.value,
      modifiers: [
        preventOverflow$1,
        flip$1,
        {
          name: 'sameWidth',
          enabled: true,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${
              state.elements.reference.offsetWidth
            }px`;
          }
        },
        {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn({ state }) {
            forcedPlacement.value = state.placement;
          },
        },
      ]
    });
  });

  onBeforeUnmount(() => {
    if (!appended.value || !popper.value) {
      return
    }

    popper.value.destroy();
    popper.value = null;
  });

  return {
    popper,
    isOpen,
    open,
    close,
    placement,
    updatePopper,
  }
}

function useMultiselect (props, context, dep)
{
  const { searchable, disabled, clearOnBlur } = toRefs(props);

  // ============ DEPENDENCIES ============

  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const wrapper = dep.wrapper;
  const tags = dep.tags;

  // ================ DATA ================

  const isActive = ref(false);

  const mouseClicked = ref(false);

  // ============== COMPUTED ==============

  const tabindex = computed(() => {
    return searchable.value || disabled.value ? -1 : 0
  });

  // =============== METHODS ==============

  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }

    wrapper.value.blur();
  };

  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };

  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return
    }

    isActive.value = true;

    if (shouldOpen) {
      open();
    }
  };

  const deactivate = () => {
    isActive.value = false;

    setTimeout(() => {
      if (!isActive.value) {
        close();

        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };

  const handleFocusIn = (e) => {
    if ((e.target.closest('[data-tags]') && e.target.nodeName !== 'INPUT') || e.target.closest('[data-clear]')) {
      return
    }

    activate(mouseClicked.value);
  };

  const handleFocusOut = () => {
    deactivate();
  };

  const handleCaretClick = () => {
    deactivate();
    blur();
  };

  /* istanbul ignore next */
  const handleMousedown = (e) => {
    mouseClicked.value = true;

    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (!isOpen.value 
      && (document.activeElement.isEqualNode(wrapper.value)
        || document.activeElement.isEqualNode(input.value))) {
      activate();    
    }

    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };

  return {
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown,
  }
}

function useKeyboard (props, context, dep)
{
  const {
    mode, addTagOn, openDirection, searchable,
    showOptions, valueProp, groups: groupped,
    addOptionOn: addOptionOn_, createTag, createOption: createOption_,
    reverse,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const update = dep.update;
  const deselect = dep.deselect;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;

  // ============== COMPUTED ==============

  // no export
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const addOptionOn = computed(() => {
    if (addTagOn.value !== undefined) {
      return addTagOn.value
    }
    else if (addOptionOn_.value !== undefined) {
      return addOptionOn_.value
    }

    return ['enter']
  });

  // =============== METHODS ==============

  // no export
  const preparePointer = () => {
    // When options are hidden and creating tags is allowed
    // no pointer will be set (because options are hidden).
    // In such case we need to set the pointer manually to the 
    // first option, which equals to the option created from
    // the search value.
    if (mode.value === 'tags' && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map(o => o[valueProp.value]).indexOf(search.value)]);
    }
  };

  const handleKeydown = (e) => {
    context.emit('keydown', e, $this);

    let tagList;
    let activeIndex;

    if (['ArrowLeft', 'ArrowRight', 'Enter'].indexOf(e.key) !== -1 && mode.value === 'tags') {
      tagList = [...(multiselect.value.querySelectorAll(`[data-tags] > *`))].filter(e => e !== tags.value);
      activeIndex = tagList.findIndex(e => e === document.activeElement);
    }

    switch (e.key) {
      case 'Backspace':
        if (mode.value === 'single') {
          return
        }

        if (searchable.value && [null, ''].indexOf(search.value) === -1) {
          return
        }

        if (iv.value.length === 0) {
          return
        }

        let deselectables = iv.value.filter(v=>!v.disabled && v.remove !== false);

        if (deselectables.length) {
          deselect(deselectables[deselectables.length - 1]);
        }
        break

      case 'Enter':
        e.preventDefault();

        if (e.keyCode === 229) {
          // ignore IME confirmation
          return
        }

        if (activeIndex !== -1 && activeIndex !== undefined) {
          update([...iv.value].filter((v, k) => k !== activeIndex));

          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector('input').focus();
            } else {
              wrapper.value.focus();
            }
          }
          return
        }

        if (addOptionOn.value.indexOf('enter') === -1 && createOption.value) {
          return
        }
        
        preparePointer();
        selectPointer();
        break

      case ' ':
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          
          preparePointer();
          selectPointer();
          return
        }

        if (!createOption.value) {
          return false
        } 

        if (addOptionOn.value.indexOf('space') === -1 && createOption.value) {
          return
        }

        e.preventDefault();
        
        preparePointer();
        selectPointer();
        break
      
      case 'Tab':
      case ';':
      case ',':
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return
        }

        preparePointer();
        selectPointer();
        e.preventDefault();
        break

      case 'Escape':
        blur();
        break

      case 'ArrowUp':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }
        
        backwardPointer();
        break

      case 'ArrowDown':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }

        forwardPointer();
        break

      case 'ArrowLeft':
        if (
          (searchable.value && tags.value && tags.value.querySelector('input').selectionStart)
          || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length
        ) {
          return
        }

        e.preventDefault();

        if (activeIndex === -1) {
          tagList[tagList.length-1].focus();
        }
        else if (activeIndex > 0) {
          tagList[activeIndex-1].focus();
        }
        break

      case 'ArrowRight':
        if (activeIndex === -1 || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length) {
          return
        }

        e.preventDefault();
        
        /* istanbul ignore else */
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex+1].focus();
        }
        else if (searchable.value) {
          tags.value.querySelector('input').focus();
        }
        else if (!searchable.value) {
          wrapper.value.focus();
        }
        
        break
    }
  };

  const handleKeyup = (e) => {
    context.emit('keyup', e, $this);
  };

  return {
    handleKeydown,
    handleKeyup,
    preparePointer,
  }
}

function useClasses$2 (props, context, dependencies)
{const { 
    classes: classes_, disabled, showOptions, breakTags
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const placement = dependencies.placement;

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    container: 'multiselect',
    containerDisabled: 'is-disabled',
    containerOpen: 'is-open',
    containerOpenTop: 'is-open-top',
    containerActive: 'is-active',
    wrapper: 'multiselect-wrapper',
    singleLabel: 'multiselect-single-label',
    singleLabelText: 'multiselect-single-label-text',
    multipleLabel: 'multiselect-multiple-label',
    search: 'multiselect-search',
    tags: 'multiselect-tags',
    tag: 'multiselect-tag',
    tagWrapper: 'multiselect-tag-wrapper',
    tagWrapperBreak: 'multiselect-tag-wrapper-break',
    tagDisabled: 'is-disabled',
    tagRemove: 'multiselect-tag-remove',
    tagRemoveIcon: 'multiselect-tag-remove-icon',
    tagsSearchWrapper: 'multiselect-tags-search-wrapper',
    tagsSearch: 'multiselect-tags-search',
    tagsSearchCopy: 'multiselect-tags-search-copy',
    placeholder: 'multiselect-placeholder',
    caret: 'multiselect-caret',
    caretOpen: 'is-open',
    clear: 'multiselect-clear',
    clearIcon: 'multiselect-clear-icon',
    spinner: 'multiselect-spinner',
    inifinite: 'multiselect-inifite',
    inifiniteSpinner: 'multiselect-inifite-spinner',
    dropdown: 'multiselect-dropdown',
    dropdownTop: 'is-top',
    dropdownHidden: 'is-hidden',
    options: 'multiselect-options',
    optionsTop: 'is-top',
    group: 'multiselect-group',
    groupLabel: 'multiselect-group-label',
    groupLabelPointable: 'is-pointable',
    groupLabelPointed: 'is-pointed',
    groupLabelSelected: 'is-selected',
    groupLabelDisabled: 'is-disabled',
    groupLabelSelectedPointed: 'is-selected is-pointed',
    groupLabelSelectedDisabled: 'is-selected is-disabled',
    groupOptions: 'multiselect-group-options',
    option: 'multiselect-option',
    optionPointed: 'is-pointed',
    optionSelected: 'is-selected',
    optionDisabled: 'is-disabled',
    optionSelectedPointed: 'is-selected is-pointed',
    optionSelectedDisabled: 'is-selected is-disabled',
    noOptions: 'multiselect-no-options',
    noResults: 'multiselect-no-results',
    fakeInput: 'multiselect-fake-input',
    assist: 'multiselect-assistive-text',
    spacer: 'multiselect-spacer',
    ...classes_.value,
  }));

  const showDropdown = computed(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || (resolving.value && fo.value.length)))
  });

  const classList = computed(() => {
    const c = classes.value;

    return {
      container: [c.container]
        .concat(disabled.value ? c.containerDisabled : [])
        .concat(showDropdown.value && placement.value === 'top'  ? c.containerOpenTop : [])
        .concat(showDropdown.value && placement.value !== 'top' ? c.containerOpen : [])
        .concat(isActive.value ? c.containerActive : []),
      wrapper: c.wrapper,
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag]
        .concat(disabled.value ? c.tagDisabled : []),
      tagWrapper: [c.tagWrapper, breakTags.value ? c.tagWrapperBreak : null],
      tagDisabled: c.tagDisabled,
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret]
        .concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown]
        .concat(placement.value === 'top' ? c.dropdownTop : [])
        .concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options]
        .concat(placement.value === 'top' ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];

        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }

        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }

        return groupLabel
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];

        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || (g && isDisabled(g))) {
          option.push(c.optionDisabled);
        }

        return option
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      assist: c.assist,
      fakeInput: c.fakeInput,
    }
  });

  return {
    classList,
    showDropdown,
  }
}

function useScroll (props, context, dep)
{
  const {
    limit, infinite,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;

  // ================ DATA ================

  // no export
  const observer = ref(null);

  const infiniteLoader = ref(null);

  // ============== COMPUTED ==============

  const hasMore = computed(() => {
    return offset.value < pfo.value.length
  });

  // =============== METHODS ==============

  // no export
  /* istanbul ignore next */
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];

    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;

      offset.value += limit.value == -1 ? 10 : limit.value;

      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };

  const observe = () => {
    /* istanbul ignore else */
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };

  // ============== WATCHERS ==============

  watch(isOpen, () => {
    if (!infinite.value) {
      return
    }

    observe();
  });

  watch(search, () => {
    if (!infinite.value) {
      return
    }

    offset.value = limit.value;

    observe();
  }, { flush: 'post' });

  watch(eo, () => {
    if (!infinite.value) {
      return
    }

    observe();
  }, { immediate: false, flush: 'post' });

  // ================ HOOKS ===============

  onMounted(() => {
    /* istanbul ignore else */
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });

  return {
    hasMore,
    infiniteLoader,
  }
}

function useA11y (props, context, dep)
{
  const {
    placeholder, id, valueProp, label: labelProp, mode, groupLabel, aria, searchable ,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;

  // ================ DATA ================

  const label = ref(null);

  // ============== COMPUTED ==============

  const ariaAssist = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('assist');

    return texts.join('-')
  });

  const ariaControls = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-options');

    return texts.join('-')
  });

  const ariaActiveDescendant = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    if (pointer.value) {
      texts.push(pointer.value.group ? 'multiselect-group' : 'multiselect-option');

      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);

      return texts.join('-')
    }
  });



  const ariaPlaceholder = computed(() => {
    return placeholder.value
  });

  const ariaMultiselectable = computed(() => {
    return mode.value !== 'single'
  });

  const ariaLabel = computed(() => {
    let ariaLabel = '';

    if (mode.value === 'single' && hasSelected.value) {
      ariaLabel += iv.value[labelProp.value];
    }

    if (mode.value === 'multiple' && hasSelected.value) {
      ariaLabel += multipleLabelText.value;
    }

    if (mode.value === 'tags' && hasSelected.value) {
      ariaLabel += iv.value.map(v => v[labelProp.value]).join(', ');
    }

    return ariaLabel
  });

  const arias = computed(() => {
    let arias = { ...aria.value };
    
    // Need to add manually because focusing
    // the input won't read the selected value
    if (searchable.value) {
      arias['aria-labelledby'] = arias['aria-labelledby']
        ? `${ariaAssist.value} ${arias['aria-labelledby']}`
        : ariaAssist.value;
      
      if (ariaLabel.value && arias['aria-label']) {
        arias['aria-label'] = `${ariaLabel.value}, ${arias['aria-label']}`;
      }
    }

    return arias
  });

  // =============== METHODS ==============

  const ariaOptionId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-option');

    texts.push(option[valueProp.value]);

    return texts.join('-')
  };

  const ariaGroupId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-group');

    texts.push(option.index);

    return texts.join('-')
  };

  const ariaOptionLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaGroupLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaTagLabel = (label) => {
    return `${label} ❎`
  };

  // =============== HOOKS ================

  onMounted(() => {
    /* istanbul ignore next */
    if (id && id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });

  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel,
  }
}

function useI18n (props, context, dep)
{
  const {
    locale, fallbackLocale,
  } = toRefs(props);

  // =============== METHODS ==============

  const localize = (target) => {
    if (!target || typeof target !== 'object') {
      return target
    }

    if (target && target[locale.value]) {
      return target[locale.value]
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()]
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value]
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()]
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]]
    } else {
      return ''
    }
  };

  return {
    localize,
  }
}

function useRefs (props, context, dep)
{
  // ================ DATA ================

  const multiselect = ref(null);
  
  const wrapper = ref(null);

  const tags = ref(null);

  const input = ref(null);

  const dropdown = ref(null);

  return {
    multiselect,
    wrapper,
    tags,
    input,
    dropdown,
  }
}

function resolveDeps (props, context, features, deps = {}) {
  features.forEach((composable) => {
    /* istanbul ignore else */
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }

  });
  
  return deps
}

var script$W = {
    name: 'Multiselect',
    emits: [
      'paste', 'open', 'close', 'select', 'deselect', 
      'input', 'search-change', 'tag', 'option', 'update:modelValue',
      'change', 'clear', 'keydown', 'keyup', 'max', 'create',
    ],
    props: {
      value: {
        required: false,
      },
      modelValue: {
        required: false,
      },
      options: {
        type: [Array, Object, Function],
        required: false,
        default: () => ([])
      },
      id: {
        type: [String, Number],
        required: false,
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'multiselect',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: 'label',
      },
      trackBy: {
        type: [String, Array],
        required: false,
        default: undefined,
      },
      valueProp: {
        type: String,
        required: false,
        default: 'value',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      mode: {
        type: String,
        required: false,
        default: 'single', // single|multiple|tags
      },
      searchable: {
        type: Boolean,
        required: false,
        default: false,
      },
      limit: {
        type: Number,
        required: false,
        default: -1,
      },
      hideSelected: {
        type: Boolean,
        required: false,
        default: true,
      },
      createTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      createOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      addTagOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      addOptionOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      caret: {
        type: Boolean,
        required: false,
        default: true,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      noOptionsText: {
        type: [String, Object],
        required: false,
        default: 'The list is empty',
      },
      noResultsText: {
        type: [String, Object],
        required: false,
        default: 'No results found',
      },
      multipleLabel: {
        type: Function,
        required: false,
      },
      object: {
        type: Boolean,
        required: false,
        default: false,
      },
      delay: {
        type: Number,
        required: false,
        default: -1,
      },
      minChars: {
        type: Number,
        required: false,
        default: 0,
      },
      resolveOnLoad: {
        type: Boolean,
        required: false,
        default: true,
      },
      filterResults: {
        type: Boolean,
        required: false,
        default: true,
      },
      clearOnSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      clearOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canDeselect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canClear: {
        type: Boolean,
        required: false,
        default: true,
      },
      max: {
        type: Number,
        required: false,
        default: -1,
      },
      showOptions: {
        type: Boolean,
        required: false,
        default: true,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      openDirection: {
        type: String,
        required: false,
        default: 'bottom',
      },
      nativeSupport: {
        type: Boolean,
        required: false,
        default: false,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      strict: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnDeselect: {
        type: Boolean,
        required: false,
        default: false,
      },
      autocomplete: {
        type: String,
        required: false,
      },
      groups: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupLabel: {
        type: String,
        required: false,
        default: 'label',
      },
      groupOptions: {
        type: String,
        required: false,
        default: 'options',
      },
      groupHideEmpty: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      inputType: {
        type: String,
        required: false,
        default: 'text',
      },
      attrs: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      onCreate: {
        required: false,
        type: Function,
      },
      disabledProp: {
        type: String,
        required: false,
        default: 'disabled',
      },
      searchStart: {
        type: Boolean,
        required: false,
        default: false,
      },
      reverse: {
        type: Boolean,
        required: false,
        default: false,
      },
      regex: {
        type: [Object, String, RegExp],
        required: false,
        default: undefined,
      },
      rtl: {
        type: Boolean,
        required: false,
        default: false,
      },
      infinite: {
        type: Boolean,
        required: false,
        default: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      clearOnBlur: {
        required: false,
        type: Boolean,
        default: true,
      },
      locale: {
        required: false,
        type: String,
        default: null,
      },
      fallbackLocale: {
        required: false,
        type: String,
        default: 'en',
      },
      searchFilter: {
        required: false,
        type: Function,
        default: null,
      },
      allowAbsent: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendToBody: {
        required: false,
        type: Boolean,
        default: false,
      },
      closeOnScroll: {
        required: false,
        type: Boolean,
        default: false,
      },
      breakTags: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendTo: {
        required: false,
        type: String,
      },
    },
    setup(props, context)
    { 
      return resolveDeps(props, context, [
        useRefs,
        useI18n,
        useValue$3,
        usePointer$1,
        useDropdown,
        useSearch,
        useData,
        useMultiselect,
        useOptions,
        useScroll,
        usePointer,
        useKeyboard,
        useClasses$2,
        useA11y,
      ])
    },
    beforeMount() {
      if (this.$root.constructor?.version?.match(/^2\./) || this.vueVersionMs === 2) {
        if (!this.$options.components.Teleport) {
          this.$options.components.Teleport = {
            render() {
              return this.$slots.default ? this.$slots.default[0] : null
            }
          };
        }
      }
    }
  };

const _hoisted_1$l = ["id", "dir"];
const _hoisted_2$e = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
const _hoisted_3$9 = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_4$4 = ["onKeyup", "aria-label"];
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$2 = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_7$1 = ["innerHTML"];
const _hoisted_8$1 = ["id"];
const _hoisted_9$1 = ["id"];
const _hoisted_10$1 = ["id", "aria-label", "aria-selected"];
const _hoisted_11$1 = ["data-pointed", "onMouseenter", "onMousedown"];
const _hoisted_12$1 = ["innerHTML"];
const _hoisted_13$1 = ["aria-label"];
const _hoisted_14 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
const _hoisted_15 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["name", "value"];
const _hoisted_20 = ["name", "value"];
const _hoisted_21 = ["id"];

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    ref: "multiselect",
    class: normalizeClass(_ctx.classList.container),
    id: $props.searchable ? undefined : $props.id,
    dir: $props.rtl ? 'rtl' : undefined,
    onFocusin: _cache[12] || (_cache[12] = (...args) => (_ctx.handleFocusIn && _ctx.handleFocusIn(...args))),
    onFocusout: _cache[13] || (_cache[13] = (...args) => (_ctx.handleFocusOut && _ctx.handleFocusOut(...args))),
    onKeyup: _cache[14] || (_cache[14] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args))),
    onKeydown: _cache[15] || (_cache[15] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)))
  }, [
    createElementVNode("div", mergeProps({
      class: _ctx.classList.wrapper,
      onMousedown: _cache[9] || (_cache[9] = (...args) => (_ctx.handleMousedown && _ctx.handleMousedown(...args))),
      ref: "wrapper",
      tabindex: _ctx.tabindex,
      "aria-controls": !$props.searchable ? _ctx.ariaControls : undefined,
      "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : undefined,
      "aria-expanded": !$props.searchable ? _ctx.isOpen : undefined,
      "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : undefined,
      "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : undefined,
      role: !$props.searchable ? 'combobox' : undefined
    }, !$props.searchable ? _ctx.arias : {}), [
      createCommentVNode(" Search "),
      ($props.mode !== 'tags' && $props.searchable && !$props.disabled)
        ? (openBlock(), createElementBlock("input", mergeProps({
            key: 0,
            type: $props.inputType,
            modelValue: _ctx.search,
            value: _ctx.search,
            class: _ctx.classList.search,
            autocomplete: $props.autocomplete,
            id: $props.searchable ? $props.id : undefined,
            onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
            onKeypress: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
            onPaste: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
            ref: "input",
            "aria-controls": _ctx.ariaControls,
            "aria-placeholder": _ctx.ariaPlaceholder,
            "aria-expanded": _ctx.isOpen,
            "aria-activedescendant": _ctx.ariaActiveDescendant,
            "aria-multiselectable": _ctx.ariaMultiselectable,
            role: "combobox"
          }, {
            ...$props.attrs,
            ..._ctx.arias,
          }), null, 16 /* FULL_PROPS */, _hoisted_3$9))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Tags (with search) "),
      ($props.mode == 'tags')
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.classList.tags),
            "data-tags": ""
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.iv, (option, i, key) => {
              return renderSlot(_ctx.$slots, "tag", {
                option: option,
                handleTagRemove: _ctx.handleTagRemove,
                disabled: $props.disabled
              }, () => [
                (openBlock(), createElementBlock("span", {
                  class: normalizeClass([
                _ctx.classList.tag,
                option.disabled ? _ctx.classList.tagDisabled : null,
              ]),
                  tabindex: "-1",
                  onKeyup: withKeys($event => (_ctx.handleTagRemove(option, $event)), ["enter"]),
                  key: key,
                  "aria-label": _ctx.ariaTagLabel(_ctx.localize(option[$props.label]))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classList.tagWrapper)
                  }, toDisplayString(_ctx.localize(option[$props.label])), 3 /* TEXT, CLASS */),
                  (!$props.disabled && !option.disabled)
                    ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(_ctx.classList.tagRemove),
                        onClick: withModifiers($event => (_ctx.handleTagRemove(option, $event)), ["stop"])
                      }, [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.classList.tagRemoveIcon)
                        }, null, 2 /* CLASS */)
                      ], 10 /* CLASS, PROPS */, _hoisted_5$3))
                    : createCommentVNode("v-if", true)
                ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_4$4))
              ])
            }), 256 /* UNKEYED_FRAGMENT */)),
            createElementVNode("div", {
              class: normalizeClass(_ctx.classList.tagsSearchWrapper),
              ref: "tags"
            }, [
              createCommentVNode(" Used for measuring search width "),
              createElementVNode("span", {
                class: normalizeClass(_ctx.classList.tagsSearchCopy)
              }, toDisplayString(_ctx.search), 3 /* TEXT, CLASS */),
              createCommentVNode(" Actual search input "),
              ($props.searchable && !$props.disabled)
                ? (openBlock(), createElementBlock("input", mergeProps({
                    key: 0,
                    type: $props.inputType,
                    modelValue: _ctx.search,
                    value: _ctx.search,
                    class: _ctx.classList.tagsSearch,
                    id: $props.searchable ? $props.id : undefined,
                    autocomplete: $props.autocomplete,
                    onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
                    onKeypress: _cache[4] || (_cache[4] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
                    onPaste: _cache[5] || (_cache[5] = withModifiers((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
                    ref: "input",
                    "aria-controls": _ctx.ariaControls,
                    "aria-placeholder": _ctx.ariaPlaceholder,
                    "aria-expanded": _ctx.isOpen,
                    "aria-activedescendant": _ctx.ariaActiveDescendant,
                    "aria-multiselectable": _ctx.ariaMultiselectable,
                    role: "combobox"
                  }, {
                ...$props.attrs,
                ..._ctx.arias,
              }), null, 16 /* FULL_PROPS */, _hoisted_6$2))
                : createCommentVNode("v-if", true)
            ], 2 /* CLASS */)
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Single label "),
      ($props.mode == 'single' && _ctx.hasSelected && !_ctx.search && _ctx.iv)
        ? renderSlot(_ctx.$slots, "singlelabel", {
            key: 2,
            value: _ctx.iv
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(_ctx.classList.singleLabel)
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classList.singleLabelText)
              }, toDisplayString(_ctx.localize(_ctx.iv[$props.label])), 3 /* TEXT, CLASS */)
            ], 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Multiple label "),
      ($props.mode == 'multiple' && _ctx.hasSelected && !_ctx.search)
        ? renderSlot(_ctx.$slots, "multiplelabel", {
            key: 3,
            values: _ctx.iv
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(_ctx.classList.multipleLabel),
              innerHTML: _ctx.multipleLabelText
            }, null, 10 /* CLASS, PROPS */, _hoisted_7$1)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Placeholder "),
      ($props.placeholder && !_ctx.hasSelected && !_ctx.search)
        ? renderSlot(_ctx.$slots, "placeholder", { key: 4 }, () => [
            createElementVNode("div", {
              class: normalizeClass(_ctx.classList.placeholder),
              "aria-hidden": "true"
            }, toDisplayString($props.placeholder), 3 /* TEXT, CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Spinner "),
      ($props.loading || _ctx.resolving)
        ? renderSlot(_ctx.$slots, "spinner", { key: 5 }, () => [
            createElementVNode("span", {
              class: normalizeClass(_ctx.classList.spinner),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Clear "),
      (_ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy)
        ? renderSlot(_ctx.$slots, "clear", {
            key: 6,
            clear: _ctx.clear
          }, () => [
            createElementVNode("span", {
              "aria-hidden": "true",
              tabindex: "0",
              role: "button",
              "data-clear": "",
              "aria-roledescription": "❎",
              class: normalizeClass(_ctx.classList.clear),
              onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.clear && _ctx.clear(...args))),
              onKeyup: _cache[7] || (_cache[7] = withKeys((...args) => (_ctx.clear && _ctx.clear(...args)), ["enter"]))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classList.clearIcon)
              }, null, 2 /* CLASS */)
            ], 34 /* CLASS, NEED_HYDRATION */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Caret "),
      ($props.caret && $props.showOptions)
        ? renderSlot(_ctx.$slots, "caret", {
            key: 7,
            handleCaretClick: _ctx.handleCaretClick,
            isOpen: _ctx.isOpen
          }, () => [
            createElementVNode("span", {
              class: normalizeClass(_ctx.classList.caret),
              onClick: _cache[8] || (_cache[8] = (...args) => (_ctx.handleCaretClick && _ctx.handleCaretClick(...args))),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true)
    ], 16 /* FULL_PROPS */, _hoisted_2$e),
    createCommentVNode(" Options "),
    (openBlock(), createBlock(Teleport, {
      to: $props.appendTo || 'body',
      disabled: !$props.appendToBody && !$props.appendTo
    }, [
      createElementVNode("div", {
        id: $props.id ? `${$props.id}-dropdown` : undefined,
        class: normalizeClass(_ctx.classList.dropdown),
        tabindex: "-1",
        ref: "dropdown",
        onFocusin: _cache[10] || (_cache[10] = (...args) => (_ctx.handleFocusIn && _ctx.handleFocusIn(...args))),
        onFocusout: _cache[11] || (_cache[11] = (...args) => (_ctx.handleFocusOut && _ctx.handleFocusOut(...args)))
      }, [
        renderSlot(_ctx.$slots, "beforelist", { options: _ctx.fo }),
        createElementVNode("ul", {
          class: normalizeClass(_ctx.classList.options),
          id: _ctx.ariaControls,
          role: "listbox"
        }, [
          ($props.groups)
            ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fg, (group, i, key) => {
                return (openBlock(), createElementBlock("li", {
                  class: normalizeClass(_ctx.classList.group),
                  key: key,
                  id: _ctx.ariaGroupId(group),
                  "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                  "aria-selected": _ctx.isSelected(group),
                  role: "option"
                }, [
                  (!group.__CREATE__)
                    ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(_ctx.classList.groupLabel(group)),
                        "data-pointed": _ctx.isPointed(group),
                        onMouseenter: $event => (_ctx.setPointer(group, i)),
                        onMousedown: withModifiers($event => (_ctx.handleGroupClick(group)), ["prevent"])
                      }, [
                        renderSlot(_ctx.$slots, "grouplabel", {
                          group: group,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed
                        }, () => [
                          createElementVNode("span", {
                            innerHTML: _ctx.localize(group[$props.groupLabel])
                          }, null, 8 /* PROPS */, _hoisted_12$1)
                        ])
                      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_11$1))
                    : createCommentVNode("v-if", true),
                  createElementVNode("ul", {
                    class: normalizeClass(_ctx.classList.groupOptions),
                    "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                    role: "group"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.__VISIBLE__, (option, i, key) => {
                      return (openBlock(), createElementBlock("li", {
                        class: normalizeClass(_ctx.classList.option(option, group)),
                        "data-pointed": _ctx.isPointed(option),
                        "data-selected": _ctx.isSelected(option) || undefined,
                        key: key,
                        onMouseenter: $event => (_ctx.setPointer(option)),
                        onMousedown: withModifiers($event => (_ctx.handleOptionClick(option)), ["prevent"]),
                        id: _ctx.ariaOptionId(option),
                        "aria-selected": _ctx.isSelected(option),
                        "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                        role: "option"
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option: option,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed,
                          search: _ctx.search
                        }, () => [
                          createElementVNode("span", null, toDisplayString(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                        ])
                      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_14))
                    }), 128 /* KEYED_FRAGMENT */))
                  ], 10 /* CLASS, PROPS */, _hoisted_13$1)
                ], 10 /* CLASS, PROPS */, _hoisted_10$1))
              }), 128 /* KEYED_FRAGMENT */))
            : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.fo, (option, i, key) => {
                return (openBlock(), createElementBlock("li", {
                  class: normalizeClass(_ctx.classList.option(option)),
                  "data-pointed": _ctx.isPointed(option),
                  "data-selected": _ctx.isSelected(option) || undefined,
                  key: key,
                  onMouseenter: $event => (_ctx.setPointer(option)),
                  onMousedown: withModifiers($event => (_ctx.handleOptionClick(option)), ["prevent"]),
                  id: _ctx.ariaOptionId(option),
                  "aria-selected": _ctx.isSelected(option),
                  "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                  role: "option"
                }, [
                  renderSlot(_ctx.$slots, "option", {
                    option: option,
                    isSelected: _ctx.isSelected,
                    isPointed: _ctx.isPointed,
                    search: _ctx.search
                  }, () => [
                    createElementVNode("span", null, toDisplayString(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                  ])
                ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_15))
              }), 128 /* KEYED_FRAGMENT */))
        ], 10 /* CLASS, PROPS */, _hoisted_9$1),
        (_ctx.noOptions)
          ? renderSlot(_ctx.$slots, "nooptions", { key: 0 }, () => [
              createElementVNode("div", {
                class: normalizeClass(_ctx.classList.noOptions),
                innerHTML: _ctx.localize($props.noOptionsText)
              }, null, 10 /* CLASS, PROPS */, _hoisted_16)
            ])
          : createCommentVNode("v-if", true),
        (_ctx.noResults)
          ? renderSlot(_ctx.$slots, "noresults", { key: 1 }, () => [
              createElementVNode("div", {
                class: normalizeClass(_ctx.classList.noResults),
                innerHTML: _ctx.localize($props.noResultsText)
              }, null, 10 /* CLASS, PROPS */, _hoisted_17)
            ])
          : createCommentVNode("v-if", true),
        ($props.infinite && _ctx.hasMore)
          ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.classList.inifinite),
              ref: "infiniteLoader"
            }, [
              renderSlot(_ctx.$slots, "infinite", {}, () => [
                createElementVNode("span", {
                  class: normalizeClass(_ctx.classList.inifiniteSpinner)
                }, null, 2 /* CLASS */)
              ])
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "afterlist", { options: _ctx.fo })
      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_8$1)
    ], 8 /* PROPS */, ["to", "disabled"])),
    createCommentVNode(" Hacky input element to show HTML5 required warning "),
    ($props.required)
      ? (openBlock(), createElementBlock("input", {
          key: 0,
          class: normalizeClass(_ctx.classList.fakeInput),
          tabindex: "-1",
          value: _ctx.textValue,
          required: ""
        }, null, 10 /* CLASS, PROPS */, _hoisted_18))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Native input support "),
    ($props.nativeSupport)
      ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          ($props.mode == 'single')
            ? (openBlock(), createElementBlock("input", {
                key: 0,
                type: "hidden",
                name: $props.name,
                value: _ctx.plainValue !== undefined ? _ctx.plainValue : ''
              }, null, 8 /* PROPS */, _hoisted_19))
            : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.plainValue, (v, i) => {
                return (openBlock(), createElementBlock("input", {
                  type: "hidden",
                  name: `${$props.name}[]`,
                  value: v,
                  key: i
                }, null, 8 /* PROPS */, _hoisted_20))
              }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Screen reader assistive text "),
    ($props.searchable && _ctx.hasSelected)
      ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.classList.assist),
          id: _ctx.ariaAssist,
          "aria-hidden": "true"
        }, toDisplayString(_ctx.ariaLabel), 11 /* TEXT, CLASS, PROPS */, _hoisted_21))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Create height for empty input "),
    createElementVNode("div", {
      class: normalizeClass(_ctx.classList.spacer)
    }, null, 2 /* CLASS */)
  ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1$l))
}

script$W.render = render$q;
script$W.__file = "node_modules/@vueform/multiselect/src/Multiselect.vue";

var script$V = {
    name: 'MultiselectElement',
    components: {
      Multiselect: script$W,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          inputWrapper: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            multipleLabel: '',
            search: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

const _hoisted_1$k = ["name", "id", "disabled"];
const _hoisted_2$d = ["value"];

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      (_ctx.hasFloating && !_ctx.empty)
        ? (openBlock(), createBlock(_component_ElementLabelFloating, {
            key: 0,
            visible: !_ctx.empty
          }, null, 8 /* PROPS */, ["visible"]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Native select "),
      (_ctx.isNative)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.classes.inputWrapper)
          }, [
            withDirectives(createElementVNode("select", mergeProps({
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event)),
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.fieldId,
              multiple: true,
              disabled: _ctx.isDisabled
            }, {
            ..._ctx.attrs,
            ..._ctx.aria,
          }, { ref: "input" }), [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resolvedOptions, (option, index) => {
                return (openBlock(), createElementBlock("option", {
                  value: option.value,
                  key: index
                }, toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_2$d))
              }), 128 /* KEYED_FRAGMENT */))
            ], 16 /* FULL_PROPS */, _hoisted_1$k), [
              [vModelSelect, _ctx.value]
            ]),
            (_ctx.placeholder && _ctx.empty && !_ctx.isDisabled && _ctx.type == 'select')
              ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.classes.inputPlaceholder)
                }, toDisplayString( _ctx.placeholder), 3 /* TEXT, CLASS */))
              : createCommentVNode("v-if", true)
          ], 2 /* CLASS */))
        : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createCommentVNode(" @vueform/multiselect copmonent "),
            createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.value) = $event)),
              classes: _ctx.classes.select,
              id: _ctx.fieldId,
              name: _ctx.name,
              options: _ctx.resolvedOptions,
              disabled: _ctx.isDisabled,
              placeholder: _ctx.Placeholder,
              attrs: _ctx.attrs,
              aria: _ctx.aria,
              locale: _ctx.form$.locale$,
              onSelect: _ctx.handleSelect,
              onDeselect: _ctx.handleDeselect,
              onSearchChange: _ctx.handleSearchChange,
              onTag: _ctx.handleTag,
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              onClear: _ctx.handleClear,
              onPaste: _ctx.handlePaste,
              ref: "input"
            }), createSlots({ _: 2 /* DYNAMIC */ }, [
              renderList({
          option: 'option', noresults: 'no-results', nooptions: 'no-options',
          afterlist: 'after-list', beforelist: 'before-list', placeholder: 'placeholder',
          grouplabel: 'group-label', caret: 'caret', clear: 'clear', spinner: 'spinner',
          default: 'default',
        }, (slotName, slotKey) => {
                return {
                  name: slotKey,
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16 /* FULL_PROPS */, ["el$"]))
                    ])
                  ])
                }
              }),
              (_ctx.fieldOptions.mode == 'multiple')
                ? {
                    name: "multiplelabel",
                    fn: withCtx(({ values }) => [
                      renderSlot(_ctx.$slots, "multiple-label", {
                        values: values,
                        el$: _ctx.el$
                      }, () => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['multiple-label']), {
                          values: values,
                          el$: _ctx.el$
                        }, null, 8 /* PROPS */, ["values", "el$"]))
                      ])
                    ]),
                    key: "0"
                  }
                : undefined
            ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$V.render = render$p;
script$V.__file = "themes/blank/templates/elements/MultiselectElement.vue";

var script$U = {
    name: 'MultiselectElement',
    components: {
      Multiselect: script$W,
    },
    render: script$V.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
          input_success: 'vf-input-success',
          input_danger: 'vf-input-danger',
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          inputWrapper: '',
          select: {
            multipleLabel: 'vf-multiselect-multiple-label',
            multipleLabel_sm: 'vf-multiselect-multiple-label-sm',
            multipleLabel_md: '',
            multipleLabel_lg: 'vf-multiselect-multiple-label-lg',
            multipleLabel_noClear: 'vf-multiselect-multiple-label-no-clear',
            multipleLabel_noCaret: 'vf-multiselect-multiple-label-no-caret',
            
            container: 'vf-multiselect',
            container_enabled: '',
            container_disabled: 'vf-multiselect-disabled',
            container_success: 'vf-multiselect-success',
            container_danger: 'vf-multiselect-danger',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: '',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            containerActive_enabled: '',
            wrapper: 'vf-multiselect-wrapper',
            wrapper_sm: 'vf-multiselect-wrapper-sm',
            wrapper_md: '',
            wrapper_lg: 'vf-multiselect-wrapper-lg',
            search: 'vf-multiselect-search',
            search_sm: 'vf-multiselect-search-sm',
            search_md: '',
            search_lg: 'vf-multiselect-search-lg',
            placeholder: 'vf-multiselect-placeholder',
            placeholder_sm: 'vf-multiselect-placeholder-sm',
            placeholder_md: '',
            placeholder_lg: 'vf-multiselect-placeholder-lg',
            caret: 'vf-multiselect-caret',
            caret_sm: 'vf-multiselect-caret-sm',
            caret_md: '',
            caret_lg: 'vf-multiselect-caret-lg',
            caretOpen: 'vf-multiselect-caret-open',
            clear: 'vf-multiselect-clear',
            clear_sm: 'vf-multiselect-clear-sm',
            clear_md: '',
            clear_lg: 'vf-multiselect-clear-lg',
            clearIcon: 'vf-multiselect-clear-icon',
            spinner: 'vf-multiselect-spinner',
            spinner_sm: 'vf-multiselect-spinner-sm',
            spinner_md: '',
            spinner_lg: 'vf-multiselect-spinner-lg',
            infinite: 'vf-multiselect-infinite',
            infinite_sm: 'vf-multiselect-infinite-sm',
            infinite_md: '',
            infinite_lg: 'vf-multiselect-infinite-lg',
            infiniteSpinner: 'vf-multiselect-infinite-spinner',
            dropdown: 'vf-multiselect-dropdown',
            dropdown_sm: 'vf-multiselect-dropdown-sm',
            dropdown_md: '',
            dropdown_lg: 'vf-multiselect-dropdown-lg',
            dropdownTop: 'vf-multiselect-dropdown-top',
            dropdownTop_sm: 'vf-multiselect-dropdown-top-sm',
            dropdownTop_md: '',
            dropdownTop_lg: 'vf-multiselect-dropdown-top-lg',
            dropdownHidden: 'vf-multiselect-dropdown-hidden',
            options: 'vf-multiselect-options',
            optionsTop: 'vf-multiselect-options-top',
            group: 'vf-multiselect-group',
            groupLabel: 'vf-multiselect-group-label',
            groupLabel_sm: 'vf-multiselect-group-label-sm',
            groupLabel_md: '',
            groupLabel_lg: 'vf-multiselect-group-label-lg',
            groupLabelPointable: 'vf-multiselect-group-label-pointable',
            groupLabelPointed: 'vf-multiselect-group-label-pointed',
            groupLabelSelected: 'vf-multiselect-group-label-selected',
            groupLabelDisabled: 'vf-multiselect-group-label-disabled',
            groupLabelSelectedPointed: 'vf-multiselect-group-label-selected vf-multiselect-group-label-pointed',
            groupLabelSelectedDisabled: 'vf-multiselect-group-label-selected vf-multiselect-group-label-disabled',
            groupOptions: 'vf-multiselect-group-options',
            option: 'vf-multiselect-option',
            option_sm: 'vf-multiselect-option-sm',
            option_md: '',
            option_lg: 'vf-multiselect-option-lg',
            optionPointed: 'vf-multiselect-option-pointed',
            optionSelected: 'vf-multiselect-option-selected',
            optionDisabled: 'vf-multiselect-option-disabled',
            optionSelectedPointed: 'vf-multiselect-option-selected vf-multiselect-option-pointed',
            optionSelectedDisabled: 'vf-multiselect-option-selected vf-multiselect-option-disabled',
            noOptions: 'vf-multiselect-no-options',
            noOptions_sm: 'vf-multiselect-no-options-sm',
            noOptions_md: '',
            noOptions_lg: 'vf-multiselect-no-options-lg',
            noResults: 'vf-multiselect-no-results',
            noResults_sm: 'vf-multiselect-no-results-sm',
            noResults_md: '',
            noResults_lg: 'vf-multiselect-no-results-lg',
            fakeInput: 'vf-multiselect-fake-input',
            assist: 'vf-assistive-text',
            spacer: 'vf-multiselect-spacer',
            spacer_sm: 'vf-multiselect-spacer-sm',
            spacer_md: '',
            spacer_lg: 'vf-multiselect-spacer-lg',
            $container: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
              isDisabled ? classes.select.container_disabled : null,
              !isDisabled && !isSuccess && !isDanger ? classes.select.container_enabled : null,
              !isDisabled && isDanger ? classes.select.container_danger : null,
              !isDisabled && isSuccess ? classes.select.container_success : null,
            ]),
            $containerActive: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.containerActive,
              classes.select[`container_${Size}`],
              !isDisabled && !isSuccess && !isDanger ? classes.select.containerActive_enabled : null,
            ]),
            $wrapper: (classes, { Size }) => ([
              classes.select.wrapper,
              classes.select[`wrapper_${Size}`],
            ]),
            $search: (classes, { Size }) => ([
              classes.select.search,
              classes.select[`search_${Size}`],
            ]),
            $placeholder: (classes, { Size }) => ([
              classes.select.placeholder,
              classes.select[`placeholder_${Size}`],
            ]),
            $caret: (classes, { Size }) => ([
              classes.select.caret,
              classes.select[`caret_${Size}`],
            ]),
            $clear: (classes, { Size }) => ([
              classes.select.clear,
              classes.select[`clear_${Size}`],
            ]),
            $spinner: (classes, { Size }) => ([
              classes.select.spinner,
              classes.select[`spinner_${Size}`],
            ]),
            $infinite: (classes, { Size }) => ([
              classes.select.infinite,
              classes.select[`infinite_${Size}`],
            ]),
            $dropdown: (classes, { Size }) => ([
              classes.select.dropdown,
              classes.select[`dropdown_${Size}`],
            ]),
            $dropdownTop: (classes, { Size }) => ([
              classes.select.dropdownTop,
              classes.select[`dropdownTop_${Size}`],
            ]),
            $groupLabel: (classes, { Size }) => ([
              classes.select.groupLabel,
              classes.select[`groupLabel_${Size}`],
            ]),
            $option: (classes, { Size }) => ([
              classes.select.option,
              classes.select[`option_${Size}`],
            ]),
            $spacer: (classes, { Size }) => ([
              classes.select.spacer,
              classes.select[`spacer_${Size}`],
            ]),
            $noOptions: (classes, { Size }) => ([
              classes.select.noOptions,
              classes.select[`noOptions_${Size}`],
            ]),
            $noResults: (classes, { Size }) => ([
              classes.select.noResults,
              classes.select[`noResults_${Size}`],
            ]),
            
            $multipleLabel: (classes, { Size, canClear, caret }) => ([
              classes.select.multipleLabel,
              classes.select[`multipleLabel_${Size}`],
              !canClear ? classes.select[`multipleLabel_noClear`] : null,
              !caret ? classes.select[`multipleLabel_noCaret`] : null,
            ]),
          },
          $input: (classes, { isDisabled, Size, isDanger, isSuccess }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$s = "/* Some styles are contained in Vueform.vue & SelectElement.vue */\n\n.vf-multiselect-multiple-label {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  background: transparent;\n  padding-left: var(--vf-px-input);\n  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input-sm);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {\n  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n\n.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-right: var(--vf-px-input-lg);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label {\n  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);\n  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);\n  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,\n.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);\n  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label {\n  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);\n  padding-right: var(--vf-px-input);\n  left: auto;\n  right: 0;\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {\n  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {\n  padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {\n  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n}";
styleInject(css_248z$s);

script$U.__file = "themes/vueform/templates/elements/MultiselectElement.vue";

var script$T = {
    name: 'ObjectElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

const _hoisted_1$j = ["aria-labelledby"];

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), {
    multiple: true,
    ref: "container"
  }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        role: "group",
        "aria-labelledby": _ctx.labelId
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.children, (element, name) => {
            return (openBlock(), createBlock(resolveDynamicComponent(_ctx.component(element)), mergeProps({ ref_for: true }, element, {
              embed: _ctx.embed,
              name: name,
              key: name,
              onRemove: _cache[0] || (_cache[0] = (e) => _ctx.$emit('remove', e))
            }), null, 16 /* FULL_PROPS */, ["embed", "name"]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 10 /* CLASS, PROPS */, _hoisted_1$j)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$T.render = render$o;
script$T.__file = "themes/blank/templates/elements/ObjectElement.vue";

var script$S = {
    name: 'ObjectElement',
    render: script$T.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-row',
          wrapper_sm: 'vf-row-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-row-lg',
          wrapper_embed: 'vf-row-embed',
          $wrapper: (classes, { Size, embed }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            embed ? classes.wrapper_embed : null,
          ]),
        }
      }
    }
  };

var css_248z$r = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$r);

script$S.__file = "themes/vueform/templates/elements/ObjectElement.vue";

var script$R = {
    name: 'RadioElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$i = ["value", "name", "id", "disabled"];
const _hoisted_2$c = ["innerHTML"];

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("label", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", mergeProps({
          type: "radio",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event))
        }, _ctx.aria, {
          value: _ctx.radioValue,
          class: _ctx.classes.input,
          name: _ctx.inputName,
          id: _ctx.fieldId,
          disabled: _ctx.isDisabled,
          ref: "input"
        }), null, 16 /* FULL_PROPS */, _hoisted_1$i), [
          [vModelRadio, _ctx.value]
        ]),
        createCommentVNode(" If label is HTML "),
        (_ctx.Text)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10 /* CLASS, PROPS */, _hoisted_2$c))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" If label is slot "),
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.text)
              }, [
                renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ], 2 /* CLASS */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$R.render = render$n;
script$R.__file = "themes/blank/templates/elements/RadioElement.vue";

var script$Q = {
    name: 'RadioElement',
    render: script$R.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radio-wrapper',
          wrapper_sm: 'vf-radio-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-wrapper-lg',
          wrapper_left: 'vf-radio-wrapper-left',
          wrapper_right: 'vf-radio-wrapper-right',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_danger: 'vf-radio-danger',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          input_left: 'vf-radio-left',
          input_right: 'vf-radio-right',
          text: 'vf-radio-text',
          text_left: 'vf-radio-text-left',
          text_right: 'vf-radio-text-right',
          $wrapper: (classes, { Size, align }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            align === 'left' ? classes.wrapper_left : null,
            align === 'right' ? classes.wrapper_right : null,
          ]),
          $input: (classes, { isDisabled, Size, isDanger, align }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            !isDisabled && isDanger ? classes.input_danger : null,
            align === 'left' ? classes.input_left : null,
            align === 'right' ? classes.input_right : null,
          ]),
          $text: (classes, { align }) => ([
            classes.text,
            align === 'left' ? classes.text_left : null,
            align === 'right' ? classes.text_right : null,
          ]),
        }
      }
    }
  };

var css_248z$q = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$q);

script$Q.__file = "themes/vueform/templates/elements/RadioElement.vue";

var script$P = {
    name: 'RadiogroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

const _hoisted_1$h = ["aria-labelledby"];

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RadiogroupRadio = resolveComponent("RadiogroupRadio");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper),
        "aria-labelledby": _ctx.labelId,
        role: "radiogroup"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resolvedOptions, (item, index, key) => {
          return (openBlock(), createBlock(_component_RadiogroupRadio, {
            items: _ctx.resolvedOptions,
            index: index,
            item: item,
            value: item.value,
            key: key,
            attrs: _ctx.aria
          }, {
            default: withCtx((scope) => [
              renderSlot(_ctx.$slots, "radio", mergeProps({ ref_for: true }, scope, { el$: _ctx.el$ }), () => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.radio), mergeProps({ ref_for: true }, scope, { el$: _ctx.el$ }), null, 16 /* FULL_PROPS */, ["el$"]))
              ])
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["items", "index", "item", "value", "attrs"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 10 /* CLASS, PROPS */, _hoisted_1$h)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$P.render = render$m;
script$P.__file = "themes/blank/templates/elements/RadiogroupElement.vue";

var script$O = {
    name: 'RadiogroupElement',
    render: script$P.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radiogroup-wrapper',
          wrapper_sm: 'vf-radiogroup-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$p = ".vf-radiogroup-wrapper {\n  cursor: pointer;\n}\n\n.vf-radiogroup-wrapper .vf-radio-container {\n  padding-top: 0;\n}";
styleInject(css_248z$p);

script$O.__file = "themes/vueform/templates/elements/RadiogroupElement.vue";

var script$N = {
    name: 'RadiogroupElement',
    render: script$P.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radiogroup-tabs-wrapper',
          wrapper_sm: 'vf-radiogroup-tabs-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-tabs-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$o = ".vf-radiogroup-tabs-wrapper {\n  display: grid;\n  grid-auto-flow: column;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$o);

script$N.__file = "themes/vueform/templates/elements/RadiogroupElement_tabs.vue";

var script$M = {
    name: 'RadiogroupElement',
    render: script$P.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radiogroup-blocks-wrapper',
          wrapper_sm: 'vf-radiogroup-blocks-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-blocks-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  };

var css_248z$n = ".vf-radiogroup-blocks-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  box-shadow: var(--vf-shadow-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-lg {\n  border-radius: var(--vf-radius-large-lg);\n}";
styleInject(css_248z$n);

script$M.__file = "themes/vueform/templates/elements/RadiogroupElement_blocks.vue";

var script$L = {
    name: 'SelectElement',
    components: {
      Multiselect: script$W,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          inputWrapper: '',
          inputPlaceholder: '',
          inputCaret: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            singleLabel: '',
            singleLabelText: '',
            search: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

const _hoisted_1$g = ["name", "id", "disabled"];
const _hoisted_2$b = ["value"];

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      (_ctx.hasFloating && !_ctx.empty)
        ? (openBlock(), createBlock(_component_ElementLabelFloating, {
            key: 0,
            visible: !_ctx.empty
          }, null, 8 /* PROPS */, ["visible"]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Native select "),
      (_ctx.isNative)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.classes.inputWrapper)
          }, [
            withDirectives(createElementVNode("select", mergeProps({
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event)),
              class: _ctx.classes.input,
              name: _ctx.name,
              id: _ctx.fieldId,
              disabled: _ctx.isDisabled
            }, {
            ..._ctx.attrs,
            ..._ctx.aria,
          }, { ref: "input" }), [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resolvedOptions, (option, index) => {
                return (openBlock(), createElementBlock("option", {
                  value: option.value,
                  key: index
                }, toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_2$b))
              }), 128 /* KEYED_FRAGMENT */))
            ], 16 /* FULL_PROPS */, _hoisted_1$g), [
              [vModelSelect, _ctx.value]
            ]),
            (_ctx.placeholder && _ctx.empty && !_ctx.isDisabled && _ctx.type == 'select')
              ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.classes.inputPlaceholder)
                }, toDisplayString( _ctx.placeholder), 3 /* TEXT, CLASS */))
              : createCommentVNode("v-if", true),
            createElementVNode("span", {
              class: normalizeClass(_ctx.classes.inputCaret)
            }, null, 2 /* CLASS */)
          ], 2 /* CLASS */))
        : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createCommentVNode(" @vueform/multiselect copmonent "),
            createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.value) = $event)),
              classes: _ctx.classes.select,
              id: _ctx.fieldId,
              name: _ctx.name,
              options: _ctx.resolvedOptions,
              disabled: _ctx.isDisabled,
              placeholder: _ctx.Placeholder,
              attrs: _ctx.attrs,
              aria: _ctx.aria,
              locale: _ctx.form$.locale$,
              onSelect: _ctx.handleSelect,
              onDeselect: _ctx.handleDeselect,
              onSearchChange: _ctx.handleSearchChange,
              onTag: _ctx.handleTag,
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              onClear: _ctx.handleClear,
              onPaste: _ctx.handlePaste,
              ref: "input"
            }), createSlots({ _: 2 /* DYNAMIC */ }, [
              renderList({
          option: 'option', noresults: 'no-results', nooptions: 'no-options',
          afterlist: 'after-list', beforelist: 'before-list', placeholder: 'placeholder',
          grouplabel: 'group-label', caret: 'caret', clear: 'clear', spinner: 'spinner',
          default: 'default',
        }, (slotName, slotKey) => {
                return {
                  name: slotKey,
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16 /* FULL_PROPS */, ["el$"]))
                    ])
                  ])
                }
              }),
              (_ctx.fieldOptions.mode == 'single')
                ? {
                    name: "singlelabel",
                    fn: withCtx(({ value }) => [
                      renderSlot(_ctx.$slots, "single-label", {
                        value: value,
                        el$: _ctx.el$
                      }, () => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['single-label']), {
                          value: value,
                          el$: _ctx.el$
                        }, null, 8 /* PROPS */, ["value", "el$"]))
                      ])
                    ]),
                    key: "0"
                  }
                : undefined
            ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$L.render = render$l;
script$L.__file = "themes/blank/templates/elements/SelectElement.vue";

var script$K = {
    name: 'SelectElement',
    render: script$L.render,
    components: {
      Multiselect: script$W,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-input vf-native-select',
          input_enabled: '',
          input_disabled: '',
          input_success: 'vf-input-success',
          input_danger: 'vf-input-danger',
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          inputWrapper: 'vf-native-select-wrapper',
          inputWrapper_sm: 'vf-native-select-wrapper-sm',
          inputWrapper_md: '',
          inputWrapper_lg: 'vf-native-select-wrapper-lg',
          inputPlaceholder: 'vf-native-select-placeholder',
          inputPlaceholder_sm: 'vf-native-select-placeholder-sm',
          inputPlaceholder_md: '',
          inputPlaceholder_lg: 'vf-native-select-placeholder-lg',
          inputCaret: 'vf-native-select-caret',
          inputCaret_sm: 'vf-native-select-caret-sm',
          inputCaret_md: '',
          inputCaret_lg: 'vf-native-select-caret-lg',
          select: {
            singleLabel: 'vf-multiselect-single-label',
            singleLabel_sm: 'vf-multiselect-single-label-sm',
            singleLabel_md: '',
            singleLabel_lg: 'vf-multiselect-single-label-lg',
            singleLabel_noClear: 'vf-multiselect-single-label-no-clear',
            singleLabel_noCaret: 'vf-multiselect-single-label-no-caret',
            singleLabelText: 'vf-multiselect-single-label-text',
            singleLabelText_truncate: 'vf-multiselect-single-label-text-truncate',
            
            container: 'vf-multiselect',
            container_enabled: '',
            container_disabled: 'vf-multiselect-disabled',
            container_success: 'vf-multiselect-success',
            container_danger: 'vf-multiselect-danger',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: '',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            containerActive_enabled: '',
            wrapper: 'vf-multiselect-wrapper',
            wrapper_sm: 'vf-multiselect-wrapper-sm',
            wrapper_md: '',
            wrapper_lg: 'vf-multiselect-wrapper-lg',
            search: 'vf-multiselect-search',
            search_sm: 'vf-multiselect-search-sm',
            search_md: '',
            search_lg: 'vf-multiselect-search-lg',
            placeholder: 'vf-multiselect-placeholder',
            placeholder_sm: 'vf-multiselect-placeholder-sm',
            placeholder_md: '',
            placeholder_lg: 'vf-multiselect-placeholder-lg',
            caret: 'vf-multiselect-caret',
            caret_sm: 'vf-multiselect-caret-sm',
            caret_md: '',
            caret_lg: 'vf-multiselect-caret-lg',
            caretOpen: 'vf-multiselect-caret-open',
            clear: 'vf-multiselect-clear',
            clear_sm: 'vf-multiselect-clear-sm',
            clear_md: '',
            clear_lg: 'vf-multiselect-clear-lg',
            clearIcon: 'vf-multiselect-clear-icon',
            spinner: 'vf-multiselect-spinner',
            spinner_sm: 'vf-multiselect-spinner-sm',
            spinner_md: '',
            spinner_lg: 'vf-multiselect-spinner-lg',
            infinite: 'vf-multiselect-infinite',
            infinite_sm: 'vf-multiselect-infinite-sm',
            infinite_md: '',
            infinite_lg: 'vf-multiselect-infinite-lg',
            infiniteSpinner: 'vf-multiselect-infinite-spinner',
            dropdown: 'vf-multiselect-dropdown',
            dropdown_sm: 'vf-multiselect-dropdown-sm',
            dropdown_md: '',
            dropdown_lg: 'vf-multiselect-dropdown-lg',
            dropdownTop: 'vf-multiselect-dropdown-top',
            dropdownTop_sm: 'vf-multiselect-dropdown-top-sm',
            dropdownTop_md: '',
            dropdownTop_lg: 'vf-multiselect-dropdown-top-lg',
            dropdownHidden: 'vf-multiselect-dropdown-hidden',
            options: 'vf-multiselect-options',
            optionsTop: 'vf-multiselect-options-top',
            group: 'vf-multiselect-group',
            groupLabel: 'vf-multiselect-group-label',
            groupLabel_sm: 'vf-multiselect-group-label-sm',
            groupLabel_md: '',
            groupLabel_lg: 'vf-multiselect-group-label-lg',
            groupLabelPointable: 'vf-multiselect-group-label-pointable',
            groupLabelPointed: 'vf-multiselect-group-label-pointed',
            groupLabelSelected: 'vf-multiselect-group-label-selected',
            groupLabelDisabled: 'vf-multiselect-group-label-disabled',
            groupLabelSelectedPointed: 'vf-multiselect-group-label-selected vf-multiselect-group-label-pointed',
            groupLabelSelectedDisabled: 'vf-multiselect-group-label-selected vf-multiselect-group-label-disabled',
            groupOptions: 'vf-multiselect-group-options',
            option: 'vf-multiselect-option',
            option_sm: 'vf-multiselect-option-sm',
            option_md: '',
            option_lg: 'vf-multiselect-option-lg',
            optionPointed: 'vf-multiselect-option-pointed',
            optionSelected: 'vf-multiselect-option-selected',
            optionDisabled: 'vf-multiselect-option-disabled',
            optionSelectedPointed: 'vf-multiselect-option-selected vf-multiselect-option-pointed',
            optionSelectedDisabled: 'vf-multiselect-option-selected vf-multiselect-option-disabled',
            noOptions: 'vf-multiselect-no-options',
            noOptions_sm: 'vf-multiselect-no-options-sm',
            noOptions_md: '',
            noOptions_lg: 'vf-multiselect-no-options-lg',
            noResults: 'vf-multiselect-no-results',
            noResults_sm: 'vf-multiselect-no-results-sm',
            noResults_md: '',
            noResults_lg: 'vf-multiselect-no-results-lg',
            fakeInput: 'vf-multiselect-fake-input',
            assist: 'vf-assistive-text',
            spacer: 'vf-multiselect-spacer',
            spacer_sm: 'vf-multiselect-spacer-sm',
            spacer_md: '',
            spacer_lg: 'vf-multiselect-spacer-lg',
            $container: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
              isDisabled ? classes.select.container_disabled : null,
              !isDisabled && !isSuccess && !isDanger ? classes.select.container_enabled : null,
              !isDisabled && isDanger ? classes.select.container_danger : null,
              !isDisabled && isSuccess ? classes.select.container_success : null,
            ]),
            $containerActive: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.containerActive,
              classes.select[`container_${Size}`],
              !isDisabled && !isSuccess && !isDanger ? classes.select.containerActive_enabled : null,
            ]),
            $wrapper: (classes, { Size }) => ([
              classes.select.wrapper,
              classes.select[`wrapper_${Size}`],
            ]),
            $search: (classes, { Size }) => ([
              classes.select.search,
              classes.select[`search_${Size}`],
            ]),
            $placeholder: (classes, { Size }) => ([
              classes.select.placeholder,
              classes.select[`placeholder_${Size}`],
            ]),
            $caret: (classes, { Size }) => ([
              classes.select.caret,
              classes.select[`caret_${Size}`],
            ]),
            $clear: (classes, { Size }) => ([
              classes.select.clear,
              classes.select[`clear_${Size}`],
            ]),
            $spinner: (classes, { Size }) => ([
              classes.select.spinner,
              classes.select[`spinner_${Size}`],
            ]),
            $infinite: (classes, { Size }) => ([
              classes.select.infinite,
              classes.select[`infinite_${Size}`],
            ]),
            $dropdown: (classes, { Size }) => ([
              classes.select.dropdown,
              classes.select[`dropdown_${Size}`],
            ]),
            $dropdownTop: (classes, { Size }) => ([
              classes.select.dropdownTop,
              classes.select[`dropdownTop_${Size}`],
            ]),
            $groupLabel: (classes, { Size }) => ([
              classes.select.groupLabel,
              classes.select[`groupLabel_${Size}`],
            ]),
            $option: (classes, { Size }) => ([
              classes.select.option,
              classes.select[`option_${Size}`],
            ]),
            $spacer: (classes, { Size }) => ([
              classes.select.spacer,
              classes.select[`spacer_${Size}`],
            ]),
            $noOptions: (classes, { Size }) => ([
              classes.select.noOptions,
              classes.select[`noOptions_${Size}`],
            ]),
            $noResults: (classes, { Size }) => ([
              classes.select.noResults,
              classes.select[`noResults_${Size}`],
            ]),
            
            $singleLabel: (classes, { Size, canClear, caret }) => ([
              classes.select.singleLabel,
              classes.select[`singleLabel_${Size}`],
              !canClear ? classes.select[`singleLabel_noClear`] : null,
              !caret ? classes.select[`singleLabel_noCaret`] : null,
            ]),
            $singleLabelText: (classes, { truncate }) => ([
              classes.select.singleLabelText,
              truncate ? classes.select[`singleLabelText_truncate`] : null,
            ]),
          },
          $input: (classes, { isDisabled, Size, isDanger, isSuccess, caret }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
          $inputPlaceholder: (classes, { Size }) => ([
            classes.inputPlaceholder,
            classes[`inputPlaceholder_${Size}`],
          ]),
          $inputCaret: (classes, { Size }) => ([
            classes.inputCaret,
            classes[`inputCaret_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$m = ".vf-native-select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.vf-native-select::-webkit-search-decoration, .vf-native-select::-webkit-search-cancel-button, .vf-native-select::-webkit-search-results-button, .vf-native-select::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n.vf-input.vf-native-select {\n  padding-right: calc(var(--vf-px-input) * 2);\n}\n\n.vf-input-sm.vf-native-select {\n  padding-right: calc(var(--vf-px-input-sm) * 2);\n}\n\n.vf-input-lg.vf-native-select {\n  padding-right: calc(var(--vf-px-input-lg) * 2);\n}\n\n.vf-native-select-wrapper {\n  position: relative;\n}\n\n.vf-native-select-wrapper.vf-native-select-wrapper-sm:before {\n  width: var(--vf-min-height-input-sm);\n  height: var(--vf-min-height-input-sm);\n}\n\n.vf-native-select-wrapper.vf-native-select-wrapper-lg:before {\n  width: var(--vf-min-height-input-lg);\n  height: var(--vf-min-height-input-lg);\n}\n\n.vf-native-select-placeholder {\n  position: absolute;\n  top: 0;\n  left: var(--vf-px-input);\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  margin-left: 1px;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  color: var(--vf-color-placeholder);\n  cursor: default;\n  pointer-events: none;\n}\n\n.vf-native-select-placeholder.vf-native-select-placeholder-sm {\n  left: var(--vf-px-input-sm);\n}\n\n.vf-native-select-placeholder.vf-native-select-placeholder-lg {\n  left: var(--vf-px-input-lg);\n}\n\n.vf-native-select-caret {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  background-color: var(--vf-bg-icon);\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0.625rem;\n  height: 1rem;\n  padding: 1px 0;\n  box-sizing: content-box;\n  display: inline-block;\n  pointer-events: none;\n  transform: translateY(-50%);\n  transition: transform 150ms ease-in-out;\n  margin-right: var(--vf-px-input);\n}\n\n.vf-native-select-caret.vf-native-select-caret-sm {\n  margin-right: var(--vf-px-input-sm);\n}\n\n.vf-native-select-caret.vf-native-select-caret-lg {\n  margin-right: var(--vf-px-input-lg);\n}\n\n/* @vueform/multiselect styles */\n\n.vf-multiselect {\n  position: relative;\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  cursor: pointer;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background-color: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  border-color: var(--vf-border-color-input);\n  box-shadow: var(--vf-shadow-input);\n  min-height: var(--vf-min-height-input);\n  border-radius: var(--vf-radius-input);\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-style: solid;\n}\n\n.vf-multiselect.vf-multiselect-open {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-multiselect.vf-multiselect-open-top {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-multiselect.vf-multiselect-disabled {\n  cursor: default;\n  background-color: var(--vf-bg-disabled);\n  color: var(--vf-color-disabled);\n  pointer-events: none;\n}\n\n.vf-multiselect.vf-multiselect-success {\n  background-color: var(--vf-bg-input-success);\n  color: var(--vf-color-input-success);\n  border-color: var(--vf-border-color-input-success);\n}\n\n.vf-multiselect.vf-multiselect-danger {\n  background-color: var(--vf-bg-input-danger);\n  color: var(--vf-color-input-danger);\n  border-color: var(--vf-border-color-input-danger);\n}\n\n.vf-multiselect:hover {\n  box-shadow: var(--vf-shadow-input-hover);\n}\n\n.vf-multiselect:hover:not(.vf-multiselect-success):not(.vf-multiselect-danger) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n  border-color: var(--vf-border-color-input-hover);\n}\n\n.vf-multiselect.vf-multiselect-active {\n  box-shadow: var(--vf-shadow-input-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-multiselect.vf-multiselect-active:not(.vf-multiselect-success):not(.vf-multiselect-danger) {\n  border-color: var(--vf-border-color-input-focus);\n  background-color: var(--vf-bg-input-focus);\n  color: var(--vf-color-input-focus);\n}\n\n.vf-multiselect.vf-multiselect-sm {\n  min-height: var(--vf-min-height-input-sm);\n  border-radius: var(--vf-radius-input-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-multiselect.vf-multiselect-lg {\n  min-height: var(--vf-min-height-input-lg);\n  border-radius: var(--vf-radius-input-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-multiselect-wrapper {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  cursor: pointer;\n  outline: none;\n  min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));\n}\n\n.vf-multiselect-wrapper.vf-multiselect-wrapper-sm {\n  min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));\n}\n\n.vf-multiselect-wrapper.vf-multiselect-wrapper-lg {\n  min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));\n}\n\n.vf-multiselect-single-label,\n.vf-multiselect-placeholder {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  background: transparent;\n  box-sizing: border-box;\n  max-width: 100%;\n  padding-left: var(--vf-px-input);\n  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {\n  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-right: var(--vf-px-input);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-sm {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-right: var(--vf-px-input-sm);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {\n  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n\n.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-right: var(--vf-px-input-lg);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-single-label,\n.vf-floating-wrapper ~ div .vf-multiselect-single-label {\n  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);\n  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-single-label-sm,\n.vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);\n  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-single-label-lg,\n.vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);\n  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);\n}\n\n.vf-multiselect-placeholder {\n  color: var(--vf-color-placeholder);\n}\n\n.vf-multiselect-placeholder.vf-multiselect-placeholder-sm {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n}\n\n.vf-multiselect-placeholder.vf-multiselect-placeholder-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n}\n\n.vf-multiselect-single-label-text {\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n  max-width: 100%;\n}\n\n.vf-multiselect-single-label-text-truncate {\n  text-overflow: ellipsis;\n}\n\n.vf-multiselect-search {\n  width: 100%;\n  height: 100%; /* for FF */\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  outline: none;\n  box-sizing: border-box;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-family: inherit;\n  background: transparent;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  border-radius: var(--vf-radius-input);\n  padding-left: var(--vf-px-input);\n  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);\n  color: var(--vf-color-input);\n}\n\n.vf-multiselect-search::-webkit-search-decoration, .vf-multiselect-search::-webkit-search-cancel-button, .vf-multiselect-search::-webkit-search-results-button, .vf-multiselect-search::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n.vf-multiselect-search.vf-multiselect-search-sm {\n  border-radius: var(--vf-radius-input-sm);\n  padding-left: var(--vf-px-input-sm);\n  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-multiselect-search.vf-multiselect-search-lg {\n  border-radius: var(--vf-radius-input-lg);\n  padding-left: var(--vf-px-input-lg);\n  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-search-lg,\n.vf-floating-wrapper ~ div .vf-multiselect-search-lg,\n.vf-floating-wrapper ~ span .vf-multiselect-search-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);\n  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);\n}\n\n.vf-multiselect-spinner {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center;\n  -webkit-mask-position: center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-primary);\n  width: 1rem;\n  height: 1rem;\n  margin: 0 var(--vf-px-input) 0 0;\n  animation: multiselect-spin 1s linear infinite;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.vf-multiselect-spinner.vf-multiselect-spinner-sm {\n  margin: 0 var(--vf-px-input-sm) 0 0;\n}\n\n.vf-multiselect-spinner.vf-multiselect-spinner-lg {\n  margin: 0 var(--vf-px-input-lg) 0 0;\n}\n\n.vf-multiselect-inifite {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  height: var(--vf-min-height-input);\n}\n\n.vf-multiselect-inifite.vf-multiselect-inifite-sm {\n  height: var(--vf-min-height-input-sm);\n}\n\n.vf-multiselect-inifite.vf-multiselect-inifite-lg {\n  height: var(--vf-min-height-input-lg);\n}\n\n.vf-multiselect-inifite-spinner {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center;\n  -webkit-mask-position: center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-primary);\n  width: 1rem;\n  height: 1rem;\n  animation: multiselect-spin 1s linear infinite;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.vf-multiselect-clear {\n  margin: 0 var(--vf-px-input) 0 0px;\n  position: relative;\n  opacity: 1;\n  transition: 0.3s;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n}\n\n.vf-multiselect-clear:hover .vf-multiselect-clear-icon {\n  opacity: 1;\n}\n\n.vf-multiselect-clear.vf-multiselect-clear-sm {\n  margin: 0 var(--vf-px-input-sm) 0 0px;\n}\n\n.vf-multiselect-clear.vf-multiselect-clear-lg {\n  margin: 0 var(--vf-px-input-lg) 0 0px;\n}\n\n.vf-multiselect-clear-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center;\n  -webkit-mask-position: center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-icon);\n  width: 0.625rem;\n  height: 1.125rem;\n  display: inline-block;\n  transition: 0.3s;\n  opacity: 0.5;\n}\n\n.vf-multiselect-caret {\n  transform: rotate(0deg);\n  transition: 0.3s transform;\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center;\n  -webkit-mask-position: center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-icon);\n  width: 0.625rem;\n  height: 1.125rem;\n  margin: 0 var(--vf-px-input) 0 0;\n  position: relative;\n  flex-shrink: 0;\n  flex-grow: 0;\n  pointer-events: none;\n}\n\n.vf-multiselect-caret.vf-multiselect-caret-open {\n  transform: rotate(180deg);\n  pointer-events: auto;\n}\n\n.vf-multiselect-caret.vf-multiselect-caret-sm {\n  margin: 0 var(--vf-px-input-sm) 0 0;\n}\n\n.vf-multiselect-caret.vf-multiselect-caret-lg {\n  margin: 0 var(--vf-px-input-lg) 0 0;\n}\n\n.vf-multiselect-dropdown {\n  position: absolute;\n  left: calc(var(--vf-border-width-input-l) * -1);\n  right: calc(var(--vf-border-width-input-r) * -1);\n  bottom: 0;\n  transform: translateY(100%);\n  border-width: var(--vf-border-width-dropdown);\n  border-style: solid;\n  border-color: var(--vf-border-color-input);\n  margin-top: calc(var(--vf-border-width-input-t) * -1);\n  max-height: 15rem;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  z-index: 999;\n  background: var(--vf-bg-input);\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--vf-radius-input);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  outline: none;\n  box-shadow: var(--vf-shadow-dropdown);\n}\n\n.vf-multiselect-dropdown.vf-multiselect-dropdown-top {\n  transform: translateY(-100%);\n  top: 0;\n  margin-top: 0;\n  bottom: auto;\n  border-radius: var(--vf-radius-input);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-multiselect-dropdown.vf-multiselect-dropdown-hidden {\n  display: none;\n}\n\nv .vf-multiselect-dropdown.vf-multiselect-dropdown-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nv .vf-multiselect-dropdown.vf-multiselect-dropdown-sm.vf-multiselect-dropdown-top-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-multiselect-dropdown.vf-multiselect-dropdown-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-multiselect-dropdown.vf-multiselect-dropdown-lg.vf-multiselect-dropdown-top-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-multiselect-options {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  color: var(--vf-color-input);\n}\n\n.vf-multiselect-group {\n  padding: 0;\n  margin: 0;\n}\n\n.vf-multiselect-group-label {\n  font-weight: 600;\n  color: #374151;\n  cursor: default;\n  display: flex;\n  box-sizing: border-box;\n  text-decoration: none;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);\n  color: var(--vf-color-input);\n  background: var(--vf-bg-selected);\n  filter: brightness(0.9);\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-pointable {\n  cursor: pointer;\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-pointed {\n  filter: brightness(0.95);\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-selected {\n  background: var(--vf-primary-darker);\n  color: var(--vf-color-on-primary);\n  filter: brightness(1);\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-disabled {\n  background: var(--vf-bg-disabled);\n  color: var(--vf-color-disabled);\n  cursor: not-allowed;\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {\n  opacity: 0.9;\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {\n  opacity: 0.5;\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);\n}\n\n.vf-multiselect-group-label.vf-multiselect-group-label-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);\n}\n\n.vf-multiselect-group-options {\n  padding: 0;\n  margin: 0;\n}\n\n.vf-multiselect-option {\n  padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  cursor: pointer;\n  display: flex;\n  box-sizing: border-box;\n  text-decoration: none;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.vf-multiselect-option.vf-multiselect-option-pointed {\n  background: var(--vf-bg-selected);\n  color: var(--vf-color-input);\n}\n\n.vf-multiselect-option.vf-multiselect-option-selected {\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n}\n\n.vf-multiselect-option.vf-multiselect-option-disabled {\n  background: var(--vf-bg-disabled);\n  color: var(--vf-color-disabled);\n  cursor: not-allowed;\n}\n\n.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-pointed {\n  opacity: 0.9;\n}\n\n.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-disabled {\n  opacity: 0.5;\n}\n\n.vf-multiselect-option.vf-multiselect-option-sm {\n  padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n}\n\n.vf-multiselect-option.vf-multiselect-option-lg {\n  padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n}\n\n.vf-multiselect-no-options,\n.vf-multiselect-no-results {\n  padding: var(--vf-py-input) var(--vf-px-input);\n  color: var(--vf-color-muted);\n}\n\n.vf-multiselect-no-options.vf-multiselect-no-options-sm {\n  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);\n}\n\n.vf-multiselect-no-options.vf-multiselect-no-options-lg {\n  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);\n}\n\n.vf-multiselect-no-results.vf-multiselect-no-results-sm {\n  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);\n}\n\n.vf-multiselect-no-results.vf-multiselect-no-results-lg {\n  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);\n}\n\n.vf-multiselect-fake-input {\n  background: transparent;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  width: 100%;\n  height: 1px;\n  border: 0;\n  padding: 0;\n  font-size: 0;\n  outline: none;\n}\n\n.vf-multiselect-fake-input:active, .vf-multiselect-fake-input:focus {\n  outline: none;\n}\n\n.vf-multiselect-spacer {\n  display: none;\n}\n\n[dir=rtl] .vf-input.vf-native-select {\n  padding-right: var(--vf-px-input);\n  padding-left: calc(var(--vf-px-input) * 2);\n}\n\n[dir=rtl] .vf-input-sm.vf-native-select {\n  padding-right: var(--vf-px-input);\n  padding-left: calc(var(--vf-px-input-sm) * 2);\n}\n\n[dir=rtl] .vf-input-lg.vf-native-select {\n  padding-right: var(--vf-px-input);\n  padding-left: calc(var(--vf-px-input-lg) * 2);\n}\n\n[dir=rtl] .vf-native-select-placeholder {\n  left: auto;\n  right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-native-select-caret {\n  right: auto;\n  left: 0;\n  margin-right: 0;\n  margin-left: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-native-select-caret.vf-native-select-caret-sm {\n  margin-right: 0;\n  margin-left: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-native-select-caret.vf-native-select-caret-lg {\n  margin-right: 0;\n  margin-left: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-single-label {\n  padding-left: calc(var(--vf-px-input) * 4);\n  padding-right: var(--vf-px-input);\n  left: auto;\n  right: 0;\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {\n  padding-left: calc(var(--vf-px-input) * 2);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm {\n  padding-left: calc(var(--vf-px-input-sm) * 4);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {\n  padding-left: calc(var(--vf-px-input-sm) * 2);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg {\n  padding-left: calc(var(--vf-px-input-lg) * 4);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {\n  padding-left: calc(var(--vf-px-input-lg) * 2);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-placeholder {\n  padding-left: var(--vf-min-height-input);\n  padding-right: var(--vf-px-input);\n  left: auto;\n  right: 0;\n}\n\n[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-sm {\n  padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-lg {\n  padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-search {\n  padding-left: 0;\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-search.vf-multiselect-search-sm {\n  padding-left: 0;\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-search.vf-multiselect-search-lg {\n  padding-left: 0;\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-spinner {\n  margin: 0 0 0 var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-caret {\n  margin: 0 0 0 var(--vf-px-input);\n}\n\n[dir=rtl] .vf-multiselect-clear {\n  padding: 0 0 0 var(--vf-px-input);\n}\n\n@keyframes multiselect-spin {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}";
styleInject(css_248z$m);

script$K.__file = "themes/vueform/templates/elements/SelectElement.vue";

function isNullish (val) {
  return [null, undefined, false].indexOf(val) !== -1
}

function useValue$2 (props, context, dependencies)
{
  const { value: baseValue, modelValue, min } = toRefs(props);

  // ================ DATA ================
  
  /* istanbul ignore next */
  let value = modelValue && modelValue.value !== undefined ? modelValue : baseValue;

  const initialValue = ref(value.value);

  // ================ HOOKS ===============

  if (isNullish(value.value)) {
    value = ref(min.value);
  }

  if (Array.isArray(value.value) && value.value.length == 0) {
    throw new Error('Slider v-model must not be an empty array')
  }

  return {
    value,
    initialValue,
  }
}

function useClasses$1 (props, context, dependencies)
{
  const { 
    classes: classes_, showTooltip, tooltipPosition, orientation,
  } = toRefs(props);

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    target: 'slider-target',
    focused: 'slider-focused',
    tooltipFocus: 'slider-tooltip-focus',
    tooltipDrag: 'slider-tooltip-drag',
    ltr: 'slider-ltr',
    rtl: 'slider-rtl',
    horizontal: 'slider-horizontal',
    vertical: 'slider-vertical',
    textDirectionRtl: 'slider-txt-dir-rtl',
    textDirectionLtr: 'slider-txt-dir-ltr',
    base: 'slider-base',
    connects: 'slider-connects',
    connect: 'slider-connect',
    origin: 'slider-origin',
    handle: 'slider-handle',
    handleLower: 'slider-handle-lower',
    handleUpper: 'slider-handle-upper',
    touchArea: 'slider-touch-area',
    tooltip: 'slider-tooltip',
    tooltipTop: 'slider-tooltip-top',
    tooltipBottom: 'slider-tooltip-bottom',
    tooltipLeft: 'slider-tooltip-left',
    tooltipRight: 'slider-tooltip-right',
    tooltipHidden: 'slider-tooltip-hidden',
    active: 'slider-active',
    draggable: 'slider-draggable',
    tap: 'slider-state-tap',
    drag: 'slider-state-drag',

    // Unimplemented
    pips: 'slider-pips',
    pipsHorizontal: 'slider-pips-horizontal',
    pipsVertical: 'slider-pips-vertical',
    marker: 'slider-marker',
    markerHorizontal: 'slider-marker-horizontal',
    markerVertical: 'slider-marker-vertical',
    markerNormal: 'slider-marker-normal',
    markerLarge: 'slider-marker-large',
    markerSub: 'slider-marker-sub',
    value: 'slider-value',
    valueHorizontal: 'slider-value-horizontal',
    valueVertical: 'slider-value-vertical',
    valueNormal: 'slider-value-normal',
    valueLarge: 'slider-value-large',
    valueSub: 'slider-value-sub',
    
    ...classes_.value,
  }));

  const classList = computed(() => {
    const classList = { ...classes.value };

    Object.keys(classList).forEach((className) => {
      classList[className] = Array.isArray(classList[className]) ? classList[className].filter(c => c!==null).join(' ') : classList[className];
    });

    if (showTooltip.value !== 'always') {
      classList.target += ` ${showTooltip.value === 'drag' ? classList.tooltipDrag : classList.tooltipFocus}`;
    }

    if (orientation.value === 'horizontal') {
      classList.tooltip += tooltipPosition.value === 'bottom' ? ` ${classList.tooltipBottom}` : ` ${classList.tooltipTop}`;
    }

    if (orientation.value === 'vertical') {
      classList.tooltip += tooltipPosition.value === 'right' ? ` ${classList.tooltipRight}` : ` ${classList.tooltipLeft}`;
    }

    return classList
  });

  return {
    classList,
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var wNumb = {exports: {}};

(function (module, exports) {
	(function(factory) {
	  {
	    // Node/CommonJS
	    module.exports = factory();
	  }
	})(function() {

	  var FormatOptions = [
	    "decimals",
	    "thousand",
	    "mark",
	    "prefix",
	    "suffix",
	    "encoder",
	    "decoder",
	    "negativeBefore",
	    "negative",
	    "edit",
	    "undo"
	  ];

	  // General

	  // Reverse a string
	  function strReverse(a) {
	    return a
	      .split("")
	      .reverse()
	      .join("");
	  }

	  // Check if a string starts with a specified prefix.
	  function strStartsWith(input, match) {
	    return input.substring(0, match.length) === match;
	  }

	  // Check is a string ends in a specified suffix.
	  function strEndsWith(input, match) {
	    return input.slice(-1 * match.length) === match;
	  }

	  // Throw an error if formatting options are incompatible.
	  function throwEqualError(F, a, b) {
	    if ((F[a] || F[b]) && F[a] === F[b]) {
	      throw new Error(a);
	    }
	  }

	  // Check if a number is finite and not NaN
	  function isValidNumber(input) {
	    return typeof input === "number" && isFinite(input);
	  }

	  // Provide rounding-accurate toFixed method.
	  // Borrowed: http://stackoverflow.com/a/21323330/775265
	  function toFixed(value, exp) {
	    value = value.toString().split("e");
	    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
	    value = value.toString().split("e");
	    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
	  }

	  // Formatting

	  // Accept a number as input, output formatted string.
	  function formatTo(
	    decimals,
	    thousand,
	    mark,
	    prefix,
	    suffix,
	    encoder,
	    decoder,
	    negativeBefore,
	    negative,
	    edit,
	    undo,
	    input
	  ) {
	    var originalInput = input,
	      inputIsNegative,
	      inputPieces,
	      inputBase,
	      inputDecimals = "",
	      output = "";

	    // Apply user encoder to the input.
	    // Expected outcome: number.
	    if (encoder) {
	      input = encoder(input);
	    }

	    // Stop if no valid number was provided, the number is infinite or NaN.
	    if (!isValidNumber(input)) {
	      return false;
	    }

	    // Rounding away decimals might cause a value of -0
	    // when using very small ranges. Remove those cases.
	    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
	      input = 0;
	    }

	    // Formatting is done on absolute numbers,
	    // decorated by an optional negative symbol.
	    if (input < 0) {
	      inputIsNegative = true;
	      input = Math.abs(input);
	    }

	    // Reduce the number of decimals to the specified option.
	    if (decimals !== false) {
	      input = toFixed(input, decimals);
	    }

	    // Transform the number into a string, so it can be split.
	    input = input.toString();

	    // Break the number on the decimal separator.
	    if (input.indexOf(".") !== -1) {
	      inputPieces = input.split(".");

	      inputBase = inputPieces[0];

	      if (mark) {
	        inputDecimals = mark + inputPieces[1];
	      }
	    } else {
	      // If it isn't split, the entire number will do.
	      inputBase = input;
	    }

	    // Group numbers in sets of three.
	    if (thousand) {
	      inputBase = strReverse(inputBase).match(/.{1,3}/g);
	      inputBase = strReverse(inputBase.join(strReverse(thousand)));
	    }

	    // If the number is negative, prefix with negation symbol.
	    if (inputIsNegative && negativeBefore) {
	      output += negativeBefore;
	    }

	    // Prefix the number
	    if (prefix) {
	      output += prefix;
	    }

	    // Normal negative option comes after the prefix. Defaults to '-'.
	    if (inputIsNegative && negative) {
	      output += negative;
	    }

	    // Append the actual number.
	    output += inputBase;
	    output += inputDecimals;

	    // Apply the suffix.
	    if (suffix) {
	      output += suffix;
	    }

	    // Run the output through a user-specified post-formatter.
	    if (edit) {
	      output = edit(output, originalInput);
	    }

	    // All done.
	    return output;
	  }

	  // Accept a sting as input, output decoded number.
	  function formatFrom(
	    decimals,
	    thousand,
	    mark,
	    prefix,
	    suffix,
	    encoder,
	    decoder,
	    negativeBefore,
	    negative,
	    edit,
	    undo,
	    input
	  ) {
	    var inputIsNegative,
	      output = "";

	    // User defined pre-decoder. Result must be a non empty string.
	    if (undo) {
	      input = undo(input);
	    }

	    // Test the input. Can't be empty.
	    if (!input || typeof input !== "string") {
	      return false;
	    }

	    // If the string starts with the negativeBefore value: remove it.
	    // Remember is was there, the number is negative.
	    if (negativeBefore && strStartsWith(input, negativeBefore)) {
	      input = input.replace(negativeBefore, "");
	      inputIsNegative = true;
	    }

	    // Repeat the same procedure for the prefix.
	    if (prefix && strStartsWith(input, prefix)) {
	      input = input.replace(prefix, "");
	    }

	    // And again for negative.
	    if (negative && strStartsWith(input, negative)) {
	      input = input.replace(negative, "");
	      inputIsNegative = true;
	    }

	    // Remove the suffix.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
	    if (suffix && strEndsWith(input, suffix)) {
	      input = input.slice(0, -1 * suffix.length);
	    }

	    // Remove the thousand grouping.
	    if (thousand) {
	      input = input.split(thousand).join("");
	    }

	    // Set the decimal separator back to period.
	    if (mark) {
	      input = input.replace(mark, ".");
	    }

	    // Prepend the negative symbol.
	    if (inputIsNegative) {
	      output += "-";
	    }

	    // Add the number
	    output += input;

	    // Trim all non-numeric characters (allow '.' and '-');
	    output = output.replace(/[^0-9\.\-.]/g, "");

	    // The value contains no parse-able number.
	    if (output === "") {
	      return false;
	    }

	    // Covert to number.
	    output = Number(output);

	    // Run the user-specified post-decoder.
	    if (decoder) {
	      output = decoder(output);
	    }

	    // Check is the output is valid, otherwise: return false.
	    if (!isValidNumber(output)) {
	      return false;
	    }

	    return output;
	  }

	  // Framework

	  // Validate formatting options
	  function validate(inputOptions) {
	    var i,
	      optionName,
	      optionValue,
	      filteredOptions = {};

	    if (inputOptions["suffix"] === undefined) {
	      inputOptions["suffix"] = inputOptions["postfix"];
	    }

	    for (i = 0; i < FormatOptions.length; i += 1) {
	      optionName = FormatOptions[i];
	      optionValue = inputOptions[optionName];

	      if (optionValue === undefined) {
	        // Only default if negativeBefore isn't set.
	        if (optionName === "negative" && !filteredOptions.negativeBefore) {
	          filteredOptions[optionName] = "-";
	          // Don't set a default for mark when 'thousand' is set.
	        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
	          filteredOptions[optionName] = ".";
	        } else {
	          filteredOptions[optionName] = false;
	        }

	        // Floating points in JS are stable up to 7 decimals.
	      } else if (optionName === "decimals") {
	        if (optionValue >= 0 && optionValue < 8) {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }

	        // These options, when provided, must be functions.
	      } else if (
	        optionName === "encoder" ||
	        optionName === "decoder" ||
	        optionName === "edit" ||
	        optionName === "undo"
	      ) {
	        if (typeof optionValue === "function") {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }

	        // Other options are strings.
	      } else {
	        if (typeof optionValue === "string") {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }
	      }
	    }

	    // Some values can't be extracted from a
	    // string if certain combinations are present.
	    throwEqualError(filteredOptions, "mark", "thousand");
	    throwEqualError(filteredOptions, "prefix", "negative");
	    throwEqualError(filteredOptions, "prefix", "negativeBefore");

	    return filteredOptions;
	  }

	  // Pass all options as function arguments
	  function passAll(options, method, input) {
	    var i,
	      args = [];

	    // Add all options in order of FormatOptions
	    for (i = 0; i < FormatOptions.length; i += 1) {
	      args.push(options[FormatOptions[i]]);
	    }

	    // Append the input, then call the method, presenting all
	    // options as arguments.
	    args.push(input);
	    return method.apply("", args);
	  }

	  function wNumb(options) {
	    if (!(this instanceof wNumb)) {
	      return new wNumb(options);
	    }

	    if (typeof options !== "object") {
	      return;
	    }

	    options = validate(options);

	    // Call 'formatTo' with proper arguments.
	    this.to = function(input) {
	      return passAll(options, formatTo, input);
	    };

	    // Call 'formatFrom' with proper arguments.
	    this.from = function(input) {
	      return passAll(options, formatFrom, input);
	    };
	  }

	  return wNumb;
	});
} (wNumb));

var wnumb = wNumb.exports;

function useTooltip (props, context, dependencies)
{
  const { format, step } = toRefs(props);

  // ============ DEPENDENCIES ============

  const value = dependencies.value;
  const classList = dependencies.classList;

  // ============== COMPUTED ==============

  // no export
  const tooltipFormat = computed(() => {
    if (!format || !format.value) {
      return wnumb({ decimals: step.value >= 0 ? 0 : 2 })
    }

    if (typeof format.value == 'function') {
      return { to: format.value }
    }

    return wnumb({...format.value})
  });

  const tooltipsFormat = computed(() => {
    return Array.isArray(value.value) ? value.value.map(v => tooltipFormat.value) : tooltipFormat.value
  });

  // =============== METHODS ==============
  
  /* istanbul ignore next */
  const tooltipsMerge = (slider, threshold, separator) => {
    var textIsRtl = getComputedStyle(slider).direction === 'rtl';
    var isRtl = slider.noUiSlider.options.direction === 'rtl';
    var isVertical = slider.noUiSlider.options.orientation === 'vertical';
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();

    // Move tooltips into the origin element. The default stylesheet handles this.
    tooltips.forEach(function (tooltip, index) {
      if (tooltip) {
        origins[index].appendChild(tooltip);
      }
    });

    slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;

      // Assign the first tooltip to the first pool, if the tooltip is configured
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = tooltipFormat.value.to(parseFloat(values[0]));
      }

      for (var i = 1; i < values.length; i++) {
        if (!tooltips[i] || (values[i] - values[i - 1]) > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }

        if (tooltips[i]) {
          pools[atPool].push(i);
          poolValues[atPool].push(tooltipFormat.value.to(parseFloat(values[i])));
          poolPositions[atPool].push(positions[i]);
        }
      }

      pools.forEach(function (pool, poolIndex) {
        var handlesInPool = pool.length;

        for (var j = 0; j < handlesInPool; j++) {
          var handleNumber = pool[j];

          if (j === handlesInPool - 1) {
            var offset = 0;

            poolPositions[poolIndex].forEach(function (value) {
              offset += 1000 - value;
            });

            var direction = isVertical ? 'bottom' : 'right';
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1000 - poolPositions[poolIndex][last];
            offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;

            // Center this tooltip over the affected handles
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = 'block';
            tooltips[handleNumber].style[direction] = offset + '%';

            classList.value.tooltipHidden.split(' ').forEach((c) => {
              if (tooltips[handleNumber].classList.contains(c)) {
                tooltips[handleNumber].classList.remove(c);
              }
            });

          } else {
            // Hide this tooltip
            tooltips[handleNumber].style.display = 'none';
            classList.value.tooltipHidden.split(' ').forEach((c) => {
              tooltips[handleNumber].classList.add(c);
            });
          }
        }
      });
    });
  };

  return {
    tooltipFormat,
    tooltipsFormat,
    tooltipsMerge,
  }
}

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}
var nouislider = {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
};

function arraysEqual (array1, array2) {
  // couldn't reproduce
  /* istanbul ignore next */
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false
  }

  const array2Sorted = array2.slice().sort();

  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  })
}

function useSlider (props, context, dependencies)
{
  const {
    orientation, direction, tooltips, step,
    min, max, merge, id, disabled, options,
    classes, format, lazy, ariaLabelledby,
    aria,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const value = dependencies.value;
  const initialValue = dependencies.initialValue;
  const tooltipsFormat = dependencies.tooltipsFormat;
  const tooltipsMerge = dependencies.tooltipsMerge;
  const tooltipFormat = dependencies.tooltipFormat;
  const classList = dependencies.classList;

  // ================ DATA ================

  const slider = ref(null);

  const slider$ = ref(null);

  // no export
  const inited = ref(false);

  // ============== COMPUTED ==============

  // no export
  const defaultOptions = computed(() => {
    let defaultOptions = {
      cssPrefix: '',
      cssClasses: classList.value,
      orientation: orientation.value,
      direction: direction.value,
      tooltips: tooltips.value ? tooltipsFormat.value : false,
      connect: 'lower',
      start: isNullish(value.value) ? min.value : value.value,
      range: {
        'min': min.value,
        'max': max.value
      }
    };

    if (step.value > 0) {
      defaultOptions.step = step.value;
    }

    if (Array.isArray(value.value)) {
      defaultOptions.connect = true;
    }

    if ((ariaLabelledby && ariaLabelledby.value) || (aria && Object.keys(aria.value).length)) {
      let handles = Array.isArray(value.value) ? value.value : [value.value];

      defaultOptions.handleAttributes = handles.map(h => (Object.assign({}, aria.value, ariaLabelledby && ariaLabelledby.value ? {
        'aria-labelledby': ariaLabelledby.value,
      }: {})));
    }

    if (format.value) {
      defaultOptions.ariaFormat = tooltipFormat.value;
    }

    return defaultOptions
  });

  const sliderProps = computed(() => {
    let sliderProps = {
      id: id && id.value ? id.value : undefined,
    };

    if (disabled.value) {
      sliderProps.disabled = true;
    }

    return sliderProps
  });

  const isRange = computed(() => {
    return Array.isArray(value.value)
  });

  // =============== METHODS ==============

  const reset = () => {
    updateValue(initialValue.value);
  };

  // no export
  const getSliderValue = () => {
    let sliderValue = slider$.value.get();

    return Array.isArray(sliderValue)
      ? sliderValue.map(v => parseFloat(v))
      : parseFloat(sliderValue)
  };

  const update = (val, triggerChange = true) => {
    slider$.value.set(val, triggerChange);
  };

  // no export
  const updateValue = (val) => {
    context.emit('input', val);
    context.emit('update:modelValue', val);
    context.emit('update', val);
  };

  const init = () => {
    slider$.value = nouislider.create(slider.value, Object.assign({}, defaultOptions.value, options.value));

    if (tooltips.value && isRange.value && merge.value >= 0) {
      tooltipsMerge(slider.value, merge.value, ' - ');
    }

    slider$.value.on('set', () => {
      const sliderValue = getSliderValue();

      context.emit('change', sliderValue);
      context.emit('set', sliderValue);

      /* istanbul ignore else */
      if (lazy.value) {
        updateValue(sliderValue);
      }
    });

    slider$.value.on('update', () => {
      if (!inited.value) {
        return
      }

      const sliderValue = getSliderValue();

      if ((isRange.value && arraysEqual(value.value, sliderValue)) || (!isRange.value && value.value == sliderValue)) {
        context.emit('update', sliderValue);
        // Required because set event is not
        // triggered even though it should be
        return
      }

      if (!lazy.value) {
        updateValue(sliderValue);
      }
    });

    /* istanbul ignore next */
    slider$.value.on('start', () => {
      context.emit('start', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('end', () => {
      context.emit('end', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('slide', () => {
      context.emit('slide', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('drag', () => {
      context.emit('drag', getSliderValue());
    });

    slider.value.querySelectorAll('[data-handle]').forEach((handle) => {
      handle.onblur = () => {
        /* istanbul ignore next */
        if (!slider.value) {
          return
        }

        classList.value.focused.split(' ').forEach((c) => {
          slider.value.classList.remove(c);
        });
      };

      handle.onfocus = () => {
        classList.value.focused.split(' ').forEach((c) => {
          slider.value.classList.add(c);
        });
      };
    });

    inited.value = true;
  };

  const destroy = () => {
    slider$.value.off();
    slider$.value.destroy();
    slider$.value = null;
  };

  const refresh = (n,o) => {
    inited.value = false;
    destroy();
    init();
  };

  // ================ HOOKS ===============

  onMounted(init);
  onUnmounted(destroy);

  // ============== WATCHERS ==============

  watch(isRange, refresh, { immediate: false });
  watch(min, refresh, { immediate: false });
  watch(max, refresh, { immediate: false });
  watch(step, refresh, { immediate: false });
  watch(orientation, refresh, { immediate: false });
  watch(direction, refresh, { immediate: false });
  watch(tooltips, refresh, { immediate: false });
  watch(merge, refresh, { immediate: false });
  watch(format, refresh, { immediate: false, deep: true });
  watch(options, refresh, { immediate: false, deep: true });
  watch(classes, refresh, { immediate: false, deep: true });

  watch(value, (value, old) => {
    // If old was 0, null, undefined, '', false
    if (!old) {
      return
    }

    if (
      // If both old and new has multiple handles
      // and the number of handles decreased
      (typeof old === 'object' && typeof value === 'object' && value && Object.keys(old) > Object.keys(value)) ||

      // If the old had multiple handles but
      // if it decreased to single
      (typeof old === 'object' && typeof value !== 'object') ||

      // Or has no value at all
      isNullish(value)
    ) {
      refresh();
    }
  }, { immediate: false });

  watch(value, (newValue) => {
    if (isNullish(newValue)) {
      update(min.value, false);
      return
    }

    let sliderValue = getSliderValue();

    // couldn't reproduce
    /* istanbul ignore next */
    if (isRange.value && !Array.isArray(sliderValue)) {
      sliderValue = [sliderValue];
    }

    if ((isRange.value && !arraysEqual(newValue, sliderValue)) || (!isRange.value && newValue != sliderValue)) {
      update(newValue, false);
    }
  }, { deep: true });

  return {
    slider,
    slider$,
    isRange,
    sliderProps,
    init,
    destroy,
    refresh,
    update,
    reset,
  }
}

/* istanbul ignore next */
  const valueProps$1 = {
    value: {
      validator: function(p) {
        return p => typeof p === 'number' || p instanceof Array || p === null || p === undefined || p === false
      },
      required: false,
    },
    modelValue: {
      validator: function(p) {
        return p => typeof p === 'number' || p instanceof Array || p === null || p === undefined || p === false
      },
      required: false,
    },
  };

  var script$J = {
    name: 'Slider',
    emits: [
      'input', 'update:modelValue',
      'start', 'slide', 'drag', 'update', 'change', 'set', 'end',
    ],
    props: {
      ...valueProps$1,
      id: {
        type: [String, Number],
        required: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      min: {
        type: Number,
        required: false,
        default: 0
      },
      max: {
        type: Number,
        required: false,
        default: 100
      },
      step: {
        type: Number,
        required: false,
        default: 1
      },
      orientation: {
        type: String,
        required: false,
        default: 'horizontal',
      },
      direction: {
        type: String,
        required: false,
        default: 'ltr',
      },
      tooltips: {
        type: Boolean,
        required: false,
        default: true,
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      },
      merge: {
        type: Number,
        required: false,
        default: -1
      },
      format: {
        type: [Object, Function, Boolean],
        required: false,
        default: null,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({}),
      },
      showTooltip: {
        type: String,
        required: false,
        default: 'always'
      },
      tooltipPosition: {
        type: String,
        required: false,
        default: null,
      },
      lazy: {
        type: Boolean,
        required: false,
        default: true,
      },
      ariaLabelledby: {
        type: String,
        required: false,
        default: undefined,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, context)
    {
      // no export
      const value = useValue$2(props);

      const classes = useClasses$1(props);
      const tooltip = useTooltip(props, context, {
        value: value.value,
        classList: classes.classList,
      });

      const slider = useSlider(props, context, {
        value: value.value,
        initialValue: value.initialValue,
        tooltipFormat: tooltip.tooltipFormat,
        tooltipsFormat: tooltip.tooltipsFormat,
        tooltipsMerge: tooltip.tooltipsMerge,
        classList: classes.classList,
      });

      return {
        ...classes,
        ...tooltip,
        ...slider,
      }
    }
  };

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", mergeProps(_ctx.sliderProps, { ref: "slider" }), null, 16 /* FULL_PROPS */))
}

script$J.render = render$k;
script$J.__file = "node_modules/@vueform/slider/src/Slider.vue";

var script$I = {
    name: 'SliderElement',
    components: {
      Slider: script$J,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          slider: {
            target: '',
            focused: '',
            tooltipFocus: '',
            tooltipDrag: '',
            ltr: '',
            rtl: '',
            horizontal: '',
            vertical: '',
            textDirectionRtl: '',
            textDirectionLtr: '',
            base: '',
            connects: '',
            connect: '',
            origin: '',
            handle: '',
            touchArea: '',
            tooltip: '',
            tooltipTop: '',
            tooltipBottom: '',
            tooltipLeft: '',
            tooltipRight: '',
            tooltipHidden: '',
            active: '',
            draggable: '',
            tap: '',
            drag: '',
          },
        }
      }
    }
  };

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Slider = resolveComponent("Slider");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        createCommentVNode(" @vueform/slider component "),
        createVNode(_component_Slider, mergeProps({
          value: _ctx.value,
          modelValue: _ctx.value
        }, _ctx.fieldOptions, {
          aria: _ctx.aria,
          classes: _ctx.classes.slider,
          id: _ctx.fieldId,
          ref: "input",
          onUpdate: _ctx.handleUpdate,
          onChange: _ctx.handleChange
        }), null, 16 /* FULL_PROPS */, ["value", "modelValue", "aria", "classes", "id", "onUpdate", "onChange"])
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$I.render = render$j;
script$I.__file = "themes/blank/templates/elements/SliderElement.vue";

var script$H = {
    name: 'SliderElement',
    render: script$I.render,
    components: {
      Slider: script$J,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-slider-wrapper',
          wrapper_sm: 'vf-slider-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-slider-wrapper-lg',
          slider: {
            target: 'vf-slider-target',
            target_sm: 'vf-slider-target-sm',
            target_md: 'vf-slider-target-md',
            target_lg: 'vf-slider-target-lg',
            focused: 'vf-slider-focused',
            tooltipFocus: 'vf-slider-tooltip-focus',
            tooltipDrag: 'vf-slider-tooltip-drag',
            ltr: 'vf-slider-ltr',
            rtl: 'vf-slider-rtl',
            horizontal: 'vf-slider-horizontal',
            horizontal_sm: 'vf-slider-horizontal-sm',
            horizontal_md: 'vf-slider-horizontal-md',
            horizontal_lg: 'vf-slider-horizontal-lg',
            vertical: 'vf-slider-vertical',
            vertical_sm: 'vf-slider-vertical-sm',
            vertical_md: 'vf-slider-vertical-md',
            vertical_lg: 'vf-slider-vertical-lg',
            textDirectionRtl: 'vf-slider-txt-dir-rtl',
            textDirectionLtr: 'vf-slider-txt-dir-ltr',
            base: 'vf-slider-base',
            base_sm: 'vf-slider-base-sm',
            base_md: 'vf-slider-base-md',
            base_lg: 'vf-slider-base-lg',
            connects: 'vf-slider-connects',
            connects_sm: 'vf-slider-connects-sm',
            connects_md: 'vf-slider-connects-md',
            connects_lg: 'vf-slider-connects-lg',
            connect: 'vf-slider-connect',
            connect_sm: 'vf-slider-connect-sm',
            connect_md: 'vf-slider-connect-md',
            connect_lg: 'vf-slider-connect-lg',
            origin: 'vf-slider-origin',
            handle: 'vf-slider-handle',
            handle_sm: 'vf-slider-handle-sm',
            handle_md: 'vf-slider-handle-md',
            handle_lg: 'vf-slider-handle-lg',
            handleUpper: 'vf-handle-upper',
            handleLower: 'vf-handle-lower',
            touchArea: 'vf-slider-touch-area',
            tooltip: 'vf-slider-tooltip',
            tooltip_sm: 'vf-slider-tooltip-sm',
            tooltip_md: 'vf-slider-tooltip-md',
            tooltip_lg: 'vf-slider-tooltip-lg',
            tooltipTop: 'vf-slider-tooltip-top',
            tooltipTop_sm: 'vf-slider-tooltip-top-sm',
            tooltipTop_md: 'vf-slider-tooltip-top-md',
            tooltipTop_lg: 'vf-slider-tooltip-top-lg',
            tooltipBottom: 'vf-slider-tooltip-bottom',
            tooltipBottom_sm: 'vf-slider-tooltip-bottom-sm',
            tooltipBottom_md: 'vf-slider-tooltip-bottom-md',
            tooltipBottom_lg: 'vf-slider-tooltip-bottom-lg',
            tooltipLeft: 'vf-slider-tooltip-left',
            tooltipLeft_sm: 'vf-slider-tooltip-left-sm',
            tooltipLeft_md: 'vf-slider-tooltip-left-md',
            tooltipLeft_lg: 'vf-slider-tooltip-left-lg',
            tooltipRight: 'vf-slider-tooltip-right',
            tooltipRight_sm: 'vf-slider-tooltip-right-sm',
            tooltipRight_md: 'vf-slider-tooltip-right-md',
            tooltipRight_lg: 'vf-slider-tooltip-right-lg',
            tooltipHidden: 'vf-slider-tooltip-hidden',
            active: 'vf-slider-active',
            draggable: 'vf-slider-draggable',
            tap: 'vf-slider-state-tap',
            drag: 'vf-slider-state-drag',
            $slider: (classes, { Size }) => ([
              classes.slider.slider,
              classes.slider[`slider_${Size}`],
            ]),
            $horizontal: (classes, { Size }) => ([
              classes.slider.horizontal,
              classes.slider[`horizontal_${Size}`],
            ]),
            $vertical: (classes, { Size }) => ([
              classes.slider.vertical,
              classes.slider[`vertical_${Size}`],
            ]),
            $base: (classes, { Size }) => ([
              classes.slider.base,
              classes.slider[`base_${Size}`],
            ]),
            $connects: (classes, { Size }) => ([
              classes.slider.connects,
              classes.slider[`connects_${Size}`],
            ]),
            $connect: (classes, { Size }) => ([
              classes.slider.connect,
              classes.slider[`connect_${Size}`],
            ]),
            $handle: (classes, { Size }) => ([
              classes.slider.handle,
              classes.slider[`handle_${Size}`],
            ]),
            $tooltip: (classes, { Size }) => ([
              classes.slider.tooltip,
              classes.slider[`tooltip_${Size}`],
            ]),
            $tooltipTop: (classes, { Size }) => ([
              classes.slider.tooltipTop,
              classes.slider[`tooltipTop_${Size}`],
            ]),
            $tooltipBottom: (classes, { Size }) => ([
              classes.slider.tooltipBottom,
              classes.slider[`tooltipBottom_${Size}`],
            ]),
            $tooltipLeft: (classes, { Size }) => ([
              classes.slider.tooltipLeft,
              classes.slider[`tooltipLeft_${Size}`],
            ]),
            $tooltipRight: (classes, { Size }) => ([
              classes.slider.tooltipRight,
              classes.slider[`tooltipRight_${Size}`],
            ]),
          },
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
          ])
        }
      }
    }
  };

var css_248z$l = ".vf-slider-wrapper {\n  margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);\n}\n\n.vf-slider-wrapper.vf-slider-wrapper-sm {\n  margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);\n  margin-bottom: 0.25rem;\n}\n\n.vf-slider-wrapper.vf-slider-wrapper-lg {\n  margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);\n}\n\n/* @vueform/slider styles */\n\n.vf-slider-target,\n.vf-slider-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  touch-action: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.vf-slider-target {\n  position: relative;\n  margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;\n}\n\n.vf-slider-target[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.vf-slider-target.vf-slider-target-sm {\n  margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;\n}\n\n.vf-slider-target.vf-slider-target-lg {\n  margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;\n}\n\n.vf-slider-target.vf-slider-horizontal {\n  height: var(--vf-slider-height);\n}\n\n.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-sm {\n  height: var(--vf-slider-height-sm);\n}\n\n.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-lg {\n  height: var(--vf-slider-height-lg);\n}\n\n.vf-slider-target.vf-slider-vertical {\n  width: var(--vf-slider-height);\n  height: var(--vf-slider-height-vertical);\n}\n\n.vf-slider-target.vf-slider-vertical.vf-slider-vertical-sm {\n  width: var(--vf-slider-height-sm);\n  height: var(--vf-slider-height-vertical-sm);\n}\n\n.vf-slider-target.vf-slider-vertical.vf-slider-vertical-lg {\n  width: var(--vf-slider-height-lg);\n  height: var(--vf-slider-height-vertical-lg);\n}\n\n.vf-slider-target.vf-slider-state-drag * {\n  cursor: inherit !important;\n}\n\n.vf-slider-base,\n.vf-slider-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.vf-slider-base {\n  box-shadow: var(--vf-shadow-input);\n  background-color: var(--vf-bg-passive);\n  border-radius: var(--vf-radius-slider);\n  z-index: 1;\n}\n\n.vf-slider-base.vf-slider-base-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-base.vf-slider-base-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n.vf-slider-connects {\n  overflow: hidden;\n  z-index: 0;\n  border-radius: var(--vf-radius-slider);\n}\n\n.vf-slider-connects.vf-slider-connects-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-connects.vf-slider-connects-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n.vf-slider-connect,\n.vf-slider-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n\n.vf-slider-connect {\n  background: var(--vf-primary);\n  border-radius: var(--vf-radius-slider);\n  cursor: pointer;\n}\n\n.vf-slider-connect.vf-slider-connect-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n\n.vf-slider-connect.vf-slider-connect-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n\n[disabled] .vf-slider-connect {\n  background: var(--vf-slider-connect-bg-disabled);\n}\n\n.vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {\n  left: 0;\n  right: auto;\n}\n\n.vf-slider-vertical .vf-slider-origin {\n  top: -100%;\n  width: 0;\n}\n\n.vf-slider-horizontal .vf-slider-origin {\n  height: 0;\n}\n\n.vf-slider-state-tap .vf-slider-connect,\n.vf-slider-state-tap .vf-slider-origin {\n  transition: transform 0.3s;\n}\n\n.vf-slider-handle {\n  backface-visibility: hidden;\n  position: absolute;\n  width: var(--vf-slider-handle-size);\n  height: var(--vf-slider-handle-size);\n  background-color: var(--vf-bg-slider-handle);\n  border-radius: 999px;\n  box-shadow: var(--vf-shadow-handles);\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  cursor: grab;\n  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n\n.vf-slider-handle:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-slider-handle:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n\n.vf-slider-handle.vf-slider-handle-sm {\n  height: var(--vf-slider-handle-size-sm);\n  width: var(--vf-slider-handle-size-sm);\n}\n\n.vf-slider-handle.vf-slider-handle-lg {\n  height: var(--vf-slider-handle-size-lg);\n  width: var(--vf-slider-handle-size-lg);\n}\n\n.vf-slider-horizontal .vf-slider-handle {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size) / 2 * -1);\n}\n\n.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size-sm) / 2 * -1);\n}\n\n.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);\n  right: calc(var(--vf-slider-handle-size-lg) / 2 * -1);\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle {\n  left: calc(var(--vf-slider-handle-width) / 2 * -1);\n  right: auto;\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-sm {\n  left: calc(var(--vf-slider-handle-width-sm) / 2 * -1);\n}\n\n.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-lg {\n  left: calc(var(--vf-slider-handle-width-lg) / 2 * -1);\n}\n\n.vf-slider-vertical {\n  width: var(--vf-slider-height);\n  height: var(--vf-slider-vertical-height);\n}\n\n.vf-slider-vertical .vf-slider-handle {\n  bottom: calc(var(--vf-slider-handle-size) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);\n}\n\n.vf-slider-vertical .vf-slider-handle.vf-slider-handle-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);\n}\n\n.vf-slider-vertical .vf-slider-handle.vf-slider-handle-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * -1);\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);\n}\n\n.vf-slider-touch-area {\n  height: 100%;\n  width: 100%;\n}\n\n.vf-slider-tooltip {\n  position: absolute;\n  display: block;\n  font-weight: 600;\n  white-space: nowrap;\n  min-width: 1.25rem;\n  text-align: center;\n  border: 1px solid var(--vf-border-color-slider-tooltip);\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);\n  border-radius: var(--vf-radius-small);\n}\n\n.vf-slider-tooltip.vf-slider-tooltip-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);\n  border-radius: var(--vf-radius-small-sm);\n}\n\n.vf-slider-tooltip.vf-slider-tooltip-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);\n  border-radius: var(--vf-radius-small-lg);\n}\n\n.vf-slider-tooltip-focus .vf-slider-tooltip,\n.vf-slider-tooltip-drag .vf-slider-tooltip {\n  display: none !important;\n}\n\n.vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),\n.vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),\n.vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {\n  display: block !important;\n}\n\n[disabled].vf-slider-target,\n[disabled].vf-slider-handle,\n[disabled] .vf-slider-handle {\n  cursor: not-allowed;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top:before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 0;\n  height: 0;\n  transform: translate(-50%);\n  bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm:before {\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg:before {\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-top-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {\n  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {\n  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {\n  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom {\n  transform: translate(-50%, 0);\n  left: 50%;\n  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom:before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 0;\n  height: 0;\n  transform: translate(-50%);\n  top: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {\n  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm:before {\n  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {\n  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg:before {\n  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-bottom-color: inherit;\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  transform: translateY(-50%);\n  right: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {\n  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm:before {\n  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {\n  right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg:before {\n  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-left-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right {\n  transform: translate(0, -50%);\n  top: 50%;\n  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  transform: translateY(-50%);\n  left: calc(var(--vf-slider-tooltip-arrow-size) * -2);\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {\n  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm:before {\n  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {\n  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg:before {\n  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-right-color: inherit;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {\n  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {\n  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {\n  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n\n.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {\n  transform: translate(50%, 0);\n  left: auto;\n}\n\n.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {\n  transform: translate(0, 50%);\n  top: auto;\n}\n\n.vf-slider-active {\n  cursor: grabbing;\n}\n\n.vf-slider-draggable {\n  cursor: ew-resize;\n}\n\n.vf-slider-vertical .vf-slider-draggable {\n  cursor: ns-resize;\n}";
styleInject(css_248z$l);

script$H.__file = "themes/vueform/templates/elements/SliderElement.vue";

var script$G = {
    name: 'StaticElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          content: '',
          tag: '',
        }
      }
    }
  };

const _hoisted_1$f = ["innerHTML"];
const _hoisted_2$a = ["innerHTML"];
const _hoisted_3$8 = ["innerHTML"];
const _hoisted_4$3 = ["innerHTML"];
const _hoisted_5$2 = ["innerHTML"];
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["href", "target", "innerHTML"];
const _hoisted_9 = ["href", "target"];
const _hoisted_10 = ["href", "target"];
const _hoisted_11 = ["src", "alt", "title", "width", "height"];
const _hoisted_12 = ["src", "alt", "title", "width", "height"];
const _hoisted_13 = ["innerHTML"];

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.wrap)
    ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), {
        key: 0,
        ref: "container"
      }, createSlots({
        element: withCtx(() => [
          createCommentVNode(" If content is HTML "),
          (_ctx.isHtml && (_ctx.content || ['img', 'hr'].indexOf(_ctx.tag) !== -1))
            ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                (!_ctx.tag && _ctx.allowHtml)
                  ? (openBlock(), createElementBlock("div", mergeProps({
                      key: 0,
                      class: _ctx.classes.content,
                      innerHTML: _ctx.content
                    }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_1$f))
                  : createCommentVNode("v-if", true),
                (!_ctx.tag && !_ctx.allowHtml)
                  ? (openBlock(), createElementBlock("div", mergeProps({
                      key: 1,
                      class: _ctx.classes.content
                    }, _ctx.attrs), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'p')
                  ? (openBlock(), createElementBlock("div", {
                      key: 2,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("p", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_2$a))
                        : (openBlock(), createElementBlock("p", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'h1')
                  ? (openBlock(), createElementBlock("div", {
                      key: 3,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("h1", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_3$8))
                        : (openBlock(), createElementBlock("h1", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'h2')
                  ? (openBlock(), createElementBlock("div", {
                      key: 4,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("h2", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_4$3))
                        : (openBlock(), createElementBlock("h2", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'h3')
                  ? (openBlock(), createElementBlock("div", {
                      key: 5,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("h3", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_5$2))
                        : (openBlock(), createElementBlock("h3", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'h4')
                  ? (openBlock(), createElementBlock("div", {
                      key: 6,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("h4", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_6$1))
                        : (openBlock(), createElementBlock("h4", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'blockquote')
                  ? (openBlock(), createElementBlock("div", {
                      key: 7,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("blockquote", mergeProps({
                            key: 0,
                            innerHTML: _ctx.content
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_7))
                        : (openBlock(), createElementBlock("blockquote", normalizeProps(mergeProps({ key: 1 }, _ctx.attrs)), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'a')
                  ? (openBlock(), createElementBlock("div", {
                      key: 8,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("a", mergeProps({
                            key: 0,
                            href: _ctx.href,
                            target: _ctx.target
                          }, _ctx.attrs, { innerHTML: _ctx.content }), null, 16 /* FULL_PROPS */, _hoisted_8))
                        : (openBlock(), createElementBlock("a", mergeProps({
                            key: 1,
                            href: _ctx.href,
                            target: _ctx.target
                          }, _ctx.attrs), toDisplayString(_ctx.content), 17 /* TEXT, FULL_PROPS */, _hoisted_9))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'hr')
                  ? (openBlock(), createElementBlock("div", {
                      key: 9,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      createElementVNode("hr", normalizeProps(guardReactiveProps(_ctx.attrs)), null, 16 /* FULL_PROPS */)
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (_ctx.tag === 'img')
                  ? (openBlock(), createElementBlock("div", {
                      key: 10,
                      class: normalizeClass(_ctx.classes.tag)
                    }, [
                      (_ctx.href)
                        ? (openBlock(), createElementBlock("a", {
                            key: 0,
                            href: _ctx.href,
                            target: _ctx.target
                          }, [
                            createElementVNode("img", mergeProps({
                              src: _ctx.src,
                              alt: _ctx.alt,
                              title: _ctx.title,
                              width: _ctx.width,
                              height: _ctx.height
                            }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_11)
                          ], 8 /* PROPS */, _hoisted_10))
                        : (openBlock(), createElementBlock("img", mergeProps({
                            key: 1,
                            src: _ctx.src,
                            alt: _ctx.alt,
                            title: _ctx.title,
                            width: _ctx.width,
                            height: _ctx.height
                          }, _ctx.attrs), null, 16 /* FULL_PROPS */, _hoisted_12))
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ], 64 /* STABLE_FRAGMENT */))
            : (_ctx.content)
              ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createCommentVNode(" If content is component "),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.componentContent), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
              : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createCommentVNode(" If content is a slot "),
                  renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.slotContent), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                  ])
                ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        ]),
        _: 2 /* DYNAMIC */
      }, [
        renderList(_ctx.elementSlots, (component, slot) => {
          return {
            name: slot,
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
                (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
              ])
            ])
          }
        })
      ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
    : (_ctx.content && _ctx.isHtml)
      ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.classes.content),
          innerHTML: _ctx.content
        }, null, 10 /* CLASS, PROPS */, _hoisted_13))
      : (_ctx.content)
        ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.componentContent), {
            key: 2,
            ref: "container"
          }, null, 512 /* NEED_PATCH */))
        : (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(_ctx.classes.container),
            ref: "container"
          }, [
            renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.slotContent), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
            ])
          ], 2 /* CLASS */))
}

script$G.render = render$i;
script$G.__file = "themes/blank/templates/elements/StaticElement.vue";

var script$F = {
    name: 'StaticElement',
    render: script$G.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-contains-link',
          content: 'vf-static',
          content_sm: 'vf-static-sm',
          content_md: '',
          content_lg: 'vf-static-lg',
          content_top_1: 'vf-static-tag-top-1',
          content_top_2: 'vf-static-tag-top-2',
          content_top_3: 'vf-static-tag-top-3',
          content_bottom_1: 'vf-static-tag-bottom-1',
          content_bottom_2: 'vf-static-tag-bottom-2',
          content_bottom_3: 'vf-static-tag-bottom-3',
          tag: 'vf-static-tag',
          tag_sm: 'vf-static-tag-sm',
          tag_md: '',
          tag_lg: 'vf-static-tag-lg',
          tag_top_1: 'vf-static-tag-top-1',
          tag_top_2: 'vf-static-tag-top-2',
          tag_top_3: 'vf-static-tag-top-3',
          tag_bottom_1: 'vf-static-tag-bottom-1',
          tag_bottom_2: 'vf-static-tag-bottom-2',
          tag_bottom_3: 'vf-static-tag-bottom-3',
          tag_left: 'vf-static-tag-left',
          tag_center: 'vf-static-tag-center',
          tag_right: 'vf-static-tag-right',
          tag_p: 'vf-static-tag-p',
          tag_h1: 'vf-static-tag-h1',
          tag_h2: 'vf-static-tag-h2',
          tag_h3: 'vf-static-tag-h3',
          tag_h4: 'vf-static-tag-h4',
          tag_blockquote: 'vf-static-tag-blockquote',
          tag_a: 'vf-static-tag-a',
          tag_hr: 'vf-static-tag-hr',
          tag_img: 'vf-static-tag-img',
          $content: (classes, { Size, top, bottom }) => ([
            classes.content,
            classes[`content_${Size}`],
            top >= 1 ? classes[`content_top_${top}`] : null,
            bottom >= 1 ? classes[`content_bottom_${bottom}`] : null,
          ]),
          $tag: (classes, { Size, tag, align, top, bottom }) => ([
            classes.tag,
            classes[`tag_${Size}`],
            classes[`tag_${tag}`],
            align === 'left' ? classes.tag_left : null,
            align === 'center' ? classes.tag_center : null,
            align === 'right' ? classes.tag_right : null,
            top >= 1 ? classes[`tag_top_${top}`] : null,
            bottom >= 1 ? classes[`tag_bottom_${bottom}`] : null,
          ]),
        }
      }
    }
  };

var css_248z$k = "/* Styles contained in scss/_static.scss */";
styleInject(css_248z$k);

script$F.__file = "themes/vueform/templates/elements/StaticElement.vue";

var script$E = {
    name: 'TagsElement',
    components: {
      Multiselect: script$W,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            search: '',
            tags: '',
            tag: '',
            tagDisabled: '',
            tagRemove: '',
            tagRemoveIcon: '',
            tagsSearchWrapper: '',
            tagsSearch: '',
            tagsSearchCopy: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_Multiselect = resolveComponent("Multiselect");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      (_ctx.hasFloating && !_ctx.empty)
        ? (openBlock(), createBlock(_component_ElementLabelFloating, {
            key: 0,
            visible: !_ctx.empty
          }, null, 8 /* PROPS */, ["visible"]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" @vueform/multiselect copmonent "),
      createVNode(_component_Multiselect, mergeProps(_ctx.fieldOptions, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event)),
        classes: _ctx.classes.select,
        id: _ctx.fieldId,
        name: _ctx.name,
        options: _ctx.resolvedOptions,
        disabled: _ctx.isDisabled,
        placeholder: _ctx.Placeholder,
        attrs: _ctx.attrs,
        aria: _ctx.aria,
        locale: _ctx.form$.locale$,
        onSelect: _ctx.handleSelect,
        onDeselect: _ctx.handleDeselect,
        onSearchChange: _ctx.handleSearchChange,
        onTag: _ctx.handleTag,
        onOpen: _ctx.handleOpen,
        onClose: _ctx.handleClose,
        onClear: _ctx.handleClear,
        onPaste: _ctx.handlePaste,
        ref: "input"
      }), createSlots({ _: 2 /* DYNAMIC */ }, [
        renderList({
          option: 'option', noresults: 'no-results', nooptions: 'no-options',
          afterlist: 'after-list', beforelist: 'before-list', placeholder: 'placeholder',
          grouplabel: 'group-label', caret: 'caret', clear: 'clear', spinner: 'spinner',
          default: 'default',
        }, (slotName, slotKey) => {
          return {
            name: slotKey,
            fn: withCtx((props) => [
              renderSlot(_ctx.$slots, slotName, mergeProps(props, { el$: _ctx.el$ }), () => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots[slotName]), mergeProps(props, { el$: _ctx.el$ }), null, 16 /* FULL_PROPS */, ["el$"]))
              ])
            ])
          }
        }),
        (_ctx.fieldOptions.mode == 'tags')
          ? {
              name: "tag",
              fn: withCtx(({ option, handleTagRemove, disabled }) => [
                renderSlot(_ctx.$slots, "tag", {
                  option: option,
                  handleTagRemove: handleTagRemove,
                  disabled: disabled,
                  el$: _ctx.el$
                }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.tag), {
                    option: option,
                    handleTagRemove: handleTagRemove,
                    disabled: disabled,
                    el$: _ctx.el$
                  }, null, 8 /* PROPS */, ["option", "handleTagRemove", "disabled", "el$"]))
                ])
              ]),
              key: "0"
            }
          : undefined
      ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "classes", "id", "name", "options", "disabled", "placeholder", "attrs", "aria", "locale", "onSelect", "onDeselect", "onSearchChange", "onTag", "onOpen", "onClose", "onClear", "onPaste"])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$E.render = render$h;
script$E.__file = "themes/blank/templates/elements/TagsElement.vue";

var script$D = {
    name: 'TagsElement',
    render: script$E.render,
    components: {
      Multiselect: script$W,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          select: {
            tags: 'vf-multiselect-tags',
            tags_sm: 'vf-multiselect-tags-sm',
            tags_md: '',
            tags_lg: 'vf-multiselect-tags-lg',
            tag: 'vf-multiselect-tag',
            tag_sm: 'vf-multiselect-tag-sm',
            tag_md: '',
            tag_lg: 'vf-multiselect-tag-lg',
            tagDisabled: 'vf-multiselect-tag-disabled',
            tagDisabled_sm: '',
            tagDisabled_md: '',
            tagDisabled_lg: '',
            tagWrapper: 'vf-multiselect-tag-wrapper',
            tagWrapperBreak: 'vf-multiselect-tag-wrapper-break',
            tagRemove: 'vf-multiselect-tag-remove',
            tagRemove_sm: 'vf-multiselect-tag-remove-sm',
            tagRemove_md: '',
            tagRemove_lg: 'vf-multiselect-tag-remove-lg',
            tagRemoveIcon: 'vf-multiselect-tag-remove-icon',
            tagsSearchWrapper: 'vf-multiselect-tags-search-wrapper',
            tagsSearchWrapper_sm: '',
            tagsSearchWrapper_md: '',
            tagsSearchWrapper_lg: '',
            tagsSearch: 'vf-multiselect-tags-search',
            tagsSearch_sm: 'vf-multiselect-tags-search-sm',
            tagsSearch_md: '',
            tagsSearch_lg: 'vf-multiselect-tags-search-lg',
            tagsSearchCopy: 'vf-multiselect-tags-search-copy',

            container: 'vf-multiselect',
            container_enabled: '',
            container_disabled: 'vf-multiselect-disabled',
            container_success: 'vf-multiselect-success',
            container_danger: 'vf-multiselect-danger',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: '',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            containerActive_enabled: '',
            wrapper: 'vf-multiselect-wrapper',
            wrapper_sm: 'vf-multiselect-wrapper-sm',
            wrapper_md: '',
            wrapper_lg: 'vf-multiselect-wrapper-lg',
            search: 'vf-multiselect-search',
            search_sm: 'vf-multiselect-search-sm',
            search_md: '',
            search_lg: 'vf-multiselect-search-lg',
            placeholder: 'vf-multiselect-placeholder',
            placeholder_sm: 'vf-multiselect-placeholder-sm',
            placeholder_md: '',
            placeholder_lg: 'vf-multiselect-placeholder-lg',
            caret: 'vf-multiselect-caret',
            caret_sm: 'vf-multiselect-caret-sm',
            caret_md: '',
            caret_lg: 'vf-multiselect-caret-lg',
            caretOpen: 'vf-multiselect-caret-open',
            clear: 'vf-multiselect-clear',
            clear_sm: 'vf-multiselect-clear-sm',
            clear_md: '',
            clear_lg: 'vf-multiselect-clear-lg',
            clearIcon: 'vf-multiselect-clear-icon',
            spinner: 'vf-multiselect-spinner',
            spinner_sm: 'vf-multiselect-spinner-sm',
            spinner_md: '',
            spinner_lg: 'vf-multiselect-spinner-lg',
            infinite: 'vf-multiselect-infinite',
            infinite_sm: 'vf-multiselect-infinite-sm',
            infinite_md: '',
            infinite_lg: 'vf-multiselect-infinite-lg',
            infiniteSpinner: 'vf-multiselect-infinite-spinner',
            dropdown: 'vf-multiselect-dropdown',
            dropdown_sm: 'vf-multiselect-dropdown-sm',
            dropdown_md: '',
            dropdown_lg: 'vf-multiselect-dropdown-lg',
            dropdownTop: 'vf-multiselect-dropdown-top',
            dropdownTop_sm: 'vf-multiselect-dropdown-top-sm',
            dropdownTop_md: '',
            dropdownTop_lg: 'vf-multiselect-dropdown-top-lg',
            dropdownHidden: 'vf-multiselect-dropdown-hidden',
            options: 'vf-multiselect-options',
            optionsTop: 'vf-multiselect-options-top',
            group: 'vf-multiselect-group',
            groupLabel: 'vf-multiselect-group-label',
            groupLabel_sm: 'vf-multiselect-group-label-sm',
            groupLabel_md: '',
            groupLabel_lg: 'vf-multiselect-group-label-lg',
            groupLabelPointable: 'vf-multiselect-group-label-pointable',
            groupLabelPointed: 'vf-multiselect-group-label-pointed',
            groupLabelSelected: 'vf-multiselect-group-label-selected',
            groupLabelDisabled: 'vf-multiselect-group-label-disabled',
            groupLabelSelectedPointed: 'vf-multiselect-group-label-selected vf-multiselect-group-label-pointed',
            groupLabelSelectedDisabled: 'vf-multiselect-group-label-selected vf-multiselect-group-label-disabled',
            groupOptions: 'vf-multiselect-group-options',
            option: 'vf-multiselect-option',
            option_sm: 'vf-multiselect-option-sm',
            option_md: '',
            option_lg: 'vf-multiselect-option-lg',
            optionPointed: 'vf-multiselect-option-pointed',
            optionSelected: 'vf-multiselect-option-selected',
            optionDisabled: 'vf-multiselect-option-disabled',
            optionSelectedPointed: 'vf-multiselect-option-selected vf-multiselect-option-pointed',
            optionSelectedDisabled: 'vf-multiselect-option-selected vf-multiselect-option-disabled',
            noOptions: 'vf-multiselect-no-options',
            noOptions_sm: 'vf-multiselect-no-options-sm',
            noOptions_md: '',
            noOptions_lg: 'vf-multiselect-no-options-lg',
            noResults: 'vf-multiselect-no-results',
            noResults_sm: 'vf-multiselect-no-results-sm',
            noResults_md: '',
            noResults_lg: 'vf-multiselect-no-results-lg',
            fakeInput: 'vf-multiselect-fake-input',
            assist: 'vf-assistive-text',
            spacer: 'vf-multiselect-spacer',
            spacer_sm: 'vf-multiselect-spacer-sm',
            spacer_md: '',
            spacer_lg: 'vf-multiselect-spacer-lg',
            $container: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
              isDisabled ? classes.select.container_disabled : null,
              !isDisabled && !isSuccess && !isDanger ? classes.select.container_enabled : null,
              !isDisabled && isDanger ? classes.select.container_danger : null,
              !isDisabled && isSuccess ? classes.select.container_success : null,
            ]),
            $containerActive: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.containerActive,
              classes.select[`container_${Size}`],
              !isDisabled && !isSuccess && !isDanger ? classes.select.containerActive_enabled : null,
            ]),
            $wrapper: (classes, { Size }) => ([
              classes.select.wrapper,
              classes.select[`wrapper_${Size}`],
            ]),
            $search: (classes, { Size }) => ([
              classes.select.search,
              classes.select[`search_${Size}`],
            ]),
            $placeholder: (classes, { Size }) => ([
              classes.select.placeholder,
              classes.select[`placeholder_${Size}`],
            ]),
            $caret: (classes, { Size }) => ([
              classes.select.caret,
              classes.select[`caret_${Size}`],
            ]),
            $clear: (classes, { Size }) => ([
              classes.select.clear,
              classes.select[`clear_${Size}`],
            ]),
            $spinner: (classes, { Size }) => ([
              classes.select.spinner,
              classes.select[`spinner_${Size}`],
            ]),
            $infinite: (classes, { Size }) => ([
              classes.select.infinite,
              classes.select[`infinite_${Size}`],
            ]),
            $dropdown: (classes, { Size }) => ([
              classes.select.dropdown,
              classes.select[`dropdown_${Size}`],
            ]),
            $dropdownTop: (classes, { Size }) => ([
              classes.select.dropdownTop,
              classes.select[`dropdownTop_${Size}`],
            ]),
            $groupLabel: (classes, { Size }) => ([
              classes.select.groupLabel,
              classes.select[`groupLabel_${Size}`],
            ]),
            $option: (classes, { Size }) => ([
              classes.select.option,
              classes.select[`option_${Size}`],
            ]),
            $spacer: (classes, { Size }) => ([
              classes.select.spacer,
              classes.select[`spacer_${Size}`],
            ]),
            $noOptions: (classes, { Size }) => ([
              classes.select.noOptions,
              classes.select[`noOptions_${Size}`],
            ]),
            $noResults: (classes, { Size }) => ([
              classes.select.noResults,
              classes.select[`noResults_${Size}`],
            ]),
            
            $tags: (classes, { Size }) => ([
              classes.select.tags,
              classes.select[`tags_${Size}`],
            ]),
            $tag: (classes, { Size }) => ([
              classes.select.tag,
              classes.select[`tag_${Size}`],
            ]),
            $tagDisabled: (classes, { Size }) => ([
              classes.select.tagDisabled,
              classes.select[`tagDisabled_${Size}`],
            ]),
            $tagRemove: (classes, { Size }) => ([
              classes.select.tagRemove,
              classes.select[`tagRemove_${Size}`],
            ]),
            $tagsSearchWrapper: (classes, { Size }) => ([
              classes.select.tagsSearchWrapper,
              classes.select[`tagsSearchWrapper_${Size}`],
            ]),
            $tagsSearch: (classes, { Size }) => ([
              classes.select.tagsSearch,
              classes.select[`tagsSearch_${Size}`],
            ]),
          },
          $input: (classes, { isDisabled, Size, isDanger, isSuccess }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$j = "/* Some styles are contained in SelectElement.vue */\n\n.vf-multiselect-tags {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-wrap: wrap;\n  margin: var(--vf-space-tags) 0 0;\n  padding-left: var(--vf-py-input);\n  align-items: center;\n  min-width: 0;\n}\n\n.vf-multiselect-tags.vf-multiselect-tags-sm {\n  padding-left: var(--vf-py-input-sm);\n}\n\n.vf-multiselect-tags.vf-multiselect-tags-lg {\n  padding-left: var(--vf-py-input-lg);\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-tags,\n.vf-floating-wrapper ~ div .vf-multiselect-tags {\n  padding-left: var(--vf-px-input);\n  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-tags-sm,\n.vf-floating-wrapper ~ div .vf-multiselect-tags-sm {\n  padding-left: var(--vf-px-input-sm);\n  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;\n}\n\n.vf-floating-wrapper ~ .vf-multiselect-tags-lg,\n.vf-floating-wrapper ~ div .vf-multiselect-tags-lg {\n  padding-left: var(--vf-px-input-lg);\n  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;\n}\n\n.vf-multiselect-tag {\n  background: var(--vf-bg-tag);\n  color: var(--vf-color-tag);\n  border-style: solid;\n  border-width: var(--vf-border-width-tag);\n  border-color: var(--vf-border-color-tag);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  font-weight: 600;\n  padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);\n  border-radius: var(--vf-radius-tag);\n  margin-right: var(--vf-space-tags);\n  margin-bottom: var(--vf-space-tags);\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n.vf-multiselect-tag.vf-multiselect-tag-disabled {\n  padding-right: var(--vf-px-tag);\n  opacity: 0.5;\n}\n\n.vf-multiselect-tag.vf-multiselect-tag-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  border-radius: var(--vf-radius-tag-sm);\n  padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);\n}\n\n.vf-multiselect-tag.vf-multiselect-tag-sm.vf-multiselect-tag-disabled {\n  padding-right: var(--vf-px-tag-sm);\n}\n\n.vf-multiselect-tag.vf-multiselect-tag-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  border-radius: var(--vf-radius-tag-lg);\n  padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);\n}\n\n.vf-multiselect-tag.vf-multiselect-tag-lg.vf-multiselect-tag-disabled {\n  padding-right: var(--vf-px-tag-lg);\n}\n\n.vf-multiselect-tag-wrapper {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vf-multiselect-tag-wrapper-break {\n  white-space: normal;\n  word-break: break-all;\n}\n\n.vf-multiselect-tag-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem;\n  margin: 0 0.125rem;\n  border-radius: var(--vf-radius-tag);\n}\n\n.vf-multiselect-tag-remove:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.vf-multiselect-tag-remove.vf-multiselect-tag-remove-sm {\n  border-radius: var(--vf-radius-tag-sm);\n}\n\n.vf-multiselect-tag-remove.vf-multiselect-tag-remove-lg {\n  border-radius: var(--vf-radius-tag-lg);\n}\n\n.vf-multiselect-tag-remove-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-position: center;\n  -webkit-mask-position: center;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: currentColor;\n  display: inline-block;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n\n.vf-multiselect-tags-search-wrapper {\n  display: inline-block;\n  position: relative;\n  margin: 0 var(--vf-space-tags) var(--vf-space-tags);\n  flex-grow: 1;\n  flex-shrink: 1;\n  height: 100%;\n  max-width: 100%;\n}\n\n.vf-multiselect-tags-search-copy {\n  visibility: hidden;\n  white-space: pre-wrap;\n  display: inline-block;\n  height: 1px;\n  width: 100%;\n}\n\n.vf-multiselect-tags-search {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  padding: 0;\n  font-size: inherit;\n  font-family: inherit;\n  box-sizing: border-box;\n  width: 100%;\n  appearance: none;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background-color: transparent;\n  padding-right: 0.5rem;\n}\n\n.vf-multiselect-tags-search::-webkit-search-decoration, .vf-multiselect-tags-search::-webkit-search-cancel-button, .vf-multiselect-tags-search::-webkit-search-results-button, .vf-multiselect-tags-search::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n.vf-multiselect-tags-search.vf-multiselect-tags-search-sm {\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-multiselect-tags-search.vf-multiselect-tags-search-lg {\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n[dir=rtl] .vf-multiselect-tags {\n  padding-left: 0;\n  padding-right: var(--vf-py-input);\n}\n\n[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-sm {\n  padding-right: var(--vf-py-input-sm);\n}\n\n[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-lg {\n  padding-right: var(--vf-py-input-lg);\n}\n\n[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags,\n[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags {\n  padding-left: 0;\n  padding-right: var(--vf-px-input);\n}\n\n[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-sm,\n[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {\n  padding-left: 0;\n  padding-right: var(--vf-px-input-sm);\n}\n\n[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-lg,\n[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-lg {\n  padding-left: 0;\n  padding-right: var(--vf-px-input-lg);\n}\n\n[dir=rtl] .vf-multiselect-tag {\n  padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;\n  margin-right: 0;\n  margin-left: var(--vf-space-tags);\n}\n\n[dir=rtl] .vf-multiselect-tag.is-disabled {\n  padding-left: ar(--vf-px-tag);\n}";
styleInject(css_248z$j);

script$D.__file = "themes/vueform/templates/elements/TagsElement.vue";

var script$C = {
    name: 'TextareaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

const _hoisted_1$e = ["value", "name", "id", "placeholder", "disabled", "readonly", "rows", "data-autogrow"];

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_ElementLoader = resolveComponent("ElementLoader");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.inputContainer)
      }, [
        (_ctx.hasAddonBefore)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-before']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasAddonAfter)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-after']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasFloating && !_ctx.empty)
          ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8 /* PROPS */, ["visible"]))
          : createCommentVNode("v-if", true),
        withDirectives(createVNode(_component_ElementLoader, null, null, 512 /* NEED_PATCH */), [
          [vShow, _ctx.pending]
        ]),
        createElementVNode("textarea", mergeProps({
          value: _ctx.model,
          name: _ctx.name,
          id: _ctx.fieldId,
          class: _ctx.classes.input,
          placeholder: _ctx.Placeholder,
          disabled: _ctx.isDisabled,
          readonly: _ctx.readonly,
          rows: _ctx.rows
        }, {
            ..._ctx.attrs,
            ..._ctx.aria,
          }, {
          "data-autogrow": _ctx.autogrow || undefined,
          onKeydown: _cache[0] || (_cache[0] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args))),
          onKeyup: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args))),
          onKeypress: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
          onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.handleInput && _ctx.handleInput(...args))),
          onBlur: _cache[4] || (_cache[4] = (...args) => (_ctx.handleBlur && _ctx.handleBlur(...args))),
          ref: "input"
        }), null, 16 /* FULL_PROPS */, _hoisted_1$e)
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$C.render = render$g;
script$C.__file = "themes/blank/templates/elements/TextareaElement.vue";

var script$B = {
    name: 'TextareaElement',
    render: script$C.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group vf-input-group-textarea',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    },
  };

var css_248z$i = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$i);

script$B.__file = "themes/vueform/templates/elements/TextareaElement.vue";

var script$A = {
    name: 'TextElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  };

const _hoisted_1$d = ["value", "type", "name", "id", "placeholder", "autocomplete", "disabled", "readonly"];

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementAddon = resolveComponent("ElementAddon");
  const _component_ElementLabelFloating = resolveComponent("ElementLabelFloating");
  const _component_ElementLoader = resolveComponent("ElementLoader");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.inputContainer)
      }, [
        (_ctx.hasAddonBefore)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 0,
              type: "before"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-before", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-before']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasAddonAfter)
          ? (openBlock(), createBlock(_component_ElementAddon, {
              key: 1,
              type: "after"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "addon-after", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots['addon-after']), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
                ])
              ]),
              _: 3 /* FORWARDED */
            }))
          : createCommentVNode("v-if", true),
        (_ctx.hasFloating && !_ctx.empty)
          ? (openBlock(), createBlock(_component_ElementLabelFloating, {
              key: 2,
              visible: !_ctx.empty
            }, null, 8 /* PROPS */, ["visible"]))
          : createCommentVNode("v-if", true),
        (_ctx.isLoading)
          ? (openBlock(), createBlock(_component_ElementLoader, { key: 3 }))
          : createCommentVNode("v-if", true),
        createElementVNode("input", mergeProps({
          value: _ctx.model,
          type: _ctx.inputType,
          name: _ctx.name,
          id: _ctx.fieldId,
          class: _ctx.classes.input,
          placeholder: _ctx.Placeholder,
          autocomplete: _ctx.autocomplete,
          disabled: _ctx.isDisabled,
          readonly: _ctx.readonly
        }, {
            ..._ctx.attrs,
            ..._ctx.aria,
          }, {
          onKeydown: _cache[0] || (_cache[0] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args))),
          onKeyup: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args))),
          onKeypress: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
          onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.handleInput && _ctx.handleInput(...args))),
          onSelect: _cache[4] || (_cache[4] = (...args) => (_ctx.handleInput && _ctx.handleInput(...args))),
          onBlur: _cache[5] || (_cache[5] = (...args) => (_ctx.handleBlur && _ctx.handleBlur(...args))),
          ref: "input"
        }), null, 16 /* FULL_PROPS */, _hoisted_1$d)
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$A.render = render$f;
script$A.__file = "themes/blank/templates/elements/TextElement.vue";

var script$z = {
    name: 'TextElement',
    render: script$A.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    },
  };

var css_248z$h = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$h);

script$z.__file = "themes/vueform/templates/elements/TextElement.vue";

function useValue$1 (props, context, dependencies)
{
  const { value, modelValue, falseValue, trueValue, disabled } = toRefs(props);

  /* istanbul ignore next */
  const externalValue = modelValue && modelValue.value !== undefined ? modelValue : value;

  // ============== COMPUTED ==============

  const checked = computed(() => {
    return externalValue.value === trueValue.value
  });

  // =============== METHODS ==============

  // no export
  const update = (val) => {
    context.emit('input', val);
    context.emit('update:modelValue', val);
    context.emit('change', val);
  };

  const check = () => {
    update(trueValue.value);
  };

  const uncheck = () => {
    update(falseValue.value);
  };

  const handleInput = (val) => {
    update(val.target.checked ? trueValue.value : falseValue.value);
  };

  const handleClick = () => {
    if (disabled.value) {
      return
    }

    checked.value ? uncheck() : check();
  };

  // ================ HOOKS ===============

  if ([null, undefined, false, 0, '0', 'off'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    uncheck();
  }

  if ([true, 1, '1', 'on'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    check();
  }

  return {
    externalValue,
    checked,
    update,
    check,
    uncheck,
    handleInput,
    handleClick,
  }
}

function useValue (props, context, dependencies)
{
  const { trueValue, falseValue, onLabel, offLabel } = toRefs(props);
  
  // ============ DEPENDENCIES ============

  const checked = dependencies.checked;
  const update = dependencies.update;

  // ============== COMPUTED ==============

  const label = computed(() => {
    let label = checked.value ? onLabel.value : offLabel.value;

    if (!label) {
      label = '&nbsp;';
    }

    return label
  });

  // =============== METHODS ==============

  const toggle = () => {
    update(checked.value ? falseValue.value : trueValue.value);
  };

  const on = () => {
    update(trueValue.value);
  };

  const off = () => {
    update(falseValue.value);
  };

  return {
    label,
    toggle,
    on,
    off,
  }
}

function useClasses (props, context, dependencies)
{
  const refs = toRefs(props);
  const disabled = refs.disabled;

  // ============ DEPENDENCIES ============

  const checked = dependencies.checked;

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    container: 'toggle-container',
    toggle: 'toggle',
    toggleOn: 'toggle-on',
    toggleOff: 'toggle-off',
    toggleOnDisabled: 'toggle-on-disabled',
    toggleOffDisabled: 'toggle-off-disabled',
    handle: 'toggle-handle',
    handleOn: 'toggle-handle-on',
    handleOff: 'toggle-handle-off',
    handleOnDisabled: 'toggle-handle-on-disabled',
    handleOffDisabled: 'toggle-handle-off-disabled',
    label: 'toggle-label',
    ...refs.classes.value,
  }));

  const classList = computed(() => {
    return {
      container: classes.value.container,
      toggle: [
        classes.value.toggle,
        disabled.value
          ? (checked.value ? classes.value.toggleOnDisabled : classes.value.toggleOffDisabled)
          : (checked.value ? classes.value.toggleOn : classes.value.toggleOff)
      ],
      handle: [
        classes.value.handle,
        disabled.value
          ? (checked.value ? classes.value.handleOnDisabled : classes.value.handleOffDisabled)
          : (checked.value ? classes.value.handleOn : classes.value.handleOff)
      ],
      label: classes.value.label,
    }
  });

  return {
    classList,
  }
}

function useStyle (props, context, dependencies)
{
  const { disabled } = toRefs(props);

  // ============ DEPENDENCIES ============

  const check = dependencies.check;
  const uncheck = dependencies.uncheck;
  const checked = dependencies.checked;

  // =============== METHODS ==============

  const handleSpace = () => {
    if (disabled.value) {
      return
    }
    
    checked.value ? uncheck() : check();
  };

  return {
    handleSpace,
  }
}

/* istanbul ignore next */
  const valueProps = {
    value: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
    modelValue: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
  };

  var script$y = {
    name: 'Toggle',
    emits: [
      'input', 'update:modelValue', 'change',
    ],
    props: {
      ...valueProps,
      id: {
        type: [String, Number],
        required: false,
        default: 'toggle'
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'toggle'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      falseValue: {
        type: [String, Number, Boolean],
        required: false,
        default: false,
      },
      trueValue: {
        type: [String, Number, Boolean],
        required: false,
        default: true,
      },
      onLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      offLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      labelledby: {
        type: String,
        required: false,
      },
      describedby: {
        type: String,
        required: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, context)
    {
      const value = useValue$1(props, context);

      const toggle = useValue(props, context, {
        checked: value.checked,
        update: value.update,
      });

      const classes = useClasses(props, context, {
        checked: value.checked,
      });

      const keyboard = useStyle(props, context, {
        check: value.check,
        uncheck: value.uncheck,
        checked: value.checked,
      });

      return {
        ...value,
        ...classes,
        ...toggle,
        ...keyboard,
      }
    }
  };

const _hoisted_1$c = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"];
const _hoisted_2$9 = ["id", "name", "value", "checked", "disabled"];
const _hoisted_3$7 = ["innerHTML"];
const _hoisted_4$2 = ["checked"];

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classList.container,
    tabindex: $props.disabled ? undefined : 0,
    "aria-checked": _ctx.checked,
    "aria-describedby": $props.describedby,
    "aria-labelledby": $props.labelledby,
    role: "switch"
  }, $props.aria, {
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => (_ctx.handleSpace && _ctx.handleSpace(...args)), ["prevent"]), ["space"]))
  }), [
    withDirectives(createElementVNode("input", {
      type: "checkbox",
      id: $props.id,
      name: $props.name,
      value: $props.trueValue,
      checked: _ctx.checked,
      disabled: $props.disabled
    }, null, 8 /* PROPS */, _hoisted_2$9), [
      [vShow, false]
    ]),
    createElementVNode("div", {
      class: normalizeClass(_ctx.classList.toggle),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
    }, [
      createElementVNode("span", {
        class: normalizeClass(_ctx.classList.handle)
      }, null, 2 /* CLASS */),
      renderSlot(_ctx.$slots, "label", {
        checked: _ctx.checked,
        classList: _ctx.classList
      }, () => [
        createElementVNode("span", {
          class: normalizeClass(_ctx.classList.label),
          innerHTML: _ctx.label
        }, null, 10 /* CLASS, PROPS */, _hoisted_3$7)
      ]),
      ($props.required)
        ? (openBlock(), createElementBlock("input", {
            key: 0,
            type: "checkbox",
            style: {
        appearance: 'none',
        height: '1px',
        margin: '0',
        padding: '0',
        fontSize: '0',
        background: 'transparent',
        position: 'absolute',
        width: '100%',
        bottom: '0',
        outline: 'none',
      },
            checked: _ctx.checked,
            "aria-hidden": "true",
            tabindex: "-1",
            required: ""
          }, null, 8 /* PROPS */, _hoisted_4$2))
        : createCommentVNode("v-if", true)
    ], 2 /* CLASS */)
  ], 16 /* FULL_PROPS */, _hoisted_1$c))
}

script$y.render = render$e;
script$y.__file = "node_modules/@vueform/toggle/src/Toggle.vue";

var script$x = {
    name: 'ToggleElement',
    components: {
      Toggle: script$y,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          toggle: {
            container: '',
            toggle: '',
            toggleOn: '',
            toggleOff: '',
            toggleOnDisabled: '',
            toggleOffDisabled: '',
            handle: '',
            handleOn: '',
            handleOff: '',
            handleOnDisabled: '',
            handleOffDisabled: '',
            label: '',
          },
          text: '',
        }
      }
    }
  };

const _hoisted_1$b = ["innerHTML"];

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toggle = resolveComponent("Toggle");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        createCommentVNode(" @vueform/toggle component "),
        createVNode(_component_Toggle, mergeProps({
          value: _ctx.value,
          modelValue: _ctx.value
        }, _ctx.fieldOptions, {
          classes: _ctx.classes.toggle,
          name: _ctx.name,
          id: _ctx.fieldId,
          aria: _ctx.aria,
          onInput: _ctx.handleChange,
          ref: "input"
        }), null, 16 /* FULL_PROPS */, ["value", "modelValue", "classes", "name", "id", "aria", "onInput"]),
        (_ctx.Text)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classes.text),
              innerHTML: _ctx.Text
            }, null, 10 /* CLASS, PROPS */, _hoisted_1$b))
          : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(_ctx.classes.text)
            }, [
              renderSlot(_ctx.$slots, "default", { el$: _ctx.el$ }, () => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.fieldSlots.default), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
              ])
            ], 2 /* CLASS */))
      ], 2 /* CLASS */)
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$x.render = render$d;
script$x.__file = "themes/blank/templates/elements/ToggleElement.vue";

var script$w = {
    name: 'ToggleElement',
    render: script$x.render,
    components: {
      Toggle: script$y,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-contains-link',
          wrapper: 'vf-toggle-wrapper',
          wrapper_left: 'vf-toggle-wrapper-left',
          wrapper_right: 'vf-toggle-wrapper-right',
          text: 'vf-toggle-text',
          text_sm: 'vf-toggle-text-sm',
          text_md: '',
          text_lg: 'vf-toggle-text-lg',
          text_left: 'vf-toggle-text-left',
          text_right: 'vf-toggle-text-right',
          toggle: {
            container: 'vf-toggle-container',
            container_enabled: '',
            container_disabled: 'vf-toggle-container-disabled',
            toggle: 'vf-toggle',
            toggle_sm: 'vf-toggle-sm',
            toggle_md: '',
            toggle_lg: 'vf-toggle-lg',
            toggleOn: 'vf-toggle-on',
            toggleOff: 'vf-toggle-off',
            toggleOnDisabled: 'vf-toggle-on-disabled',
            toggleOffDisabled: 'vf-toggle-off-disabled',
            handle: 'vf-toggle-handle',
            handle_sm: 'vf-toggle-handle-sm',
            handle_md: '',
            handle_lg: 'vf-toggle-handle-lg',
            handleOn: 'vf-toggle-handle-on',
            handleOff: 'vf-toggle-handle-off',
            handleOnDisabled: 'vf-toggle-handle-on-disabled',
            handleOffDisabled: 'vf-toggle-handle-off-disabled',
            label: 'vf-toggle-label',
            label_sm: 'vf-toggle-label-sm',
            label_md: '',
            label_lg: 'vf-toggle-label-lg',
            $container: (classes, { Size, isDisabled }) => ([
              classes.toggle.container,
              classes.toggle[`container_${Size}`],
              !isDisabled ? classes.toggle.container_enabled : classes.toggle.container_disabled,
            ]),
            $toggle: (classes, { Size }) => ([
              classes.toggle.toggle,
              classes.toggle[`toggle_${Size}`],
            ]),
            $handle: (classes, { Size }) => ([
              classes.toggle.handle,
              classes.toggle[`handle_${Size}`],
            ]),
            $label: (classes, { Size }) => ([
              classes.toggle.label,
              classes.toggle[`label_${Size}`],
            ]),
          },
          $text: (classes, { Size, align }) => ([
            classes.text,
            classes[`text_${Size}`],
            align === 'left' ? classes.text_left : null,
            align === 'right' ? classes.text_right : null,
          ]),
          $wrapper: (classes, { align }) => ([
            classes.wrapper,
            align === 'left' ? classes.wrapper_left : null,
            align === 'right' ? classes.wrapper_right : null,
          ]),
        }
      }
    }
  };

var css_248z$g = ".vf-toggle-wrapper {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.vf-toggle-text {\n  margin-left: var(--vf-space-checkbox);\n}\n\n.vf-toggle-text.vf-toggle-text-sm {\n  margin-left: var(--vf-space-checkbox-sm);\n}\n\n.vf-toggle-text.vf-toggle-text-lg {\n  margin-left: var(--vf-space-checkbox-lg);\n}\n\n/* @vueform/toggle styles */\n\n.vf-toggle-container {\n  display: inline-block;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  border-radius: 9999px;\n  transition: box-shadow 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  box-shadow: var(--vf-shadow-handles);\n}\n\n.vf-toggle-container:hover:not(.vf-toggle-container-disabled) {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n\n.vf-toggle-container:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-toggle-container.vf-toggle-container-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.vf-toggle {\n  display: flex;\n  border-radius: 999px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s all;\n  align-items: center;\n  box-sizing: content-box;\n  border-width: var(--vf-border-width-toggle);\n  border-style: solid;\n  font-size: 0.75rem;\n  width: var(--vf-toggle-width);\n  height: var(--vf-toggle-height);\n  line-height: 1;\n}\n\n.vf-toggle.vf-toggle-sm {\n  width: var(--vf-toggle-width-sm);\n  height: var(--vf-toggle-height-sm);\n  font-size: 0.75rem;\n}\n\n.vf-toggle.vf-toggle-lg {\n  width: var(--vf-toggle-width-lg);\n  height: var(--vf-toggle-height-lg);\n  font-size: 0.8125rem;\n}\n\n.vf-toggle-on {\n  background: var(--vf-primary);\n  border-color: var(--vf-primary);\n  justify-content: flex-start;\n  color: var(--vf-color-on-primary);\n}\n\n.vf-toggle-off {\n  background: var(--vf-bg-passive);\n  border-color: var(--vf-bg-passive);\n  justify-content: flex-end;\n  color: var(--vf-color-passive);\n}\n\n.vf-toggle-on-disabled {\n  background: var(--vf-primary);\n  border-color: var(--vf-primary);\n  justify-content: flex-start;\n  color: var(--vf-color-on-primary);\n}\n\n.vf-toggle-off-disabled {\n  background: var(--vf-bg-passive);\n  border-color: var(--vf-bg-passive);\n  justify-content: flex-end;\n  color: var(--vf-color-passive);\n}\n\n.vf-toggle-handle {\n  display: inline-block;\n  background: var(--vf-bg-toggle-handle);\n  width: var(--vf-toggle-height);\n  height: var(--vf-toggle-height);\n  top: 0;\n  border-radius: 50%;\n  position: absolute;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.vf-toggle-handle.vf-toggle-handle-sm {\n  width: var(--vf-toggle-height-sm);\n  height: var(--vf-toggle-height-sm);\n}\n\n.vf-toggle-handle.vf-toggle-handle-lg {\n  width: var(--vf-toggle-height-lg);\n  height: var(--vf-toggle-height-lg);\n}\n\n.vf-toggle-handle-on {\n  left: 100%;\n  transform: translateX(-100%);\n}\n\n.vf-toggle-handle-off {\n  left: 0%;\n}\n\n.vf-toggle-handle-on-disabled {\n  left: 100%;\n  transform: translateX(-100%);\n  background: var(--vf-bg-toggle-handle);\n}\n\n.vf-toggle-handle-off-disabled {\n  left: 0%;\n  background: var(--vf-bg-toggle-handle);\n}\n\n.vf-toggle-label {\n  text-align: center;\n  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));\n  box-sizing: border-box;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.vf-toggle-label.vf-toggle-label-sm {\n  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));\n}\n\n.vf-toggle-label.vf-toggle-label-lg {\n  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));\n}\n\nbody:not([dir=rtl]) .vf-toggle-wrapper-right {\n  justify-content: flex-end;\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox);\n  order: -1;\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-sm {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-sm);\n}\n\nbody:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-lg {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-lg);\n}\n\nbody[dir=rtl] .vf-toggle-wrapper-left {\n  justify-content: flex-end;\n}\n\nbody[dir=rtl] .vf-toggle-text {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-sm {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-sm);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-lg {\n  margin-left: 0;\n  margin-right: var(--vf-space-checkbox-lg);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox);\n  order: -1;\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-sm {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox-sm);\n}\n\nbody[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-lg {\n  margin-right: 0;\n  margin-left: var(--vf-space-checkbox-lg);\n}";
styleInject(css_248z$g);

script$w.__file = "themes/vueform/templates/elements/ToggleElement.vue";

var script$v = {
    name: 'EditorElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EditorWrapper = resolveComponent("EditorWrapper");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementLayout), { ref: "container" }, createSlots({
    element: withCtx(() => [
      createVNode(_component_EditorWrapper, {
        value: _ctx.model,
        placeholder: _ctx.Placeholder,
        id: _ctx.fieldId,
        accept: _ctx.accept,
        "accept-mimes": _ctx.acceptMimes,
        endpoint: _ctx.editorEndpoint,
        method: _ctx.editorMethod,
        disabled: _ctx.isDisabled,
        "hide-tools": _ctx.hideTools,
        class: normalizeClass(_ctx.classes.input),
        attrs: _ctx.aria,
        onInput: _ctx.handleInput,
        onAlert: _ctx.handleAlert,
        onError: _ctx.handleError,
        onBlur: _ctx.handleBlur,
        ref: "input"
      }, null, 8 /* PROPS */, ["value", "placeholder", "id", "accept", "accept-mimes", "endpoint", "method", "disabled", "hide-tools", "class", "attrs", "onInput", "onAlert", "onError", "onBlur"])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    renderList(_ctx.elementSlots, (component, slot) => {
      return {
        name: slot,
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, slot, { el$: _ctx.el$ }, () => [
            (openBlock(), createBlock(resolveDynamicComponent(component), { el$: _ctx.el$ }, null, 8 /* PROPS */, ["el$"]))
          ])
        ])
      }
    })
  ]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */))
}

script$v.render = render$c;
script$v.__file = "themes/blank/templates/elements/EditorElement.vue";

var script$u = {
    name: 'EditorElement',
    render: script$v.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-editor',
          input_enabled: '',
          input_disabled: 'vf-editor-disabled',
          input_success: 'vf-editor-success',
          input_danger: 'vf-editor-danger',
          input_focused: 'vf-editor-focused',
          input_sm: 'vf-editor-sm',
          input_md: '',
          input_lg: 'vf-editor-lg',
          $input: (classes, { isDisabled, focused, Size, isSuccess, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_default : null,
            !isDisabled && focused ? classes.input_focused : null,
            !isDisabled && isSuccess ? classes.input_success : null,
            !isDisabled && isDanger ? classes.input_danger : null,
          ]),
        }
      }
    }
  };

var css_248z$f = ".vf-editor {\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  border-style: solid;\n  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background-color: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  border-color: var(--vf-border-color-input);\n  box-shadow: var(--vf-shadow-input);\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-radius: var(--vf-radius-input);\n}\n\n.vf-editor.vf-editor-disabled {\n  background-color: var(--vf-bg-disabled);\n  color: var(--vf-color-disabled);\n}\n\n.vf-editor.vf-editor-success {\n  background-color: var(--vf-bg-input-success);\n  color: var(--vf-color-input-success);\n  border-color: var(--vf-border-color-input-success);\n}\n\n.vf-editor.vf-editor-danger {\n  background-color: var(--vf-bg-input-danger);\n  color: var(--vf-color-input-danger);\n  border-color: var(--vf-border-color-input-danger);\n}\n\n.vf-editor:hover:not(.vf-editor-disabled) {\n  box-shadow: var(--vf-shadow-input-hover);\n}\n\n.vf-editor:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n  border-color: var(--vf-border-color-input-hover);\n}\n\n.vf-editor.vf-editor-focused {\n  box-shadow: var(--vf-shadow-input-focus);\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n  border-color: var(--vf-border-color-input-focus);\n}\n\n.vf-editor.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger), .vf-editor.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {\n  background-color: var(--vf-bg-input-focus);\n  color: var(--vf-color-input-focus);\n}";
styleInject(css_248z$f);

script$u.__file = "themes/vueform/templates/elements/EditorElement.vue";

var script$t = {
    name: 'TTextareaElement',
    render: script$C.render,
    staticRenderFns: script$C.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

script$t.__file = "themes/blank/templates/elements/TTextareaElement.vue";

var script$s = {
    name: 'TTextareaElement',
    render: script$t.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group vf-input-group-textarea',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$e = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$e);

script$s.__file = "themes/vueform/templates/elements/TTextareaElement.vue";

var script$r = {
    name: 'TTextElement',
    render: script$A.render,
    staticRenderFns: script$A.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    },
  };

script$r.__file = "themes/blank/templates/elements/TTextElement.vue";

var script$q = {
    name: 'TTextElement',
    render: script$r.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  };

var css_248z$d = "/* Some styles are contained in Vueform.vue */";
styleInject(css_248z$d);

script$q.__file = "themes/vueform/templates/elements/TTextElement.vue";

var script$p = {
    name: 'TEditorElement',
    render: script$v.render,
    staticRenderFns: script$v.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  };

script$p.__file = "themes/blank/templates/elements/TEditorElement.vue";

var script$o = {
    name: 'TEditorElement',
    render: script$p.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-editor',
          input_enabled: '',
          input_disabled: 'vf-editor-disabled',
          input_success: 'vf-editor-success',
          input_danger: 'vf-editor-danger',
          input_focused: 'vf-editor-focused',
          input_focused_success: 'vf-editor-focused-success',
          input_focused_danger: 'vf-editor-focused-danger',
          input_sm: 'vf-editor-sm',
          input_md: '',
          input_lg: 'vf-editor-lg',
          $input: (classes, { isDisabled, focused, Size, isSuccess, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
            focused && !isDanger && !isSuccess ? classes.input_focused : null,
            focused && isSuccess ? classes.input_focused_success : null,
            focused && isDanger ? classes.input_focused_danger : null,
          ]),
        }
      }
    }
  };

var css_248z$c = "/* Some styles are contained in EditorElement.vue */";
styleInject(css_248z$c);

script$o.__file = "themes/vueform/templates/elements/TEditorElement.vue";

var script$n = {
    name: 'CheckboxgroupCheckbox',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$a = ["value", "name", "id", "disabled", "aria-label"];
const _hoisted_2$8 = ["innerHTML"];

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      withDirectives(createElementVNode("input", mergeProps({
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.model) = $event))
      }, _ctx.attrs, {
        value: _ctx.value,
        class: _ctx.classes.input,
        name: _ctx.name,
        id: _ctx.id,
        disabled: _ctx.isDisabled,
        "aria-label": _ctx.item.label
      }), null, 16 /* FULL_PROPS */, _hoisted_1$a), [
        [vModelCheckbox, _ctx.el$.model]
      ]),
      createElementVNode("span", {
        class: normalizeClass(_ctx.classes.text),
        innerHTML: _ctx.item.label
      }, null, 10 /* CLASS, PROPS */, _hoisted_2$8)
    ])
  ], 2 /* CLASS */))
}

script$n.render = render$b;
script$n.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox.vue";

var script$m = {
    name: 'CheckboxgroupCheckbox',
    render: script$n.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-container',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text: 'vf-checkbox-text',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
        }
      }
    }
  };

var css_248z$b = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */";
styleInject(css_248z$b);

script$m.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox.vue";

var script$l = {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$9 = ["aria-checked"];
const _hoisted_2$7 = ["value", "id", "name", "disabled"];
const _hoisted_3$6 = ["innerHTML"];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", mergeProps(_ctx.attrs, {
    class: _ctx.classes.container,
    tabindex: "0",
    role: "checkbox",
    "aria-checked": _ctx.checked,
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers($event => (_ctx.el$.toggle(_ctx.value)), ["prevent"]), ["space"])),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)))
  }), [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.model) = $event)),
          value: _ctx.value,
          id: _ctx.id,
          class: normalizeClass(_ctx.classes.input),
          name: _ctx.name,
          disabled: _ctx.isDisabled
        }, null, 10 /* CLASS, PROPS */, _hoisted_2$7), [
          [vModelCheckbox, _ctx.el$.model]
        ]),
        createElementVNode("span", {
          class: normalizeClass(_ctx.classes.text),
          innerHTML: `${_ctx.item.label}`
        }, null, 10 /* CLASS, PROPS */, _hoisted_3$6)
      ], 2 /* CLASS */)
    ])
  ], 16 /* FULL_PROPS */, _hoisted_1$9))
}

script$l.render = render$a;
script$l.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";

var script$k = {
    name: 'CheckboxgroupCheckbox_tabs',
    render: script$l.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-tabs-container',
          wrapper: 'vf-checkbox-tabs',
          wrapper_not_last: 'vf-checkbox-tabs-not-last',
          wrapper_first: 'vf-checkbox-tabs-first',
          wrapper_first_sm: 'vf-checkbox-tabs-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-checkbox-tabs-first-lg',
          wrapper_last: 'vf-checkbox-tabs-last',
          wrapper_last_sm: 'vf-checkbox-tabs-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-checkbox-tabs-last-lg',
          wrapper_selected: 'vf-checkbox-tabs-selected',
          wrapper_unselected: 'vf-checkbox-tabs-unselected',
          wrapper_disabled: 'vf-checkbox-tabs-disabled',
          wrapper_sm: 'vf-checkbox-tabs-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-tabs-lg',
          input: 'vf-checkbox-tabs-input',
          text: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === 0 ? classes[`wrapper_first_${Size}`] : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            index === Object.keys(items).length - 1 ? classes[`wrapper_last_${Size}`] : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  };

var css_248z$a = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */\n\n.vf-checkbox-tabs-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n}\n\n.vf-checkbox-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);\n  width: 100%;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-not-last {\n  border-right: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first {\n  border-radius: var(--vf-radius-input);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-selected {\n  background-color: var(--vf-primary);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: var(--vf-color-on-primary);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-unselected {\n  border-color: var(--vf-border-color-input);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-disabled {\n  opacity: 0.5;\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-sm {\n  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-checkbox-tabs.vf-checkbox-tabs-lg {\n  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-checkbox-tabs-input {\n  display: none;\n}";
styleInject(css_248z$a);

script$k.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";

var script$j = {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text_wrapper: '',
          text: '',
          description: '',
        }
      }
    }
  };

const _hoisted_1$8 = ["value", "name", "id", "disabled"];
const _hoisted_2$6 = ["innerHTML"];
const _hoisted_3$5 = ["innerHTML"];

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", mergeProps({
          type: "checkbox",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.model) = $event))
        }, _ctx.attrs, {
          value: _ctx.value,
          class: _ctx.classes.input,
          name: _ctx.name,
          id: _ctx.id,
          disabled: _ctx.isDisabled
        }), null, 16 /* FULL_PROPS */, _hoisted_1$8), [
          [vModelCheckbox, _ctx.el$.model]
        ]),
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.text_wrapper)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.text),
            innerHTML: _ctx.item.label
          }, null, 10 /* CLASS, PROPS */, _hoisted_2$6),
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.description),
            innerHTML: _ctx.item.description
          }, null, 10 /* CLASS, PROPS */, _hoisted_3$5)
        ], 2 /* CLASS */)
      ], 2 /* CLASS */)
    ])
  ], 2 /* CLASS */))
}

script$j.render = render$9;
script$j.__file = "themes/blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";

var script$i = {
    name: 'CheckboxgroupCheckbox_blocks',
    render: script$j.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-blocks-container',
          container_sm: 'vf-checkbox-blocks-container-sm',
          container_md: '',
          container_lg: 'vf-checkbox-blocks-container-lg',
          wrapper: 'vf-checkbox-blocks',
          wrapper_not_last: 'vf-checkbox-blocks-not-last',
          wrapper_first: 'vf-checkbox-blocks-first',
          wrapper_first_sm: 'vf-checkbox-blocks-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-checkbox-blocks-first-lg',
          wrapper_last: 'vf-checkbox-blocks-last',
          wrapper_last_sm: 'vf-checkbox-blocks-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-checkbox-blocks-last-lg',
          wrapper_selected: 'vf-checkbox-blocks-selected',
          wrapper_unselected: 'vf-checkbox-blocks-unselected',
          wrapper_disabled: 'vf-checkbox-blocks-disabled',
          wrapper_sm: 'vf-checkbox-blocks-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-blocks-lg',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text_wrapper: 'vf-checkbox-blocks-text-wrapper',
          text: 'vf-checkbox-blocks-text',
          description: 'vf-checkbox-blocks-description',
          description_sm: 'vf-checkbox-blocks-description-sm',
          description_md: '',
          description_lg: 'vf-checkbox-blocks-description-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === 0 ? classes[`wrapper_first_${Size}`] : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            index === Object.keys(items).length - 1 ? classes[`wrapper_last_${Size}`] : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ]),
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
          $description: (classes, { Size }) => ([
            classes.description,
            classes[`description_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$9 = "/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */\n\n.vf-checkbox-blocks-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-checkbox-blocks-container .vf-checkbox {\n  margin-top: 0;\n}\n\n.vf-checkbox-blocks-container.vf-checkbox-blocks-container-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-checkbox-blocks-container.vf-checkbox-blocks-container-lg {\n  border-radius: var(--vf-radius-large-lg);\n}\n\n.vf-checkbox-blocks {\n  display: flex;\n  align-items: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  width: 100%;\n  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n  background: var(--vf-bg-input);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-not-last {\n  border-bottom: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first {\n  border-radius: var(--vf-radius-large);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last {\n  border-radius: var(--vf-radius-large);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-selected {\n  background-color: var(--vf-bg-selected);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-disabled {\n  opacity: 0.5;\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-sm {\n  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-checkbox-blocks.vf-checkbox-blocks-lg {\n  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-checkbox-blocks-text-wrapper {\n  margin-left: 0.5rem;\n}\n\n.vf-checkbox-blocks-description {\n  color: var(--vf-color-muted);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  margin-top: -0.125rem;\n}\n\n.vf-checkbox-blocks-description.vf-checkbox-blocks-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: -0.125rem;\n}\n\n.vf-checkbox-blocks-description.vf-checkbox-blocks-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  margin-top: -0.125rem;\n}";
styleInject(css_248z$9);

script$i.__file = "themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";

var script$h = {
    name: 'DragAndDrop',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          icon: '',
          title: '',
          description: '',
        }
      }
    }
  };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
    ref: "area"
  }, [
    createElementVNode("span", {
      class: normalizeClass(_ctx.classes.icon)
    }, null, 2 /* CLASS */),
    (_ctx.title)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(_ctx.classes.title)
        }, toDisplayString(_ctx.title), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.description)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(_ctx.classes.description)
        }, toDisplayString(_ctx.description), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$h.render = render$8;
script$h.__file = "themes/blank/templates/elements/partials/DragAndDrop.vue";

var script$g = {
    name: 'DragAndDrop',
    render: script$h.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-dnd',
          container_sm: 'vf-dnd-sm',
          container_md: '',
          container_lg: 'vf-dnd-lg',
          container_inactive: '',
          container_active: 'is-active',
          container_enabled: '',
          container_disabled: 'is-disabled',
          icon: 'vf-dnd-icon-upload',
          title: 'vf-dnd-title',
          description: 'vf-dnd-description',
          $container: (classes, { dragging, disabled, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            dragging ? classes.container_active : classes.container_inactive,
            disabled ? classes.container_disabled : classes.container_enabled,
          ]),
        }
      }
    }
  };

var css_248z$8 = ".vf-dnd {\n  background-color: #FFFFFF;\n  transition: 0.3s;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-style: dashed;\n  border-color: var(--vf-border-color-input);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  font-size: inherit;\n  box-sizing: border-box;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  transition: 0.3s;\n  background-color: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  border-radius: var(--vf-radius-large);\n  box-shadow: var(--vf-shadow-input);\n  text-align: center;\n}\n\n.vf-dnd.vf-dnd-sm {\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-dnd.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.vf-dnd.is-active {\n  border-color: var(--vf-primary);\n}\n\n.vf-dnd-icon-upload {\n  display: flex;\n  width: 2.25rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  background: var(--vf-primary);\n  mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  mask-size: cover;\n  -webkit-mask-size: cover;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n}\n\n.vf-dnd-title {\n  font-weight: 600;\n  margin-top: 0.75rem;\n}";
styleInject(css_248z$8);

script$g.__file = "themes/vueform/templates/elements/partials/DragAndDrop.vue";

var script$f = {
    name: 'FilePreview',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          file: '',
          filenameLink: '',
          filenameStatic: '',
          actions: '',
          percent: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
          assistiveText: '',
        }
      }
    }
  };

const _hoisted_1$7 = ["aria-labelledby", "aria-placeholder", "aria-describedby"];
const _hoisted_2$5 = ["id"];
const _hoisted_3$4 = ["href"];

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container
  }, _ctx.attrs, {
    tabindex: "0",
    role: "button",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[3] || (_cache[3] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args)))
  }), [
    createElementVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$5),
    createElementVNode("div", {
      class: normalizeClass(_ctx.classes.wrapper)
    }, [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.file)
      }, [
        createCommentVNode(" Filename "),
        (_ctx.hasLink && _ctx.clickable)
          ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: _ctx.link,
              class: normalizeClass(_ctx.classes.filenameLink),
              target: "_blank",
              rel: "nofollow noopener"
            }, toDisplayString(_ctx.filename), 11 /* TEXT, CLASS, PROPS */, _hoisted_3$4))
          : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(_ctx.classes.filenameStatic)
            }, toDisplayString(_ctx.filename), 3 /* TEXT, CLASS */))
      ], 2 /* CLASS */),
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.actions)
      }, [
        createCommentVNode(" Remove "),
        (_ctx.canRemove)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.classes.remove),
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.remove && _ctx.remove(...args)), ["prevent"])),
              onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.remove && _ctx.remove(...args)), ["enter","space"])),
              "aria-roledescription": "❎",
              role: "button",
              tabindex: "0"
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.removeIcon)
              }, null, 2 /* CLASS */)
            ], 34 /* CLASS, NEED_HYDRATION */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Progress "),
        (_ctx.uploading)
          ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.classes.percent)
            }, toDisplayString(_ctx.progress) + "%", 3 /* TEXT, CLASS */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Error "),
        (_ctx.hasError)
          ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass(_ctx.classes.warning)
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.warningIcon)
              }, null, 2 /* CLASS */)
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Upload button "),
        (_ctx.canUploadTemp)
          ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.classes.upload),
              onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.upload && _ctx.upload(...args)), ["prevent"])),
              tabindex: "-1"
            }, toDisplayString(_ctx.uploadText), 3 /* TEXT, CLASS */))
          : (_ctx.el$.stage > 1)
            ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                createCommentVNode(" Success "),
                createElementVNode("span", {
                  class: normalizeClass(_ctx.classes.uploaded)
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classes.uploadedIcon)
                  }, null, 2 /* CLASS */)
                ], 2 /* CLASS */)
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */),
    (_ctx.uploading)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.progressBar)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + '%' })
          }, null, 6 /* CLASS, STYLE */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 16 /* FULL_PROPS */, _hoisted_1$7)), [
    [vShow, _ctx.visible]
  ])
}

script$f.render = render$7;
script$f.__file = "themes/blank/templates/elements/partials/FilePreview.vue";

var script$e = {
    name: 'FilePreview',
    render: script$f.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file-preview',
          container_sm: 'vf-file-preview-sm',
          container_md: '',
          container_lg: 'vf-file-preview-lg',
          wrapper: 'vf-file-preview-wrapper',
          file: 'vf-file-preview-file',
          filenameLink: 'vf-file-preview-filename-link',
          filenameStatic: 'vf-file-preview-filename',
          actions: 'vf-file-preview-actions',
          percent: 'vf-file-preview-percent',
          upload: 'vf-file-preview-upload',
          progressBar: 'vf-file-preview-progress-bar',
          progress: 'vf-file-preview-progress',
          warning: 'vf-file-preview-warning',
          warningIcon: 'vf-file-preview-warning-icon',
          uploaded: 'vf-file-preview-uploaded',
          uploadedIcon: 'vf-file-preview-uploaded-icon',
          remove: 'vf-file-preview-remove',
          removeIcon: 'vf-file-preview-remove-icon',
          assistiveText: 'vf-assistive-text',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ])
        }
      }
    }
  };

var css_248z$7 = ".vf-file-preview {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  min-height: var(--vf-min-height-input);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}\n\n.vf-file-preview:hover .vf-file-preview-uploaded,\n.vf-file-preview:hover .vf-file-preview-warning,\n.vf-file-preview:hover .vf-file-preview-percent {\n  display: none;\n}\n\n.vf-file-preview:hover .vf-file-preview-remove {\n  display: inline-block;\n}\n\n.vf-file-preview.vf-file-preview-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  min-height: var(--vf-min-height-input-sm);\n}\n\n.vf-file-preview.vf-file-preview-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  min-height: var(--vf-min-height-input-lg);\n}\n\n.vf-file-preview-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.vf-file-preview-file {\n  display: flex;\n  align-items: center;\n}\n\n.vf-file-preview-filename-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.vf-file-preview-filename-link:hover, .vf-file-preview-filename-link:focus, .vf-file-preview-filename-link:active {\n  color: inherit;\n}\n\n.vf-file-preview-filename-link:hover {\n  text-decoration: underline;\n}\n\n.vf-file-preview-actions {\n  display: flex;\n  align-items: center;\n}\n\n.vf-file-preview-upload {\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n  white-space: nowrap;\n  padding: 0.0625rem 0.4375rem;\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n  border-radius: var(--vf-radius-small);\n  text-decoration: none;\n  transition: 0.15s;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n}\n\n.vf-file-preview-upload:hover {\n  transform: scale(1.05);\n}\n\n.vf-file-preview-upload:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-file-preview-percent {\n  font-size: 0.875rem;\n  color: var(--vf-color-muted);\n  margin-left: 0.375rem;\n}\n\n.vf-file-preview-progress-bar {\n  margin-top: 0.625rem;\n  border-radius: 0;\n  height: 0.1875rem;\n  background: var(--vf-bg-passive);\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.vf-file-preview-progress {\n  border-radius: 0;\n  height: 100%;\n  background: var(--vf-primary);\n  transition: 0.6s ease;\n}\n\n.vf-file-preview-warning,\n.vf-file-preview-uploaded,\n.vf-file-preview-remove {\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n}\n\n.vf-file-preview-warning-icon,\n.vf-file-preview-uploaded-icon,\n.vf-file-preview-remove-icon {\n  width: 100%;\n  height: 100%;\n  display: block;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n}\n\n.vf-file-preview-remove {\n  display: none;\n  margin-left: 0.375rem;\n  background-color: var(--vf-bg-passive);\n  transition: 0.15s;\n}\n\n.vf-file-preview-remove:hover {\n  filter: brightness(0.9);\n}\n\n.vf-file-preview-remove-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.75rem 0.75rem;\n  -webkit-mask-size: 0.75rem 0.75rem;\n  background-color: var(--vf-color-passive);\n}\n\n.vf-file-preview-uploaded {\n  background-color: var(--vf-bg-success);\n}\n\n.vf-file-preview-uploaded-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-success);\n}\n\n.vf-file-preview-warning {\n  background-color: var(--vf-bg-danger);\n}\n\n.vf-file-preview-warning-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-danger);\n}\n\n.vf-file-removing .vf-file-preview {\n  opacity: 0.6;\n}";
styleInject(css_248z$7);

script$e.__file = "themes/vueform/templates/elements/partials/FilePreview.vue";

var script$d = {
    name: 'FilePreview_image',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          image: '',
          img: '',
          file: '',
          filenameLink: '',
          filenameStatic: '',
          actions: '',
          percent: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  };

const _hoisted_1$6 = ["aria-labelledby", "aria-placeholder", "aria-describedby"];
const _hoisted_2$4 = ["id"];
const _hoisted_3$3 = ["href"];
const _hoisted_4$1 = ["src", "alt", "title"];
const _hoisted_5$1 = ["src", "alt", "title"];
const _hoisted_6 = ["href"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container,
    tabindex: "0",
    role: "button"
  }, _ctx.attrs, {
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[4] || (_cache[4] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args)))
  }), [
    createElementVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$4),
    createElementVNode("div", {
      class: normalizeClass(_ctx.classes.wrapper)
    }, [
      createCommentVNode(" Image "),
      (_ctx.uploaded && _ctx.hasLink && _ctx.clickable)
        ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: _ctx.link,
            class: normalizeClass(_ctx.classes.image),
            target: "_blank",
            rel: "nofollow noopener"
          }, [
            createElementVNode("img", {
              class: normalizeClass(_ctx.classes.img),
              src: _ctx.preview,
              alt: _ctx.filename,
              title: _ctx.filename,
              "aria-hidden": "true"
            }, null, 10 /* CLASS, PROPS */, _hoisted_4$1)
          ], 10 /* CLASS, PROPS */, _hoisted_3$3))
        : (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(_ctx.classes.image)
          }, [
            createElementVNode("img", {
              class: normalizeClass(_ctx.classes.img),
              src: _ctx.preview,
              alt: _ctx.filename,
              title: _ctx.filename,
              "aria-hidden": "true"
            }, null, 10 /* CLASS, PROPS */, _hoisted_5$1)
          ], 2 /* CLASS */)),
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.file)
      }, [
        createCommentVNode(" Filename "),
        (_ctx.hasLink && _ctx.clickable)
          ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: _ctx.link,
              class: normalizeClass(_ctx.classes.filenameLink),
              target: "_blank",
              rel: "nofollow noopener"
            }, toDisplayString(_ctx.filename), 11 /* TEXT, CLASS, PROPS */, _hoisted_6))
          : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(_ctx.classes.filenameStatic)
            }, toDisplayString(_ctx.filename), 3 /* TEXT, CLASS */))
      ], 2 /* CLASS */),
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.actions)
      }, [
        createCommentVNode(" Remove "),
        (_ctx.canRemove)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.classes.remove),
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.remove && _ctx.remove(...args)), ["prevent"])),
              onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.remove && _ctx.remove(...args)), ["enter","space"])),
              "aria-roledescription": "❎",
              role: "button",
              tabindex: "0"
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.removeIcon)
              }, null, 2 /* CLASS */)
            ], 34 /* CLASS, NEED_HYDRATION */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Progress "),
        (_ctx.uploading)
          ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.classes.percent)
            }, toDisplayString(_ctx.progress) + "%", 3 /* TEXT, CLASS */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Error "),
        (_ctx.hasError)
          ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass(_ctx.classes.warning)
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.warningIcon)
              }, null, 2 /* CLASS */)
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true),
        createCommentVNode(" Upload button "),
        (_ctx.canUploadTemp)
          ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.classes.upload),
              onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.upload && _ctx.upload(...args)), ["prevent"])),
              onKeypress: _cache[3] || (_cache[3] = withKeys((...args) => (_ctx.upload && _ctx.upload(...args)), ["enter","space"])),
              tabindex: "-1",
              role: "button"
            }, toDisplayString(_ctx.uploadText), 35 /* TEXT, CLASS, NEED_HYDRATION */))
          : (_ctx.el$.stage > 1)
            ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                createCommentVNode(" Success "),
                createElementVNode("span", {
                  class: normalizeClass(_ctx.classes.uploaded)
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.classes.uploadedIcon)
                  }, null, 2 /* CLASS */)
                ], 2 /* CLASS */)
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */),
    (_ctx.uploading)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.classes.progressBar)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + '%' })
          }, null, 6 /* CLASS, STYLE */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 16 /* FULL_PROPS */, _hoisted_1$6)), [
    [vShow, _ctx.visible]
  ])
}

script$d.render = render$6;
script$d.__file = "themes/blank/templates/elements/partials/FilePreview_image.vue";

var script$c = {
    name: 'ImagePreview',
    render: script$d.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file-preview-image',
          wrapper: 'vf-file-preview-image-wrapper',
          image: 'vf-file-preview-image-image',
          image_link: '',
          image_static: '',
          image_sm: 'vf-file-preview-image-image-sm',
          image_md: '',
          image_lg: 'vf-file-preview-image-image-lg',
          img: 'vf-file-preview-image-img',
          img_sm: 'vf-file-preview-image-img-sm',
          img_md: '',
          img_lg: 'vf-file-preview-image-img-lg',
          file: 'vf-file-preview-image-file',
          filenameLink: 'vf-file-preview-image-filename-link',
          filenameStatic: 'vf-file-preview-image-filename',
          actions: 'vf-file-preview-image-actions',
          percent: 'vf-file-preview-image-percent',
          upload: 'vf-file-preview-image-upload',
          progressBar: 'vf-file-preview-image-progress-bar',
          progressBar_sm: 'vf-file-preview-image-progress-bar-sm',
          progressBar_md: '',
          progressBar_lg: 'vf-file-preview-image-progress-bar-lg',
          progress: 'vf-file-preview-image-progress',
          warning: 'vf-file-preview-image-warning',
          warningIcon: 'vf-file-preview-image-warning-icon',
          uploaded: 'vf-file-preview-image-uploaded',
          uploadedIcon: 'vf-file-preview-image-uploaded-icon',
          remove: 'vf-file-preview-image-remove',
          removeIcon: 'vf-file-preview-image-remove-icon',
          assistiveText: 'vf-assistive-text',
          $image: (classes, { hasLink, Size }) => ([
            classes.image,
            classes[`image_${Size}`],
            hasLink ? classes.image_link : classes.image_static
          ]),
          $img: (classes, { Size }) => ([
            classes.img,
            classes[`img_${Size}`],
          ]),
          $progressBar: (classes, { Size }) => ([
            classes.progressBar,
            classes[`progressBar_${Size}`],
          ])
        }
      }
    }
  };

var css_248z$6 = ".vf-file-preview-image {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  position: relative;\n}\n\n.vf-file-preview-image:hover .vf-file-preview-image-uploaded,\n.vf-file-preview-image:hover .vf-file-preview-image-warning,\n.vf-file-preview-image:hover .vf-file-preview-image-percent {\n  display: none;\n}\n\n.vf-file-preview-image:hover .vf-file-preview-image-remove {\n  display: inline-block;\n}\n\n.vf-file-preview-image-image {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  background: var(--vf-bg-passive);\n  border-radius: var(--vf-radius-image);\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n  box-shadow: var(--vf-shadow-input);\n}\n\n.vf-file-preview-image-image:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-file-preview-image-image.vf-file-preview-image-image-sm {\n  border-radius: var(--vf-radius-image-sm);\n}\n\n.vf-file-preview-image-image.vf-file-preview-image-image-lg {\n  border-radius: var(--vf-radius-image-lg);\n}\n\n.vf-file-preview-image-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: var(--vf-min-height-input);\n  height: var(--vf-min-height-input);\n  border-radius: var(--vf-radius-image);\n  border: 0;\n}\n\n.vf-file-preview-image-img[src=\"\"], .vf-file-preview-image-img[src=\"data:\"], .vf-file-preview-image-img:not([src]) {\n  opacity: 0;\n}\n\n.vf-file-preview-image-img.vf-file-preview-image-img-sm {\n  width: var(--vf-min-height-input-sm);\n  height: var(--vf-min-height-input-sm);\n  border-radius: var(--vf-radius-image-sm);\n}\n\n.vf-file-preview-image-img.vf-file-preview-image-img-lg {\n  width: var(--vf-min-height-input-lg);\n  height: var(--vf-min-height-input-lg);\n  border-radius: var(--vf-radius-image-lg);\n}\n\n.vf-file-preview-image-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.vf-file-preview-image-file {\n  display: flex;\n  align-items: center;\n  margin-left: 0.625rem;\n  flex: 1 1 auto;\n}\n\n.vf-file-preview-image-filename-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.vf-file-preview-image-filename-link:hover, .vf-file-preview-image-filename-link:focus, .vf-file-preview-image-filename-link:active {\n  color: inherit;\n}\n\n.vf-file-preview-image-filename-link:hover {\n  text-decoration: underline;\n}\n\n.vf-file-preview-image-actions {\n  display: flex;\n  align-items: center;\n}\n\n.vf-file-preview-image-upload {\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n  white-space: nowrap;\n  padding: 0.0625rem 0.4375rem;\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n  border-radius: var(--vf-radius-small);\n  text-decoration: none;\n  transition: 0.15s;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n}\n\n.vf-file-preview-image-upload:hover {\n  transform: scale(1.05);\n}\n\n.vf-file-preview-image-upload:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-file-preview-image-percent {\n  font-size: 0.875rem;\n  color: var(--vf-color-muted);\n  margin-left: 0.375rem;\n}\n\n.vf-file-preview-image-progress-bar {\n  margin-top: 0.625rem;\n  border-radius: 0;\n  height: 0.1875rem;\n  background: var(--vf-bg-passive);\n  position: absolute;\n  bottom: 0;\n  left: calc(var(--vf-min-height-input) + 0.625rem);\n  right: 0;\n}\n\n.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-sm {\n  left: calc(var(--vf-min-height-input-sm) + 0.625rem);\n}\n\n.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-lg {\n  left: calc(var(--vf-min-height-input-lg) + 0.625rem);\n}\n\n.vf-file-preview-image-progress {\n  border-radius: 0;\n  display: block;\n  height: 100%;\n  background: var(--vf-primary);\n  transition: 0.6s ease;\n}\n\n.vf-file-preview-image-warning,\n.vf-file-preview-image-uploaded,\n.vf-file-preview-image-remove {\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n}\n\n.vf-file-preview-image-warning-icon,\n.vf-file-preview-image-uploaded-icon,\n.vf-file-preview-image-remove-icon {\n  width: 100%;\n  height: 100%;\n  display: block;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n}\n\n.vf-file-preview-image-remove {\n  display: none;\n  margin-left: 0.375rem;\n  background-color: var(--vf-bg-passive);\n  transition: 0.15s;\n}\n\n.vf-file-preview-image-remove:hover {\n  filter: brightness(0.9);\n}\n\n.vf-file-preview-image-remove-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.75rem 0.75rem;\n  -webkit-mask-size: 0.75rem 0.75rem;\n  background-color: var(--vf-color-passive);\n}\n\n.vf-file-preview-image-uploaded {\n  background-color: var(--vf-bg-success);\n}\n\n.vf-file-preview-image-uploaded-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-success);\n}\n\n.vf-file-preview-image-warning {\n  background-color: var(--vf-bg-danger);\n}\n\n.vf-file-preview-image-warning-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-danger);\n}\n\n.vf-file-removing .vf-file-preview-image {\n  opacity: 0.6;\n}";
styleInject(css_248z$6);

script$c.__file = "themes/vueform/templates/elements/partials/FilePreview_image.vue";

var script$b = {
    name: 'FilePreview_gallery',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          image: '',
          img: '',
          overlay: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  };

const _hoisted_1$5 = ["aria-labelledby", "aria-placeholder", "aria-role", "aria-describedby"];
const _hoisted_2$3 = ["id"];
const _hoisted_3$2 = ["href"];
const _hoisted_4 = ["src", "alt", "title"];
const _hoisted_5 = ["src", "alt", "title"];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", mergeProps({
    class: _ctx.classes.container,
    tabindex: "0",
    role: "button"
  }, _ctx.attrs, {
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-placeholder": _ctx.ariaPlaceholder,
    "aria-role": _ctx.ariaRoledescription,
    "aria-describedby": `${_ctx.el$.fieldId}-file-description`,
    onKeyup: _cache[4] || (_cache[4] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args)))
  }), [
    createElementVNode("span", {
      id: `${_ctx.el$.fieldId}-file-description`,
      class: normalizeClass(_ctx.classes.assistiveText),
      "aria-hidden": ""
    }, toDisplayString(_ctx.form$.translations.vueform.a11y.file.description), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$3),
    createCommentVNode(" Image  "),
    (_ctx.uploaded && _ctx.hasLink && _ctx.clickable)
      ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: normalizeClass(_ctx.classes.image),
          href: _ctx.link,
          target: "_blank",
          rel: "nofollow noopener"
        }, [
          createElementVNode("img", {
            src: _ctx.preview,
            class: normalizeClass(_ctx.classes.img),
            alt: _ctx.filename,
            title: _ctx.filename,
            "aria-hidden": "true"
          }, null, 10 /* CLASS, PROPS */, _hoisted_4)
        ], 10 /* CLASS, PROPS */, _hoisted_3$2))
      : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.classes.image)
        }, [
          createElementVNode("img", {
            class: normalizeClass(_ctx.classes.img),
            src: _ctx.preview,
            alt: _ctx.filename,
            title: _ctx.filename,
            "aria-hidden": "true"
          }, null, 10 /* CLASS, PROPS */, _hoisted_5)
        ], 2 /* CLASS */)),
    createCommentVNode(" Overlay "),
    (!_ctx.uploaded && !_ctx.uploading)
      ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.classes.overlay)
        }, [
          (_ctx.canUploadTemp)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.classes.upload),
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.upload && _ctx.upload(...args)), ["prevent"])),
                onKeypress: _cache[1] || (_cache[1] = withKeys((...args) => (_ctx.upload && _ctx.upload(...args)), ["enter","space"])),
                tabindex: "-1",
                role: "button"
              }, toDisplayString(_ctx.uploadText), 35 /* TEXT, CLASS, NEED_HYDRATION */))
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Error "),
    (_ctx.hasError)
      ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: normalizeClass(_ctx.classes.warning)
        }, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.classes.warningIcon)
          }, null, 2 /* CLASS */)
        ], 2 /* CLASS */))
      : (_ctx.el$.stage > 1)
        ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
            createCommentVNode(" Success "),
            createElementVNode("span", {
              class: normalizeClass(_ctx.classes.uploaded)
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.classes.uploadedIcon)
              }, null, 2 /* CLASS */)
            ], 2 /* CLASS */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : createCommentVNode("v-if", true),
    createCommentVNode(" Remove "),
    (_ctx.canRemove)
      ? (openBlock(), createElementBlock("div", {
          key: 5,
          class: normalizeClass(_ctx.classes.remove),
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.remove && _ctx.remove(...args)), ["prevent"])),
          onKeypress: _cache[3] || (_cache[3] = withKeys((...args) => (_ctx.remove && _ctx.remove(...args)), ["enter","space"])),
          "aria-roledescription": "❎",
          role: "button",
          tabindex: "0"
        }, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.classes.removeIcon)
          }, null, 2 /* CLASS */)
        ], 34 /* CLASS, NEED_HYDRATION */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Progress "),
    (_ctx.uploading)
      ? (openBlock(), createElementBlock("div", {
          key: 6,
          class: normalizeClass(_ctx.classes.progressBar)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.progress),
            style: normalizeStyle({ width: _ctx.progress + '%' })
          }, null, 6 /* CLASS, STYLE */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 16 /* FULL_PROPS */, _hoisted_1$5)), [
    [vShow, _ctx.visible]
  ])
}

script$b.render = render$5;
script$b.__file = "themes/blank/templates/elements/partials/FilePreview_gallery.vue";

var script$a = {
    name: 'GalleryPreview',
    render: script$b.render,
    data() {
      return {
        merge: true,
        defaultClasses: { 
          container: 'vf-file-preview-gallery',
          container_sm: 'vf-file-preview-gallery-sm',
          container_md: '',
          container_lg: 'vf-file-preview-gallery-lg',
          image: 'vf-file-preview-gallery-image',
          image_sm: 'vf-file-preview-gallery-image-sm',
          image_md: '',
          image_lg: 'vf-file-preview-gallery-image-lg',
          image_link: '',
          image_static: '',
          img: 'vf-file-preview-gallery-img',
          img_sm: 'vf-file-preview-gallery-img-sm',
          img_md: '',
          img_lg: 'vf-file-preview-gallery-img-lg',
          overlay: 'vf-file-preview-gallery-overlay',
          overlay_sm: 'vf-file-preview-gallery-overlay-sm',
          overlay_md: '',
          overlay_lg: 'vf-file-preview-gallery-overlay-lg',
          upload: 'vf-file-preview-gallery-upload',
          progressBar: 'vf-file-preview-gallery-progress-bar',
          progress: 'vf-file-preview-gallery-progress',
          warning: 'vf-file-preview-gallery-warning',
          warningIcon: 'vf-file-preview-gallery-warning-icon',
          uploaded: 'vf-file-preview-gallery-uploaded',
          uploadedIcon: 'vf-file-preview-gallery-uploaded-icon',
          remove: 'vf-file-preview-gallery-remove',
          removeIcon: 'vf-file-preview-gallery-remove-icon',
          assistiveText: 'vf-assistive-text',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
          $image: (classes, { Size }) => ([
            classes.image,
            classes[`image_${Size}`],
          ]),
          $img: (classes, { Size }) => ([
            classes.img,
            classes[`img_${Size}`],
          ]),
          $overlay: (classes, { Size }) => ([
            classes.overlay,
            classes[`overlay_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$5 = ".vf-file-preview-gallery {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  transition: 0.2s background;\n  width: var(--vf-gallery-size);\n  height: var(--vf-gallery-size);\n  position: relative;\n}\n\n.vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vf-file-preview-gallery.vf-file-preview-gallery-sm {\n  width: var(--vf-gallery-size-sm);\n  height: var(--vf-gallery-size-sm);\n}\n\n.vf-file-preview-gallery.vf-file-preview-gallery-lg {\n  width: var(--vf-gallery-size-lg);\n  height: var(--vf-gallery-size-lg);\n}\n\n.vf-file-preview-gallery-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.5);\n  transition: 0.3s;\n  opacity: 0;\n  visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 0.75rem;\n  border-radius: var(--vf-radius-gallery);\n}\n\n.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-sm {\n  border-radius: var(--vf-radius-gallery-sm);\n}\n\n.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-lg {\n  border-radius: var(--vf-radius-gallery-lg);\n}\n\n.vf-file-preview-gallery-upload {\n  font-size: 0.75rem;\n  white-space: nowrap;\n  background: #FFFFFF;\n  padding: 0.0625rem 0.4375rem;\n  background: var(--vf-primary);\n  color: var(--vf-color-on-primary);\n  border-radius: var(--vf-radius-small);\n  text-decoration: none;\n  transition: 0.15s;\n  outline: 0px solid var(--vf-ring-color);\n  outline-offset: 0;\n}\n\n.vf-file-preview-gallery-upload:hover {\n  transform: scale(1.05);\n}\n\n.vf-file-preview-gallery-upload:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n\n.vf-file-preview-gallery-image {\n  width: 100%;\n  height: 100%;\n  font-size: 0;\n  background: var(--vf-bg-passive);\n  border-radius: var(--vf-radius-gallery);\n  outline: none;\n}\n\n.vf-file-preview-gallery-image.vf-file-preview-gallery-image-sm {\n  border-radius: var(--vf-radius-gallery-sm);\n}\n\n.vf-file-preview-gallery-image.vf-file-preview-gallery-image-lg {\n  border-radius: var(--vf-radius-gallery-lg);\n}\n\n.vf-file-preview-gallery-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: var(--vf-radius-gallery);\n}\n\n.vf-file-preview-gallery-img[src=\"\"], .vf-file-preview-gallery-img[src=\"data:\"], .vf-file-preview-gallery-img:not([src]) {\n  opacity: 0;\n}\n\n.vf-file-preview-gallery-img.vf-file-preview-gallery-img-sm {\n  border-radius: var(--vf-radius-gallery-sm);\n}\n\n.vf-file-preview-gallery-img.vf-file-preview-gallery-img-lg {\n  border-radius: var(--vf-radius-gallery-lg);\n}\n\n.vf-file-preview-gallery-progress-bar {\n  border-radius: 0;\n  height: 0.1875rem;\n  position: absolute;\n  left: 0.1875rem;\n  bottom: 0.1875rem;\n  z-index: 1;\n  background: #FFFFFF;\n  right: 0.1875rem;\n}\n\n.vf-file-preview-gallery-progress {\n  border-radius: 0;\n  height: 100%;\n  background: var(--vf-primary);\n  transition: 0.6s ease;\n}\n\n.vf-file-preview-gallery-remove,\n.vf-file-preview-gallery-uploaded,\n.vf-file-preview-gallery-warning {\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.vf-file-preview-gallery-remove-icon,\n.vf-file-preview-gallery-uploaded-icon,\n.vf-file-preview-gallery-warning-icon {\n  width: 100%;\n  height: 100%;\n  display: block;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n}\n\n.vf-file-preview-gallery-remove {\n  position: absolute;\n  right: 0.1875rem;\n  top: 0.1875rem;\n  opacity: 0;\n  visibility: hidden;\n  background-color: var(--vf-bg-passive);\n  border-radius: 999px;\n  transition: 0.15s;\n}\n\n.vf-file-preview-gallery-remove:hover {\n  filter: brightness(0.9);\n}\n\n.vf-file-preview-gallery-remove-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.75rem 0.75rem;\n  -webkit-mask-size: 0.75rem 0.75rem;\n  background-color: var(--vf-color-passive);\n}\n\n.vf-file-preview-gallery-uploaded {\n  position: absolute;\n  right: 0.1875rem;\n  bottom: 0.1875rem;\n  border-radius: 999px;\n  background-color: var(--vf-bg-success);\n}\n\n.vf-file-preview-gallery-uploaded-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-success);\n}\n\n.vf-file-preview-gallery-warning {\n  position: absolute;\n  right: 0.1875rem;\n  bottom: 0.1875rem;\n  border-radius: 999px;\n  background-color: var(--vf-bg-danger);\n}\n\n.vf-file-preview-gallery-warning-icon {\n  mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E\");\n  mask-size: 0.625rem 0.625rem;\n  -webkit-mask-size: 0.625rem 0.625rem;\n  background-color: var(--vf-color-danger);\n}\n\n.vf-file-removing .vf-file-preview-gallery {\n  opacity: 0.6;\n}\n\n.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {\n  opacity: 0;\n  visibility: hidden;\n}";
styleInject(css_248z$5);

script$a.__file = "themes/vueform/templates/elements/partials/FilePreview_gallery.vue";

var script$9 = {
    name: 'RadiogroupRadio',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$4 = ["value", "name", "id", "disabled", "aria-label"];
const _hoisted_2$2 = ["innerHTML"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      withDirectives(createElementVNode("input", mergeProps({
        type: "radio",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.value) = $event))
      }, _ctx.attrs, {
        value: _ctx.value,
        class: _ctx.classes.input,
        name: _ctx.name,
        id: _ctx.id,
        disabled: _ctx.isDisabled,
        "aria-label": _ctx.item.label
      }), null, 16 /* FULL_PROPS */, _hoisted_1$4), [
        [vModelRadio, _ctx.el$.value]
      ]),
      createElementVNode("span", {
        class: normalizeClass(_ctx.classes.text),
        innerHTML: _ctx.item.label
      }, null, 10 /* CLASS, PROPS */, _hoisted_2$2)
    ])
  ], 2 /* CLASS */))
}

script$9.render = render$4;
script$9.__file = "themes/blank/templates/elements/partials/RadiogroupRadio.vue";

var script$8 = {
    name: 'RadiogroupRadio',
    render: script$9.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-container',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          text: 'vf-radio-text',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
        }
      }
    }
  };

var css_248z$4 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */";
styleInject(css_248z$4);

script$8.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio.vue";

var script$7 = {
    name: 'RadiogroupRadio_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

const _hoisted_1$3 = ["aria-checked"];
const _hoisted_2$1 = ["value", "name", "id", "disabled"];
const _hoisted_3$1 = ["innerHTML"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", mergeProps(_ctx.attrs, {
    class: _ctx.classes.container,
    tabindex: "0",
    role: "radio",
    "aria-checked": _ctx.checked,
    onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers($event => (_ctx.el$.update(_ctx.value)), ["prevent"]), ["space"])),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)))
  }), [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", {
          type: "radio",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.model) = $event)),
          value: _ctx.value,
          class: normalizeClass(_ctx.classes.input),
          name: _ctx.name,
          id: _ctx.id,
          disabled: _ctx.isDisabled
        }, null, 10 /* CLASS, PROPS */, _hoisted_2$1), [
          [vModelRadio, _ctx.el$.model]
        ]),
        createElementVNode("span", {
          class: normalizeClass(_ctx.classes.text),
          innerHTML: `${_ctx.item.label}`
        }, null, 10 /* CLASS, PROPS */, _hoisted_3$1)
      ], 2 /* CLASS */)
    ])
  ], 16 /* FULL_PROPS */, _hoisted_1$3))
}

script$7.render = render$3;
script$7.__file = "themes/blank/templates/elements/partials/RadiogroupRadio_tabs.vue";

var script$6 = {
    name: 'RadiogroupRadio_tabs',
    render: script$7.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-tabs-container',
          wrapper: 'vf-radio-tabs',
          wrapper_not_last: 'vf-radio-tabs-not-last',
          wrapper_first: 'vf-radio-tabs-first',
          wrapper_first_sm: 'vf-radio-tabs-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-radio-tabs-first-lg',
          wrapper_last: 'vf-radio-tabs-last',
          wrapper_last_sm: 'vf-radio-tabs-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-radio-tabs-last-lg',
          wrapper_selected: 'vf-radio-tabs-selected',
          wrapper_unselected: 'vf-radio-tabs-unselected',
          wrapper_disabled: 'vf-radio-tabs-disabled',
          wrapper_sm: 'vf-radio-tabs-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-tabs-lg',
          input: 'vf-radio-tabs-input',
          text: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  };

var css_248z$3 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */\n\n.vf-radio-tabs-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n}\n\n.vf-radio-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);\n  width: 100%;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-radio-tabs.vf-radio-tabs-not-last {\n  border-right: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first {\n  border-radius: var(--vf-radius-input);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vf-radio-tabs.vf-radio-tabs-selected {\n  background-color: var(--vf-primary);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: var(--vf-color-on-primary);\n}\n\n.vf-radio-tabs.vf-radio-tabs-unselected {\n  border-color: var(--vf-border-color-input);\n}\n\n.vf-radio-tabs.vf-radio-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {\n  background-color: var(--vf-bg-input-hover);\n  color: var(--vf-color-input-hover);\n}\n\n.vf-radio-tabs.vf-radio-tabs-disabled {\n  opacity: 0.5;\n}\n\n.vf-radio-tabs.vf-radio-tabs-sm {\n  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-radio-tabs.vf-radio-tabs-lg {\n  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-radio-tabs-input {\n  display: none;\n}";
styleInject(css_248z$3);

script$6.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio_tabs.vue";

var script$5 = {
    name: 'RadiogroupRadio_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text_wrapper: '',
          text: '',
          description: '',
        }
      }
    }
  };

const _hoisted_1$2 = ["value", "name", "id", "disabled"];
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    renderSlot(_ctx.$slots, "default", mergeProps({ name: _ctx.name }, {
      classes: _ctx.classes,
      isDisabled: _ctx.isDisabled,
      id: _ctx.id,
      item: _ctx.item,
      value: _ctx.value,
      items: _ctx.items,
      index: _ctx.index
    }), () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.classes.wrapper)
      }, [
        withDirectives(createElementVNode("input", mergeProps({
          type: "radio",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.el$.model) = $event))
        }, _ctx.attrs, {
          value: _ctx.value,
          class: _ctx.classes.input,
          name: _ctx.name,
          id: _ctx.id,
          disabled: _ctx.isDisabled
        }), null, 16 /* FULL_PROPS */, _hoisted_1$2), [
          [vModelRadio, _ctx.el$.model]
        ]),
        createElementVNode("div", {
          class: normalizeClass(_ctx.classes.text_wrapper)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.text),
            innerHTML: _ctx.item.label
          }, null, 10 /* CLASS, PROPS */, _hoisted_2),
          createElementVNode("div", {
            class: normalizeClass(_ctx.classes.description),
            innerHTML: _ctx.item.description
          }, null, 10 /* CLASS, PROPS */, _hoisted_3)
        ], 2 /* CLASS */)
      ], 2 /* CLASS */)
    ])
  ], 2 /* CLASS */))
}

script$5.render = render$2;
script$5.__file = "themes/blank/templates/elements/partials/RadiogroupRadio_blocks.vue";

var script$4 = {
    name: 'RadiogroupRadio_blocks',
    render: script$5.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-blocks-container',
          container_sm: 'vf-radio-blocks-container-sm',
          container_md: '',
          container_lg: 'vf-radio-blocks-container-lg',
          wrapper: 'vf-radio-blocks',
          wrapper_not_last: 'vf-radio-blocks-not-last',
          wrapper_first: 'vf-radio-blocks-first',
          wrapper_first_sm: 'vf-radio-blocks-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-radio-blocks-first-lg',
          wrapper_last: 'vf-radio-blocks-last',
          wrapper_last_sm: 'vf-radio-blocks-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-radio-blocks-last-lg',
          wrapper_selected: 'vf-radio-blocks-selected',
          wrapper_unselected: 'vf-radio-blocks-unselected',
          wrapper_disabled: 'vf-radio-blocks-disabled',
          wrapper_sm: 'vf-radio-blocks-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-blocks-lg',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          text_wrapper: 'vf-radio-blocks-text-wrapper',
          text: 'vf-radio-blocks-text',
          description: 'vf-radio-blocks-description',
          description_sm: 'vf-radio-blocks-description-sm',
          description_md: '',
          description_lg: 'vf-radio-blocks-description-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === 0 ? classes[`wrapper_first_${Size}`] : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            index === Object.keys(items).length - 1 ? classes[`wrapper_last_${Size}`] : null,
            el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ]),
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
          $description: (classes, { Size }) => ([
            classes.description,
            classes[`description_${Size}`],
          ]),
        }
      }
    }
  };

var css_248z$2 = "/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */\n\n.vf-radio-blocks-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  background: var(--vf-bg-input);\n  border-radius: var(--vf-radius-large);\n}\n\n.vf-radio-blocks-container .vf-radio {\n  margin-top: 0;\n}\n\n.vf-radio-blocks-container.vf-radio-blocks-container-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n\n.vf-radio-blocks-container.vf-radio-blocks-container-lg {\n  border-radius: var(--vf-radius-large-lg);\n}\n\n.vf-radio-blocks {\n  display: flex;\n  align-items: center;\n  border-style: solid;\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  border-color: var(--vf-border-color-input);\n  width: 100%;\n  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n.vf-radio-blocks.vf-radio-blocks-not-last {\n  border-bottom: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first {\n  border-radius: var(--vf-radius-large);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last {\n  border-radius: var(--vf-radius-large);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.vf-radio-blocks.vf-radio-blocks-selected {\n  background-color: var(--vf-bg-selected);\n}\n\n.vf-radio-blocks.vf-radio-blocks-disabled {\n  opacity: 0.5;\n}\n\n.vf-radio-blocks.vf-radio-blocks-sm {\n  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n\n.vf-radio-blocks.vf-radio-blocks-lg {\n  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n\n.vf-radio-blocks-text-wrapper {\n  margin-left: 0.5rem;\n}\n\n.vf-radio-blocks-description {\n  color: var(--vf-color-muted);\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n  margin-top: -0.125rem;\n}\n\n.vf-radio-blocks-description.vf-radio-blocks-description-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n  margin-top: -0.125rem;\n}\n\n.vf-radio-blocks-description.vf-radio-blocks-description-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n  margin-top: -0.125rem;\n}";
styleInject(css_248z$2);

script$4.__file = "themes/vueform/templates/elements/partials/RadiogroupRadio_blocks.vue";

var script$3 = {
    name: 'DatepickerWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          datepicker: '',
          calendarContainer: ''
        }
      }
    }
  };

const _hoisted_1$1 = ["id", "placeholder"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    class: _ctx.classes.datepicker,
    id: _ctx.id,
    placeholder: _ctx.placeholder
  }, _ctx.attrs, { ref: "input" }), null, 16 /* FULL_PROPS */, _hoisted_1$1))
}

script$3.render = render$1;
script$3.__file = "themes/blank/templates/wrappers/DatepickerWrapper.vue";

var script$2 = {
    name: 'DatepickerWrapper',
    render: script$3.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          datepicker: '',
          calendarContainer: 'flatpickr-calendar-container'
        }
      }
    }
  };

var css_248z$1 = ".flatpickr-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  box-sizing: border-box;\n  touch-action: manipulation;\n  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);\n  color: var(--vf-color-input);\n}\n\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 999;\n}\n\n.flatpickr-calendar.animate.open {\n  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n\n.flatpickr-calendar.rightMost {\n  left: auto;\n  right: 0;\n}\n\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  box-shadow: none !important;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid var(--vf-border-color-input);\n}\n\n.flatpickr-calendar.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: \"\";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n\n.flatpickr-wrapper {\n  position: relative;\n  display: flex;\n}\n\n.flatpickr-months {\n  display: flex;\n}\n\n.flatpickr-months .flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  flex: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 1;\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n  left: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n  right: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  opacity: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n  opacity: 0.7;\n  display: block;\n}\n\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\n\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n\n.numInputWrapper input {\n  width: 100%;\n}\n\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid var(--vf-border-color-input);\n  box-sizing: border-box;\n}\n\n.numInputWrapper span:hover {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:active {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid var(--vf-color-input);\n  top: 26%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--vf-color-input);\n  top: 40%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n\n.numInputWrapper span svg path {\n  fill: var(--vf-color-input);\n}\n\n.numInputWrapper:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0 ;\n  display: inline-block;\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: var(--vf-gray-300);\n  background: transparent;\n  pointer-events: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: var(--vf-bg-date-head);\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: var(--vf-bg-date-head);\n  outline: none;\n  padding: 0;\n}\n\n.flatpickr-weekdays {\n  background: var(--vf-bg-date-head);\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 28px;\n}\n\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: flex;\n  flex: 1;\n}\n\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  flex: 1;\n  font-weight: bolder;\n}\n\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  width: 307.875px;\n  background-color: var(--vf-bg-input);\n}\n\n.flatpickr-days:focus {\n  outline: 0;\n}\n\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: flex;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  justify-content: space-around;\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n\n.dayContainer + .dayContainer {\n  box-shadow: -1px 0 0 var(--vf-gray-200);\n}\n\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 38px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: var(--vf-bg-selected);\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today {\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: var(--vf-bg-selected);\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: var(--vf-primary);\n  box-shadow: none;\n  color: #fff;\n  border-color: var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: var(--vf-color-disabled);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: var(--vf-color-disabled);\n}\n\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n\n.flatpickr-weekwrapper {\n  float: left;\n}\n\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n}\n\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: var(--vf-gray-300);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n\n.flatpickr-innerContainer {\n  display: block;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n  background: var(--vf-bg-input);\n  border-radius: 0 0 5px 5px;\n  color: var(--vf-color-input);\n}\n\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.flatpickr-time .numInputWrapper {\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n  color: var(--vf-color-input);\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  align-self: center;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\nspan.flatpickr-day.selected {\n  font-weight: bold;\n}";
styleInject(css_248z$1);

script$2.__file = "themes/vueform/templates/wrappers/DatepickerWrapper.vue";

var trix = {exports: {}};

/*
Trix 1.3.1
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */

(function (module) {
	((function(){})).call(commonjsGlobal),function(){null==window.Set&&(window.Set=function(){function t(){this.clear();}return t.prototype.clear=function(){return this.values=[]},t.prototype.has=function(t){return -1!==this.values.indexOf(t)},t.prototype.add=function(t){return this.has(t)||this.values.push(t),this},t.prototype["delete"]=function(t){var e;return -1===(e=this.values.indexOf(t))?!1:(this.values.splice(e,1),!0)},t.prototype.forEach=function(){var t;return (t=this.values).forEach.apply(t,arguments)},t}());}.call(commonjsGlobal),function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments);}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this);}function o(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void h(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?r:s)(e.promise,t._value);var i;try{i=n(t._value);}catch(o){return void s(e.promise,o)}r(e.promise,i);}))}function r(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof i)return t._state=3,t._value=e,void a(t);if("function"==typeof o)return void c(n(o,e),t)}t._state=1,t._value=e,a(t);}catch(r){s(t,r);}}function s(t,e){t._state=2,t._value=e,a(t);}function a(t){2===t._state&&0===t._deferreds.length&&setTimeout(function(){t._handled||p(t._value);},1);for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null;}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n;}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,r(e,t));},function(t){n||(n=!0,s(e,t));});}catch(i){if(n)return;n=!0,s(e,i);}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(t){l(t,1);},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);};i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,n){var r=new i(e);return o(this,new u(t,n,r)),r},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(r,t);},n)}e[r]=s,0===--o&&t(e);}catch(u){n(u);}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r]);})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t);})},i.reject=function(t){return new i(function(e,n){n(t);})},i.race=function(t){return new i(function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n);})},i._setImmediateFn=function(t){h=t;},i._setUnhandledRejectionFn=function(t){p=t;},module.exports?module.exports=i:t.Promise||(t.Promise=i);}(commonjsGlobal),function(){var t="object"==typeof window.customElements,e="function"==typeof document.registerElement,n=t||e;n||(/**
	 * @license
	 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	"undefined"==typeof WeakMap&&!function(){var t=Object.defineProperty,e=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(e++ +"__");};n.prototype={set:function(e,n){var i=e[this.name];return i&&i[0]===e?i[1]=n:t(e,this.name,{value:[e,n],writable:!0}),this},get:function(t){var e;return (e=t[this.name])&&e[0]===t?e[1]:void 0},"delete":function(t){var e=t[this.name];return e&&e[0]===t?(e[0]=e[1]=void 0,!0):!1},has:function(t){var e=t[this.name];return e?e[0]===t:!1}},window.WeakMap=n;}(),function(t){function e(t){A.push(t),b||(b=!0,g(i));}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function i(){b=!1;var t=A;A=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();o(t),n.length&&(t.callback_(n,t),e=!0);}),e&&i();}function o(t){t.nodes_.forEach(function(e){var n=m.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers();});});}function r(t,e){for(var n=t;n;n=n.parentNode){var i=m.get(n);if(i)for(var o=0;o<i.length;o++){var r=i[o],s=r.options;if(n===t||s.subtree){var a=e(s);a&&r.enqueue(a);}}}}function s(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++C;}function a(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null;}function u(t){var e=new a(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function c(t,e){return x=new a(t,e)}function l(t){return w?w:(w=u(x),w.oldValue=t,w)}function h(){x=w=void 0;}function p(t){return t===w||t===x}function d(t,e){return t===e?t:w&&p(t)?w:null}function f(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[];}if(!t.JsMutationObserver){var g,m=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else {var v=[],y=String(Math.random());window.addEventListener("message",function(t){if(t.data===y){var e=v;v=[],e.forEach(function(t){t();});}}),g=function(t){v.push(t),window.postMessage(y,"*");};}var b=!1,A=[],C=0;s.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var i=m.get(t);i||m.set(t,i=[]);for(var o,r=0;r<i.length;r++)if(i[r].observer===this){o=i[r],o.removeListeners(),o.options=e;break}o||(o=new f(this,t,e),i.push(o),this.nodes_.push(t)),o.addListeners();},disconnect:function(){this.nodes_.forEach(function(t){for(var e=m.get(t),n=0;n<e.length;n++){var i=e[n];if(i.observer===this){i.removeListeners(),e.splice(n,1);break}}},this),this.records_=[];},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var x,w;f.prototype={enqueue:function(t){var n=this.observer.records_,i=n.length;if(n.length>0){var o=n[i-1],r=d(o,t);if(r)return void(n[i-1]=r)}else e(this.observer);n[i]=t;},addListeners:function(){this.addListeners_(this.target);},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0);},removeListeners:function(){this.removeListeners_(this.target);},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0);},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=m.get(t);e||m.set(t,e=[]),e.push(this);}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=m.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this);},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,i=t.target,o=new c("attributes",i);o.attributeName=e,o.attributeNamespace=n;var s=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;r(i,function(t){return !t.attributes||t.attributeFilter&&t.attributeFilter.length&&-1===t.attributeFilter.indexOf(e)&&-1===t.attributeFilter.indexOf(n)?void 0:t.attributeOldValue?l(s):o});break;case"DOMCharacterDataModified":var i=t.target,o=c("characterData",i),s=t.prevValue;r(i,function(t){return t.characterData?t.characterDataOldValue?l(s):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var a,u,p=t.target;"DOMNodeInserted"===t.type?(a=[p],u=[]):(a=[],u=[p]);var d=p.previousSibling,f=p.nextSibling,o=c("childList",t.target.parentNode);o.addedNodes=a,o.removedNodes=u,o.previousSibling=d,o.nextSibling=f,r(t.relatedNode,function(t){return t.childList?o:void 0});}h();}},t.JsMutationObserver=s,t.MutationObserver||(t.MutationObserver=s,s._isPolyfilled=!0);}}(self),function(){if(!window.performance||!window.performance.now){var t=Date.now();window.performance={now:function(){return Date.now()-t}};}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?function(e){return t(function(){e(performance.now());})}:function(t){return window.setTimeout(t,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t);}}());var e=function(){var t=document.createEvent("Event");return t.initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented}();if(!e){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var i=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||i&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||i&&"function"!=typeof window.Event){var o=window.Event;window.Event=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n},window.Event.prototype=o.prototype;}}(),window.CustomElements=window.CustomElements||{flags:{}},function(t){var e=t.flags,n=[],i=function(t){n.push(t);},o=function(){n.forEach(function(e){e(t);});};t.addModule=i,t.initializeModules=o,t.hasNative=Boolean(document.registerElement),t.isIE=/Trident/.test(navigator.userAgent),t.useNative=!e.register&&t.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative);}(window.CustomElements),window.CustomElements.addModule(function(t){function e(t,e){n(t,function(t){return e(t)?!0:void i(t,e)}),i(t,e);}function n(t,e,i){var o=t.firstElementChild;if(!o)for(o=t.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)e(o,i)!==!0&&n(o,e,i),o=o.nextElementSibling;return null}function i(t,n){for(var i=t.shadowRoot;i;)e(i,n),i=i.olderShadowRoot;}function o(t,e){r(t,e,[]);}function r(t,e,n){if(t=window.wrap(t),!(n.indexOf(t)>=0)){n.push(t);for(var i,o=t.querySelectorAll("link[rel="+s+"]"),a=0,u=o.length;u>a&&(i=o[a]);a++)i.import&&r(i.import,e,n);e(t);}}var s=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t.forDocumentTree=o,t.forSubtree=e;}),window.CustomElements.addModule(function(t){function e(t,e){return n(t,e)||i(t,e)}function n(e,n){return t.upgrade(e,n)?!0:void(n&&s(e))}function i(t,e){b(t,function(t){return n(t,e)?!0:void 0});}function o(t){w.push(t),x||(x=!0,setTimeout(r));}function r(){x=!1;for(var t,e=w,n=0,i=e.length;i>n&&(t=e[n]);n++)t();w=[];}function s(t){C?o(function(){a(t);}):a(t);}function a(t){t.__upgraded__&&!t.__attached&&(t.__attached=!0,t.attachedCallback&&t.attachedCallback());}function u(t){c(t),b(t,function(t){c(t);});}function c(t){C?o(function(){l(t);}):l(t);}function l(t){t.__upgraded__&&t.__attached&&(t.__attached=!1,t.detachedCallback&&t.detachedCallback());}function h(t){for(var e=t,n=window.wrap(document);e;){if(e==n)return !0;e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host;}}function p(t){if(t.shadowRoot&&!t.shadowRoot.__watched){y.dom&&console.log("watching shadow-root for: ",t.localName);for(var e=t.shadowRoot;e;)g(e),e=e.olderShadowRoot;}}function d(t,n){if(y.dom){var i=n[0];if(i&&"childList"===i.type&&i.addedNodes&&i.addedNodes){for(var o=i.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var r=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";r=r.split("/?").shift().split("/").pop();}console.group("mutations (%d) [%s]",n.length,r||"");}var s=h(t);n.forEach(function(t){"childList"===t.type&&(E(t.addedNodes,function(t){t.localName&&e(t,s);}),E(t.removedNodes,function(t){t.localName&&u(t);}));}),y.dom&&console.groupEnd();}function f(t){for(t=window.wrap(t),t||(t=window.wrap(document));t.parentNode;)t=t.parentNode;var e=t.__observer;e&&(d(t,e.takeRecords()),r());}function g(t){if(!t.__observer){var e=new MutationObserver(d.bind(this,t));e.observe(t,{childList:!0,subtree:!0}),t.__observer=e;}}function m(t){t=window.wrap(t),y.dom&&console.group("upgradeDocument: ",t.baseURI.split("/").pop());var n=t===window.wrap(document);e(t,n),g(t),y.dom&&console.groupEnd();}function v(t){A(t,m);}var y=t.flags,b=t.forSubtree,A=t.forDocumentTree,C=window.MutationObserver._isPolyfilled&&y["throttle-attached"];t.hasPolyfillMutations=C,t.hasThrottledAttached=C;var x=!1,w=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S=Element.prototype.createShadowRoot;S&&(Element.prototype.createShadowRoot=function(){var t=S.call(this);return window.CustomElements.watchShadow(this),t}),t.watchShadow=p,t.upgradeDocumentTree=v,t.upgradeDocument=m,t.upgradeSubtree=i,t.upgradeAll=e,t.attached=s,t.takeRecords=f;}),window.CustomElements.addModule(function(t){function e(e,i){if("template"===e.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var o=e.getAttribute("is"),r=t.getRegisteredDefinition(e.localName)||t.getRegisteredDefinition(o);if(r&&(o&&r.tag==e.localName||!o&&!r.extends))return n(e,r,i)}}function n(e,n,o){return s.upgrade&&console.group("upgrade:",e.localName),n.is&&e.setAttribute("is",n.is),i(e,n),e.__upgraded__=!0,r(e),o&&t.attached(e),t.upgradeSubtree(e,o),s.upgrade&&console.groupEnd(),e}function i(t,e){Object.__proto__?t.__proto__=e.prototype:(o(t,e.prototype,e.native),t.__proto__=e.prototype);}function o(t,e,n){for(var i={},o=e;o!==n&&o!==HTMLElement.prototype;){for(var r,s=Object.getOwnPropertyNames(o),a=0;r=s[a];a++)i[r]||(Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r)),i[r]=1);o=Object.getPrototypeOf(o);}}function r(t){t.createdCallback&&t.createdCallback();}var s=t.flags;t.upgrade=e,t.upgradeWithDefinition=n,t.implementPrototype=i;}),window.CustomElements.addModule(function(t){function e(e,i){var u=i||{};if(!e)throw new Error("document.registerElement: first argument `name` must not be empty");if(e.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e)+"'.");if(o(e))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e)+"'. The type name is invalid.");if(c(e))throw new Error("DuplicateDefinitionError: a type with name '"+String(e)+"' is already registered");return u.prototype||(u.prototype=Object.create(HTMLElement.prototype)),u.__name=e.toLowerCase(),u.extends&&(u.extends=u.extends.toLowerCase()),u.lifecycle=u.lifecycle||{},u.ancestry=r(u.extends),s(u),a(u),n(u.prototype),l(u.__name,u),u.ctor=h(u),u.ctor.prototype=u.prototype,u.prototype.constructor=u.ctor,t.ready&&m(document),u.ctor}function n(t){if(!t.setAttribute._polyfilled){var e=t.setAttribute;t.setAttribute=function(t,n){i.call(this,t,n,e);};var n=t.removeAttribute;t.removeAttribute=function(t){i.call(this,t,null,n);},t.setAttribute._polyfilled=!0;}}function i(t,e,n){t=t.toLowerCase();var i=this.getAttribute(t);n.apply(this,arguments);var o=this.getAttribute(t);this.attributeChangedCallback&&o!==i&&this.attributeChangedCallback(t,i,o);}function o(t){for(var e=0;e<C.length;e++)if(t===C[e])return !0}function r(t){var e=c(t);return e?r(e.extends).concat([e]):[]}function s(t){for(var e,n=t.extends,i=0;e=t.ancestry[i];i++)n=e.is&&e.tag;t.tag=n||t.__name,n&&(t.is=t.__name);}function a(t){if(!Object.__proto__){var e=HTMLElement.prototype;if(t.is){var n=document.createElement(t.tag);e=Object.getPrototypeOf(n);}for(var i,o=t.prototype,r=!1;o;)o==e&&(r=!0),i=Object.getPrototypeOf(o),i&&(o.__proto__=i),o=i;r||console.warn(t.tag+" prototype not found in prototype chain for "+t.is),t.native=e;}}function u(t){return y(E(t.tag),t)}function c(t){return t?x[t.toLowerCase()]:void 0}function l(t,e){x[t]=e;}function h(t){return function(){return u(t)}}function p(t,e,n){return t===w?d(e,n):S(t,e)}function d(t,e){t&&(t=t.toLowerCase()),e&&(e=e.toLowerCase());var n=c(e||t);if(n){if(t==n.tag&&e==n.is)return new n.ctor;if(!e&&!n.is)return new n.ctor}var i;return e?(i=d(t),i.setAttribute("is",e),i):(i=E(t),t.indexOf("-")>=0&&b(i,HTMLElement),i)}function f(t,e){var n=t[e];t[e]=function(){var t=n.apply(this,arguments);return v(t),t};}var g,m=(t.isIE,t.upgradeDocumentTree),v=t.upgradeAll,y=t.upgradeWithDefinition,b=t.implementPrototype,A=t.useNative,C=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],x={},w="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S=document.createElementNS.bind(document);g=Object.__proto__||A?function(t,e){return t instanceof e}:function(t,e){if(t instanceof e)return !0;for(var n=t;n;){if(n===e.prototype)return !0;n=n.__proto__;}return !1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e,document.createElement=d,document.createElementNS=p,t.registry=x,t.instanceof=g,t.reservedTagList=C,t.getRegisteredDefinition=c,document.register=document.registerElement;}),function(t){function e(){r(window.wrap(document)),window.CustomElements.ready=!0;var t=window.requestAnimationFrame||function(t){setTimeout(t,16);};t(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));});});}var n=t.useNative,i=t.initializeModules;if(t.isIE,n){var o=function(){};t.watchShadow=o,t.upgrade=o,t.upgradeAll=o,t.upgradeDocumentTree=o,t.upgradeSubtree=o,t.takeRecords=o,t.instanceof=function(t,e){return t instanceof e};}else i();var r=t.upgradeDocumentTree,s=t.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t){return t}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t){t.import&&s(wrap(t.import));}),"complete"===document.readyState||t.flags.eager)e();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,e);}else e();}(window.CustomElements));}.call(commonjsGlobal),function(){}.call(commonjsGlobal),function(){var t=this;(function(){(function(){this.Trix={VERSION:"1.3.1",ZERO_WIDTH_SPACE:"\ufeff",NON_BREAKING_SPACE:"\xa0",OBJECT_REPLACEMENT_CHARACTER:"\ufffc",browser:{composesExistingText:/Android.*Chrome/.test(navigator.userAgent),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:function(){var t,e,n,i;if("undefined"==typeof InputEvent)return !1;for(i=["data","getTargetRanges","inputType"],t=0,e=i.length;e>t;t++)if(n=i[t],!(n in InputEvent.prototype))return !1;return !0}()},config:{}};}).call(this);}).call(t);var e=t.Trix;((function(){((function(){e.BasicObject=function(){function t(){}var e,n,i;return t.proxyMethod=function(t){var i,o,r,s,a;return r=n(t),i=r.name,s=r.toMethod,a=r.toProperty,o=r.optional,this.prototype[i]=function(){var t,n;return t=null!=s?o?"function"==typeof this[s]?this[s]():void 0:this[s]():null!=a?this[a]:void 0,o?(n=null!=t?t[i]:void 0,null!=n?e.call(n,t,arguments):void 0):(n=t[i],e.call(n,t,arguments))}},n=function(t){var e,n;if(!(n=t.match(i)))throw new Error("can't parse @proxyMethod expression: "+t);return e={name:n[4]},null!=n[2]?e.toMethod=n[1]:e.toProperty=n[1],null!=n[3]&&(e.optional=!0),e},e=Function.prototype.apply,i=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t}();})).call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Object=function(n){function i(){this.id=++o;}var o;return t(i,n),o=0,i.fromJSONString=function(t){return this.fromJSON(JSON.parse(t))},i.prototype.hasSameConstructorAs=function(t){return this.constructor===(null!=t?t.constructor:void 0)},i.prototype.isEqualTo=function(t){return this===t},i.prototype.inspect=function(){var t,e,n;return t=function(){var t,i,o;i=null!=(t=this.contentsForInspection())?t:{},o=[];for(e in i)n=i[e],o.push(e+"="+n);return o}.call(this),"#<"+this.constructor.name+":"+this.id+(t.length?" "+t.join(", "):"")+">"},i.prototype.contentsForInspection=function(){},i.prototype.toJSONString=function(){return JSON.stringify(this)},i.prototype.toUTF16String=function(){return e.UTF16String.box(this)},i.prototype.getCacheKey=function(){return this.id.toString()},i}(e.BasicObject);}.call(this),function(){e.extend=function(t){var e,n;for(e in t)n=t[e],this[e]=n;return this};}.call(this),function(){e.extend({defer:function(t){return setTimeout(t,1)}});}.call(this),function(){var t,n;e.extend({normalizeSpaces:function(t){return t.replace(RegExp(""+e.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e.NON_BREAKING_SPACE,"g")," ")},normalizeNewlines:function(t){return t.replace(/\r\n/g,"\n")},breakableWhitespacePattern:RegExp("[^\\S"+e.NON_BREAKING_SPACE+"]"),squishBreakableWhitespace:function(t){return t.replace(RegExp(""+e.breakableWhitespacePattern.source,"g")," ").replace(/\ {2,}/g," ")},summarizeStringChange:function(t,i){var o,r,s,a;return t=e.UTF16String.box(t),i=e.UTF16String.box(i),i.length<t.length?(r=n(t,i),a=r[0],o=r[1]):(s=n(i,t),o=s[0],a=s[1]),{added:o,removed:a}}}),n=function(n,i){var o,r,s,a,u;return n.isEqualTo(i)?["",""]:(r=t(n,i),a=r.utf16String.length,s=a?(u=r.offset,o=n.codepoints.slice(0,u).concat(n.codepoints.slice(u+a)),t(i,e.UTF16String.fromCodepoints(o))):t(i,n),[r.utf16String.toString(),s.utf16String.toString()])},t=function(t,e){var n,i,o;for(n=0,i=t.length,o=e.length;i>n&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;i>n+1&&t.charAt(i-1).isEqualTo(e.charAt(o-1));)i--,o--;return {utf16String:t.slice(n,i),offset:n}};}.call(this),function(){e.extend({copyObject:function(t){var e,n,i;null==t&&(t={}),n={};for(e in t)i=t[e],n[e]=i;return n},objectsAreEqual:function(t,e){var n,i;if(null==t&&(t={}),null==e&&(e={}),Object.keys(t).length!==Object.keys(e).length)return !1;for(n in t)if(i=t[n],i!==e[n])return !1;return !0}});}.call(this),function(){var t=[].slice;e.extend({arraysAreEqual:function(t,e){var n,i,o,r;if(null==t&&(t=[]),null==e&&(e=[]),t.length!==e.length)return !1;for(i=n=0,o=t.length;o>n;i=++n)if(r=t[i],r!==e[i])return !1;return !0},arrayStartsWith:function(t,n){return null==t&&(t=[]),null==n&&(n=[]),e.arraysAreEqual(t.slice(0,n.length),n)},spliceArray:function(){var e,n,i;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i=n.slice(0),i.splice.apply(i,e),i},summarizeArrayChange:function(t,e){var n,i,o,r,s,a,u,c,l,h,p;for(null==t&&(t=[]),null==e&&(e=[]),n=[],h=[],o=new Set,r=0,u=t.length;u>r;r++)p=t[r],o.add(p);for(i=new Set,s=0,c=e.length;c>s;s++)p=e[s],i.add(p),o.has(p)||n.push(p);for(a=0,l=t.length;l>a;a++)p=t[a],i.has(p)||h.push(p);return {added:n,removed:h}}});}.call(this),function(){var t,n,i,o;t=null,n=null,o=null,i=null,e.extend({getAllAttributeNames:function(){return null!=t?t:t=e.getTextAttributeNames().concat(e.getBlockAttributeNames())},getBlockConfig:function(t){return e.config.blockAttributes[t]},getBlockAttributeNames:function(){return null!=n?n:n=Object.keys(e.config.blockAttributes)},getTextConfig:function(t){return e.config.textAttributes[t]},getTextAttributeNames:function(){return null!=o?o:o=Object.keys(e.config.textAttributes)},getListAttributeNames:function(){var t,n;return null!=i?i:i=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].listAttribute,null!=n&&o.push(n);return o}()}});}.call(this),function(){var t,n,i,o,r,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=document.documentElement,n=null!=(i=null!=(o=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?o:t.msMatchesSelector)?i:t.mozMatchesSelector,e.extend({handleEvent:function(n,i){var r,s,a,u,c,l,h,p,d,f,g;return h=null!=i?i:{},c=h.onElement,u=h.matchingSelector,g=h.withCallback,a=h.inPhase,l=h.preventDefault,d=h.times,r=null!=c?c:t,p=u,f="capturing"===a,s=function(t){var n;return null!=d&&0===--d&&s.destroy(),n=e.findClosestElementFromNode(t.target,{matchingSelector:p}),null!=n&&(null!=g&&g.call(n,t,n),l)?t.preventDefault():void 0},s.destroy=function(){return r.removeEventListener(n,s,f)},r.addEventListener(n,s,f),s},handleEventOnce:function(t,n){return null==n&&(n={}),n.times=1,e.handleEvent(t,n)},triggerEvent:function(n,i){var o,r,s,a,u,c,l;return l=null!=i?i:{},c=l.onElement,r=l.bubbles,s=l.cancelable,o=l.attributes,a=null!=c?c:t,r=r!==!1,s=s!==!1,u=document.createEvent("Events"),u.initEvent(n,r,s),null!=o&&e.extend.call(u,o),a.dispatchEvent(u)},elementMatchesSelector:function(t,e){return 1===(null!=t?t.nodeType:void 0)?n.call(t,e):void 0},findClosestElementFromNode:function(t,n){var i,o,r;for(o=null!=n?n:{},i=o.matchingSelector,r=o.untilNode;null!=t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==i)return t;if(t.closest&&null==r)return t.closest(i);for(;t&&t!==r;){if(e.elementMatchesSelector(t,i))return t;t=t.parentNode;}}},findInnerElement:function(t){for(;null!=t?t.firstElementChild:void 0;)t=t.firstElementChild;return t},innerElementIsActive:function(t){return document.activeElement!==t&&e.elementContainsNode(t,document.activeElement)},elementContainsNode:function(t,e){if(t&&e)for(;e;){if(e===t)return !0;e=e.parentNode;}},findNodeFromContainerAndOffset:function(t,e){var n;if(t)return t.nodeType===Node.TEXT_NODE?t:0===e?null!=(n=t.firstChild)?n:t:t.childNodes.item(e-1)},findElementFromContainerAndOffset:function(t,n){var i;return i=e.findNodeFromContainerAndOffset(t,n),e.findClosestElementFromNode(i)},findChildIndexOfNode:function(t){var e;if(null!=t?t.parentNode:void 0){for(e=0;t=t.previousSibling;)e++;return e}},removeNode:function(t){var e;return null!=t&&null!=(e=t.parentNode)?e.removeChild(t):void 0},walkTree:function(t,e){var n,i,o,r,s;return o=null!=e?e:{},i=o.onlyNodesOfType,r=o.usingFilter,n=o.expandEntityReferences,s=function(){switch(i){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}}(),document.createTreeWalker(t,s,null!=r?r:null,n===!0)},tagName:function(t){var e;return null!=t&&null!=(e=t.tagName)?e.toLowerCase():void 0},makeElement:function(t,e){var n,i,o,r,s,a,u,c,l,h,p,d,f,g;if(null==e&&(e={}),"object"==typeof t?(e=t,t=e.tagName):e={attributes:e},o=document.createElement(t),null!=e.editable&&(null==e.attributes&&(e.attributes={}),e.attributes.contenteditable=e.editable),e.attributes){l=e.attributes;for(a in l)g=l[a],o.setAttribute(a,g);}if(e.style){h=e.style;for(a in h)g=h[a],o.style[a]=g;}if(e.data){p=e.data;for(a in p)g=p[a],o.dataset[a]=g;}if(e.className)for(d=e.className.split(" "),r=0,u=d.length;u>r;r++)i=d[r],o.classList.add(i);if(e.textContent&&(o.textContent=e.textContent),e.childNodes)for(f=[].concat(e.childNodes),s=0,c=f.length;c>s;s++)n=f[s],o.appendChild(n);return o},getBlockTagNames:function(){var t,n;return null!=e.blockTagNames?e.blockTagNames:e.blockTagNames=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].tagName,n&&o.push(n);return o}()},nodeIsBlockContainer:function(t){return e.nodeIsBlockStartComment(null!=t?t.firstChild:void 0)},nodeProbablyIsBlockContainer:function(t){var n,i;return n=e.tagName(t),s.call(e.getBlockTagNames(),n)>=0&&(i=e.tagName(t.firstChild),s.call(e.getBlockTagNames(),i)<0)},nodeIsBlockStart:function(t,n){var i;return i=(null!=n?n:{strict:!0}).strict,i?e.nodeIsBlockStartComment(t):e.nodeIsBlockStartComment(t)||!e.nodeIsBlockStartComment(t.firstChild)&&e.nodeProbablyIsBlockContainer(t)},nodeIsBlockStartComment:function(t){return e.nodeIsCommentNode(t)&&"block"===(null!=t?t.data:void 0)},nodeIsCommentNode:function(t){return (null!=t?t.nodeType:void 0)===Node.COMMENT_NODE},nodeIsCursorTarget:function(t,n){var i;return i=(null!=n?n:{}).name,t?e.nodeIsTextNode(t)?t.data===e.ZERO_WIDTH_SPACE?i?t.parentNode.dataset.trixCursorTarget===i:!0:void 0:e.nodeIsCursorTarget(t.firstChild):void 0},nodeIsAttachmentElement:function(t){return e.elementMatchesSelector(t,e.AttachmentView.attachmentSelector)},nodeIsEmptyTextNode:function(t){return e.nodeIsTextNode(t)&&""===(null!=t?t.data:void 0)},nodeIsTextNode:function(t){return (null!=t?t.nodeType:void 0)===Node.TEXT_NODE}});}.call(this),function(){var t,n,i,o,r;t=e.copyObject,o=e.objectsAreEqual,e.extend({normalizeRange:i=function(t){var e;if(null!=t)return Array.isArray(t)||(t=[t,t]),[n(t[0]),n(null!=(e=t[1])?e:t[0])]},rangeIsCollapsed:function(t){var e,n,o;if(null!=t)return n=i(t),o=n[0],e=n[1],r(o,e)},rangesAreEqual:function(t,e){var n,o,s,a,u,c;if(null!=t&&null!=e)return s=i(t),o=s[0],n=s[1],a=i(e),c=a[0],u=a[1],r(o,c)&&r(n,u)}}),n=function(e){return "number"==typeof e?e:t(e)},r=function(t,e){return "number"==typeof t?t===e:o(t,e)};}.call(this),function(){var t,n,i,o,r,s,a;e.registerElement=function(t,e){var n,i;return null==e&&(e={}),t=t.toLowerCase(),e=a(e),i=s(e),(n=i.defaultCSS)&&(delete i.defaultCSS,o(n,t)),r(t,i)},o=function(t,e){var n;return n=i(e),n.textContent=t.replace(/%t/g,e)},i=function(e){var n,i;return n=document.createElement("style"),n.setAttribute("type","text/css"),n.setAttribute("data-tag-name",e.toLowerCase()),(i=t())&&n.setAttribute("nonce",i),document.head.insertBefore(n,document.head.firstChild),n},t=function(){var t;return (t=n("trix-csp-nonce")||n("csp-nonce"))?t.getAttribute("content"):void 0},n=function(t){return document.head.querySelector("meta[name="+t+"]")},s=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]="function"==typeof i?{value:i}:i;return n},a=function(){var t;return t=function(t){var e,n,i,o,r;for(e={},r=["initialize","connect","disconnect"],n=0,o=r.length;o>n;n++)i=r[n],e[i]=t[i],delete t[i];return e},window.customElements?function(e){var n,i,o,r,s;return s=t(e),o=s.initialize,n=s.connect,i=s.disconnect,o&&(r=n,n=function(){return this.initialized||(this.initialized=!0,o.call(this)),null!=r?r.call(this):void 0}),n&&(e.connectedCallback=n),i&&(e.disconnectedCallback=i),e}:function(e){var n,i,o,r;return r=t(e),o=r.initialize,n=r.connect,i=r.disconnect,o&&(e.createdCallback=o),n&&(e.attachedCallback=n),i&&(e.detachedCallback=i),e}}(),r=function(){return window.customElements?function(t,e){var n;return n=function(){return "object"==typeof Reflect?Reflect.construct(HTMLElement,[],n):HTMLElement.apply(this)},Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement),Object.defineProperties(n.prototype,e),window.customElements.define(t,n),n}:function(t,e){var n,i;return i=Object.create(HTMLElement.prototype,e),n=document.registerElement(t,{prototype:i}),Object.defineProperty(i,"constructor",{value:n}),n}}();}.call(this),function(){var t,n;e.extend({getDOMSelection:function(){var t;return t=window.getSelection(),t.rangeCount>0?t:void 0},getDOMRange:function(){var n,i;return (n=null!=(i=e.getDOMSelection())?i.getRangeAt(0):void 0)&&!t(n)?n:void 0},setDOMRange:function(t){var n;return n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.selectionChangeObserver.update()}}),t=function(t){return n(t.startContainer)||n(t.endContainer)},n=function(t){return !Object.getPrototypeOf(t)};}.call(this),function(){var t;t={"application/x-trix-feature-detection":"test"},e.extend({dataTransferIsPlainText:function(t){var e,n,i;return i=t.getData("text/plain"),n=t.getData("text/html"),i&&n?(e=(new DOMParser).parseFromString(n,"text/html").body,e.textContent===i?!e.querySelector("*"):void 0):null!=i?i.length:void 0},dataTransferIsWritable:function(e){var n,i;if(null!=(null!=e?e.setData:void 0)){for(n in t)if(i=t[n],!function(){try{return e.setData(n,i),e.getData(n)===i}catch(t){}}())return;return !0}},keyEventIsKeyboardCommand:function(){return /Mac|^iP/.test(navigator.platform)?function(t){return t.metaKey}:function(t){return t.ctrlKey}}()});}.call(this),function(){e.extend({RTL_PATTERN:/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,getDirection:function(){var t,n,i,o;return n=e.makeElement("input",{dir:"auto",name:"x",dirName:"x.dir"}),t=e.makeElement("form"),t.appendChild(n),i=function(){try{return new FormData(t).has(n.dirName)}catch(e){}}(),o=function(){try{return n.matches(":dir(ltr),:dir(rtl)")}catch(t){}}(),i?function(e){return n.value=e,new FormData(t).get(n.dirName)}:o?function(t){return n.value=t,n.matches(":dir(rtl)")?"rtl":"ltr"}:function(t){var n;return n=t.trim().charAt(0),e.RTL_PATTERN.test(n)?"rtl":"ltr"}}()});}.call(this),function(){}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.arraysAreEqual,e.Hash=function(i){function o(t){null==t&&(t={}),this.values=s(t),o.__super__.constructor.apply(this,arguments);}var r,s,a,u,c;return n(o,i),o.fromCommonAttributesOfObjects=function(t){var e,n,i,o,s,a;if(null==t&&(t=[]),!t.length)return new this;for(e=r(t[0]),i=e.getKeys(),a=t.slice(1),n=0,o=a.length;o>n;n++)s=a[n],i=e.getKeysCommonToHash(r(s)),e=e.slice(i);return e},o.box=function(t){return r(t)},o.prototype.add=function(t,e){return this.merge(u(t,e))},o.prototype.remove=function(t){return new e.Hash(s(this.values,t))},o.prototype.get=function(t){return this.values[t]},o.prototype.has=function(t){return t in this.values},o.prototype.merge=function(t){return new e.Hash(a(this.values,c(t)))},o.prototype.slice=function(t){var n,i,o,r;for(r={},n=0,o=t.length;o>n;n++)i=t[n],this.has(i)&&(r[i]=this.values[i]);return new e.Hash(r)},o.prototype.getKeys=function(){return Object.keys(this.values)},o.prototype.getKeysCommonToHash=function(t){var e,n,i,o,s;for(t=r(t),o=this.getKeys(),s=[],e=0,i=o.length;i>e;e++)n=o[e],this.values[n]===t.values[n]&&s.push(n);return s},o.prototype.isEqualTo=function(e){return t(this.toArray(),r(e).toArray())},o.prototype.isEmpty=function(){return 0===this.getKeys().length},o.prototype.toArray=function(){var t,e,n;return (null!=this.array?this.array:this.array=function(){var i;e=[],i=this.values;for(t in i)n=i[t],e.push(t,n);return e}.call(this)).slice(0)},o.prototype.toObject=function(){return s(this.values)},o.prototype.toJSON=function(){return this.toObject()},o.prototype.contentsForInspection=function(){return {values:JSON.stringify(this.values)}},u=function(t,e){var n;return n={},n[t]=e,n},a=function(t,e){var n,i,o;i=s(t);for(n in e)o=e[n],i[n]=o;return i},s=function(t,e){var n,i,o,r,s;for(r={},s=Object.keys(t).sort(),n=0,o=s.length;o>n;n++)i=s[n],i!==e&&(r[i]=t[i]);return r},r=function(t){return t instanceof e.Hash?t:new e.Hash(t)},c=function(t){return t instanceof e.Hash?t.values:t
	},o}(e.Object);}.call(this),function(){e.ObjectGroup=function(){function t(t,e){var n,i;this.objects=null!=t?t:[],i=e.depth,n=e.asTree,n&&(this.depth=i,this.objects=this.constructor.groupObjects(this.objects,{asTree:n,depth:this.depth+1}));}return t.groupObjects=function(t,e){var n,i,o,r,s,a,u,c,l;for(null==t&&(t=[]),l=null!=e?e:{},o=l.depth,n=l.asTree,n&&null==o&&(o=0),c=[],s=0,a=t.length;a>s;s++){if(u=t[s],r){if(("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)&&("function"==typeof(i=r[r.length-1]).canBeGroupedWith?i.canBeGroupedWith(u,o):void 0)){r.push(u);continue}c.push(new this(r,{depth:o,asTree:n})),r=null;}("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)?r=[u]:c.push(u);}return r&&c.push(new this(r,{depth:o,asTree:n})),c},t.prototype.getObjects=function(){return this.objects},t.prototype.getDepth=function(){return this.depth},t.prototype.getCacheKey=function(){var t,e,n,i,o;for(e=["objectGroup"],o=this.getObjects(),t=0,n=o.length;n>t;t++)i=o[t],e.push(i.getCacheKey());return e.join("/")},t}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectMap=function(e){function n(t){var e,n,i,o,r;for(null==t&&(t=[]),this.objects={},i=0,o=t.length;o>i;i++)r=t[i],n=JSON.stringify(r),null==(e=this.objects)[n]&&(e[n]=r);}return t(n,e),n.prototype.find=function(t){var e;return e=JSON.stringify(t),this.objects[e]},n}(e.BasicObject);}.call(this),function(){e.ElementStore=function(){function t(t){this.reset(t);}var e;return t.prototype.add=function(t){var n;return n=e(t),this.elements[n]=t},t.prototype.remove=function(t){var n,i;return n=e(t),(i=this.elements[n])?(delete this.elements[n],i):void 0},t.prototype.reset=function(t){var e,n,i;for(null==t&&(t=[]),this.elements={},n=0,i=t.length;i>n;n++)e=t[n],this.add(e);return t},e=function(t){return t.dataset.trixStoreKey},t}();}.call(this),function(){}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Operation=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.isPerforming=function(){return this.performing===!0},n.prototype.hasPerformed=function(){return this.performed===!0},n.prototype.hasSucceeded=function(){return this.performed&&this.succeeded},n.prototype.hasFailed=function(){return this.performed&&!this.succeeded},n.prototype.getPromise=function(){return null!=this.promise?this.promise:this.promise=new Promise(function(t){return function(e,n){return t.performing=!0,t.perform(function(i,o){return t.succeeded=i,t.performing=!1,t.performed=!0,t.succeeded?e(o):n(o)})}}(this))},n.prototype.perform=function(t){return t(!1)},n.prototype.release=function(){var t;return null!=(t=this.promise)&&"function"==typeof t.cancel&&t.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null},n.proxyMethod("getPromise().then"),n.proxyMethod("getPromise().catch"),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;e.UTF16String=function(t){function e(t,e){this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length;}return s(e,t),e.box=function(t){return null==t&&(t=""),t instanceof this?t:this.fromUCS2String(null!=t?t.toString():void 0)},e.fromUCS2String=function(t){return new this(t,o(t))},e.fromCodepoints=function(t){return new this(r(t),t)},e.prototype.offsetToUCS2Offset=function(t){return r(this.codepoints.slice(0,Math.max(0,t))).length},e.prototype.offsetFromUCS2Offset=function(t){return o(this.ucs2String.slice(0,Math.max(0,t))).length},e.prototype.slice=function(){var t;return this.constructor.fromCodepoints((t=this.codepoints).slice.apply(t,arguments))},e.prototype.charAt=function(t){return this.slice(t,t+1)},e.prototype.isEqualTo=function(t){return this.constructor.box(t).ucs2String===this.ucs2String},e.prototype.toJSON=function(){return this.ucs2String},e.prototype.getCacheKey=function(){return this.ucs2String},e.prototype.toString=function(){return this.ucs2String},e}(e.BasicObject),t=1===("function"==typeof Array.from?Array.from("\ud83d\udc7c").length:void 0),n=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),i=" \ud83d\udc7c"===("function"==typeof String.fromCodePoint?String.fromCodePoint(32,128124):void 0),o=t&&n?function(t){return Array.from(t).map(function(t){return t.codePointAt(0)})}:function(t){var e,n,i,o,r;for(o=[],e=0,i=t.length;i>e;)r=t.charCodeAt(e++),r>=55296&&56319>=r&&i>e&&(n=t.charCodeAt(e++),56320===(64512&n)?r=((1023&r)<<10)+(1023&n)+65536:e--),o.push(r);return o},r=i?function(t){return String.fromCodePoint.apply(String,t)}:function(t){var e,n,i;return e=function(){var e,o,r;for(r=[],e=0,o=t.length;o>e;e++)i=t[e],n="",i>65535&&(i-=65536,n+=String.fromCharCode(i>>>10&1023|55296),i=56320|1023&i),r.push(n+String.fromCharCode(i));return r}(),e.join("")};}.call(this),function(){}.call(this),function(){}.call(this),function(){e.config.lang={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};}.call(this),function(){e.config.css={attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"};}.call(this),function(){var t;e.config.blockAttributes=t={"default":{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}};}.call(this),function(){var t,n;t=e.config.lang,n=[t.bytes,t.KB,t.MB,t.GB,t.TB,t.PB],e.config.fileSize={prefix:"IEC",precision:2,formatter:function(e){var i,o,r,s,a;switch(e){case 0:return "0 "+t.bytes;case 1:return "1 "+t.byte;default:return i=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024}}.call(this),o=Math.floor(Math.log(e)/Math.log(i)),r=e/Math.pow(i,o),s=r.toFixed(this.precision),a=s.replace(/0*$/,"").replace(/\.$/,""),a+" "+n[o]}}};}.call(this),function(){e.config.textAttributes={bold:{tagName:"strong",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"italic"===e.fontStyle}},href:{groupTagName:"a",parser:function(t){var n,i,o;return n=e.AttachmentView.attachmentSelector,o="a:not("+n+")",(i=e.findClosestElementFromNode(t,{matchingSelector:o}))?i.getAttribute("href"):void 0}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}};}.call(this),function(){var t,n,i,o,r;r="[data-trix-serialize=false]",o=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],n="data-trix-serialized-attributes",i="["+n+"]",t=new RegExp("<!--block-->","g"),e.extend({serializers:{"application/json":function(t){var n;if(t instanceof e.Document)n=t;else {if(!(t instanceof HTMLElement))throw new Error("unserializable object");n=e.Document.fromHTML(t.innerHTML);}return n.toSerializableDocument().toJSONString()},"text/html":function(s){var a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;if(s instanceof e.Document)l=e.DocumentView.render(s);else {if(!(s instanceof HTMLElement))throw new Error("unserializable object");l=s.cloneNode(!0);}for(A=l.querySelectorAll(r),h=0,g=A.length;g>h;h++)c=A[h],e.removeNode(c);for(p=0,m=o.length;m>p;p++)for(a=o[p],C=l.querySelectorAll("["+a+"]"),d=0,v=C.length;v>d;d++)c=C[d],c.removeAttribute(a);for(x=l.querySelectorAll(i),f=0,y=x.length;y>f;f++){c=x[f];try{u=JSON.parse(c.getAttribute(n)),c.removeAttribute(n);for(b in u)w=u[b],c.setAttribute(b,w);}catch(E){}}return l.innerHTML.replace(t,"")}},deserializers:{"application/json":function(t){return e.Document.fromJSONString(t)},"text/html":function(t){return e.Document.fromHTML(t)}},serializeToContentType:function(t,n){var i;if(i=e.serializers[n])return i(t);throw new Error("unknown content type: "+n)},deserializeFromContentType:function(t,n){var i;if(i=e.deserializers[n])return i(t);throw new Error("unknown content type: "+n)}});}.call(this),function(){var t;t=e.config.lang,e.config.toolbar={getDefaultHTML:function(){return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'+t.bold+'" tabindex="-1">'+t.bold+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="'+t.italic+'" tabindex="-1">'+t.italic+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="'+t.strike+'" tabindex="-1">'+t.strike+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t.link+'" tabindex="-1">'+t.link+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="'+t.heading1+'" tabindex="-1">'+t.heading1+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="'+t.quote+'" tabindex="-1">'+t.quote+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="'+t.code+'" tabindex="-1">'+t.code+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="'+t.bullets+'" tabindex="-1">'+t.bullets+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="'+t.numbers+'" tabindex="-1">'+t.numbers+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="'+t.outdent+'" tabindex="-1">'+t.outdent+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="'+t.indent+'" tabindex="-1">'+t.indent+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="'+t.attachFiles+'" tabindex="-1">'+t.attachFiles+'</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="'+t.undo+'" tabindex="-1">'+t.undo+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t.redo+'" tabindex="-1">'+t.redo+'</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="'+t.urlPlaceholder+'" aria-label="'+t.url+'" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.link+'" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'}};}.call(this),function(){e.config.undoInterval=5e3;}.call(this),function(){e.config.attachments={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}};}.call(this),function(){e.config.keyNames={8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"};}.call(this),function(){e.config.input={level2Enabled:!0,getLevel:function(){return this.level2Enabled&&e.browser.supportsInputEvents?2:0},pickFiles:function(t){var n;return n=e.makeElement("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId}),n.addEventListener("change",function(){return t(n.files),e.removeNode(n)}),e.removeNode(document.getElementById(this.fileInputId)),document.body.appendChild(n),n.click()},fileInputId:"trix-file-input-"+Date.now().toString(16)};}.call(this),function(){}.call(this),function(){e.registerElement("trix-toolbar",{defaultCSS:"%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",initialize:function(){return ""===this.innerHTML?this.innerHTML=e.config.toolbar.getDefaultHTML():void 0}});}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};e.ObjectView=function(n){function o(t,e){this.object=t,this.options=null!=e?e:{},this.childViews=[],this.rootView=this;}return t(o,n),o.prototype.getNodes=function(){var t,e,n,i,o;for(null==this.nodes&&(this.nodes=this.createNodes()),i=this.nodes,o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.cloneNode(!0));return o},o.prototype.invalidate=function(){var t;return this.nodes=null,this.childViews=[],null!=(t=this.parentView)?t.invalidate():void 0},o.prototype.invalidateViewForObject=function(t){var e;return null!=(e=this.findViewForObject(t))?e.invalidate():void 0},o.prototype.findOrCreateCachedChildView=function(t,e){var n;return (n=this.getCachedViewForObject(e))?this.recordChildView(n):(n=this.createChildView.apply(this,arguments),this.cacheViewForObject(n,e)),n},o.prototype.createChildView=function(t,n,i){var o;return null==i&&(i={}),n instanceof e.ObjectGroup&&(i.viewClass=t,t=e.ObjectGroupView),o=new t(n,i),this.recordChildView(o)},o.prototype.recordChildView=function(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t},o.prototype.getAllChildViews=function(){var t,e,n,i,o;for(o=[],i=this.childViews,e=0,n=i.length;n>e;e++)t=i[e],o.push(t),o=o.concat(t.getAllChildViews());return o},o.prototype.findElement=function(){return this.findElementForObject(this.object)},o.prototype.findElementForObject=function(t){var e;return (e=null!=t?t.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e+"']"):void 0},o.prototype.findViewForObject=function(t){var e,n,i,o;for(i=this.getAllChildViews(),e=0,n=i.length;n>e;e++)if(o=i[e],o.object===t)return o},o.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?null!=this.viewCache?this.viewCache:this.viewCache={}:void 0},o.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==!1},o.prototype.enableViewCaching=function(){return this.shouldCacheViews=!0},o.prototype.disableViewCaching=function(){return this.shouldCacheViews=!1},o.prototype.getCachedViewForObject=function(t){var e;return null!=(e=this.getViewCache())?e[t.getCacheKey()]:void 0},o.prototype.cacheViewForObject=function(t,e){var n;return null!=(n=this.getViewCache())?n[e.getCacheKey()]=t:void 0},o.prototype.garbageCollectCachedViews=function(){var t,e,n,o,r,s;if(t=this.getViewCache()){s=this.getAllChildViews().concat(this),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)r=s[t],n.push(r.object.getCacheKey());return n}(),o=[];for(e in t)i.call(n,e)<0&&o.push(delete t[e]);return o}},o}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectGroupView=function(e){function n(){n.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass;}return t(n,e),n.prototype.getChildViews=function(){var t,e,n,i;if(!this.childViews.length)for(i=this.objectGroup.getObjects(),t=0,e=i.length;e>t;t++)n=i[t],this.findOrCreateCachedChildView(this.viewClass,n,this.options);return this.childViews},n.prototype.createNodes=function(){var t,e,n,i,o,r,s,a,u;for(t=this.createContainerElement(),s=this.getChildViews(),e=0,i=s.length;i>e;e++)for(u=s[e],a=u.getNodes(),n=0,o=a.length;o>n;n++)r=a[n],t.appendChild(r);return [t]},n.prototype.createContainerElement=function(t){return null==t&&(t=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t)},n}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Controller=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t;}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.findClosestElementFromNode,i=e.nodeIsEmptyTextNode,n=e.nodeIsBlockStartComment,o=e.normalizeSpaces,r=e.summarizeStringChange,s=e.tagName,e.MutationObserver=function(e){function c(t){this.element=t,this.didMutate=a(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start();}var h,p,d,f;return u(c,e),p="data-trix-mutable",d="["+p+"]",f={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},c.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f)},c.prototype.stop=function(){return this.observer.disconnect()},c.prototype.didMutate=function(t){var e,n;return (e=this.mutations).push.apply(e,this.findSignificantMutations(t)),this.mutations.length?(null!=(n=this.delegate)&&"function"==typeof n.elementDidMutate&&n.elementDidMutate(this.getMutationSummary()),this.reset()):void 0},c.prototype.reset=function(){return this.mutations=[]},c.prototype.findSignificantMutations=function(t){var e,n,i,o;for(o=[],e=0,n=t.length;n>e;e++)i=t[e],this.mutationIsSignificant(i)&&o.push(i);return o},c.prototype.mutationIsSignificant=function(t){var e,n,i,o;if(this.nodeIsMutable(t.target))return !1;for(o=this.nodesModifiedByMutation(t),e=0,n=o.length;n>e;e++)if(i=o[e],this.nodeIsSignificant(i))return !0;return !1},c.prototype.nodeIsSignificant=function(t){return t!==this.element&&!this.nodeIsMutable(t)&&!i(t)},c.prototype.nodeIsMutable=function(e){return t(e,{matchingSelector:d})},c.prototype.nodesModifiedByMutation=function(t){var e;switch(e=[],t.type){case"attributes":t.attributeName!==p&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push.apply(e,t.addedNodes),e.push.apply(e,t.removedNodes);}return e},c.prototype.getMutationSummary=function(){return this.getTextMutationSummary()},c.prototype.getTextMutationSummary=function(){var t,e,n,i,o,r,s,a,u,c,h;for(a=this.getTextChangesFromCharacterData(),n=a.additions,o=a.deletions,h=this.getTextChangesFromChildList(),u=h.additions,r=0,s=u.length;s>r;r++)e=u[r],l.call(n,e)<0&&n.push(e);return o.push.apply(o,h.deletions),c={},(t=n.join(""))&&(c.textAdded=t),(i=o.join(""))&&(c.textDeleted=i),c},c.prototype.getMutationsByType=function(t){var e,n,i,o,r;for(o=this.mutations,r=[],e=0,n=o.length;n>e;e++)i=o[e],i.type===t&&r.push(i);return r},c.prototype.getTextChangesFromChildList=function(){var t,e,i,r,s,a,u,c,l,p,d;for(t=[],u=[],a=this.getMutationsByType("childList"),e=0,r=a.length;r>e;e++)s=a[e],t.push.apply(t,s.addedNodes),u.push.apply(u,s.removedNodes);return c=0===t.length&&1===u.length&&n(u[0]),c?(p=[],d=["\n"]):(p=h(t),d=h(u)),{additions:function(){var t,e,n;for(n=[],i=t=0,e=p.length;e>t;i=++t)l=p[i],l!==d[i]&&n.push(o(l));return n}(),deletions:function(){var t,e,n;for(n=[],i=t=0,e=d.length;e>t;i=++t)l=d[i],l!==p[i]&&n.push(o(l));return n}()}},c.prototype.getTextChangesFromCharacterData=function(){var t,e,n,i,s,a,u,c;return e=this.getMutationsByType("characterData"),e.length&&(c=e[0],n=e[e.length-1],s=o(c.oldValue),i=o(n.target.data),a=r(s,i),t=a.added,u=a.removed),{additions:t?[t]:[],deletions:u?[u]:[]}},h=function(t){var e,n,i,o;for(null==t&&(t=[]),o=[],e=0,n=t.length;n>e;e++)switch(i=t[e],i.nodeType){case Node.TEXT_NODE:o.push(i.data);break;case Node.ELEMENT_NODE:"br"===s(i)?o.push("\n"):o.push.apply(o,h(i.childNodes));}return o},c}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.FileVerificationOperation=function(e){function n(t){this.file=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new FileReader,e.onerror=function(){return t(!1)},e.onload=function(n){return function(){e.onerror=null;try{e.abort();}catch(i){}return t(!0,n.file)}}(this),e.readAsArrayBuffer(this.file)},n}(e.Operation);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.handleEvent,n=e.innerElementIsActive,e.InputController=function(o){function r(n){var i;this.element=n,this.mutationObserver=new e.MutationObserver(this.element),this.mutationObserver.delegate=this;for(i in this.events)t(i,{onElement:this.element,withCallback:this.handlerFor(i)});}return i(r,o),r.prototype.events={},r.prototype.elementDidMutate=function(){},r.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop()},r.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start()},r.prototype.requestRender=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestRender?t.inputControllerDidRequestRender():void 0},r.prototype.requestReparse=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestReparse&&t.inputControllerDidRequestReparse(),this.requestRender()},r.prototype.attachFiles=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(new e.FileVerificationOperation(n));return r}(),Promise.all(i).then(function(t){return function(e){return t.handleInput(function(){var t,n;return null!=(t=this.delegate)&&t.inputControllerWillAttachFiles(),null!=(n=this.responder)&&n.insertFiles(e),this.requestRender()})}}(this))},r.prototype.handlerFor=function(t){return function(e){return function(i){return i.defaultPrevented?void 0:e.handleInput(function(){return n(this.element)?void 0:(this.eventName=t,this.events[t].call(this,i))})}}(this)},r.prototype.handleInput=function(t){var e,n;try{return null!=(e=this.delegate)&&e.inputControllerWillHandleInput(),t.call(this)}finally{null!=(n=this.delegate)&&n.inputControllerDidHandleInput();}},r.prototype.createLinkHTML=function(t,e){var n;return n=document.createElement("a"),n.href=t,n.textContent=null!=e?e:t,n.outerHTML},r}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p,f=function(t,e){function n(){this.constructor=t;}for(var i in e)g.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},g={}.hasOwnProperty,m=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};c=e.makeElement,l=e.objectsAreEqual,e.tagName,n=e.browser,a=e.keyEventIsKeyboardCommand,o=e.dataTransferIsWritable,i=e.dataTransferIsPlainText,u=e.config.keyNames,e.Level0InputController=function(n){function s(){s.__super__.constructor.apply(this,arguments),this.resetInputSummary();}var d;return f(s,n),d=0,s.prototype.setInputSummary=function(t){var e,n;null==t&&(t={}),this.inputSummary.eventName=this.eventName;for(e in t)n=t[e],this.inputSummary[e]=n;return this.inputSummary},s.prototype.resetInputSummary=function(){return this.inputSummary={}},s.prototype.reset=function(){return this.resetInputSummary(),e.selectionChangeObserver.reset()},s.prototype.elementDidMutate=function(t){var e;return this.isComposing()?null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidAllowUnhandledInput?e.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()})},s.prototype.mutationIsExpected=function(t){var e,n,i,o,r,s,a,u,c,l;return a=t.textAdded,u=t.textDeleted,this.inputSummary.preferDocument?!0:(e=null!=a?a===this.inputSummary.textAdded:!this.inputSummary.textAdded,n=null!=u?this.inputSummary.didDelete:!this.inputSummary.didDelete,c=("\n"===a||" \n"===a)&&!e,l="\n"===u&&!n,s=c&&!l||l&&!c,s&&(o=this.getSelectedRange())&&(i=c?a.replace(/\n$/,"").length||-1:(null!=a?a.length:void 0)||1,null!=(r=this.responder)?r.positionIsBlockBreak(o[1]+i):void 0)?!0:e&&n)},s.prototype.mutationIsSignificant=function(t){var e,n,i;return i=Object.keys(t).length>0,e=""===(null!=(n=this.compositionInput)?n.getEndData():void 0),i||!e},s.prototype.events={keydown:function(t){var n,i,o,r,s,c,l,h,p;if(this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0,r=u[t.keyCode]){for(i=this.keys,h=["ctrl","alt","shift","meta"],o=0,c=h.length;c>o;o++)l=h[o],t[l+"Key"]&&("ctrl"===l&&(l="control"),i=null!=i?i[l]:void 0);null!=(null!=i?i[r]:void 0)&&(this.setInputSummary({keyName:r}),e.selectionChangeObserver.reset(),i[r].call(this,t));}return a(t)&&(n=String.fromCharCode(t.keyCode).toLowerCase())&&(s=function(){var e,n,i,o;for(i=["alt","shift"],o=[],e=0,n=i.length;n>e;e++)l=i[e],t[l+"Key"]&&o.push(l);return o}(),s.push(n),null!=(p=this.delegate)?p.inputControllerDidReceiveKeyboardCommand(s):void 0)?t.preventDefault():void 0},keypress:function(t){var e,n,i;if(null==this.inputSummary.eventName&&!t.metaKey&&(!t.ctrlKey||t.altKey))return (i=p(t))?(null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString(i),this.setInputSummary({textAdded:i,didDelete:this.selectionIsExpanded()})):void 0},textInput:function(t){var e,n,i,o;return e=t.data,o=this.inputSummary.textAdded,o&&o!==e&&o.toUpperCase()===e?(n=this.getSelectedRange(),this.setSelectedRange([n[0],n[1]+o.length]),null!=(i=this.responder)&&i.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(n)):void 0},dragenter:function(t){return t.preventDefault()},dragstart:function(t){var e;return t.target,this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidStartDrag?e.inputControllerDidStartDrag():void 0},dragover:function(t){var e,n;return !this.draggedRange&&!this.canAcceptDataTransfer(t.dataTransfer)||(t.preventDefault(),e={x:t.clientX,y:t.clientY},l(e,this.draggingPoint))?void 0:(this.draggingPoint=e,null!=(n=this.delegate)&&"function"==typeof n.inputControllerDidReceiveDragOverPoint?n.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0)},dragend:function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidCancelDrag&&t.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null},drop:function(t){var n,i,o,r,s,a,u,c,l;return t.preventDefault(),o=null!=(s=t.dataTransfer)?s.files:void 0,r={x:t.clientX,y:t.clientY},null!=(a=this.responder)&&a.setLocationRangeFromPointRange(r),(null!=o?o.length:void 0)?this.attachFiles(o):this.draggedRange?(null!=(u=this.delegate)&&u.inputControllerWillMoveText(),null!=(c=this.responder)&&c.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(i=t.dataTransfer.getData("application/x-trix-document"))&&(n=e.Document.fromJSONString(i),null!=(l=this.responder)&&l.insertDocument(n),this.requestRender()),this.draggedRange=null,this.draggingPoint=null},cut:function(t){var e,n;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented)?this.requestRender():void 0},copy:function(t){var e;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&this.serializeSelectionToDataTransfer(t.clipboardData)?t.preventDefault():void 0},paste:function(t){var n,o,s,a,u,c,l,p,f,g,v,y,b,A,C,x,w,E,S,R,k,D,L;return n=null!=(p=t.clipboardData)?p:t.testClipboardData,l={clipboard:n},null==n||h(t)?void this.getPastedHTMLUsingHiddenElement(function(t){return function(e){var n,i,o;return l.type="text/html",l.html=e,null!=(n=t.delegate)&&n.inputControllerWillPaste(l),null!=(i=t.responder)&&i.insertHTML(l.html),t.requestRender(),null!=(o=t.delegate)?o.inputControllerDidPaste(l):void 0}}(this)):((a=n.getData("URL"))?(l.type="text/html",L=(c=n.getData("public.url-name"))?e.squishBreakableWhitespace(c).trim():a,l.html=this.createLinkHTML(a,L),null!=(f=this.delegate)&&f.inputControllerWillPaste(l),this.setInputSummary({textAdded:L,didDelete:this.selectionIsExpanded()}),null!=(C=this.responder)&&C.insertHTML(l.html),this.requestRender(),null!=(x=this.delegate)&&x.inputControllerDidPaste(l)):i(n)?(l.type="text/plain",l.string=n.getData("text/plain"),null!=(w=this.delegate)&&w.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(E=this.responder)&&E.insertString(l.string),this.requestRender(),null!=(S=this.delegate)&&S.inputControllerDidPaste(l)):(u=n.getData("text/html"))?(l.type="text/html",l.html=u,null!=(R=this.delegate)&&R.inputControllerWillPaste(l),null!=(k=this.responder)&&k.insertHTML(l.html),this.requestRender(),null!=(D=this.delegate)&&D.inputControllerDidPaste(l)):m.call(n.types,"Files")>=0&&(s=null!=(g=n.items)&&null!=(v=g[0])&&"function"==typeof v.getAsFile?v.getAsFile():void 0)&&(!s.name&&(o=r(s))&&(s.name="pasted-file-"+ ++d+"."+o),l.type="File",l.file=s,null!=(y=this.delegate)&&y.inputControllerWillAttachFiles(),null!=(b=this.responder)&&b.insertFile(l.file),this.requestRender(),null!=(A=this.delegate)&&A.inputControllerDidPaste(l)),t.preventDefault())},compositionstart:function(t){return this.getCompositionInput().start(t.data)},compositionupdate:function(t){return this.getCompositionInput().update(t.data)},compositionend:function(t){return this.getCompositionInput().end(t.data)},beforeinput:function(){return this.inputSummary.didInput=!0
	},input:function(t){return this.inputSummary.didInput=!0,t.stopPropagation()}},s.prototype.keys={backspace:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},"delete":function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},"return":function(){var t,e;return this.setInputSummary({preferDocument:!0}),null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),null!=(e=this.responder)?e.insertLineBreak():void 0},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canIncreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.increaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},right:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},control:{d:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o:function(t){var e,n;return t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{"return":function(t){var e,n;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n"),this.requestRender(),t.preventDefault()},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canDecreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.decreaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("backward")):void 0},right:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("forward")):void 0}},alt:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}},meta:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}}},s.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new t(this)},s.prototype.isComposing=function(){return null!=this.compositionInput&&!this.compositionInput.isEnded()},s.prototype.deleteInDirection=function(t,e){var n;return (null!=(n=this.responder)?n.deleteInDirection(t):void 0)!==!1?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0},s.prototype.serializeSelectionToDataTransfer=function(t){var n,i;if(o(t))return n=null!=(i=this.responder)?i.getSelectedDocument().toSerializableDocument():void 0,t.setData("application/x-trix-document",JSON.stringify(n)),t.setData("text/html",e.DocumentView.render(n).innerHTML),t.setData("text/plain",n.toString().replace(/\n$/,"")),!0},s.prototype.canAcceptDataTransfer=function(t){var e,n,i,o,r,s;for(s={},o=null!=(i=null!=t?t.types:void 0)?i:[],e=0,n=o.length;n>e;e++)r=o[e],s[r]=!0;return s.Files||s["application/x-trix-document"]||s["text/html"]||s["text/plain"]},s.prototype.getPastedHTMLUsingHiddenElement=function(t){var n,i,o;return i=this.getSelectedRange(),o={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},n=c({style:o,tagName:"div",editable:!0}),document.body.appendChild(n),n.focus(),requestAnimationFrame(function(o){return function(){var r;return r=n.innerHTML,e.removeNode(n),o.setSelectedRange(i),t(r)}}(this))},s.proxyMethod("responder?.getSelectedRange"),s.proxyMethod("responder?.setSelectedRange"),s.proxyMethod("responder?.expandSelectionInDirection"),s.proxyMethod("responder?.selectionIsInCursorTarget"),s.proxyMethod("responder?.selectionIsExpanded"),s}(e.InputController),r=function(t){var e,n;return null!=(e=t.type)&&null!=(n=e.match(/\/(\w+)$/))?n[1]:void 0},s=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),p=function(t){var n;return t.key&&s&&t.key.codePointAt(0)===t.keyCode?t.key:(null===t.which?n=t.keyCode:0!==t.which&&0!==t.charCode&&(n=t.charCode),null!=n&&"escape"!==u[n]?e.UTF16String.fromCodepoints([n]).toString():void 0)},h=function(t){var e,n,i,o,r,s,u,c,l;if(u=t.clipboardData){if(m.call(u.types,"text/html")>=0){for(c=u.types,i=0,s=c.length;s>i;i++)if(l=c[i],e=/^CorePasteboardFlavorType/.test(l),n=/^dyn\./.test(l)&&u.getData(l),e||n)return !0;return !1}return o=m.call(u.types,"com.apple.webarchive")>=0,r=m.call(u.types,"com.apple.flat-rtfd")>=0,o||r}},t=function(t){function e(t){var e;this.inputController=t,e=this.inputController,this.responder=e.responder,this.delegate=e.delegate,this.inputSummary=e.inputSummary,this.data={};}return f(e,t),e.prototype.start=function(t){var e,n;return this.data.start=t,this.isSignificant()?("keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded&&null!=(e=this.responder)&&e.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null!=(n=this.responder)?n.getSelectedRange():void 0):void 0},e.prototype.update=function(t){var e;return this.data.update=t,this.isSignificant()&&(e=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e):void 0},e.prototype.end=function(t){var e,n,i,o;return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.setSelectedRange(this.range),null!=(i=this.responder)&&i.insertString(this.data.end),null!=(o=this.responder)?o.setSelectedRange(this.range[0]+this.data.end.length):void 0):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset()},e.prototype.getEndData=function(){return this.data.end},e.prototype.isEnded=function(){return null!=this.getEndData()},e.prototype.isSignificant=function(){return n.composesExistingText?this.inputSummary.didInput:!0},e.prototype.canApplyToDocument=function(){var t,e;return 0===(null!=(t=this.data.start)?t.length:void 0)&&(null!=(e=this.data.end)?e.length:void 0)>0&&null!=this.range},e.proxyMethod("inputController.setInputSummary"),e.proxyMethod("inputController.requestRender"),e.proxyMethod("inputController.requestReparse"),e.proxyMethod("responder?.selectionIsExpanded"),e.proxyMethod("responder?.insertPlaceholder"),e.proxyMethod("responder?.selectPlaceholder"),e.proxyMethod("responder?.forgetPlaceholder"),e}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.dataTransferIsPlainText,n=e.keyEventIsKeyboardCommand,i=e.objectsAreEqual,e.Level2InputController=function(s){function u(){return this.render=o(this.render,this),u.__super__.constructor.apply(this,arguments)}var c,l,h,p,d,f;return r(u,s),u.prototype.elementDidMutate=function(){var t;return this.scheduledRender?this.composing&&null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidAllowUnhandledInput?t.inputControllerDidAllowUnhandledInput():void 0:this.reparse()},u.prototype.scheduleRender=function(){return null!=this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)},u.prototype.render=function(){var t;return cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||null!=(t=this.delegate)&&t.render(),"function"==typeof this.afterRender&&this.afterRender(),this.afterRender=null},u.prototype.reparse=function(){var t;return null!=(t=this.delegate)?t.reparse():void 0},u.prototype.events={keydown:function(t){var e,i,o,r;if(n(t)){if(e=l(t),null!=(r=this.delegate)?r.inputControllerDidReceiveKeyboardCommand(e):void 0)return t.preventDefault()}else if(o=t.key,t.altKey&&(o+="+Alt"),t.shiftKey&&(o+="+Shift"),i=this.keys[o])return this.withEvent(t,i)},paste:function(t){var e,n,i,o,r,s,a,u,c;return h(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):p(t)?(t.preventDefault(),n={type:"text/plain",string:t.clipboardData.getData("text/plain")},null!=(i=this.delegate)&&i.inputControllerWillPaste(n),null!=(o=this.responder)&&o.insertString(n.string),this.render(),null!=(r=this.delegate)?r.inputControllerDidPaste(n):void 0):(e=null!=(s=t.clipboardData)?s.getData("URL"):void 0)?(t.preventDefault(),n={type:"text/html",html:this.createLinkHTML(e)},null!=(a=this.delegate)&&a.inputControllerWillPaste(n),null!=(u=this.responder)&&u.insertHTML(n.html),this.render(),null!=(c=this.delegate)?c.inputControllerDidPaste(n):void 0):void 0},beforeinput:function(t){var e;return (e=this.inputTypes[t.inputType])?(this.withEvent(t,e),this.scheduleRender()):void 0},input:function(){return e.selectionChangeObserver.reset()},dragstart:function(t){var e,n;return (null!=(e=this.responder)?e.selectionContainsAttachments():void 0)?(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:null!=(n=this.responder)?n.getSelectedRange():void 0,point:d(t)}):void 0},dragenter:function(t){return c(t)?t.preventDefault():void 0},dragover:function(t){var e,n;if(this.dragging){if(t.preventDefault(),e=d(t),!i(e,this.dragging.point))return this.dragging.point=e,null!=(n=this.responder)?n.setLocationRangeFromPointRange(e):void 0}else if(c(t))return t.preventDefault()},drop:function(t){var e,n,i,o;return this.dragging?(t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillMoveText(),null!=(i=this.responder)&&i.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender()):c(t)?(t.preventDefault(),e=d(t),null!=(o=this.responder)&&o.setLocationRangeFromPointRange(e),this.attachFiles(t.dataTransfer.files)):void 0},dragend:function(){var t;return this.dragging?(null!=(t=this.responder)&&t.setSelectedRange(this.dragging.range),this.dragging=null):void 0},compositionend:function(){return this.composing?(this.composing=!1,this.scheduleRender()):void 0}},u.prototype.keys={ArrowLeft:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},ArrowRight:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("forward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},Backspace:function(){var t,e,n;return (null!=(t=this.responder)?t.shouldManageDeletingInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.deleteInDirection("backward"),this.render()):void 0},Tab:function(){var t,e;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.increaseNestingLevel(),this.render()):void 0},"Tab+Shift":function(){var t,e;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.decreaseNestingLevel(),this.render()):void 0}},u.prototype.inputTypes={deleteByComposition:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut:function(){return this.deleteInDirection("backward")},deleteByDrag:function(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t;return this.deleteByDragRange=null!=(t=this.responder)?t.getSelectedRange():void 0})},deleteCompositionText:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent:function(){return this.deleteInDirection("backward")},deleteContentBackward:function(){return this.deleteInDirection("backward")},deleteContentForward:function(){return this.deleteInDirection("forward")},deleteEntireSoftLine:function(){return this.deleteInDirection("forward")},deleteHardLineBackward:function(){return this.deleteInDirection("backward")},deleteHardLineForward:function(){return this.deleteInDirection("forward")},deleteSoftLineBackward:function(){return this.deleteInDirection("backward")},deleteSoftLineForward:function(){return this.deleteInDirection("forward")},deleteWordBackward:function(){return this.deleteInDirection("backward")},deleteWordForward:function(){return this.deleteInDirection("forward")},formatBackColor:function(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold:function(){return this.toggleAttributeIfSupported("bold")},formatFontColor:function(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName:function(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent:function(){var t;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.increaseNestingLevel():void 0}):void 0},formatItalic:function(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter:function(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull:function(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft:function(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight:function(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent:function(){var t;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.decreaseNestingLevel():void 0}):void 0},formatRemove:function(){return this.withTargetDOMRange(function(){var t,e,n,i;i=[];for(t in null!=(e=this.responder)?e.getCurrentAttributes():void 0)i.push(null!=(n=this.responder)?n.removeCurrentAttribute(t):void 0);return i})},formatSetBlockTextDirection:function(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection:function(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough:function(){return this.toggleAttributeIfSupported("strike")},formatSubscript:function(){return this.toggleAttributeIfSupported("sub")},formatSuperscript:function(){return this.toggleAttributeIfSupported("sup")},formatUnderline:function(){return this.toggleAttributeIfSupported("underline")},historyRedo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformRedo():void 0},historyUndo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformUndo():void 0},insertCompositionText:function(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition:function(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop:function(){var t,e;return (t=this.deleteByDragRange)?(this.deleteByDragRange=null,null!=(e=this.delegate)&&e.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.moveTextFromRange(t):void 0})):void 0},insertFromPaste:function(){var n,i,o,r,s,a,u,c,l,h,p;return n=this.event.dataTransfer,s={dataTransfer:n},(i=n.getData("URL"))?(this.event.preventDefault(),s.type="text/html",p=(r=n.getData("public.url-name"))?e.squishBreakableWhitespace(r).trim():i,s.html=this.createLinkHTML(i,p),null!=(a=this.delegate)&&a.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):t(n)?(s.type="text/plain",s.string=n.getData("text/plain"),null!=(u=this.delegate)&&u.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertString(s.string):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(o=n.getData("text/html"))?(this.event.preventDefault(),s.type="text/html",s.html=o,null!=(c=this.delegate)&&c.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(null!=(l=n.files)?l.length:void 0)?(s.type="File",s.file=n.files[0],null!=(h=this.delegate)&&h.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertFile(s.file):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):void 0},insertFromYank:function(){return this.insertString(this.event.data)},insertLineBreak:function(){return this.insertString("\n")},insertLink:function(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList:function(){return this.toggleAttributeIfSupported("number")},insertParagraph:function(){var t;return null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertLineBreak():void 0})},insertReplacementText:function(){return this.insertString(this.event.dataTransfer.getData("text/plain"),{updatePosition:!1})},insertText:function(){var t,e;return this.insertString(null!=(t=this.event.data)?t:null!=(e=this.event.dataTransfer)?e.getData("text/plain"):void 0)},insertTranspose:function(){return this.insertString(this.event.data)},insertUnorderedList:function(){return this.toggleAttributeIfSupported("bullet")}},u.prototype.insertString=function(t,e){var n;return null==t&&(t=""),null!=(n=this.delegate)&&n.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var n;return null!=(n=this.responder)?n.insertString(t,e):void 0})},u.prototype.toggleAttributeIfSupported=function(t){var n;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(n=this.delegate)&&n.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.toggleCurrentAttribute(t):void 0})):void 0},u.prototype.activateAttributeIfSupported=function(t,n){var i;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(i=this.delegate)&&i.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.setCurrentAttribute(t,n):void 0})):void 0},u.prototype.deleteInDirection=function(t,e){var n,i,o,r;return o=(null!=e?e:{recordUndoEntry:!0}).recordUndoEntry,o&&null!=(r=this.delegate)&&r.inputControllerWillPerformTyping(),i=function(e){return function(){var n;return null!=(n=e.responder)?n.deleteInDirection(t):void 0}}(this),(n=this.getTargetDOMRange({minLength:2}))?this.withTargetDOMRange(n,i):i()},u.prototype.withTargetDOMRange=function(t,n){var i;return "function"==typeof t&&(n=t,t=this.getTargetDOMRange()),t?null!=(i=this.responder)?i.withTargetDOMRange(t,n.bind(this)):void 0:(e.selectionChangeObserver.reset(),n.call(this))},u.prototype.getTargetDOMRange=function(t){var e,n,i,o;return i=(null!=t?t:{minLength:0}).minLength,(o="function"==typeof(e=this.event).getTargetRanges?e.getTargetRanges():void 0)&&o.length&&(n=f(o[0]),0===i||n.toString().length>=i)?n:void 0},f=function(t){var e;return e=document.createRange(),e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},u.prototype.withEvent=function(t,e){var n;this.event=t;try{n=e.call(this);}finally{this.event=null;}return n},c=function(t){var e,n;return a.call(null!=(e=null!=(n=t.dataTransfer)?n.types:void 0)?e:[],"Files")>=0},h=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"Files")>=0&&1===e.types.length&&e.files.length>=1:void 0},p=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"text/plain")>=0&&1===e.types.length:void 0},l=function(t){var e;return e=[],t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},d=function(t){return {x:t.clientX,y:t.clientY}},u}(e.InputController);}.call(this),function(){var t,n,i,o,r,s,a,u,c=function(t,e){return function(){return t.apply(e,arguments)}},l=function(t,e){function n(){this.constructor=t;}for(var i in e)h.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},h={}.hasOwnProperty;n=e.defer,i=e.handleEvent,s=e.makeElement,u=e.tagName,a=e.config,r=a.lang,t=a.css,o=a.keyNames,e.AttachmentEditorController=function(a){function h(t,e,n,i){this.attachmentPiece=t,this.element=e,this.container=n,this.options=null!=i?i:{},this.didBlurCaption=c(this.didBlurCaption,this),this.didChangeCaption=c(this.didChangeCaption,this),this.didInputCaption=c(this.didInputCaption,this),this.didKeyDownCaption=c(this.didKeyDownCaption,this),this.didClickActionButton=c(this.didClickActionButton,this),this.didClickToolbar=c(this.didClickToolbar,this),this.attachment=this.attachmentPiece.attachment,"a"===u(this.element)&&(this.element=this.element.firstChild),this.install();}var p;return l(h,a),p=function(t){return function(){var e;return e=t.apply(this,arguments),e["do"](),null==this.undos&&(this.undos=[]),this.undos.push(e.undo)}},h.prototype.install=function(){return this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()?this.installCaptionEditor():void 0},h.prototype.uninstall=function(){var t,e;for(this.savePendingCaption();e=this.undos.pop();)e();return null!=(t=this.delegate)?t.didUninstallAttachmentEditor(this):void 0},h.prototype.savePendingCaption=function(){var t,e,n;return null!=this.pendingCaption?(t=this.pendingCaption,this.pendingCaption=null,t?null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment?e.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:t},this.attachment):void 0:null!=(n=this.delegate)&&"function"==typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment?n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0):void 0},h.prototype.makeElementMutable=p(function(){return {"do":function(t){return function(){return t.element.dataset.trixMutable=!0}}(this),undo:function(t){return function(){return delete t.element.dataset.trixMutable}}(this)}}),h.prototype.addToolbar=p(function(){var n;return n=s({tagName:"div",className:t.attachmentToolbar,data:{trixMutable:!0},childNodes:s({tagName:"div",className:"trix-button-row",childNodes:s({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:s({tagName:"button",className:"trix-button trix-button--remove",textContent:r.remove,attributes:{title:r.remove},data:{trixAction:"remove"}})})})}),this.attachment.isPreviewable()&&n.appendChild(s({tagName:"div",className:t.attachmentMetadataContainer,childNodes:s({tagName:"span",className:t.attachmentMetadata,childNodes:[s({tagName:"span",className:t.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),s({tagName:"span",className:t.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),i("click",{onElement:n,withCallback:this.didClickToolbar}),i("click",{onElement:n,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),{"do":function(t){return function(){return t.element.appendChild(n)}}(this),undo:function(){return function(){return e.removeNode(n)}}()}}),h.prototype.installCaptionEditor=p(function(){var o,a,u,c,l;return c=s({tagName:"textarea",className:t.attachmentCaptionEditor,attributes:{placeholder:r.captionPlaceholder},data:{trixMutable:!0}}),c.value=this.attachmentPiece.getCaption(),l=c.cloneNode(),l.classList.add("trix-autoresize-clone"),l.tabIndex=-1,o=function(){return l.value=c.value,c.style.height=l.scrollHeight+"px"},i("input",{onElement:c,withCallback:o}),i("input",{onElement:c,withCallback:this.didInputCaption}),i("keydown",{onElement:c,withCallback:this.didKeyDownCaption}),i("change",{onElement:c,withCallback:this.didChangeCaption}),i("blur",{onElement:c,withCallback:this.didBlurCaption}),u=this.element.querySelector("figcaption"),a=u.cloneNode(),{"do":function(e){return function(){return u.style.display="none",a.appendChild(c),a.appendChild(l),a.classList.add(t.attachmentCaption+"--editing"),u.parentElement.insertBefore(a,u),o(),e.options.editCaption?n(function(){return c.focus()}):void 0}}(this),undo:function(){return e.removeNode(a),u.style.display=null}}}),h.prototype.didClickToolbar=function(t){return t.preventDefault(),t.stopPropagation()},h.prototype.didClickActionButton=function(t){var n;switch(t.target.getAttribute("data-trix-action")){case"remove":return null!=(n=this.delegate)?n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0}},h.prototype.didKeyDownCaption=function(t){var e;return "return"===o[t.keyCode]?(t.preventDefault(),this.savePendingCaption(),null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestDeselectingAttachment?e.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0},h.prototype.didInputCaption=function(t){return this.pendingCaption=t.target.value.replace(/\s/g," ").trim()},h.prototype.didChangeCaption=function(){return this.savePendingCaption()},h.prototype.didBlurCaption=function(){return this.savePendingCaption()},h}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.config.css,e.AttachmentView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece;}var a;return o(s,r),s.attachmentSelector="[data-trix-attachment]",s.prototype.createContentNodes=function(){return []},s.prototype.createNodes=function(){var e,n,o,r,s,u,c;if(e=r=i({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),(n=this.getHref())&&(r=i({tagName:"a",editable:!1,attributes:{href:n,tabindex:-1}}),e.appendChild(r)),this.attachment.hasContent())r.innerHTML=this.attachment.getContent();else for(c=this.createContentNodes(),o=0,s=c.length;s>o;o++)u=c[o],r.appendChild(u);return r.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=i({tagName:"progress",attributes:{"class":t.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e.appendChild(this.progressElement)),[a("left"),e,a("right")]},s.prototype.createCaptionElement=function(){var e,n,o,r,s,a,u;return o=i({tagName:"figcaption",className:t.attachmentCaption}),(e=this.attachmentPiece.getCaption())?(o.classList.add(t.attachmentCaption+"--edited"),o.textContent=e):(n=this.getCaptionConfig(),n.name&&(r=this.attachment.getFilename()),n.size&&(a=this.attachment.getFormattedFilesize()),r&&(s=i({tagName:"span",className:t.attachmentName,textContent:r}),o.appendChild(s)),a&&(r&&o.appendChild(document.createTextNode(" ")),u=i({tagName:"span",className:t.attachmentSize,textContent:a}),o.appendChild(u))),o},s.prototype.getClassName=function(){var e,n;return n=[t.attachment,t.attachment+"--"+this.attachment.getType()],(e=this.attachment.getExtension())&&n.push(t.attachment+"--"+e),n.join(" ")},s.prototype.getData=function(){var t,e;return e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},t=this.attachmentPiece.attributes,t.isEmpty()||(e.trixAttributes=JSON.stringify(t)),this.attachment.isPending()&&(e.trixSerialize=!1),e},s.prototype.getHref=function(){return n(this.attachment.getContent(),"a")?void 0:this.attachment.getHref()},s.prototype.getCaptionConfig=function(){var t,n,i;return i=this.attachment.getType(),t=e.copyObject(null!=(n=e.config.attachments[i])?n.caption:void 0),"file"===i&&(t.name=!0),t},s.prototype.findProgressElement=function(){var t;return null!=(t=this.findElement())?t.querySelector("progress"):void 0},a=function(t){return i({tagName:"span",textContent:e.ZERO_WIDTH_SPACE,data:{trixCursorTarget:t,trixSerialize:!1}})},s.prototype.attachmentDidChangeUploadProgress=function(){var t,e;return e=this.attachment.getUploadProgress(),null!=(t=this.findProgressElement())?t.value=e:void 0},s}(e.ObjectView),n=function(t,e){var n;return n=i("div"),n.innerHTML=null!=t?t:"",n.querySelector(e)};}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.makeElement,e.PreviewableAttachmentView=function(i){function o(){o.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this;}return n(o,i),o.prototype.createContentNodes=function(){return this.image=t({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]},o.prototype.createCaptionElement=function(){var t;return t=o.__super__.createCaptionElement.apply(this,arguments),t.textContent||t.setAttribute("data-trix-placeholder",e.config.lang.captionPlaceholder),t},o.prototype.refresh=function(t){var e;return null==t&&(t=null!=(e=this.findElement())?e.querySelector("img"):void 0),t?this.updateAttributesForImage(t):void 0},o.prototype.updateAttributesForImage=function(t){var e,n,i,o,r,s;return r=this.attachment.getURL(),n=this.attachment.getPreviewURL(),t.src=n||r,n===r?t.removeAttribute("data-trix-serialized-attributes"):(i=JSON.stringify({src:r}),t.setAttribute("data-trix-serialized-attributes",i)),s=this.attachment.getWidth(),e=this.attachment.getHeight(),null!=s&&(t.width=s),null!=e&&(t.height=e),o=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/"),t.dataset.trixStoreKey=o},o.prototype.attachmentDidChangeAttributes=function(){return this.refresh(this.image),this.refresh()},o}(e.AttachmentView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.findInnerElement,n=e.getTextConfig,e.PieceView=function(r){function s(){var t;s.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t=this.options,this.textConfig=t.textConfig,this.context=t.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString();}var a;return o(s,r),s.prototype.createNodes=function(){var e,n,i,o,r,s;if(s=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e=this.createElement()){for(i=t(e),n=0,o=s.length;o>n;n++)r=s[n],i.appendChild(r);s=[e];}return s},s.prototype.createAttachmentNodes=function(){var t,n;return t=this.attachment.isPreviewable()?e.PreviewableAttachmentView:e.AttachmentView,n=this.createChildView(t,this.piece.attachment,{piece:this.piece}),n.getNodes()},s.prototype.createStringNodes=function(){var t,e,n,o,s,a,u,c,l;if(null!=(u=this.textConfig)?u.plaintext:void 0)return [document.createTextNode(this.string)];for(a=[],c=this.string.split("\n"),n=e=0,o=c.length;o>e;n=++e)l=c[n],n>0&&(t=i("br"),a.push(t)),(l.length)&&(s=document.createTextNode(this.preserveSpaces(l)),a.push(s));return a},s.prototype.createElement=function(){var t,e,o,r,s,a,u,c,l;c={},a=this.attributes;for(r in a)if(l=a[r],(t=n(r))&&(t.tagName&&(s=i(t.tagName),o?(o.appendChild(s),o=s):e=o=s),t.styleProperty&&(c[t.styleProperty]=l),t.style)){u=t.style;for(r in u)l=u[r],c[r]=l;}if(Object.keys(c).length){null==e&&(e=i("span"));for(r in c)l=c[r],e.style[r]=l;}return e},s.prototype.createContainerElement=function(){var t,e,o,r,s;r=this.attributes;for(o in r)if(s=r[o],(e=n(o))&&e.groupTagName)return t={},t[o]=s,i(e.groupTagName,t)},a=e.NON_BREAKING_SPACE,s.prototype.preserveSpaces=function(t){return this.context.isLast&&(t=t.replace(/\ $/,a)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 "+a+" $2").replace(/\ {2}/g,a+" ").replace(/\ {2}/g," "+a),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,a)),t},s}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;
	}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.TextView=function(n){function i(){i.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig;}var o;return t(i,n),i.prototype.createNodes=function(){var t,n,i,r,s,a,u,c,l,h;for(a=[],c=e.ObjectGroup.groupObjects(this.getPieces()),r=c.length-1,i=n=0,s=c.length;s>n;i=++n)u=c[i],t={},0===i&&(t.isFirst=!0),i===r&&(t.isLast=!0),o(l)&&(t.followsWhitespace=!0),h=this.findOrCreateCachedChildView(e.PieceView,u,{textConfig:this.textConfig,context:t}),a.push.apply(a,h.getNodes()),l=u;return a},i.prototype.getPieces=function(){var t,e,n,i,o;for(i=this.text.getPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],n.hasAttribute("blockBreak")||o.push(n);return o},o=function(t){return /\s$/.test(null!=t?t.toString():void 0)},i}(e.ObjectView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,n=e.getBlockConfig,t=e.config.css,e.BlockView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes();}return o(s,r),s.prototype.createNodes=function(){var t,o,r,s,a,u,c,l,h,p,d;if(o=document.createComment("block"),c=[o],this.block.isEmpty()?c.push(i("br")):(p=null!=(l=n(this.block.getLastAttribute()))?l.text:void 0,d=this.findOrCreateCachedChildView(e.TextView,this.block.text,{textConfig:p}),c.push.apply(c,d.getNodes()),this.shouldAddExtraNewlineElement()&&c.push(i("br"))),this.attributes.length)return c;for(h=e.config.blockAttributes["default"].tagName,this.block.isRTL()&&(t={dir:"rtl"}),r=i({tagName:h,attributes:t}),s=0,a=c.length;a>s;s++)u=c[s],r.appendChild(u);return [r]},s.prototype.createContainerElement=function(e){var o,r,s,a,u;return o=this.attributes[e],u=n(o).tagName,0===e&&this.block.isRTL()&&(r={dir:"rtl"}),"attachmentGallery"===o&&(a=this.block.getBlockBreakPosition(),s=t.attachmentGallery+" "+t.attachmentGallery+"--"+a),i({tagName:u,className:s,attributes:r})},s.prototype.shouldAddExtraNewlineElement=function(){return /\n\n$/.test(this.block.toString())},s}(e.ObjectView);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.defer,n=e.makeElement,e.DocumentView=function(o){function r(){r.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e.ElementStore,this.setDocument(this.object);}var s,a,u;return i(r,o),r.render=function(t){var e,i;return e=n("div"),i=new this(t,{element:e}),i.render(),i.sync(),e},r.prototype.setDocument=function(t){return t.isEqualTo(this.document)?void 0:this.document=this.object=t},r.prototype.render=function(){var t,i,o,r,s,a,u;if(this.childViews=[],this.shadowElement=n("div"),!this.document.isEmpty()){for(s=e.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:!0}),a=[],t=0,i=s.length;i>t;t++)r=s[t],u=this.findOrCreateCachedChildView(e.BlockView,r),a.push(function(){var t,e,n,i;for(n=u.getNodes(),i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.shadowElement.appendChild(o));return i}.call(this));return a}},r.prototype.isSynced=function(){return s(this.shadowElement,this.element)},r.prototype.sync=function(){var t;for(t=this.createDocumentFragmentForSync();this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()},r.prototype.didSync=function(){return this.elementStore.reset(a(this.element)),t(function(t){return function(){return t.garbageCollectCachedViews()}}(this))},r.prototype.createDocumentFragmentForSync=function(){var t,e,n,i,o,r,s,u,c,l;for(e=document.createDocumentFragment(),u=this.shadowElement.childNodes,n=0,o=u.length;o>n;n++)s=u[n],e.appendChild(s.cloneNode(!0));for(c=a(e),i=0,r=c.length;r>i;i++)t=c[i],(l=this.elementStore.remove(t))&&t.parentNode.replaceChild(l,t);return e},a=function(t){return t.querySelectorAll("[data-trix-store-key]")},s=function(t,e){return u(t.innerHTML)===u(e.innerHTML)},u=function(t){return t.replace(/&nbsp;/g," ")},r}(e.ObjectView);}.call(this),function(){var t,n,i,o,r,s=function(t,e){return function(){return t.apply(e,arguments)}},a=function(t,e){function n(){this.constructor=t;}for(var i in e)u.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},u={}.hasOwnProperty;i=e.findClosestElementFromNode,o=e.handleEvent,r=e.innerElementIsActive,n=e.defer,t=e.AttachmentView.attachmentSelector,e.CompositionController=function(u){function c(n,i){this.element=n,this.composition=i,this.didClickAttachment=s(this.didClickAttachment,this),this.didBlur=s(this.didBlur,this),this.didFocus=s(this.didFocus,this),this.documentView=new e.DocumentView(this.composition.document,{element:this.element}),o("focus",{onElement:this.element,withCallback:this.didFocus}),o("blur",{onElement:this.element,withCallback:this.didBlur}),o("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),o("mousedown",{onElement:this.element,matchingSelector:t,withCallback:this.didClickAttachment}),o("click",{onElement:this.element,matchingSelector:"a"+t,preventDefault:!0});}return a(c,u),c.prototype.didFocus=function(){var t,e,n;return t=function(t){return function(){var e;return t.focused?void 0:(t.focused=!0,null!=(e=t.delegate)&&"function"==typeof e.compositionControllerDidFocus?e.compositionControllerDidFocus():void 0)}}(this),null!=(e=null!=(n=this.blurPromise)?n.then(t):void 0)?e:t()},c.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t){return function(e){return n(function(){var n;return r(t.element)||(t.focused=null,null!=(n=t.delegate)&&"function"==typeof n.compositionControllerDidBlur&&n.compositionControllerDidBlur()),t.blurPromise=null,e()})}}(this))},c.prototype.didClickAttachment=function(t,e){var n,o,r;return n=this.findAttachmentForElement(e),o=null!=i(t.target,{matchingSelector:"figcaption"}),null!=(r=this.delegate)&&"function"==typeof r.compositionControllerDidSelectAttachment?r.compositionControllerDidSelectAttachment(n,{editCaption:o}):void 0},c.prototype.getSerializableElement=function(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element},c.prototype.render=function(){var t,e,n;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&(null!=(t=this.delegate)&&"function"==typeof t.compositionControllerWillSyncDocumentView&&t.compositionControllerWillSyncDocumentView(),this.documentView.sync(),null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidSyncDocumentView&&e.compositionControllerDidSyncDocumentView()),null!=(n=this.delegate)&&"function"==typeof n.compositionControllerDidRender?n.compositionControllerDidRender():void 0},c.prototype.rerenderViewForObject=function(t){return this.invalidateViewForObject(t),this.render()},c.prototype.invalidateViewForObject=function(t){return this.documentView.invalidateViewForObject(t)},c.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled()},c.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching()},c.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching()},c.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews()},c.prototype.isEditingAttachment=function(){return null!=this.attachmentEditor},c.prototype.installAttachmentEditorForAttachment=function(t,n){var i,o,r;if((null!=(r=this.attachmentEditor)?r.attachment:void 0)!==t&&(o=this.documentView.findElementForObject(t)))return this.uninstallAttachmentEditor(),i=this.composition.document.getAttachmentPieceForAttachment(t),this.attachmentEditor=new e.AttachmentEditorController(i,o,this.element,n),this.attachmentEditor.delegate=this},c.prototype.uninstallAttachmentEditor=function(){var t;return null!=(t=this.attachmentEditor)?t.uninstall():void 0},c.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render()},c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.updateAttributesForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.removeAttributeForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestRemovalOfAttachment?e.compositionControllerDidRequestRemovalOfAttachment(t):void 0},c.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestDeselectingAttachment?e.compositionControllerDidRequestDeselectingAttachment(t):void 0},c.prototype.canSyncDocumentView=function(){return !this.isEditingAttachment()},c.prototype.findAttachmentForElement=function(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))},c}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;n=e.handleEvent,i=e.triggerEvent,t=e.findClosestElementFromNode,e.ToolbarController=function(e){function s(t){this.element=t,this.didKeyDownDialogInput=o(this.didKeyDownDialogInput,this),this.didClickDialogButton=o(this.didClickDialogButton,this),this.didClickAttributeButton=o(this.didClickAttributeButton,this),this.didClickActionButton=o(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n("mousedown",{onElement:this.element,matchingSelector:a,withCallback:this.didClickActionButton}),n("mousedown",{onElement:this.element,matchingSelector:c,withCallback:this.didClickAttributeButton}),n("click",{onElement:this.element,matchingSelector:v,preventDefault:!0}),n("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput});}var a,u,c,l,h,p,d,f,g,m,v;return r(s,e),c="[data-trix-attribute]",a="[data-trix-action]",v=c+", "+a,p="[data-trix-dialog]",u=p+"[data-trix-active]",l=p+" [data-trix-method]",h=p+" [data-trix-input]",s.prototype.didClickActionButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=d(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)?o.toolbarDidInvokeAction(n):void 0},s.prototype.didClickAttributeButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=f(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)&&o.toolbarDidToggleAttribute(n),this.refreshAttributeButtons()},s.prototype.didClickDialogButton=function(e,n){var i,o;return i=t(n,{matchingSelector:p}),o=n.getAttribute("data-trix-method"),this[o].call(this,i)},s.prototype.didKeyDownDialogInput=function(t,e){var n,i;return 13===t.keyCode&&(t.preventDefault(),n=e.getAttribute("name"),i=this.getDialog(n),this.setAttribute(i)),27===t.keyCode?(t.preventDefault(),this.hideDialog()):void 0},s.prototype.updateActions=function(t){return this.actions=t,this.refreshActionButtons()},s.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t){return function(e,n){return e.disabled=t.actions[n]===!1}}(this))},s.prototype.eachActionButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(a),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,d(e)));return r},s.prototype.updateAttributes=function(t){return this.attributes=t,this.refreshAttributeButtons()},s.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t){return function(e,n){return e.disabled=t.attributes[n]===!1,t.attributes[n]||t.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"))}}(this))},s.prototype.eachAttributeButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(c),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,f(e)));return r},s.prototype.applyKeyboardCommand=function(t){var e,n,o,r,s,a,u;for(s=JSON.stringify(t.sort()),u=this.element.querySelectorAll("[data-trix-key]"),r=0,a=u.length;a>r;r++)if(e=u[r],o=e.getAttribute("data-trix-key").split("+"),n=JSON.stringify(o.sort()),n===s)return i("mousedown",{onElement:e}),!0;return !1},s.prototype.dialogIsVisible=function(t){var e;return (e=this.getDialog(t))?e.hasAttribute("data-trix-active"):void 0},s.prototype.toggleDialog=function(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)},s.prototype.showDialog=function(t){var e,n,i,o,r,s,a,u,c,l;for(this.hideDialog(),null!=(a=this.delegate)&&a.toolbarWillShowDialog(),i=this.getDialog(t),i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),u=i.querySelectorAll("input[disabled]"),o=0,s=u.length;s>o;o++)n=u[o],n.removeAttribute("disabled");return (e=f(i))&&(r=m(i,t))&&(r.value=null!=(c=this.attributes[e])?c:"",r.select()),null!=(l=this.delegate)?l.toolbarDidShowDialog(t):void 0},s.prototype.setAttribute=function(t){var e,n,i;return e=f(t),n=m(t,e),n.willValidate&&!n.checkValidity()?(n.setAttribute("data-trix-validate",""),n.classList.add("trix-validate"),n.focus()):(null!=(i=this.delegate)&&i.toolbarDidUpdateAttribute(e,n.value),this.hideDialog())},s.prototype.removeAttribute=function(t){var e,n;return e=f(t),null!=(n=this.delegate)&&n.toolbarDidRemoveAttribute(e),this.hideDialog()},s.prototype.hideDialog=function(){var t,e;return (t=this.element.querySelector(u))?(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),null!=(e=this.delegate)?e.toolbarDidHideDialog(g(t)):void 0):void 0},s.prototype.resetDialogInputs=function(){var t,e,n,i,o;for(i=this.element.querySelectorAll(h),o=[],t=0,n=i.length;n>t;t++)e=i[t],e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),o.push(e.classList.remove("trix-validate"));return o},s.prototype.getDialog=function(t){return this.element.querySelector("[data-trix-dialog="+t+"]")},m=function(t,e){return null==e&&(e=f(t)),t.querySelector("[data-trix-input][name='"+e+"']")},d=function(t){return t.getAttribute("data-trix-action")},f=function(t){var e;return null!=(e=t.getAttribute("data-trix-attribute"))?e:t.getAttribute("data-trix-dialog-attribute")},g=function(t){return t.getAttribute("data-trix-dialog")},s}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ImagePreloadOperation=function(e){function n(t){this.url=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new Image,e.onload=function(n){return function(){return e.width=n.width=e.naturalWidth,e.height=n.height=e.naturalHeight,t(!0,e)}}(this),e.onerror=function(){return t(!1)},e.src=this.url},n}(e.Operation);}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e.Attachment=function(i){function o(n){null==n&&(n={}),this.releaseFile=t(this.releaseFile,this),o.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n),this.didChangeAttributes();}return n(o,i),o.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,o.attachmentForFile=function(t){var e,n;return n=this.attributesForFile(t),e=new this(n),e.setFile(t),e},o.attributesForFile=function(t){return new e.Hash({filename:t.name,filesize:t.size,contentType:t.type})},o.fromJSON=function(t){return new this(t)},o.prototype.getAttribute=function(t){return this.attributes.get(t)},o.prototype.hasAttribute=function(t){return this.attributes.has(t)},o.prototype.getAttributes=function(){return this.attributes.toObject()},o.prototype.setAttributes=function(t){var e,n,i;return null==t&&(t={}),e=this.attributes.merge(t),this.attributes.isEqualTo(e)?void 0:(this.attributes=e,this.didChangeAttributes(),null!=(n=this.previewDelegate)&&"function"==typeof n.attachmentDidChangeAttributes&&n.attachmentDidChangeAttributes(this),null!=(i=this.delegate)&&"function"==typeof i.attachmentDidChangeAttributes?i.attachmentDidChangeAttributes(this):void 0)},o.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0},o.prototype.isPending=function(){return null!=this.file&&!(this.getURL()||this.getHref())},o.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType())},o.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"},o.prototype.getURL=function(){return this.attributes.get("url")},o.prototype.getHref=function(){return this.attributes.get("href")},o.prototype.getFilename=function(){var t;return null!=(t=this.attributes.get("filename"))?t:""},o.prototype.getFilesize=function(){return this.attributes.get("filesize")},o.prototype.getFormattedFilesize=function(){var t;return t=this.attributes.get("filesize"),"number"==typeof t?e.config.fileSize.formatter(t):""},o.prototype.getExtension=function(){var t;return null!=(t=this.getFilename().match(/\.(\w+)$/))?t[1].toLowerCase():void 0},o.prototype.getContentType=function(){return this.attributes.get("contentType")},o.prototype.hasContent=function(){return this.attributes.has("content")},o.prototype.getContent=function(){return this.attributes.get("content")},o.prototype.getWidth=function(){return this.attributes.get("width")},o.prototype.getHeight=function(){return this.attributes.get("height")},o.prototype.getFile=function(){return this.file},o.prototype.setFile=function(t){return this.file=t,this.isPreviewable()?this.preloadFile():void 0},o.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null},o.prototype.getUploadProgress=function(){var t;return null!=(t=this.uploadProgress)?t:0},o.prototype.setUploadProgress=function(t){var e;return this.uploadProgress!==t?(this.uploadProgress=t,null!=(e=this.uploadProgressDelegate)&&"function"==typeof e.attachmentDidChangeUploadProgress?e.attachmentDidChangeUploadProgress(this):void 0):void 0},o.prototype.toJSON=function(){return this.getAttributes()},o.prototype.getCacheKey=function(){return [o.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")},o.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL},o.prototype.setPreviewURL=function(t){var e,n;return t!==this.getPreviewURL()?(this.previewURL=t,null!=(e=this.previewDelegate)&&"function"==typeof e.attachmentDidChangeAttributes&&e.attachmentDidChangeAttributes(this),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangePreviewURL?n.attachmentDidChangePreviewURL(this):void 0):void 0},o.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile)},o.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0},o.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0},o.prototype.preload=function(t,n){var i;return t&&t!==this.getPreviewURL()?(this.preloadingURL=t,i=new e.ImagePreloadOperation(t),i.then(function(e){return function(i){var o,r;return r=i.width,o=i.height,e.getWidth()&&e.getHeight()||e.setAttributes({width:r,height:o}),e.preloadingURL=null,e.setPreviewURL(t),"function"==typeof n?n():void 0}}(this))["catch"](function(t){return function(){return t.preloadingURL=null,"function"==typeof n?n():void 0}}(this))):void 0},o}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece=function(n){function i(t,n){null==n&&(n={}),i.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n);}return t(i,n),i.types={},i.registerType=function(t,e){return e.type=t,this.types[t]=e},i.fromJSON=function(t){var e;return (e=this.types[t.type])?e.fromJSON(t):void 0},i.prototype.copyWithAttributes=function(t){return new this.constructor(this.getValue(),t)},i.prototype.copyWithAdditionalAttributes=function(t){return this.copyWithAttributes(this.attributes.merge(t))},i.prototype.copyWithoutAttribute=function(t){return this.copyWithAttributes(this.attributes.remove(t))},i.prototype.copy=function(){return this.copyWithAttributes(this.attributes)},i.prototype.getAttribute=function(t){return this.attributes.get(t)},i.prototype.getAttributesHash=function(){return this.attributes},i.prototype.getAttributes=function(){return this.attributes.toObject()},i.prototype.getCommonAttributes=function(){var t,e,n;return (n=pieceList.getPieceAtIndex(0))?(t=n.attributes,e=t.getKeys(),pieceList.eachPiece(function(n){return e=t.getKeysCommonToHash(n.attributes),t=t.slice(e)}),t.toObject()):{}},i.prototype.hasAttribute=function(t){return this.attributes.has(t)},i.prototype.hasSameStringValueAsPiece=function(t){return null!=t&&this.toString()===t.toString()},i.prototype.hasSameAttributesAsPiece=function(t){return null!=t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))},i.prototype.isBlockBreak=function(){return !1},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.isEmpty=function(){return 0===this.length},i.prototype.isSerializable=function(){return !0},i.prototype.toJSON=function(){return {type:this.constructor.type,attributes:this.getAttributes()}},i.prototype.contentsForInspection=function(){return {type:this.constructor.type,attributes:this.attributes.inspect()}},i.prototype.canBeGrouped=function(){return this.hasAttribute("href")},i.prototype.canBeGroupedWith=function(t){return this.getAttribute("href")===t.getAttribute("href")},i.prototype.getLength=function(){return this.length},i.prototype.canBeConsolidatedWith=function(){return !1},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("attachment",e.AttachmentPiece=function(n){function i(t){this.attachment=t,i.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes();}return t(i,n),i.fromJSON=function(t){return new this(e.Attachment.fromJSON(t.attachment),t.attributes)},i.permittedAttributes=["caption","presentation"],i.prototype.ensureAttachmentExclusivelyHasAttribute=function(t){return this.hasAttribute(t)?(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice(t)),this.attributes=this.attributes.remove(t)):void 0},i.prototype.removeProhibitedAttributes=function(){var t;return t=this.attributes.slice(this.constructor.permittedAttributes),t.isEqualTo(this.attributes)?void 0:this.attributes=t},i.prototype.getValue=function(){return this.attachment},i.prototype.isSerializable=function(){return !this.attachment.isPending()},i.prototype.getCaption=function(){var t;return null!=(t=this.attributes.get("caption"))?t:""},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(null!=t&&null!=(e=t.attachment)?e.id:void 0)},i.prototype.toString=function(){return e.OBJECT_REPLACEMENT_CHARACTER},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.attachment=this.attachment,t},i.prototype.getCacheKey=function(){return [i.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/")},i.prototype.toConsole=function(){return JSON.stringify(this.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.normalizeNewlines,e.Piece.registerType("string",e.StringPiece=function(e){function i(e){i.__super__.constructor.apply(this,arguments),this.string=t(e),this.length=this.string.length;}return n(i,e),i.fromJSON=function(t){return new this(t.string,t.attributes)},i.prototype.getValue=function(){return this.string},i.prototype.toString=function(){return this.string.toString()},i.prototype.isBlockBreak=function(){return "\n"===this.toString()&&this.getAttribute("blockBreak")===!0},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.string=this.string,t},i.prototype.canBeConsolidatedWith=function(t){return null!=t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.consolidateWith=function(t){return new this.constructor(this.toString()+t.toString(),this.attributes)},i.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.length?(e=this,n=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),n=new this.constructor(this.string.slice(t),this.attributes)),[e,n]},i.prototype.toConsole=function(){var t;return t=this.string,t.length>15&&(t=t.slice(0,14)+"\u2026"),JSON.stringify(t.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty,o=[].slice;t=e.spliceArray,e.SplittableList=function(e){function i(t){null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.objects=t.slice(0),this.length=this.objects.length;}var r,s,a;return n(i,e),i.box=function(t){return t instanceof this?t:new this(t)},i.prototype.indexOf=function(t){return this.objects.indexOf(t)},i.prototype.splice=function(){var e;return e=1<=arguments.length?o.call(arguments,0):[],new this.constructor(t.apply(null,[this.objects].concat(o.call(e))))},i.prototype.eachObject=function(t){var e,n,i,o,r,s;for(r=this.objects,s=[],n=e=0,i=r.length;i>e;n=++e)o=r[n],s.push(t(o,n));return s},i.prototype.insertObjectAtIndex=function(t,e){return this.splice(e,0,t)},i.prototype.insertSplittableListAtIndex=function(t,e){return this.splice.apply(this,[e,0].concat(o.call(t.objects)))},i.prototype.insertSplittableListAtPosition=function(t,e){var n,i,o;return o=this.splitObjectAtPosition(e),i=o[0],n=o[1],new this.constructor(i).insertSplittableListAtIndex(t,n)},i.prototype.editObjectAtIndex=function(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)},i.prototype.replaceObjectAtIndex=function(t,e){return this.splice(e,1,t)},i.prototype.removeObjectAtIndex=function(t){return this.splice(t,1)},i.prototype.getObjectAtIndex=function(t){return this.objects[t]},i.prototype.getSplittableListInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n.slice(e,o+1))},i.prototype.selectSplittableList=function(t){var e,n;return n=function(){var n,i,o,r;for(o=this.objects,r=[],n=0,i=o.length;i>n;n++)e=o[n],t(e)&&r.push(e);return r}.call(this),new this.constructor(n)},i.prototype.removeObjectsInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n).splice(e,o-e+1)},i.prototype.transformObjectsInRange=function(t,e){var n,i,o,r,s,a,u;return s=this.splitObjectsAtRange(t),r=s[0],i=s[1],a=s[2],u=function(){var t,s,u;for(u=[],n=t=0,s=r.length;s>t;n=++t)o=r[n],u.push(n>=i&&a>=n?e(o):o);return u}(),new this.constructor(u)},i.prototype.splitObjectsAtRange=function(t){var e,n,i,o,s,u;return o=this.splitObjectAtPosition(a(t)),n=o[0],e=o[1],i=o[2],s=new this.constructor(n).splitObjectAtPosition(r(t)+i),n=s[0],u=s[1],[n,e,u-1]},i.prototype.getObjectAtPosition=function(t){var e,i;return i=this.findIndexAndOffsetAtPosition(t),e=i.index,i.offset,this.objects[e]},i.prototype.splitObjectAtPosition=function(t){var e,n,i,o,r,s,a,u,c,l;return s=this.findIndexAndOffsetAtPosition(t),e=s.index,r=s.offset,o=this.objects.slice(0),null!=e?0===r?(c=e,l=0):(i=this.getObjectAtIndex(e),a=i.splitAtOffset(r),n=a[0],u=a[1],o.splice(e,1,n,u),c=e+1,l=n.getLength()-r):(c=o.length,l=0),[o,c,l]},i.prototype.consolidate=function(){var t,e,n,i,o,r;for(i=[],o=this.objects[0],r=this.objects.slice(1),t=0,e=r.length;e>t;t++)n=r[t],("function"==typeof o.canBeConsolidatedWith?o.canBeConsolidatedWith(n):void 0)?o=o.consolidateWith(n):(i.push(o),o=n);return null!=o&&i.push(o),new this.constructor(i)},i.prototype.consolidateFromIndexToIndex=function(t,e){var n,i,r;return i=this.objects.slice(0),r=i.slice(t,e+1),n=new this.constructor(r).consolidate().toArray(),this.splice.apply(this,[t,r.length].concat(o.call(n)))},i.prototype.findIndexAndOffsetAtPosition=function(t){var e,n,i,o,r,s,a;for(e=0,a=this.objects,i=n=0,o=a.length;o>n;i=++n){if(s=a[i],r=e+s.getLength(),t>=e&&r>t)return {index:i,offset:t-e};e=r;}return {index:null,offset:null}},i.prototype.findPositionAtIndexAndOffset=function(t,e){var n,i,o,r,s,a;for(s=0,a=this.objects,n=i=0,o=a.length;o>i;n=++i)if(r=a[n],t>n)s+=r.getLength();else if(n===t){s+=e;break}return s},i.prototype.getEndPosition=function(){var t,e;return null!=this.endPosition?this.endPosition:this.endPosition=function(){var n,i,o;for(e=0,o=this.objects,n=0,i=o.length;i>n;n++)t=o[n],e+=t.getLength();return e}.call(this)},i.prototype.toString=function(){return this.objects.join("")},i.prototype.toArray=function(){return this.objects.slice(0)},i.prototype.toJSON=function(){return this.toArray()},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||s(this.objects,null!=t?t.objects:void 0)},s=function(t,e){var n,i,o,r,s;if(null==e&&(e=[]),t.length!==e.length)return !1;for(s=!0,i=n=0,o=t.length;o>n;i=++n)r=t[i],s&&!r.isEqualTo(e[i])&&(s=!1);return s},i.prototype.contentsForInspection=function(){var t;return {objects:"["+function(){var e,n,i,o;for(i=this.objects,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.inspect());return o}.call(this).join(", ")+"]"}},a=function(t){return t[0]},r=function(t){return t[1]},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Text=function(n){function i(t){var n;null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.pieceList=new e.SplittableList(function(){var e,i,o;for(o=[],e=0,i=t.length;i>e;e++)n=t[e],n.isEmpty()||o.push(n);return o}());}return t(i,n),i.textForAttachmentWithAttributes=function(t,n){var i;return i=new e.AttachmentPiece(t,n),new this([i])},i.textForStringWithAttributes=function(t,n){var i;return i=new e.StringPiece(t,n),new this([i])},i.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Piece.fromJSON(n));return r}(),new this(i)},i.prototype.copy=function(){return this.copyWithPieceList(this.pieceList)},i.prototype.copyWithPieceList=function(t){return new this.constructor(t.consolidate().toArray())},i.prototype.copyUsingObjectMap=function(t){var e,n;return n=function(){var n,i,o,r,s;for(o=this.getPieces(),s=[],n=0,i=o.length;i>n;n++)e=o[n],s.push(null!=(r=t.find(e))?r:e);return s}.call(this),new this.constructor(n)},i.prototype.appendText=function(t){return this.insertTextAtPosition(t,this.getLength())},i.prototype.insertTextAtPosition=function(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))
	},i.prototype.removeTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))},i.prototype.replaceTextAtRange=function(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])},i.prototype.moveTextFromRangeToPosition=function(t,e){var n,i;if(!(t[0]<=e&&e<=t[1]))return i=this.getTextAtRange(t),n=i.getLength(),t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(i,e)},i.prototype.addAttributeAtRange=function(t,e,n){var i;return i={},i[t]=e,this.addAttributesAtRange(i,n)},i.prototype.addAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAdditionalAttributes(t)}))},i.prototype.removeAttributeAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithoutAttribute(t)}))},i.prototype.setAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAttributes(t)}))},i.prototype.getAttributesAtPosition=function(t){var e,n;return null!=(e=null!=(n=this.pieceList.getObjectAtPosition(t))?n.getAttributes():void 0)?e:{}},i.prototype.getCommonAttributes=function(){var t,n;return t=function(){var t,e,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.getAttributes());return o}.call(this),e.Hash.fromCommonAttributesOfObjects(t).toObject()},i.prototype.getCommonAttributesAtRange=function(t){var e;return null!=(e=this.getTextAtRange(t).getCommonAttributes())?e:{}},i.prototype.getExpandedRangeForAttributeAtOffset=function(t,e){var n,i,o;for(n=o=e,i=this.getLength();n>0&&this.getCommonAttributesAtRange([n-1,o])[t];)n--;for(;i>o&&this.getCommonAttributesAtRange([e,o+1])[t];)o++;return [n,o]},i.prototype.getTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))},i.prototype.getStringAtRange=function(t){return this.pieceList.getSplittableListInRange(t).toString()},i.prototype.getStringAtPosition=function(t){return this.getStringAtRange([t,t+1])},i.prototype.startsWithString=function(t){return this.getStringAtRange([0,t.length])===t},i.prototype.endsWithString=function(t){var e;return e=this.getLength(),this.getStringAtRange([e-t.length,e])===t},i.prototype.getAttachmentPieces=function(){var t,e,n,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],null!=n.attachment&&o.push(n);return o},i.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},i.prototype.getAttachmentAndPositionById=function(t){var e,n,i,o,r,s;for(o=0,r=this.pieceList.toArray(),e=0,n=r.length;n>e;e++){if(i=r[e],(null!=(s=i.attachment)?s.id:void 0)===t)return {attachment:i.attachment,position:o};o+=i.length;}return {attachment:null,position:null}},i.prototype.getAttachmentById=function(t){var e,i;return i=this.getAttachmentAndPositionById(t),e=i.attachment,i.position,e},i.prototype.getRangeOfAttachment=function(t){var e,n;return n=this.getAttachmentAndPositionById(t.id),t=n.attachment,e=n.position,null!=t?[e,e+1]:void 0},i.prototype.updateAttributesForAttachment=function(t,e){var n;return (n=this.getRangeOfAttachment(e))?this.addAttributesAtRange(t,n):this},i.prototype.getLength=function(){return this.pieceList.getEndPosition()},i.prototype.isEmpty=function(){return 0===this.getLength()},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)||(null!=t&&null!=(e=t.pieceList)?e.isEqualTo(this.pieceList):void 0)},i.prototype.isBlockBreak=function(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()},i.prototype.eachPiece=function(t){return this.pieceList.eachObject(t)},i.prototype.getPieces=function(){return this.pieceList.toArray()},i.prototype.getPieceAtPosition=function(t){return this.pieceList.getObjectAtPosition(t)},i.prototype.contentsForInspection=function(){return {pieceList:this.pieceList.inspect()}},i.prototype.toSerializableText=function(){var t;return t=this.pieceList.selectSplittableList(function(t){return t.isSerializable()}),this.copyWithPieceList(t)},i.prototype.toString=function(){return this.pieceList.toString()},i.prototype.toJSON=function(){return this.pieceList.toJSON()},i.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.pieceList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.toConsole()));return o}.call(this))},i.prototype.getDirection=function(){return e.getDirection(this.toString())},i.prototype.isRTL=function(){return "rtl"===this.getDirection()},i}(e.Object);}.call(this),function(){var t,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1},c=[].slice;t=e.arraysAreEqual,r=e.spliceArray,i=e.getBlockConfig,e.getBlockAttributeNames,o=e.getListAttributeNames,e.Block=function(n){function a(t,n){null==t&&(t=new e.Text),null==n&&(n=[]),a.__super__.constructor.apply(this,arguments),this.text=h(t),this.attributes=n;}var l,h,p,d,f,g,m,v,y;return s(a,n),a.fromJSON=function(t){var n;return n=e.Text.fromJSON(t.text),new this(n,t.attributes)},a.prototype.isEmpty=function(){return this.text.isBlockBreak()},a.prototype.isEqualTo=function(e){return a.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(null!=e?e.text:void 0)&&t(this.attributes,null!=e?e.attributes:void 0)},a.prototype.copyWithText=function(t){return new this.constructor(t,this.attributes)},a.prototype.copyWithoutText=function(){return this.copyWithText(null)},a.prototype.copyWithAttributes=function(t){return new this.constructor(this.text,t)},a.prototype.copyWithoutAttributes=function(){return this.copyWithAttributes(null)},a.prototype.copyUsingObjectMap=function(t){var e;return this.copyWithText((e=t.find(this.text))?e:this.text.copyUsingObjectMap(t))},a.prototype.addAttribute=function(t){var e;return e=this.attributes.concat(d(t)),this.copyWithAttributes(e)},a.prototype.removeAttribute=function(t){var e,n;return n=i(t).listAttribute,e=g(g(this.attributes,t),n),this.copyWithAttributes(e)},a.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute())},a.prototype.getLastAttribute=function(){return f(this.attributes)},a.prototype.getAttributes=function(){return this.attributes.slice(0)},a.prototype.getAttributeLevel=function(){return this.attributes.length},a.prototype.getAttributeAtLevel=function(t){return this.attributes[t-1]},a.prototype.hasAttribute=function(t){return u.call(this.attributes,t)>=0},a.prototype.hasAttributes=function(){return this.getAttributeLevel()>0},a.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes())},a.prototype.getNestableAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).nestable&&r.push(t);return r},a.prototype.getNestingLevel=function(){return this.getNestableAttributes().length},a.prototype.decreaseNestingLevel=function(){var t;return (t=this.getLastNestableAttribute())?this.removeAttribute(t):this},a.prototype.increaseNestingLevel=function(){var t,e,n;return (t=this.getLastNestableAttribute())?(n=this.attributes.lastIndexOf(t),e=r.apply(null,[this.attributes,n+1,0].concat(c.call(d(t)))),this.copyWithAttributes(e)):this},a.prototype.getListItemAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).listAttribute&&r.push(t);return r},a.prototype.isListItem=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.listAttribute:void 0},a.prototype.isTerminalBlock=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.terminal:void 0},a.prototype.breaksOnReturn=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.breakOnReturn:void 0},a.prototype.findLineBreakInDirectionFromPosition=function(t,e){var n,i;return i=this.toString(),n=function(){switch(t){case"forward":return i.indexOf("\n",e);case"backward":return i.slice(0,e).lastIndexOf("\n")}}(),-1!==n?n:void 0},a.prototype.contentsForInspection=function(){return {text:this.text.inspect(),attributes:this.attributes}},a.prototype.toString=function(){return this.text.toString()},a.prototype.toJSON=function(){return {text:this.text,attributes:this.attributes}},a.prototype.getDirection=function(){return this.text.getDirection()},a.prototype.isRTL=function(){return this.text.isRTL()},a.prototype.getLength=function(){return this.text.getLength()},a.prototype.canBeConsolidatedWith=function(t){return !this.hasAttributes()&&!t.hasAttributes()&&this.getDirection()===t.getDirection()},a.prototype.consolidateWith=function(t){var n,i;return n=e.Text.textForStringWithAttributes("\n"),i=this.getTextWithoutBlockBreak().appendText(n),this.copyWithText(i.appendText(t.text))},a.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.getLength()?(e=this,n=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),n=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,n]},a.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1},a.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()},a.prototype.canBeGrouped=function(t){return this.attributes[t]},a.prototype.canBeGroupedWith=function(t,e){var n,r,s,a;return s=t.getAttributes(),r=s[e],n=this.attributes[e],!(n!==r||i(n).group===!1&&(a=s[e+1],u.call(o(),a)<0)||this.getDirection()!==t.getDirection()&&!t.isEmpty())},h=function(t){return t=y(t),t=l(t)},y=function(t){var n,i,o,r,s,a;return r=!1,a=t.getPieces(),i=2<=a.length?c.call(a,0,n=a.length-1):(n=0,[]),o=a[n++],null==o?t:(i=function(){var t,e,n;for(n=[],t=0,e=i.length;e>t;t++)s=i[t],s.isBlockBreak()?(r=!0,n.push(v(s))):n.push(s);return n}(),r?new e.Text(c.call(i).concat([o])):t)},p=e.Text.textForStringWithAttributes("\n",{blockBreak:!0}),l=function(t){return m(t)?t:t.appendText(p)},m=function(t){var e,n;return n=t.getLength(),0===n?!1:(e=t.getTextAtRange([n-1,n]),e.isBlockBreak())},v=function(t){return t.copyWithoutAttribute("blockBreak")},d=function(t){var e;return e=i(t).listAttribute,null!=e?[e,t]:[t]},f=function(t){return t.slice(-1)[0]},g=function(t,e){var n;return n=t.lastIndexOf(e),-1===n?t:r(t,n,1)},a}(e.Object);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1},a=[].slice;n=e.tagName,i=e.walkTree,t=e.nodeIsAttachmentElement,e.HTMLSanitizer=function(r){function u(t,e){var n;n=null!=e?e:{},this.allowedAttributes=n.allowedAttributes,this.forbiddenProtocols=n.forbiddenProtocols,this.forbiddenElements=n.forbiddenElements,null==this.allowedAttributes&&(this.allowedAttributes=c),null==this.forbiddenProtocols&&(this.forbiddenProtocols=h),null==this.forbiddenElements&&(this.forbiddenElements=l),this.body=p(t);}var c,l,h,p;return o(u,r),c="style href src width height class".split(" "),h="javascript:".split(" "),l="script iframe".split(" "),u.sanitize=function(t,e){var n;return n=new this(t,e),n.sanitize(),n},u.prototype.sanitize=function(){return this.sanitizeElements(),this.normalizeListElementNesting()},u.prototype.getHTML=function(){return this.body.innerHTML},u.prototype.getBody=function(){return this.body},u.prototype.sanitizeElements=function(){var t,n,o,r,s;for(s=i(this.body),r=[];s.nextNode();)switch(o=s.currentNode,o.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(o)?r.push(o):this.sanitizeElement(o);break;case Node.COMMENT_NODE:r.push(o);}for(t=0,n=r.length;n>t;t++)o=r[t],e.removeNode(o);return this.body},u.prototype.sanitizeElement=function(t){var e,n,i,o,r;for(t.hasAttribute("href")&&(o=t.protocol,s.call(this.forbiddenProtocols,o)>=0&&t.removeAttribute("href")),r=a.call(t.attributes),e=0,n=r.length;n>e;e++)i=r[e].name,s.call(this.allowedAttributes,i)>=0||0===i.indexOf("data-trix")||t.removeAttribute(i);return t},u.prototype.normalizeListElementNesting=function(){var t,e,i,o,r;for(r=a.call(this.body.querySelectorAll("ul,ol")),t=0,e=r.length;e>t;t++)i=r[t],(o=i.previousElementSibling)&&"li"===n(o)&&o.appendChild(i);return this.body},u.prototype.elementIsRemovable=function(t){return (null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE?this.elementIsForbidden(t)||this.elementIsntSerializable(t):void 0},u.prototype.elementIsForbidden=function(t){var e;return e=n(t),s.call(this.forbiddenElements,e)>=0},u.prototype.elementIsntSerializable=function(e){return "false"===e.getAttribute("data-trix-serialize")&&!t(e)},p=function(t){var e,n,i,o,r;for(null==t&&(t=""),t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>"),e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,r=e.head.querySelectorAll("style"),i=0,o=r.length;o>i;i++)n=r[i],e.body.appendChild(n);return e.body},u}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty,f=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,s=e.makeElement,l=e.tagName,r=e.getBlockTagNames,h=e.walkTree,o=e.findClosestElementFromNode,i=e.elementContainsNode,a=e.nodeIsAttachmentElement,u=e.normalizeSpaces,n=e.breakableWhitespacePattern,c=e.squishBreakableWhitespace,e.HTMLParser=function(d){function g(t,e){this.html=t,this.referenceElement=(null!=e?e:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[];}var m,v,y,b,A,C,x,w,E,S,R,k;return p(g,d),g.parse=function(t,e){var n;return n=new this(t,e),n.parse(),n},g.prototype.getDocument=function(){return e.Document.fromJSON(this.blocks)},g.prototype.parse=function(){var t,n;try{for(this.createHiddenContainer(),t=e.HTMLSanitizer.sanitize(this.html).getHTML(),this.containerElement.innerHTML=t,n=h(this.containerElement,{usingFilter:x});n.nextNode();)this.processNode(n.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer();}},g.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=s({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))},g.prototype.removeHiddenContainer=function(){return e.removeNode(this.containerElement)},x=function(t){return "style"===l(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},g.prototype.processNode=function(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}},g.prototype.appendBlockForTextNode=function(e){var n,i,o;return i=e.parentNode,i===this.currentBlockElement&&this.isBlockElement(e.previousSibling)?this.appendStringWithAttributes("\n"):i!==this.containerElement&&!this.isBlockElement(i)||(n=this.getBlockAttributes(i),t(n,null!=(o=this.currentBlock)?o.attributes:void 0))?void 0:(this.currentBlock=this.appendBlockForAttributesWithElement(n,i),this.currentBlockElement=i)},g.prototype.appendBlockForElement=function(e){var n,o,r,s;if(r=this.isBlockElement(e),o=i(this.currentBlockElement,e),r&&!this.isBlockElement(e.firstChild)){if((!this.isInsignificantTextNode(e.firstChild)||!this.isBlockElement(e.firstElementChild))&&(n=this.getBlockAttributes(e),e.firstChild))return o&&t(n,this.currentBlock.attributes)?this.appendStringWithAttributes("\n"):(this.currentBlock=this.appendBlockForAttributesWithElement(n,e),this.currentBlockElement=e)}else if(this.currentBlockElement&&!o&&!r)return (s=this.findParentBlockElement(e))?this.appendBlockForElement(s):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null)},g.prototype.findParentBlockElement=function(t){var e;for(e=t.parentElement;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&f.call(this.blockElements,e)>=0)return e;e=e.parentElement;}return null},g.prototype.processTextNode=function(t){var e,n;return n=t.data,v(t.parentNode)||(n=c(n),R(null!=(e=t.previousSibling)?e.textContent:void 0)&&(n=A(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode))},g.prototype.processElement=function(t){var e,n,i,o,r;if(a(t))return e=w(t,"attachment"),Object.keys(e).length&&(o=this.getTextAttributes(t),this.appendAttachmentWithAttributes(e,o),t.innerHTML=""),this.processedElements.push(t);switch(l(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"},i=b(t);for(n in i)r=i[n],e[n]=r;return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes("\n");break;case"td":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes(" | ")}},g.prototype.appendBlockForAttributesWithElement=function(t,e){var n;return this.blockElements.push(e),n=m(t),this.blocks.push(n),n},g.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null)},g.prototype.appendStringWithAttributes=function(t,e){return this.appendPiece(S(t,e))},g.prototype.appendAttachmentWithAttributes=function(t,e){return this.appendPiece(E(t,e))},g.prototype.appendPiece=function(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)},g.prototype.appendStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[i.length-1],"string"===(null!=n?n.type:void 0)?n.string+=t:i.push(S(t))},g.prototype.prependStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[0],"string"===(null!=n?n.type:void 0)?n.string=t+n.string:i.unshift(S(t))},S=function(t,e){var n;return null==e&&(e={}),n="string",t=u(t),{string:t,attributes:e,type:n}},E=function(t,e){var n;return null==e&&(e={}),n="attachment",{attachment:t,attributes:e,type:n}},m=function(t){var e;return null==t&&(t={}),e=[],{text:e,attributes:t}},g.prototype.getTextAttributes=function(t){var n,i,r,s,u,c,l,h,p,d,f,g;r={},p=e.config.textAttributes;for(n in p)if(u=p[n],u.tagName&&o(t,{matchingSelector:u.tagName,untilNode:this.containerElement}))r[n]=!0;else if(u.parser){if(g=u.parser(t)){for(i=!1,d=this.findBlockElementAncestors(t),c=0,h=d.length;h>c;c++)if(s=d[c],u.parser(s)===g){i=!0;break}i||(r[n]=g);}}else u.styleProperty&&(g=t.style[u.styleProperty])&&(r[n]=g);if(a(t)){f=w(t,"attributes");for(l in f)g=f[l],r[l]=g;}return r},g.prototype.getBlockAttributes=function(t){var n,i,o,r;for(i=[];t&&t!==this.containerElement;){r=e.config.blockAttributes;for(n in r)o=r[n],o.parse!==!1&&l(t)===o.tagName&&(("function"==typeof o.test?o.test(t):void 0)||!o.test)&&(i.push(n),o.listAttribute&&i.push(o.listAttribute));t=t.parentNode;}return i.reverse()},g.prototype.findBlockElementAncestors=function(t){var e,n;for(e=[];t&&t!==this.containerElement;)n=l(t),f.call(r(),n)>=0&&e.push(t),t=t.parentNode;return e},w=function(t,e){try{return JSON.parse(t.getAttribute("data-trix-"+e))}catch(n){return {}}},b=function(t){var e,n,i;return i=t.getAttribute("width"),n=t.getAttribute("height"),e={},i&&(e.width=parseInt(i,10)),n&&(e.height=parseInt(n,10)),e},g.prototype.isBlockElement=function(t){var e;if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&!a(t)&&!o(t,{matchingSelector:"td",untilNode:this.containerElement}))return e=l(t),f.call(r(),e)>=0||"block"===window.getComputedStyle(t).display},g.prototype.isInsignificantTextNode=function(t){var e,n,i;if((null!=t?t.nodeType:void 0)===Node.TEXT_NODE&&k(t.data)&&(n=t.parentNode,i=t.previousSibling,e=t.nextSibling,(!C(n.previousSibling)||this.isBlockElement(n.previousSibling))&&!v(n)))return !i||this.isBlockElement(i)||!e||this.isBlockElement(e)},g.prototype.isExtraBR=function(t){return "br"===l(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t},v=function(t){var e;return e=window.getComputedStyle(t).whiteSpace,"pre"===e||"pre-wrap"===e||"pre-line"===e},C=function(t){return t&&!R(t.textContent)},g.prototype.translateBlockElementMarginsToNewlines=function(){var e,n,i,o,r,s,a;for(e=this.getMarginOfDefaultBlockElement(),s=this.blocks,a=[],i=n=0,o=s.length;o>n;i=++n)s[i],(r=this.getMarginOfBlockElementAtIndex(i))&&(r.top>2*e.top&&this.prependStringToTextAtIndex("\n",i),a.push(r.bottom>2*e.bottom?this.appendStringToTextAtIndex("\n",i):void 0));return a},g.prototype.getMarginOfBlockElementAtIndex=function(t){var e,n;return !(e=this.blockElements[t])||!e.textContent||(n=l(e),f.call(r(),n)>=0||f.call(this.processedElements,e)>=0)?void 0:y(e)},g.prototype.getMarginOfDefaultBlockElement=function(){var t;return t=s(e.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t),y(t)},y=function(t){var e;return e=window.getComputedStyle(t),"block"===e.display?{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}:void 0},A=function(t){return t.replace(RegExp("^"+n.source+"+"),"")},k=function(t){return RegExp("^"+n.source+"*$").test(t)},R=function(t){return /\s$/.test(t)},g}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,i=e.normalizeRange,o=e.rangeIsCollapsed,n=e.getBlockConfig,e.Document=function(s){function c(t){null==t&&(t=[]),c.__super__.constructor.apply(this,arguments),0===t.length&&(t=[new e.Block]),this.blockList=e.SplittableList.box(t);}var l;return r(c,s),c.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Block.fromJSON(n));return r}(),new this(i)},c.fromHTML=function(t,n){return e.HTMLParser.parse(t,n).getDocument()},c.fromString=function(t,n){var i;return i=e.Text.textForStringWithAttributes(t,n),new this([new e.Block(i)])},c.prototype.isEmpty=function(){var t;return 1===this.blockList.length&&(t=this.getBlockAtIndex(0),t.isEmpty()&&!t.hasAttributes())},c.prototype.copy=function(t){var e;return null==t&&(t={}),e=t.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e)},c.prototype.copyUsingObjectsFromDocument=function(t){var n;return n=new e.ObjectMap(t.getObjects()),this.copyUsingObjectMap(n)},c.prototype.copyUsingObjectMap=function(t){var e,n,i;return n=function(){var n,o,r,s;for(r=this.getBlocks(),s=[],n=0,o=r.length;o>n;n++)e=r[n],s.push((i=t.find(e))?i:e.copyUsingObjectMap(t));return s}.call(this),new this.constructor(n)},c.prototype.copyWithBaseBlockAttributes=function(t){var e,n,i;return null==t&&(t=[]),i=function(){var i,o,r,s;for(r=this.getBlocks(),s=[],i=0,o=r.length;o>i;i++)n=r[i],e=t.concat(n.getAttributes()),s.push(n.copyWithAttributes(e));return s}.call(this),new this.constructor(i)},c.prototype.replaceBlock=function(t,e){var n;return n=this.blockList.indexOf(t),-1===n?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,n))},c.prototype.insertDocumentAtRange=function(t,e){var n,r,s,a,u,c,l;return r=t.blockList,u=(e=i(e))[0],c=this.locationFromPosition(u),s=c.index,a=c.offset,l=this,n=this.getBlockAtPosition(u),o(e)&&n.isEmpty()&&!n.hasAttributes()?l=new this.constructor(l.blockList.removeObjectAtIndex(s)):n.getBlockBreakPosition()===a&&u++,l=l.removeTextAtRange(e),new this.constructor(l.blockList.insertSplittableListAtPosition(r,u))},c.prototype.mergeDocumentAtRange=function(e,n){var o,r,s,a,u,c,l,h,p,d,f,g;return f=(n=i(n))[0],d=this.locationFromPosition(f),r=this.getBlockAtIndex(d.index).getAttributes(),o=e.getBaseBlockAttributes(),g=r.slice(-o.length),t(o,g)?(l=r.slice(0,-o.length),c=e.copyWithBaseBlockAttributes(l)):c=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(r),s=c.getBlockCount(),a=c.getBlockAtIndex(0),t(r,a.getAttributes())?(u=a.getTextWithoutBlockBreak(),p=this.insertTextAtRange(u,n),s>1&&(c=new this.constructor(c.getBlocks().slice(1)),h=f+u.getLength(),p=p.insertDocumentAtRange(c,h))):p=this.insertDocumentAtRange(c,n),p},c.prototype.insertTextAtRange=function(t,e){var n,o,r,s,a;return a=(e=i(e))[0],s=this.locationFromPosition(a),o=s.index,r=s.offset,n=this.removeTextAtRange(e),new this.constructor(n.blockList.editObjectAtIndex(o,function(e){return e.copyWithText(e.text.insertTextAtPosition(t,r))}))},c.prototype.removeTextAtRange=function(t){var e,n,r,s,a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;return p=t=i(t),l=p[0],A=p[1],o(t)?this:(d=this.locationRangeFromRange(t),u=d[0],y=d[1],a=u.index,c=u.offset,s=this.getBlockAtIndex(a),v=y.index,b=y.offset,m=this.getBlockAtIndex(v),f=A-l===1&&s.getBlockBreakPosition()===c&&m.getBlockBreakPosition()!==b&&"\n"===m.text.getStringAtPosition(b),f?r=this.blockList.editObjectAtIndex(v,function(t){return t.copyWithText(t.text.removeTextAtRange([b,b+1]))}):(h=s.text.getTextAtRange([0,c]),C=m.text.getTextAtRange([b,m.getLength()]),x=h.appendText(C),g=a!==v&&0===c,w=g&&s.getAttributeLevel()>=m.getAttributeLevel(),n=w?m.copyWithText(x):s.copyWithText(x),e=v+1-a,r=this.blockList.splice(a,e,n)),new this.constructor(r))},c.prototype.moveTextFromRangeToPosition=function(t,e){var n,o,r,s,u,c,l,h,p,d;return c=t=i(t),p=c[0],r=c[1],e>=p&&r>=e?this:(o=this.getDocumentAtRange(t),h=this.removeTextAtRange(t),u=e>p,u&&(e-=o.getLength()),l=o.getBlocks(),s=l[0],n=2<=l.length?a.call(l,1):[],0===n.length?(d=s.getTextWithoutBlockBreak(),u&&(e+=1)):d=s.text,h=h.insertTextAtRange(d,e),0===n.length?h:(o=new this.constructor(n),e+=d.getLength(),h.insertDocumentAtRange(o,e)))},c.prototype.addAttributeAtRange=function(t,e,i){var o;return o=this.blockList,this.eachBlockAtRange(i,function(i,r,s){return o=o.editObjectAtIndex(s,function(){return n(t)?i.addAttribute(t,e):r[0]===r[1]?i:i.copyWithText(i.text.addAttributeAtRange(t,e,r))})}),new this.constructor(o)},c.prototype.addAttribute=function(t,e){var n;return n=this.blockList,this.eachBlock(function(i,o){return n=n.editObjectAtIndex(o,function(){return i.addAttribute(t,e)})}),new this.constructor(n)},c.prototype.removeAttributeAtRange=function(t,e){var i;return i=this.blockList,this.eachBlockAtRange(e,function(e,o,r){return n(t)?i=i.editObjectAtIndex(r,function(){return e.removeAttribute(t)}):o[0]!==o[1]?i=i.editObjectAtIndex(r,function(){return e.copyWithText(e.text.removeAttributeAtRange(t,o))}):void 0}),new this.constructor(i)},c.prototype.updateAttributesForAttachment=function(t,e){var n,o,r;return o=(this.getRangeOfAttachment(e))[0],n=this.locationFromPosition(o).index,r=this.getTextAtIndex(n),new this.constructor(this.blockList.editObjectAtIndex(n,function(n){return n.copyWithText(r.updateAttributesForAttachment(t,e))}))},c.prototype.removeAttributeForAttachment=function(t,e){var n;return n=this.getRangeOfAttachment(e),this.removeAttributeAtRange(t,n)},c.prototype.insertBlockBreakAtRange=function(t){var n,o,r,s;return s=(t=i(t))[0],r=this.locationFromPosition(s).offset,o=this.removeTextAtRange(t),0===r&&(n=[new e.Block]),new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n),s))},c.prototype.applyBlockAttributeAtRange=function(t,e,i){var o,r,s,a;return s=this.expandRangeToLineBreaksAndSplitBlocks(i),r=s.document,i=s.range,o=n(t),o.listAttribute?(r=r.removeLastListAttributeAtRange(i,{exceptAttributeName:t}),a=r.convertLineBreaksToBlockBreaksInRange(i),r=a.document,i=a.range):r=o.exclusive?r.removeBlockAttributesAtRange(i):o.terminal?r.removeLastTerminalAttributeAtRange(i):r.consolidateBlocksAtRange(i),r.addAttributeAtRange(t,e,i)},c.prototype.removeLastListAttributeAtRange=function(t,e){var i;return null==e&&(e={}),i=this.blockList,this.eachBlockAtRange(t,function(t,o,r){var s;if((s=t.getLastAttribute())&&n(s).listAttribute&&s!==e.exceptAttributeName)return i=i.editObjectAtIndex(r,function(){return t.removeAttribute(s)})}),new this.constructor(i)},c.prototype.removeLastTerminalAttributeAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,i,o){var r;if((r=t.getLastAttribute())&&n(r).terminal)return e=e.editObjectAtIndex(o,function(){return t.removeAttribute(r)})}),new this.constructor(e)},c.prototype.removeBlockAttributesAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,n,i){return t.hasAttributes()?e=e.editObjectAtIndex(i,function(){return t.copyWithoutAttributes()}):void 0}),new this.constructor(e)},c.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t){var e,n,o,r,s,a,u,c,l;return a=t=i(t),l=a[0],r=a[1],c=this.locationFromPosition(l),o=this.locationFromPosition(r),e=this,u=e.getBlockAtIndex(c.index),null!=(c.offset=u.findLineBreakInDirectionFromPosition("backward",c.offset))&&(s=e.positionFromLocation(c),e=e.insertBlockBreakAtRange([s,s+1]),o.index+=1,o.offset-=e.getBlockAtIndex(c.index).getLength(),c.index+=1),c.offset=0,0===o.offset&&o.index>c.index?(o.index-=1,o.offset=e.getBlockAtIndex(o.index).getBlockBreakPosition()):(n=e.getBlockAtIndex(o.index),"\n"===n.text.getStringAtRange([o.offset-1,o.offset])?o.offset-=1:o.offset=n.findLineBreakInDirectionFromPosition("forward",o.offset),o.offset!==n.getBlockBreakPosition()&&(s=e.positionFromLocation(o),e=e.insertBlockBreakAtRange([s,s+1]))),l=e.positionFromLocation(c),r=e.positionFromLocation(o),t=i([l,r]),{document:e,range:t}},c.prototype.convertLineBreaksToBlockBreaksInRange=function(t){var e,n,o;return n=(t=i(t))[0],o=this.getStringAtRange(t).slice(0,-1),e=this,o.replace(/.*?\n/g,function(t){return n+=t.length,e=e.insertBlockBreakAtRange([n-1,n])}),{document:e,range:t}},c.prototype.consolidateBlocksAtRange=function(t){var e,n,o,r,s;return o=t=i(t),s=o[0],n=o[1],r=this.locationFromPosition(s).index,e=this.locationFromPosition(n).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r,e))},c.prototype.getDocumentAtRange=function(t){var e;return t=i(t),e=this.blockList.getSplittableListInRange(t).toArray(),new this.constructor(e)},c.prototype.getStringAtRange=function(t){var e,n,o;return o=t=i(t),n=o[o.length-1],n!==this.getLength()&&(e=-1),this.getDocumentAtRange(t).toString().slice(0,e)},c.prototype.getBlockAtIndex=function(t){return this.blockList.getObjectAtIndex(t)},c.prototype.getBlockAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getBlockAtIndex(e)},c.prototype.getTextAtIndex=function(t){var e;return null!=(e=this.getBlockAtIndex(t))?e.text:void 0},c.prototype.getTextAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getTextAtIndex(e)},c.prototype.getPieceAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getPieceAtPosition(n)},c.prototype.getCharacterAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getStringAtRange([n,n+1])},c.prototype.getLength=function(){return this.blockList.getEndPosition()},c.prototype.getBlocks=function(){return this.blockList.toArray()},c.prototype.getBlockCount=function(){return this.blockList.length},c.prototype.getEditCount=function(){return this.editCount},c.prototype.eachBlock=function(t){return this.blockList.eachObject(t)},c.prototype.eachBlockAtRange=function(t,e){var n,o,r,s,a,u,c,l,h,p,d,f;if(u=t=i(t),d=u[0],r=u[1],p=this.locationFromPosition(d),o=this.locationFromPosition(r),p.index===o.index)return n=this.getBlockAtIndex(p.index),f=[p.offset,o.offset],e(n,f,p.index);for(h=[],a=s=c=p.index,l=o.index;l>=c?l>=s:s>=l;a=l>=c?++s:--s)(n=this.getBlockAtIndex(a))?(f=function(){switch(a){case p.index:return [p.offset,n.text.getLength()];case o.index:return [0,o.offset];default:return [0,n.text.getLength()]}}(),h.push(e(n,f,a))):h.push(void 0);return h},c.prototype.getCommonAttributesAtRange=function(t){var n,r,s;return r=(t=i(t))[0],o(t)?this.getCommonAttributesAtPosition(r):(s=[],n=[],this.eachBlockAtRange(t,function(t,e){return e[0]!==e[1]?(s.push(t.text.getCommonAttributesAtRange(e)),n.push(l(t))):void 0
	}),e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject())},c.prototype.getCommonAttributesAtPosition=function(t){var n,i,o,r,s,a,c,h,p,d;if(p=this.locationFromPosition(t),s=p.index,h=p.offset,o=this.getBlockAtIndex(s),!o)return {};r=l(o),n=o.text.getAttributesAtPosition(h),i=o.text.getAttributesAtPosition(h-1),a=function(){var t,n;t=e.config.textAttributes,n=[];for(c in t)d=t[c],d.inheritable&&n.push(c);return n}();for(c in i)d=i[c],(d===n[c]||u.call(a,c)>=0)&&(r[c]=d);return r},c.prototype.getRangeOfCommonAttributeAtPosition=function(t,e){var n,o,r,s,a,u,c,l,h;return a=this.locationFromPosition(e),r=a.index,s=a.offset,h=this.getTextAtIndex(r),u=h.getExpandedRangeForAttributeAtOffset(t,s),l=u[0],o=u[1],c=this.positionFromLocation({index:r,offset:l}),n=this.positionFromLocation({index:r,offset:o}),i([c,n])},c.prototype.getBaseBlockAttributes=function(){var t,e,n,i,o,r,s;for(t=this.getBlockAtIndex(0).getAttributes(),n=i=1,s=this.getBlockCount();s>=1?s>i:i>s;n=s>=1?++i:--i)e=this.getBlockAtIndex(n).getAttributes(),r=Math.min(t.length,e.length),t=function(){var n,i,s;for(s=[],o=n=0,i=r;(i>=0?i>n:n>i)&&e[o]===t[o];o=i>=0?++n:--n)s.push(e[o]);return s}();return t},l=function(t){var e,n;return n={},(e=t.getLastAttribute())&&(n[e]=!0),n},c.prototype.getAttachmentById=function(t){var e,n,i,o;for(o=this.getAttachments(),n=0,i=o.length;i>n;n++)if(e=o[n],e.id===t)return e},c.prototype.getAttachmentPieces=function(){var t;return t=[],this.blockList.eachObject(function(e){var n;return n=e.text,t=t.concat(n.getAttachmentPieces())}),t},c.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},c.prototype.getRangeOfAttachment=function(t){var e,n,o,r,s,a,u;for(r=0,s=this.blockList.toArray(),n=e=0,o=s.length;o>e;n=++e){if(a=s[n].text,u=a.getRangeOfAttachment(t))return i([r+u[0],r+u[1]]);r+=a.getLength();}},c.prototype.getLocationRangeOfAttachment=function(t){var e;return e=this.getRangeOfAttachment(t),this.locationRangeFromRange(e)},c.prototype.getAttachmentPieceForAttachment=function(t){var e,n,i,o;for(o=this.getAttachmentPieces(),e=0,n=o.length;n>e;e++)if(i=o[e],i.attachment===t)return i},c.prototype.findRangesForBlockAttribute=function(t){var e,n,i,o,r,s,a;for(r=0,s=[],a=this.getBlocks(),n=0,i=a.length;i>n;n++)e=a[n],o=e.getLength(),e.hasAttribute(t)&&s.push([r,r+o]),r+=o;return s},c.prototype.findRangesForTextAttribute=function(t,e){var n,i,o,r,s,a,u,c,l,h;for(h=(null!=e?e:{}).withValue,a=0,u=[],c=[],r=function(e){return null!=h?e.getAttribute(t)===h:e.hasAttribute(t)},l=this.getPieces(),n=0,i=l.length;i>n;n++)s=l[n],o=s.getLength(),r(s)&&(u[1]===a?u[1]=a+o:c.push(u=[a,a+o])),a+=o;return c},c.prototype.locationFromPosition=function(t){var e,n;return n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t)),null!=n.index?n:(e=this.getBlocks(),{index:e.length-1,offset:e[e.length-1].getLength()})},c.prototype.positionFromLocation=function(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)},c.prototype.locationRangeFromPosition=function(t){return i(this.locationFromPosition(t))},c.prototype.locationRangeFromRange=function(t){var e,n,o,r;if(t=i(t))return r=t[0],n=t[1],o=this.locationFromPosition(r),e=this.locationFromPosition(n),i([o,e])},c.prototype.rangeFromLocationRange=function(t){var e,n;return t=i(t),e=this.positionFromLocation(t[0]),o(t)||(n=this.positionFromLocation(t[1])),i([e,n])},c.prototype.isEqualTo=function(t){return this.blockList.isEqualTo(null!=t?t.blockList:void 0)},c.prototype.getTexts=function(){var t,e,n,i,o;for(i=this.getBlocks(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.text);return o},c.prototype.getPieces=function(){var t,e,n,i,o;for(n=[],i=this.getTexts(),t=0,e=i.length;e>t;t++)o=i[t],n.push.apply(n,o.getPieces());return n},c.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())},c.prototype.toSerializableDocument=function(){var t;return t=[],this.blockList.eachObject(function(e){return t.push(e.copyWithText(e.text.toSerializableText()))}),new this.constructor(t)},c.prototype.toString=function(){return this.blockList.toString()},c.prototype.toJSON=function(){return this.blockList.toJSON()},c.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.blockList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.text.toConsole()));return o}.call(this))},c}(e.Object);}.call(this),function(){e.LineBreakInsertion=function(){function t(t){var e;this.composition=t,this.document=this.composition.document,e=this.composition.getSelectedRange(),this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset);}return t.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter},t.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)},t.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()},t.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()},t.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()},t}();}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){function n(){this.constructor=t;}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=e.normalizeRange,c=e.rangesAreEqual,u=e.rangeIsCollapsed,a=e.objectsAreEqual,t=e.arrayStartsWith,l=e.summarizeArrayChange,i=e.getAllAttributeNames,o=e.getBlockConfig,r=e.getTextConfig,n=e.extend,e.Composition=function(p){function d(){this.document=new e.Document,this.attachments=[],this.currentAttributes={},this.revision=0;}var f;return h(d,p),d.prototype.setDocument=function(t){var e;return t.isEqualTo(this.document)?void 0:(this.document=t,this.refreshAttachments(),this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeDocument?e.compositionDidChangeDocument(t):void 0)},d.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.getSelectedRange()}},d.prototype.loadSnapshot=function(t){var n,i,o,r;return n=t.document,r=t.selectedRange,null!=(i=this.delegate)&&"function"==typeof i.compositionWillLoadSnapshot&&i.compositionWillLoadSnapshot(),this.setDocument(null!=n?n:new e.Document),this.setSelection(null!=r?r:[0,0]),null!=(o=this.delegate)&&"function"==typeof o.compositionDidLoadSnapshot?o.compositionDidLoadSnapshot():void 0},d.prototype.insertText=function(t,e){var n,i,o,r;return r=(null!=e?e:{updatePosition:!0}).updatePosition,i=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t,i)),o=i[0],n=o+t.getLength(),r&&this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertBlock=function(t){var n;return null==t&&(t=new e.Block),n=new e.Document([t]),this.insertDocument(n)},d.prototype.insertDocument=function(t){var n,i,o;return null==t&&(t=new e.Document),i=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t,i)),o=i[0],n=o+t.getLength(),this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertString=function(t,n){var i,o;return i=this.getCurrentTextAttributes(),o=e.Text.textForStringWithAttributes(t,i),this.insertText(o,n)},d.prototype.insertBlockBreak=function(){var t,e,n;return e=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e)),n=e[0],t=n+1,this.setSelection(t),this.notifyDelegateOfInsertionAtRange([n,t])},d.prototype.insertLineBreak=function(){var t,n;return n=new e.LineBreakInsertion(this),n.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n.startPosition)):n.shouldPrependListItem()?(t=new e.Document([n.block.copyWithoutText()]),this.insertDocument(t)):n.shouldInsertBlockBreak()?this.insertBlockBreak():n.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n.shouldBreakFormattedBlock()?this.breakFormattedBlock(n):this.insertString("\n")},d.prototype.insertHTML=function(t){var n,i,o,r;return n=e.Document.fromHTML(t),o=this.getSelectedRange(),this.setDocument(this.document.mergeDocumentAtRange(n,o)),r=o[0],i=r+n.getLength()-1,this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])},d.prototype.replaceHTML=function(t){var n,i,o;return n=e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document),i=this.getLocationRange({strict:!1}),o=this.document.rangeFromLocationRange(i),this.setDocument(n),this.setSelection(o)},d.prototype.insertFile=function(t){return this.insertFiles([t])},d.prototype.insertFiles=function(t){var n,i,o,r,s,a;for(i=[],r=0,s=t.length;s>r;r++)o=t[r],(null!=(a=this.delegate)?a.compositionShouldAcceptFile(o):void 0)&&(n=e.Attachment.attachmentForFile(o),i.push(n));return this.insertAttachments(i)},d.prototype.insertAttachment=function(t){return this.insertAttachments([t])},d.prototype.insertAttachments=function(t){var n,i,o,r,s,a,u,c,l;for(c=new e.Text,r=0,s=t.length;s>r;r++)n=t[r],l=n.getType(),a=null!=(u=e.config.attachments[l])?u.presentation:void 0,o=this.getCurrentTextAttributes(),a&&(o.presentation=a),i=e.Text.textForAttachmentWithAttributes(n,o),c=c.appendText(i);return this.insertText(c)},d.prototype.shouldManageDeletingInDirection=function(t){var e;if(e=this.getLocationRange(),u(e)){if("backward"===t&&0===e[0].offset)return !0;if(this.shouldManageMovingCursorInDirection(t))return !0}else if(e[0].index!==e[1].index)return !0;return !1},d.prototype.deleteInDirection=function(t,e){var n,i,o,r,s,a,c,l;return r=(null!=e?e:{}).length,s=this.getLocationRange(),a=this.getSelectedRange(),c=u(a),c?o="backward"===t&&0===s[0].offset:l=s[0].index!==s[1].index,o&&this.canDecreaseBlockAttributeLevel()&&(i=this.getBlock(),i.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(a[0]),i.isEmpty())?!1:(c&&(a=this.getExpandedRangeInDirection(t,{length:r}),"backward"===t&&(n=this.getAttachmentAtRange(a))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(a)),this.setSelection(a[0]),o||l?!1:void 0))},d.prototype.moveTextFromRange=function(t){var e;return e=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)},d.prototype.removeAttachment=function(t){var e;return (e=this.document.getRangeOfAttachment(t))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])):void 0},d.prototype.removeLastBlockAttribute=function(){var t,e,n,i;return n=this.getSelectedRange(),i=n[0],e=n[1],t=this.document.getBlockAtPosition(e),this.removeCurrentAttribute(t.getLastAttribute()),this.setSelection(i)},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f)},d.prototype.selectPlaceholder=function(){return null!=this.placeholderPosition?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null},d.prototype.hasCurrentAttribute=function(t){var e;return e=this.currentAttributes[t],null!=e&&e!==!1},d.prototype.toggleCurrentAttribute=function(t){var e;return (e=!this.currentAttributes[t])?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)},d.prototype.canSetCurrentAttribute=function(t){return o(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)},d.prototype.canSetCurrentTextAttribute=function(){var t,e,n,i,o;if(e=this.getSelectedDocument()){for(o=e.getAttachments(),n=0,i=o.length;i>n;n++)if(t=o[n],!t.hasContent())return !1;return !0}},d.prototype.canSetCurrentBlockAttribute=function(){var t;if(t=this.getBlock())return !t.isTerminalBlock()},d.prototype.setCurrentAttribute=function(t,e){return o(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())},d.prototype.setTextAttribute=function(t,n){var i,o,r,s;if(o=this.getSelectedRange())return r=o[0],i=o[1],r!==i?this.setDocument(this.document.addAttributeAtRange(t,n,o)):"href"===t?(s=e.Text.textForStringWithAttributes(n,{href:n}),this.insertText(s)):void 0},d.prototype.setBlockAttribute=function(t,e){var i;if(i=this.getSelectedRange())return this.canSetCurrentAttribute(t)?(this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t,e,i)),this.setSelection(i)):void 0},d.prototype.removeCurrentAttribute=function(t){return o(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())},d.prototype.removeTextAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.removeBlockAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.canDecreaseNestingLevel=function(){var t;return (null!=(t=this.getBlock())?t.getNestingLevel():void 0)>0},d.prototype.canIncreaseNestingLevel=function(){var e,n,i;if(e=this.getBlock())return (null!=(i=o(e.getLastNestableAttribute()))?i.listAttribute:0)?(n=this.getPreviousBlock())?t(n.getListItemAttributes(),e.getListItemAttributes()):void 0:e.getNestingLevel()>0},d.prototype.decreaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))},d.prototype.increaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))},d.prototype.canDecreaseBlockAttributeLevel=function(){var t;return (null!=(t=this.getBlock())?t.getAttributeLevel():void 0)>0},d.prototype.decreaseBlockAttributeLevel=function(){var t,e;return (t=null!=(e=this.getBlock())?e.getLastAttribute():void 0)?this.removeCurrentAttribute(t):void 0},d.prototype.decreaseListLevel=function(){var t,e,n,i,o,r;for(r=this.getSelectedRange()[0],o=this.document.locationFromPosition(r).index,n=o,t=this.getBlock().getAttributeLevel();(e=this.document.getBlockAtIndex(n+1))&&e.isListItem()&&e.getAttributeLevel()>t;)n++;return r=this.document.positionFromLocation({index:o,offset:0}),i=this.document.positionFromLocation({index:n,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r,i]))},d.prototype.updateCurrentAttributes=function(){var t,e,n,o,r,s;if(s=this.getSelectedRange({ignoreLock:!0})){for(e=this.document.getCommonAttributesAtRange(s),r=i(),n=0,o=r.length;o>n;n++)t=r[n],e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);if(!a(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}},d.prototype.getCurrentAttributes=function(){return n.call({},this.currentAttributes)},d.prototype.getCurrentTextAttributes=function(){var t,e,n,i;t={},n=this.currentAttributes;for(e in n)i=n[e],i!==!1&&r(e)&&(t[e]=i);return t},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",!0)},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen")},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen")},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t){var e,n;return e=this.document.locationRangeFromRange(t),null!=(n=this.delegate)?n.compositionDidRequestChangingSelectionToLocationRange(e):void 0},d.prototype.getSelectedRange=function(){var t;return (t=this.getLocationRange())?this.document.rangeFromLocationRange(t):void 0},d.prototype.setSelectedRange=function(t){var e;return e=this.document.locationRangeFromRange(t),this.getSelectionManager().setLocationRange(e)},d.prototype.getPosition=function(){var t;return (t=this.getLocationRange())?this.document.positionFromLocation(t[0]):void 0},d.prototype.getLocationRange=function(t){var e,n;return null!=(e=null!=(n=this.targetLocationRange)?n:this.getSelectionManager().getLocationRange(t))?e:s({index:0,offset:0})},d.prototype.withTargetLocationRange=function(t,e){var n;this.targetLocationRange=t;try{n=e();}finally{this.targetLocationRange=null;}return n},d.prototype.withTargetRange=function(t,e){var n;return n=this.document.locationRangeFromRange(t),this.withTargetLocationRange(n,e)},d.prototype.withTargetDOMRange=function(t,e){var n;return n=this.createLocationRangeFromDOMRange(t,{strict:!1}),this.withTargetLocationRange(n,e)},d.prototype.getExpandedRangeInDirection=function(t,e){var n,i,o,r;return i=(null!=e?e:{}).length,o=this.getSelectedRange(),r=o[0],n=o[1],"backward"===t?i?r-=i:r=this.translateUTF16PositionFromOffset(r,-1):i?n+=i:n=this.translateUTF16PositionFromOffset(n,1),s([r,n])},d.prototype.shouldManageMovingCursorInDirection=function(t){var e;return this.editingAttachment?!0:(e=this.getExpandedRangeInDirection(t),null!=this.getAttachmentAtRange(e))},d.prototype.moveCursorInDirection=function(t){var e,n,i,o;return this.editingAttachment?i=this.document.getRangeOfAttachment(this.editingAttachment):(o=this.getSelectedRange(),i=this.getExpandedRangeInDirection(t),n=!c(o,i)),this.setSelectedRange("backward"===t?i[0]:i[1]),n&&(e=this.getAttachmentAtRange(i))?this.editAttachment(e):void 0},d.prototype.expandSelectionInDirection=function(t,e){var n,i;return n=(null!=e?e:{}).length,i=this.getExpandedRangeInDirection(t,{length:n}),this.setSelectedRange(i)},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0},d.prototype.expandSelectionAroundCommonAttribute=function(t){var e,n;return e=this.getPosition(),n=this.document.getRangeOfCommonAttributeAtPosition(t,e),this.setSelectedRange(n)},d.prototype.selectionContainsAttachments=function(){var t;return (null!=(t=this.getSelectedAttachments())?t.length:void 0)>0},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())},d.prototype.positionIsCursorTarget=function(t){var e;return (e=this.document.locationFromPosition(t))?this.locationIsCursorTarget(e):void 0},d.prototype.positionIsBlockBreak=function(t){var e;return null!=(e=this.document.getPieceAtPosition(t))?e.isBlockBreak():void 0},d.prototype.getSelectedDocument=function(){var t;return (t=this.getSelectedRange())?this.document.getDocumentAtRange(t):void 0},d.prototype.getSelectedAttachments=function(){var t;return null!=(t=this.getSelectedDocument())?t.getAttachments():void 0},d.prototype.getAttachments=function(){return this.attachments.slice(0)},d.prototype.refreshAttachments=function(){var t,e,n,i,o,r,s,a,u,c,h,p;for(n=this.document.getAttachments(),a=l(this.attachments,n),t=a.added,h=a.removed,this.attachments=n,i=0,r=h.length;r>i;i++)e=h[i],e.delegate=null,null!=(u=this.delegate)&&"function"==typeof u.compositionDidRemoveAttachment&&u.compositionDidRemoveAttachment(e);for(p=[],o=0,s=t.length;s>o;o++)e=t[o],e.delegate=this,p.push(null!=(c=this.delegate)&&"function"==typeof c.compositionDidAddAttachment?c.compositionDidAddAttachment(e):void 0);return p},d.prototype.attachmentDidChangeAttributes=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidEditAttachment?e.compositionDidEditAttachment(t):void 0},d.prototype.attachmentDidChangePreviewURL=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeAttachmentPreviewURL?e.compositionDidChangeAttachmentPreviewURL(t):void 0},d.prototype.editAttachment=function(t,e){var n;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null!=(n=this.delegate)&&"function"==typeof n.compositionDidStartEditingAttachment?n.compositionDidStartEditingAttachment(this.editingAttachment,e):void 0},d.prototype.stopEditingAttachment=function(){var t;if(this.editingAttachment)return null!=(t=this.delegate)&&"function"==typeof t.compositionDidStopEditingAttachment&&t.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null},d.prototype.updateAttributesForAttachment=function(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))},d.prototype.removeAttributeForAttachment=function(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))},d.prototype.breakFormattedBlock=function(t){var n,i,o,r,s;return i=t.document,n=t.block,r=t.startPosition,s=[r-1,r],n.getBlockBreakPosition()===t.startLocation.offset?(n.breaksOnReturn()&&"\n"===t.nextCharacter?r+=1:i=i.removeTextAtRange(s),s=[r,r]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?s=[r-1,r+1]:(s=[r,r+1],r+=1):t.startLocation.offset-1!==0&&(r+=1),o=new e.Document([n.removeLastAttribute().copyWithoutText()]),this.setDocument(i.insertDocumentAtRange(o,s)),this.setSelection(r)},d.prototype.getPreviousBlock=function(){var t,e;return (e=this.getLocationRange())&&(t=e[0].index,t>0)?this.document.getBlockAtIndex(t-1):void 0},d.prototype.getBlock=function(){var t;return (t=this.getLocationRange())?this.document.getBlockAtIndex(t[0].index):void 0},d.prototype.getAttachmentAtRange=function(t){var n;return n=this.document.getDocumentAtRange(t),n.toString()===e.OBJECT_REPLACEMENT_CHARACTER+"\n"?n.getAttachments()[0]:void 0},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.compositionDidChangeCurrentAttributes?t.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0},d.prototype.notifyDelegateOfInsertionAtRange=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionDidPerformInsertionAtRange?e.compositionDidPerformInsertionAtRange(t):void 0},d.prototype.translateUTF16PositionFromOffset=function(t,e){var n,i;return i=this.document.toUTF16String(),n=i.offsetFromUCS2Offset(t),i.offsetToUCS2Offset(n+e)},d}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.UndoManager=function(e){function n(t){this.composition=t,this.undoEntries=[],this.redoEntries=[];}var i;return t(n,e),n.prototype.recordUndoEntry=function(t,e){var n,o,r,s,a;return s=null!=e?e:{},o=s.context,n=s.consolidatable,r=this.undoEntries.slice(-1)[0],n&&i(r,t,o)?void 0:(a=this.createEntry({description:t,context:o}),this.undoEntries.push(a),this.redoEntries=[])},n.prototype.undo=function(){var t,e;return (e=this.undoEntries.pop())?(t=this.createEntry(e),this.redoEntries.push(t),this.composition.loadSnapshot(e.snapshot)):void 0},n.prototype.redo=function(){var t,e;return (t=this.redoEntries.pop())?(e=this.createEntry(t),this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)):void 0},n.prototype.canUndo=function(){return this.undoEntries.length>0},n.prototype.canRedo=function(){return this.redoEntries.length>0},n.prototype.createEntry=function(t){var e,n,i;return i=null!=t?t:{},n=i.description,e=i.context,{description:null!=n?n.toString():void 0,context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}},i=function(t,e,n){return (null!=t?t.description:void 0)===(null!=e?e.toString():void 0)&&(null!=t?t.context:void 0)===JSON.stringify(n)},n}(e.BasicObject);}.call(this),function(){var t;e.attachmentGalleryFilter=function(e){var n;return n=new t(e),n.perform(),n.getSnapshot()},t=function(){function t(t){this.document=t.document,this.selectedRange=t.selectedRange;}var e,n,i;return e="attachmentGallery",n="presentation",i="gallery",t.prototype.perform=function(){return this.removeBlockAttribute(),this.applyBlockAttribute()},t.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.selectedRange}},t.prototype.removeBlockAttribute=function(){var t,n,i,o,r;for(o=this.findRangesOfBlocks(),r=[],t=0,n=o.length;n>t;t++)i=o[t],r.push(this.document=this.document.removeAttributeAtRange(e,i));return r},t.prototype.applyBlockAttribute=function(){var t,n,i,o,r,s;for(i=0,r=this.findRangesOfPieces(),s=[],t=0,n=r.length;n>t;t++)o=r[t],o[1]-o[0]>1&&(o[0]+=i,o[1]+=i,"\n"!==this.document.getCharacterAtPosition(o[1])&&(this.document=this.document.insertBlockBreakAtRange(o[1]),o[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),o[1]++,i++),0!==o[0]&&"\n"!==this.document.getCharacterAtPosition(o[0]-1)&&(this.document=this.document.insertBlockBreakAtRange(o[0]),o[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),o[0]++,i++),s.push(this.document=this.document.applyBlockAttributeAtRange(e,!0,o)));return s},t.prototype.findRangesOfBlocks=function(){return this.document.findRangesForBlockAttribute(e)},t.prototype.findRangesOfPieces=function(){return this.document.findRangesForTextAttribute(n,{withValue:i})},t.prototype.moveSelectedRangeForward=function(){return this.selectedRange[0]+=1,this.selectedRange[1]+=1},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Editor=function(){function n(n,o,r){this.composition=n,this.selectionManager=o,this.element=r,this.insertFiles=t(this.insertFiles,this),this.undoManager=new e.UndoManager(this.composition),this.filters=i.slice(0);}var i;return i=[e.attachmentGalleryFilter],n.prototype.loadDocument=function(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})},n.prototype.loadHTML=function(t){return null==t&&(t=""),this.loadDocument(e.Document.fromHTML(t,{referenceElement:this.element}))},n.prototype.loadJSON=function(t){var n,i;return n=t.document,i=t.selectedRange,n=e.Document.fromJSON(n),this.loadSnapshot({document:n,selectedRange:i})},n.prototype.loadSnapshot=function(t){return this.undoManager=new e.UndoManager(this.composition),this.composition.loadSnapshot(t)},n.prototype.getDocument=function(){return this.composition.document},n.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument()},n.prototype.getSnapshot=function(){return this.composition.getSnapshot()},n.prototype.toJSON=function(){return this.getSnapshot()},n.prototype.deleteInDirection=function(t){return this.composition.deleteInDirection(t)},n.prototype.insertAttachment=function(t){return this.composition.insertAttachment(t)},n.prototype.insertAttachments=function(t){return this.composition.insertAttachments(t)},n.prototype.insertDocument=function(t){return this.composition.insertDocument(t)},n.prototype.insertFile=function(t){return this.composition.insertFile(t)},n.prototype.insertFiles=function(t){return this.composition.insertFiles(t)},n.prototype.insertHTML=function(t){return this.composition.insertHTML(t)},n.prototype.insertString=function(t){return this.composition.insertString(t)},n.prototype.insertText=function(t){return this.composition.insertText(t)},n.prototype.insertLineBreak=function(){return this.composition.insertLineBreak()},n.prototype.getSelectedRange=function(){return this.composition.getSelectedRange()},n.prototype.getPosition=function(){return this.composition.getPosition()},n.prototype.getClientRectAtPosition=function(t){var e;return e=this.getDocument().locationRangeFromRange([t,t+1]),this.selectionManager.getClientRectAtLocationRange(e)},n.prototype.expandSelectionInDirection=function(t){return this.composition.expandSelectionInDirection(t)},n.prototype.moveCursorInDirection=function(t){return this.composition.moveCursorInDirection(t)},n.prototype.setSelectedRange=function(t){return this.composition.setSelectedRange(t)},n.prototype.activateAttribute=function(t,e){return null==e&&(e=!0),this.composition.setCurrentAttribute(t,e)},n.prototype.attributeIsActive=function(t){return this.composition.hasCurrentAttribute(t)},n.prototype.canActivateAttribute=function(t){return this.composition.canSetCurrentAttribute(t)},n.prototype.deactivateAttribute=function(t){return this.composition.removeCurrentAttribute(t)},n.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel()},n.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel()},n.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0},n.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0},n.prototype.canRedo=function(){return this.undoManager.canRedo()},n.prototype.canUndo=function(){return this.undoManager.canUndo()},n.prototype.recordUndoEntry=function(t,e){var n,i,o;return o=null!=e?e:{},i=o.context,n=o.consolidatable,this.undoManager.recordUndoEntry(t,{context:i,consolidatable:n})},n.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0},n.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0},n}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ManagedAttachment=function(e){function n(t,e){var n;this.attachmentManager=t,this.attachment=e,n=this.attachment,this.id=n.id,this.file=n.file;}return t(n,e),n.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)},n.proxyMethod("attachment.getAttribute"),n.proxyMethod("attachment.hasAttribute"),n.proxyMethod("attachment.setAttribute"),n.proxyMethod("attachment.getAttributes"),n.proxyMethod("attachment.setAttributes"),n.proxyMethod("attachment.isPending"),n.proxyMethod("attachment.isPreviewable"),n.proxyMethod("attachment.getURL"),n.proxyMethod("attachment.getHref"),n.proxyMethod("attachment.getFilename"),n.proxyMethod("attachment.getFilesize"),n.proxyMethod("attachment.getFormattedFilesize"),n.proxyMethod("attachment.getExtension"),n.proxyMethod("attachment.getContentType"),n.proxyMethod("attachment.getFile"),n.proxyMethod("attachment.setFile"),n.proxyMethod("attachment.releaseFile"),n.proxyMethod("attachment.getUploadProgress"),n.proxyMethod("attachment.setUploadProgress"),n}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.AttachmentManager=function(n){function i(t){var e,n,i;for(null==t&&(t=[]),this.managedAttachments={},n=0,i=t.length;i>n;n++)e=t[n],this.manageAttachment(e);}return t(i,n),i.prototype.getAttachments=function(){var t,e,n,i;n=this.managedAttachments,i=[];for(e in n)t=n[e],i.push(t);return i},i.prototype.manageAttachment=function(t){var n,i;return null!=(n=this.managedAttachments)[i=t.id]?n[i]:n[i]=new e.ManagedAttachment(this,t)},i.prototype.attachmentIsManaged=function(t){return t.id in this.managedAttachments},i.prototype.requestRemovalOfAttachment=function(t){var e;return this.attachmentIsManaged(t)&&null!=(e=this.delegate)&&"function"==typeof e.attachmentManagerDidRequestRemovalOfAttachment?e.attachmentManagerDidRequestRemovalOfAttachment(t):void 0},i.prototype.unmanageAttachment=function(t){var e;return e=this.managedAttachments[t.id],delete this.managedAttachments[t.id],e},i}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h;t=e.elementContainsNode,n=e.findChildIndexOfNode,r=e.nodeIsBlockStart,s=e.nodeIsBlockStartComment,o=e.nodeIsBlockContainer,a=e.nodeIsCursorTarget,u=e.nodeIsEmptyTextNode,c=e.nodeIsTextNode,i=e.nodeIsAttachmentElement,l=e.tagName,h=e.walkTree,e.LocationMapper=function(){function e(t){this.element=t;}var p,d,f,g;return e.prototype.findLocationFromContainerAndOffset=function(e,i,o){var s,u,l,p,g,m,v;for(m=(null!=o?o:{strict:!0}).strict,u=0,l=!1,p={index:0,offset:0},(s=this.findAttachmentElementParentForNode(e))&&(e=s.parentNode,i=n(s)),v=h(this.element,{usingFilter:f});v.nextNode();){if(g=v.currentNode,g===e&&c(e)){a(g)||(p.offset+=i);
	break}if(g.parentNode===e){if(u++===i)break}else if(!t(e,g)&&u>0)break;r(g,{strict:m})?(l&&p.index++,p.offset=0,l=!0):p.offset+=d(g);}return p},e.prototype.findContainerAndOffsetFromLocation=function(t){var e,i,s,u,l;if(0===t.index&&0===t.offset){for(e=this.element,u=0;e.firstChild;)if(e=e.firstChild,o(e)){u=1;break}return [e,u]}if(l=this.findNodeAndOffsetFromLocation(t),i=l[0],s=l[1],i){if(c(i))0===d(i)?(e=i.parentNode.parentNode,u=n(i.parentNode),a(i,{name:"right"})&&u++):(e=i,u=t.offset-s);else {if(e=i.parentNode,!r(i.previousSibling)&&!o(e))for(;i===e.lastChild&&(i=e,e=e.parentNode,!o(e)););u=n(i),0!==t.offset&&u++;}return [e,u]}},e.prototype.findNodeAndOffsetFromLocation=function(t){var e,n,i,o,r,s,u,l;for(u=0,l=this.getSignificantNodesForIndex(t.index),n=0,i=l.length;i>n;n++){if(e=l[n],o=d(e),t.offset<=u+o)if(c(e)){if(r=e,s=u,t.offset===s&&a(r))break}else r||(r=e,s=u);if(u+=o,u>t.offset)break}return [r,s]},e.prototype.findAttachmentElementParentForNode=function(t){for(;t&&t!==this.element;){if(i(t))return t;t=t.parentNode;}},e.prototype.getSignificantNodesForIndex=function(t){var e,n,i,o,r;for(i=[],r=h(this.element,{usingFilter:p}),o=!1;r.nextNode();)if(n=r.currentNode,s(n)){if("undefined"!=typeof e&&null!==e?e++:e=0,e===t)o=!0;else if(o)break}else o&&i.push(n);return i},d=function(t){var e;return t.nodeType===Node.TEXT_NODE?a(t)?0:(e=t.textContent,e.length):"br"===l(t)||i(t)?1:0},p=function(t){return g(t)===NodeFilter.FILTER_ACCEPT?f(t):NodeFilter.FILTER_REJECT},g=function(t){return u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f=function(t){return i(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},e}();}.call(this),function(){var t,n,i=[].slice;t=e.getDOMRange,n=e.setDOMRange,e.PointMapper=function(){function e(){}return e.prototype.createDOMRangeFromPoint=function(e){var i,o,r,s,a,u,c,l;if(c=e.x,l=e.y,document.caretPositionFromPoint)return a=document.caretPositionFromPoint(c,l),r=a.offsetNode,o=a.offset,i=document.createRange(),i.setStart(r,o),i;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c,l);if(document.body.createTextRange){s=t();try{u=document.body.createTextRange(),u.moveToPoint(c,l),u.select();}catch(h){}return i=t(),n(s),i}},e.prototype.getClientRectsForDOMRange=function(t){var e,n,o;return n=i.call(t.getClientRects()),o=n[0],e=n[n.length-1],[o,e]},e}();}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty,r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.getDOMRange,e.SelectionChangeObserver=function(e){function o(){this.run=n(this.run,this),this.update=n(this.update,this),this.selectionManagers=[];}var s;return i(o,e),o.prototype.start=function(){return this.started?void 0:(this.started=!0,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,!0):this.run())},o.prototype.stop=function(){return this.started?(this.started=!1,document.removeEventListener("selectionchange",this.update,!0)):void 0},o.prototype.registerSelectionManager=function(t){return r.call(this.selectionManagers,t)<0?(this.selectionManagers.push(t),this.start()):void 0},o.prototype.unregisterSelectionManager=function(t){var e;return this.selectionManagers=function(){var n,i,o,r;for(o=this.selectionManagers,r=[],n=0,i=o.length;i>n;n++)e=o[n],e!==t&&r.push(e);return r}.call(this),0===this.selectionManagers.length?this.stop():void 0},o.prototype.notifySelectionManagersOfSelectionChange=function(){var t,e,n,i,o;for(n=this.selectionManagers,i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(o.selectionDidChange());return i},o.prototype.update=function(){var e;return e=t(),s(e,this.domRange)?void 0:(this.domRange=e,this.notifySelectionManagersOfSelectionChange())},o.prototype.reset=function(){return this.domRange=null,this.update()},o.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0},s=function(t,e){return (null!=t?t.startContainer:void 0)===(null!=e?e.startContainer:void 0)&&(null!=t?t.startOffset:void 0)===(null!=e?e.startOffset:void 0)&&(null!=t?t.endContainer:void 0)===(null!=e?e.endContainer:void 0)&&(null!=t?t.endOffset:void 0)===(null!=e?e.endOffset:void 0)},o}(e.BasicObject),null==e.selectionChangeObserver&&(e.selectionChangeObserver=new e.SelectionChangeObserver);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty;i=e.getDOMSelection,n=e.getDOMRange,l=e.setDOMRange,t=e.elementContainsNode,s=e.nodeIsCursorTarget,r=e.innerElementIsActive,o=e.handleEvent,a=e.normalizeRange,u=e.rangeIsCollapsed,c=e.rangesAreEqual,e.SelectionManager=function(d){function f(t){this.element=t,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e.LocationMapper(this.element),this.pointMapper=new e.PointMapper,this.lockCount=0,o("mousedown",{onElement:this.element,withCallback:this.didMouseDown});}return p(f,d),f.prototype.getLocationRange=function(t){var i;return null==t&&(t={}),t.strict===!1?this.createLocationRangeFromDOMRange(n(),{strict:!1}):t.ignoreLock?this.currentLocationRange:null!=(i=this.lockedLocationRange)?i:this.currentLocationRange},f.prototype.setLocationRange=function(t){var e;if(!this.lockedLocationRange)return t=a(t),(e=this.createDOMRangeFromLocationRange(t))?(l(e),this.updateCurrentLocationRange(t)):void 0},f.prototype.setLocationRangeFromPointRange=function(t){var e,n;return t=a(t),n=this.getLocationAtPoint(t[0]),e=this.getLocationAtPoint(t[1]),this.setLocationRange([n,e])},f.prototype.getClientRectAtLocationRange=function(t){var e;return (e=this.createDOMRangeFromLocationRange(t))?this.getClientRectsForDOMRange(e)[1]:void 0},f.prototype.locationIsCursorTarget=function(t){var e,i;return i=this.findNodeAndOffsetFromLocation(t),e=i[0],i[1],s(e)},f.prototype.lock=function(){return 0===this.lockCount++?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0},f.prototype.unlock=function(){var t;return 0===--this.lockCount&&(t=this.lockedLocationRange,this.lockedLocationRange=null,null!=t)?this.setLocationRange(t):void 0},f.prototype.clearSelection=function(){var t;return null!=(t=i())?t.removeAllRanges():void 0},f.prototype.selectionIsCollapsed=function(){var t;return (null!=(t=n())?t.collapsed:void 0)===!0},f.prototype.selectionIsExpanded=function(){return !this.selectionIsCollapsed()},f.prototype.createLocationRangeFromDOMRange=function(t,e){var n,i;if(null!=t&&this.domRangeWithinElement(t)&&(i=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e)))return t.collapsed||(n=this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e)),a([i,n])},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily()},f.prototype.pauseTemporarily=function(){var e,n,i,r;return this.paused=!0,n=function(e){return function(){var n,o,s;for(e.paused=!1,clearTimeout(r),o=0,s=i.length;s>o;o++)n=i[o],n.destroy();return t(document,e.element)?e.selectionDidChange():void 0}}(this),r=setTimeout(n,200),i=function(){var t,i,r,s;for(r=["mousemove","keydown"],s=[],t=0,i=r.length;i>t;t++)e=r[t],s.push(o(e,{onElement:document,withCallback:n}));return s}()},f.prototype.selectionDidChange=function(){return this.paused||r(this.element)?void 0:this.updateCurrentLocationRange()},f.prototype.updateCurrentLocationRange=function(t){var e;return (null!=t?t:t=this.createLocationRangeFromDOMRange(n()))&&!c(t,this.currentLocationRange)?(this.currentLocationRange=t,null!=(e=this.delegate)&&"function"==typeof e.locationRangeDidChange?e.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0},f.prototype.createDOMRangeFromLocationRange=function(t){var e,n,i,o;return i=this.findContainerAndOffsetFromLocation(t[0]),n=u(t)?i:null!=(o=this.findContainerAndOffsetFromLocation(t[1]))?o:i,null!=i&&null!=n?(e=document.createRange(),e.setStart.apply(e,i),e.setEnd.apply(e,n),e):void 0},f.prototype.getLocationAtPoint=function(t){var e,n;return (e=this.createDOMRangeFromPoint(t))&&null!=(n=this.createLocationRangeFromDOMRange(e))?n[0]:void 0},f.prototype.domRangeWithinElement=function(e){return e.collapsed?t(this.element,e.startContainer):t(this.element,e.startContainer)&&t(this.element,e.endContainer)},f}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice;i=e.rangeIsCollapsed,o=e.rangesAreEqual,n=e.objectsAreEqual,t=e.getBlockConfig,e.EditorController=function(s){function u(t){var n,i;this.editorElement=t.editorElement,n=t.document,i=t.html,this.selectionManager=new e.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e.Composition,this.composition.delegate=this,this.attachmentManager=new e.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new(e["Level"+e.config.input.getLevel()+"InputController"])(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e.Editor(this.composition,this.selectionManager,this.editorElement),null!=n?this.editor.loadDocument(n):this.editor.loadHTML(i);}var c;return r(u,s),u.prototype.registerSelectionManager=function(){return e.selectionChangeObserver.registerSelectionManager(this.selectionManager)},u.prototype.unregisterSelectionManager=function(){return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager)},u.prototype.render=function(){return this.compositionController.render()},u.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML)},u.prototype.compositionDidChangeDocument=function(){return this.notifyEditorElement("document-change"),this.handlingInput?void 0:this.render()},u.prototype.compositionDidChangeCurrentAttributes=function(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})},u.prototype.compositionDidPerformInsertionAtRange=function(t){return this.pasting?this.pastedRange=t:void 0},u.prototype.compositionShouldAcceptFile=function(t){return this.notifyEditorElement("file-accept",{file:t})},u.prototype.compositionDidAddAttachment=function(t){var e;return e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-add",{attachment:e})},u.prototype.compositionDidEditAttachment=function(t){var e;return this.compositionController.rerenderViewForObject(t),e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-edit",{attachment:e}),this.notifyEditorElement("change")},u.prototype.compositionDidChangeAttachmentPreviewURL=function(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")},u.prototype.compositionDidRemoveAttachment=function(t){var e;return e=this.attachmentManager.unmanageAttachment(t),this.notifyEditorElement("attachment-remove",{attachment:e})},u.prototype.compositionDidStartEditingAttachment=function(t,e){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,e),this.selectionManager.setLocationRange(this.attachmentLocationRange)},u.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null},u.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t){return !this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0},u.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=!0},u.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1},u.prototype.getSelectionManager=function(){return this.selectionManager},u.proxyMethod("getSelectionManager().setLocationRange"),u.proxyMethod("getSelectionManager().getLocationRange"),u.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()},u.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")},u.prototype.compositionControllerDidRender=function(){return null!=this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision},u.prototype.compositionControllerDidFocus=function(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")},u.prototype.compositionControllerDidBlur=function(){return this.notifyEditorElement("blur")},u.prototype.compositionControllerDidSelectAttachment=function(t,e){return this.toolbarController.hideDialog(),this.composition.editAttachment(t,e)},u.prototype.compositionControllerDidRequestDeselectingAttachment=function(t){var e,n;return e=null!=(n=this.attachmentLocationRange)?n:this.composition.document.getLocationRangeOfAttachment(t),this.selectionManager.setLocationRange(e[1])},u.prototype.compositionControllerWillUpdateAttachment=function(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})},u.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=!0,this.requestedRender=!1},u.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=!0},u.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=!1,this.requestedRender?(this.requestedRender=!1,this.render()):void 0},u.prototype.inputControllerDidAllowUnhandledInput=function(){return this.notifyEditorElement("change")},u.prototype.inputControllerDidRequestReparse=function(){return this.reparse()},u.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry()},u.prototype.inputControllerWillPerformFormatting=function(t){return this.recordFormattingUndoEntry(t)},u.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut")},u.prototype.inputControllerWillPaste=function(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})},u.prototype.inputControllerDidPaste=function(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})},u.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move")},u.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files")},u.prototype.inputControllerWillPerformUndo=function(){return this.editor.undo()},u.prototype.inputControllerWillPerformRedo=function(){return this.editor.redo()},u.prototype.inputControllerDidReceiveKeyboardCommand=function(t){return this.toolbarController.applyKeyboardCommand(t)},u.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()},u.prototype.inputControllerDidReceiveDragOverPoint=function(t){return this.selectionManager.setLocationRangeFromPointRange(t)},u.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null},u.prototype.locationRangeDidChange=function(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")},u.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0})},u.prototype.toolbarDidInvokeAction=function(t){return this.invokeAction(t)},u.prototype.toolbarDidToggleAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidUpdateAttribute=function(t,e){return this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,e),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidRemoveAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection()},u.prototype.toolbarDidShowDialog=function(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})},u.prototype.toolbarDidHideDialog=function(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})},u.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render())},u.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()):void 0},u.prototype.actions={undo:{test:function(){return this.editor.canUndo()},perform:function(){return this.editor.undo()}},redo:{test:function(){return this.editor.canRedo()},perform:function(){return this.editor.redo()}},link:{test:function(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:function(){return !0},perform:function(){return e.config.input.pickFiles(this.editor.insertFiles)}}},u.prototype.canInvokeAction=function(t){var e,n;return this.actionIsExternal(t)?!0:!!(null!=(e=this.actions[t])&&null!=(n=e.test)?n.call(this):void 0)},u.prototype.invokeAction=function(t){var e,n;return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t}):null!=(e=this.actions[t])&&null!=(n=e.perform)?n.call(this):void 0},u.prototype.actionIsExternal=function(t){return /^x-./.test(t)},u.prototype.getCurrentActions=function(){var t,e;e={};for(t in this.actions)e[t]=this.canInvokeAction(t);return e},u.prototype.updateCurrentActions=function(){var t;return t=this.getCurrentActions(),n(t,this.currentActions)?void 0:(this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions}))},u.prototype.runEditorFilters=function(){var t,e,n,i,o,r,s,a;for(a=this.composition.getSnapshot(),o=this.editor.filters,n=0,i=o.length;i>n;n++)e=o[n],t=a.document,s=a.selectedRange,a=null!=(r=e.call(this.editor,a))?r:{},null==a.document&&(a.document=t),null==a.selectedRange&&(a.selectedRange=s);return c(a,this.composition.getSnapshot())?void 0:this.composition.loadSnapshot(a)},c=function(t,e){return o(t.selectedRange,e.selectedRange)&&t.document.isEqualTo(e.document)},u.prototype.updateInputElement=function(){var t,n;return t=this.compositionController.getSerializableElement(),n=e.serializeToContentType(t,"text/html"),this.editorElement.setInputElementValue(n)},u.prototype.notifyEditorElement=function(t,e){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement();}return this.editorElement.notify(t,e)},u.prototype.removeAttachment=function(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()},u.prototype.recordFormattingUndoEntry=function(e){var n,o;return n=t(e),o=this.selectionManager.getLocationRange(),n||!i(o)?this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0}):void 0},u.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})},u.prototype.getUndoContext=function(){var t;return t=1<=arguments.length?a.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(a.call(t))},u.prototype.getLocationContext=function(){var t;return t=this.selectionManager.getLocationRange(),i(t)?t[0].index:t},u.prototype.getTimeContext=function(){return e.config.undoInterval>0?Math.floor((new Date).getTime()/e.config.undoInterval):0},u.prototype.isFocused=function(){var t;return this.editorElement===(null!=(t=this.editorElement.ownerDocument)?t.activeElement:void 0)},u.prototype.isFocusedInvisibly=function(){return this.isFocused()&&!this.getLocationRange()},u}(e.Controller);}.call(this),function(){var t,n,i,o,r,s,a,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};n=e.browser,s=e.makeElement,a=e.triggerEvent,o=e.handleEvent,r=e.handleEventOnce,i=e.findClosestElementFromNode,t=e.AttachmentView.attachmentSelector,e.registerElement("trix-editor",function(){var c,l,h,p,d,f,g,m,v;return g=0,l=function(t){return !document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t?t.focus():void 0},m=function(t){return t.hasAttribute("contenteditable")?void 0:(t.setAttribute("contenteditable",""),r("focus",{onElement:t,withCallback:function(){return h(t)}}))},h=function(t){return d(t),v(t)},d=function(t){return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",!1,!1),o("mscontrolselect",{onElement:t,preventDefault:!0})):void 0},v=function(){var t;return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t=e.config.blockAttributes["default"].tagName,"div"===t||"p"===t)?document.execCommand("DefaultParagraphSeparator",!1,t):void 0},c=function(t){return t.hasAttribute("role")?void 0:t.setAttribute("role","textbox")},f=function(t){var e;if(!t.hasAttribute("aria-label")&&!t.hasAttribute("aria-labelledby"))return (e=function(){var e,n,i;return i=function(){var n,i,o,r;for(o=t.labels,r=[],n=0,i=o.length;i>n;n++)e=o[n],e.contains(t)||r.push(e.textContent);return r}(),(n=i.join(" "))?t.setAttribute("aria-label",n):t.removeAttribute("aria-label")})(),o("focus",{onElement:t,withCallback:e})},p=function(){return n.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"}}(),{defaultCSS:"%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t+" figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: "+p.display+" !important;\n  width: "+p.width+" !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",trixId:{get:function(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++g),this.trixId)}},labels:{get:function(){var t,e,n;return e=[],this.id&&this.ownerDocument&&e.push.apply(e,this.ownerDocument.querySelectorAll("label[for='"+this.id+"']")),(t=i(this,{matchingSelector:"label"}))&&((n=t.control)===this||null===n)&&e.push(t),e}},toolbarElement:{get:function(){var t,e,n;return this.hasAttribute("toolbar")?null!=(e=this.ownerDocument)?e.getElementById(this.getAttribute("toolbar")):void 0:this.parentNode?(n="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n),t=s("trix-toolbar",{id:n}),this.parentNode.insertBefore(t,this),t):void 0}},inputElement:{get:function(){var t,e,n;return this.hasAttribute("input")?null!=(n=this.ownerDocument)?n.getElementById(this.getAttribute("input")):void 0:this.parentNode?(e="trix-input-"+this.trixId,this.setAttribute("input",e),t=s("input",{type:"hidden",id:e}),this.parentNode.insertBefore(t,this.nextElementSibling),t):void 0}},editor:{get:function(){var t;return null!=(t=this.editorController)?t.editor:void 0}},name:{get:function(){var t;return null!=(t=this.inputElement)?t.name:void 0}},value:{get:function(){var t;return null!=(t=this.inputElement)?t.value:void 0},set:function(t){var e;return this.defaultValue=t,null!=(e=this.editor)?e.loadHTML(this.defaultValue):void 0}},notify:function(t,e){return this.editorController?a("trix-"+t,{onElement:this,attributes:e}):void 0},setInputElementValue:function(t){var e;return null!=(e=this.inputElement)?e.value=t:void 0},initialize:function(){return this.hasAttribute("data-trix-internal")?void 0:(m(this),c(this),f(this))},connect:function(){return this.hasAttribute("data-trix-internal")?void 0:(this.editorController||(a("trix-before-initialize",{onElement:this}),this.editorController=new e.EditorController({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(function(t){return function(){return a("trix-initialize",{onElement:t})}}(this))),this.editorController.registerSelectionManager(),this.registerResetListener(),this.registerClickListener(),l(this))},disconnect:function(){var t;return null!=(t=this.editorController)&&t.unregisterSelectionManager(),this.unregisterResetListener(),this.unregisterClickListener()},registerResetListener:function(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)},unregisterResetListener:function(){return window.removeEventListener("reset",this.resetListener,!1)},registerClickListener:function(){return this.clickListener=this.clickBubbled.bind(this),window.addEventListener("click",this.clickListener,!1)},unregisterClickListener:function(){return window.removeEventListener("click",this.clickListener,!1)},resetBubbled:function(t){var e;if(!t.defaultPrevented&&t.target===(null!=(e=this.inputElement)?e.form:void 0))return this.reset()},clickBubbled:function(t){var e;if(!(t.defaultPrevented||this.contains(t.target)||!(e=i(t.target,{matchingSelector:"label"}))||u.call(this.labels,e)<0))return this.focus()},reset:function(){return this.value=this.defaultValue}}}());}.call(this),function(){}.call(this);})).call(this),module.exports?module.exports=e:"function"==typeof undefined;}.call(commonjsGlobal);
} (trix));

var script$1 = {
    name: 'EditorWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

const _hoisted_1 = ["id", "value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes.container)
  }, [
    createElementVNode("input", {
      id: `editor-input-${_ctx.id}`,
      value: _ctx.value,
      type: "hidden"
    }, null, 8 /* PROPS */, _hoisted_1),
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.editorComponent)))
  ], 2 /* CLASS */))
}

script$1.render = render;
script$1.__file = "themes/blank/templates/wrappers/EditorWrapper.vue";

var script = {
    name: 'EditorWrapper',
    render: script$1.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_hideBold: 'vf-editor-hide-bold',
          container_hideItalic: 'vf-editor-hide-italic',
          container_hideStrike: 'vf-editor-hide-strike',
          container_hideLink: 'vf-editor-hide-link',
          container_hideHeading: 'vf-editor-hide-heading',
          container_hideQuote: 'vf-editor-hide-quote',
          container_hideCode: 'vf-editor-hide-code',
          container_hideBulletList: 'vf-editor-hide-bullet-list',
          container_hideNumberList: 'vf-editor-hide-number-list',
          container_hideDecreaseNesting: 'vf-editor-hide-decrease-nesting',
          container_hideIncreaseNesting: 'vf-editor-hide-increase-nesting',
          container_hideAttach: 'vf-editor-hide-attach',
          container_hideUndo: 'vf-editor-hide-undo',
          container_hideRedo: 'vf-editor-hide-redo',
          $container: (classes, { hideTools }) => ([
            classes.container,
          ].concat(hideTools.map(t => classes[`container_hide${t.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join('')}`])))
        }
      }
    }
  };

var css_248z = "@charset \"UTF-8\";\n\ntrix-toolbar {\n  padding: 0.5rem 0.375rem;\n  border-radius: 0.25rem;\n  flex-wrap: wrap;\n}\n\ntrix-toolbar .trix-button-row {\n  display: block;\n  margin-bottom: -0.25rem;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  overflow-x: auto;\n}\n\ntrix-toolbar .trix-button-group {\n  display: inline;\n}\n\ntrix-toolbar .trix-button-group-spacer {\n  display: hidden;\n  flex-grow: 1;\n}\n\ntrix-toolbar .trix-button {\n  position: relative;\n  margin-bottom: 0.25rem;\n  color: var(--vf-bg-icon);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  outline: none;\n  border-radius: 0.25rem;\n  white-space: nowrap;\n  float: left;\n  border: 0;\n  background: none;\n}\n\ntrix-toolbar .trix-button.trix-active {\n  background-color: var(--vf-bg-selected);\n  filter: brightness(0.9);\n}\n\ntrix-toolbar .trix-button:not(.trix-active):hover {\n  background-color: var(--vf-bg-selected);\n}\n\n.is-disabled trix-toolbar .trix-button:not(.trix-active):hover {\n  background: transparent;\n  cursor: default;\n}\n\ntrix-toolbar .trix-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.is-disabled trix-toolbar .trix-button {\n  cursor: default;\n  pointer-events: none;\n}\n\ntrix-toolbar .trix-button--icon {\n  width: 2.5rem;\n  height: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-indent: -9999px;\n}\n\ntrix-toolbar .trix-button--icon::before {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  display: inline-block;\n  content: \"\";\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-icon);\n  top: 0.125rem;\n  bottom: 0.125rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n}\n\ntrix-toolbar .trix-button--icon.trix-active::before {\n  opacity: 1;\n}\n\ntrix-toolbar .trix-button--icon:disabled::before {\n  opacity: 0.4;\n}\n\ntrix-toolbar .trix-button--icon-attach::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-bold::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-italic::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-link::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-strike::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-quote::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-heading-1::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-code::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.375rem;\n  bottom: 0.375rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-bullet-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-number-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-undo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-redo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-decrease-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-bottom: 0;\n}\n\ntrix-toolbar .trix-button--icon-increase-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-dialogs {\n  position: relative;\n}\n\ntrix-toolbar .trix-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 1rem 0.625rem;\n  background-color: var(--vf-bg-input);\n  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);\n  margin-top: 0.375rem;\n  border-radius: 0.25rem;\n  z-index: 2;\n}\n\ntrix-toolbar .trix-input--dialog {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--vf-border-color-input);\n  border-radius: 0.25rem;\n  margin-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n}\n\ntrix-toolbar .trix-input--dialog:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;\n}\n\ntrix-toolbar .trix-input--dialog.validate:invalid {\n  border-color: var(--vf-color-danger);\n}\n\ntrix-toolbar .trix-button--dialog {\n  padding: 0.5rem;\n  border-left-width: 1px;\n  border-color: var(--vf-border-color-input);\n  background-color: transparent;\n  border-radius: 0;\n}\n\ntrix-toolbar .trix-button--dialog:not(.trix-active):hover {\n  background-color: transparent;\n}\n\ntrix-toolbar .trix-button--dialog:first-of-type {\n  border: 0;\n}\n\ntrix-toolbar .trix-dialog--link {\n  max-width: 36rem;\n}\n\ntrix-toolbar .trix-dialog__link-fields {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-input {\n  flex: 1 1 0%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-button-group {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\ntrix-editor {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n  padding-bottom: var(--vf-py-input);\n  border-radius: var(--vf-radius-large);\n  outline: none;\n  min-height: 6rem;\n}\n\ntrix-editor:empty:not(:focus)::before {\n  color: var(--vf-color-placeholder);\n}\n\ntrix-editor [data-trix-mutable]:not(.attachment__caption-editor) {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection,\ntrix-editor [data-trix-cursor-target]::-moz-selection,\ntrix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::selection,\ntrix-editor [data-trix-cursor-target]::selection,\ntrix-editor [data-trix-mutable] ::selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment.attachment--file {\n  background-color: var(--vf-bg-selected);\n}\n\ntrix-editor [data-trix-mutable].attachment img {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\ntrix-editor .attachment {\n  position: relative;\n}\n\ntrix-editor .attachment:hover {\n  cursor: default;\n}\n\ntrix-editor .attachment--preview .attachment__caption:hover {\n  cursor: text;\n}\n\ntrix-editor .attachment__progress {\n  position: absolute;\n  z-index: 1;\n  height: 1.25rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-0.625rem);\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  opacity: 0.2;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\ntrix-editor .attachment__progress[value=\"100\"] {\n  opacity: 0;\n}\n\ntrix-editor .attachment__caption-editor {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n  vertical-align: top;\n  width: 100%;\n  border-width: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-family: inherit;\n}\n\ntrix-editor .attachment__toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n}\n\ntrix-editor .trix-button-group {\n  display: inline-flex;\n}\n\ntrix-editor .trix-button {\n  position: relative;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  margin: 0;\n  background-color: transparent;\n  color: var(--vf-bg-icon);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  white-space: nowrap;\n  border-radius: 0;\n  border-width: 0;\n  outline: 0;\n}\n\ntrix-editor .trix-button:not(:disabled) {\n  cursor: pointer;\n}\n\ntrix-editor .trix-button--remove {\n  display: inline-block;\n  overflow-x: hidden;\n  padding: 0;\n  background-color: var(--vf-bg-input);\n  line-height: 1.75rem;\n  border-color: var(--vf-color-selected);\n  border-radius: 9999px;\n  border-width: 1px;\n  border-style: solid;\n  outline: 0;\n  text-indent: -9999px;\n  width: 24px;\n  height: 24px;\n}\n\ntrix-editor .trix-button--remove:hover {\n  background-color: var(--vf-bg-selected);\n}\n\ntrix-editor .trix-button--remove::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 0.125rem;\n  right: 0.125rem;\n  bottom: 0.125rem;\n  left: 0.125rem;\n  background-color: var(--vf-color-input);\n  opacity: 0.7;\n  background-position: center;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-editor .attachment__metadata-container {\n  position: relative;\n}\n\ntrix-editor .attachment__metadata {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  background-color: #000000;\n  opacity: 0.7;\n  transform: translateX(-50%);\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  border-radius: 0.25rem;\n}\n\ntrix-editor .attachment__metadata .attachment__name {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n  white-space: nowrap;\n  max-width: 100%;\n}\n\ntrix-editor .attachment__metadata .attachment__size {\n  margin-left: 0.25rem;\n  white-space: nowrap;\n}\n\n.trix-content h1,\ntrix-editor h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.trix-content a,\ntrix-editor a {\n  color: var(--vf-primary);\n}\n\n.trix-content ul,\ntrix-editor ul {\n  padding-left: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content [dir=rtl] ul,\ntrix-editor [dir=rtl] ul {\n  padding-right: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content ol,\ntrix-editor ol {\n  padding-left: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content [dir=rtl] ol,\ntrix-editor [dir=rtl] ol {\n  padding-right: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content blockquote,\ntrix-editor blockquote {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n  border-left-style: solid;\n  margin: 0;\n}\n\n.trix-content [dir=rtl] blockquote,\n.trix-content blockquote[dir=rtl],\ntrix-editor [dir=rtl] blockquote,\ntrix-editor blockquote[dir=rtl] {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content pre,\ntrix-editor pre {\n  display: inline-block;\n  overscroll-behavior-x: auto;\n  padding: 0.5rem;\n  background-color: var(--vf-gray-50);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  vertical-align: top;\n  white-space: pre;\n  width: 100%;\n}\n\n.trix-content img,\ntrix-editor img {\n  max-width: 100%;\n  height: auto;\n}\n\n.trix-content .attachment__caption,\ntrix-editor .attachment__caption {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n}\n\n.trix-content .attachment__caption .attachment__name + .attachment__size::before,\ntrix-editor .attachment__caption .attachment__name + .attachment__size::before {\n  content: \" · \";\n}\n\n.trix-content * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.trix-content .attachment {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n\n.trix-content .attachment a {\n  text-decoration: none;\n}\n\n.trix-content .attachment--preview {\n  text-align: center;\n  width: 100%;\n}\n\n.trix-content .attachment--preview .attachment__caption {\n  color: var(--vf-gray-500);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.trix-content .attachment--file {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin: 0.125rem;\n  margin-top: 0;\n  color: var(--vf-gray-700);\n  line-height: 1;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content .attachment-gallery {\n  display: flex;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.trix-content .attachment-gallery .attachment {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  flex-grow: 1;\n  flex-shrink: 0;\n  width: 33.333333%;\n}\n\n.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {\n  width: 50%;\n}\n\n.trix-content .attachment__progress {\n  display: none;\n}\n\n.vf-editor-sm trix-editor {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n  padding-bottom: var(--vf-py-input-sm);\n  border-radius: var(--vf-radius-large-sm);\n  min-height: 5rem;\n}\n\n.vf-editor-sm .trix-content h1,\n.vf-editor-sm trix-editor h1 {\n  font-size: 1.625rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.vf-editor-sm trix-toolbar {\n  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);\n}\n\n.vf-editor-sm trix-toolbar .trix-button--icon {\n  width: 2.25rem;\n}\n\n.vf-editor-lg trix-editor {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n  padding-bottom: var(--vf-py-input-lg);\n  border-radius: var(--vf-radius-large-lg);\n}\n\n.vf-editor-disabled trix-toolbar {\n  pointer-events: none;\n}\n\n.vf-editor-hide-bold .trix-button--icon-bold {\n  display: none;\n}\n\n.vf-editor-hide-italic .trix-button--icon-italic {\n  display: none;\n}\n\n.vf-editor-hide-strike .trix-button--icon-strike {\n  display: none;\n}\n\n.vf-editor-hide-link .trix-button--icon-link {\n  display: none;\n}\n\n.vf-editor-hide-heading .trix-button--icon-heading-1 {\n  display: none;\n}\n\n.vf-editor-hide-quote .trix-button--icon-quote {\n  display: none;\n}\n\n.vf-editor-hide-code .trix-button--icon-code {\n  display: none;\n}\n\n.vf-editor-hide-bullet-list .trix-button--icon-bullet-list {\n  display: none;\n}\n\n.vf-editor-hide-number-list .trix-button--icon-number-list {\n  display: none;\n}\n\n.vf-editor-hide-decrease-nesting .trix-button--icon-decrease-nesting-level {\n  display: none;\n}\n\n.vf-editor-hide-increase-nesting .trix-button--icon-increase-nesting-level {\n  display: none;\n}\n\n.vf-editor-hide-attach .trix-button--icon-attach {\n  display: none;\n}\n\n.vf-editor-hide-undo .trix-button--icon-undo {\n  display: none;\n}\n\n.vf-editor-hide-redo .trix-button--icon-redo {\n  display: none;\n}\n\n.dark .trix-content blockquote,\n.dark trix-editor blockquote {\n  border-color: var(--vf-dark-700);\n}\n\n.dark .trix-content pre,\n.dark trix-editor pre {\n  background-color: var(--vf-dark-900);\n}";
styleInject(css_248z);

script.__file = "themes/vueform/templates/wrappers/EditorWrapper.vue";

function columns (breakpoint, size) {
  switch (breakpoint) {
    case 'default':
      return "vf-col-".concat(size);
    default:
      return "vf-col-".concat(breakpoint, "-").concat(size);
  }
}

var classes = {};

/**
 * =========
 * Templates
 * =========
 */
var base = {
  templates: {
    Vueform: script$21,
    FormErrors: script$1$,
    FormMessages: script$1Z,
    FormLanguages: script$1X,
    FormLanguage: script$1V,
    FormTabs: script$1T,
    FormTab: script$1R,
    FormSteps: script$1P,
    FormStepsControls: script$1N,
    FormStepsControl: script$1L,
    FormStep: script$1J,
    FormElements: script$1H,
    ElementLayout: script$1F,
    ElementLayoutInline: script$1D,
    ElementLoader: script$1B,
    ElementLabelFloating: script$1z,
    ElementLabel: script$1x,
    ElementInfo: script$1v,
    ElementDescription: script$1t,
    ElementError: script$1r,
    ElementMessage: script$1p,
    ElementText: script$1n,
    ElementAddon: script$1l,
    ButtonElement: script$1j,
    CaptchaElement: script$1h,
    CheckboxElement: script$1f,
    CheckboxgroupElement: script$1d,
    CheckboxgroupElement_tabs: script$1c,
    CheckboxgroupElement_blocks: script$1b,
    DateElement: script$19,
    DatesElement: script$17,
    FileElement: script$15,
    GroupElement: script$13,
    HiddenElement: script$11,
    ListElement: script$$,
    LocationElement: script$Z,
    MultifileElement: script$X,
    MultiselectElement: script$U,
    ObjectElement: script$S,
    RadioElement: script$Q,
    RadiogroupElement: script$O,
    RadiogroupElement_tabs: script$N,
    RadiogroupElement_blocks: script$M,
    SelectElement: script$K,
    SliderElement: script$H,
    StaticElement: script$F,
    TagsElement: script$D,
    TextareaElement: script$B,
    TextElement: script$z,
    ToggleElement: script$w,
    EditorElement: script$u,
    TTextareaElement: script$s,
    TTextElement: script$q,
    TEditorElement: script$o,
    CheckboxgroupCheckbox: script$m,
    CheckboxgroupCheckbox_tabs: script$k,
    CheckboxgroupCheckbox_blocks: script$i,
    DragAndDrop: script$g,
    FilePreview: script$e,
    FilePreview_image: script$c,
    FilePreview_gallery: script$a,
    RadiogroupRadio: script$8,
    RadiogroupRadio_tabs: script$6,
    RadiogroupRadio_blocks: script$4,
    DatepickerWrapper: script$2,
    EditorWrapper: script
  },
  classes,
  columns
};

export { script$1j as ButtonElement, script$1h as CaptchaElement, script$1f as CheckboxElement, script$m as CheckboxgroupCheckbox, script$i as CheckboxgroupCheckbox_blocks, script$k as CheckboxgroupCheckbox_tabs, script$1d as CheckboxgroupElement, script$1b as CheckboxgroupElement_blocks, script$1c as CheckboxgroupElement_tabs, script$19 as DateElement, script$2 as DatepickerWrapper, script$17 as DatesElement, script$g as DragAndDrop, script$u as EditorElement, script as EditorWrapper, script$1l as ElementAddon, script$1t as ElementDescription, script$1r as ElementError, script$1v as ElementInfo, script$1x as ElementLabel, script$1z as ElementLabelFloating, script$1F as ElementLayout, script$1D as ElementLayoutInline, script$1B as ElementLoader, script$1p as ElementMessage, script$1n as ElementText, script$15 as FileElement, script$e as FilePreview, script$a as FilePreview_gallery, script$c as FilePreview_image, script$1H as FormElements, script$1$ as FormErrors, script$1V as FormLanguage, script$1X as FormLanguages, script$1Z as FormMessages, script$1J as FormStep, script$1P as FormSteps, script$1L as FormStepsControl, script$1N as FormStepsControls, script$1R as FormTab, script$1T as FormTabs, script$13 as GroupElement, script$11 as HiddenElement, script$$ as ListElement, script$Z as LocationElement, script$X as MultifileElement, script$U as MultiselectElement, script$S as ObjectElement, script$Q as RadioElement, script$O as RadiogroupElement, script$M as RadiogroupElement_blocks, script$N as RadiogroupElement_tabs, script$8 as RadiogroupRadio, script$4 as RadiogroupRadio_blocks, script$6 as RadiogroupRadio_tabs, script$K as SelectElement, script$H as SliderElement, script$F as StaticElement, script$o as TEditorElement, script$q as TTextElement, script$s as TTextareaElement, script$D as TagsElement, script$z as TextElement, script$B as TextareaElement, script$w as ToggleElement, script$21 as Vueform, classes, columns, base as default };
