import { useState } from 'react';

import { CheckCircle, Trash } from 'phosphor-react';


import styles from './TaskCard.module.css';
import { Task } from '../App';

interface TaskProp {
  id: string
  content: string;
  onDeleteTask: (id: string, task: Task) => void;
  onToggleTaskStatus: (id: string, task: Task) => void;
}

export function TaskCard({ id, content, onToggleTaskStatus, onDeleteTask }: TaskProp) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id, {id, content});
  }

  function handleToggleTaskStatus() {
    const updatedTask = !isTaskCompleted;
    setIsTaskCompleted(updatedTask);
    onToggleTaskStatus(id, {id, content})
  }

  return (
    <div className={ styles.taskCardContainer }>
      <div className={ styles.taskCheckboxAndContentWrapper }>
        <label className={ styles.taskCheckbox }>
          <div className={ styles.taskCheckboxWrapper}>
            <input
              type="checkbox"
              onChange={ handleToggleTaskStatus }
            />
            <span><CheckCircle size={32} weight="bold" /></span>
          </div>
        </label>
        <p className={ isTaskCompleted ? styles.taskTextCompleted : styles.taskText }>{ content }</p>
      </div>

      <button
        type="button"
        onClick={ handleDeleteTask }
        className={ styles.excludeTaskButton }
      >
        <Trash weight='bold' size={20}/>
      </button>
    </div>
  )
}
