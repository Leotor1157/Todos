import { useStore } from "@nanostores/react"
import { ajouter, modifierText, ListStore } from "../stores/Liste.store"

export default function Liste(){
    
    const{newList}= useStore(ListStore)

    return(

        <>
        <h2>Nouvelle Liste</h2>
    
        <input value={newList} type="text" onChange={(e)=> {
            modifierText(e.currentTarget.value)
        }}/>
        <button onClick={ajouter}>Créer</button>
    
        </>

    )



}