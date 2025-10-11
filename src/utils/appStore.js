import dogSlice from "../utils/dogSlice.js"

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    reducer: {
        dog: dogSlice
    }
});
export default appStore;