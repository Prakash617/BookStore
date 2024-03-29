import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'

let CarouselImageList  = [
    {src:'/deleteCarusel1.webp', alt:'image1'},
    {src:'/deleteCarouel2.webp', alt:'image1'},
    {src:'/deleteCarusel1.webp', alt:'image1'},
    {src:'/deleteCarouel2.webp', alt:'image1'},
    {src:'/deleteCarusel1.webp', alt:'image1'},
    {src:'/deleteCarouel2.webp', alt:'image1'},
]

type Props = {}

const MainCarousel = (props: Props) => {
  return (
    <>
     <Carousel
      opts={{
        loop:true,
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className='gap-3'>
        {CarouselImageList.map((img, index) => (
          <CarouselItem key={index} className="basis-1/8 shadow-lg border">
            <Image src={img.src} alt={img.alt} width={450} height={450} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </>
  )
}

export default MainCarousel