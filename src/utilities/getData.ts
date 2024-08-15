async function getData<T>(API: string, options: RequestInit = {}): Promise<T>
{
    let data = undefined

    try {
        const response = await fetch(API, options)
        data = await response.json()

    } catch (e) {
        console.log(`Error to fetch ${API} \n ${e}`)
    }finally{
        return data
    }
}

export default getData