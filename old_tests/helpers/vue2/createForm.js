import { mount } from '@vue/test-utils'

// Core
import { Laraform, useLaraform } from './../../../src/index'

// Assets
import en from './../../../src/locales/en'

// Services
import condition from './../../../src/services/condition'
import validation from './../../../src/services/validation'
import messageBag from './../../../src/services/messageBag'
import autosize from './../../../src/services/autosize'
import location from './../../../src/services/location'

// 3rd party
import axios from 'axios'

// Helpers
import { installLaraform } from './index'

export default function createForm (data, options = {}, render = null) {
  let { LocalVue, config, store } = installLaraform(options)

  let form = LocalVue.extend(Object.assign({}, {
    mixins: [Laraform],
    setup(props, context) {
      const laraform = useLaraform(props, context)

      return {
        ...laraform
      }
    },
    data() {
      return data
    }
  }, render ? {
    render,
  } : {}))

  let $laraform = Object.assign({}, config, {
    extensions: config.extensions,
    services: {
      condition,
      validation,
      axios,
      messageBag,
      autosize,
      location,
    },
    locales: options.locales || {
      en: en
    }
  })

  let mountOptions = {
    localVue: LocalVue,
    store,
    propsData: options.propsData || {},
    mocks: {
      $laraform: $laraform,
      // $i18n: options.vueI18n ? new class VueI18n { get locale() { return options.vueI18nLocale || 'en' } } : null,
      // $t: options.vueI18n ? (str) => { return str + ' vue-i18n' } : null,
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}