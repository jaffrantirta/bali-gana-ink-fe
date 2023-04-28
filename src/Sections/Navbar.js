import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ButtonRounded from '../Components/ButtonRounded';
import { LogoFB } from '../Assets';

export default function Navbar({ className, btnMobileWhiteColor = 'text-white' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [hasPassedHero, setHasPassedHero] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        const updateHasPassedHero = () => {
            const heroSection = document.getElementById("hero-section");
            if (heroSection && window.pageYOffset >= heroSection.offsetTop + heroSection.offsetHeight) {
                setHasPassedHero(true);
            } else {
                setHasPassedHero(false);
            }
        };

        window.addEventListener("scroll", updateScrollDirection);
        window.addEventListener("scroll", updateHasPassedHero);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
            window.removeEventListener("scroll", updateHasPassedHero);
        };
    }, [scrollDirection]);

    const menus = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'Galleries',
            url: '/galleries',
        },
        {
            title: 'Contact',
            url: '/contact-us',
        },
    ]

    return (
        <nav className={`${hasPassedHero ? "bg-white text-slate-700" : "bg-transparent text-white"} ${scrollDirection === "down" ? "-top-32" : "top-0"} transition-all duration-500 z-30 fixed inset-0 bg-transparent p-5 px-10 ${isOpen ? 'bg-white' : 'bg-transparent'} font-primary flex h-24 justify-between items-center ${className}`}>
            <img
                alt="logo"
                src={LogoFB}
                className="w-16 md:w-24 h-auto"
            />
            <div className="hidden md:flex items-center gap-5">
                <div className="grid grid-cols-4 gap-5 font-bold text-center text-lg">
                    {menus.map((item, index) => <Link className='hover:text-slate-400 duration-300 transition-all' key={index} to={item.url}>{item.title}</Link>)}
                </div>
                <div>
                    <ButtonRounded>Daftar sekarang!</ButtonRounded>
                </div>
            </div>
            <div className={`transition-all md:hidden p-3 rounded-xl hover:border-primary hover:border-2 ${isOpen ? '' : 'bg-transparent'}`}>
                <button
                    className={`block hover:text-slate-500 focus:text-gray-200 focus:outline-none ${hasPassedHero ? "text-primary" : btnMobileWhiteColor} ${isOpen ? 'text-white' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                        <path
                            className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z'
                        />
                        <path
                            className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 6v2H6v-2h4zm0 4v2H6v-2h4zm6-4v2h-4v-2h4zm0 4v2h-4v-2h4z'
                        />
                    </svg>
                </button>
                <div className={`transition-all duration-700 ${isOpen ? 'block bg-white text-primary' : 'hidden'} absolute p-5 w-full top-full right-0 md:relative md:flex md:items-center md:gap-5 md:pt-5 md:pb-10 md:w-auto`}>
                    <div className='grid grid-cols-1 gap-1 text-center text-lg'>
                        {menus.map((item, index) => <Link key={index} to={item.url}>{item.title}</Link>)}
                    </div>
                    <div className='pt-5 justify-center flex'>
                        <ButtonRounded>Daftar sekarang!</ButtonRounded>
                    </div>
                </div>
            </div>
        </nav>
    )
}
