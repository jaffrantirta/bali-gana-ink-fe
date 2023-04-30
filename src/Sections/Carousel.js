import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import { find } from '../Context/Contact';
import { API_BASE_URL } from '../Utils/Constant';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [captions, setCaptions] = useState([])
  const [captBackground, setCaptBackground] = useState(null)

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

    function getCaption() {
      axios.get('/api/captions').then(response => {
        setCaptions(response.data.data);
      }).catch(error => {
        console.error(error);
      })
    }

    async function getCaptBackground() {
      const { data } = await find('caption-backgrounds', { populate: '*' })
      setCaptBackground(API_BASE_URL + data[0]?.attributes.image.data.attributes.url)
    }
    getCaptBackground()

    getCaption();
    return () => {
      clearInterval(timer)
    };
  }, [activeIndex, captions.length]);

  return (
    <div className='relative h-96 font-fredoka'>
      <div className='absolute inset-0'>
        <img src={captBackground} className='object-cover w-full h-full' alt='' />
        <div className='absolute inset-0 bg-amber-700 opacity-60'></div>
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className='mt-4 flex justify-between w-full p-10'>
          <button onClick={handlePrev} className='text-white'><ArrowLeftIcon className='w-10 shadow-lg hover:scale-125 duration-500 transition-all' /></button>
          <h1 className={`text-xl md:text-6xl text-center text-white font-bold transition-transform duration-500 ${direction === 'left' ? '-translate-x-10' : direction === 'right' ? 'translate-x-10' : ''}`}>{captions[activeIndex]?.attributes.text}</h1>
          <button onClick={handleNext} className='text-white'><ArrowRightIcon className='w-10 shadow-lg hover:scale-125 duration-500 transition-all' /></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
