// makePostRequest.js
import api from './base_url';

const makePostRequest = async (endpoint, body) => {
    try{
        const { data } = await api.post(endpoint, body);
        return data.data;
    }
    catch(error){
        handleError(error)
    }
};

export default makePostRequest;
