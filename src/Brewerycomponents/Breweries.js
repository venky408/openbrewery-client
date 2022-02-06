import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Breweries = () => {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        getAllBreweries();
    }, []);

    const getAllBreweries = async () => {
        const result = await axios.get("http://localhost:62513/api/Brewery"); //http://localhost:62513/api/Brewery ...https://api.openbrewerydb.org/breweries
        setBreweries(result.data);
        //console.log(result.data);
    };
    return (
        <div className="container">
            <div className="py-4">
                <h1>Breweries</h1><br/>

                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Address</th>
                            <th scope="col">Website</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {breweries.map((brewery, index) => (
                            <tr>
                                <th scope="row">{brewery.name}</th>
                                <td>{brewery.brewery_type}</td>
                                <td>{brewery.street}</td>
                                <td><a href={brewery.website_url} target="_blank">{brewery.website_url}</a></td>
                                <td>
                                    <NavLink className="btn btn-primary" to={`/BreweryDetail/${brewery.name}/${brewery.id}`}>View</NavLink>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Breweries;