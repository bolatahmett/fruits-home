import { Product } from "../../model/Product";
import { AnyAction } from "redux";
//{ type: any; product: Product }
const basket = (state = [] as Product[], action: AnyAction) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            debugger;
            const existsProduct: Product[] = state.filter((item: Product) => {
                return item.ProductCode === action.product.ProductCode
            });

            if (existsProduct.length > 0) {
                const index = state.indexOf(existsProduct[0] as never, 0);
                if (index > -1) {
                    state.splice(index, 1);
                }
                action.product.Quantity = action.product.Quantity + existsProduct[0].Quantity;
            }

            state.push(action.product);

            return [
                ...state
            ];
        default:
            return state
    }
}

export default basket;