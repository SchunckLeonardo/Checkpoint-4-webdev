import { NavLink } from "react-router-dom"
import './assets/header.css'

function Nav() {
    return (
        <>
            <header className="header" >
                <h2>Bixos</h2>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="produtos">Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="sobre">Sobre</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Nav