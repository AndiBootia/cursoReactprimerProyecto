import React from 'react'
import {useState, useEffect} from 'react'
//estoy importando estos hooks
import Error from './Error'
//py padding y, me separa de los bordes de arriba y abajo del div
//px padding x, me separa de los bordes de derecha e izquierda del div


const Formulario = ({pacientes, setPacientes}) => {


const [nombre, setNombre] = useState(" ")
const [propietario, setPropietario] = useState(" ")
const [email, setEmail] = useState(" ")
const [alta, setAlta] = useState(" ")
const [sintomas, setSintomas] = useState(" ")

const [error, setError] = useState(false)

const handleSubmit = (e) => { //siempre que aprete el submite, se va a ejecutar esta funcion, por lo cual, si esta todo bien, va a ser false la alerta
 e.preventDefault()

 if([nombre, propietario, email, alta, sintomas].includes('')){
     console.log('Hay algun campo vacío')
     setError(true)
     return;
 }

 setError(false) //se vuelve a poner en false, para que la alerta se vaya

const objetoPaciente = {
    nombre,
    propietario,
    email,
    alta,
    sintomas
}

 setPacientes([...pacientes, objetoPaciente]); //toma una copia del viejo array de pacientes y le mete al final el objetoPaciente

//reiniciar el form


}

/*console.log(nombre) //muestra: " "

setNombre("Hook") //esta funcion no se usa de este modo

console.log(nombre)//muestra: hook*/


    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5' >
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='mt-5 text-center mb-6'>
                Añade Pacientes y {" "} <span className='text-indigo-600 font-bold text-lg'> Administralos </span>


            </p>

            <form className='bg-blue-200 shadow-md rounded-lg py-10 px-5 mb-10'
            onSubmit={handleSubmit}>
                { error && <Error><p>Todos los campos son obligatorios</p></Error>
              
                }
                    <div className='mb-3'>
                        <label htmlFor="mascota" className='block text-indigo-700 uppercase font-black'> Nombre mascota: </label>
                        <input 
                        id="mascota"                        
                        type="text" 
                        placeholder=' Nombre de la mascota' 
                        className='border-2 w-full p-1 mt-2 rounded-md'
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value) //ese e, es el evento, de onChange. con target, accedemos a lo que se modifica y con value al valor y lo vamos seteando en la variable
                    }
                        />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="propietario" className='block text-indigo-700 uppercase font-black'> Nombre propietario: </label>
                        <input id="propietario" type="text" placeholder=' Nombre del propietario' className='border-2 w-full p-1 mt-2 rounded-md'
                        value={propietario} 
                        onChange={(e) => setPropietario(e.target.value)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='block text-indigo-700 uppercase font-black'> Email propietario: </label>
                        <input id="email" type="email" placeholder=' Email del propietario' className='border-2 w-full p-1 mt-2 rounded-md'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="alta" className='block text-indigo-700 uppercase font-black'> Alta: </label>
                        <input id="alta" type="date" className='border-2 w-full p-1 mt-2 rounded-md'
                        value={alta} 
                        onChange={(e) => setAlta(e.target.value)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="sintomas" className='block text-indigo-700 uppercase font-black'> Describa Síntomas: </label>
                        <textarea id="sintomas" className='border-2 w-full p-1 mt-2 rounded-md' placeholder='Describe los síntomas'
                        value={sintomas} 
                        onChange={(e) => setSintomas(e.target.value)}/>
                    </div>
                    
            <input type="submit" className='bg-indigo-600 rounded p-1 w-full text-white shadow-md uppercase font-black hover:font-extrabold cursor-cell transition-opacity'/>


            </form>

    
        </div>
    )
}

//w-full, toma todo el ancho de donde este contenido

export default Formulario
