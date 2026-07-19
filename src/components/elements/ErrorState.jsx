import React from 'react'
import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon';

const ErrorState = ({errorStateText}) => {
  return (
    <div className='h-inherit flex flex-col items-center'>
        <ExclamationTriangleIcon className={`w-8 h-8 text-red-400 mb-2`}/>
        <p className='text-xs text-red-500 dark:text-red-300'>{errorStateText}</p>
    </div>
  )
}

export default ErrorState