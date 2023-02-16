import React from "react";
// import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const AppBar = (props: Props) => {
  return (
    <div className="max-h-20 py-8">
      <div className="flex max-h-12 flex-row items-center">
        {/* <Logo></Logo> */}
        <div className="flex flex-1 flex-row justify-end space-x-8">
          <Link
            href="/about"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            About
          </Link>
          <Link
            href="usage"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            How To Use
          </Link>
          <Link
            href="/pricing"
            className="hidden self-center hover:cursor-pointer md:block"
          >
            Pricing
          </Link>
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Blog</a> */}
          {/* <a className="hidden md:block self-center hover:cursor-pointer">Help</a> */}
          {/* <Link href="/about" className="hidden md:block self-center hover:cursor-pointer">
            About
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
