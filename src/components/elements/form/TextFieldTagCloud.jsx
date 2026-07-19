import React, { useEffect, useState } from 'react'
import CloseIcon from '../icons/CloseIcon'

const TextFieldTagCloud = ({
    inputLabel, 
    fieldId, 
    hasError, 
    returnFieldValue, 
    preloadValue, 
    disabled, 
    autoFocus,
    maxLength,
    maxTags,
    requiredField,
    inputPlaceholder
}) => {
    const [ isFocused, setIsFocused ] = useState(false)
    const [ fieldValue, setFieldValue ] = useState('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const focusField = () => {
        setIsFocused(true)
        document.getElementById(fieldId).focus()
    }

    useEffect(() => {
    //   setFieldValue(preloadValue)
        if (autoFocus && autoFocus === true) {
            focusField()
        }
    // eslint-disable-next-line no-use-before-define
    }, [autoFocus, focusField])

    const setValue = (value) => {
        setFieldValue(value)
        // returnFieldValue(value)
    }

    const [tags, setTags] = useState(preloadValue ? preloadValue : [])

    const addTag = (e) => {
        if(disabled){
            return
        }
        e.preventDefault();
        if(tags.length === maxTags) {
            return
        }

        if(tags.filter((item) => {return item === fieldValue}).length > 0) {
            focusField()
            return
        }
        
        const tempTags = [...tags]
        tempTags.push(fieldValue)
        setTags(tempTags)

        returnFieldValue(tempTags)
        setFieldValue('')
        focusField()
    }

    const removeTag = (toDelete) => {
        if(disabled){
            return
        }
        const tempTags = [...tags]
        const removed = tempTags.filter((tag)=>{
            return tag !== toDelete
        }) 
        setTags(removed)
        returnFieldValue(removed)   
    }


    return (
        <>
            <div className='relative flex items-center justify-between mb-1'>
                <label 
                    className={`text-sm lg:text-md cursor-text z-10 relative py-1 transition block duration-200  
                    ${hasError ? 'text-red-400' : 'text-gray-500 dark:text-gray-300'}`}
                >
                    {inputLabel} {requiredField && requiredField === true && <span className='text-red-400'>*</span>}
                </label>
                {hasError && <span className='text-red-400 text-xs'>{hasError}</span>}
            </div>
            <div 
                className={`rounded py-3 px-4 text-sm block w-full focus:outline-none hover:border-gray-200 dark:hover:border-stone-900 border bg-black/10 dark:bg-black/20 transition duration-200 focus:bg-white dark:focus:bg-stone-950 dark:focus:border-stone-700 font-outfit placeholder:font-outfit ${isFocused ? 'border-gray-800' : hasError ? 'border-red-400' : 'border-transparent'}`} 
                onClick={()=>{focusField()}} 
                onBlur={()=>{setIsFocused(false)}}
            >
                {/* {fieldValue} */}

                <div className='flex flex-wrap gap-3'>
                    {tags.map((tag, tagIndex)=>(
                        <span key={tagIndex} className='flex items-center gap-x-2 px-3 py-1 h-6 rounded bg-gray-100 dark:bg-stone-900 text-xs text-black dark:text-white w-max font-thin'>
                            {tag}
                            {!disabled && <button className='' onClick={()=>{removeTag(tag)}}>
                                <CloseIcon className={`w-4`} />
                            </button>}
                        </span>
                    ))}
                    {!disabled && <form onSubmit={(e)=>{addTag(e)}}>
                        <input 
                            id={fieldId} 
                            type="text" 
                            maxLength={maxLength}
                            className={`z-30 border-transparent bg-transparent outline-none min-w-12.5 w-inherit inline`} 
                            onFocus={()=>{setIsFocused(true)}} 
                            onChange={(e)=>{setValue(e.target.value)}}
                            value={fieldValue}
                            placeholder={inputPlaceholder}
                            disabled={disabled}
                        />
                    </form>}
                </div>

            </div>
        </>
    )
}

export default TextFieldTagCloud