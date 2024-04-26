import { SetStateAction, useEffect, useState } from 'react';
import { Trash2, Edit3, Save, XCircle, Square, CheckSquare } from 'react-feather';

import { propsTaskItem } from './propsTaskItem';
import { newTask } from '../../utils/task';

function TaskItem({item, index, handleRemove, handleSave}: propsTaskItem) {
  const [task, setTask] = useState<string>(item.title)
  const [complete, setComplete] = useState<boolean>(item.complete)
  const [edit, setEdit] = useState<boolean>(false)
  const DEBUG = false

  useEffect(() => {
    setTask(item.title)
    setComplete(item.complete)
  }, [item])

  const handleEdit = () => setEdit(!complete && true)
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTask(e.target.value)
  }
  const handleKeyDown = (e:{key:string}) => {
    if(e.key === 'Enter') handleSaveButtom()
  }
  const handleSaveButtom = () => {
    setEdit(false)
    handleSave(newTask(task, complete), index)
  }
  const handleCancelButtom = () => {
    setEdit(false)
    setTask(item.title)
  }
  const handleCheckComplete = () => {
    setComplete(true)
    handleSave(newTask(task, true), index)
  }
  const handleCheckUnComplete = () => {
    setComplete(false)
    handleSave(newTask(task, false), index)
  }


  return (
    <div className='flex w-full text-xl items-center justify-between px-4  hover:text-white/75 '>
      <div>
        {complete 
        ? <CheckSquare onClick={handleCheckUnComplete} className='cursor-pointer ' />
        : <Square onClick={handleCheckComplete} className='cursor-pointer '/>}
      </div>
      <div className={`w-full text-left pl-2 ${complete ? 'line-through' : ''}`}>
        {edit ? 
          <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={task} className='bg-transparent border-0 border-b border-b-slate-500 focus:outline-none px-2 text-2xl text-white' /> : 
          <div onDoubleClick={handleEdit} className='cursor-pointer'>
            {task} 
            {DEBUG && ` (${index})`}
            </div>
        }
      </div>
      {!complete && <div className='flex'>
        {edit 
          ? <>
            <div className='px-2 hover:text-green-500 cursor-pointer' onClick={handleSaveButtom}><Save size={16} /></div>
            <div className='px-2 hover:text-red-500 cursor-pointer' onClick={handleCancelButtom}><XCircle size={16} /></div>
          </>
          : <>
            <div className='px-2 hover:text-yellow-500 cursor-pointer' onClick={handleEdit}><Edit3 size={16} /></div>
            <div className='px-2 hover:text-red-500 cursor-pointer' onClick={handleRemove}><Trash2 size={16} /></div>
          </>
        }
      </div>}
    </div>
  )
}

export default TaskItem
