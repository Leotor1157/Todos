import { useStore } from '@nanostores/react'
import { ajouter, modifierText, supprimer, TodoStore } from '../stores/TodoList.store'


export default function TodoList(){
    const{text, todos}= useStore(TodoStore)

    return(
        <>
        <h2>{text}</h2>

        <input value={text} type="text" onChange={(e)=> {
            modifierText(e.currentTarget.value)
        }}/>
        <button onClick={ajouter}>+</button>

        {todos.map((todo, index) =>(
            <li key={index}>
                Course n°{index + 1} : {todo} <br></br>
                <button onClick={ () => {
                    supprimer(index)
                }
                }>Supprimer</button>
            </li>
        ))}

        </>
    )
}

