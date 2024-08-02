interface Img {
    url: string,
    hdUrl: string
  }
  
interface Product {
"img": Img,
"_id": string,
"name": string,
"cost": number,
"category": string
}

export default Product