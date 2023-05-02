import React, { useEffect, useState } from 'react'
import Hero from '../Sections/Hero'
import Carousel from '../Sections/Carousel'
import Explain from '../Sections/Explain'
import Gallery from '../Sections/Gallery'
import Feature from '../Sections/Feature'
import Latest from '../Sections/Latest'
import Map from '../Sections/Map'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import { show, storage } from '../Context/SupabaseContext'

export default function Home() {
    const [images, setImages] = useState([])
    const [descriptions, setDescriptions] = useState([])
    const folder_name = 'the_best'
    useEffect(() => {
        window.scrollTo(0, 0);
        async function getDescription() {
            const { data: Description, error } = await show('Description').select('*')
            if (error) return
            setDescriptions(Description)

        }
        async function getGallery() {
            const { data } = await storage('assets').list(folder_name)
            // console.log(data);
            setImages(data)
        }
        getGallery();
        getDescription();

    }, [])

    return (
        <div>
            <Navbar />
            <Hero isLogo={true} />
            <Carousel />
            {descriptions.map((description, index) => {
                return (
                    <Explain
                        key={index}
                        isFlip={index % 2 === 0 ? false : true}
                        title={description.title}
                        paragraph={description.text}
                        bg={description.image}
                    />
                )
            })}
            <Gallery images={images} url={'assets/' + folder_name + '/'} />
            <Feature />
            <Latest />
            <Map />
            <Footer />
        </div>
    )
}
