import React, { useEffect, useState } from 'react'
import { find, findByCategory } from '../Context/Contact'
import { API_BASE_URL } from '../Utils/Constant'

export default function Footer() {
    const [contacts, setContacts] = useState([])
    const [logo, setLogo] = useState(null)
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
        async function getLogo() {
            const { data } = await find('logos', { populate: '*' })
            setLogo(API_BASE_URL + data[0]?.attributes.image.data.attributes.url)
        }
        getLogo()
        getContacts();
    }, []);


    return (
        <div className='font-fredoka grid grid-cols-1 md:grid-cols-4 p-10 gap-5 bg-black text-slate-200'>
            <div className='flex justify-center'>
                <img alt='' className='w-1/2' src={logo} />
            </div>
            {contacts.map((contact, index) => {
                return (
                    <div key={index} className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl'>{contact.attributes.name}</h1>
                        {contact.contacts.map((item, ind) => {
                            return (
                                <div key={ind} className='flex gap-3 items-center'>
                                    <img alt='' src={API_BASE_URL + item.attributes.icon.data.attributes.url} className='w-10 filter invert' />
                                    <p className='flex-1 text-white'>{item.attributes.text}</p>
                                </div>

                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
