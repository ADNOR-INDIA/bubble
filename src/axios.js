import axios from "axios";
// axios is a package which makes http reques simple...google it.
const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

export default instance