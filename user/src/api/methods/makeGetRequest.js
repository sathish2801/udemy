// makeGetRequest.js
import api from './base_url';
import handleError from './base_url';

const makeGetRequest = async (endpoint, params = {}) => {
    try{
        const { data } = await api.get(endpoint, { params });
        return data.data;
    }
    catch(error){
        handleError(error)
    }
};

export default makeGetRequest;
