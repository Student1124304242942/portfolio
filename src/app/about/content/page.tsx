import React from 'react';
import Content from '@/pages/Content/Content';
import P from '@/components/P/P';

const page = () => {
  return (
    <>
       <div className='mx-auto [&>*]:block md:[&>*]:hidden mb-[25px] max-w-[600px] md:hidden flex flex-col gap-[10px]  text-center'>
            <P size='m' appearance='br'>
              swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe
            </P>
            <P size='s' appearance='sw'>
              Artwork generated with midjourne
            </P>
        </div>
      <Content>
        <div className='mx-auto md:[&>*]:block [&>*]:hidden max-w-[600px] flex flex-col gap-[10px]  text-center'>
            <P size='m' appearance='br'>
              swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe
            </P>
            <P size='s' appearance='sw'>
              Artwork generated with midjourne
            </P>
        </div>
      </Content>
    </>
  )
}

export default page