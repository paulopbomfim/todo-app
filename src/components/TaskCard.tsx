import { CheckCircle, Trash } from 'phosphor-react';

import styles from './TaskCard.module.css';

export function TaskCard() {
  return (
    <div className={ styles.taskCardContainer }>
      <label className={ styles.taskCheckbox }>
        <div className={ styles.taskCheckboxWrapper}>
          <input type="checkbox"/>
          <span><CheckCircle size={32} weight="bold" /></span>
        </div>
      </label>
      <p className={ styles.taskTextCompleted }>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae odio libero porro consequatur eos, voluptates voluptatibus? Officia autem fugit quisquam vitae. Aliquam obcaecati esse quo officiis in laborum corporis cupiditate.</p>
      <button type="button" className={ styles.excludeTaskButton }>
        <Trash weight='bold' size={20}/>
      </button>
    </div>
  )
}
