"use client";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import Image from "next/image";
import Link from "next/link";
import BooksMenu from "./BooksMenu";
import SearchBar from "./SearchBar";
import { MoonIcon, ShoppingCart } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Popover } from "@headlessui/react";
import Login from "./Login";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <NextNProgress />
      <div className="py-5 px-16 shadow-md">
        <div className="flex items-center md:justify-center lg:justify-between">
          <div className="flex gap-3 items-center text-lg">
            <Image
              alt="booksmandala logo"
              loading="lazy"
              width={"200"}
              height={"300"}
              decoding="async"
              data-nimg="fill"
              sizes="100vw"
              unoptimized
              src="/ul53R1493KevFx63fFFnk7Nduk8qaz2BqtdT8mYP.gif"
              style={{ color: "transparent" }}
            />
            <span className="">
              <BooksMenu />
            </span>
            <Link className="hover:text-sky-600" href="/en/discount-deals">
              Deals
            </Link>
          </div>
          <div className="flex gap-3 items-center text-lg">
            <SearchBar />
            <MoonIcon className="cursor-pointer" />
            <Link href={"#"}>
              <ShoppingCart />
            </Link>
            {/* <Link className='hover:text-sky-600' href={'#'}>Login</Link> */}

            <div className="">
              <button type="button" onClick={openModal} className='hover:text-sky-600'>
              Login
              </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                       <Login setIsOpen= {setIsOpen} />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
