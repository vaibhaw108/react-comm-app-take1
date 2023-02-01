import React from 'react';
import '../Row.css'

const Card= (props) =>  {
    console.log(props.isLarge)

    return (
        <div className='row_poster'>
            <img 
            key={props.id}
            className={props.isLarge?'row__posterLarge':'row__poster'}
            src={props.path + props.imgn}
            //src={'../img/' + props.id + '.jpg'}
            alt={props.altm}
            />
        </div>
    );
}

export default Card;
/*
<img 
key={movie.id}
onClick = {() => handleClick(movie.backdrop_path)}
className={isLarge?'row__posterLarge':'row__poster'}
src={base_url+movie.poster_path}
alt={movie.name}
/>
*/