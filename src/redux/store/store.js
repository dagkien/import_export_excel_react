import couterReducer from '../features/Counter/counterSlice';

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
