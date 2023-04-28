 import "./ListaOpciones.css"
 const ListaOpciones = ()=>{

    const equipos =[
       "Programación",
        "Front End",
        "Data Science",
        "DevopsProgramación",
        "UX y Diseño",
        "Innvacion y Gestíon"

    ]
    return <div className ="lista-opciones">
        <label >Equipos</label>
        <select>
        { equipos.map((equipo, index)=> <option key={index}>{equipo}</option>
        )}
        
        </select>
    </div>
 }
 // asi quedria normamente el metodo de .map pero para codigo linpio se deja como esta en el metodo
 //{ equipos.map((equipo, index)=>{
//return <option key={index}>{equipo}</option>
//})}
 export default ListaOpciones