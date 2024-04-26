import { SetStateAction, useEffect, useState } from 'react'
import { PlusCircle, Save } from 'react-feather';

import TaskItem from './taskItem'

function Task() {
  const [loading, setLoading] = useState<boolean>(true)
  const [task, setTask] = useState<string>('')
  const [list, setList] = useState<string[]>([])
  const DEBUG = true

  useEffect(() => {
    if (DEBUG) setList(['TareFa 01', 'Tarefa 02', 'Tarefa 03', 'Tarefa 04', 'Tarefa quase finalizada'])
    setLoading(false)
  }, [])
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTask(e.target.value)
  }
  const handleKeyDown = (e:{key:string}) => {
    if(e.key === 'Enter') handleAdd()
  }

  const handleAdd = () => {
    if(task?.length){
      list.push(task)
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
  const handleSaveItem = (title: string, index: number) => {
    list[index] = title
    setList(list)
    if (DEBUG) console.debug(list)
}

  const handleSave = () => {
    if (DEBUG) console.debug(list);
    
  }

  // if (DEBUG) console.debug(list)

  return (
    <>
      <div className='absolute top-4 right-4 p-8 border border-slate-600 rounded-xl bg-black/50'>
        <div className='text-3xl mb-8 '>Lista de Tarefas do Samuel:</div>
        {loading && <div className='text-xl animate-pulse'>loading...</div>}
        {!loading && <div className='flex flex-row gap-2 items-center pb-2'>
          <div className='text-xl '>tarefa:</div>
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
          {list.map((title, index) => <TaskItem key={index} title={title} handleRemove={() => handleRemoveItem(index)} handleSave={handleSaveItem} index={index} />
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
