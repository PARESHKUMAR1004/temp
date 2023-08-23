import axios from 'axios'

// To make REST api (Spring Boot app) calls will be using axios
// > npm install axios

/*
  Axios, which is a popular library is mainly used to send asynchronous 
  HTTP requests(GET,POST,PUT,DELETE) to REST endpoints. 
This library is very useful to perform CRUD operations.
This popular library is used to communicate with the backend. 
Axios supports the Promise API, native to JS ES6.
Using Axios we make API requests in our application. 
Once the request is made we get the data in Return, and then we use this data in our React APPL. 

> npm install axios

*/
// Service class interacts with REST API

const API_URL='http://localhost:8085/pms/api/'

export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';
class AuthenticationService{

    static setSessionAttribute(key,value){
      localStorage.setItem(key,value);
    }


/*
    The async function declaration creates a binding of a new async function to a given name. 
The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior 
to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
They are not coordinated with each other, meaning they could occur simultaneously or not 
because they have their own separate agenda.   
*/ 
static async login(dealer) {
    try {
      const response = await axios.post('http://localhost:8085/pms/api/login', dealer);
      console.log('SAPI response:', response.data +"Hello"+response.data.success); 
      if (response.data === true) {
        // Call the setSessionAttribute method to store the session token or user info
        this.setSessionAttribute('sessionToken', response.data.sessionToken); // Adjust as needed
        return true; // Return true for successful login
      } else {
        return false; // Return false for unsuccessful login
      }
    } catch (error) {
      console.error('Login error', error);
      throw new Error('An error occurred during login.');
    }
  }



  static async registerDealer(dealer) {
    try {
      const response = await axios.post('http://localhost:8085/pms/api/register', dealer); // Adjust the API endpoint
      return response.data;
    } catch (error) {
      console.error('Registration error', error);
      throw new Error('An error occurred during registration.');
    }
  }

  // Service method to get RESTAPI of dealers Information
  static async getDealerInfo() {
    return axios.get('http://localhost:8085/pms/api/dealers')
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching dealer info:", error);
        throw error;
      });
  }

  // Session
  /*
 * A session is a group of user interactions with your website that take place 
  within a given time frame. 
 * For example a single session can contain multiple page views, events, 
  social interactions, and ecommerce transactions.
 * */
  static registerSuccessfulLogin(username) {   
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    console.log("First"+username);
   
 }

 static isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
}

static getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
  // console.log("Second"+user);
    if (user === null) return ''
    return user
  }

  static logout() {
     
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
}
  


}

//creates a Object
export default AuthenticationService;