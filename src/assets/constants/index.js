import { Termo, Recifart, Portifolio } from '../components/image'
export let Links =[
  {id: 1,title:"Inicio"},
  {id: 2,title:"Sobre Mim"},
  {id: 3,title:"Projetos"},
  {id: 4,title:"Contato"},
];
export const Projetoinf =[
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