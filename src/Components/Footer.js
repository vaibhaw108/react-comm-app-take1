import React from 'react';
import './Footer.css';

const base_url = "../logo/";

function Footer() {
    const home = base_url + "home.png"
    const fb = base_url + "fb.png"
    const twit = base_url + "twitter.png"
    const disc = base_url + "discord.png"
    
    return (

    <div className='footer'>
        <div><img className="footer_logo"
            src={home} alt="Logo" /> 
        </div>
        <div > 
            <table> 
                <tr>
                    <td className='footer_link'>  
                        <tr><a href='' className='footer_linksmall'> About US</a></tr>
                        <tr><a href='' className='footer_linksmall'> Blogs</a></tr>
                    </td>
                    <td> 
                        <tr><a href='' className='footer_linksmall'> New </a></tr></td>
                    <td> 
                        <tr><a href='' className='footer_linksmall'> Popular </a></tr></td>
                    <td> 
                        <tr><a href='' className='footer_linksmall'> MyList</a></tr></td>
                </tr>
            </table>
        </div>
        <div>
            <table><tr>
            <td><img className="footer_left" src={fb} alt="Logo" /> </td>
            <td><img className="footer_left" src={twit} alt="Logo" /> </td>
            <td><img className="footer_left" src={disc} alt="Logo" /> </td>
            </tr> </table>
        </div>
    </div>


  );
}

export default Footer;

