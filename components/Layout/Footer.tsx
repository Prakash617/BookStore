"use client";
import Image from "next/image";
import { FaLocationDot, FaPinterest } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";


type Props = {};

const Footer = (props: Props) => {
  
  return (
    <>
   {/* ///////////// */}
      <div className="grid  grid-cols-1 mt-32 md:grid-cols-5 gap-4 container">
        <div>
          <h2 className="font-bold text-lg">Our Physical Locations</h2>
          <div className="flex mt-9 mb-3">
            <div className="my-auto mr-3 ">
              <FaLocationDot className="text-2xl" />
            </div>
            <div className="">
              <h3 className="font-semibold ">Nepal Mandala Book</h3>
              <p>lakeside,Phokhara</p>
            </div>
          </div>
          <div className="flex ">
            <div className="my-auto mr-3 ">
              <FaLocationDot className="text-2xl" />
            </div>
            <div className="">
              <h3 className="font-semibold ">Nepal Mandala Book</h3>
              <p>lakeside,Phokhara</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg">Quick Links</h2>
          <div className=" mt-9">
            <ul className=" space-y-2">
              <li>Book Request</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Blogs</li>
              <li>Used Books</li>
              <li>Shipping Rates</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">About</h2>
          <div className=" mt-9">
            <ul className=" space-y-2">
              <li>FAQs</li>
              <li>Careers</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cafe</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Popular Genres</h2>
          <div className=" mt-9">
            <ul className=" space-y-2">
              <li>Fiction</li>
              <li>Self Help</li>
              <li>Business</li>
              <li>Children</li>
              <li>Nepali</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">
            Get Booksmandala in your Pocket (Coming Soon)
          </h2>
          <div className=" mt-9">
            <ul className=" space-y-2">
              <li>
                <Image
                  src="/img/google_play.webp"
                    width={120}
                  height={32}
                  alt="Picture of the author"
                />
              </li>
              <li>
                <Image
                  src="/img/app_store.webp"
                  width={120}
                  height={32}
                  alt="Picture of the author"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex justify-center space-x-4 my-2  h-20 items-center text-2xl">
        <div>
          {" "}
          <FaFacebook />{" "}
        </div>
        <div>
          <FaInstagramSquare />
        </div>
        <div>
          <FaPinterest />
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap justify-center space-x-4 my-4  md:h-24 items-center text-2xl">
        <div>
          <p>Payment Gateway:</p>
        </div>
        <div className="border-solid w-[70px] flex item-center  h-[40px] border-2 border-brown-600">
          <Image
            src="/img/esewa.webp"
            width={70}
            height={40}
            // fill={true}
            // className="my-auto"
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid flex item-center  border-2 w-[70px] h-[40px] border-brown-600">
          <Image
            src="/img/fonepay.webp"
            width={70}
            height={40}
            // content={true}
            // fill={true}
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid border-2 flex item-center w-[70px] h-[40px] border-brown-600">
          <Image
            src="/img/khalti.webp"
            width={70}
            height={40}
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid border-2 flex item-center w-[70px] h-[40px]  border-brown-600">
          <Image
            src="/img/cod.webp"
            width={70}
            height={40}
            alt="Picture of the author"
            className=""
          />
        </div>
      </div>
      <hr />
      <div className="flex justify-center bg-[#FAFAFA] items-center h-16 text-xl">
        <div>
          Copyright protected by Books Mandala, 2024
          <Link
            href="/termsofuse"
            className="underline underline-offset-4  border-r-2 px-1 border-black"
          >
            Terms of Use
          </Link>{" "}
          <Link href="/privacypolicy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
