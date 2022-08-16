import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
