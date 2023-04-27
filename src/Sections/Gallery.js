import React from 'react'

export default function Gallery(props) {
    return (
        <div class='grid grid-cols-2 md:grid-cols-4'>
            {props.images.map((item, index) => {
                return (
                    <div className='overflow-hidden' key={index}>
                        <img alt='' class='object-cover object-center hover:scale-125 duration-500 transition-all w-full h-full' src={item} />
                    </div>
                )
            })}
        </div>

    )
}
