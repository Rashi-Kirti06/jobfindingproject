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
                <h4>Create an <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                This is the first item's accordion body.
                            </div>
                        </div>
                    </div>
                    
                </div>
                </h4>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks