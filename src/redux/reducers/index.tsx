import { combineReducers } from 'redux'
import todos from './todos';
import drawer from './drawer';
import basket from './basket';
import user from './user';
import handlePopup from './handlePopup';

export default combineReducers({
    todos,
    drawer,
    basket,
    user,
    handlePopup
});