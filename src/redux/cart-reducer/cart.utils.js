export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cart => cart.id == cartItemToAdd.id)

    if( existingCartItem ) {
        return cartItems.map(cart =>
            cart.id == cartItemToAdd.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        )
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
} 

export const decreaseItemById = (cartItems, id) => {
    const findItem = cartItems.find(cart => cart.id === id)

    if(findItem.quantity == 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== id    
        )    
    }

    return cartItems.map(cartItem => 
        cartItem.id === id 
        ? {...cartItem, quantity: cartItem.quantity - 1}   
        : cartItem             
    )
} 