import ProductCard from '@/components/ProductCard';
import { useTranslations } from 'next-intl';
import React, { Fragment } from 'react'

type Props = {}

const BestSeller = (props: Props) => {

    const t = useTranslations('home.bestSeller');

    return (
        <>
            <div className='px-32 py-10 space-y-2'>
                <h2 className='text-3xl font-semibold'>{t('title')}</h2>
                <h4 className='text-gray-600'>{t('sub-title')}</h4>
                <div className='grid grid-cols-5 gap-10 pt-5'>
                    {
                        Array(5).fill(".").map((_, index: number) => {
                            return (
                                <Fragment key={index}>
                                    <ProductCard title='Bhagavad Gita As It Is' imageUrl='/deleteBookBhagwatGita.webp' price='670' author='Bhaktivedanta Swami' />
                                </Fragment>
                            )
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default BestSeller
