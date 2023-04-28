import React from 'react'
import ButtonRounded from '../Components/ButtonRounded'
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { LogoFB, LogoIG } from '../Assets'
import { LogoWA } from '../Assets'

export default function Form() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-xl p-10 border-2'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-2xl'>FIND US!</h1>
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
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-2xl'>FOLLOW US</h1>
                    <div className='flex gap-3'>
                        <img alt='' className='w-12' src={LogoIG} />
                        <p className='flex-1'>@ajndjan</p>
                    </div>
                    <div className='flex gap-3'>
                        <img alt='' className='w-12' src={LogoFB} />
                        <p className='flex-1'>@ajndjan</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center p-10'>
                <ButtonRounded className={'bg-green-600 hover:bg-green-400 w-fit flex justify-center items-center gap-5'}><img src={LogoWA} className='w-10 filter invert' /> Chat on WhatsApp</ButtonRounded>
                <ButtonRounded className={'bg-slate-600 hover:bg-slate-400 w-fit flex justify-center items-center gap-5'}><PhoneIcon className='w-10' /> Call Phone</ButtonRounded>
            </div>
        </div >
    )
}
