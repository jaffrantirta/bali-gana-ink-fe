import React, { useEffect, useState } from 'react'
import ButtonRounded from '../Components/ButtonRounded'
import { API_BASE_URL } from '../Utils/Constant'
import { find, findByCategory } from '../Context/Contact'

export default function Form() {
    const [contacts, setContacts] = useState([])
    const [buttons, setButtons] = useState([])
    useEffect(() => {
        async function getContacts() {
            const { data } = await find('contact-categories');
            const uniqueData = data.reduce((acc, current) => {
                const x = acc.find((item) => item.id === current.id);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            const contactsDataPromises = uniqueData.map((item) =>
                findByCategory(item.id).then(({ data: contactsData }) => ({
                    ...item,
                    contacts: contactsData,
                }))
            );
            const contactsData = await Promise.all(contactsDataPromises);
            setContacts(contactsData);
        }
        async function getButtons() {
            const { data } = await find('buttons', { filters: { positions: 'contact-us' }, populate: '*' })
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
                            <h1 className='font-bold text-2xl'>{contact.attributes.name}</h1>
                            {contact.contacts.map((item, ind) => {
                                return (
                                    <div key={ind} className='flex gap-3 items-center'>
                                        <img alt='' src={API_BASE_URL + item.attributes.icon.data.attributes.url} className='w-10' />
                                        <p className='flex-1 text-black'>{item.attributes.text}</p>
                                    </div>

                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col gap-5 justify-center items-center p-10'>
                {buttons.map((item, index) => {
                    return <ButtonRounded onClick={e => window.location.href = item.attributes.link} key={index} className={'bg-black hover:bg-slate-400 w-fit flex justify-center items-center gap-5'}><img alt='' src={API_BASE_URL + item.attributes.icon.data.attributes.url} className='w-10 filter invert' /> {item.attributes.name}</ButtonRounded>
                })}
            </div>
        </div >
    )
}
