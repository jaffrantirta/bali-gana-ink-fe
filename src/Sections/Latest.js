import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import { show, storage } from '../Context/SupabaseContext'

export default function Latest({ isHome = false }) {
    const [images, setImages] = useState([])
    useEffect(() => {
        async function getGallery() {
            await show('Gallery').select('*').eq('show_at_home', isHome).then(async (response) => {
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
    }, [isHome]);


    return (
        <div className='bg-black font-fredoka h-fit relative'>
            <div className='absolute inset-0 opacity-50 bg-no-repeat bg-center bg-cover'></div>
            {images.map((item) => {
                return (
                    <div key={item.id} className='relative h-full flex flex-col items-center justify-center p-10'>
                        <h1 className='text-center mb-5 text-white font-bold text-3xl md:text-6xl'>{item.name}</h1>
                        <div className='md:px-52'>
                            <Gallery images={item.images} url={`assets/${item.folder_name}/`} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
