import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type Props = {
    imageUrl: string
    title: string
    price: string
    author: string
}

const ProductCard = (props: Props) => {
    const { imageUrl, title, price, author } = props

    const t = useTranslations('components.productCard');

    return (
        <div className='group shadow-md '>
            <Link href={'/en/product_detail'} >
                <Image src={imageUrl} alt='' width={300} height={300} className='mb-3 rounded-sm' />
                <div className='px-1'>

                <span ><h3 className='font-semibold text-lg'>{title}</h3> by <span className='text-gray-600'>{author}</span></span>
                <h3 className='font-semibold text-lg'>{t('currency')} {price}</h3>

                </div>
            </Link>
            <Button className='w-full mt-5 invisible group-hover:visible'>{t('addToCart')}</Button>
        </div>
    )
}

export default ProductCard