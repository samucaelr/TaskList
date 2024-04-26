import PriorityIcon from '../priorityIcon';
import Tag from '../tag';
import { propsTaskItemEdit } from './propsTaskItemEdit';

function TaskItemEdit({task, setTask}: propsTaskItemEdit) {
  const {detail, dateFinish, priority, tags } = task

  return (
    <div className='flex flex-col p-2 mt-2 items-start w-full'>
      <div className='flex gap-2 justify-end w-full'>
        {tags?.map((name, key) => <Tag key={key} name={name} />)}
        <PriorityIcon value={priority} />
      </div>
      <div>Detail: {detail}</div>
      <div>Priority: {priority} </div>
      <div>Date to finish: {dateFinish}</div>
    </div>
  )
}

export default TaskItemEdit
