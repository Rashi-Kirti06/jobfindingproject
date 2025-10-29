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
            </div>
        </div>
    </section>
  )
}

export default HowItWorks