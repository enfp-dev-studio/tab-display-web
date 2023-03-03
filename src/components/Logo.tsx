import Image from "next/image";

const Logo = () => {
  return (
    <Image
      // fill={true}
      alt="logo"
      src="/assets/logo.webp"
      width={40}
      height={40}
    ></Image>
  );
};

export default Logo;
