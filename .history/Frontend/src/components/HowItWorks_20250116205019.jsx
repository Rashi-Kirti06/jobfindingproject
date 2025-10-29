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
                    Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or apllying for jobs. Customize your
                </p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks