'use client';
import Image from 'next/image'
import { useEffect, useState } from "react";

import {Button,Input,Navbar,IconButton,Card,MobileNav, Carousel, Typography} from './materials/material'
export default function Home() {
  const [link,onLinkChange] = useState('');
  const [linktrue,onLinkTrue] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const error = false
  function checklink(link:any){
    if(1==1){
      onLinkTrue(true)
    }
    else{
      onLinkTrue(false)
    }
  }
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     
      
    
      <Typography
        as="li"
        
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Learn More
        </a>
      </Typography>
    </ul>
  );
  return (
   <div className='h-screen flex md:py-20 py-5 px-5 md:px-0 flex-col items-center content-center'>
          <Navbar className="sticky top-0 z-10 md:h-max md:max-w-full rounded-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-black text-gray-800 text-xl font-sans"
          >
            FreeBoards
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="md"
              className="hidden lg:inline-block"
            >
              <a href="https://github.com/invincibleinventor/freeboards">View GitHub</a>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a href="https://github.com/invincibleinventor/freeboards">View GitHub</a>
          </Button>
        </MobileNav>
      </Navbar>

    <section className="grow py-12 md:py-20 max-w-[78rem] mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20"><h1 className="text-5xl leading-[50px] md:text-7xl font-black text-gray-800 mb-4">Free and Secure Online Bulletins</h1><p className="text-md text-gray-800 md:text-lg max-w-3xl mx-auto mb-8">Freeboards is a free and secure website that provides you with a bulletin board to store data securely and access it from several different devices</p><div className="inline-flex items-center space-x-3 -rotate-[4deg]"> <img className="rounded-full" src="data:image/jpeg;base64,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" width="32" height="32" alt="Balasubramanian"/> <a className="text-gray-800 underline hover:no-underline font-medium" href="https://baladev.vercel.app">By Balasubramanian</a> <svg className="-mt-2" width="21" height="21" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path d="M7.517 20.35c-.107.307-.402.415-.844.39-.125-.042-.428-.219-.415-.318.012-.197.044-.392.096-.582.036-.103.923-1.603 1.227-2.104.296-.49.624-.959.983-1.405.728-.92 1.444-1.832 2.194-2.723.167-.2.348-.39.54-.566a20.312 20.312 0 0 0 1.845-1.936c.111-.102.204-.222.274-.354.629-.781 1.332-1.5 2.102-2.15.661-.453 1.31-.93 2.014-1.347.096-.06.18-.147.302-.158.26-.04.506-.143.715-.298.305-.189.637-.332.985-.425.178-.037.36-.052.542-.045.163-.007.155.23.117.28-.039.048.037.168.085.247.048.079 0 0 .032.094-.227.21-.468.407-.72.588-.358.348-.708.676-.805.769l-1.067.907c-.509.505-1.05 1.008-1.14 1.144a2.123 2.123 0 0 1-.372.3c-.077.037-1.488 1.682-1.543 1.747a5.74 5.74 0 0 1-.975.95.759.759 0 0 0-.193.184c-.49.605-1.046 1.155-1.561 1.74-.264.296-.503.61-.75.922-.023.065-.11.098-.162.154a1.89 1.89 0 0 0-.196.193c-.57.744-1.21 1.443-1.733 2.234-.117.18-.88.92-1.008 1.136-.13.217-.527.31-.57.432Z" fill="#A1A1AA"></path><path d="M1.984 18.76c.13.294-.07.55-.447.799-.125.08-.518.087-.565.04a2.692 2.692 0 0 1-.308-.504c-.007-.1-.308-1.744-.402-2.312a11.782 11.782 0 0 1-.115-1.637l-.102-3.343c-.006-.247.01-.494.046-.74.094-.847.122-1.699.084-2.548a1.377 1.377 0 0 0-.03-.422 16.024 16.024 0 0 1 .01-2.846c.151-.798.277-1.493.411-2.228-.007-.11-.015-.221.087-.32.143-.203.221-.44.226-.681a4.96 4.96 0 0 1 .239-.955A1.93 1.93 0 0 1 1.393.62c.09-.127.304-.021.33.047.027.07.18.058.278.062L2.1.722c.046.312.068.628.066.944.046.353.071.708.074 1.064l-.023 1.384c.049.693.001 1.423.023 1.572-.002.158-.02.314-.055.468.005.07.098 2.183.093 2.264.034.438.002.878-.094 1.308a.745.745 0 0 0 .018.262c.052.753-.004 1.503-.028 2.262l.08 1.144.015.211c-.005.088 0 .175.018.261.063.904-.004 1.817.104 2.727.014.211-.112 1.219-.073 1.458.038.24-.383.623-.333.71Z" fill="#231F20"></path></g></svg>
     
      </div>
      <Input
        type="email"
        placeholder="Enter a bulletin name"
        className="border font-inter my-8 w-72 border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-600 focus:border-gray-900 focus:border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        error = {linktrue}
        onChange={(e:any)=>onLinkChange(e.target.value)}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <Button className="my-12 content-center mx-auto flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
          onClick={()=>checklink(link)}
        >
        
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Create Your Bulletin
      </Button>
      </div>
   </section>
   </div>
  )
}
