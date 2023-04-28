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

export default function Home() {
    const images = [
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-9.jpg',
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9-2-t6e_zKnjTYXHiPQlV-yRmAYTtaJYfGoDSmnaYUyDbKHRze4_h_SSuGpWhmI4lEc&usqp=CAU',
        'https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/121804.jpg?h=308&w=308',
    ]
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        function getDescription() {
            let queries = {};
            queries['populate'] = '*';
            axios.get(Route('/api/descriptions', queries)).then(response => {
                console.log(response.data.data)
                setDescriptions(response.data.data)
            }).catch(error => {
                console.error(error);
            })
        }
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
