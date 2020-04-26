import { Product } from "../../Model/Product"


export const addTodo = (todo: any) => ({
    type: 'CHANGE_CONTENT',
    text: todo
})

export const openDrawer = (visible: any) => ({
    type: 'OPEN_DRAWER',
    visible: visible
})

export const addToBasket = (product: Product) => ({
    type: 'ADD_TO_BASKET',
    product: product
})