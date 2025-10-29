import {configureStore} from "@reduxjs/toolkit"

const store= configureStore({
    reducer: {
        jobs: jo
    },
});

export default store;