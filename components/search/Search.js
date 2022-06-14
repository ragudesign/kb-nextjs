import { useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import searchStyles from './Search.module.scss'

const Search = () => {

    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [searchResults, setsearchResults] = useState([])

    const searchAPI = (query) => `api/search?q=${query}`

    const onChange = useCallback((event) => {
        const query = event.target.value
        setQuery(query)
        if (query.length) {
            fetch(searchAPI(query))
                .then(res => res.json())
                .then(res => {
                    setsearchResults(res.results.slice(0,5))
                })
        } else {
            setsearchResults([])
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }

    })

    return (

        <div className={searchStyles.search}>

            <div className={searchStyles.inputWrapper} ref={searchRef}>
                <input
                    className={active && searchResults.length > 0 ? 'input active' : 'input'}
                    type="text"
                    placeholder="Start your search"
                    onChange={onChange}
                    onFocus={onFocus}
                    value={query}
                />
                {active && searchResults.length > 0 && (
                    <ul className={searchStyles.searchResults}>
                        {searchResults.map(({ title, slug }) => (
                            <li key={slug}>
                                <Link href={`/kb/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                            </li>
                        ))}

                    </ul>
                )}
            </div>

        </div>

    )
}

export default Search