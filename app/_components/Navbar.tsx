// "use client";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", route: "/", id: 0 },
    { name: "Search", route: "/search", id: 1 },
    { name: "About", route: "/about", id: 2 },
  ];
  return (
    <>
      <header className="text-lg sticky w-full md:w-screen py-4 bg-slate-600">
        <nav>
          <Link href="/" className="flex items-center ml-4 ">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:pb-2">
              MovieGoers
            </span>
          </Link>
          <ul className="hidden lg:flex lg:flex-row lg:justify-end lg:gap-8 lg:mr-8">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="hover:bg-slate-700 lg:rounded-lg lg:-mt-8 lg:px-2"
              >
                <a href={nav.route}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
