import { combineReducers } from 'redux'
import todos from './todos';
import drawer from './drawer';
import basket from './basket';
import user from './user';
import handlePopup from './handlePopup';
import homeProduct from './homeProduct';

export default combineReducers({
    todos,
    drawer,
    basket,
    user,
    handlePopup,
    homeProduct
});