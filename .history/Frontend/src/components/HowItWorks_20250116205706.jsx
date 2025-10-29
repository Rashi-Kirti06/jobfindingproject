import React from 'react'
import {LuUserPlus} from "react-icons/lu"

const HowItWorks = () => {
  return (
    <section className='howItWorks'>
        <h3>How Does it Work?</h3>
        <div className='container'>
            <div className='card'>
                <div className='icon'>
                    <LuUserPlus />
                </div>
                <h4>Create an Account</h4>
                <p>
                    Sign up for a free account as a job seeker or employer. 
                    Set up your profile in minutes to start posting jobs or 
                    applying for jobs. Customize your profile to highlight your skills or requirements.
                </p>
            </div>
            <div className='card'>
                <div className='icon'>
                    <LuUserPlus />
                </div>
                <h4>Post or Brows Job</h4>
                <p>
                    Employers can post detailed job description, and job seekers ca
                </p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks