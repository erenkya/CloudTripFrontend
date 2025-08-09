"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import findAirports from "@/logic/airportCityLogic";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userMail, setUserMail] = useState("");

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        setUserMail(localStorage.getItem("email") || "");
    });

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const router = useRouter();

    const handleSearch = () => {
        if (!from || !to || !date) {
            setShowAlert(true);
        } else {
            const formattedDate = format(date, "yyyy-MM-dd");

            router.push(`/search?from=${findAirports(from)[0].code}&to=${findAirports(to)[0].code}&date=${formattedDate}`);
        }
    };

    return (
        <div className={styles.navbarContainer}>
            <Link href="/" className={styles.logoContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f0f0f0" viewBox="0 0 256 256">
                    <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"></path>
                </svg>

                <span>CloudTrip</span>
            </Link>

            <div className={styles.LoginLogoutContainer}>
                <Popover>
                    <PopoverTrigger className={styles.popoverTrigger}>Search Flights</PopoverTrigger>
                    <PopoverContent className={styles.popoverContent}>
                        <div className={styles.popoverContainer}>
                            <Input
                                className={styles.popoverInput}
                                placeholder="From"
                                value={from}
                                onChange={(e) => setFrom(e.target.value.toUpperCase())}
                            />
                            <Input
                                className={styles.popoverInput}
                                placeholder="To"
                                value={to}
                                onChange={(e) => setTo(e.target.value.toUpperCase())}
                            />

                            {/* Date picker */}

                            <Popover>
                                <PopoverTrigger>
                                    <Button variant="outline">{date ? date.toLocaleDateString() : "Select Date"}</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                            <Button className={styles.searchButton} variant="outline" onClick={handleSearch}>
                                Search
                            </Button>

                            {showAlert && (
                                <Alert variant="destructive">
                                    <AlertTitle>Fill all the spaces.</AlertTitle>
                                </Alert>
                            )}
                        </div>
                    </PopoverContent>
                </Popover>
                {isLoggedIn ? (
                    //Düzenlenecek

                    <Popover>
                        <PopoverTrigger>
                            <div className={styles.profileContainer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>

                                <span>{userMail}</span>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="">
                            <div className={styles.profilePopover}>
                                <Link href={"/profile"} className={styles.profilePopoverLink}>
                                    <Button className={styles.profilePopoverLinkButton} variant={"outline"}>
                                        Profile
                                    </Button>
                                </Link>
                                <Link href={"/purchaseHistory"} className={styles.profilePopoverLink}>
                                    <Button className={styles.profilePopoverLinkButton} variant={"outline"}>
                                        Purchase History
                                    </Button>
                                </Link>
                                <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <div className={styles.LoginContainer}>
                        <Link href="/login">
                            <Button variant="secondary">Login</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className={styles.buttonSingup} variant="outline">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
