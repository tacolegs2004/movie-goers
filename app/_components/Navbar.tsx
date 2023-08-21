import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="">
        <ul className="flex py-2 mb-8 flex-row bg-slate-500 lg:text-2xl text-lg">
          <Link href="/" className="px-24 lg:px-52 lg:pr-48">
            Home
          </Link>
          <Link
            href="/search"
            className="pl-24 md:pr-64 md:pl-40 pr-36 px-36 lg:pr-[340px] lg:pl-[300px]"
          >
            Search
          </Link>
          <Link href="/about" className="pr-24 md:pr-0">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
