import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", route: "/", id: 0 },
    { name: "Search", route: "/search", id: 1 },
    {
      name: "Login",
      route: "/login",
      id: 2,
    },
    {
      name: "Github",
      route: "https://github.com/tacolegs2004/movie-goers",
      id: 3,
      target: "_blank",
    },
  ];
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-100 h-[68px] sticky z-50 top-0 inset-x-0 lg:self-stretch">
      <header className="flex flex-row justify-between items-center relative">
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
              target={item.target ? "_blank" : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
