import React from 'react'
import { API_BASE_URL } from '../Utils/Constant'

export default function Gallery(props) {
    return (
        <div className='font-fredoka grid grid-cols-2 md:grid-cols-4'>
            {props.images.map((item, index) => {
                return (
                    <div className='overflow-hidden' key={index}>
                        <img alt='' className='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src={API_BASE_URL + item.attributes.image.data.attributes.url} />
                    </div>
                )
            })}
        </div>

    )
}
