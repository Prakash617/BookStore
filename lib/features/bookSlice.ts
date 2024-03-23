import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";

interface Books {
    id: number;
    name: string;
    price: number;
}

const initialState = {
    books: [] as Books[] | any,
    loading: false,
    error: null as any,
};

export const fetchBooks = createAsyncThunk(
    "books/fetch",
    async () => {
        const response = await fetch('https://api.example.com/books', { method: 'GET' });
        return response
    }
);

export const bookSlice = createAppSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})