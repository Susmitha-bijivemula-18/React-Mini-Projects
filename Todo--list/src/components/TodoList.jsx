import React from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList Component
 * 
 * Demonstrates:
 * 1. Rendering dynamic list from state using the JavaScript map() method.
 * 2. The critical importance of the unique 'key' prop.
 */
function TodoList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="todo-empty-state">
        <p className="empty-title">All clear!</p>
        <p className="empty-subtitle">Add a task above to start your flow.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {/* 
        We use tasks.map() to iterate over our array and return a list of React components.
        
        CRITICAL LEARNING POINT: The 'key' prop:
        - Why key={task.id} instead of key={index}?
          React uses the key to identify which items have changed, been added, or been removed.
          Using the array index as a key is a known anti-pattern for dynamic lists. If the list 
          changes (e.g. we delete an item in the middle or reorder), using the index can lead to 
          unwanted state rendering bugs, broken animations, or performance issues.
          By giving each task a unique ID (e.g., Date.now()), React can track each list item 
          persistently and render updates efficiently.
      */}
      {tasks.map((task) => (
        <TodoItem
          key={task.id} // Unique key helps React keep track of this specific element
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
