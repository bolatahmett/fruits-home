import { Product } from "../../model/Product";
import { AnyAction } from "redux";
//{ type: any; product: Product }
const basket = (state = [] as Product[], action: AnyAction) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            const existsProduct: Product[] = state.filter((item: Product) => {
                return item.ProductCode === action.product.ProductCode
            });

            if (existsProduct.length > 0) {
                const index = state.indexOf(existsProduct[0] as never, 0);
                const quantity = Number(action.product.Quantity) + Number(existsProduct[0].Quantity);
                state[index].Quantity = quantity < 0 ? 0 : quantity;
            } else {
                state.push(action.product);
            }

            return [...state];
        default:
            return state
    }
}

export default basket;