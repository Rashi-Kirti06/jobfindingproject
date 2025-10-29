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
        myJobs: []
    }
})