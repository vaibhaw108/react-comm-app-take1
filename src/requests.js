const API_KEY = "388d8f80ebeb589ef646469d3832970f" ;

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    getAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getDocum: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;