import React, { useEffect } from "react";
import CardProjects from "./assets/components/cardProjects/cardProjects";
import Button from "./assets/components/Button-indigo/Button-indigo";
import { Link } from 'react-router-dom';
import { Projetoinf } from '../src/assets/constants/index'
const MaisProjetos = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Rolagem para o topo quando o componente é montado
    }, []);
    return (

        <>
        <div className="flex w-full  p-4 bg-gray-50 pb-10">
                    <Button>
                        <Link to="/">Voltar</Link>
                    </Button>
                </div>
            <div className="flex flex-col justify-center items-center w-full m-auto pb-28 bg-gray-50 max-sm:px-6 2xl:px-96">

                

                <h1 className="font-poppins text-3xl pb-16" >Projetos</h1>

                <div>
                    {Projetoinf.map((card, index) => (
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
            </>
    );
}

export default MaisProjetos;