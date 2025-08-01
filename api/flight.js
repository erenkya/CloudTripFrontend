// utils/api.js

export async function getAllFlights() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = localStorage.getItem("jwt");
    const res = await fetch(apiBaseUrl + "/flights/getAllFlights", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Flights could not be fetched");
    }

    return await res.json();
}
