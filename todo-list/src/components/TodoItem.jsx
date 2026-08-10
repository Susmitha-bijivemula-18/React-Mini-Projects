import React from 'react';
import { IoTrashOutline, IoCheckmark } from 'react-icons/io5';

function TodoItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''} priority-${task.priority}`}>
      {/* Checkbox Wrapper */}
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="todo-checkbox-hidden"
        />
        <div className={`todo-checkbox-custom ${task.completed ? 'checked' : ''}`}>
          {task.completed && <IoCheckmark className="checkmark-icon" />}
        </div>
      </label>

      {/* Task Content */}
      <div className="todo-content">
        <span className="todo-text">{task.text}</span>
        <div className="todo-metadata">
          {task.priority && (
            <span className={`priority-badge ${task.priority}`}>
              {task.priority}
            </span>
          )}
          {task.createdAt && (
            <span className="todo-time">{task.createdAt}</span>
          )}
        </div>
      </div>

      {/* Delete Action */}
      <button
        onClick={() => onDeleteTask(task.id)}
        className="todo-delete-btn"
        aria-label="Delete Task"
      >
        <IoTrashOutline className="delete-icon" />
      </button>
    </div>
  );
}

export default TodoItem;
