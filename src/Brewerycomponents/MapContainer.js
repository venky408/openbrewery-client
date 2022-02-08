import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';


const Map = (props) =>{
    //console.log(props.longitude, props.latitude);

    const containerStyle = {
        width: '400px',
        height: '400px',
        borderRadius : '10px'
      };
      
      const center = {
            lat:parseFloat(props.latitude),
            lng:  parseFloat(props.longitude)
      };

      return (
        <LoadScript
          //googleMapsApiKey="test_key"
          googleMapsApiKey = {process.env.REACT_APP_GEO_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            streetView="StreetViewPanorama"
          >
            
            <Marker
              position={center}
            />
          </GoogleMap>
        </LoadScript>

      );

};
export default Map;