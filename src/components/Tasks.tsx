import { Dispatch, SetStateAction } from 'react';

import { EmptyTaskList } from './EmptyTaskList';
import { TaskCard } from './TaskCard';
import { Task } from '../App';

import styles from './Tasks.module.css';


interface TaskProp {
  allTasks: Task[];
  totalTasks: number;
  allCompletedTasks: Task[];
  completedTasks: number;
  setTotalTasks: Dispatch<SetStateAction<Task[]>>
  setCompletedTasks: Dispatch<SetStateAction<Task[]>>
}

export function Tasks({allTasks, totalTasks, allCompletedTasks, completedTasks, setTotalTasks, setCompletedTasks}: TaskProp) {

  function handleDeleteTask(id: string, task: Task) {
    const tasksWithoutDeletedOne = allTasks.filter(task => task.id !== id);
    setTotalTasks(tasksWithoutDeletedOne);
    handleToggleTaskStatus(id, task)
  }

  function handleToggleTaskStatus(id: string, task: Task) {
    if (allCompletedTasks.find(item => item.id === id)) {
      const tasksWithoutUncompletedOne = allCompletedTasks.filter(row => row.id !== id)
      setCompletedTasks(tasksWithoutUncompletedOne)
    } else {
      setCompletedTasks(state => [...state, task])
    }
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
