import React from 'react';
import ReactDOM from 'react-dom';
import { Room } from './Room';
import { store } from 'redux/Store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Room />
        </Provider>,
        div);
});
