import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MapContainer from "./MapContainer";

const BreweryDetail = () => {
    let navigate = useNavigate();
    const { by_name } = useParams();
    const { id } = useParams();
    const [breweriesByName, setBreweriesByName] = useState([]);
    //alert(by_name);
    useEffect(() => {
        getBrewery();
    }, []);
    const getBrewery = async () => {
        const result = await axios.get("http://localhost:62513/api/brewery/" + by_name + "/" + id); //"http://localhost:62513/api/brewery/" + by_name + "/" + id "https://api.openbrewerydb.org/breweries?by_name=" + by_name
        //console.log(result.data);
        setBreweriesByName(result.data);
    };

    return (
        <div className="container">
            <div className="py-4">
                <h3 style={{ borderRadius:"10px" }}>Please find below details for <strong>{by_name}</strong></h3><br />

                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body" style={{width: '400px', height: '275px'}}>
                        <h5 className="card-title">{breweriesByName.name}</h5>
                        <p className="card-text">
                            {breweriesByName.street} <br/> {breweriesByName.city}, {breweriesByName.state}<br/> {breweriesByName.country} - {breweriesByName.postal_code}<br/><br/>
                            <strong>Latitude:</strong> {breweriesByName.latitude}<br/>
                            <strong>Longitude:</strong> {breweriesByName.longitude}
                        </p>
                        <a className="btn btn-dark" href={breweriesByName.website_url} target="_blank">website</a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                {/* <MapContainer /> */}
                <MapContainer latitude = {breweriesByName.latitude} longitude = {breweriesByName.longitude}/>
            </div>
            <br /><br />
            <NavLink className="btn btn-primary" style={{float:"left"}} to="/Breweries">Go back to all breweries</NavLink>
        </div>
    );
};
export default BreweryDetail;