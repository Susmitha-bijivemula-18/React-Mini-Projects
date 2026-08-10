import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';

function TodoInput({ onAddTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium'); // Default priority: medium

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Pass both text and priority state to the parent component
    onAddTask(text, priority);

    setText('');
    setPriority('medium'); // Reset priority to default
  };

  return (
    <form className="todo-form-container" onSubmit={handleSubmit}>
      <div className="todo-input-row">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button type="submit" className="todo-add-btn" aria-label="Add Task">
          <IoAdd className="btn-icon" />
          <span>Add</span>
        </button>
      </div>

      {/* Priority Pill Selector */}
      <div className="priority-selector">
        <span className="priority-label">Priority:</span>
        <div className="priority-pills">
          {['low', 'medium', 'high'].map((p) => (
            <button
              key={p}
              type="button"
              className={`priority-pill ${p} ${priority === p ? 'active' : ''}`}
              onClick={() => setPriority(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}

export default TodoInput;
