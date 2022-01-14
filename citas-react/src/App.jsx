import {useState} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
    //classname es en jsx
    //mx es el margen, moviendose en el eje x. my es el margen moviendose en el eje y
    //mt margin top
    //ml margin left, etc
    //mr margin right

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    /*const toma1valor = ((valor) => {
        console.log(valor)
    })*/
    return (      
  
<div className="container mx-auto mt-20"> 
    <Header
    /*numeros={ 1 }
    toma1valor={toma1valor}*//> 
    <div className="mt-12 md:flex">
    <Formulario
    pacientes={pacientes} //estoy pasando la lista de pacientes a formulario
    setPacientes={setPacientes}/>
    <ListadoPacientes
    pacientes={pacientes}
    newPaciente={setPaciente} //setPaciente va desde aca(app), a ListadoPacientes, luego ahi se lee y se pasa como prop a pacientes y luego en pacientes, se lee.
    /> 
    </div>      
    
</div>
      
    )
  }
  
  export default App