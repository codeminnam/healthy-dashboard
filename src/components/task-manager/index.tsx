import React, { useEffect, useState } from 'react';
import { Task } from '../../interfaces/types';
import TaskItem from './taskItem.tsx';

const TASK_ITEMS = 'tasks';

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
      <input
        type="text"
        name="taskInput"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        placeholder="Type your task and press enter to add to list"
      />
    </form>
  );

  const renderTaskList = () => (
    <ul role="list" aria-labelledby="list-heading">
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          task={item}
          handleToggleTask={handleToggleTask}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </ul>
  );

  useEffect(() => {
    const loadedTasks = localStorage.getItem(TASK_ITEMS);

    if (loadedTasks !== null) {
      const parsedTasks = JSON.parse(loadedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  return (
    <>
      {renderForm()}
      {renderTaskList()}
    </>
  );
};

export default TaskManager;
