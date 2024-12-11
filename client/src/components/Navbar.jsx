import { useState, useEffect } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, [getToken]);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to={"/"} className="flex items-center text-2xl font-bold">
        <Image src={"logo.png"} alt={"lama logo"} w={32} h={32} />
        <span className="px-2">lamalog</span>
      </Link>

      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((pre) => !pre)}
        >
          {open ? "X" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col gap-7 font-medium text-lg  items-center justify-center absolute 
          top-16 transition-all ease-in-out bg-color ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"} href="/">
            Home
          </Link>
          <Link to="#">Trending</Link>
          <Link to="#">Popular</Link>
          <Link to="#">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="#">Trending</Link>
        <Link to="#">Popular</Link>
        <Link to="#">About</Link>

        {/* SIGN-IN */}
        <header>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
