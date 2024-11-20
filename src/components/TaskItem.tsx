"use client"
type TaskItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTask: (id: string, complete: boolean) => void;
};

function TaskItem({ id, title, complete, toggleTask }: TaskItemProps) {


  return (
    <li className='flex gap-1 items-center'>
      <input
        type='checkbox'
        id={id}
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={(e) => toggleTask(id, e.target.checked)}
      />
      <label htmlFor={id} className='peer-checked:line-through cursor-pointer'>
        {title}
      </label>
    </li>
  );
}

export default TaskItem;
