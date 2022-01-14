
const Pacientes = ({paciente, setPaciente}) => { //este paciente que recibe, viene de ListadoPacientes. Le va pasando a medida que itera
    const { nombre, propietario, email, alta, sintomas  } = paciente
    return (
        <div>
           <div className='mt-6 bg-blue-200 ml-10 rounded-xl py-10 px-5 shadow-md'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}
                    <span className='font-normal text-black'> {nombre} </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {" "}
                    <span className='font-normal'> {propietario} </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {" "}
                    <span className='font-normal'> {email} </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {" "}
                    <span className='font-normal'> {alta} </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}
                    <span className='font-normal'> {sintomas} </span>
                </p> 
                <div className="flex justify-between">
               <button type="button" className="py-2 px-10 bg-indigo-600 text-white rounded-md shadow-md mt-1 hover:font-extrabold hover:bg-indigo-700"
               onClick={() => setPaciente(paciente) //es con arrow function, porque le voy a pasar un parametro
            }>  
               EDITAR </button>
               <button type="button" className="py-2 px-9 bg-indigo-600 text-white rounded-md shadow-md hover:font-extrabold hover:bg-indigo-700"> ELIMINAR </button>
                </div>               
           </div> 
           
        </div>
    )
}

export default Pacientes
