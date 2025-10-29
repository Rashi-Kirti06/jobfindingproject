import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const jobSlice = createSlice({
    name: "Jobs",
    initialState: {
        jobs: [],
        loading: false,
        error: null,
        message: null,
        singleJob: {},
        myJobs: [],
    },
    reducers:{
        requestForAllJobs(state, action){
            state.loading = true;
            state.error = null;
        },
        successForAllJobs(state, action){
            state.loading = false;
            state.jobs = action.payload;
        },
    }
})