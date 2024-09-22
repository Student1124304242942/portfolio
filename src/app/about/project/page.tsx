'use client';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import { projects } from '@/components/constants/constant';

const Page = () => {
  return (
    <div className='overflow-hidden w-full h-full'>
      <Carousel>
        {projects.map((e) => (
          <div key={e.id} style={{backgroundImage: `url(${e.imageUrl})`}} className='w-full h-full min-w-[100%] min-h-[100%] bg-cover bg-center flex justify-center items-end'>
            <div className='w-full items-center justify-between'>
              <div className='transition-all duration-300 text-[#00c6ff] hover:text-[var(--primary)]'>
                {
                e.siteLink && <a href={e.siteLink}>
                  <span>site link</span>
                </a>
                }
              </div>
              <div>
                {
                  e.gitHubLink && <a href={e.gitHubLink}>
                    <span>github link</span>
                  </a>
                }
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Page;
