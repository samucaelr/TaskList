import PriorityIcon from '../priorityIcon';
import Tag from '../tag';
import { propsTaskItemEdit } from './propsTaskItemEdit';

function TaskItemEdit({task, setTask}: propsTaskItemEdit) {
  const {detail, dateFinish, priority, tags } = task

  const handPriorityClick = () => {
    // a prioridade tem que estar entre 1 e 3
    // 1 => 2 -> 2 => 3
    // 2
    const newPriority = priority%3+1
    // console.log(priority, newPriority);
    
    setTask((task) => ({...task, priority:newPriority}))
  }

  return (
    <div className='flex flex-col p-2 mt-2 items-start w-full'>
      <div className='flex gap-2 justify-end w-full'>
        {tags?.map((name, key) => <Tag key={key} name={name} />)}
        <div onClick={handPriorityClick} className='cursor-pointer'>
          <PriorityIcon value={priority} />
          </div> 
      </div>
      <div className='w-full text-start'>
        <div className='w-full'>Detail: {detail}</div>
        <div className='w-full'>
          <textarea name="detail" cols={30} rows={10} 
            className='w-full border rounded-xl p-2'
            value={detail}
            
            ></textarea>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='whitespace-nowrap'>Date to finish:</div>
        <div className='border-b'><input value={dateFinish} type="datetime-local" name="dateFinish" /></div>
      </div>
    </div>
  )
}

export default TaskItemEdit
