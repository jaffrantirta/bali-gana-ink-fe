import React, { useEffect, useState } from 'react'
import FeatureItem from '../Components/FeatureItem'
import { show } from '../Context/SupabaseContext'

export default function Feature() {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        async function getFeatures() {
            const { data } = await show('Feature').select('*')
            setFeatures(data)
        }
        getFeatures()

    }, [])

    return (
        <div className='px-20 p-32 font-fredoka'>
            <div className='grid md:flex justify-center gap-5'>
                {features.map((feature, index) => {
                    return (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    )
                })}
            </div>
        </div>
    )
}
