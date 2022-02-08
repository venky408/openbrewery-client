import {React} from "react";
import HomeImage from "../BeerInfo.png";

const Home = () =>{
    return(
        <div className="container">
            <div className="py-4">
                <h1 style={{ borderRadius:"10px" }}>Open Brewery</h1><br/><br/>
                <img src={HomeImage} id="imgBeerInfo" alt="2" /> 
            </div>
        </div>
    );
};

export default Home;

