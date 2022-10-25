/**/
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TitleBox from './Components/TitleBox/TitleBox';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Header />
      <TitleBox />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
