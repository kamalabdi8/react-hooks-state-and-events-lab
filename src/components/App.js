import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

function App() {
  const TASKS = [
    { id: 1, text: 'Learn React', category: 'Programming' },
    { id: 2, text: 'Buy Groceries', category: 'Chores' },
    { id: 3, text: 'Walk the Dog', category: 'Chores' },
  ];

  const CATEGORIES = ['All', 'Programming', 'Chores', 'Personal'];

  const [tasks, setTasks] = useState(TASKS);  // Store tasks in state
  const [selectedCategory, setSelectedCategory] = useState('All');  // Store the selected category

  // Function to handle adding new tasks
  const handleTaskFormSubmit = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Function to handle deleting tasks
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}

export default App;
