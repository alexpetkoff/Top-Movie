import { configureStore } from '@reduxjs/toolkit';

import actorsReducer from './components/Actors/actorsSlice'

const store = configureStore({
    reducer: {
        actors: actorsReducer
    }
});

export default store;