import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActors } from '../../fetching/sanity';

export const fetchActors = createAsyncThunk('actors/fetchActors', async () => {
    const actors = await getActors();
    return actors;
});

const actorsSlice = createSlice({
    name: 'actors',
    initialState: {
        actors: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActors.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.actors = action.payload;
            })
            .addCase(fetchActors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default actorsSlice.reducer;
