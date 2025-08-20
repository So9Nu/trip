import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';


const menuOptions = [
    {
        name: 'Home',
        path:'/'
    },
    {
       name:'pricing',
       path:'/pricing'
    },
    {
        name: "Contact Us",
        path: "/contact"
    }
];

function Header() {
  return (
    <div className='flex justify-between items-center p-4'>
    <div>
    {/* logo */}
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
        <h2 className='font-bold text-2xl'> AI Trip Planner</h2>
      </div>
    </div>
    {/* menu */}
    
    <div
    className='flex gap-8 items-center'>
        {menuOptions.map((menu, index) => (
          <Link href={menu.path}>
            <h2 className='text-lg hover:scale-105 transition-all hover:text-primary '>{menu.name}</h2>
          </Link>
        ))}
      </div>
      <SignInButton>

      <Button>Explore</Button>
      </SignInButton>
      </div>
  )
}

export default Header