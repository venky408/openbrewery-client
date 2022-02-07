import { React } from "react";


const Architecture = () => {
    return (
        <div className="container" style={{ textAlign: "left" }}>
            <div className="py-4">
                <h1 style={{ backgroundColor: "bisque", borderRadius:"10px" }}>Project architecture</h1>
                <br /><br />
            </div>

            <div className="card" style={{ width: "100%", marginBottom:"25px" }}>
                <div className="card-body" style={{ backgroundColor: "lightgray" }}>
                    <h5 className="card-title" style={{ color: "Green", textAlign: "left" }}>
                        API architecture
                    </h5>
                    <p className="card-text">
                        <br />
                        <ul>
                            <li>API has been built using .Net core 3.0 using visual studio 2019.</li>
                            <li>API cotroller sits on top of API helper class which is responsible to establish communication with openBrewery API using HTTP client services and maps result to a model class.</li>
                            <li>Cross origin request policy has been set to accept requests from all origins. I tweaked start up class to enable CORS. </li>
                        </ul>

                    </p>
                </div>
            </div>

            <div className="card" style={{ width: "100%", marginBottom:"25px"}}>
                <div className="card-body" style={{ backgroundColor: "lightgray" }}>
                    <h5 className="card-title" style={{ color: "Green", textAlign: "left" }}>
                        Client architecture
                    </h5>
                    <p className="card-text">
                        <br />
                        <ul>
                            <li>Client has been built using reactJs, typeScript and visual studio code.</li>
                            <li>Components have been built as React functional components.</li>
                            <li>Axios has been used to perform asynchronous API calls.</li>
                            <li>Routing between components has been established using react-router-dom.</li>
                        </ul>

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Architecture;