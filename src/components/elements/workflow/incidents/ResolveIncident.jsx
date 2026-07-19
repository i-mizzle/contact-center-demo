import React from 'react'
import TextareaField from '../../form/TextareaField';
import FormButton from '../../form/FormButton';

const ResolveIncident = ({close, doResolve}) => {
  return (
    <div>
        <p className="text-sm">Clicking on "Confirm and Resolve" will mark this incident as resolved. All deployed Assets with responders, notes and communications will be locked and uneditable. Please proceed when you are sure.</p>

        <TextareaField 
            inputLabel="Resolution Note" 
            fieldId="resolution-note" 
            returnFieldValue={()=>{}} 
            preloadValue="" 
            inputPlaceholder="Add a resolution note to resolve this incident"
            requiredField
        />

        <div className="w-full mt-8 flex items-center gap-x-4">
            <div className="w-max">
                <button 
                className='p-4 cursor-pointer bg-transparent rounded-lg text-sm text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-900 transition duration-200' onClick={()=>{close()}}
                >
                Cancel
                </button>
            </div>
            <FormButton buttonLabel={`Confirm and Resolve`} buttonAction={()=>{
                doResolve()
                close()
            }} />
        </div>
    </div>
  )
}

export default ResolveIncident