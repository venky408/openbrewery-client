import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Brewerycomponents/Home";
import Breweries from "./Brewerycomponents/Breweries";
import BreweryDetail from "./Brewerycomponents/Brewerydetail";
import Architecture from "./Brewerycomponents/Architecture";
import MapContainer from "./Brewerycomponents/MapContainer";
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Breweries' element={<Breweries/>}/>
        <Route path='/BreweryDetail/:by_name/:id' element={<BreweryDetail/>}/>
        <Route path='/Architecture' element={<Architecture/>}/>
      </Routes>
      {/* <MapContainer/> */}
    </div>
    </Router>
  );
}

export default App;
