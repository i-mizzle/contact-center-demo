import React, { useState } from 'react'

const RadioGroup = ({items, returnSelected, hasError, inputLabel, requiredField, inline, preSelectedIndex}) => {

    const [selectedOption, setSelectedOption] = useState(preSelectedIndex)

    const selectOption = (index, item) => {
        setSelectedOption(index)
        returnSelected(item)
    }

    return (
        <div className='max-w-full'>
            <div className='relative flex items-center justify-between mb-1'>
                <label 
                    className={`text-sm lg:text-md cursor-text z-10 relative py-1 transition block duration-200  
                    ${hasError ? 'text-red-400' : 'text-gray-500 dark:text-gray-300'}`}
                >
                    {inputLabel} {requiredField && requiredField === true && <span className='text-red-400'>*</span>}
                </label>
                {hasError && <span className='text-red-400 text-xs'>{hasError}</span>}
            </div>

            <div className={`w-full ${inline && 'flex gap-x-2 gap-y-2 items-center'}`}>
                {items.map((item, itemIndex)=>(
                <div onClick={()=>{selectOption(itemIndex, item)}} key={itemIndex} className={`w-full flex items-start border gap-x-2 rounded p-3 mb-2 bg-gray-100 dark:bg-stone-900/20 cursor-pointer ${selectedOption === itemIndex ? 'bg-opacity-20 border-stone-400 dark:border-light-green' : 'border-transparent'}`}>
                    <div className='w-5'>
                        <button 
                                className={`flex items-center mt-1 justify-center rounded-full w-4 h-4 border-2 transition duration-200 bg-white dark:bg-stone-950 dark:bg-at-dark-gray/40
                                ${hasError ? 'border-red-400' : selectedOption === itemIndex ? 'dark:border-light-green border-stone-500' : 'border-stone-300'}`
                            } 
                            onClick={()=>{selectOption(itemIndex, item)}}
                        >
                            {selectedOption === itemIndex && <div className='w-2 h-2 transition duration-200 rounded-full bg-stone-500 dark:bg-light-green '></div>}
                        </button>
                    </div>
                    
                    <div className={`text-sm cursor-pointer text-wrap text-stone-600 dark:text-stone-300`}>
                        <p className={`${!item.description && ''} font-space font-medium`}>{item.label}</p>
                        {item.description && item.description !== '' && !inline && <p className='text-xs mt-1.25 text-wrap'>{item.description}</p>}
                    </div>
                </div>
                ))
                }
            </div>
        </div>
    )
}

export default RadioGroup