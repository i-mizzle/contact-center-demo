import React, { useState } from 'react'
import SearchIcon from './icons/SearchIcon'
// import { orders } from '../../pages/admin/orders/AllOrders'
// import { reviews } from '../../pages/admin/orders/Reviews'
// import { bookings } from '../../pages/admin/bookings/AllBookings'
// import { products } from '../../pages/admin/products/AllProducts'
// import { customers } from '../../pages/admin/customers/AllCustomers'

import InlinePreloader from './InlinePreloader'
import CloseIcon from './icons/CloseIcon';

const SearchField = ({placeholderText, showResultsDropDown, triggerSearch, searchResults, resultDisplayField, selectResult, performingSearch, clearSearch}) => {
    const [resultsActive, setResultsActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [hasSearched, setHasSearched] = useState(false)

    const openSearchResults = (term) => {
        setSearchTerm(term)
        if(term.trim().length < 2) {
            setResultsActive(false)
            setHasSearched(false)
            return
        }
        setResultsActive(true)
        setHasSearched(true)
        if (triggerSearch) {
            triggerSearch(term)
        }
    }

    const performSearches = (term) => {
        openSearchResults(term)
    }

    const returnSelected = (selected) => {
        selectResult(selected)
        setResultsActive(false)
    }

    const handleClearSearch = () => {
        setInputValue('')
        setSearchTerm('')
        setResultsActive(false)
        setHasSearched(false)

        if (clearSearch) {
            clearSearch()
        }
    }

    return (
        <div className='relative w-full'>
            <div className="relative border rounded-md border-gray-300 dark:border-stone-700 py-3 px-4 bg-white dark:bg-stone-900 w-full pr-20">
                <input 
                    type="text" 
                    className="block w-full focus:border-transparent focus:outline-none pl-6 text-sm text-gray-900 dark:text-gray-400 bg-transparent" 
                    placeholder={placeholderText || ''} 
                    onChange={(e)=>{
                        setInputValue(e.target.value)
                        performSearches(e.target.value)
                    }} 
                    value={inputValue}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                        {/* <img src={SearchIcon} alt="search" className="w-5 -mt-2 opacity-30" /> */}
                        <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-400"  />
                    </span>
                </div>
                {hasSearched && inputValue.trim().length > 0 && (
                    <button
                        type="button"
                        onClick={handleClearSearch}
                        className='absolute inset-y-0 right-3 my-auto h-8 flex items-center gap-x-1 rounded-md px-3 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-stone-800 transition duration-200'
                    >
                        <CloseIcon className={`w-4 h-4`} />
                        Clear
                    </button>
                )}
            </div>
            
            {resultsActive && showResultsDropDown &&
                <div className='w-full absolute top-12 bg-white dark:bg-stone-900 z-50 shadow-lg rounded-md border border-gray-200 dark:border-stone-700 p-3' style={{height:'inherit'}}>
                    <button className='absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-200 transition duration-200' onClick={()=>{setResultsActive(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {performingSearch === true ? 
                        <div className='w-full p-1 flex items-center justify-center'>
                            <InlinePreloader />
                        </div>
                    :
                        <>
                            <h3 className='text-sm font-medium text-ink-navy dark:text-gray-400 pb-2'>Search Results</h3>
                            <div className='w-full py-2 border-t'>
                                {searchResults && searchResults.length > 0 ?
                                searchResults.map((result, resultIndex) => (
                                    <button key={resultIndex} onClick={()=>{
                                        setInputValue(result[resultDisplayField])
                                        returnSelected(result)
                                    }} className='w-full text-left flex flex-row gap-x-4 items-center p-2 hover:bg-gray-100 dark:hover:bg-stone-800 transition duration-200'>
                                        <span className="font-sofia-pro text-xs">{result[resultDisplayField]}</span>
                                    </button>
                                )) : 
                                    <div className='rounded bg-gray-100 dark:bg-stone-800 w-full p-4 items-center m-auto'>
                                        <p className='text-xs text-gray-400 dark:text-gray-400'>No results found</p>
                                    </div>
                                }
                            </div>
                        </>
                    }

                </div>
            }
        </div>
    )
}

export default SearchField