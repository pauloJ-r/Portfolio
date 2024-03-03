import React from 'react'
import CardProjects from '../components/cardProjects/cardProjects'
import { Projetoinf } from '../constants'

const Projects = () => {
  const Projetoinf =[
    {
    img: Termo,
    titulo: "Jogo Termo",
    informacao: "Este é o projeto de conclusão da disciplina de Programação Imperativa do Professor Allan Diego Silva Lima do IFPE Campus Igarassu, O projeto consiste em o jogo termo, implementado utilizando as tecnologias Svelte, HTML5 e CSS3.", 
    github: "https://github.com/pauloJ-r/ProjetoTermo", 
    demo: "https://projeto-termo.vercel.app/" 
  },
  {
    img: Recifart,
    titulo: "Recifart",
    informacao: "Recifart é um projeto que conecta empresas a pontos de coleta e oferece um marketplace integrado para artesãos, promovendo eficiência na gestão de resíduos e ampliando a visibilidade e recursos para os criativos envolvidos.", 
    github: "https://github.com/pauloJ-r/Projeto-recifArt", 
    demo: "https://recifartbr.vercel.app/" 
  },
  {
    img: Portifolio,
    titulo: "Portifolio",
    informacao: "Meu portfólio, é um desenvolvido com React, Tailwind CSS e Vite, oferece uma experiência web fluida e eficiente. Destacando-se pela responsividade, cada seção é gerenciada dinamicamente com React, simplificando a manutenção e proporcionando uma interatividade suave. A estilização é precisa e moderna, graças ao Tailwind CSS, mantendo o código limpo e fácil de entender.", 
    github: "https://github.com/pauloJ-r/Portfolio", 
    demo: "https://paulojunior.vercel.app/" 
  },
  ]
  return (
    <>
    <div id='Projetos'>
    <div className="flex flex-col gap-12 justify-center items-center w-full m-auto pt-28 pb-28 px-28 bg-gray-50 max-sm:px-6 2xl:px-96">
        <div className="flex items-center">
          <h1 className="font-poppins text-3xl pb-16" >Projetos</h1>
        </div>
        <div>
        {Projetoinf.map ((card, index) => (
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
      </div>
      
      </div>
  </>
  )
}

export default Projects
