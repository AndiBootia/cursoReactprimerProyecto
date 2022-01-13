const Error = ({children}) => { //estoy pasando el prop mensaje que tengo en formulario, aquí. En children, se va a almacenar, todo lo que le pase al componente
    return (
        <div className='bg-blue-500 rounded-lg shadow-md p-1 w-FULL mb-10 text-center'>
                    <p className='text-white'>{children}</p>
        </div>
    )
}

export default Error
