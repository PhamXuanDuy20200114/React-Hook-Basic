import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                console.log('data', data);
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            console.log(error.name, ':', error.message);
        }
    }, []);
    return {
        data,
        isLoading,
        isError
    }
}

export default useFetch;