import React, { useEffect } from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Form from '../Sections/Form'
import Footer from '../Sections/Footer'
import Map from '../Sections/Map'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Contact Us'
    }, [])

    return (
        <div>
            <Navbar />
            <Hero text='Contact Us' />
            <Form />
            <Map />
            <Footer />
        </div>
    )
}
