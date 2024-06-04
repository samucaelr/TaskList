import { useEffect, useState } from 'react';
import { Trash2, Edit3, Save, XCircle, Square, CheckSquare } from 'react-feather';

import { propsTaskItem } from './propsTaskItem';
import TaskItemEdit from './taskItemEdit';
import { typeTask } from '../../types/typeTask';
import PriorityIcon from '../priorityIcon';

function TaskItem({item, index, handleRemove, handleSave}: propsTaskItem) {
  const [task, setTask] = useState<typeTask>(item)
  const [edit, setEdit] = useState<boolean>(false)
  const DEBUG = false
  const {title, complete, priority} = item

  useEffect(() => {
    setTask(item)
  }, [item])

  const handleEdit = () => setEdit(!complete && true)
  const handleChange = (e: { target: { value: string } }) => {
    setTask((task)=>({...task, title: e.target.value}))
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
    setTask((task)=>task)
  }
  const handleCheckComplete = () => {
    handleSave({...task, complete: true}, index)
  }
  const handleCheckUnComplete = () => {
    handleSave({...task, complete: false}, index)
  }


  return (
    <div className={`flex flex-col w-full transition-all px-4 hover:text-white/75 
    ${edit ? 'border-slate-600 border-b h-82': 'h-8'} `}>
      <div className='flex w-full text-xl items-center justify-between'>
        {!edit && <div className='pr-2'>
          {complete 
          ? <CheckSquare onClick={handleCheckUnComplete} className='cursor-pointer ' />
          : <Square onClick={handleCheckComplete} className='cursor-pointer '/>}
        </div>}
        <div className={`w-full text-left ${complete ? 'line-through' : ''}`}>
          {edit ? 
              <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={title} className='bg-transparent border-0 border-b border-b-slate-500 focus:outline-none px-2 text-2xl text-white w-full'  /> 
            : 
            <div onDoubleClick={handleEdit} className='cursor-pointer text-ellipsis line-clamp-1' title={title}>
               {title} 
              {DEBUG && ` (${index})`}
              </div>
          }
        </div>
        {!complete && <PriorityIcon value={priority} />}

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
      {edit && <TaskItemEdit task={task} setTask={setTask} />}
    </div>
  )
}

export default TaskItem
