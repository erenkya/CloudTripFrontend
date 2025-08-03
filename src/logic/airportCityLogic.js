const airports = [
    { code: "HND", city: "Tokyo" },
    { code: "LAX", city: "Los Angeles" },
    { code: "DXB", city: "Dubai" },
    { code: "JFK", city: "New York" },
    { code: "FRA", city: "Frankfurt" },
    { code: "AMS", city: "Amsterdam" },
    { code: "IST", city: "Istanbul" },
    { code: "CDG", city: "Paris" },
];

function findAirports(query) {
    const lowerQuery = query.trim().toLowerCase();

    return airports.filter(({ code, city }) => code.toLowerCase().includes(lowerQuery) || city.toLowerCase().includes(lowerQuery));
}

export default findAirports;
