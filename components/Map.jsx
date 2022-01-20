import React, {useRef, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, center, useMap, useMapEvents, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const CENTER = [40.8054,-74.0241];

const DraggableMarker = (props) => {
  const {
    onChange, value, center, position, setPosition, draggable, toggleDraggable, zoom, setZoom,
  } = props;
  const marker = useRef();

  const map = useMapEvents({
    drag: (e) => {
      
      setPosition(e.target.getCenter());
    },
    // dragend: (e) => {
    //   if (draggable) {
    //     setPosition(e.target.getCenter());
    //   }
    // },
  });


  return (
    <Marker position={position ?? center ?? CENTER} ref={marker} />
  );
};

const Map = (props) => {
  const {position, setPosition, } = props;
  return (
    <MapContainer center={CENTER} zoom={14} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <DraggableMarker
          {...props}
          position={position}
          setPosition={setPosition}
        />
    </MapContainer>
  )
}

export default Map