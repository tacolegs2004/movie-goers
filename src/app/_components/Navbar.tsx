import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", route: "/", id: 0 },
    { name: "Search", route: "/search", id: 1 },
    {
      name: "Login",
      route:
        "https://enough-penguin-19.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F",
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
    <header className="flex justify-between bg-slate-400 h-[68px] sticky w-[700px] md:w-full z-10 top-0">
      <Link
        href="/"
        className="text-2xl font-bold ml-4 mt-4 hover:font-extrabold hover:text-3xl transition-all"
      >
        MovieGoers
      </Link>
      <div className="flex flex-row justify-center items-center mr-48 gap-4">
        {navItems.map((item) => (
          <Link
            href={item.route}
            key={item.id}
            className="text-2xl font-bold ml-4 hover:font-extrabold hover:text-3xl transition-all"
            target={item.target ? "_blank" : ""}
            aria-label={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="mt-4 mr-4 hover:h-[5656px]" id="profile-pic">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Navbar;
