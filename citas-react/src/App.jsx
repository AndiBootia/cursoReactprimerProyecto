import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
    //classname es en jsx
    //mx es el margen, moviendose en el eje x. my es el margen moviendose en el eje y
    //mt margin top
    //ml margin left, etc
    //mr margin right
    return (      
  
<div className="container mx-auto mt-20"> 
    <Header/> 
    <div className="mt-12 md:flex">
    <Formulario/>
    <ListadoPacientes/> 
    </div>      
    
</div>
      
    )
  }
  
  export default App