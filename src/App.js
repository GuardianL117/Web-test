import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
var locationDNE = false;
var numPages = 50;
export {locationDNE};
function App() {
  
  let Component
  switch(window.location.pathname) {
    case "/":
      locationDNE = false
      Component = Home
      break;
    case "/about":
      locationDNE = false
      Component = About
      break;
    default:
      /*if((parseInt((window.location.pathname).substring(1)) <= 50) && (parseInt((window.location.pathname).substring(1)) >=0)) {
        let CompName = "Page" + ((window.location.pathname).substring(1))
        locationDNE = false
        console.log(CompName);
        Component = eval(CompName)
        break;
      }
      else {*/
        locationDNE = true
        Component = Home
        break;
      //}
      
    }
    return (<>
      <Navbar />
      <Component />
      
    </>
    );
}

export default App;