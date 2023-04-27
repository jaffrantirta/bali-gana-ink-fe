import React from 'react'
import Gallery from './Gallery'

export default function Latest() {
    const images = [
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-9.jpg',
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9-2-t6e_zKnjTYXHiPQlV-yRmAYTtaJYfGoDSmnaYUyDbKHRze4_h_SSuGpWhmI4lEc&usqp=CAU',
        'https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/121804.jpg?h=308&w=308',
    ]
    return (
        <div className='bg-black p-10'>
            <h1 className='text-center mb-5 text-white font-bold text-3xl md:text-6xl'>OUR Latest artwork</h1>
            <div className='md:px-52'>
                <Gallery images={images} />
            </div>
        </div>
    )
}
