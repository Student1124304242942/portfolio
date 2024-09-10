'use client';
import React, { useRef, useState, useEffect } from 'react';
import cl from 'classnames';
import styles from './project.module.css';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
const slides = [
  '/text-js-2.svg',
  '/to-do-list.svg',
  '/random-color.svg',
  '/age-calculator.svg'
]

const Page = () => {
  return (
    <div className='overflow-hidden w-full h-full'>
      <Carousel>
        {slides.map((e) => (
          <div key={e} style={{backgroundImage: `url(${e})`}} className='w-full h-full min-w-[100%] min-h-[100%] bg-cover bg-center'></div>
        ))}
      </Carousel>
    </div>
  );
};

export default Page;
