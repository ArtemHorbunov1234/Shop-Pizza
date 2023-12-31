import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    const { search, category, sort, currentPage } = params;
    const { data } = await axios.get(
        `https://6509be44f6553137159befd1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`
    );
    return data;
});

const initialState = {
    items: [],
    status: 'loading ',
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPizzas.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        },
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
