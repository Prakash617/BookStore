'use client'
import React from 'react'
import NextNProgress from 'nextjs-progressbar';
import Image from 'next/image';
import Link from 'next/link';
import BooksMenu from './BooksMenu';
import SearchBar from './SearchBar';
import { MoonIcon, ShoppingCart } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <NextNProgress />
      <div className='py-5 px-16 shadow-md'>
        <div className='flex items-center md:justify-center lg:justify-between'>
          <div className='flex gap-3 items-center text-lg'>
            <Image alt="booksmandala logo" loading="lazy" width={"200"} height={'300'} decoding="async" data-nimg="fill" sizes="100vw" unoptimized src="/ul53R1493KevFx63fFFnk7Nduk8qaz2BqtdT8mYP.gif" style={{ color: "transparent" }} />
            <span className=''><BooksMenu /></span>
            <Link className='hover:text-sky-600' href={'#'}>Deals</Link>
          </div>
          <div className='flex gap-3 items-center text-lg'>
            <SearchBar />
            <MoonIcon className='cursor-pointer' />
            <Link href={'#'}><ShoppingCart /></Link>
            <Link className='hover:text-sky-600' href={'#'}>Login</Link>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar