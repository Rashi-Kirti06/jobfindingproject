import {configureStore} from "@reduxjs/toolkit"

const store= configureStore({
    reducer: {
        jobs
    },
});

export default store;