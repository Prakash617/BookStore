import BreadCrumb from "@/components/Layout/BreadCrumb";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

type Props = {};

const page = (props: Props) => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">

          <BreadCrumb/>
            </div>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {/* <Image className="w-full h-full object-cover"  alt="Product Image"> */}
              <Image
                className="w-full h-full object-cover"
                alt="jacket.jpg"
                height={400}
                width={400}
                src="/deals/jacket.jpg"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Shatter me
            </h2>
            <p className=" text-sm mb-4">
              <span className="text-slate-500 ">by</span> Tahereh Mafi
            </p>
            <div className="mb-4 flex">
              <div className=" text-[#E98909] mr-4">
                <FaStar className=" inline-block text-lg" />{" "}
                <span className="">N/A</span>
              </div>
              <div className="flex">
                <div>
                  <MdOutlineMessage className="mt-1" />
                </div>
                <div>
                  <span>1 Book Reviews</span>
                </div>
              </div>
            </div>
            <div className="font-bold flex items-center space-x-2">
                <div>

              Sold by <span className="text-blue-500">Booksmandala Nepal</span>
                </div>
                <div className="text-red-600 font-light text-sm">
                Only 8 item left in stock!

                </div>
            </div>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                The last time she did, it was an accident, but The
                Reestablishment locked her up for murder. No one knows why
                Juliette’s touch is fatal. As long as she doesn’t hurt anyone
                else, no one really cares. The world is too busy crumbling to
                pieces to pay attention to a 17-year-old girl. Diseases are
                destroying the population, food is hard to find, birds don’t fly
                anymore, and the clouds are the wrong color. The Reestablishment
                said their way was the only way to fix things, so they threw
                Juliette in a cell. Now so many people are dead that the
                survivors are whispering war – and The Reestablishment has
                changed its mind. Maybe Juliette is more than a tortured soul
                stuffed into a poisonous body. Maybe she’s exactly what they
                need right now. Juliette has to make a choice: Be a weapon. Or
                be a warrior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
