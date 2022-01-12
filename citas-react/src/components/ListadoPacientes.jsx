import React from 'react'
import Pacientes from './Pacientes'

//width ---> ancho

const ListadoPacientes = () => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen'>
           <h2 className='font-black text-3xl text-center mr-4'>Listado Pacientes</h2> 
           <p className='text-center mb-5 '>
                Administra tus {" "}
                <span className='text-indigo-600 font-bold text-lg'> Pacientes y Citas</span>
           </p>
           <div className='h-screen overflow-y-scroll md:mb-10'>
           <Pacientes/>
           <Pacientes/>
           <Pacientes/>
           <Pacientes/>
           <Pacientes/>
           </div>
           
           
        </div>
    )
}

export default ListadoPacientes
