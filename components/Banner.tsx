import React from 'react'

type Props = {
    url : string
    heading: string
    sub_heading: string
    features : any
}

const Banner = (props: Props) => {
    const {url,heading, sub_heading,features} = props
   return (
    <div className="flex items-center bg-[url('/deals/discount.webp')] h-[16rem]">
      <div className="container">
        <div className="text-white">

        <p className="text-6xl font-bold">{heading}</p>
        <p>{sub_heading}</p>
        </div>
        <div className="flex space-x-3 mt-8  text-pink-600">
            {/* {features.map((item:any,id:any) =><div key={id} className=" bg-white px-6 py-4 rounded-md">X% OFF</div>} */}
            {features.map((item:any,id:any) => (
    <div key={id} className="bg-white px-6 py-4 rounded-md">
       {item}
    </div>
))}
           {/* <div className=" bg-white px-6 py-4 rounded-md">X% OFF</div>
           <div className=" bg-white px-6 py-4 rounded-md">Bundle Deals</div>
           <div className=" bg-white px-6 py-4 rounded-md">Free Shipping</div> */}
        </div>

      </div>
   </div>
  )
}

export default Banner