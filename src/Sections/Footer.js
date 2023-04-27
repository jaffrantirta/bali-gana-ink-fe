import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { LogoFB, LogoIG } from '../Assets'

export default function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 p-10 gap-5 bg-black text-slate-200'>
            <div className='flex justify-center'>
                <img className='w-1/2' src='https://revolver.qodeinteractive.com/wp-content/uploads/2017/02/h5-slider-graphic.png' />
            </div>
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
                    <img className='w-12 filter invert' src={LogoIG} />
                    <p className='flex-1'>@ajndjan</p>
                </div>
                <div className='flex gap-3'>
                    <img className='w-12 filter invert' src={LogoFB} />
                    <p className='flex-1'>@ajndjan</p>
                </div>
            </div>
        </div>
    )
}
