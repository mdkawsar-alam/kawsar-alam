'use client';
import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ location, height = "400px" }) => {
  const mapRef = useRef(null);
  const defaultLocation = {
    lat: 23.8103,
    lng: 90.4125,
    address: "Dhaka, Bangladesh"
  };

  const mapLocation = { ...defaultLocation, ...location };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: mapLocation.lat, lng: mapLocation.lng },
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#1B2A40" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#00eeff" }]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#cbd5e1" }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#334155" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#cbd5e1" }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      });

      const marker = new window.google.maps.Marker({
        position: { lat: mapLocation.lat, lng: mapLocation.lng },
        map: map,
        title: mapLocation.address,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#00eeff" stroke="#1B2A40" stroke-width="4"/>
              <circle cx="20" cy="20" r="8" fill="#1B2A40"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20)
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="color: #1B2A40; font-family: Arial, sans-serif; padding: 10px;">
            <h3 style="margin: 0 0 5px 0; color: #00eeff; font-size: 16px;">Kawsar Alam</h3>
            <p style="margin: 0; font-size: 14px;">${mapLocation.address}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup if needed
    };
  }, [mapLocation]);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        style={{ height }} 
        className="w-full rounded-lg overflow-hidden shadow-2xl border border-gray-600"
      />
      
      {/* Fallback for when Google Maps fails to load */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A40] to-[#09101A] flex items-center justify-center rounded-lg">
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-[#00eeff] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-300">{mapLocation.address}</p>
          <p className="text-sm text-gray-400 mt-2">
            Google Maps integration requires API key
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
