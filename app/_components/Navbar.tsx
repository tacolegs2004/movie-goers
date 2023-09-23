"use client";
import Link from "next/link";
// import { useState } from "react";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleIsActive = () => {
  //   setIsActive((prev) => !prev);
  // };

  return (
    <>
      <header className="text-lg mb-6 sticky w-screen p-2 bg-slate-600">
        <nav>
          <Link href="/" className="flex items-center ml-4 -mb-9">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MovieGoers
            </span>
          </Link>
          <ul className="flex flex-row justify-end gap-16 mr-8">
            <li className="hover:bg-slate-700 p-2 rounded-lg -mr-8">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-slate-700 p-2 rounded-lg -mr-12">
              <Link href={"/search"}>Search</Link>
            </li>
            <li className="hover:bg-slate-700 p-2 rounded-lg">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
