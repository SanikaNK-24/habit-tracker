import React, { useState } from 'react'
// import HabitListTable from './HabitListTable';
import ReactDOM from 'react-dom';
import './GetNewHabit.css';


function GetNewHabit({rowToEdit, defaultValue, newRow, setNewRow, isOpen, closeModal}) {

    const [ habitName, setHabitName ] = useState(defaultValue.habitName || '');
    const [ habitDescription, setHabitDescription ] = useState(defaultValue.habitDescription || '');
    const [ habitStatus, setHabitStatus ] = useState( defaultValue.habitStatus || 'done');
    const [ validationError, setValidationError ] = useState('');

    const formValidation = () => {
        if( habitName && habitDescription ) {
            return true;
        } else {
            let errorFields = [];
            if( habitName === '' ) { errorFields.push('Name') } 
            if( habitDescription === '' ) { errorFields.push('Description') }
            setValidationError(errorFields.join(', '))
            return false;
        }
    }
    const saveHabitData = (e) => {
        e.preventDefault();
        if( !formValidation() ) return;
        
        rowToEdit === null ?
        setNewRow( [...newRow, {
            habitName, habitDescription, habitStatus, id: new Date().getTime() 
        }] ) :
        setNewRow( newRow.map( ( currRow, idx ) => {  return idx !== rowToEdit ? currRow : {...currRow, habitName, habitDescription, habitStatus} }))
        closeModal(); 
    }

    return ( ReactDOM.createPortal(
         <>
        { isOpen && 
        <div className='modal-wrapper' onClick={(e) => { if(e.target.className === 'modal-wrapper')closeModal() }}>
            <div className='modal-form'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='habitName' className='fieldName'> Name: </label>
                        <input name='habitName' placeholder='Enter your habit name here...' value={habitName} onChange={e => setHabitName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='habitDesciption' className='fieldName'> Description: </label>
                        <textarea name='habitDesciption' placeholder='Tell me more about your habit...' value={habitDescription} onChange={e => setHabitDescription(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='status' className='fieldName'> Status: </label>
                        <select name='status' value={habitStatus} onChange={e => setHabitStatus(e.target.value)}>
                            <option value="done">Done</option>
                            <option value="pending">Pending</option>
                            <option value="missed">Missed</option>
                        </select>
                    </div>
                    {validationError.length > 0 && <div className='error'>Please fill out the following fields: {validationError}</div>}
                    <button className='btn' onClick={saveHabitData} type='submit'>Submit</button>
                </form>
            </div>
            </div>
        }
        </>
        , document.getElementById('modal-root')
    )
        
    )
}

export default GetNewHabit