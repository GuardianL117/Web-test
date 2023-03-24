import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="buttonStyle" style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }}  onClick={() => this.login()}>
        Login
        </button>
        <button style={{ marginRight: "auto" }}  onClick={() => this.logout()}>
        Logout
        </button>
      </div>
      <header className="App-header">
      The Web Testament
      <button> To The Beginning </button>
      </header>
    </div>
  );
}

export default App;
