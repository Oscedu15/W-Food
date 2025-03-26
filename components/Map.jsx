// "use client";

// import Image from "next/image";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/variants";
// import { useEffect, useState } from "react";

// const markers = [
//   {
//     position: [34.052235, -118.243683],
//     title: "Location 1",
//     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: "/map/1.png",
//   },
//   {
//     position: [33.9748, -118.3356],
//     title: "Location 2",
//     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: "/map/2.png",
//   },
//   {
//     position: [34.0211, -118.3965],
//     title: "Location 3",
//     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: "/map/3.png",
//   },
// ];

// const customIcon = new Icon({
//   iconUrl: "/pin-solid.svg",
//   iconSize: [40, 40],
// });

// const Map = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <motion.section
//       variants={fadeIn("up", 0.2)}
//       initial="hidden"
//       whileInView={"show"}
//       viewport={{ once: false, amount: 0.2 }}
//       className="relative xl:after:w-full xl:after:h-[240px]
//             xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80
//             xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
//       id="contactanos"
//     >
//       <MapContainer
//         center={[34.052235, -118.243683]}
//         zoomControl={false}
//         zoom={isMobile ? 10 : 12}
//         className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//         />
//         {/* Markers */}
//         {markers.map((marker, index) => {
//           return (
//             <Marker key={index} position={marker.position} icon={customIcon}>
//               <Popup>
//                 <div className="flex gap-x-[30px]">
//                   <div className="flex-1">
//                     <h3>{marker.title}</h3>
//                     <p>{marker.subtitle}</p>
//                   </div>
//                   <div className="flex-1">
//                     <Image
//                       src={marker.image}
//                       width={130}
//                       height={160}
//                       alt={marker.title}
//                     />
//                   </div>
//                 </div>
//               </Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </motion.section>
//   );
// };

// export default Map;

import { memo, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Button } from "./ui/button";

// Componente para centrar el mapa en la ubicación seleccionada
const SelectedLocation = ({ center }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

// Componente del Mapa
export const Map = memo(({ center, locations }) => {
  const [mapType, setMapType] = useState("roadmap");
  const [selectedLocation, setSelectedLocation] = useState(undefined);

  const getUrl = () => {
    const mapTypeUrls = {
      roadmap: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      satellite: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
      hybrid: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      terrain: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    };
    return mapTypeUrls[mapType];
  };

  const mapMarkIcon = new Icon({
    iconUrl: "pin-solid.svg",
    iconSize: [47, 55],
  });
  const mapMarkActiveIcon = new Icon({
    iconUrl: "active-map-marker.png",
    iconSize: [57, 65],
  });

  const renderMarks = () => {
    return locations.map((location) => (
      <Marker
        key={location.id}
        icon={
          location.id === selectedLocation?.id ? mapMarkActiveIcon : mapMarkIcon
        }
        position={{ lat: location.lat, lng: location.lng }}
        eventHandlers={{
          click: () => {
            setSelectedLocation(location);
          },
        }}
      />
    ));
  };

  return (
    <>
      <div className="z-10 w-[80%] h-[80vh] overflow-hidden rounded-[20px]">
        <MapContainer
          center={center}
          zoom={13}
          minZoom={5}
          zoomControl={false}
          attributionControl={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={getUrl()} />
          {selectedLocation && <SelectedLocation center={selectedLocation} />}
          {renderMarks()}
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-5 mt-[10px]"
      >
        <Button
          variant="orange"
          size="sm"
          onClick={() => setMapType("roadmap")}
        >
          Hoja de ruta
        </Button>
        <Button
          variant="orange"
          size="sm"
          onClick={() => setMapType("satellite")}
        >
          Satelital
        </Button>
        <Button variant="orange" size="sm" onClick={() => setMapType("hybrid")}>
          Híbrido
        </Button>
        <Button
          variant="orange"
          size="sm"
          onClick={() => setMapType("terrain")}
        >
          Terreno
        </Button>
      </motion.div>
    </>
  );
});
