import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div className='text-white relative'>
        <Image
        alt='background'
        src='background.svg'
        layout='fill'
        objectFit='cover'
        quality={100}
        />
    </div>
  )
}

export default Content