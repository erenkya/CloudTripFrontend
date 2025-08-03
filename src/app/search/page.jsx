"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

import { Button } from "../../components/ui/button";

import Image from "next/image";
import { login, checkJwtValidation } from "../../../api/auth";
import { getAllFlights } from "../../../api/flight";
import styles from "./search.module.css";
import HomeFlightCart from "@/components/HomeFlightCart";

import { useSearchParams } from "next/navigation";

function page() {
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

    const searchParams = useSearchParams();

    const [from, setFrom] = useState(searchParams.get("from") || "");
    const [to, setTo] = useState(searchParams.get("to") || "");
    const [date, setDate] = useState(searchParams.get("date") || "");

    useEffect(() => {
        async function fetchFlights() {
            try {
                const flightsData = await getAllFlights();
                setAllFlights(flightsData);
            } catch (error) {
                console.error("Error fetching flights:", error.message);
            }
        }

        fetchFlights();
        console.log(flights);
    }, []);

    //Search parameters

    return (
        <>
            <Navbar />

            <div style={{ position: "relative", width: "100%", height: "550px" }}>
                <Image src="/assets/hero-photo.jpg" alt="Hero" fill style={{ objectFit: "cover" }} priority />
                <div
                    className={styles.heroTitle}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: "blur(8px) brightness(0.8)",
                        WebkitBackdropFilter: "blur(8px) brightness(0.8)", // for Safari
                    }}
                >
                    <span>Bring Your Dreams Above The Clouds</span>
                </div>
            </div>

            <div className={styles.destinationString}>
                <span>
                    {from}→{to}
                </span>
            </div>
            <div className={styles.homeContainer}>
                {[...flights.sort((a, b) => Number(a.id) - Number(b.id))]
                    .filter((flight) => flight.departure === from && flight.arrival == to)
                    .map((flight) => (
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

export default page;
