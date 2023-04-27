import React from 'react'

export default function Gallery() {
    return (
        <div class='grid grid-cols-2 md:grid-cols-4'>
            <div className='overflow-hidden'>
                <img class='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src='https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-9.jpg' />
            </div>
            <div className='overflow-hidden'>
                <img class='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src='https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-3.jpg' />
            </div>
            <div className='overflow-hidden'>
                <img class='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9-2-t6e_zKnjTYXHiPQlV-yRmAYTtaJYfGoDSmnaYUyDbKHRze4_h_SSuGpWhmI4lEc&usqp=CAU' />
            </div>
            <div className='overflow-hidden'>
                <img class='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src='https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/121804.jpg?h=308&w=308' />
            </div>
        </div>

    )
}
