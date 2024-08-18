

import getData from './getData';

interface Params{
    API: string;
    options?: RequestInit
}


async function fetchData({ API, options = {}}: Params) {
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

export default fetchData;