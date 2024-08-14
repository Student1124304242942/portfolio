import React from 'react';
import Sidebar from '@/pages/Sidebar/Sidebar';
import Content from '@/pages/Content/Content';

const Page = () => {
  return (
    <div className='p-[40px] flex'  style={{ background: "var(--bg-color)" }}>
        <Sidebar/>
        <Content/>
    </div>
  )
}

export default Page