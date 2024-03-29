import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

const BestSeller = (props: Props) => {

    const t = useTranslations('home.bestSeller');

    return (
        <>
            <div className='px-32 py-10 space-y-2'>
                <h2 className='text-3xl font-semibold'>{t('title')}</h2>
                <h4 className='text-gray-600'>{t('sub-title')}</h4>


                <div className='grid'>

                </div>
            </div>
        </>
    )
}

export default BestSeller