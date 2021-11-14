import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Task } from '../../interfaces/types';
import TaskItem from './taskItem.tsx';

const TASK_ITEMS = 'tasks';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: left;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 10px 10px 26px -9px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 10px 10px 26px -9px rgba(0, 0, 0, 0.53);
  box-shadow: 10px 10px 26px -9px rgba(0, 0, 0, 0.53);
`;

const TaskInput = styled.input`
  width: 400px;
  padding: 20px 40px;
  border: none;
  background-color: #ffb48f;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

const TaskListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
  font-size: 16px;
  width: 100%;
`;

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    localStorage.setItem(TASK_ITEMS, JSON.stringify([...tasks, newTask]));
    setInputValue('');
  };

  const handleToggleTask = (selectedTaskId: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === selectedTaskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(newTasks);
    localStorage.setItem(TASK_ITEMS, JSON.stringify(newTasks));
  };

  const handleDeleteClick = (selectedTaskId: number) => {
    const newTasks: Task[] = tasks.filter((item) => item.id !== selectedTaskId);

    setTasks(newTasks);
    localStorage.setItem(TASK_ITEMS, JSON.stringify(newTasks));
  };

  const renderForm = () => (
    <form onSubmit={handleFormSubmit}>
      <TaskInput
        type="text"
        name="taskInput"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        placeholder="Type your task and press enter to add to list"
      />
    </form>
  );

  const renderTaskList = () => (
    <TaskListContainer role="list" aria-labelledby="list-heading">
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          task={item}
          handleToggleTask={handleToggleTask}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </TaskListContainer>
  );

  useEffect(() => {
    const loadedTasks = localStorage.getItem(TASK_ITEMS);

    if (loadedTasks) {
      const parsedTasks = JSON.parse(loadedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  return (
    <TaskContainer>
      {renderForm()}
      {renderTaskList()}
    </TaskContainer>
  );
};

export default TaskManager;
