import React from 'react'
import OpenFolderIcon from './icons/OpenFolderIcon';

const EmptyState = ({emptyStateText}) => {
  return (
    <div className='min-h-[50vh] py-20 h-inherit flex flex-col items-center'>
        <OpenFolderIcon className={`w-8 h-8 text-gray-400 mb-2`}/>
        <p className='text-xs text-gray-500'>{emptyStateText}</p>
    </div>
  )
}

export default EmptyState