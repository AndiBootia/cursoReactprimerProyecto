function Header(){

    /*const {numeros} = props
    const {toma1valor} = props
    console.log(numeros)
    const pasarAlPadre = 5
    toma1valor(pasarAlPadre)*/
    return(
        <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">
            Seguimiento pacientes {" "}
            <span className="text-indigo-600">Veterinaria: </span>{" "}
            <span className="text-indigo-900">Santi Prieto</span>
        </h1>

    ) 
}

export default Header;