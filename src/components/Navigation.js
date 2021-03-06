import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHamburger, faSearch } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
    const [toggleButton, setToggleButton] = useState(false);
    return (
        <>
            <nav className="d-flex-1">
                <div className="logo">Movie App</div>
                <div className="search"><input type="text" placeholder="Enter movie name...." /><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
                {toggleButton ? <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/favourite">Favourite</NavLink></li>
                </ul> : null}
                <div id="bars" onClick={() => setToggleButton(!toggleButton)} >
                    <FontAwesomeIcon icon={toggleButton ? faHamburger : faBars} />
                </div>
            </nav>
        </>

    )
}

export default Navigation
