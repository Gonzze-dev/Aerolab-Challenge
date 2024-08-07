import { productsPerPage } from "../config";

function paginateArray(array: any[], pageNumber: number):any {

    const start = (pageNumber - 1) * productsPerPage;
    const end = start + productsPerPage;

    return array.slice(start, end);
}

export default paginateArray