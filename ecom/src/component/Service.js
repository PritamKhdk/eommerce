import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <h1 className="text-3xl mb-6 text-center font-semibold">Our Services</h1>

          <div className="grid grid-cols-3 grid-rows-2 gap-5">

            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 row-span-2">
              <TbTruckDelivery className="w-10 h-10 text-blue-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 mx-auto">Super Fast and Free Delivery</h3>
              <p className="text-gray-600 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 row-span-1">
              <MdSecurity className="w-10 h-10 text-red-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 mx-auto">Non-contact Shipping</h3>
              <p className="text-gray-600 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 row-span-2">
              <GiReceiveMoney className="w-10 h-10 text-green-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 mx-auto">Money-back Guaranteed</h3>
              <p className="text-gray-600 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 row-span-1">
              <RiSecurePaymentLine className="w-10 h-10 text-purple-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 mx-auto">Super Secure Payment System</h3>
              <p className="text-gray-600 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
