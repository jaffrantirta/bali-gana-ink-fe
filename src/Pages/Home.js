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
import axios from 'axios'
import Route from '../Utils/Route'
import { API_BASE_URL } from '../Utils/Constant'
import { showBycategory } from '../Context/GalleryContext'

export default function Home() {
    const [images, setImages] = useState([])
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        function getDescription() {
            let queries = {};
            queries['populate'] = '*';
            axios.get(Route('/api/descriptions', queries)).then(response => {
                setDescriptions(response.data.data)
            }).catch(error => {
                console.error(error);
            })
        }
        async function getGallery() {
            const { data } = await showBycategory(2)
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
                        title={description.attributes.title}
                        paragraph={description.attributes.text}
                        bg={API_BASE_URL + description.attributes.image.data.attributes.url}
                    />
                )
            })}
            <Gallery images={images} />
            <Feature />
            <Latest />
            <Map />
            <Footer />
        </div>
    )
}
