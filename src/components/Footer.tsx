import React from "react";
// import AppStoreBadge from "../components/AppStoreBadge";
import Link from "next/link";

type Props = {};

type LinkLabel = {
  title: string;
  link: string;
};

type LinkListProps = {
  title: string;
  links: LinkLabel[];
};

const mailAddress = "contact@enfpdev.com";

const LinkList = (props: LinkListProps) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-lg font-bold">{props.title}</div>
      {props.links.map((link) => (
        <Link key={link.title} href={link.link} className="text-lg">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  const mailTo = `mailto:${mailAddress}?${"To Tab Display"}=!&body=${""}`;

  return (
    <div className="w-full text-center">
      <div className="md:grid md:w-full md:grid-cols-3">
        <div className="flex w-full">
          <LinkList
            title="Product"
            links={[
              { title: "Pricing", link: "/pricing" },
              { title: "How To Use", link: "/usage" },
            ]}
          />
        </div>
        <div className="flex w-full">
          <LinkList
            title="Connect"
            links={[
              { title: "Contact", link: mailTo },
              { title: "Contribute", link: "/contribute" },
            ]}
          />
        </div>
        <div className="flex w-full">
          <LinkList
            title="About"
            links={[
              { title: "Tab Display", link: "/about" },
              {
                title: "Privacy Policy",
                link: "https://www.notion.so/enfp-dev-studio/Terms-Conditions-b3413f7ae65d4b5ab60bacd1fe7f590a?pvs=4",
              },
              {
                title: "Terms of Use",
                link: "https://www.notion.so/enfp-dev-studio/Privacy-Policy-abd2ac45e0884c1a848420426a383983?pvs=4",
              },
            ]}
          />
        </div>
      </div>
      <p className="my-6 text-sm md:mt-24">
        &copy; Copyright ENFP-Dev-Studio {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
