import axios from "axios";


const axiosServer = axios.create({
    baseURL:"http://api.mediastack.com/v1",
    params: {
        'access_key': "eb722bb237f3e8fa71bc1fb7fe7a0810",
        'sort' : 'published_desc',
        'limit':100,
        country:"in",
        'languages' : 'en,-de'
    }
})


export default axiosServer