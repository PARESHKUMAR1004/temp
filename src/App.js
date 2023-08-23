import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Product from './components/Product';
import NavBar from './components/NavBar';
import DealerRegistration from './components/DealerRegistration';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct'


import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash,faEdit,faList,faHome, faSignIn,faSignOut,faCameraRetro,faBomb,faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import Logout from './components/LogOut';
import DealerInfo from './components/DealerInfo';
library.add(faTrash,faEdit,faList,faHome, faSignIn,faSignOut,faCameraRetro,faBomb,faPeopleGroup);

/*To use the Font-awesome, install all given packages from npm into your app.

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome

 * And import the library for the font-awesome

*/
/*
	React Router is a standard library for routing in React. 
	It enables the navigation among views of various components in a React Application, allows changing the browser URL, 
	and keeps the UI in sync with the URL. 
	React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. 
It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. 
It also allows us to use browser history features while preserving the right application view.

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ProductHive</h1>
      
      </header>


      <section>
       <div style={{ backgroundImage: "url(/images/pms1.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'100vh',minWidth:'100vw'}}>
           <Router>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' exact Component={Home}></Route>
              <Route path='/register' Component={DealerRegistration}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/product' Component={Product}></Route>
              <Route path='/viewProduct/:id' Component={ViewProduct}/>
              <Route path='/addProduct/:id' Component={CreateProduct}></Route>
              <Route path='/logout' Component={Logout}></Route>
              <Route path='/dealers' Component={DealerInfo}></Route>
             
             
            </Routes>
           </Router>
        </div>
      </section>

      <footer className='footer'>
        <p>
          &copy; All Right Reserved to Wells Fargo
        </p>
      </footer>
    </div>
  );
}

export default App;
