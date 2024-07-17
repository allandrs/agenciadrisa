import React from "react";
import "../style/header.css";
import Image from "../../public/vecteezy_iso.png";
import Logo from "../../public/ARI.png";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="bg-red-50 min-h-128 w-full">
        <div className="flex justify-between border-b border-gray-400">
          <a href="/" className="flex-initial ml-8">
            <img
              src={Logo}
              alt="logo"
              className="flex w-[100px] items-start"
            />
          </a>

          <nav className="flex justify-between items-center">
            <ul className="flex gap-4 place-content-center font-semibold">
              <li>
                <a href="#" className="hover:text-blue-800">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">Serviços</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">Clientes</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">Sobre nós</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800">Planos</a>
              </li>
            </ul>
          </nav>
          
          <div className="w-[150px] flex items-center">
            <button className="bg-indigo-600 text-white font-semibold rounded-md w-28 h-8 mr-8">
              Contate-nos
            </button>
          </div>
        </div>

        <div className="flex justify-between ml-8">
          <div>
            <div className="">
              <h1 className="text-3xl font-extrabold pt-6">
                <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2  text-nowrap text-[27px] ">
                  Nós criamos o Sistema
                  <br />
                  ideal para seu <br /> negócio
                </span>
              </h1>
              <p className="pt-6">
                Seu parceiro de confiança para entrega garantida de software.
              </p>
            </div>
            <div className="flex space-x-2 pt-6">
              <button className="bg-indigo-600 text-white text-sm rounded-md w-28 h-7">
                Começe agora
              </button>
            </div>
          </div>
          <div>
            <img src={Image} className="" alt="imagem de cabeçalho" />
          </div>
        </div>
      </header>
    </>
  );
}
