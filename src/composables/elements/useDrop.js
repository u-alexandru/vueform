import checkFileType from './../../utils/checkFileType'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    accept
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const update = dependencies.update
  const isDisabled = dependencies.isDisabled
  
  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {boolean}
   */
  const canDrop = computed(() => {
    let div = document.createElement('div')

    return ( ( 'draggable' in div )
            || ( 'ondragstart' in div && 'ondrop' in div ) )
            && 'FormData' in window
            && 'FileReader' in window
  })

  // =============== METHODS ==============

  /**
   * 
   * @param {Event} e 
   * @returns {void}
   * @private 
   */
  const handleDrop = (e) => {
    if (isDisabled.value) {
      return
    }

    let file = e.dataTransfer.files[0]

    if (!checkFileType(file, accept.value)) {
      return
    }

    update(file || null)
  }

  return {
    canDrop,
    handleDrop,
  }
}

const multifile = function(props, context, dependencies)
{
  const {
    canDrop
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const add = dependencies.add
  const isDisabled = dependencies.isDisabled
  const isObject = dependencies.isObject
  const storeFileName = dependencies.storeFileName
  const accept = dependencies.accept

  // =============== METHODS ==============

  const handleDrop = (e) => {
    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length == 0 || isDisabled.value) {
      return
    }

    _.each(e.dataTransfer.files, (file) => {
      if (!checkFileType(file, accept.value)) {
        return
      }
      
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file)
    })
  }

  return {
    canDrop,
    handleDrop,
  }
}

export {
  multifile,
}

export default base