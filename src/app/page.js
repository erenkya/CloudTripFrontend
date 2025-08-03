"use client";
import React from "react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { login, checkJwtValidation } from "../../api/auth";
import { getAllFlights } from "../../api/flight";
import Navbar from "@/components/Navbar";
import styles from "./home.module.css";
import HomeFlightCart from "@/components/HomeFlightCart";

export default function Home() {
    // API Login Status check & JWT auto validation
    useEffect(() => {
        async function validateToken() {
            const token = localStorage.getItem("jwt");
            if (token) {
                const isValid = await checkJwtValidation(token);
                if (isValid != true) {
                    console.log("Token is invalid, logging out.");
                    localStorage.removeItem("jwt");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("email");
                } else {
                    console.log("Token is valid.");
                }
            }
        }

        async function doLogin() {
            if (localStorage.getItem("jwt") == null) {
                try {
                    const token = await login(process.env.NEXT_PUBLIC_API_EMAIL, process.env.NEXT_PUBLIC_API_PASSWORD);
                    // console.log("Token:", token);
                } catch (error) {
                    console.error("Login failed:", error.message);
                }
            } else {
                // console.log(localStorage.getItem("jwt"));
                console.log("Already storedcvalid Jwt token skipping re login to API.");
            }
        }
        validateToken().then(() => {
            doLogin();
        });
    }, []);

    //Get all flights
    const [flights, setAllFlights] = useState([]);
    useEffect(() => {
        async function fetchFlights() {
            try {
                const flightsData = await getAllFlights();
                setAllFlights(flightsData);
                console.log(flightsData);
            } catch (error) {
                console.error("Error fetching flights:", error.message);
            }
        }

        fetchFlights();
    }, []);
    console.log(flights.map((f) => f.id));
    return (
        <>
            <Navbar />
            <div className={styles.heroSection}></div>

            <div className={styles.homeContainer}>
                {[...flights.sort((a, b) => Number(a.id) - Number(b.id))].map((flight) => (
                    <HomeFlightCart
                        key={flight.id}
                        id={flight.id}
                        airline={flight.airline}
                        arrival={flight.arrival}
                        departure={flight.departure}
                        arrivalTime={flight.arrivalTime}
                        departureTime={flight.departureTime}
                        price={flight.price}
                        seatCapacity={flight.seatCapacity}
                    />
                ))}
            </div>
        </>
    );
}
