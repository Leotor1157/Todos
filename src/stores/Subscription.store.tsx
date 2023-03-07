import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { action, map } from "nanostores";
import { redirect } from "react-router";
import { firebaseAuth } from "../Lib/Firebase";


export const SubscriptionStore = map({
    email: "",
    password: "",
    isConnected: false,
})

export const modifierMail = action(SubscriptionStore, 'modifierMail', (store, lettreEntree:string) => {
    store.setKey('email', lettreEntree)

})

export const modifierMdp = action(SubscriptionStore, 'modifierMdp', (store, lettreEntree:string) => {
    store.setKey('password', lettreEntree)

})

export const creerUser = action(SubscriptionStore, 'creerUser', async(store)=> {
    const {email, password} = store.get()
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    store.setKey('isConnected', true)
    
})

export const connectUser = action(SubscriptionStore, 'connectUser', async(store)=> {
    const {email, password} = store.get()
    const result = await signInWithEmailAndPassword
    (firebaseAuth, email, password)
    store.setKey('isConnected', true)
})



// Une action "send" qui envoie l'email et le mot de passe à firebase ! ( deux fonc/ connexion / inscription)
// createUserWithEmailAndPassword
// signInWithEmailAndPassword