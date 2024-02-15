import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, getFilteredMovies } from "../../fetching/sanity";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const movies = await getMovies();
    return movies;
})

export const fetchFilteredMovies = createAsyncThunk('movies/fetchFilteredMovies', async () => {
    const filteredMovies = await getFilteredMovies();
    return filteredMovies;
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: "idle",
        error: null
    },
    reducers: {},
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
        // .addCase(fetchFilteredMovies.pending, state => {
        //     state.status = 'loading';
        // })
        // .addCase(fetchFilteredMovies.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.movies = action.payload;
        // })
        // .addCase(fetchFilteredMovies.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // })
    }
})

export default moviesSlice.reducer;