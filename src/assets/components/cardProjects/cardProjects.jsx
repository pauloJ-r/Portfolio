import React from 'react'

const cardProjects = (props) => {
  return (
    <div className='max-sm:flex-col max-sm:gap-8 max-sm:px-3 max-sm:py-3 max-sm:pb-16 flex justify-center items-center rounded-lg shadow-sm  px-6 py-6 border mb-4 bg-white'>
        <div className='shadow-sm w-1/2 max-sm:w-full flex justify-center'>
          <img src={props.img} alt="" className='rounded-lg shadow-sm'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-1/2 max-sm:w-full'>
         <h3 className='font-poppins text-xl font-bold'>
            {props.titulo}
         </h3>
         <p className='font-mulish text-lg text-gray-700 text-center w-3/4 max-sm:w-full'>{props.informacao}</p>
        <div className='flex flex-wrap gap-4'>
         <a href={props.github} className='flex gap-2 justify-center items-center px-4 py-2 font-mulish text-[16px]  text-gray-600 font-bold rounded-lg shadow-lg' target='blank'> Code
         <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
         </a>
         <a href={props.demo} className='flex gap-2 justify-center items-center px-4 py-2 font-mulish text-[16px]  text-gray-600 font-bold rounded-lg shadow-lg' target='blank'> Demo
         <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor"></path></svg>
         </a>
        </div>
        </div>
      
    </div>
  )
}

export default cardProjects
