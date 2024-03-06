"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect, useState } from "react";

export default function Dashboard() {
  const { storedFormData, compressedImageDataURL } = useContext(GlobalContext);

  //   console.log(storedFormData, "amit");

  return (
    <>
      <div>
        {storedFormData && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Stored Form Data</h2>
            <p>First Name: {storedFormData.firstName}</p>
            <p>Last Name: {storedFormData.lastName}</p>
            <p>Email: {storedFormData.email}</p>
            <p>Work: {storedFormData.work}</p>
          </div>
        )}

        {compressedImageDataURL && (
          <div id="wrap">
            <img
              src={compressedImageDataURL}
              alt="Compressed"
              className="mt-4"
            />
          </div>
        )}
      </div>
    </>
  );
}
