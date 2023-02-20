import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

type Props = {};

const Contribute = (props: Props) => {
  return (
    <div className="container flex min-h-screen flex-1 items-center justify-center">
      <div className="space-y-8">
        {/* <button>{t('change-locale', { changeTo })}</button> */}
        <h1 className="mx-auto max-w-xl text-center leading-[1.2em] md:text-2xl md:font-black">
          How can you contribute?
        </h1>
        <p className="leading-16 !important mx-auto mt-8 max-w-xl text-justify text-xl">
          Please share Tab Display with others and leave a review on the App
          Store. This will be of great help to me. If you wish, you can leave a
          small donation to support development.
        </p>
        <div className="flex justify-center p-10">
          <a href="https://buymeacoffee.com/enfpdev" target="_blank">
            <img
              className="rounded shadow-md"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              height="66"
              width="261"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
