import React from 'react'

import './style/navbar.css'
import logoCbs from '../img/cbs-logo-copy.svg'

const Navbar = () => {
    return(
        <div className='containerNav'>
            <img className='logo' src={logoCbs} alt="cbs-logo"/>
            <div className='textContainer'>
                <h2>PEDIDOS VAREJO</h2>
            </div>
        </div>
    )
}



export default Navbar;