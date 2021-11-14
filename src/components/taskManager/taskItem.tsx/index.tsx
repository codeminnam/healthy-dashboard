import React from 'react';
import styled from 'styled-components';
import { Task } from '../../../interfaces/types';

interface TaskItemProps {
  task: Task;
  handleToggleTask: (selectedTaskId: number) => void;
  handleDeleteClick: (selectedTaskId: number) => void;
}

const TaskItemContainer = styled.li`
  margin: 10px 0;
`;

const CheckBox = styled.input`
  margin-left: 10px;
  transform: scale(1.3);
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  border: none;
  background-color: #ffb48f;
  border-radius: 5px;
`;

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  handleToggleTask,
  handleDeleteClick,
}) => (
  <TaskItemContainer>
    <label htmlFor={task.id.toString()}>{task.text}</label>
    <CheckBox
      id={task.id.toString()}
      type="checkbox"
      checked={task.completed}
      onClick={() => handleToggleTask(task.id)}
    />
    <DeleteButton onClick={() => handleDeleteClick(task.id)}>X</DeleteButton>
  </TaskItemContainer>
);
export default TaskItem;
