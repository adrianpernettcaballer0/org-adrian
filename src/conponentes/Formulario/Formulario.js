import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = () =>{

    const manejareEnvio =(event)=>{
        event.preventDefault()
        console.log("manejar el envio", event)
        
    }
    return <section className ="formulario"> 
        <form onSubmit={manejareEnvio}>
            <h2>Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo ="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo ="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo ="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones Texto ="Crear" />
            <Boton>
            Crear
           
             
            </Boton>
       </form>
    </section>
}

export default Formulario