"use client";

import UserHome from "@/components/home";
import Login from "@/components/login";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const { view } = useContext(GlobalContext);
  // console.log(view);
  return (
    <main className=" min-h-screen">
      {view === "home" ? (
        <>
          <UserHome></UserHome>
        </>
      ) : view === "login" ? (
        <>
          <Login></Login>
        </>
      ) : null}
    </main>
  );
}
