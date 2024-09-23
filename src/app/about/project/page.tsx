'use client';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import { projects } from '@/components/constants/constant';
import Link from '@/icons/link.svg'

const Page = () => {
  return (
    <div className='overflow-hidden w-full h-full'>
      <Carousel>
        {projects.map((e) => (
          <div key={e.id} style={{backgroundImage: `url(${e.imageUrl})`}} className=' w-full h-full min-w-[100%] min-h-[100%] bg-cover bg-center flex justify-center items-start'>
            <div className='z-10 flex w-full items-center justify-between mx-[10px]'>
              <div className='text-[#00c6ff] hover:text-[var(--primary)]'>
                {
                e.siteLink && <a href={e.siteLink} className=' flex items-center gap-[10px]'>
                  <span className='text-[18px]'>
                    site link
                  </span>
                  <Link/>
                </a>
                }
              </div>
              <div className='text-[#00c6ff] hover:text-[var(--primary)]'>
                {
                  e.gitHubLink && <a href={e.gitHubLink}  className=' flex items-center gap-[10px]'>
                    <span>github link</span>
                    <Link/>
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
