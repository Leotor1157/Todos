import { StrictMode } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppGlobalStyle } from '../styles/App.style'
import Subscription from './Subscription'
import Connexion from './Connexion'
import TodoList from './TodoList'
import Accueil from './Accueil'
import Liste from './Liste'



export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle></AppGlobalStyle>
      <BrowserRouter>
      <h1>Menu</h1>
      <div id="wrap">
        <ul className="navbar">
          <li><Link to="/connexion">Connexion</Link></li><br></br>
          <li><Link to="/inscription">Inscription</Link></li><br></br>
          <li><Link to="/todolist">TodoList</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/inscription" element={<Subscription/>} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/" element={<Accueil/>} />
        <Route path="/nouvelle-liste" element={<Liste/>} />

      </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
