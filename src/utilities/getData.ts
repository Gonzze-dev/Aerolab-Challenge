async function getData(API: string): Promise<any> 
{
    let data = null

    try {
        const response = await fetch(API)
        data = await response.json()

    } catch (e) {
        console.log(`Error to fetch ${API} \n ${e}`)
    }finally{
        return data
    }
}

export default getData