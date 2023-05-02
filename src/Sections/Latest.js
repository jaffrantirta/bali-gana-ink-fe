import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import { showBycategory } from '../Context/GalleryContext'
import { findOne } from '../Context/CategoryContext'
import { show, storage } from '../Context/SupabaseContext'

export default function Latest() {
    const [images, setImages] = useState([])
    useEffect(() => {
        async function getGallery() {
            await show('Gallery').select('*').eq('show_at_home', true).then(async (response) => {
                if (response.data) {
                    console.log(response.data);
                    response.data.map(async (item) => {
                        const { data: img } = await storage('assets').list(item.folder_name)
                        const uniqueData = img.reduce((acc, current) => {
                            const x = acc.find((item) => item.id === current.id);
                            if (!x) {
                                return acc.concat([current]);
                            } else {
                                return acc;
                            }
                        }, []);
                        console.log(uniqueData);
                        // const contactsDataPromises = uniqueData.map((item) =>
                        //     findByCategory(item.id).then(({ data: contactsData }) => ({
                        //         ...item,
                        //         contacts: contactsData,
                        //     }))
                        // );
                        // const contactsData = await Promise.all(contactsDataPromises);
                    })

                }
            })
        }
        getGallery();
    }, [])

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
