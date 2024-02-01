import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import gameReducer from './game.slice';
import appReducer from './app.slice';

export const makeStore = ({ ...props }) =>
    configureStore({
        reducer: {
            app: appReducer,
            game: gameReducer,
        },
        devTools: true,
        ...props,
    });

export const wrapper = createWrapper(makeStore);
