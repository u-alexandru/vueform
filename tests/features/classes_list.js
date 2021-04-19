import { createForm, destroy } from 'test-helpers'
import { classes as baseClasses } from './classes'

export { mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  baseClasses(elementType, elementName, options)

  it('should add disabled class to list when disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.list).not.toContain(el.classes.disabled)

    el.disable()

    expect(el.classes.list).toContain(el.classes.disabled)
    
  // destroy(form) // teardown
  })

  it('should add sorting class to list when sorting', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.list).not.toContain(el.classes.sorting)
    
    el.sorting = true

    expect(el.classes.list).toContain(el.classes.sorting)
    
  // destroy(form) // teardown
  })
}