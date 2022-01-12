import React from 'react'

//width ---> ancho

const ListadoPacientes = () => {
    return (
        <div className='md:w-1/2 lg:w-3/5 '>
           <h2 className='font-black text-3xl text-center mr-4 mb'>Listado Pacientes</h2> 
           <p className='text-center mb-6 m-5'>
                Administra tus {" "}
                <span className='text-indigo-600 font-bold text-lg'> Pacientes y Citas</span>

           </p>
           <div className='mt-6 bg-blue-200 ml-10 rounded-xl py-10 px-5 shadow-md'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}
                    <span className='font-normal'> Hook </span>
                </p>

           </div>
        </div>
    )
}

export default ListadoPacientes
