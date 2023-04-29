import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import { showBycategory } from '../Context/GalleryContext'
import { findOne } from '../Context/CategoryContext'

export default function Latest() {
    const [images, setImages] = useState([])
    const [category, setCategory] = useState(null)
    useEffect(() => {
        async function getGallery() {
            const { data } = await showBycategory(1)
            setImages(data)
        }
        async function getCategory() {
            const { data } = await findOne(1)
            setCategory(data)
        }
        getGallery();
        getCategory();
    }, [])

    return (
        <div className='bg-black font-fredoka h-fit relative'>
            <div className='absolute inset-0 opacity-50 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://post.healthline.com/wp-content/uploads/2020/01/tattoo-parlor-artist-getting-732x549-thumbnail-732x549.jpg")' }}></div>
            <div className='relative h-full flex flex-col items-center justify-center p-10'>
                <h1 className='text-center mb-5 text-white font-bold text-3xl md:text-6xl'>{category?.attributes.name}</h1>
                <div className='md:px-52'>
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    )
}
