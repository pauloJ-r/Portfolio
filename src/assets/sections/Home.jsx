import Typed from 'typed.js';
import React, { useEffect } from 'react';
import curriculo from '../documents/CV.pdf'
import Button from '../components/Button-indigo/Button-indigo'
import { Paulo, Github, LinkedIn } from '../components/image'

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Desenvolvedor Web', 'UX Design'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed('.animated-text', options);

    return () => {
      typed.destroy(); // Limpar a instância do Typed quando o componente for desmontado
    };
  }, []);
  return (
    <div id="Inicio">
      <div className="flex justify-center items-center  bg-gray-50 min-h-screen scroll-mt-10">
      <div className="max-sm:flex-col-reverse max-sm:gap-10 flex justify-center items-center gap-20">
          <div className='flex flex-col gap-2 justify-center items-center'>
            <p className='font-poppins text-lg text-gray-700'>Olá eu sou o</p>
          <h1 className="font-poppins text-5xl font-bold">Paulo 👋🏾</h1>
          <div>
      <h2 className='font-poppins text-2xl text-gray-700'>
        <span className='animated-text'></span>
      </h2>
    </div>
          <div className='flex justify-center items-center gap-4 mt-2'>
             <a href="https://github.com/pauloJ-r" target='blank'>
             <img className="w-8 h-8" src={Github} alt="" />
             </a>
             
             <a href="https://www.linkedin.com/in/paulojr-r/" target='blank'>
             <img className="w-8 h-8" src={LinkedIn} alt="" />
             </a>
             <a href={curriculo} target='blank'>
              <Button>
                Baixar CV
              </Button>
             </a>
          </div>
          </div>
          <img src={Paulo} alt="" className="rounded-full w-42 h-42 max-sm:w-52" />
        </div>
      </div>
    </div>
  )
}

export default Home
