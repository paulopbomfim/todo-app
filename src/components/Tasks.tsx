import { EmptyTaskList } from './EmptyTaskList';
import { TaskCard } from './TaskCard';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={ styles.tasksContainer }>
      <header>
        <div className={ styles.tasksMarker }>
          <strong className={styles.createdTasks}>Tarefas criadas</strong>
          <span className={styles.marker}>20</span>
        </div>

        <div className={ styles.tasksMarker }>
          <strong className={styles.concludedTasks}>Concluídas</strong>
          <span className={styles.marker}>1 de 20</span>
        </div>
      </header>

      <main>
        {/* <EmptyTaskList /> */}
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </main>
    </div>
  )
}
