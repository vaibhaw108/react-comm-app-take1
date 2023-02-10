import React, {useEffect, useState} from 'react';
import './Nav.css'

const base_url = "../logo/";

function Nav () {
    const [show, handleShow] = useState(false);
    /*
    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow (true);
            } else handleShow (false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    */
    const logopath = base_url + LOGO
    const avtar = base_url + AVTAR_LOGGEDIN
    //const logopath = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    return (
        <div className='nav'>
            <div><img className="nav_logo"
            src={logopath} alt="Logo"
            /> </div>
            <div >
            <table><tr>
                <td className='nav_link'> Home </td>
                <td className='nav_link'> New </td>
                <td className='nav_link'> Popular </td>
                <td className='nav_link'> Saved</td>
            </tr></table></div>
            <div><img className="nav_avatar"
            src={avtar} alt="Avtar"
            /></div>

        </div>
    );
}

export default Nav;

const LOGO = "logo2.png" ;
const AVTAR_LOGGEDIN = "avatar_loggedin2.jpg" ; //"avatar_loggedin.png" ;

/*
            <li className='nav_link'><a href='/home'>Home</a></li>

*/