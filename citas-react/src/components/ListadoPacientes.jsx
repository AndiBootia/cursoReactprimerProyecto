import React from 'react'
import Pacientes from './Pacientes'

//width ---> ancho

const ListadoPacientes = ({pacientes, newPaciente}) => {
    
    return (

        
        <div className='md:w-1/2 lg:w-3/5 md:h-screen'>
        
           {//cambiar el titulo de la lista de pacientes, segun si hay o no pacientes, es un texto condicional
           pacientes.length !== 0 ? <>
           <h2 className='font-black text-3xl text-center mr-4'>Listado Pacientes</h2>
           <p className='text-center mb-5 '>
                Administra tus {" "}
                <span className='text-indigo-600 font-bold text-lg'> Pacientes y Citas</span>
           </p></> : <>
           <h2 className='font-black text-3xl text-center mr-4'>No hay pacientes registrados</h2>
           <p className='text-center mb-5 '>
                No hay pacientes registrados todavía...{" "}
                <span className='text-indigo-600 font-bold text-lg'>  ¡Comienza a agregar desde el formulario para visualizarlos debajo!</span>
           </p>
           </>} 
           
           <div className='h-screen overflow-y-scroll md:mb-10'>
           
           {pacientes.map((paciente) => { //pasar el index como key, es una mala practica
               return(                  
            <Pacientes  
                key={paciente.id}// cuando se itera y se muestran componentes en base a un arreglo, es necesario pasar un id único, sino da error de que se necesita un id unico para cada componente         
                paciente={paciente} //paciente que se esta modificando, se pasa a pacientes
                setPaciente={newPaciente}
            />) //por cada elemento del array paciente (que es el que viene de la app), 
               
           })

           
              
}
           
           
           </div>
           
           
        </div>
    )
}

export default ListadoPacientes
