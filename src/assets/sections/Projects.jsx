import React from 'react'
import CardProjects from '../components/cardProjects/cardProjects'
import { Projetoinf } from '../constants'
import Button from '../components/Button-indigo/Button-indigo'
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
    <div id='Projetos'>
    <div className="flex flex-col gap-12 justify-center items-center w-full m-auto pt-28 pb-28 px-28 bg-gray-50 max-sm:px-6 2xl:px-96">
        <div className="flex items-center">
          <h1 className="font-poppins text-3xl pb-16" >Projetos</h1>
        </div>
        <div>
        {Projetoinf.slice(0,2).map ((card, index) => (
         <CardProjects
         key={index}
         img={card.img}
         titulo={card.titulo}
         informacao={card.informacao}
         github={card.github}
         demo={card.demo}
       />
        ))}
        </div>
      <div>
        <Button> 
        <Link to="/MaisProjetos">Mais Projetos</Link>
        </Button>
      </div>
      </div>
      </div>
  </>
  )
}

export default Projects
