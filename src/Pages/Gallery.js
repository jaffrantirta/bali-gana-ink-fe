import React, { useEffect, useState } from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Latest from '../Sections/Latest'
import { find } from '../Context/CategoryContext'

export default function Gallery() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function getCategory() {
            const { data } = await find()
            setCategories(data)
        }
        getCategory()
    }, [])

    return (
        <div>
            <Navbar />
            <Hero text='Our Galleries' />
            {categories.map((item, index) => {
                return <Latest key={index} categoryId={item.id} />
            })}
        </div>
    )
}
