import React, { useEffect, useState } from "react";

type ShortcutItem = {
  key: {};
  children: string[];
};

type Props = {};

const Usage = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <div className="container flex flex-1 flex-col">
      <div className="mt-24 flex flex-col justify-evenly space-y-8">
        {/* <button>{t('change-locale', { changeTo })}</button> */}
        <>
          <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-[1.2em]">
            How To Use
          </h1>
          <p className="leading-16 !important mx-auto mt-8 max-w-xl text-center text-xl opacity-70"></p>
        </>
      </div>
    </div>
  );
};

export default Usage;
