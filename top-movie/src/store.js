import { configureStore } from '@reduxjs/toolkit';

import actorsReducer from './components/Actors/actorsSlice';
import moviesReducer from './components/Movies/movieSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        actors: actorsReducer
    }
});

export default store;