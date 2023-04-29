import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { LogoFB, LogoIG } from '../Assets'
import { find, findByCategory } from '../Context/Contact'

export default function Footer() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        async function getContacts() {
            const { data } = await find('contact-categories');
            let categories = data;
            for (let i = 0; i < categories.length; i++) {
                const { data: contacts } = await findByCategory(1);
                console.log(contacts, categories[i].attributes.name);
            }
        }
        getContacts()
    }, [])

    return (
        <div className='font-fredoka grid grid-cols-1 md:grid-cols-4 p-10 gap-5 bg-black text-slate-200'>
            <div className='flex justify-center'>
                <img alt='' className='w-1/2' src='https://revolver.qodeinteractive.com/wp-content/uploads/2017/02/h5-slider-graphic.png' />
            </div>
            {contacts.map((contact, index) => {
                return (
                    <div key={index} className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl'>{contact.title}</h1>
                        <div className='flex gap-3'>
                            <img alt='' src={contact.icon.url} className='w-10' />
                            <p className='flex-1'>{contact.address}</p>
                        </div>
                    </div>
                )
            })}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>WHERE WE ARE?</h1>
                <div className='flex gap-3'>
                    <MapPinIcon className='w-10' />
                    <p className='flex-1'>Labore proident tempor velit velit deserunt est aliquip est commodo mollit.</p>
                </div>
                <div className='flex gap-3'>
                    <DevicePhoneMobileIcon className='w-10' />
                    <p className='flex-1'>+628178278272</p>
                </div>
                <div className='flex gap-3'>
                    <EnvelopeIcon className='w-10' />
                    <p className='flex-1'>yajas@kadjk.com</p>
                </div>
            </div>

            {/* //working house */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>FOLLOW US</h1>
                <div className='flex gap-3'>
                    <img alt='' className='w-12 filter invert' src={LogoIG} />
                    <p className='flex-1'>@ajndjan</p>
                </div>
                <div className='flex gap-3'>
                    <img alt='' className='w-12 filter invert' src={LogoFB} />
                    <p className='flex-1'>@ajndjan</p>
                </div>
            </div>
        </div>
    )
}
