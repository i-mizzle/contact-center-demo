import React from 'react'
import TextareaField from '../../form/TextareaField';
import FormButton from '../../form/FormButton';

const DeployAsset = ({asset, doDeploy, close}) => {
  return (
    <div className="w-full">
        <p className="text-sm mb-4">Click on "Confirm and Deploy" to dispatch {asset?.name} to this incident. Please add a note for the responders if needed.</p>

        <TextareaField 
            inputLabel="Note" 
            fieldId="dispatch-note" 
            returnFieldValue={()=>{}} 
            preloadValue="" 
            inputPlaceholder="Add a note for the responders if required"
        />

        <div className="w-full mt-8 flex items-center gap-x-4">
            <div className="w-max">
                <button 
                className='p-4 cursor-pointer bg-transparent rounded-lg text-sm text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-900 transition duration-200' onClick={()=>{close()}}
                >
                Cancel
                </button>
            </div>
            <FormButton buttonLabel={`Confirm and Deploy`} buttonAction={()=>{
                doDeploy()
                close()
            }} />
        </div>

    </div>
  )
}

export default DeployAsset