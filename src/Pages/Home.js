import React from 'react'
import Hero from '../Sections/Hero'
import Carousel from '../Sections/Carousel'
import Explain from '../Sections/Explain'
import Gallery from '../Sections/Gallery'
import Feature from '../Sections/Feature'

export default function Home() {
    return (
        <div>
            <Hero />
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
            <Gallery />
            <Feature />
        </div>
    )
}
