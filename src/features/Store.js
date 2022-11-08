import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/Cartslice';
const store = configureStore({
    reducer:{
        Cart:CartReducer,      
    },
});

export default store;