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
            state.error = null;
        },
        failureForAllJobs(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        clearAllErrors(state, action){
            state.error = null;
            state.jobs = state.jobs;
        },
        resetJobSlice(state, action){
            state.error = null;
            state.jobs = state.jobs;
            state.loading = false;
            state.message = null;
            state.myJobs = myJobs;
            state.singleJob = {}
        }
    }
})