import React from 'react'
import Button from '../components/Button-indigo/Button-indigo'
import { LinkedIn } from '../components/image'
const Contact = () => {
  return (
    <div id='Contato'>
      <div className="flex flex-col justify-center items-center w-full m-auto pt-28 pb-28 bg-white">
          <h1 className="font-poppins text-3xl pb-16" >Contato</h1>
          
<          div className='flex gap-12 justify-center items-center max-sm:flex-col'>
            <div className='flex gap-3 items-center'>
              <a className='flex gap-2 justify-center items-center px-2 py-2 rounded-full shadow-lg'href="https://www.linkedin.com/in/paulojr-r/"><img className="w-6 h-6" src={LinkedIn} alt="" />
              </a>
              <p className='font-poppins text-xl text-gray-600 max-sm:text-lg'>LinkedIn</p>
              </div>
              <div className='flex gap-3 items-center'>
              <a className='flex gap-2 justify-center items-center px-2 py-2 rounded-full shadow-lg'><ion-icon name="at-outline"></ion-icon>
              </a>
              <p className='font-poppins text-xl text-gray-600 max-sm:text-lg'>paulocabraldev@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
    
  )
}

export default Contact
