import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MenuMiddleSection = (props: Props) => {
    return (
        <div className='px-4 py-8 space-y-8 border-r-[1px]'>
            <div className='grid grid-cols-3'>
                <Link href={"#"}><div className='text-lg p-2 font-semibold hover:bg-gray-200 rounded-sm'>Best Selling</div></Link>
                <Link href={"#"}><div className='text-lg p-2 font-semibold hover:bg-gray-200 rounded-sm'>New Arrivals</div></Link>
                <Link href={"#"}><div className='text-lg p-2 font-semibold hover:bg-gray-200 rounded-sm'>Nepali Books</div></Link>
            </div>

            <div>
                <div className='text-lg p-2 font-semibold mb-5'>Popular</div>
                <div className='grid grid-cols-4 gap-5'>
                    <Link href={'#'}><Image src={'/atomicHabits.webp'} alt='Popular books 1' width={'1000'} height={110} /></Link>
                    <Link href={'#'}><Image src={'/atomicHabits.webp'} alt='Popular books 1' width={'1000'} height={110} /></Link>
                    <Link href={'#'}><Image src={'/atomicHabits.webp'} alt='Popular books 1' width={'1000'} height={110} /></Link>
                    <Link href={'#'}><Image src={'/atomicHabits.webp'} alt='Popular books 1' width={'1000'} height={110} /></Link>
                </div>
            </div>

        </div>
    )
}

export default MenuMiddleSection