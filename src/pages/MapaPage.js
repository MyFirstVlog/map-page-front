import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'


//TODO: Cambiar api key
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvLWVzdHJhZGFtIiwiYSI6ImNsMHZ3emZrdzFiYngzY3FvbnViNW0wMXMifQ.QMPSfS8Ey0tIcpe0mtnfpg';

const initialPoint = {
  lng: 5  ,
  lat: 34 ,
  zoom: 2 ,
}

export const MapaPage = () => {

  const mapaDiv = useRef();
  const [mapa, setMapa] = useState()

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapaDiv.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [initialPoint.lng, initialPoint.lat],
      zoom:  initialPoint.zoom
    });

    setMapa(map);

  }, [])
  

  return (
    <>
        <div
            ref={mapaDiv}
            className='mapContainer'
        >

        </div>
    </>
  )
}
