'use client';

import { useEffect, useRef } from 'react';

export const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initializeMap = async () => {
      const L = await import('leaflet');
      if (!mapRef.current) return;

      const map = L.map(mapRef.current).setView([49.2827, -123.1207], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.circleMarker([49.2827, -123.1207], {
        radius: 12,
        color: '#1472C9',
        fillColor: '#3094F2',
        fillOpacity: 0.9,
        weight: 2
      })
        .addTo(map)
        .bindPopup('Ecadoc AI Vancouver Hub');

      const resizeHandler = () => map.invalidateSize();
      window.addEventListener('resize', resizeHandler);
      cleanup = () => {
        window.removeEventListener('resize', resizeHandler);
        map.remove();
      };
    };

    initializeMap();
    return () => cleanup?.();
  }, []);

  return <div ref={mapRef} id="map" className="w-full min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[566px]" />;
};
