

import getData from '../utilities/getData';

interface Params{
    API: string;
    options?: RequestInit
}


async function useFetchP({ API, options = {}}: Params) {
    let loading = true
    let data = undefined
    let err = null
    try {
        data = await getData<any>(API, options);
    } catch (err) {
        err = err;
    } finally {
        loading = false

        return {data, loading, err}
    }

}

export default useFetchP;