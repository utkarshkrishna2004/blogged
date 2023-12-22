import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import logocropped from "../../assets/logocropped.png";


function Footer() {
   return (
      <section className="relative overflow-hidden py-10 bg-stone-700 rounded-lg">
         <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="-m-6 flex flex-wrap">
               <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                  <div className="flex h-full flex-col justify-between">
                     <div className="mb-4 inline-flex items-center h-24 px-5">
                        <img src={logocropped} alt="logo" className=" w-52" />
                     </div>
                  </div>
               </div>
               <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                  <div className="h-full">
                     <h3 className="tracking-px mb-9 text-md font-bold uppercase text-gray-300">
                        Company
                     </h3>
                     <ul>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Features
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Pricing
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Affiliate Program
                           </Link>
                        </li>
                        <li>
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Press Kit
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                  <div className="h-full">
                     <h3 className="tracking-px mb-9 text-md font-bold uppercase text-gray-300">
                        Support
                     </h3>
                     <ul>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Account
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Help
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Contact Us
                           </Link>
                        </li>
                        <li>
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Customer Support
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                  <div className="h-full">
                     <h3 className="tracking-px mb-9 text-md font-bold uppercase text-gray-300">
                        Legals
                     </h3>
                     <ul>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Terms & Conditions
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Privacy Policy
                           </Link>
                        </li>
                        <li>
                           <Link
                              className=" text-base font-medium text-zinc-400 hover:text-zinc-100"
                              to="/"
                           >
                              Licensing
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <p className="text-sm text-gray-50 font-semibold pt-16">
               &copy; Copyright 2023. All Rights Reserved by blogged.
            </p>
         </div>
      </section>
   );
}

export default Footer;
