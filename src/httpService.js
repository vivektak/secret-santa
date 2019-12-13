import Axios from 'axios';

const http = {
    post: async function (url, data) {
        return await Axios.post(process.env.REACT_APP_API_URL + url, data);
    }

}

export default http;
