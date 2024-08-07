import '../css/components/PrevNextPage.css'
import arrowRigthSvg from '../assets/icons/arrow-right.svg'
import arrowLeftSvg from '../assets/icons/arrow-left.svg'

import { usePageContext } from '../providers/ProductPageProvider'
import ButtonImg from '../UI/ButtonImg'
import { calcNext, calcPrev } from '../utilities/calcPage'

const PrevNextPage = () => {
    const {page, setPage} = usePageContext()

    const handlerNext = () => {
        const index = calcNext(page.index, page.size)
        const newPage = {...page}

        newPage.index = index

        setPage(newPage)
    }

    const handlerPrev = () => {
        const index = calcPrev(page.index)
        const newPage = {...page}

        newPage.index = index

        setPage(newPage)
    }

    return (
        <div className='PrevNextPage-Container' >
            {
                page.index > 1 ?
                <ButtonImg 
                    onClick={handlerPrev} 
                    imgProps={{src: arrowLeftSvg, alt: 'Prev Page button'}}
                />
                :
                null
            }

{
                page.index < page.size ?
                <ButtonImg 
                    onClick={handlerNext} 
                    imgProps={{src: arrowRigthSvg, alt: 'Next Page button'}}
                />
                :
                null
            }
            
            
            
        </div>
    )
  }
  
  export default PrevNextPage