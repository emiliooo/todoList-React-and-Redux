import types from './types'

const add = item => ({
  type: types.ADD_ITEM, item
})

const remove = item => ({
  type: types.DELETE_ITEM, item
})

export default {
  add,
  remove
}
