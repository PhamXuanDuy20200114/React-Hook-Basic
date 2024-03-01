import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: source.token
                });
                let data = res && res.data ? res.data : [];
                console.log('data', data);
                setData(data);
                setIsLoading(false);
                setIsError(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error.name, ':', error.message);
                }
            }
        }
        setTimeout(() => {
            fetchData()
        }, 3000);

        return () => {
            source.cancel('Operation canceled by the user.');
        };
    }, [url]);
    return {
        data,
        isLoading,
        isError
    }
}

export default useFetch;