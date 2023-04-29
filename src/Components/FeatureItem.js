import React from 'react'

export default function FeatureItem(props) {
    return (
        <div className='text-center font-fredoka'>
            <div className='w-36 h-36 flex border-2 mx-auto items-center overflow-hidden justify-center rounded-full'>
                <img alt={props.title} className='' src={props.icon} />
            </div>
            <h1 className='text-4xl font-bold'>{props.title}</h1>
            <p className='text-2xl'>{props.description}</p>
        </div>

    )
}
