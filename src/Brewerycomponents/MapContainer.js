
import { Component, React } from "react";
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = () => {
    const { latitude } = useParams();
    const {longitude} = useParams();
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 14
  };
  
    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
           defaultCenter= {defaultProps.center}
           defaultZoom={defaultProps.zoom}
           //API_KEY = {api_key}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="Test Marker"
          />
        </GoogleMapReact>
      </div>
    );
};
export default MapContainer;