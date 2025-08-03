import React from "react";
import styles from "./HomeFlightCart.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function HomeFlightCart(props) {
    return (
        <Card className="w-full max-w-sm overflow-hidden rounded-2xl pt-0">
            <div className="relative w-full h-[200px]">
                <Image src={`/assets/airlines/${props.airline}.jpg`} alt={props.airline} fill className="object-cover" priority />
                <div
                    className={styles.heroTitle}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: "brightness(0.85)",
                        WebkitBackdropFilter: "brightness(0.85)", // for Safari
                    }}
                />
            </div>
            <CardHeader>
                <div className={styles.cardHeader}>
                    <CardTitle>
                        {props.departure}→{props.arrival}
                    </CardTitle>
                    <div className={props.seatCapacity >= 100 ? styles.remainingSeatNormal : styles.remainingSeatAlert}>
                        Last {props.seatCapacity} seat available
                    </div>
                </div>
                <div className={styles.airline}>{props.airline}</div>
                <CardDescription>
                    <div className={styles.flightTimesContainer}>
                        <div className={styles.flightTimes}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"></path>
                            </svg>
                            {new Date(props.departureTime).toLocaleDateString("tr-TR")}
                        </div>
                        <div className={styles.flightTimes}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-26.16-24.3L53.21,142.24A40.12,40.12,0,0,1,24,103.72V48A16,16,0,0,1,45.06,32.82l5.47,1.82a8,8,0,0,1,5,4.87L66.13,68.88,96,77.39V48a16,16,0,0,1,21.06-15.18l5.47,1.82a8,8,0,0,1,4.85,4.5l22.5,53.63,60.84,17A40.13,40.13,0,0,1,240,148.32V184a8,8,0,0,1-10.16,7.7ZM224,148.32a24.09,24.09,0,0,0-17.58-23.13l-64.57-18a8,8,0,0,1-5.23-4.61L114,48.67,112,48V88a8,8,0,0,1-10.19,7.7l-44-12.54a8,8,0,0,1-5.33-5L41.79,48.59,40,48v55.72a24.09,24.09,0,0,0,17.53,23.12L224,173.45Z"></path>
                            </svg>
                            {new Date(props.arrivalTime).toLocaleDateString("tr-TR")}
                        </div>
                    </div>
                    <div className={styles.priceContainer}>
                        <span>${props.price}</span>
                        <Link href={`flight/${props.id}`}>
                            <Button variant="link">Book Now →</Button>
                        </Link>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

export default HomeFlightCart;
