import { SetStateAction, useEffect, useState } from 'react'
import { PlusCircle, Save } from 'react-feather';

import TaskItem from './taskItem'
import { typeTask } from '../../types/typeTask';
import { filterComplete, filterUnComplete, newTask, sortPriorityAsc, sortTitleAsc } from '../../utils/task';

function Task() {
  const [loading, setLoading] = useState<boolean>(true)
  const [task, setTask] = useState<string>('')
  const [list, setList] = useState<typeTask[]>([])
  const DEBUG = true  
  const complete = false
  const owner = 'samucaelrezende@gmail.com'

  useEffect(() => {
    if (DEBUG) setList([
      newTask({title: 'Tarefa 01', complete, owner, tags: ['Filipe', 'NEW'], priority: 1}), 
      newTask({title: 'Tarefa 02', complete, owner, priority: 2}), 
      newTask({title: 'Tarefa 03', complete, owner, priority: 3}), 
      newTask({title: 'Tarefa 04', complete, owner, priority: 2}), 
      newTask({title: 'Tarefa quase finalizada', complete, owner, priority: 1})].sort(sortPriorityAsc))
    setLoading(false)
  }, [DEBUG, complete, owner])
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTask(e.target.value)
  }
  const handleKeyDown = (e:{key:string}) => {
    if(e.key === 'Enter') handleAdd()
  }

  const handleAdd = () => {
    if(task?.length){
      list.push(newTask({title: task, complete, owner, priority: 1}))
      setList(list)
      setTask('')
      if (DEBUG) console.debug(list)
    }
  }
  const handleRemoveItem = (index: number) => {
    if((list.length ?? 0) == 0 || index < 0 || index >= (list.length ?? 0)) return

    if (DEBUG) console.log(`removendo o ${index}: ${list[index]}`)
    setList((data) => data.filter((_, key) => key != index))

  }
  const handleSaveItem = (item: typeTask, index: number) => {
    list[index] = item
    const newList = [...list.filter(filterUnComplete).sort(sortPriorityAsc), ...list.filter(filterComplete).sort(sortTitleAsc)]
    setList(newList)
    if (DEBUG) console.debug(index, item, newList)
}

  const handleSave = () => {
    if (DEBUG) console.debug(list);
    
  }

  // if (DEBUG) console.debug(list)

  return (
    <>
      <div className='absolute top-4 right-4 p-8 border border-slate-600 rounded-xl bg-black/50 w-[30rem]'>
        <div className='text-3xl mb-8 '>Lista de Tarefas do Samuel:</div>
        {loading && <div className='text-xl animate-pulse'>loading...</div>}
        {!loading && <div className='flex flex-row gap-2 items-center pb-2'>
          <div className='text-xl '>Tarefa:</div>
          <div className=''>
            <input type="text" name="tarefa" id="tarefa" value={task} 
            className='bg-transparent border-0 border-b border-b-slate-500 focus:outline-none px-2 text-2xl' 
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            autoFocus
            />
          </div>
          <div>
            <PlusCircle onClick={handleAdd} className='cursor-pointer hover:text-green-500'/>
          </div>
        </div>}
        
        {!loading && list.length > 0 && <div className='flex flex-col gap-2 border border-slate-600 rounded-xl py-4 my-8'>
          {list.map((item, index) => 
            <TaskItem key={index} item={item} 
              handleRemove={() => handleRemoveItem(index)} 
              handleSave={handleSaveItem} 
              index={index} />
          )}
        </div>}
        {!loading && <div>
          <button onClick={handleSave} className='w-full flex items-center justify-center gap-2'>
            <Save />
            Salvar
          </button>
        </div>}
      </div>
    </>
  )
}

export default Task
