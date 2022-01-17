import React from 'react'
import {useState, useEffect} from 'react'
//estoy importando estos hooks
import Error from './Error'
//py padding y, me separa de los bordes de arriba y abajo del div
//px padding x, me separa de los bordes de derecha e izquierda del div


const Formulario = ({pacientes, setPacientes, paciente, setearPacienteSeleccionado}) => {   


const [nombre, setNombre] = useState('') // cada uno es un atributo del objeto 
const [propietario, setPropietario] = useState('')
const [email, setEmail] = useState('')
const [alta, setAlta] = useState('')
const [sintomas, setSintomas] = useState('')

const [error, setError] = useState(false)

const randomIdGenerator = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2) //substring saca los primeros 2 digitos
    const idRandom = fecha + random
    
    return idRandom
    
    }

const handleSubmit = (e) => { //siempre que aprete el submit, se va a ejecutar esta funcion, por lo cual, si esta todo bien, va a ser false el error y no se va a mostrar la alerta
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

 if(paciente.id){
    //editando registro
    objetoPaciente.id = paciente.id //esto es porque el paciente que selecciono no tiene el id, entonces se lo pongo

    const pacientesActualizados = pacientes.map((pacienteState) =>  //Estoy devolviendo un ARRAY NUEVO. Cuando encuentre el id igual, va a retornar el objeto nuevo, dentro del state (todos los states de arriba, que conforman un objeto)
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState) //Itero sobre los pacientes que tengo registrados, si en el que estoy, tiene el mismo ID que el paciente que voy a actualizar
        // se devuelvo el objetoPaciente que es el objeto modificado, sino devuelvo tal cual está el pacienteState, porque "no es el que me interesa"       
          
    setPacientes(pacientesActualizados) 
    setearPacienteSeleccionado({}) //vuelvo a dejarlo vacío, para que no tenga ningun paciente en memoria seleccionado y volver al agregar paciente normal
    
}else {

    //nuevo registro
    objetoPaciente.id = randomIdGenerator() //genero el id aca, para que no se genere cuando aprieto en editar
    setPacientes([...pacientes, objetoPaciente]); //toma una copia del viejo array de pacientes y le mete al final el objetoPaciente
    
} 
 //reiniciar el form
 setNombre('')
 setPropietario('')
 setEmail('')
 setAlta('')
 setSintomas('')
} 

useEffect(() => {    
    if(Object.keys(pacientes).length > 0){ //Object.keys(...) sirve para ver lo que hay en el array
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)            
    }    
}, [paciente])

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
                { error && <Error><p>Todos los campos son obligatorios</p></Error> //si error es true, se le pasa como children, el parrafo
              
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
                    
            <input value={paciente.id /* existe un id de paciente? osea tiene algo seleccionado el editar?*/? "editar" : "enviar" } type="submit" className='bg-indigo-600 rounded p-1 w-full text-white shadow-md uppercase font-black hover:font-extrabold cursor-cell transition-opacity'/>


            </form>

    
        </div>
    )
}

//w-full, toma todo el ancho de donde este contenido

export default Formulario
