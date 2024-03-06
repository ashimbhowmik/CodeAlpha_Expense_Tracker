"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useState, useEffect, useContext } from "react";
import Dashboard from "../Dashboard";
import Loader from "../Loader/Loader";
import Image from "next/image";
import img2 from "../../assest/w1.png";
import img from "../../assest/us.png";

export default function Login() {
  const {
    storedFormData,
    formData,
    handleSubmit,
    compressAndStoreImage,
    handleInputChange,
    handleFileChange,
  } = useContext(GlobalContext);

  return (
    <>
      {storedFormData === null ? (
        <>
          <div className="min-h-screen flex justify-center items-center flex-col 2xl:justify-normal 2xl:pt-28 bg-[#FCFCFE] overflow-hidden">
            <div className="w-[80%] lg:w-full  mx-auto flex flex-col items-center ">
              <div className="flex items-center gap-5 mt-4 w-full">
                <h1 className="text-4xl text-slate-500 lg:ml-[32.5%] font-semibold">
                  <i>Hello !</i>
                </h1>

                <Image
                  src={img2}
                  alt=""
                  objectFit="cover"
                  className="w-16 h-16 waving-image"
                />
              </div>

              <div className="w-full flex gap-3 items-center mt-2">
                <p className="lg:ml-[32.5%]  text-blue-600 font-semibold">
                  <i>Please login first to use ...</i>
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="lg:w-[35%] w-full lg:mt-10 mt-14"
              >
                <div
                  className="cursor-pointer w-full lg:mb-10 mb-5 flex items-center justify-end gap-4"
                  onClick={() => {
                    document.getElementById("imageSelector").click();
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    objectFit="cover"
                    className="lg:w-16 lg:h-16 w-12"
                  />
                  <p className="bg-purple-600 text-white lg:px-4 px-2 text-sm py-2 rounded-xl">
                    Upload Image
                  </p>
                </div>
                <input
                  type="file"
                  id="imageSelector"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-4 hidden"
                />
                <div className="lg:flex gap-8">
                  <div className="mb-4 lg:w-[50%]">
                    <label
                      htmlFor="firstName"
                      className="block font-semibold text-sm text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md "
                      required
                    />
                  </div>
                  <div className="mb-4 lg:w-[50%]">
                    <label
                      htmlFor="lastName"
                      className="block font-semibold text-sm text-gray-700 mb-2 "
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="lg:flex gap-8 mt-4">
                  <div className="mb-4 lg:w-[50%]">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-sm text-gray-700 mb-2 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4 lg:w-[50%] overflow-hidden">
                    <label
                      htmlFor="work"
                      className="block font-semibold text-sm text-gray-700 mb-2 "
                    >
                      Work
                    </label>
                    <select
                      id="work"
                      name="work"
                      value={formData.work}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Select your work</option>
                      <option value="Personal">Personal</option>
                      <option value="Professional">Professional</option>
                    </select>
                  </div>
                </div>

                <div
                  className="flex items-center lg:mt-6 mt-10 "
                  onClick={compressAndStoreImage}
                >
                  <div className="flex items-center px-4 py-2 rounded-md lg:w-[85px] w-[50%] overflow-hidden border-blue-500  border gap-3 lg:hover:w-[21%] cursor-pointer ease-linear duration-500 transition-all hover:border-red-300 ">
                    <button className=" text-black ">Submit</button>
                    <div className="">
                      <Loader></Loader>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <Dashboard></Dashboard>
        </>
      )}
    </>
  );
}
