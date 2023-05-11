import React, { useState } from 'react'
import { IMAGE_URL } from '../Utils/Constant'
import Loader from '../Components/Loader'

export default function Gallery(props) {
    const [loading, setloading] = useState(false)
    return (
        <div className='font-fredoka grid grid-cols-2 md:grid-cols-4'>
            {props.images.map((item, index) => {
                if (item.name === '.emptyFolderPlaceholder') return null
                if (loading) return <Loader />
                return (
                    <div className='overflow-hidden' key={index}>
                        <img onLoad={() => setloading(false)} alt='' className='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src={IMAGE_URL + props.url + item.name} />
                    </div>
                )
            })}
        </div>

    )
}
