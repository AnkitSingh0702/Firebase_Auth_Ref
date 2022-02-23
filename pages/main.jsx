import Link from "next/link";
import React from "react";
import { useAuth } from "../Context/AuthContext";
import LoggedIN from "./LoggedIN";
function Main() {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover bg-slate-800 ">
      <div className="border-2 bg-white flex flex-col  my-auto items-center bgimg bg-cover rounded-xl  px-10 py-11 shadow-2xl ">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png"
          className="object-contain w-10 bg-none"
        />
        <br />
        <h1 className=" mt-17 font-semibold">Sign in With your Goggle account</h1>
        <div>
          <Link href="./LoggedIN" passHref>
            <button
              className="mt-8 bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-20  rounded-2xl "
              onClick={() => signInWithGoogle()}
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
