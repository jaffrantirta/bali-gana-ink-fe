import React from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Latest from '../Sections/Latest'

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <Hero text='Our Galleries' />
            <Latest />
        </div>
    )
}
