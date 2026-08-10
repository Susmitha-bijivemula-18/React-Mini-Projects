import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // useState() initialization:
  // We initialize the tasks state with sample items.
  // Each task has: id, text, completed, priority (low/medium/high), and a createdAt string.
  const [tasks, setTasks] = useState([]);

  // 1. ADD TASK:
  // Adds a new task to our state array with selected priority and timestamp.
  const addTask = (text, priority = 'medium') => {
    const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newTask = {
      id: Date.now(), // Unique ID
      text: text,
      completed: false,
      priority: priority,
      createdAt: formattedTime,
    };

    // Immutably append new task
    setTasks([...tasks, newTask]);
  };

  // 2. TOGGLE TASK:
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // 3. DELETE TASK:
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Derived state calculations
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  // Progress Bar Percentage calculation
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="app-container">
      {/* Premium Dashboard-style Card Container */}
      <div className="glass-card">
        {/* Header */}
        <header className="app-header">
          <div className="header-info">
            <h1 className="logo-text">TaskFlow</h1>
            <p className="subtitle-text">Stay organized. Get things done.</p>
          </div>

          {/* Dashboard Stats */}
          <div className="stats-container">
            <div className="stat-box">
              <span className="stat-num">{totalTasks}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-box">
              <span className="stat-num completed-accent">{completedTasks}</span>
              <span className="stat-label">Done</span>
            </div>
          </div>
        </header>

        {/* Progress Bar Component */}
        <div className="progress-wrapper">
          <div className="progress-meta">
            <span className="progress-label">Task Progress</span>
            <span className="progress-val">{completionPercentage}%</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Input area */}
        <TodoInput onAddTask={addTask} />

        {/* Dynamic Task List rendered using map() */}
        <TodoList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>

      {/* React Learning Summary Panel */}
      <footer className="learning-badge">
        React Lists & Keys learning project
      </footer>
    </div>
  );
}

export default App;
