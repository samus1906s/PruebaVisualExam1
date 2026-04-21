import { Link } from "react-router-dom"

export default function Navbar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

            <Link className="navbar-brand" to="/">Mi Página</Link>




            <div className="collapse navbar-collapse" id="menu">

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/pokemon/1">Bulbasaur</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/pokemon/4">Charmander</Link>
                    </li>

                </ul>

            </div>

        </div>
    </nav>

    );
}