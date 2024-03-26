"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Expense from "./Expense";
import HomeDashboard from "./HomeDashboard";
import Transcation from "./Transcation";
import Income from "./Income";
import Login from "../login";

export default function Dashboard() {
  const { storedFormData, compressedImageDataURL } = useContext(GlobalContext);
  const [view, setView] = useState("dashboard");
  const { storedExpenseData, signoutData } = useContext(GlobalContext);

  //   console.log(storedFormData, "amit");

  return (
    <>
      {storedFormData ? (
        <div className="min-h-screen bg-[#ebeef2]">
          <div className="drawer lg:drawer-open lg:p-10 min-h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col py-5 px-8  border-[3px] border-white lg:ml-10 rounded-3xl bg-[#fdfefe]">
              {/* All page content here */}

              {view === "income" ? (
                <Income></Income>
              ) : view === "expenses" ? (
                <Expense></Expense>
              ) : view === "transaction" ? (
                <Transcation></Transcation>
              ) : (
                <HomeDashboard></HomeDashboard>
              )}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>

            <div className="drawer-side h-full rounded-3xl border-[3px] border-white">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-72 min-h-full bg-[#fdfefe]  text-black">
                {/* Sidebar content here */}
                <div className="flex items-center p-2 space-x-4">
                  <img
                    src={compressedImageDataURL}
                    alt="user image"
                    className="w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-black">
                      {storedFormData.firstName} {storedFormData.lastName}
                    </h2>
                    <span className="flex items-center space-x-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline text-black"
                      >
                        {storedFormData.email}
                      </a>
                    </span>
                  </div>
                </div>
                <div className=" pt-7">
                  <ul className="pt-2 pb-4 space-y-2 text-sm pl-2">
                    <li
                      onClick={() => {
                        setView("dashboard");
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group"
                      >
                        <svg
                          class="w-5 h-5 text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 21"
                        >
                          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span class="flex-1 ms-4 whitespace-nowrap text-black">
                          Dashboard
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        setView("income");
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-coin text-black"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                          <path d="M12 7v10" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap text-black">
                          Income
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        setView("expenses");
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-cash text-black"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                          <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap text-black">
                          Expenses
                        </span>
                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          {storedExpenseData.length}
                        </span>
                      </a>
                    </li>
                    <li onClick={signoutData}>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group"
                      >
                        <svg
                          class="w-5 h-5 text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                          />
                        </svg>
                        <span class="flex-1 ms-4 whitespace-nowrap text-black">
                          Sign Out
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Login></Login>
        </>
      )}
    </>
  );
}
