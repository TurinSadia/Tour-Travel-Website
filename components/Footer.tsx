import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-16 pt-28 bg-pattern bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col rounded-xl">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8  bg-primary rounded-t-xl">
          <div className="flex flex-wrap gap-20 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={"/"}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href={"/"} key={link}>
                      <Image src={link} alt="logo" width={22} height={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="regular-14 bg-secondary text-white py-2 px-8 rounded-b-xl justify-center text-center">
          {" "}
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
