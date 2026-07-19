import { useEffect, useRef, useState } from 'react'
import CloseIcon from './icons/CloseIcon'
import CheckIcon from './icons/CheckIcon'

import PlusIcon from './icons/PlusIcon'
import FunnelIcon from './icons/FunnelIcon'
import { debounce } from '../../utils/utils';
import InlinePreloader from './InlinePreloader';

const resolveOptionSearchKey = (option, optionIndex) => {
    if(!option) {
        return `search-option-${optionIndex}`
    }

    return option.searchKey || option.ref || option.name || `search-option-${optionIndex}`
}

const getSearchResultsData = (searchResultsState) => {
    if(Array.isArray(searchResultsState)) {
        return searchResultsState
    }

    if(searchResultsState && Array.isArray(searchResultsState.results)) {
        return searchResultsState.results
    }

    if(searchResultsState && Array.isArray(searchResultsState.data)) {
        return searchResultsState.data
    }

    return []
}

const resolveBinaryOptionValue = (option, optionIndex) => {
    if(option === null || option === undefined) {
        return `${optionIndex}`
    }

    if(typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
        return `${option}`
    }

    const value = option.value ?? option.id ?? option._id ?? option.key ?? optionIndex
    return `${value}`
}

const resolveBinaryOptionLabel = (option, optionIndex) => {
    if(option === null || option === undefined) {
        return `${optionIndex}`
    }

    if(typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
        return `${option}`
    }

    return option.label || option.name || `${option.value ?? option.id ?? option._id ?? optionIndex}`
}

const Filters = ({
    filterOptions = [],
    returnSelected,
    resetFilters,
    checkConditions,
    performFilterSearch,
    excludeFilters = [],
    filterSearchResults = {}
}) => {

    const [ activeFilters, setActiveFilters ] = useState([])

    const [ selectingFilters, setSelectingFilters ] = useState(false)
    
    const [ activeFilterOption, setActiveFilterOption ] = useState(null)

    const [ filterLinkOption, setFilterLinkOption ] = useState(null)
    const [ filterValue, setFilterValue ] = useState('')
    const [ searchInputValue, setSearchInputValue ] = useState('')
    const [ selectedSearchResultValue, setSelectedSearchResultValue ] = useState(null)

    const returnSelectedRef = useRef(returnSelected)
    const checkConditionsRef = useRef(checkConditions)

    useEffect(() => {
        returnSelectedRef.current = returnSelected
    }, [returnSelected])

    useEffect(() => {
        checkConditionsRef.current = checkConditions
    }, [checkConditions])

    // const FilterDisplay = ({filterName, filterLink, filterValue}) => {
    //     return (
    //         <p className='text-xs'> <span className='font-medium'>{filterName}</span> {filterLink} <span className='font-medium'>{filterValue}</span> </p>
    //     )
    // }

    const addFilter = (index) => {
        if(index === null || index === undefined || !filterOptions[index]) {
            return
        }

        const selectedOption = filterOptions[index]
        const isSearchFilter = selectedOption.type === 'search'

        const normalizedFilterValue = isSearchFilter
            ? (`${filterValue || searchInputValue}`).trim()
            : `${filterValue}`.trim()

        if(!normalizedFilterValue) {
            return
        }

        if(selectedOption.linkType === 'option' && (!filterLinkOption || filterLinkOption === '')) {
            return
        }

        const tempActiveFilters = JSON.parse(JSON.stringify(activeFilters))

        let filterLink = 'is'
        if(selectedOption.linkType === 'option') {
            filterLink = filterLinkOption
        }
        
        const currentFilter = JSON.parse(JSON.stringify(selectedOption))
        currentFilter.value = normalizedFilterValue
        currentFilter.selectedLink = filterLink

        let selectedValueDisplay = currentFilter.value
        if(selectedOption.type === 'binary' && Array.isArray(selectedOption.options)) {
            const matchedOption = selectedOption.options.find((option, optionIndex) => {
                return resolveBinaryOptionValue(option, optionIndex) === currentFilter.value
            })

            if(matchedOption !== undefined) {
                selectedValueDisplay = resolveBinaryOptionLabel(matchedOption)
            }
        }

        const searchDisplayLabel = isSearchFilter ? `${searchInputValue}`.trim() : ''
        currentFilter.displayValue = `${selectedOption.name} ${filterLink} ${searchDisplayLabel || selectedValueDisplay}`

        const existingFilterIndex = tempActiveFilters.findIndex((item) => item.name === currentFilter.name)
        if(existingFilterIndex >= 0) {
            tempActiveFilters[existingFilterIndex] = currentFilter
        } else {
            tempActiveFilters.push(currentFilter)
        }

        setActiveFilters(tempActiveFilters)
        setFilterLinkOption(null)
        setActiveFilterOption(null)
        setFilterValue('')
        setSearchInputValue('')
        setSelectedSearchResultValue(null)
        setSelectingFilters(false)
    }

    const removeFilter = (filter) => {
        const newFilters = activeFilters.filter ((item) => {
            return filter !== item 
        })
        setActiveFilters(newFilters)
    }

    const performSearch = debounce((term, optionIndex, option) => {
        if(typeof performFilterSearch === 'function') {
            performFilterSearch(term, optionIndex, option)
        }
    })

    const selectSearchResult = (result) => {
        if(activeFilterOption === null || activeFilterOption === undefined) {
            return
        }

        const activeOption = filterOptions[activeFilterOption]
        if(!activeOption || activeOption.type !== 'search') {
            return
        }

        const valueKey = activeOption.value || 'value'
        const labelKey = activeOption.displayValue || 'label'

        const selectedValue = result?.[valueKey] ?? result?.value ?? result?.id ?? result?._id
        const selectedLabel = result?.[labelKey] ?? result?.label ?? selectedValue

        if(selectedValue === null || selectedValue === undefined || `${selectedValue}`.trim() === '') {
            return
        }

        setFilterValue(`${selectedValue}`)
        setSearchInputValue(`${selectedLabel || selectedValue}`)
        setSelectedSearchResultValue(`${selectedValue}`)
    }

    const resolveQueryData = (filters = []) => {
        const payload = {}
        const queryEntries = []

        const appendQueryEntry = (key, value) => {
            if(!key) {
                return
            }

            const normalizedValue = `${value}`.trim()
            if(normalizedValue === '') {
                return
            }

            queryEntries.push([key, normalizedValue])
            payload[key] = normalizedValue
        }

        filters.forEach((filter) => {
            if(!filter || filter.value === null || filter.value === undefined || `${filter.value}`.trim() === '') {
                return
            }

            if(filter.queryKey) {
                appendQueryEntry(filter.queryKey, filter.value)
            }

            if(filter.linkQueryMap && filter.selectedLink && filter.linkQueryMap[filter.selectedLink]) {
                appendQueryEntry(filter.linkQueryMap[filter.selectedLink], filter.value)
            }

            if(filter.minQueryKey || filter.maxQueryKey) {
                if(filter.selectedLink === 'is greater than' && filter.minQueryKey) {
                    appendQueryEntry(filter.minQueryKey, filter.value)
                }
                if(filter.selectedLink === 'is less than' && filter.maxQueryKey) {
                    appendQueryEntry(filter.maxQueryKey, filter.value)
                }
            }
        })

        return {
            payload,
            queryString: new URLSearchParams(queryEntries).toString()
        }
    }

    useEffect(() => {
        const { payload: queryPayload, queryString } = resolveQueryData(activeFilters)

        if(typeof returnSelectedRef.current === 'function') {
            returnSelectedRef.current(activeFilters, queryString, queryPayload)
        }

        if(typeof checkConditionsRef.current === 'function') {
            checkConditionsRef.current(activeFilters, queryString, queryPayload)
        }
    }, [activeFilters])

    useEffect(() => {
        if(resetFilters) {
            setActiveFilters([])
            setFilterLinkOption(null)
            setActiveFilterOption(null)
            setFilterValue('')
            setSearchInputValue('')
            setSelectedSearchResultValue(null)
            setSelectingFilters(false)
        }
    }, [resetFilters])

    const activeOption = activeFilterOption !== null && activeFilterOption !== undefined
        ? filterOptions[activeFilterOption]
        : null

    const activeSearchKey = activeOption && activeOption.type === 'search'
        ? resolveOptionSearchKey(activeOption, activeFilterOption)
        : null

    const activeSearchState = activeSearchKey ? filterSearchResults[activeSearchKey] : null
    const activeSearchResults = getSearchResultsData(activeSearchState)
    const isActiveSearchLoading = !!(activeSearchState && activeSearchState.loading)

    const shouldShowSearchResults = !!(
        activeOption &&
        activeOption.type === 'search' &&
        `${searchInputValue}`.trim() !== ''
    )

    return (
        <div className="flex flex-row gap-2 flex-wrap">
            <span className={`py-2 px-2 rounded-md text-gray-600 dark:text-stone-200 dark:bg-stone-900 text-xs flex items-center justify-center gap-x-1 ${activeFilters && activeFilters.length > 0 ? 'bg-vcm-light-purple bg-opacity-20' : 'bg-gray-100'}`}> 
                <FunnelIcon className="w-4 h-4 inline" /> Filters
            </span>

            { activeFilters.map((filter, filterIndex) => (
                <span className='py-2 px-2 rounded-md bg-gray-100 text-gray-600 dark:text-stone-200 dark:bg-stone-900 flex gap-x-3 items-center text-xs' key={filterIndex}> 
                    {filter.displayValue}
                    <button onClick={()=>{removeFilter(filter)}}>
                        <CloseIcon className="w-4 h-4" />
                    </button>
                </span>
            ))}

            <div className='relative'>
                <button className='px-2 py-2 rounded-md bg-gray-100 text-gray-600 dark:text-stone-200 dark:bg-stone-900 transition duration-200 hover:bg-gray-200 dark:hover:bg-stone-800' onClick={()=>{setSelectingFilters(!selectingFilters)}}>
                    <PlusIcon className={`w-5 h-5 transition duration-200 ${selectingFilters && 'rotate-45'}`} />
                </button>
                <div className={`z-50 bg-white text-gray-600 dark:text-stone-200 dark:bg-stone-900 rounded-md shadow-lg p-2 w-44 absolute top-0 left-11 ${ selectingFilters ? 'inline-block' : 'hidden' }`}>
                    <div className='relative'>
                        {filterOptions.map(( option, optionIndex ) => (
                            !excludeFilters.includes(option.name) && <button key={optionIndex} className={`capitalize text-xs text-left my-1 p-2 hover:bg-gray-100 dark:hover:bg-stone-800 rounded-sm transition duration-200 text-gray-600 dark:text-stone-300  w-full block ${optionIndex === activeFilterOption ? 'bg-gray-100 dark:bg-stone-900' : ''}`} onClick={()=>{setActiveFilterOption(optionIndex)}}>
                                {option.name}
                            </button>
                        ))}
                        {activeFilterOption !== null && 
                            <div className='absolute top-0 left-44 w-44 rounded-sm p-5 bg-white text-gray-600 dark:text-stone-200 dark:bg-stone-900 shadow-lg'>
                                <p className="text-xs font-poppins text-gray-600 dark:text-stone-300 mb-2 rounded-sm capitalize">{activeOption?.name}</p>
                                {activeOption?.linkType === 'text' && <p className="text-xs text-gray-600 dark:text-stone-400">{activeOption.link}</p>}
                                {activeOption?.linkType === 'option' && 
                                    <select className="text-xs text-gray-600 p-1 border rounded-sm w-full my-2 outline-none" value={filterLinkOption || ''} onChange={(e)=>{setFilterLinkOption(e.target.value)}}>
                                        <option value="">-- select one --</option>
                                        {activeOption.link.map((linkOption, linkOptionIndex)=>(
                                            <option key={linkOptionIndex} value={linkOption}>{linkOption}</option>
                                        ))}
                                    </select>
                                }
                                {activeOption?.type === 'binary' && 
                                    <select className="text-xs text-gray-600 dark:text-stone-400 p-1 border dark:border-stone-700 rounded-sm w-full my-2 outline-none" value={filterValue} onChange={(e)=>{setFilterValue(e.target.value)}}>
                                        <option value="">-- select one --</option>
                                        {activeOption.options.map((option, optionIndex)=>(
                                            <option key={`${resolveBinaryOptionValue(option, optionIndex)}-${optionIndex}`} value={resolveBinaryOptionValue(option, optionIndex)}>{resolveBinaryOptionLabel(option, optionIndex)}</option>
                                        ))}
                                    </select>
                                }

                                {activeOption?.type === 'number' && 
                                    <input placeholder='value' type='number' value={filterValue} className="text-xs text-gray-600 dark:text-stone-300  p-1 border dark:border-stone-700  rounded-sm w-full my-2 outline-none"  onChange={(e)=>{setFilterValue(e.target.value)}} />
                                }

                                {activeOption?.type === 'free-text' && 
                                    <input placeholder='value' type="text" value={filterValue} className="text-xs text-gray-600 dark:text-stone-300  p-1 border dark:border-stone-700  rounded-sm w-full my-2 outline-none"  onChange={(e)=>{setFilterValue(e.target.value)}} />
                                }

                                {activeOption?.type === 'date' && 
                                    <input type='date' value={filterValue} className="text-xs text-gray-600 dark:text-stone-300 p-1 border dark:border-stone-700 rounded-sm w-full my-2 outline-none"  onChange={(e)=>{setFilterValue(e.target.value)}} />
                                }

                                {activeOption?.type === 'search' && 
                                    <>
                                        <input
                                            placeholder='search'
                                            value={searchInputValue}
                                            onChange={(e)=>{
                                                const term = e.target.value
                                                setSearchInputValue(term)
                                                setFilterValue('')
                                                setSelectedSearchResultValue(null)
                                                performSearch(term, activeFilterOption, activeOption)
                                            }}
                                            type="text"
                                            className="text-xs text-gray-600 dark:text-stone-300 p-1 border dark:border-stone-700 rounded-sm w-full my-2 outline-none"
                                        />

                                        {shouldShowSearchResults && (
                                            <div className='max-h-32 overflow-y-auto rounded-sm scrollbar-hidden'>
                                                {isActiveSearchLoading && <InlinePreloader />}
                                                {!isActiveSearchLoading && activeSearchResults.length === 0 && <p className='text-xs p-2 text-gray-500 dark:text-stone-400'>No results</p>}
                                                {!isActiveSearchLoading && activeSearchResults.length > 0 && activeSearchResults.map((result, resultIndex) => {
                                                    const labelKey = activeOption.displayValue || 'label'
                                                    const valueKey = activeOption.value || 'value'
                                                    const optionLabel = result?.[labelKey] ?? result?.label ?? result?.[valueKey] ?? result?.value ?? result?._id ?? resultIndex
                                                    const optionValue = result?.[valueKey] ?? result?.value ?? result?.id ?? result?._id ?? resultIndex
                                                    const normalizedOptionValue = `${optionValue}`
                                                    const isSelected = selectedSearchResultValue === normalizedOptionValue

                                                    return (
                                                        <button
                                                            key={`${optionValue}-${resultIndex}`}
                                                            type='button'
                                                            onClick={()=>{selectSearchResult(result)}}
                                                            className={`w-full text-left text-xs p-2 transition duration-200 text-gray-600 dark:text-stone-300 flex items-center justify-between ${isSelected ? 'bg-gray-100 dark:bg-stone-800' : 'hover:bg-gray-100 dark:hover:bg-stone-800'}`}
                                                        >
                                                            <span className='truncate pr-2'>{optionLabel}</span>
                                                            {isSelected && <CheckIcon className='w-4 h-4 text-green-600 dark:text-green-400 shrink-0' />}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </>
                                }

                                <button className='w-full p-1 rounded-sm text-white text-xs bg-gray-600 dark:bg-stone-700 my-3 transition duration-200 hover:bg-gray-800 dark:hover:bg-stone-900' onClick={()=>{addFilter(activeFilterOption)}}>Add Filter</button>
                            </div>
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Filters