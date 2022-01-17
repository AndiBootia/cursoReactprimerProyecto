import React from 'react'
import Pacientes from './Pacientes'
import { useEffect } from 'react'

//width ---> ancho

const ListadoPacientes = ({pacientes, newPaciente, eliminarPaciente}) => {

    /*useEffect(() => {
        if(pacientes.length > 0){
            console.log('se imprimio un nuevo paciente')
        }            
    }, [pacientes]) //cuando cambia este arreglo, se imprime lo del console.log*/ 

    useEffect(() => {
        
    }, [pacientes])
    
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
           
           {pacientes.map((paciente) => { //pasar el index como key, es una mala practica. Pacientes es el arreglo de todos los pacientes agregados
               return(                  
            <Pacientes  
                key={paciente.id}// cuando se itera y se muestran componentes en base a un arreglo, es necesario pasar un id único, sino da error de que se necesita un id unico para cada componente         
                paciente={paciente} //paciente que se esta ingresando en la lista que se muestra, se pasa a pacientes, porque necesita los datos, para rellenar el HTML
                setPaciente={newPaciente}
                eliminarPaciente={eliminarPaciente}
            />) //por cada elemento del array paciente (que es el que viene de la app), 
               
           })

           
              
}
           
           
           </div>
           
           
        </div>
    )
}

export default ListadoPacientes
