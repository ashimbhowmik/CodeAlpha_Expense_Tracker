"use client";

import Image from "next/image";
import img from "../../assest/p3.png";
import img2 from "../../assest/w1.png";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Login from "../login";
import PageLoader from "../PageLoader/PageLoader";

export default function UserHome() {
  const { view, setView } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className=" min-h-screen w-[80%] mx-auto  flex flex-col items-center lg:pt-20 joverflow-hidden lg:justify-normal justify-center">
          <div className="flex items-center gap-5 mt-4 w-full justify-center lg:justify-normal">
            <h1 className="text-4xl text-slate-500 lg:ml-96 font-semibold">
              <i>Hello User !</i>
            </h1>

            <Image
              src={img2}
              alt=""
              objectFit="cover"
              className="w-16 h-16 waving-image"
            />
          </div>

          <div className="w-full lg:flex gap-3 items-center text-xl mt-6 hidden">
            <p className="lg:ml-96 lg:flex items-center gap-3 text-blue-600 font-semibold">
              <i>Welcome</i>
              <i>
                <Image
                  src={img2}
                  alt=""
                  objectFit="cover"
                  className="w-8 h-8 waving-image"
                />
              </i>
              <i>Please Wait few second</i>
            </p>
            <div className="">
              <PageLoader></PageLoader>
            </div>
          </div>

          <div className="w-full gap-3 items-center text-2xl lg:hidden mt-6">
            <p className="text-center text-blue-600 font-semibold">
              <i>Welcome</i>
            </p>
          </div>
          <div className="flex gap-4 justify-center  mt-2 w-full lg:hidden">
            <p>
              <i>Please Wait few second</i>
            </p>
            <PageLoader></PageLoader>
          </div>
          <div className=" p-10 flex justify-center w-full">
            <Image src={img} alt="" objectFit="cover" className="lg:w-[35%] " />
          </div>
        </div>
      ) : (
        <div className="">
          <Login></Login>
        </div>
      )}
    </>
  );
}
