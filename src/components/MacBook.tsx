import React, { useEffect, useRef } from "react";
import Image from "next/image";
type Props = {};

const MacBook = (props: Props) => {
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
    <div className="hidden w-full md:flex md:justify-end">
      <div className="device">
        <div className="device-macbook device-spacegray">
          <div className="device-frame">
            <div className="absolute inset-2">
              <Image
                // fill={true}
                alt="Ray So2"
                src="/assets/code-sample-left.webp"
                width={280}
                height={261}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "10%",
                  // backgroundColor: "red",
                  // objectFit: "cover",
                }}
              ></Image>
            </div>
          </div>
          <div className="device-power"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MacBook;
