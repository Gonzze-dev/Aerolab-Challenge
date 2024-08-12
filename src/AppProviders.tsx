import { ProductProvider } from './providers/ProductProvider'
import { ProductPageProvider } from './providers/ProductPageProvider'
import { PagedProductProvider } from './providers/PagedArrayProvider'
import { ReactNode } from 'react'
import { UserProvieder } from './providers/UserProvider'

interface Props
{
    children: ReactNode
}

const AppProviders = ({children} : Props) => {
    return (
      <UserProvieder>
        <ProductProvider>
            <ProductPageProvider>
              <PagedProductProvider>
                {children}
              </PagedProductProvider>
            </ProductPageProvider>
        </ProductProvider>
      </UserProvieder>
    );
  }

  export default AppProviders