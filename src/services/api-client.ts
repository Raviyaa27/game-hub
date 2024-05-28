import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '524b35f196f746c4a2b90b5f3935beea'
    }
})