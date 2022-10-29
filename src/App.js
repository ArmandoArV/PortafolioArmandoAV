/**/
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TitleBox from './Components/TitleBox/TitleBox';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experience';
import Awards from './Components/Awards/Awards';
import RoverChallenge from './Components/RoverChallenge/RoverChallenge';
function App() {
  return (
    <div className="App">
      <Header />
      <TitleBox />
      <Home />
      <Experience />
      <Awards />
    </div>
  );
}

export default App;
