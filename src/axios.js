import axios from "axios";

const  instance = axios.create({
    //baseURL: "https://api.themoviedb.org/3"
    baseURL: "https://cwbucket01.s3.amazonaws.com"
});

export default instance;