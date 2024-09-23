'use client';
import React, { ReactNode, useState, useEffect } from 'react';

const Content = ({ children }: { children: ReactNode }) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('url(/background.svg)');

  const handleResize = () => {
    switch (true) {
      case (window.innerWidth < 400):
        return setBackgroundImage('url(/sm-mobile.svg)');
      case (window.innerWidth < 768):
        return setBackgroundImage('url(/mobileBackground.svg)');
      default:
        return setBackgroundImage('url(/background.svg)');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='text-white relative h-[100%] w-[100%] sm:max-h-[766px] bg-cover bg-center md:max-h-[100%] max-h-[256px]'
      style={{ backgroundImage: backgroundImage }}
    >
      {children}
    </div>
  );
};

export default Content;
