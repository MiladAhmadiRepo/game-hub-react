import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '51df0deff0544e28a719a4d77880f604'
    }
})