import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex py-2 mb-8 flex-row bg-slate-500 lg:text-2xl text-lg">
        <Link href="/" className="px-24 lg:px-52">
          Home
        </Link>
        <Link href="/search" className="pl-16 pr-36 lg:px-52">
          Search
        </Link>
        <Link href="/about" className="pr-28 lg:px-48">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
