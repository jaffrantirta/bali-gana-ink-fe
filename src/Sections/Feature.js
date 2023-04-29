import React, { useEffect, useState } from 'react'
import FeatureItem from '../Components/FeatureItem'
import { find } from '../Context/FeatureContext'
import { API_BASE_URL } from '../Utils/Constant'

export default function Feature() {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        async function getFeatures() {
            const { data } = await find()
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
                            title={feature.attributes.title}
                            description={feature.attributes.description}
                            icon={API_BASE_URL + feature.attributes.icon.data.attributes.url}
                        />
                    )
                })}
            </div>
        </div>
    )
}
