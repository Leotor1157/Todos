import { useStore } from "@nanostores/react"
import { connectUser, modifierMail, modifierMdp, SubscriptionStore } from "../stores/Subscription.store"
import { Link, Navigate } from 'react-router-dom'

export default function Connexion(){
    const{isConnected, email, password} = useStore(SubscriptionStore)

    if (isConnected) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <>
            <h2>Connexion</h2>
            <input value={email} type="email" onChange={ (e)=> {
                modifierMail(e.currentTarget.value)
            }}/>
            <input value={password} type="password" onChange={ (e)=> {
                modifierMdp(e.currentTarget.value)
            }}/>
            <button onClick={connectUser}>Se connecter</button>

            <br></br>

            <p>Vous n'avez pas de compte ? <Link to="/inscription"> Inscrivez-vous ! </Link></p>
        </>

    )
}