import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full">
        <ul className="flex py-2 mb-8 flex-row bg-slate-500 lg:text-2xl text-lg">
          <Link href="/" className="pl-12 pr-6 lg:px-52 lg:pr-48 md:pr-24">
            Home
          </Link>
          <Link
            href="/search"
            className="pl-48  pr-48 md:pr-64 md:pl-40 px-36 lg:pr-[340px] lg:pl-[300px]"
          >
            Search
          </Link>
          <Link href="/about" className="pr-36 pl-2 md:pr-64 md:pl-6">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
