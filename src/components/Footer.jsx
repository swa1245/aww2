import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex  gap-12 h-screen bg-zinc-100 p-20">
      <div className="w-1/2 h-full flex justify-between flex-col">
        <div className="">
          <h1 className=" font-semibold tracking-tight text-zinc-900  text-9xl uppercase leading-none -mb-6 ">
            Eye-
          </h1>
          <h1 className="font-semibold text-zinc-900 tracking-tight text-9xl uppercase leading-none -mb-6 ">
            Opening
          </h1>
        </div>
        <div>
          <h1 className="text-5xl font-sans text-gray-700">OCHI</h1>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className=" text-zinc-900 font-semibold tracking-tight  text-8xl uppercase leading-none -mb-6 ">
          Presenataions
        </h1>
        <div className="font-mono mt-12 text-gray-700">
          <h1 className="text-4xl font-sans text-zinc-900  ">S :</h1>
          <a href="" className="block text-xl mt-6 underline">
            Facebook
          </a>
          <a href="" className="block text-xl underline">
            Facebook
          </a>
          <a href="" className="block text-xl underline">
            Facebook
          </a>
        </div>
        <div className="font-mono mt-12 text-gray-700">
          <h1 className="text-4xl font-sans text-zinc-900 ">L :</h1>
          <p className="w-[30%] mt-6 text-xl underline">
            202-1965 W 4th Ave Vancouver, Canada
          </p>
          <p className="w-[30%] mt-10 text-xl underline">30 Chukarina St Lviv, Ukraine</p>
        </div>
        <div className="font-mono mt-12 text-gray-700">
          <h1 className="text-4xl font-sans text-zinc-900 ">E :</h1>
          <p className="w-[30%] mt-6 text-xl underline">hello@ochi.design</p>
        </div>
        <div className="font-mono mt-20 text-gray-300 ">
          <p className="w-full mt-6 text-2xl">
            {" "}
            © ochi design 2025. Legal Terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
