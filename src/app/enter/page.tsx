'use client';
import Image from "next/image";
import P from "@/components/P/P";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import React from 'react'

export default function Page(){
  const  router = useRouter();
  return (
      <div className="min-h-[100vh] md:flex-row flex-col md:py-[0] py-[10px] flex items-center justify-center gap-[40px]" style={{ background: "var(--bg-color)" }}>
        <Image
        className="w-[250px] md:w-[300px]"
        src='entrance.svg'
        sizes="50vw"
        width={300}
        height={200}
        alt="Hi"
        />
        <div className="flex flex-col gap-[45px] items-center md:items-start">
          <P appearance="br" size="b">
            Welcome to by personal website.
          </P>
          <P  appearance="br" size="m">
            My name is Yunus, i am Fronted developer
          </P>
          <P  appearance="br" size="m">
            Here you can evaluate my projects and 
            <br/>
            if you  have  got a some interesting idea  
            <br/>
            we would reproduce that idea into reality 
          </P>
          <Button size="normal" appearance="b" onClick={() => { console.log("Button clicked!"); router.push('/about'); }} > Enter my portfolio</Button>
        </div>
    </div>
  )
}