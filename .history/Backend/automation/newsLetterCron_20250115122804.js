import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";

export const newsLetterCron = () =>{
    cron.schedule("* * * * *", async()=>{
        console.log("Running news letter cron automation.");
    });
}