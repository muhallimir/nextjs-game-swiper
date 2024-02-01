import data from '@common/mocks/items';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    games: data.games,
};

export const gameSlice = createSlice({
    name: 'gameList',
    initialState,
    reducers: {
        updateGameList: (state, action) => ({
            ...state,
            products: action?.payload,
        }),
    },
    extraReducers: () => { },
});

export const {
    updateGameList
} = gameSlice.actions;

export default gameSlice.reducer;

