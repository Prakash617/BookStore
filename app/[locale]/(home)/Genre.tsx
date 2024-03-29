import { useTranslations } from 'next-intl';
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image';

type Props = {}

const Genre = (props: Props) => {

    const t = useTranslations('home.genre');

    const genresList = [
        { title: 'artsAndPhotography', img: '/deleteGenreArt.svg' },
        { title: 'boxesSets', img: '/deleteGenreBoxes.svg' },
        { title: 'businessInvesting', img: '/deleteGenreBusiness.svg' },
        { title: 'fictionLitreature', img: '/deleteGenreFiction.svg' },
        { title: 'foreignLanguage', img: '/deleteGenreForeign.svg' },
        { title: 'historyBioSocial', img: '/deleteGenreHistory.svg' },
        { title: 'kidsTeensy', img: '/deleteGenreKids.svg' },
        { title: 'learningReference', img: '/deleteGenreLearningRef.svg' },
        { title: 'nepali', img: '/deleteGenreNepali.svg' },
        { title: 'miscellaneous', img: '/deleteGenreMisce.svg' },
        { title: 'nature', img: '/deleteGenreNature.svg' },
    ]

    return (
        <div className='px-32 py-10 space-y-2'>
            <h2 className='text-3xl font-semibold'>{t('title')}</h2>
            <h4 className='text-gray-600'>{t('sub-title')}</h4>


            <Carousel className="w-full">
                <CarouselContent className='gap-3 mt-6'>
                    {genresList.map((genre: any, index: number) => (
                        <CarouselItem key={index} className="basis-1/12">
                            <Image src={genre.img} alt={genre.title} width={40} height={50} className='rounded-full mx-auto mb-3 h-20' />
                            <div className='text-center max-w-[120px]'>
                                {t(`genre-list.${genre.title}.title`)}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    )
}

export default Genre