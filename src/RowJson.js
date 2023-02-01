import React, { useEffect, useState } from 'react';
import './Row.css'
import axios from './axios';
import Backdrop from './Components/Backdrop'
import moviesJson from './Data/moviedata.json'

const base_url = "https://image.tmdb.org/t/p/original/";

function RowJson({title, fetchUrl, isLarge, rowpic} ) {
    const [movies, setMovies] = useState([]);
    const [backdrop, setBackdrop] = useState("");
    const [oview, setOview] = useState("");
    const base_url = "../pics/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
           } 
           fetchData();
         }, [fetchUrl]);

    const handleClick = (backdrop_path, overview) => {
        //console.log(backdrop_path);
        if (backdrop){
            setBackdrop("");
            setOview("");
        } else {
            setBackdrop(backdrop_path)
            setOview(overview)
            //console.log("backdrop_path set")
        }
    }
    
    function truncate (str, n){
      return str?.length > n ? str.substr (0, n-1) + "..": str;
    }

    function getImg (id){
      let retstr;
      retstr = '../pics/'+id+'.jpg';
      console.log(retstr);
      return retstr;
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {moviesJson.map((movie) => (
                <table><tr>
                <img 
                    key={movie.id}
                    onClick = {() => handleClick(movie.backdrop_path, movie.overview)}
                    className={isLarge?'row__posterLarge':'row__poster'}
                    src={base_url+rowpic}
                    alt={movie.name}
                />
                </tr>
                <tr className={isLarge?'row__poster_titleLarge':'row__poster_title'}>
                  {truncate(movie.overview,isLarge?22:14)}</tr>
                </table>
        ))}
            </div>
            {backdrop && <Backdrop path={base_url} picid={backdrop} overv={oview}/>}
        </div>
    );
}

export default RowJson;
/*
                    src='../pics/pic2.jpg'
*/