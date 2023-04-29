import React from 'react'

export default function Explain(props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-fit font-fredoka'>
            <div style={{ backgroundImage: `url("${props.bg}")` }} className={`bg-cover aspect-square bg-center bg-no-repeat ${props.isFlip ? 'md:block hidden' : 'hidden'}`}></div>
            <div className='text-center p-10 flex flex-col justify-center'>
                <h1 className='text-2xl md:text-4xl mb-5 font-bold'>{props.title}</h1>
                <p>{props.paragraph}</p>
            </div>
            <div style={{ backgroundImage: `url("${props.bg}")` }} className={`bg-cover aspect-square bg-center bg-no-repeat ${props.isFlip ? 'md:hidden' : ''}`}></div>
        </div>

    )
}
