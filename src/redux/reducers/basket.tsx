import { Product } from "../../Model/Product";

const basket = (state = [], action: { type: any; product: Product }) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            debugger;


            return [
                ...state,
                action.product
            ];
        default:
            return state
    }
}

export default basket;