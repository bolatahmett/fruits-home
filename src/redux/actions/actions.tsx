

export const addTodo = (todo: any) => ({
    type: 'CHANGE_CONTENT',
    text: todo
})

export const openDrawer = (visible: any) => ({
    type: 'OPEN_DRAWER',
    visible: visible
})

export const addToBasket = (product: any) => ({
    type: 'ADD_TO_BASKET',
    productCode: product.productCode,
    quantity: product.quantity
})