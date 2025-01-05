import './App.css';
import React, {useState} from "react"; // este es el tema que se utiliza en este ejemplo useState

function App() {

                                                 // Definir el estado para almacenar el resultado de la suma
  const[resultado, setResultado]=useState(null); // las podemos llamar como sea... el null es para 
                                                 // que cuando cargue la pantalla no aparezca ningun resultado

  const elemento = <h1 className='centrarTitulo'>Hola Mundo</h1>
  //const elemento2 = <h2>{suma(7, 5)}</h2> //El codigo de javscript debe ir entre llaves siempre

  
  const botonPulsado=()=>{           // creamos la funcion para que tenga el estado actual que esta en la linea 7 y 
                                     // luego la funcion que estamos haciendo para que actualice */}
    const result=suma(7 , 5);        // Hacemos la operacion creando una variable constante llamada result
    setResultado(result);            // Hacemos la operacion y se la aplicamos al setResultado que llamamos 
                                     // en la linea para que actualice resultado la cual se llama luego en  la linea 26
  };


  return <div>
    <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft: "10px"}}>Púlsame</button>
    <div>{elemento}</div>
    {/* <div>{elemento2}</div> */}
    <div>{resultado!=null && <h2>El resultado es: {resultado}</h2>}</div>   {/*acá usamos la variable de la linea 7*/}
  </div>
}

//alert visto anteriormente
// const botonPulsado=()=>{
//   alert(suma(7,5));
// };

function suma(a, b) {
  return a + b;
}

export default App;
