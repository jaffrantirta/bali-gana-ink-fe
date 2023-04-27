import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const captions = [
    'Caption 1',
    'Caption 2',
    'Caption 3',
  ];

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % captions.length);
    setDirection('right');
    setTimeout(() => {
      setDirection('');
    }, 500);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex + captions.length - 1) % captions.length);
    setDirection('left');
    setTimeout(() => {
      setDirection('');
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % captions.length);
      setDirection('right');
      setTimeout(() => {
        setDirection('');
      }, 500);
    }, 3000);
    return () => {
      clearInterval(timer)
    };
  }, [activeIndex, captions.length]);

  return (
    <div className='relative h-96'>
      <div className='absolute inset-0'>
        <img src={`https://static.wixstatic.com/media/86f3ff_ddbb69f8c3ae47e197abe3206528b850~mv2.jpg/v1/fill/w_1200,h_722,al_c,q_85,enc_auto/86f3ff_ddbb69f8c3ae47e197abe3206528b850~mv2.jpg`} className='object-cover w-full h-full' alt='' />
        <div className='absolute inset-0 bg-amber-700 opacity-60'></div>
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className='mt-4 flex justify-between w-full p-10'>
          <button onClick={handlePrev} className='text-white'><ArrowLeftIcon className='w-10 shadow-lg hover:scale-125 duration-500 transition-all' /></button>
          <h1 className={`text-xl md:text-6xl text-center text-white font-bold transition-transform duration-500 ${direction === 'left' ? '-translate-x-full' : direction === 'right' ? 'translate-x-full' : ''}`}>{captions[activeIndex]}</h1>
          <button onClick={handleNext} className='text-white'><ArrowRightIcon className='w-10 shadow-lg hover:scale-125 duration-500 transition-all' /></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
