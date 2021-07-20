export default function apiURL() {
    return (
        window.location.hostname === "localhost" || "127.0.0.1"
        ? "http://localhost:3003"
        : "http://127.0.0.1:3003"
    )
}