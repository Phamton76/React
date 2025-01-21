import { useState } from "react"



export const ContadorApps = ({value}) => {

    const [Contador, setContador] = useState(value)

   function handleClick(value) {
    console.log(value)
   }
    return (
        <>
           <h1> Contador</h1>
           <p>{Contador}</p>
           <button onClick={handleClick}>
            Soy un botón
           </button>
        </>
    )
}