import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import {sendEmail} from "../utils/sendEmail.js";


export const newsLetterCron = () =>{
    cron.schedule("*/1 * * * *", async()=>{
        // console.log("Running news letter cron automation.");
        const jobs = await Job.find({newLettersSent: false});
        for(const job of jobs){
            try {
                const filterUsers = await User.find({
                    $or:[
                        {"niches.firstNiche": job.jobNiche},
                    ]
                })
            } catch (error) {
                
            }
        }
    });
}
