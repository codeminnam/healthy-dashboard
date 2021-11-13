import React from 'react';
import { Task } from '../../../interfaces/types';

interface TaskItemProps {
  task: Task;
  handleToggleTask: (selectedTaskId: number) => void;
  handleDeleteClick: (selectedTaskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  handleToggleTask,
  handleDeleteClick,
}) => (
  <li>
    <label htmlFor={task.id.toString()}>{task.text}</label>
    <input
      id={task.id.toString()}
      type="checkbox"
      checked={task.completed}
      onClick={() => handleToggleTask(task.id)}
    />
    <button onClick={() => handleDeleteClick(task.id)}>delete</button>
  </li>
);
export default TaskItem;
