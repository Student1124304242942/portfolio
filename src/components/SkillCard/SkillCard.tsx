'use client';
import { useState } from "react";
import { Skill } from "@/interfaces/Skill";
const SkillCard = ({ skill }: { skill: Skill }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        title={skill.name} 
        className="relative w-20 h-20 cursor-pointer" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'origin-top rotate-12' : ''} will-change-transform shadow-lg rounded-lg bg-white/30 backdrop-blur-lg`} />
        <div className='absolute  inset-0 hover:scale-[1.05] flex items-center justify-center transition-all duration-300 will-change-transform shadow-lg rounded-lg bg-white/30 backdrop-blur-lg'>
          {skill.imageUrl}
        </div>
      </div>
    )
  };
  
  export default SkillCard;
  