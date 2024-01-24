import React from 'react'
import Button from '../components/Button/Button'
import { Figma, Vscode, Ps, Github, Windows } from '../components/image'
const About = () => {
  return (
    <div id='Sobre Mim'>
      <div className="flex flex-col justify-center items-center w-full m-auto pt-28 pb-28 px-28 min-h-screen max-sm:px-1 2xl:px-96">
      
      <h1 className="font-poppins text-3xl pb-16">Sobre Mim</h1>
      <div className='flex max-sm:flex-col max-sm:gap-8'>
      <div className='max-sm:flex-col max-sm:flex max-sm:items-center'>
       <div className='font-mulish text-lg text-gray-700 w-2/3 max-sm:w-5/6'>
        <div className='mb-3 pt-6 max-sm:text-justify'>
       Olá Meu Nome é Paulo Cabral da Silva Junior, tenho 23 anos, atualmente estou cursando o curso superior de Sistemas para internet no IFPE, Sou uma pessoa curiosa e apaixonada por <strong>tecnologia</strong>, sempre buscando aprender novas habilidades e estar atualizado com as tendências do mercado. também sou bastante <strong>proativo, comunicativo e organizado</strong>, estou em busca de oportunidades onde eu possa <strong>desenvolver</strong> meu conhecimendo e assim poder crescer nessa área.
       </div>
       </div>
      </div>
      <div className=' max-sm:flex max-sm:flex-col max-sm:items-center'>
       <h2 className='font-poppins pb-6 text-2xl mb-4'>Habilidades</h2>
       <div className='flex flex-wrap gap-4 max-sm:justify-center max-sm:w-5/6'>
        <Button>
          HTML5
        </Button>
        <Button>
          CSS
        </Button>
        <Button>
        JavaScript
        </Button>
        <Button>
          React       
        </Button>
        <Button>
          Git
        </Button>
        <Button>
        GitHub
        </Button>
        <Button>
        Aprendizagem social e emocional
        </Button>
        <Button>
         MySQL
        </Button>
        <Button>
          Tailwindcss
        </Button>
        <Button>
          Design Responsivo
        </Button>
       </div>
      </div>
      </div>
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className='font-poppins pb-6 text-2xl mb-4 text-center'>
          Ferramentas
        </h1>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Vscode}
            alt="Vscode"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Github}
            alt="Github"
            width={158}
            height={48}
          />
        <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Figma}
            alt="Figma"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={Ps}
            alt="Photoshop"
            width={158}
            height={48}
          />
             <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={Windows}
            alt="Windows"
            width={158}
            height={48}
          />
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default About
