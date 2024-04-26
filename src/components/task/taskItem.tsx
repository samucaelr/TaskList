import { SetStateAction, useEffect, useState } from 'react';
import { Trash2, Edit3, Save, XCircle } from 'react-feather';

import { propsTaskItem } from './propsTaskItem';

function TaskItem({title, index, handleRemove, handleSave}: propsTaskItem) {
  const [task, setTask] = useState<string>(title)
  const [edit, setEdit] = useState<boolean>(false)
  const DEBUG = false

  useEffect(() => {setTask(title)}, [title])

  const handleEdit = () => setEdit(true)
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTask(e.target.value)
  }
  const handleKeyDown = (e:{key:string}) => {
    if(e.key === 'Enter') handleSaveButtom()
  }
  const handleSaveButtom = () => {
    setEdit(false)
    handleSave(task, index)
  }
  const handleCancelButtom = () => {
    setEdit(false)
    setTask(title)
  }

  return (
    <div className='flex w-full text-xl items-center justify-between px-4  hover:text-white/75 '>
      <div>
        {edit ? 
          <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={task} className='bg-transparent border-0 border-b border-b-slate-500 focus:outline-none px-2 text-2xl text-white' /> : 
          <div onDoubleClick={handleEdit} className='cursor-pointer'>
            {task} 
            {DEBUG && ` (${index})`}
            </div>
        }
      </div>
      <div className='flex'>
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
      </div>
    </div>
  )
}

export default TaskItem
