import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../../index'
import installer from './../../installer'
import bootstrap from './../../themes/bootstrap'
import config from './../../config'

const themes = {
  bootstrap,
}

const installLaraform = function(options = {}) {
  const theme = options.theme || 'bootstrap'
  
  const LaraformInstaller = installer(Object.assign({}, config, {
    theme: theme
  }, options.config || {}))

  LaraformInstaller.theme(theme, themes[theme])

  if (options.elements !== undefined) {
    LaraformInstaller.elements(options.elements)
  }

  const LocalVue = createLocalVue()

  LocalVue.use(LaraformInstaller)
  
  return LocalVue
}

const createForm = function(data, options = {}) {
  let LocalVue = installLaraform(options)

  let form = LocalVue.extend({
    mixins: [Laraform],
    data() {
      return data
    }
  })

  return mount(form, {
    LocalVue,
    propsData: options.propsData || {}
  })
}


export {
  installLaraform,
  createForm,
}