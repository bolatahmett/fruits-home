const basket = (state = [], action: { type: any; productCode: any, quantity: any }) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return [
                ...state,
                {
                    productCode: action.productCode,
                    quantity: action.quantity
                }
            ];
        default:
            return state
    }
}

export default basket;