import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'
import { ProductPageProvider } from './providers/ProductPageProvider'
import { PagedProductProvider } from './providers/PagedArrayProvider'
import { ReactNode } from 'react'

interface Props
{
    children: ReactNode
}

const AppProviders = ({children} : Props) => {
    return (
      <ProductProvider>
        <MoneyProvider>
          <ProductPageProvider>
            <PagedProductProvider>
              {children}
            </PagedProductProvider>
          </ProductPageProvider>
        </MoneyProvider>
      </ProductProvider>
    );
  }

  export default AppProviders