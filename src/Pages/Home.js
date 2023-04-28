import React from 'react'
import Hero from '../Sections/Hero'
import Carousel from '../Sections/Carousel'
import Explain from '../Sections/Explain'
import Gallery from '../Sections/Gallery'
import Feature from '../Sections/Feature'
import Latest from '../Sections/Latest'
import Map from '../Sections/Map'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'

export default function Home() {
    const images = [
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-9.jpg',
        'https://mymodernmet.com/wp/wp-content/uploads/2022/09/barry-flowers-floral-tattoo-art-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9-2-t6e_zKnjTYXHiPQlV-yRmAYTtaJYfGoDSmnaYUyDbKHRze4_h_SSuGpWhmI4lEc&usqp=CAU',
        'https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/121804.jpg?h=308&w=308',
    ]
    return (
        <div>
            <Navbar />
            <Hero isLogo={true} />
            <Carousel />
            <Explain
                title='Ad aute laborum veniam laboris tempor cillum esse ipsum veniam quis adipisicing do laboris.'
                paragraph='Id tempor id irure ad est irure tempor adipisicing nostrud voluptate amet sunt velit. Laborum cillum dolore ad eu enim aute anim excepteur ex non id duis. Ipsum est minim Lorem qui quis enim qui officia sint.'
                bg='https://static01.nyt.com/images/2017/02/03/arts/03TATTOOJP3/03TATTOOJP3-articleInline.jpg?quality=75&auto=webp&disable=upscale'
            />
            <Explain
                isFlip={true}
                title='Ad aute laborum veniam laboris tempor cillum esse ipsum veniam quis adipisicing do laboris.'
                paragraph='Id tempor id irure ad est irure tempor adipisicing nostrud voluptate amet sunt velit. Laborum cillum dolore ad eu enim aute anim excepteur ex non id duis. Ipsum est minim Lorem qui quis enim qui officia sint.'
                bg='https://static01.nyt.com/images/2017/02/03/arts/03TATTOOJP3/03TATTOOJP3-articleInline.jpg?quality=75&auto=webp&disable=upscale'
            />
            <Gallery images={images} />
            <Feature />
            <Latest />
            <Map />
            <Footer />
        </div>
    )
}
