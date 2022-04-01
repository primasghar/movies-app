import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

const instance = axios.create();

instance.defaults.headers.common.Accept = "application/json";

export default instance;
