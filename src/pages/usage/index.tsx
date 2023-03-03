import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

type ShortcutItem = {
  key: {};
  children: string[];
};

type Props = {};

const Usage = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <div className="container flex min-h-screen flex-1 flex-col">
      <div className="mt-24 flex flex-col items-center justify-center space-y-8">
        <h1 className="max-w-3xl text-3xl font-semibold leading-[1.2em]">
          How To Use
        </h1>
        <div className="mt-12">
          <YouTube
            className="mt-12 outline-none"
            videoId="qtSTy58u57E"
            opts={{
              width: 800,
              height: 600,
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={() => {}}
          />
        </div>
        <div className="max-w-3xl p-2">
          <div className="space-y-4">
            <p className="mt-6 text-lg font-semibold">
              1. First, open the Tab Display app for Mac OS on your MacBook.
            </p>
            <p className="m-6 text-base">
              Click the "Connect" button in the tray menu to start the
              connection process.
            </p>
            <div className="my-4 flex justify-center">
              <Image
                alt=""
                src="/assets/howtouse_1.webp"
                width={320}
                height={100}
              ></Image>
            </div>
            <p className="m-4 text-base">
              Make sure to note the connection code displayed in the tray menu.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                alt=""
                src="/assets/howtouse_2.webp"
                width={320}
                height={100}
              ></Image>
            </div>
            <p className="mt-6 text-lg font-semibold">
              2. Then, open the Tab Display app on your Android tablet.
            </p>
            <p className="m-4 text-base">
              Enter the connection code from your MacBook and click "Connect".
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                alt=""
                src="/assets/howtouse_4.webp"
                width={640}
                height={480}
              ></Image>
            </div>
            <p className="mt-6 text-lg font-semibold">
              3. When the connection request appears on your MacBook, accept the
              connection request
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                alt=""
                src="/assets/howtouse_3.webp"
                width={300}
                height={300}
              ></Image>
            </div>
            <p className="mt-6">
              That's it! With Tab Display, you can easily use your Android
              tablet as a secondary display for your MacBook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
