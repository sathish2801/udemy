// makePutRequest.js
import api from './base_url';

const makePutRequest = async (endpoint, body) => {
    try{
        const { data } = await api.put(endpoint, body);
        return data.data;
    }
    catch(error){
        handleError(error)
    }
};

export default makePutRequest;
