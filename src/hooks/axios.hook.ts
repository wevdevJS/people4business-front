import axios from 'axios';
import {API_URL} from '../constant/constant';
const useAxios = () => {
    const getAxios = async (
        url: string,
    ) => {
        let response;
        try {
            response = await axios.get(`${API_URL + url}`, {
                headers: {"Access-Control-Allow-Origin": "*"}
            });
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                throw Error(error.message);
            }
            throw Error(error);
        }

        return response?.data ?? null;
    };

    const postAxios = async (url: string, body: object) => {
        let response;
        try {
            response = await axios.post(`${API_URL + url}`, body);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                throw Error(error.message);
            }
            throw Error(error);
        }
        return response?.data ? response?.data : null;
    };

    return {
        getAxios,
        postAxios
    };

}

export default useAxios;
