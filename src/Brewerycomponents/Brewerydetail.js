import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MapContainer from "./MapContainer";

const BreweryDetail = () => {
    let navigate = useNavigate();
    const { by_name } = useParams();
    const {id} = useParams();
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
                <h4>Please find below details for <strong>{by_name}</strong></h4><br/>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <th scope="row">{breweriesByName.name}</th>
                                <td>{breweriesByName.street}</td>
                                <td>{breweriesByName.latitude}</td>
                                <td>{breweriesByName.longitude}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <NavLink className="btn btn-primary" to="/Breweries">Go back to all breweries</NavLink>
            <br/>
            <br/>
            <MapContainer/>
        </div>
    );
};

export default BreweryDetail;