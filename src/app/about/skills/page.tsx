import React, { useState } from 'react';
import { Htag } from '@/components/Htag/Htag';
import { Skill } from '@/interfaces/Skill';
import { skills } from '@/components/constants/constant';
import SkillCard from '@/components/SkillCard/SkillCard';

const Page = () => {
  return (
    <div className='bg-[#36454F] min-h-[100%] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-[10px]'>
        <Htag appearance='pr' tag='h1'>My skills</Htag>
        <div className='flex gap-12 justify-center flex-wrap'>
          {skills.map((skill: Skill) => (
            <SkillCard skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page
