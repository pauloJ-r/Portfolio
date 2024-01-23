import React from 'react'
import Button from '../components/Button/Button'
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
      </div>
      
    </div>
  )
}

export default About
