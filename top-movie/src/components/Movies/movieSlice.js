import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, getFilteredMovies, getCategories } from "../../fetching/sanity";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const movies = await getMovies();
    return movies;
});

export const fetchFilteredMovies = createAsyncThunk('movies/fetchFilteredMovies', async (category) => {
    const filteredMovies = await getFilteredMovies(category);
    return filteredMovies;
});

export const fetchCategories = createAsyncThunk('movies/fetchCategories', async () => {
    const categories = await getCategories();
    return categories;
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        categories: [],
        status: "idle",
        error: null,
        selectedCategory: 'none',
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchFilteredMovies.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchFilteredMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchFilteredMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCategories.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setSelectedCategory } = moviesSlice.actions;

export default moviesSlice.reducer;
