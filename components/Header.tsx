import React from "react";
import viteSvg from "../public/vercel.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-5 text-xl lg:text-md">
      <a href={"/"}>
        <div className="flex items-center gap-2 font-semibold">
          <Image src={viteSvg} className="w-6" alt="JVS" /> Coisa
        </div>
      </a>
      <div>
        {true ? (
          <a
            href={"/publicar"}
            className="py-1 px-2 text-white rounded-md bg-orange lg:px-6"
          >
            Publicar
          </a>
        ) : (
          <p className="font-medium">Contatos</p>
        )}
      </div>
    </header>
  );
}
