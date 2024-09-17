import React from 'react'
import Navbar from './Navbar'
import QuoteButton from './QuoteButton'
import webDesign from '../assets/webDesign.png'
import './Services.css'

export default function Services() {
    return (
        <div>
            <Navbar />
            <main className='home container-fluid'>
                <section className='section' id='services-section1'>
                    <div className='row'>
                        <div className='col-6 d-flex flex-column justify-content-center text-white'>
                            <div className='text-white mb-3' id='service-heading'>
                                Creative Web Design
                            </div>
                            <div id='service-quote-button'>
                                <QuoteButton className='home-quote-button me-auto' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src={webDesign} height={'760px'} alt='web design' />
                        </div>
                    </div>
                </section>
                <section className='section justify-content-start' id='services-section2'>
                    <div className='row' id='approach'>
                        <div className='col-12 text-white h1' id='approach-heading'>
                            Our Approach to Web Design
                        </div>
                        <div className='col-12' style={{ color: '#B8B8B8' }}>
                            Fusing imagination with practicality
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5 mt-3' id='service-cards'>
                            <h1>

                            </h1>
                        </div>
                        <div className='col-4 mt-3' id='service-cards'>
                            <h1>

                            </h1>
                        </div>
                        <div className='col-4 mt-3' id='service-cards'>
                            <h1>

                            </h1>
                        </div>
                        <div className='col-4 mt-3' id='service-cards'>
                            <h1>

                            </h1>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
