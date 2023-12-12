import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Navbar.css"


export default function Navbar(){
    const navigate = useNavigate()
    const handleTitle = () => {
        navigate('/')
    }
    return(
        <>
            <div style={{height: "5rem"}}>
            <button
            className="navBarTitle"
            onClick={handleTitle}
            >
            <h1 style={{float: "left", margin: "0"}}>Robert Edmonds</h1>
            </button>
            <div style={{float: "right"}}>
            <NavLink
            to="/"
            exact
            className="navBarLinks"
            // onClick={setActive(!active)}
            >
            Home
            </NavLink> 
            <NavLink
            to="/projects"
            exact
            className="navBarLinks"
            activeStyle={{ color: "black" }}
            >
            Projects
            </NavLink> 
            <NavLink
            to="/git"
            exact
            className="navBarLinks"
            activeStyle={{ color: "black" }}
            >
            Github
            </NavLink> 
            </div>
            </div>
        </>
    )
}