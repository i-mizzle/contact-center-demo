import React, { useState } from 'react'
import EyeIcon from '../icons/EyeIcon'
import EyeOffIcon from '../icons/EyeOffIcon'
import PasswordMeter from '../PasswordMeter'

const PasswordField = ({
    requiredField,
    inputLabel, 
    fieldId, 
    hasError, 
    returnFieldValue, 
    preloadValue, 
    disabled, 
    inputPlaceholder,
    maxLength,
    showPasswordMeter
}) => {
    const [ fieldValue, setFieldValue ] = useState(preloadValue)
    const [ hiddenInput, setHiddenInput ] = useState(true)
    // const id = generateCode(12)

    // const [fieldId, setFieldId] = useState(id)

    const toggleHiddenInput = (e) => {
        e.preventDefault()
        setHiddenInput(!hiddenInput)
    }

    const setValue = (value) => {
        setFieldValue(value)
        returnFieldValue(value)
    }

    return (
        <div className='relative'
        >
            <div className='relative flex items-center justify-between mb-1'>
                <label 
                    className={`text-sm lg:text-md cursor-text z-10 relative py-1 transition block duration-200  
                    ${hasError ? 'text-red-400' : 'text-gray-500 dark:text-gray-300'}`}
                >
                    {inputLabel} {requiredField && requiredField === true && <span className='text-red-400'>*</span>}
                </label>
                {hasError && <span className='text-red-400 text-xs'>{hasError}</span>}
            </div>

            <span className={`absolute z-40 cursor-pointer pt-2 top-10 right-4`} onClick={(e)=>{toggleHiddenInput(e)}}>
                {hiddenInput ?
                <EyeIcon className={`w-5 h-5 text-gray-600 dark:text-stone-500`} />
                :
                <EyeOffIcon className={`w-5 h-5 text-gray-600 dark:text-stone-500`} />}
            </span>

            <input 
                id={fieldId} 
                type={hiddenInput ? 'password' : "text"} 
                maxLength={maxLength}
                className={`rounded py-3 px-4 text-sm block w-full focus:border-gray-800 focus:outline-none hover:border-gray-200 dark:hover:border-stone-900 border bg-black/10 dark:bg-black/20 transition duration-200 focus:bg-white dark:focus:bg-stone-950 dark:focus:border-stone-700 font-outfit placeholder:font-outfit  ${hasError ? 'border-red-400' : 'border-transparent'}`}
                placeholder={inputPlaceholder}
                onChange={(e)=>{setValue(e.target.value)}}
                value={fieldValue}
                disabled={disabled}
            />

            {showPasswordMeter === true && <PasswordMeter password={fieldValue} />}


            

        </div>
    )
}
export default PasswordField