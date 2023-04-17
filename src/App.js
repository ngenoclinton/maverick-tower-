import './App.css';
import { Banner } from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import { About } from './components/about/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      {/* <About /> */}
    </div>
  );
}

export default App;
