import { Dispatch, SetStateAction } from "react";

import Page from "./Page";

interface usePageType
{
    page: Page, 
    setPage: Dispatch<SetStateAction<Page>>
}

export default usePageType