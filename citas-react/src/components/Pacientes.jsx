
const Pacientes = () => {
    return (
        <div>
           <div className='mt-6 bg-blue-200 ml-10 rounded-xl py-10 px-5 shadow-md'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}
                    <span className='font-normal'> Hook </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {" "}
                    <span className='font-normal'> Hook </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {" "}
                    <span className='font-normal'> correo@correo.com </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {" "}
                    <span className='font-normal'> 12/11/11 </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}
                    <span className='font-normal'> Dolor en pata derecha </span>
                </p>                
           </div> 
        </div>
    )
}

export default Pacientes
