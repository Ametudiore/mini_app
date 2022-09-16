
import {BrowserRouter as Route} from 'react-router-dom';
//import {BrowserRouter, Route, Switch,} from "react-router-dom";
import './index.css'
import NavbarComponent from './navbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponent';
import HomeComponent from './home';
import FooterComponent from './footerComponent';
import Error404 from './error404';

function App() {
  return (
  <div className="App">
      <header>
         <NavbarComponent/>
      </header>
        <Route>
          <CarouselComponent/>
        </Route>
      
        <Route>
          <HomeComponent/>
        </Route>
     
        <Route path="*">
          <Error404/>
        </Route>
  

      <FooterComponent/>

  </div>
  );
}

export default App;
