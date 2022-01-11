function AppDePrueba() {  //tecnologia jsx. javascript syntax extension. muestra html pero tiene todas las funciones de js
  //todas las funciones tienen return

  //todos los elementos SI O SI, tienen que tener apertura y cierre. Las que solo son de apertura, tienen que tener cierre en la llave de apertura, de este modo ---> (</>)
  //Dentro del return de la funcion app, no se pueden hacer funciones, si quiero hacer tiene que ser dentro de la funcion APP, pero antes del return.
  //para escribit codigo js dentro de la parte de HTML, tengo que poner {}.

  const edad = 18
  //por ternarios, es la unica forma de tener condicionales y evaluaciones, como esta escrito abajo con lo de mayor a 18
  return (

    
    <>
    {edad >= 18 ? `sos mayor de edad` : `No sos mayor de edad`}
    <div className="App">
      {1 + 1}
      1 + 1
      <h1>{`hola mundo`.toUpperCase()}</h1>
      <p>un parrafo</p>      
    </div>
    <div className="hola">
      <p>esto es la variable edad: {edad}</p>
    </div>
    </>
  )
}

export default AppDePrueba

/*
Esto daría error, de modo que solo puede haber un elemento padre, esto se soluciona, encapsulando todo en un div. Como en el código de arriba. Como es desprolijo, poner muchos div, se pueden poner solo las 
llaves

function App() {  //tecnologia jsx. javascript syntax extension. muestra html pero tiene todas las funciones de js
  //todas las funciones tienen return
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <p>un parrafo</p>      
    </div>
    <div className="hola">
      <p>un parrafo</p>
    </div>
  )
}
*/



//http://localhost:3000

//npm run dev, para ver la pagina 
