"use client";
import React, { Fragment, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Dialog, Tab, Transition } from "@headlessui/react";
import Banner from "@/components/Banner";
import Link from "next/link";

type Props = {};
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Discount_deals = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {/* bg-black h-[2px]  w-full  border-b-2 border-slate-400 */}

      <Tab.Group>
        <Tab.List className=" flex  relative mt-2 space-x-3 ">
          <Tab
            className={({ selected }) =>
              classNames(
                " p-2.5 text-sm border-b-4 drop-shadow-md font-medium leading-5",
                // 'ring-white/60  ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? "border-b-4 font-bold border-black  shadow-md"
                  : "text-black hover:bg-slate-200 hover:text-black"
              )
            }
          >
            Discount Deal
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " p-2.5 text-sm border-b-4 drop-shadow-md font-medium leading-5",
                // 'ring-white/60  ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? "border-b-4 font-bold border-black  shadow-md"
                  : "text-black hover:bg-slate-200 hover:text-black"
              )
            }
          >
            Used Books
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " p-2.5 text-sm border-b-4 drop-shadow-md font-medium leading-5",
                // 'ring-white/60  ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? "border-b-4 font-bold border-black  shadow-md"
                  : "text-black hover:bg-slate-200 hover:text-black"
              )
            }
          >
            Buy One Get One Free
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel>
            {/* content1 */}
            <Banner
              heading="Deals and Steals."
              sub_heading="Dive into a World of Savings with Our Exclusive Offers Just for You"
              img_url={"/deals/discount.webp"}
              features={["X% OFF", "Bundle Deals", "Free Shipping"]}
            />
            <div className="container my-16">
              <h2 className="text-2xl font-semibold my-9">Available Coupon</h2>
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
                                <div
                                  onClick={closeModal}
                                  className="text-4xl hover:cursor-pointer"
                                >
                                  <IoIosClose className="ml-auto" />
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
                                    Whether youre expanding your collection or
                                    stocking up for a community, this deal is
                                    perfect for getting more books for less.
                                  </p>
                                  <hr className="my-4" />
                                  <div>
                                    <ul>
                                      <li>
                                        <b>Minimum Purchase</b> : Rs. 200000
                                      </li>
                                      <li>
                                        <b> Valid Till </b> : December 31, 2024
                                      </li>
                                      <li>
                                        <b> Account </b>: Applicable for all
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* onClick={closeModal} */}

                                <div className="mt-4">
                                  <div className="rounded-md px-4 text-center hover:cursor-pointer bg-[#165574] p-2 text-white py-2 text-sm font-medium  hover:bg-[#1b3b4b] hover:text-white focus:outline-none ">
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
            <div className="">
            <div className="container my-10">
            <h2 className="text-2xl font-semibold ">Our Bundle Collection</h2>
            <p className="text-sm mb-4">Bundles of books recommended by our team.</p>
            <div className="bg-[#F1F1F1] h-48 rounded-md w-full flex justify-center items-center">
              <div>
                {/* <Image src=''>

                </Image> */}

              </div>
              <div>
                <Link href={"/"}>

            <button className="bg-transparent  hover:bg-indigo-800 ease-in duration-200 text-indigo-800  font-semibold hover:text-white py-2 px-4 border border-indigo-800 hover:border-transparent rounded">
              Explore Books
              </button>
                </Link>
              </div>

            </div>


            </div>
            <div className="container my-10">
            <h2 className="text-2xl font-semibold ">Discount Deals</h2>
            <p className="text-sm mb-4">Discount Deals. Save money with flat or percentage discounts</p>
            <div className="bg-[#F1F1F1] h-48 rounded-md w-full flex justify-center items-center">
            <Link href={"/"}>

            <button className="bg-transparent  hover:bg-indigo-800 ease-in duration-200 text-indigo-800  font-semibold hover:text-white py-2 px-4 border border-indigo-800 hover:border-transparent rounded">
              Explore Books
              </button>
              </Link>

            </div>


            </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
          <div>
          <Banner
              heading="Deals and Steals."
              sub_heading="Dive into a World of Savings with Our Exclusive Offers Just for You"
              img_url={"/deals/discount.webp"}
              features={["X% OFF", "Bundle Deals", "Free Shipping"]}
            />
          </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>

          <Banner
              heading="Deals and Steals."
              sub_heading="Dive into a World of Savings with Our Exclusive Offers Just for You"
              img_url={"/deals/discount.webp"}
              features={["X% OFF", "Bundle Deals", "Free Shipping"]}
              />
              </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Discount_deals;
