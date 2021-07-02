import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID -hGC8p9NEeZIRrXbuh0YX71QY3gV74TpgTZTgXSNDfA`,
    },
});