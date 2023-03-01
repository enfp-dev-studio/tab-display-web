import Logo from "./Logo";
import Link from "next/link";
import Menu from "./Menu";

const AppBar = () => {
  return (
    <div className="max-h-20 py-8">
      <div className="flex max-h-12 flex-row items-center">
        <Link href={"/"} className="flex flex-row">
          <Logo></Logo>
          <div className="ml-2 self-center text-lg font-semibold">
            Tab Display
          </div>
        </Link>
        <div className="flex flex-1 flex-row justify-end space-x-8">
          <Link
            href="usage"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            How To Use
          </Link>
          <Link
            href="/about"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            About
          </Link>

          {/* <Link
            href="/pricing"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            Pricing
          </Link> */}
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Blog</a> */}
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Help</a> */}
          {/* <Link href="/about" className="hidden md:block self-center hover:cursor-pointer">
            About
          </Link> */}
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
