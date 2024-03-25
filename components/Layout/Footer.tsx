"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { FaLocationDot, FaPinterest } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import Banner from "../Banner";
import { IoIosClose } from "react-icons/io";
import { Dialog, Tab, Transition } from "@headlessui/react";

type Props = {};

const Footer = (props: Props) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <Banner
          heading="Deals and Steals."
          sub_heading="Dive into a World of Savings with Our Exclusive Offers Just for You"
          url={"/deals/discount.webp"}
          features={["X% OFF", "Bundle Deals", "Free Shipping"]}
        />
      </div>
      <Tab.Group>
        <Tab.List>
          <Tab>Discount Deal</Tab>
          <Tab>Used Books</Tab>
          <Tab>Buy One Get One Free</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* content1 */}
            <div>
              <h2>Available Coupon</h2>
              <div className="w-72  shadow-sm border-2 p-3 rounded-md hover:border-gray-300 hover:shadow-md">
                <div className=" bg-yellow-500  inline-block">
                  <div>{/* <Image></Image> */}</div>
                  <div>
                    <button type="button">coupan code</button>
                  </div>
                </div>
                <p className="font-semibold">
                  Unlock our exclusive discount for your bulk purchases at Books
                  Mandala! Ideal for libraries, institutions, or avid{" "}
                </p>
                <div className="flex justify-between ">
                  <button
                    type="button"
                    className="rounded-md  px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none "
                  >
                    COPY CODE
                  </button>
                  <div className="">
                    <button
                      type="button"
                      onClick={openModal}
                      className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                      + MORE
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {/* <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-gray-900"
                                >
                                  Payment successful
                                </Dialog.Title> */}
                                <div onClick={closeModal} className="text-4xl hover:cursor-pointer">
                                <IoIosClose  className="ml-auto"/>
                                </div>
                                <div className=" bg-yellow-500  inline-block">
                  <div>{/* <Image></Image> */}</div>
                  <div>
                    <button type="button">coupan code</button>
                  </div>
                </div>

                                <div className="mt-2">
                                  <p className="text-md font-semibold text-gray-500">
                                    Unlock our exclusive discount for your bulk
                                    purchases at Books Mandala! Ideal for
                                    libraries, institutions, or avid collectors,
                                    this special offer grants you a generous 25%
                                    discount on bulk orders over 2 lakhs.
                                    Whether you're expanding your collection or
                                    stocking up for a community, this deal is
                                    perfect for getting more books for less.
                                  </p>
                                  <hr className="my-4" />
                                  <div>
                                    <ul>
                                      <li><b>Minimum Purchase</b> : Rs. 200000</li>
                                      <li><b> Valid Till </b> : December 31, 2024</li>
                                      <li><b> Account </b>: Applicable for all</li>
                                    </ul>
                                  </div>

                                </div>
                                {/* onClick={closeModal} */}

                                <div className="mt-4">
                                  <div
                                    className="rounded-md px-4 text-center hover:cursor-pointer bg-[#165574] p-2 text-white py-2 text-sm font-medium  hover:bg-[#1b3b4b] hover:text-white focus:outline-none "
                                  >
                                    COPY CODE
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

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
                    width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </li>
              <li>
                <Image
                  src="/img/app_store.webp"
                  width={400}
                  height={500}
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
        <div className="border-solid w-[120] h-[36]  border-2 border-brown-600">
          <Image
            src="/img/esewa.webp"
            width={120}
            height={36}
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid border-2 w-[120] h-[36] border-brown-600">
          <Image
            src="/img/fonepay.webp"
            width={120}
            height={36}
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid border-2 w-[120] h-[36] border-brown-600">
          <Image
            src="/img/khalti.webp"
            width={120}
            height={36}
            alt="Picture of the author"
          />
        </div>
        <div className="border-solid border-2 w-[120] h-[36] border-brown-600">
          <Image
            src="/img/cod.webp"
            width={120}
            height={36}
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
