import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {

    const [show,setShow] = useState(false)

    function handleToggle(){
         return setShow(!show)
    }


    return (
        <header>
            <div className="container">

                <div className="grid navbar-grid">

                    <div className="logo">

                        <NavLink to="/">

                            <h1>WorldAtlas</h1>

                        </NavLink>

                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        
                        <ul>
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="country"><li>Country</li></NavLink>
                            <NavLink to="about"><li>About</li></NavLink>
                            <NavLink to="contact"><li>Contact</li></NavLink>
                        </ul>

                    </nav>


                    <div className="ham-menu">

                        <button onClick={handleToggle}>

                            <GiHamburgerMenu />
                        </button>

                    </div>

                </div>

            </div>

        </header>
    )
}