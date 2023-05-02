import React, { useEffect, useState } from 'react'
import ButtonRounded from '../Components/ButtonRounded'
import { show } from '../Context/SupabaseContext'

export default function Form() {
    const [contacts, setContacts] = useState([])
    const [buttons, setButtons] = useState([])
    useEffect(() => {
        async function getContacts() {
            const { data } = await show('Contact Category').select('*, Contact(*)')
            setContacts(data)
        }
        async function getButtons() {
            const { data } = await show('Button').select('*').eq('position', 'contact-us')
            setButtons(data)
        }
        getButtons()
        getContacts();
    }, []);
    return (
        <div className='font-fredoka grid grid-cols-1 md:grid-cols-2 p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-xl p-10 border-2'>
                {contacts.map((contact, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-5'>
                            <h1 className='font-bold text-2xl'>{contact.name}</h1>
                            {contact.Contact.map((item, ind) => {
                                return (
                                    <div key={ind} className='flex gap-3 items-center'>
                                        <img alt='' src={item.icon} className='w-10' />
                                        <p className='flex-1 text-black'>{item.text}</p>
                                    </div>

                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col gap-5 justify-center items-center p-10'>
                {buttons.map((item, index) => {
                    return <ButtonRounded onClick={e => window.location.href = item.link} key={index} className={'bg-black hover:bg-slate-400 w-fit flex justify-center items-center gap-5'}><img alt='' src={item.icon} className='w-10 filter invert' /> {item.name}</ButtonRounded>
                })}
            </div>
        </div >
    )
}
