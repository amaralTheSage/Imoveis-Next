import Image from "next/image";
import React from "react";
import viteSvg from "@/public/images/vite.svg"

function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-lg  shadow-inner drop-shadow-2xl p-8  lg:flex justify-between mt-7">
      <div className="flex flex-col items-center lg:flex-row   ">
        <Image src={viteSvg} className="w-12 lg:w-14" alt="JVS Imóveis" />
        <h4 className="text-2xl">Coisa Janice</h4>
      </div>

      <nav className="text-light-gray font-normal text-center flex flex-col gap-4 m-3 lg:text-right">
        <p>Contatos:</p>
        <a href="">WhatsApp: (53) 9984264893</a>
        <a href="">Email: vergarajanice@hotmail.com</a>
        <p className="text-light-gray">CRECI: 049330190</p>
        <a
          href={"/login"}
          className="text-dark-gray mt-4 text-3xl font-semibold lg:text-lg "
        >
          Admin Login
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
