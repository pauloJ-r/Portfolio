import React from 'react';

const Button = (props) => {
  const { pdfLink } = props;

  // Se pdfLink estiver presente, renderiza um link; caso contrário, renderiza um botão normal
  if (pdfLink) {
    return (
      <a href={pdfLink} target="_blank" rel="noopener noreferrer" className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
      </a>
    );
  } else {
    return (
      <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
      </button>
    );
  }
}

export default Button;