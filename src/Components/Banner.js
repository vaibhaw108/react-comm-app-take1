import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../axios';
import requests from '../requests';

//const Banner= (props) =>  {
function Banner()  {
    const [movies, setMovies] = useState([]);
    const bgimg = "url('/img/banner.jpg')"       
    //const bgimg = "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"

    function truncate (str, n){
        return str?.length > n ? str.substr (0, n-1) + "...": str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: BGIMG,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title"> Banner Info for Display </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>My Jobs</button>
                    <button className='banner_button'>News Sentiment</button>
                </div>
                <h1 className='banner_description'>{truncate(DESC,200)}</h1>
            </div>
            <div className='banner-fadeBottom'/>
        </header>
    );
}

export default Banner;

/*
                backgroundImage: 'url("https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg")',
*/

const BGIMG = "url('/img/banner2.jpg')" ;
//const DESC ="The Godfather is a trilogy of American crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo. The films follow the trials of the fictional Italian American mafia Corleone family whose patriarch, Vito Corleone, rises to be a major figure in American organized crime. His youngest son, Michael Corleone, becomes his successor. The films were distributed by Paramount Pictures and released in 1972, 1974, and 1990. The series achieved success at the box office, with the films earning between $430 and $517 million worldwide. The Godfather and The Godfather Part II are both seen by many as two of the greatest films of all time. The series is heavily awarded, winning 9 out of 28 total Academy Award nominations.";
const DESC ="The job market is the market in which employers search for employees and employees search for jobs. The job market is not a physical place as much as a concept demonstrating the competition and interplay between different labor forces. It is also known as the labor market."