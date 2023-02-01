import React from 'react';
import './Backdrop.css';

const Backdrop= (props) =>  {
    //console.log('in backdrop')
    console.log("in backdrop")
    console.log(props.overv)
    return (
        <div className="backdrop">
            <table>
                <tr><td>
                    <img className="backdrop" 
                    src={props.path + props.picid}
                    />
                </td>
                <td className='backdrop_description'>
                    {props.overv}
                </td>
                </tr>
            </table>
        </div>
    );
}

export default Backdrop;