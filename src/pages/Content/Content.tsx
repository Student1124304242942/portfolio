import React, { ReactNode } from 'react';

const Content = ({children}: {children: ReactNode}) => {
  return (
    <div className='text-white relative h-[100%] w-[100%] bg-cover bg-center' style={{backgroundImage: 'url(/background.svg)'}}>
        {children}
    </div>
  )
}

export default Content