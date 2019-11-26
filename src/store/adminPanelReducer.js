import types from './types'

const initialState = {
    item: []
}

const adminPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return {
                ...state, item: [...state.item, action.item]
            };
        case types.DELETE_ITEM:
            let newItems = state.item.filter(it => {
                return action.id !== it.id
            })
            return {
                ...state,
                item:newItems
            }
        default:
            return state;
    }
}

export default adminPanelReducer;