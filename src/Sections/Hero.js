import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { show } from '../Context/SupabaseContext';

export default function Hero(props) {
    const location = useLocation();
    const currentPath = location.pathname;
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [logo, setLogo] = useState(null)

    useEffect(() => {
        function handleScroll() {
            const offset = window.pageYOffset;
            const background = document.querySelector('.parallax-background');

            if (background) {
                background.style.backgroundPositionY = `${offset * 0.5}px`;
            }
        };
        async function getHero() {
            const { data, error } = await show('Hero').select('*').eq('path', currentPath)
            if (error) return
            setTitle(data[0]?.title)
            setImage(data[0]?.background)
        }
        async function getLogo() {
            const { data, error } = await show('Setting').select('*').eq('slug', 'logo').single()
            if (error) return
            setLogo(data?.content)
        }

        window.addEventListener('scroll', handleScroll);

        getHero();
        getLogo()

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPath]);

    return (
        <div id='hero-section' className='bg-black font-fredoka h-screen relative'>
            <div className='absolute inset-0 opacity-50 parallax-background bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url("${image}")` }}></div>
            <div className='relative h-full flex items-center justify-center p-10'>
                <div className='w-96 z-10 relative'>
                    {props.isLogo ? <img alt='logo' src={logo} /> : <h1 className='text-center mb-5 text-white font-bold text-3xl md:text-6xl'>{title}</h1>}
                </div>
            </div>
        </div>
    );
}
