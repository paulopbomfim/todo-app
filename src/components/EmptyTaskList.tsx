
import clipboardImg from '../assets/Clipboard.svg';
import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
    <div className={ styles.emptyTaskListContainer }>
      <img src={ clipboardImg } />

      <div className={styles.emptyTaskListTextArea}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
