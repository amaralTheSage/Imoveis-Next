import React from "react";
import viteSvg from "../../../public/images/vercel.svg";
import arrowIcon from "../../../public/images/arrow-icon.png";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={arrowIcon}
          className="mt-6 ml-2 lg:mt-12 lg:ml-8 lg:w-8"
          alt=""
        />
      </Link>
      <main className="flex flex-col items-center mt-24">
        <Image src={viteSvg} alt="" className="w-14 lg:w-20" />
        <p className="font-medium text-2xl mb-12 mt-4 lg:text-4xl">
          Coisa Janice
        </p>
        <form
          action=""
          className="flex flex-col items-center mx-3 gap-4 font-light text-xl lg:text-2xl"
        >
          <input
            type="email"
            placeholder="Email"
            className="border-[0.5px] border-orange py-2 px-3 rounded-t-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border-[0.5px] border-orange py-2 px-3 rounded-b-lg"
          />

          <Link
            href="/"
            className="text-center bg-orange text-white rounded-lg w-full py-2 mt-4 font-medium"
          >
            Entrar
          </Link>
        </form>
      </main>
    </>
  );
}

export default Login;
