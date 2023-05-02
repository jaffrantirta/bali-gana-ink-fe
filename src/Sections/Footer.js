import React, { useEffect, useState } from 'react'
import { show } from '../Context/SupabaseContext'

export default function Footer() {
    const [contacts, setContacts] = useState([])
    const [logo, setLogo] = useState(null)
    useEffect(() => {
        async function getContacts() {
            const { data } = await show('Contact Category').select('*, Contact(*)')
            setContacts(data)
        }
        async function getLogo() {
            const { data, error } = await show('Setting').select('*').eq('slug', 'logo').single()
            if (error) return
            setLogo(data?.content)
        }
        getLogo()
        getContacts();
    }, []);


    return (
        <div className='font-fredoka grid grid-cols-1 md:grid-cols-4 p-10 gap-5 bg-black text-slate-200'>
            <div className='flex justify-center'>
                <img alt='' className='w-1/2' src={logo} />
            </div>
            {contacts.map((itm, index) => {
                return (
                    <div key={index} className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl'>{itm.name}</h1>
                        {itm.Contact.map((item, ind) => {
                            return (
                                <div key={ind} className='flex gap-3 items-center'>
                                    <img alt='' src={item.icon} className='w-10 filter invert' />
                                    <p className='flex-1 text-white'>{item.text}</p>
                                </div>

                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
