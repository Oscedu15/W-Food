"use client";

import dynamic from "next/dynamic";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Map = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  { ssr: false }
);

import React from "react";

const MapContainer = () => {
  const locations = [
    { id: "550e8400-e29b-41d4-a716-446655440000", lat: 51.5074, lng: -0.1278 },
    { id: "550e8400-e29b-41d4-a716-446655440001", lat: 51.4995, lng: -0.1248 },
    { id: "550e8400-e29b-41d4-a716-446655440025", lat: 51.4964, lng: -0.1439 },
    { id: "550e8400-e29b-41d4-a716-446655440026", lat: 51.4905, lng: -0.1245 },
    { id: "550e8400-e29b-41d4-a716-446655440027", lat: 51.4908, lng: -0.1271 },
    { id: "550e8400-e29b-41d4-a716-446655440028", lat: 51.511, lng: -0.1162 },
    { id: "550e8400-e29b-41d4-a716-446655440029", lat: 51.507, lng: -0.122 },
    { id: "550e8400-e29b-41d4-a716-446655440040", lat: 51.5132, lng: -0.1183 },
    { id: "550e8400-e29b-41d4-a716-446655440041", lat: 51.509, lng: -0.1231 },
    { id: "550e8400-e29b-41d4-a716-446655440042", lat: 51.5114, lng: -0.1037 },
    { id: "550e8400-e29b-41d4-a716-446655440043", lat: 51.52, lng: -0.1058 },
    { id: "550e8400-e29b-41d4-a716-446655440044", lat: 51.5047, lng: -0.1381 },
    { id: "550e8400-e29b-41d4-a716-446655440045", lat: 51.5135, lng: -0.1586 },
  ];
  return (
    <div className="flex justify-center items-center flex-col h-screen mb-4">
      {/* Texto */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=""
      >
        <h1 className="flex justify-center text-center items-center my-4">
          Nuestras Sucursales
        </h1>
      </motion.div>
      <Map center={{ lng: -0.1278, lat: 51.5074 }} locations={locations} />
    </div>
  );
};

export default MapContainer;
