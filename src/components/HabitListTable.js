import React, { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './HabitListTable.css';
import GetNewHabit from './GetNewHabit';



function HabitListTable() {
    const [ isModalOpen, setModelOpen ] = useState(false);
    const [ newRow, setRow ] = useState([]);
    const [ rowToEdit, setRowToEdit ] = useState(null);

    const deleteRow = ( targetIndex ) => {
        setRow( newRow.filter( ( _ , index) => { return index !== targetIndex}) )
    }

    const editRow = ( row, targetIndex ) => {
        setRowToEdit(targetIndex);
        setModelOpen(true);
        
    }
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Habit Name</th>
                    <th className='expand'>Habit Description</th>
                    <th>Habit Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { newRow.map( (row, targetIndex)  => { 
                    const statusText = row.habitStatus.charAt(0).toUpperCase() + row.habitStatus.slice(1);
                    return (
                    <tr key={row.id}>
                        <td>{row.habitName}</td>
                        <td>{row.habitDescription}</td>
                        <td><span className={`label label-${row.habitStatus}`}>{statusText}</span></td>
                        <td>
                            <span className='actions'>
                                <BsFillTrashFill onClick={() => deleteRow(targetIndex) } className='delete-btn'/>
                                <BsFillPencilFill onClick={() => editRow(row, targetIndex)} className='edit-btn'/>
                            </span>
                        </td>
                    </tr>
                ) } ) }
            </tbody>
        </table>
        <div>
            <button className='btn' onClick={() => setModelOpen(true)}>Add a habit</button>
        </div>
        {isModalOpen && <GetNewHabit rowToEdit={rowToEdit} defaultValue={rowToEdit !== null && newRow[rowToEdit]} newRow={newRow} setNewRow={setRow} isOpen={isModalOpen} closeModal={() => {setModelOpen(false); setRowToEdit(null)}}/>}
    </div>
  )
}

export default HabitListTable