import React from 'react'
//py padding y, me separa de los bordes de arriba y abajo del div
//px padding x, me separa de los bordes de derecha e izquierda del div


const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='mt-5 text-center mb-6'>
                Añade Pacientes y {" "} <span className='text-indigo-600 font-bold text-lg'> Administralos </span>


            </p>

            <form className='bg-blue-200 shadow-md rounded-lg py-10 px-5 mb-10'>
                    <div className='mb-3'>
                        <label htmlFor="mascota" className='block text-indigo-700 uppercase font-black'> Nombre mascota: </label>
                        <input id="mascota" type="text" placeholder=' Nombre de la mascota' className='border-2 w-full p-1 mt-2 rounded-md'/>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="propietario" className='block text-indigo-700 uppercase font-black'> Nombre propietario: </label>
                        <input id="propietario" type="text" placeholder=' Nombre del propietario' className='border-2 w-full p-1 mt-2 rounded-md'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='block text-indigo-700 uppercase font-black'> Email propietario: </label>
                        <input id="email" type="email" placeholder=' Email del propietario' className='border-2 w-full p-1 mt-2 rounded-md'/>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="alta" className='block text-indigo-700 uppercase font-black'> ALTA </label>
                        <input id="alta" type="date" className='border-2 w-full p-1 mt-2 rounded-md'/>

                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="sintomas" className='block text-indigo-700 uppercase font-black'> ALTA </label>
                        <textarea id="sintomas" className='border-2 w-full p-1 mt-2 rounded-md' placeholder='Describe los síntomas'/>

                    </div>
                    
            <input type="submit" className='bg-indigo-600 rounded p-1 w-full text-white shadow-md uppercase font-black hover:font-extrabold cursor-cell transition-opacity'/>


            </form>

    
        </div>
    )
}

//w-full, toma todo el ancho de donde este contenido

export default Formulario
