import React from "react";
import { useImperativeHandle, forwardRef, useRef } from "react";

import Aboutus from "../../public/undraw_building_websites_i78t.svg"

const About = forwardRef((props, ref) => {

    const compRef = useRef();
    useImperativeHandle(ref, () => ({
      scrollIntoView: () => {
        compRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    })); 

    return (
        <>
            <div id="about" className="flex h-[950px] md:h-[600px] bg-[#38393c]" ref={compRef}> 
                <div className="mx-8 flex flex-col md:flex-row justify-center text-left">
                    
                    <div className="md:w-1/2 flex flex-col justify-center pt-2">  
                        <div>
                            <h1 className="text-3xl font-bold text-[#06d2dd]">Sobre <span className="text-white">nós</span></h1>
                        </div>
                        <p className="text-gray-400 mt-5">
                        Na <span className="text-[#06d2dd] font-bold">Agência DRISA</span>, somos apaixonados por criar experiências digitais que <span className="text-white font-bold">transformam negócios.</span> Com uma equipe de especialistas em design e desenvolvimento de sites, nossa missão é entregar sites e design do seu sistema que não apenas impressionam visualmente, mas também geram resultados concretos.
                        </p>

                        <p className="mt-5 text-gray-400">
                            <span className="text-white font-bold ">Acreditamos que um visual (Front-End) bem-feito é a base para o sucesso online.</span> Por isso, trabalhamos lado a lado com nossos clientes para entender suas necessidades e traduzir suas ideias em soluções personalizadas, inovadoras e otimizadas para performance. Do design à entrega final, garantimos que cada detalhe esteja alinhado aos seus objetivos de negócio.
                        </p>
                    </div>

                    <div className="flex items-center justify-center mb-10 md:w-1/2 mt-8 md:mt-0">
                        <img src={Aboutus} className="relative w-96 animate-pulse" alt="" />
                    </div>

                </div>
            </div>
            

        </>
    )

})

export default About;

