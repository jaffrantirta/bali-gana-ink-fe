import React from 'react'
import FeatureItem from '../Components/FeatureItem'

export default function Feature() {
    return (
        <div className='px-20 p-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
            </div>
        </div>
    )
}
