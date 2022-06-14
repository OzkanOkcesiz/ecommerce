import { useEffect, useState } from 'react'

const Pagination = ({totalPages, setCurrentPage}) => {

    const numberOfPages = []

    for (let i = 1; i <= totalPages; i++) {
        numberOfPages.push(i)
    }

    const [currentButton, setcurrentButton] = useState(1)

    useEffect(() => {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])



  return (
    <div className='pagination'>
        <ul>
            <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`}
            onClick={() => { setcurrentButton((Prev) =>  Prev === 1 ? Prev : Prev -1)}}>
                <a href= "#!" className='page-link'>Prev</a>
            </li>
            {
                numberOfPages.map((number) => (
                    <li key={number} className={`${currentButton === number ? "page-item active" : "page-item"}`}
                    onClick={() => setcurrentButton(number)}>
                        <a href= "#!" className='page-link'>{number}</a>
                    </li>
                ))
            }
            <li className={`${currentButton === numberOfPages.length ? "page-item disabled" : "page-item"}`}
            onClick={() => { setcurrentButton((Prev) =>  Prev === numberOfPages.length ? Prev : Prev +1) }}>
                <a href= "#!" className='page-link'>Next</a>
            </li>

        </ul>
    </div>
  )
}

export default Pagination
