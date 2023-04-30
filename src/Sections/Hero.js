import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Route from '../Utils/Route';
import { useLocation } from 'react-router-dom';
import { API_BASE_URL } from '../Utils/Constant';
import { find } from '../Context/Contact'

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
        function getHero() {
            let queries = {};
            queries['filters[path][$eq]'] = currentPath === '/' ? '/home' : currentPath;
            queries['populate'] = '*';
            axios.get(Route('/api/heroes', queries)).then(response => {
                let attributes = response.data.data[0]?.attributes;
                setTitle(attributes.title);
                setImage(API_BASE_URL + attributes.background.data.attributes.url);
            }).catch(error => {
                console.error(error);
            })
        }
        async function getLogo() {
            const { data } = await find('logos', { populate: '*' })
            setLogo(API_BASE_URL + data[0]?.attributes.image.data.attributes.url)
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
