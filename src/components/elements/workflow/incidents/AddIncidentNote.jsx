import React, { useState } from 'react'
import TextareaField from '../../form/TextareaField';
import FormButton from '../../form/FormButton';

const AddIncidentNote = ({doAddNote, close}) => {
    const [note, setNote] = useState('')
  return (
    <div>
        <p className="text-sm mb-4">Add a note on this incident below.</p>

        <TextareaField 
            inputLabel="Incident Note" 
            fieldId="incident-note" 
            returnFieldValue={(e)=>{setNote(e.target.value)}} 
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
            <FormButton buttonLabel={`Add Incident Note`} buttonAction={()=>{
                doAddNote(note)
                close()
            }} />
        </div>
    </div>
  )
}

export default AddIncidentNote