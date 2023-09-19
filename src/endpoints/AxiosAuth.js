//Outsource JS library
import axios from "axios";
//Internal JS
//Component
//Pages
//CSS Imports

const axiosWithAuth = () => {
  const user = localStorage.getItem("user");
  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${JSON.parse(user).token}`,
   
      
      //Authorization:user.token,
    },
  });
};

export default axiosWithAuth;


