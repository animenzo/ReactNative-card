import axios, { AxiosInstance } from "axios"


const axiosInstance:AxiosInstance = axios.create({
    baseURL: "",
    timeout:5000,
    headers:{
        "Content-Type":"application/JSON"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = "Bearer token";
        return config;
        },
    (error)=>{
        if(error){
            return error.response.status(403)
        }
        
    }    
)
// error.res.status(400)

// axiosInstance.interceptors.response.use(
//     (config) => {
//         config.request.Authorization = "Bearer token";
//         return config;
//         },
//     (error)=>{
//         if(error){
//             return error.response.status(403)
//         }
//     }    
// )