import React, { useEffect, useState } from 'react'
import { show } from '../Context/SupabaseContext';
import ButtonRounded from '../Components/ButtonRounded';

export default function Map() {
    const [maps, setMaps] = useState('')
    const [buttons, setButtons] = useState([])
    useEffect(() => {
        async function getFeatures() {
            const { data } = await show('Setting').select('*').eq('slug', 'google-maps-embed').single()
            setMaps(data)
        }
        async function getButton() {
            const { data } = await show('Button').select('*').eq('position', 'maps-section')
            setButtons(data)
        }
        getFeatures()
        getButton()
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full' dangerouslySetInnerHTML={{ __html: maps.content }} />
            <div className='p-5 flex flex-col justify-center items-center'>
                {buttons.map((item, index) => <ButtonRounded onClick={e => window.location.href = item.link} key={index}>{item.name}</ButtonRounded>)}
            </div>
        </div>
    );

}
