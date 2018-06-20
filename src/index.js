import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/sass/index.scss';
import App from './App';
import rootReducer from './Reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

export const history = createHistory()
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <App/>
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('app')
// );

ReactDOM.render(

            <App/>,

    document.getElementById('app')
);

module.hot.accept();
