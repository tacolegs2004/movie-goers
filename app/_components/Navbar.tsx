import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", route: "/", id: 0 },
    { name: "Search", route: "/search", id: 1 },
    { name: "About", route: "/about", id: 2 },
    { name: "Login", route: "/login", id: 2 },
  ];
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-100 h-16">
      <div className="flex flex-row justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold ml-4 hover:font-extrabold hover:text-3xl transition-all"
        >
          MovieGoers
        </Link>
        <div className="flex flex-row justify-between items-center ml-4">
          {navItems.map((item) => (
            <Link
              href={item.route}
              key={item.id}
              className="text-xl font-bold ml-4 hover:font-extrabold hover:text-2xl transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
