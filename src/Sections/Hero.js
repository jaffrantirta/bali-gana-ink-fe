import React, { useEffect } from 'react'

export default function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            const background = document.querySelector('.parallax-background');

            if (background) {
                background.style.backgroundPositionY = `${offset * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-black h-screen relative'>
            <div className='absolute inset-0 opacity-50 parallax-background bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://post.healthline.com/wp-content/uploads/2020/01/tattoo-parlor-artist-getting-732x549-thumbnail-732x549.jpg")' }}></div>
            <div className='relative h-full flex items-center justify-center p-10'>
                <div className='w-96 z-10 relative'>
                    <img alt='logo' src='https://revolver.qodeinteractive.com/wp-content/uploads/2017/02/h5-slider-graphic.png' />
                </div>
            </div>
        </div>
    );
}
