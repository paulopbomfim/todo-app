import { useState } from 'react';

import { CheckCircle, Trash } from 'phosphor-react';


import styles from './TaskCard.module.css';

interface TaskProp {
  id: string
  content: string;
  status: boolean;
  onDeleteTask: (id: string) => void;
  onToggleTaskStatus: (id: string) => void;
}

export function TaskCard({ id, content, status, onToggleTaskStatus, onDeleteTask }: TaskProp) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleTaskStatus() {
    const updatedTask = !isTaskCompleted;
    setIsTaskCompleted(updatedTask);

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
