import axios from 'axios'

// To make REST api (Spring Boot app) calls will be using axios
// > npm install axios



const API_URL='http://localhost:8085/pms/api/'
class AuthenticationService{

    loginDealer(dealer){
        return axios.post('http://localhost:8085/pms/api/login',dealer);
    }

}

//creates a Object
export default new AuthenticationService;