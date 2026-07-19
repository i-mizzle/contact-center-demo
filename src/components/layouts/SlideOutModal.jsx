import React from 'react'
import CloseIcon from '../elements/icons/CloseIcon'

const SlideOutModal = ({children, isOpen, closeFunction, title, subTitle}) => {
  return (
      <>
        {isOpen && <div className={`h-screen overflow-y-scroll w-full bg-[#00000084] fixed left-0 top-0 transform transition-all duration-200 border-black`} style={{zIndex: 995}}>

        </div>}
        <div className={`h-screen overflow-y-scroll scrollbar-hidden w-full md:w-100 lg:w-125 xl:w-137.5 bg-white dark:bg-stone-950 fixed right-0 top-0 transform transition-all duration-200  border-black shadow-lg shadow-black/10 ${ isOpen ? 'transtone-x-0' : 'transtone-x-full' }`} style={{zIndex: 998}}>
            <button className='absolute top-3 right-3 cursor-pointer text-black dark:text-white p-2 rounded hover:text-gray-600 transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-900' onClick={()=>{closeFunction()}} style={{zIndex: '997'}}>
                <CloseIcon className="w-5 h-5 text-black dark:text-gray-300" />
            </button>

            <div className='py-3 w-full border-b border-gray-200 dark:border-stone-900 px-8 pt-4'>
                <h3 className='text-md font-[550]'>{title}</h3>
                <p className='text-sm'>{subTitle}</p>
            </div>

            <div className='px-8'>
              {children}
            </div>

        </div>
      </>
  )
}

export default SlideOutModal