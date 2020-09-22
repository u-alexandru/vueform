import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import HasAddons from './../../mixins/HasAddons'
import $model from './../../directives/$model'

export default {
  name: 'LocationElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, HasAddons, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "displayKey": { "type": string", "description": "The name of object key which contains the address that should be displayed to the user in the input field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: 'formatted_address'." },
     *  "provider": { "type": string", "description": "The Places API provider to use: 'google|algolia'. Default: 'google'." },
     *  "formatValue": { "type": function", "description": "A function that formats value before displaying as `value`. Should return the same data type as the element's original. Params:<br> **value**: the original value of the element<br> **el$**: the element component" },
     *  "formatData": { "type": function", "description": "A function that formats data before gets merged with form `data`. Should return an `object` with one key which is the name of the element and which has the actual value. Params:<br>**name**: the name of the element<br>**value**: the original value of the element<br>**el$**: the element component" },
     *  "formatLoad": { "type": function", "description": "A function that formats data before [.load](#method-load) to the element. Should return the same data type as the element's original. Params:<br>**name**: the name of the element<br>**value**: the original value of the element<br>**el$**: the element component" },
     *  "options": { "type": object", "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      /**
       * The location service that's initalized once the component is mounted.
       * 
       * @type {class}
       * @default null
       */
      locationService: null,

      /**
       * The raw location object of location provider (Google/Algolia).
       * 
       * @type {class}
       * @default null
       */
      location: {},
    }
  },
  watch: {
    provider() {
      this.locationService.destroy()
      this.initLocationService()
    },
    options: {
      handler() {
        this.locationService.init(this.options)
      },
      deep: true
    }
  },
  computed: {

    /**
     * Helper property used for tracking the field's value.
     * 
     * @type {any}
     * @ignore
     */
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.value = this.formatValue(value, this)
      }
    },

    /**
     * An object containing the element `name` as a key and its `value` as value.
     * 
     * @type {object}
     */
    data() {
      return this.formatData(this.name, this.value, this)
    },

    /**
     * The name of object key which contains the address that should be displayed to the user in the input
     * field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using
     * [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: "formatted_address".
     * 
     * @type {string}
     */
    displayKey: {
      get() {
        return this.schema.displayKey !== undefined ? this.schema.displayKey : 'formatted_address'
      },
      set(value) {
        this.$set(this.schema, 'displayKey', value)
      }
    },

    /**
     * The Places API provider to use.
     * 
     * @type {string}
     */
    provider: {
      get() {
        if (this.schema.provider === undefined) {
          return 'google'
        }

        if (['google', 'algolia'].indexOf(this.schema.provider) === -1) {
          throw new Error('Location provider can be `google` or `algolia`')
        }

        return this.schema.provider
      },
      set(value) {
        this.$set(this.schema, 'provider', value)
      }
    },

    /**
     * A function that formats value before displaying as `value`.
     * 
     * @type {function}
     */
    formatValue: {
      get() {
        return this.schema.formatValue !== undefined ? this.schema.formatValue : this.defaultFormatValue
      },
      set(value) {
        this.$set(this.schema, 'formatValue', value)
      }
    },

    /**
     * A function that formats data before gets merged with form `data`.
     * 
     * @type {function}
     */
    formatData: {
      get() {
        return this.schema.formatData !== undefined ? this.schema.formatData : this.defaultFormatData
      },
      set(value) {
        this.$set(this.schema, 'formatData', value)
      }
    },

    /**
     * A function that formats data before [.load](#method-load) to the element.
     * 
     * @type {function}
     */
    formatLoad: {
      get() {
        return this.schema.formatLoad !== undefined ? this.schema.formatLoad : this.defaultFormatLoad
      },
      set(value) {
        this.$set(this.schema, 'formatLoad', value)
      }
    },

    /**
    * The 'id' attribute of the field.
    * 
    * @type {string} 
    * @default null
    */
    id: {
      get() {
        return this.schema.id !== undefined ? this.schema.id : this.path
      },
      set(value) {
        this.$set(this.schema, 'id', value)
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string}
    * @default null
    */
    placeholder: {
      get() {
        return this.schema.placeholder || null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },

    /**
    * The floating label of the element.
    * 
    * @type {string} 
    * @default null
    */
    floating: {
      get() {
        return this.schema.floating || null
      },
      set(value) {
        this.$set(this.schema, 'floating', value)
      }
    },

    /**
    * Whether the field is *readonly*.
    * 
    * @type {boolean} 
    * @default false
    */
    readonly: {
      get() {
        return this.schema.readonly !== undefined ? this.schema.readonly : false
      },
      set(value) {
        this.$set(this.schema, 'readonly', value)
      }
    },

    /**
    * Default options for flatpickr.
    * 
    * @type {object} 
    * @default {}
    * @ignore
    */
    defaultOptions() {
      let providers = {
        google: {
          fields: ['geometry', 'formatted_address', 'address_components'],
        },
        algolia: {
          type: 'address',
          appId: this.$laraform.config.services.algolia.app_id,
          apiKey: this.$laraform.config.services.algolia.api_key,
        }
      }

      return providers[this.provider]
    },

    /**
    * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
    * 
    * @type {object} 
    * @default {}
    */
    options: {
      get() {
        return Object.assign({}, this.defaultOptions, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },
  },
  methods: {
    /**
     * Loads data for element or clears the element if the element's key is not found in the `data` object.  Sets `dirty` to `false`.
     *
     * @public
     * @param {object} data an object containing data for the element using its **name as key**
     * @returns {void}
     */
    load(data) {
      if (this.available && data && data[this.name] !== undefined) {
        this.update(this.formatLoad(data[this.name], this))

        this.$nextTick(() => {
          this.clean()
        })
        return
      }

      this.clear()
      this.resetValidators()
        
      this.$nextTick(() => {
        this.clean()
      })
    },

    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @param {boolean} validate whether the element should be validated (default: `false`)
     * @returns {void}
     */
    update(value, triggerChange, validate) {
      if (triggerChange === undefined) {
        let validate = false
      }

      if (validate === undefined) {
        let validate = false
      }

      this.$set(this, 'value', value)

      this.$refs.input.value = value[this.displayKey]

      if (triggerChange) {
        this.handleChange()
      }

      if (validate) {
        this.validate()
      }
    },

    /**
     * The default logic to be used to `formatValue`.
     *
     * @public
     * @param {any} value the original value of the element
     * @param {component} el$ the element component
     * @returns {any}
     */
    defaultFormatValue(value, el$) {
      return value
    },

    /**
     * The default logic to be used to `formatData`.
     *
     * @public
     * @param {string} name the name of the element
     * @param {any} value the original value of the element
     * @param {component} el$ the element component
     * @returns {object}
     */
    defaultFormatData(name, value, el$) {
      return {
        [name]: value
      }
    },

    /**
     * The default logic to be used to `formatLoad`.
     *
     * @public
     * @param {data} data loaded data for the element
     * @param {component} el$ the element component
     * @returns {any}
     */
    defaultFormatLoad(data, el$) {
      return data
    },

    /**
     * Initalizes location service.
     *
     * @public
     * @returns {void}
     */
    initLocationService() {
      this.locationService = new this.$laraform.services.location[this.provider](this)
      this.locationService.init(this.options)
    }
  },
  mounted() {
    this.initLocationService()
  }
}