export async function getUserByEmail(email) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = localStorage.getItem("jwt");
    const res = await fetch(apiBaseUrl + "/user/getUserByEmail/" + email, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    // if (!res.ok) {
    //     throw new Error("User could not be fetched" + res.body);
    // }

    return await res.json();
}
