import { useEffect, useState } from 'react'

const PaginationFeatured = ({totalPagesFeatured, setFeaturedPage}) => {

    const numberOfPages = []

    for (let i = 1; i <= totalPagesFeatured; i++) {
        numberOfPages.push(i)
    }

    const [featuredButton, setFeaturedButton] = useState(1)

    useEffect(() => {
        setFeaturedPage(featuredButton)
    }, [featuredButton, setFeaturedPage])



  return (
    <div className='pagination'>
        <ul>
            <li className={`${featuredButton === 1 ? "page-item disabled" : "page-item"}`}
            onClick={() => { setFeaturedButton((Prev) =>  Prev === 1 ? Prev : Prev -1)}}>
                <a href= "#!" className='page-link'>Prev</a>
            </li>
            {
                numberOfPages.map((number) => (
                    <li key={number} className={`${featuredButton === number ? "page-item active" : "page-item"}`}
                    onClick={() => setFeaturedButton(number)}>
                        <a href= "#!" className='page-link'>{number}</a>
                    </li>
                ))
            }
            <li className={`${featuredButton === numberOfPages.length ? "page-item disabled" : "page-item"}`}
            onClick={() => { setFeaturedButton((Prev) =>  Prev === numberOfPages.length ? Prev : Prev +1) }}>
                <a href= "#!" className='page-link'>Next</a>
            </li>

        </ul>
    </div>
  )
}

export default PaginationFeatured
