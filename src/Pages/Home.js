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
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Home'
        async function getDescription() {
            const { data: Description, error } = await show('Description').select('*')
            if (error) return
            setDescriptions(Description)

        }
        async function getGallery() {
            await show('Gallery').select('*').eq('is_home_on_top', true).then(async (response) => {
                let v_images = [];
                if (response.data) {
                    await Promise.all(response.data.map(async (item) => {
                        const { data: img } = await storage('assets').list(item.folder_name);
                        v_images.push({
                            id: item.id,
                            name: item.name,
                            folder_name: item.folder_name,
                            images: img
                        });
                    }));
                    setImages(v_images)
                }
            });
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
            {images.map((item) => {
                return <Gallery key={item.id} images={item.images} url={`assets/${item.folder_name}/`} />
            })}
            <Feature />
            <Latest isHome={true} />
            <Map />
            <Footer />
        </div>
    )
}
