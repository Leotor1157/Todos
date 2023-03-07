import { useStore } from "@nanostores/react"
import { Link } from "react-router-dom"
import { ListStore } from "../stores/Liste.store"

export default function Accueil(){
    const{newList, lists} = useStore(ListStore)

    return (
        <>
            <h2>Mes Todos</h2>

            {lists.map((list, index) =>(

                <div className="todos" key={index}>
                    <h3>{list.name}</h3>
                    {/* <Link to="/Todolist">Petites Courses</Link> */}
                </div>
            ))}
           
         <br></br>

            <div>
                <button><Link to="/nouvelle-liste"> Nouvelle Liste </Link></button>
            </div>

        </>

    )
}