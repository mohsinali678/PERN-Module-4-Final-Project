export default function apiURL() {
        const { hostname } = window.location;
        if(hostname === "localhost"){
            return  "http://localhost:3003"
        }else if(hostname === "127.0.0.1"){
            return  "http://localhost:3003"
        }else{
            return "https://sports-gear-api.herokuapp.com"
        }
    
}