import React from 'react'
import Button from '../components/Button/Button'
import { Paulo, Github, LinkedIn } from '../components/image'

const Home = () => {
  return (
    <div id="Inicio">
      <div className="flex justify-center items-center  bg-gray-50 min-h-screen scroll-mt-10">
      <div className="max-sm:flex-col-reverse max-sm:gap-10 flex justify-center items-center gap-20">
          {/* Ordem modificada para exibir a imagem ao lado do título */}
          <div className='flex flex-col gap-2 justify-center items-center'>
            <p className='font-poppins text-lg text-gray-700'>Olá eu sou o</p>
          <h1 className="font-poppins text-5xl font-bold">Paulo Junior 👋🏾</h1>
          <h2 className='font-poppins text-2xl text-gray-700'>Desenvolvedor Frontend</h2>
          <div className='flex justify-center items-center gap-4 mt-2'>
             <a href="https://github.com/pauloJ-r" target='blank'>
             <img className="w-6 h-6" src={Github} alt="" />
             </a>
             <a href="https://www.linkedin.com/in/paulojr-r/" target='blank'>
             <img className="w-6 h-6" src={LinkedIn} alt="" />
             </a>
             
             <Button pdfLink="src/document/PAULO CABRAL DA SILVA JUNIOR.pdf">
              Download CV
             </Button>
          
          </div>
          </div>
          <img src={Paulo} alt="" className="rounded-full w-42 h-42 max-sm:w-52" />
        </div>
      </div>
    </div>
  )
}

export default Home
