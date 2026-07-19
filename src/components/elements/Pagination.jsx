import React from 'react'
import ChevronIcon from './icons/ChevronIcon';

const Pagination = ({pagination, changePage, updatePerPage}) => {
    const currentPage = Number(pagination?.currentPage) || 1
    const perPage = Number(pagination?.perPage) || 25
    const totalItems = Number(pagination?.totalItems) || 0
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage))

    const previousPage = () => {
        if(currentPage > 1) {
            changePage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if(currentPage < totalPages) {
            changePage(currentPage + 1)
        }
    }

    const changePerPage = (input) => {
        const nextPerPage = Number(input)
        if(!nextPerPage || nextPerPage <= 0) {
            return
        }
        updatePerPage(nextPerPage)
    }

    const changeCurrentPage = (input) => {
        const nextPage = Number(input)
        if(!nextPage || nextPage < 1 || nextPage > totalPages) {
            return
        }
        changePage(nextPage)
    }

    const lastPage = () => {
        changePage(totalPages)
    }
    
    const firstPage = () => {
        if(currentPage > 1) {
            changePage(1)
        }
    }

    const perPageOptions = [
        25, 50, 75, 100
    ]
  return (
    <div className='w-full flex flex-row items-center justify-between py-10'>
        <div className='flex flex-row items-center gap-x-2'>
            <button onClick={()=>{firstPage()}} disabled={currentPage <= 1} className='hidden xl:inline-block rounded bg-secondary bg-opacity-10 text-secondary text-xs py-2 px-2 transition duration-200 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed'>
                First page
            </button>
            <button onClick={()=>{previousPage()}} disabled={currentPage <= 1} className='rounded bg-secondary bg-opacity-10 text-secondary text-xs py-2 px-2 transition duration-200 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed'>
                <ChevronIcon className={`w-5 h-5 lg:hidden`} />
                <span className="text-xs hidden lg:inline-block">Previous page</span>
            </button>
        </div>

        <div className='flex flex-row gap-x-2 items-center'>
            <p className='text-secondary text-xs'>Page</p>
            <input type='number' className='text-xs px-2 py-2 border rounded border-gray-300 dark:border-stone-900 w-12.5 border-opacity-20 focus:border-stone-700 bg-transparent text-primary focus:outline-none' onChange={(e)=>{changeCurrentPage(e.target.value)}} value={currentPage} /> 
            <p className='text-secondary text-xs'>of {totalPages}</p>
        </div>
        
        <div className='flex flex-row items-center gap-x-2'>
            <div className='lg:flex flex-row gap-x-2 items-center mr-3 hidden '>
                <p className='text-secondary text-xs'>Items per page:</p>
                <select value={perPage} onChange={(e)=>{changePerPage(e.target.value)}} className='text-xs px-2 py-2 border rounded border-gray-300 dark:border-stone-900 w-18.75 focus:border-stone-700 bg-transparent text-primary focus:outline-none'>
                    {perPageOptions.map((option, optionIndex)=>(
                        <option key={optionIndex} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <button onClick={()=>{nextPage()}} disabled={currentPage >= totalPages} className='rounded bg-secondary bg-opacity-5 text-secondary text-xs py-2 px-2 transition duration-200 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed'>
                <ChevronIcon className={`w-5 h-5 lg:hidden rotate-180`} />
                <span className="text-xs hidden lg:inline-block">Next page</span>
            </button>
            <button onClick={()=>{lastPage()}} disabled={currentPage >= totalPages} className='hidden xl:inline-block rounded bg-secondary bg-opacity-5 text-secondary text-xs py-2 px-2 transition duration-200 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed'>
                Last page
            </button>
        </div>
    </div>
  )
}

export default Pagination