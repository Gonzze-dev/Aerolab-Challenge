
import { useEffect, useState } from 'react';
import getData from '../utilities/getData';

interface Params{
    API: string;
    options?: RequestInit
}

function useFetch<T>({ API, options = {}}: Params): { data: T | undefined; loading: boolean; error: any } {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const getDataFetch = async () => {

        setLoading(true);
        try {
            let dataFetch: T | undefined = await getData<T>(API, options);
            setData(dataFetch);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDataFetch();
    }, [API]);

    return { data, loading, error };
}

export default useFetch;