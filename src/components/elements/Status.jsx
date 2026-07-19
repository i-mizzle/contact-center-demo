import React from 'react'

const Status = ({status}) => {
  return (
    <div className={`rounded w-max text-xs flex items-center gap-x-1.25 px-2 py-1.25 capitalize font-space-grotesk font-medium
        ${['ACTIVE', 'RESOLVED', 'SUCCESSFUL', 'SUCCESS', 'VERIFIED'].includes(status) ? 'bg-green-500/5 text-green-600' : ''}
        ${['FAILED', 'REJECTED', 'CANCELLED'].includes(status) ? 'bg-red-500/5 text-red-600 dark:text-red-400' : ''}
        ${['PENDING', 'DISABLED'].includes(status) ? 'bg-gray-500/5 text-gray-600': ''}
        ${['SUSPENDED'].includes(status) ? 'bg-yellow-600/10 text-yellow-800 dark:text-yellow-400': ''}
    `}>
        {status.toLowerCase()}
    </div>
  )
}

export default Status