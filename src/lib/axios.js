import axios from "axios";

const axiosServer = axios.create({
  baseURL: "https://api.mediastack.com/v1",
  params: {
    access_key: "eb722bb237f3e8fa71bc1fb7fe7a0810",
    sort: "published_desc",
    limit: 100,
    countries: "in,us,gb,ae,pt,no,jp,au,il,sa,kr",
    languages: "en,-de",
  },
});

export default axiosServer;
