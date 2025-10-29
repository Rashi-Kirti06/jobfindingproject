import {configureStore} from "@reduxjs/toolkit"
import reducer from "./slices/jobSlice";

const store= configureStore({
    reducer: {
        jobs: reducer
    },
});

export default store;