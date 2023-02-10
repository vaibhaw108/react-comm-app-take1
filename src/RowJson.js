import React, { useEffect, useState } from 'react';
import './Row.css'
import axios from './axios';
import Backdrop from './Components/Backdrop'
import moviesJson from './Data/moviedata.json'

//const base_url = "https://image.tmdb.org/t/p/original/";
const base_url = "https://cwbucket01.s3.amazonaws.com";

function RowJson({title, fetchUrl, isLarge, rowpic} ) {
    const [movies, setMovies] = useState([]);
    const [backdrop, setBackdrop] = useState("");
    const [oview, setOview] = useState("");
    //const base_url = "../pics/";
    //const axios = require('axios');
/*
    console.log("finalspaceapi");
    axios.get("https://finalspaceapi.com/api/v0/character/?limit=2")
  .then(function (response) {
    console.log(response.data);
  });
*/



console.log("fetch...");
fetch('https://finalspaceapi.com/api/v0/character/?limit=2')
    .then((response) => response.json())
    .then((json) => console.log(json));


  console.log("fetchUrl");
  console.log(fetchUrl);
  console.log("moviesJson");
  console.log(moviesJson);
    
    useEffect(() => {
        console.log("useEffect");
        async function fetchData(){
            const request = await axios.get('https://cwbucket01.s3.amazonaws.com/film/trending.json');
            setMovies(request.data.results);
            return request;
           } 
           fetchData();
         }, [fetchUrl]);
    console.log("movies");
    console.log(movies);
     
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
                <table><tbody><tr><td>
                <img 
                    key={movie.id}
                    onClick = {() => handleClick(movie.backdrop_path, movie.overview)}
                    className={isLarge?'row__posterLarge':'row__poster'}
                    src={base_url+movie.poster_path}
                    alt={movie.name}
                />
                </td></tr>
                <tr className={isLarge?'row__poster_titleLarge':'row__poster_title'}>
                  <td>{truncate(movie.overview,isLarge?22:14)}</td></tr>
                </tbody></table>
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