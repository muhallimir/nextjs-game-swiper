import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        switchTheme: (state, action) => ({
            ...state,
            theme: action?.payload,
        }),
    },
    extraReducers: () => { },
});

export const {
    switchTheme
} = appSlice.actions;

export default appSlice.reducer;

