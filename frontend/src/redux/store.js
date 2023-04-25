import productsReducer from "./slices/products";
import popupReducer from "./slices/popup";
import thunk from "redux-thunk";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
product : productsReducer,
popup : popupReducer
    }
    
})

export default store;