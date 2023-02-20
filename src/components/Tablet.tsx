import Image from "next/image";
import React, { useEffect, useRef } from "react";
type Props = {};

const Tablet = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.loop = true;
      ref.current.onloadeddata = () => {
        ref.current?.play();
      };
    }
  }, [ref.current]);

  return (
    <div className="hidden w-full px-6 md:flex md:justify-start">
      <div className="device">
        <div className="device-surface-pro-2017 self-center">
          <div className="device-frame">
            <div className="absolute inset-2 items-center justify-center">
              <Image
                // fill={true}
                alt="Ray So"
                src="/assets/code-sample-right.webp"
                width={280}
                height={261}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "10%",
                  // backgroundColor: "red",
                }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Tablet;
