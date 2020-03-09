export const setCartItemCounter = (value) => ({
    type: 'CART_ITEM_UP',
    payload: value
})

export const toggleToOpenPopup = () => ({
    type: 'TOGGLE_CART_HIDDEN'
})

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const decreaseItem = (id) => ({
    type: 'DECREASE_ITEM_BY_ID',
    payload: id
})
