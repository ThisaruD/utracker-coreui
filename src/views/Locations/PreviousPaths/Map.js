import React, {useEffect, useState, useRef} from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";
import {compose, withProps} from "recompose";

const initialDate = new Date();

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`, width: "940px"}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const [prog, setProg] = useState([]);
  const [rawPath, setRawPath] = useState([]);
  const [path, setPath] = useState([]);
  const [center, setCenter] = useState({
    lat: 6.8412267,
    lng: 79.963588,
    distance: 0,
  });

  const velocity = 100;

  useEffect(() => {
    setRawPath(props.pathCoordinates);
  }, [props.pathCoordinates]);

  useEffect(() => {
    setCenter(path[0]);
  }, [path]);

  useEffect(() => {
    console.log("distance calculation method has run");
    setPath(
      rawPath.map((coordinates, i, array) => {
        if (i === 0) {
          return {...coordinates, distance: 0}; // it begins here!
        }
        const {lat: lat1, lng: lng1} = coordinates;
        const latLong1 = new window.google.maps.LatLng(lat1, lng1);

        const {lat: lat2, lng: lng2} = array[0];
        const latLong2 = new window.google.maps.LatLng(lat2, lng2);

        // in meters:
        const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
          latLong1,
          latLong2
        );

        return {...coordinates, distance};
      })
    );
    // setInitialDate(new Date());
  }, [rawPath]);

  useInterval(() => {
    // Your custom logic here
    console.log("use Interval ran");
    moveObject();
  }, 1000);

  const getDistance = () => {
    // seconds between when the component loaded and now
    const differentInTime = (new Date() - initialDate) / 1000; // pass to seconds
    return differentInTime * velocity; // d = v*t
  };

  const moveObject = () => {
    // console.log("move object function called");
    const distance = getDistance();
    // console.log("distance");
    // console.log(distance);

    if (!distance) {
      console.log("distance is undefined");
      return;
    }

    let progress = path.filter(
      (coordinates) => coordinates.distance < distance
    );

    const nextLine = path.find(
      (coordinates) => coordinates.distance > distance
    );
    if (!nextLine) {
      setProg(progress);
      return; // it's the end!
    }
    const lastLine = progress[progress.length - 1];

    const lastLineLatLng = new window.google.maps.LatLng(
      lastLine.lat,
      lastLine.lng
    );

    const nextLineLatLng = new window.google.maps.LatLng(
      nextLine.lat,
      nextLine.lng
    );

    // distance of this line
    const totalDistance = nextLine.distance - lastLine.distance;
    const percentage = (distance - lastLine.distance) / totalDistance;

    const position = window.google.maps.geometry.spherical.interpolate(
      lastLineLatLng,
      nextLineLatLng,
      percentage
    );

    progress = progress.concat(position);
    setProg(progress);
  };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={center}
    >
      {prog && (
        <>
          <Polyline
            path={prog}
            // path={path}
            options={{strokeColor: "#FF0000 "}}
          />
          <Marker
            // position={path[prog.path - 1]}
            position={prog[prog.length - 1]}
          />
        </>
      )}
    </GoogleMap>
  );
});

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default Map;
