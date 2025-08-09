"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./purchaseHistory.module.css";
import Navbar from "@/components/Navbar";
import { getUserByEmail } from "../../../api/user";
import PurchaseHistoryCart from "@/components/PurchaseHistoryCart";
const page = () => {
    const [purchaseHistory, setPurchaseHistory] = useState([]);

    useEffect(() => {
        async function fetchPurchaseHistory() {
            const email = localStorage.getItem("email");

            const user = await getUserByEmail(email);

            if (user) {
                setPurchaseHistory(user.purchasedFlights);
            }
        }
        fetchPurchaseHistory();
    }, []);
    // useEffect(() => {
    //     console.log(purchaseHistory);
    // }, [purchaseHistory]);
    return (
        <>
            <Navbar />
            <div className={styles.purchaseHistoryContainer}>
                {purchaseHistory.map((flight) => (
                    <PurchaseHistoryCart key={flight.id} flight={flight} />
                ))}
            </div>
        </>
    );
};

export default page;
