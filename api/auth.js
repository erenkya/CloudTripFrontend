export async function login(email, password) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(apiBaseUrl + "/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, password }).toString(),
    });
    const token = await res.text();
    localStorage.setItem("jwt", token);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("email", email);

    return token;
}

export async function checkJwtValidation(token) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(apiBaseUrl + "/auth/validate", {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const validation = await res.text();

    if (validation == "Token is not valid") {
        localStorage.removeItem("jwt");
        return false;
    } else {
        localStorage.setItem("jwt", token);

        return true;
    }
}
