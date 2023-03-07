import { useStore } from "@nanostores/react"
import { creerUser, modifierMail, modifierMdp, SubscriptionStore } from "../stores/Subscription.store"
import { Link, Navigate, redirect } from 'react-router-dom'

export default function Subscription(){
    const{isConnected, email, password} = useStore(SubscriptionStore)

    if (isConnected) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <>
            <h2>Inscription</h2>
            <input value={email} type="email" onChange={ (e)=> {
                modifierMail(e.currentTarget.value)
            }}/>
            <input value={password} type="password" onChange={ (e)=> {
                modifierMdp(e.currentTarget.value)
            }}/><br></br>
            <button onClick={creerUser}>S'inscrire</button>

            <br></br>

            <p>Vous avez déjà un compte ? <Link to="/connexion"> Connectez-vous ! </Link></p>
        </>

    )
}