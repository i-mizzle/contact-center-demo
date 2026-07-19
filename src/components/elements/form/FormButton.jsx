import React from 'react'
// import InlinePreloader from '../InlinePreloader'

const FormButton = ({buttonLabel, buttonAction, processing, disabled}) => {
  return (
    <button type='submit' disabled={processing || disabled} onClick={()=>{buttonAction()}} className='w-full capitalize px-4 py-3.5 rounded-lg bg-stone-800 dark:bg-light-green active:bg-accent-dark shadow-xl shadow-accent/10 text-white dark:text-stone-800 border-2 border-at-white text-sm dark:border-stone-950 text-md font-semibold transition duration-200 hover:bg-at-black dark:hover:bg-at-dark-gray dark:hover:text-black flex items-center justify-center cursor-pointer active:shadow-non disabled:opacity-60 disabled:cursor-not-allowed'>{processing ? <div className='btn-loader' /> : buttonLabel }</button>
  )
}

export default FormButton