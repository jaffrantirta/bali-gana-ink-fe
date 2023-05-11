import React from 'react'

export default function Loader() {
    return (
        <div className='w-full h-full flex justify-center m-10'>
            <div className='bg-slate-500 w-16 h-16 rounded-3xl animate-spin'></div>
        </div>
    )
}
