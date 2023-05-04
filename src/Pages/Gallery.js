import React, { useEffect } from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Latest from '../Sections/Latest'

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Our Gallery'
    }, [])

    return (
        <div>
            <Navbar />
            <Hero text='Our Galleries' />
            <Latest />
        </div>
    )
}
