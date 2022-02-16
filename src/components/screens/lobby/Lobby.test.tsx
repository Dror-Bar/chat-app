import React from 'react';
import ReactDOM from 'react-dom';
import { Lobby } from './Lobby';
import { store } from 'redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <Lobby />
            </Provider>
        </BrowserRouter>,
        div);
});
