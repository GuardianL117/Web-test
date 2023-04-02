import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Page1 from './pages/Page1';
var locationDNE = false;
export {locationDNE};
function App() {
  
  let component
  switch(window.location.pathname) {
    case "/":
      locationDNE = false
      component = <Home />
      break;
    case "/about":
      locationDNE = false
      component = <About />
      break;
    case "/1":
      locationDNE = false
      component = <Page1 />
      break;
    default:
      locationDNE = true
      component = <Home />
      break;
    }
    return (<>
      <Navbar />
      {component}
      
    </>
    );
}

export default App;