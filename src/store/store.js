import {createStore,applyMiddleware} from 'redux';
import adminPanelReducer from './adminPanelReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(adminPanelReducer,composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;