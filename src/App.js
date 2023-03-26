import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Pageone from './pages/Pageone';

function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/page1":
      component = <Pageone />
      break
    default:
      break
    }
    return (<>
      <Navbar />
      {component}
    </>
    );
}

export default App;
