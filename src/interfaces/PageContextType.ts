import Page from "./Page";

interface PageContextType {
    page: Page;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default PageContextType