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
