import { Dispatch, SetStateAction } from 'react';

import { EmptyTaskList } from './EmptyTaskList';
import { TaskCard } from './TaskCard';
import { Task } from '../App';

import styles from './Tasks.module.css';


interface TaskProp {
  allTasks: Task[];
  totalTasks: number;
  completedTasks: number;
  setTotalTasks: Dispatch<SetStateAction<Task[]>>
  // setTaskStatus: Dispatch<SetStateAction<Task[]>>
}

export function Tasks({allTasks, totalTasks, completedTasks, setTotalTasks}: TaskProp) {

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = allTasks.filter(task => task.id !== id);
    setTotalTasks(tasksWithoutDeletedOne);
  }

  function handleToggleTaskStatus() {
    // setTaskStatus(state => !state)
  }

  return (
    <div className={ styles.tasksContainer }>
      <header>
        <div className={ styles.tasksMarker }>
          <strong className={styles.createdTasks}>Tarefas criadas</strong>
          <span className={styles.marker}>{totalTasks}</span>
        </div>

        <div className={ styles.tasksMarker }>
          <strong className={styles.concludedTasks}>Concluídas</strong>
          <span className={styles.marker}>{totalTasks  < 1 ? totalTasks : `${ completedTasks } de ${ totalTasks }`}</span>
        </div>
      </header>

      <main>
        {
          totalTasks < 1
            ? (<EmptyTaskList />)
            : (
              allTasks.map(task => (
                <TaskCard
                  key={ task.id }
                  id={ task.id }
                  content={ task.content }
                  status={ task.status }
                  onDeleteTask={ handleDeleteTask }
                  onToggleTaskStatus={ handleToggleTaskStatus }
                />
              ))

            )
        }
      </main>
    </div>
  )
}
