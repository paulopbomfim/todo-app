import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from'./App.module.css';
import todoLogo from './assets/Logo.svg';
import { Tasks } from './components/Tasks';

export interface Task {
  id: string;
  content: string;
}

export function App() {
  const [taskContent, setTasksContent] = useState('');
  const [totalTasks, setTotalTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  function handleChangeTaskInput(event: ChangeEvent<HTMLInputElement>) {
    setTasksContent(event.target.value);
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    const newTask: Task = {
      id: self.crypto.randomUUID(),
      content: taskContent
    };

    setTotalTasks((state) => [...state, newTask])
    setTasksContent('');
  }

  return (
    <>
      <header className={ styles.headerContainer }>
        <img src={todoLogo} alt="Todo app" />
      </header>


      <main className={ styles.mainContainer }>
        <form
          onSubmit={ handleSubmitTask }
          className={ styles.taskForm }
        >
          <input
            className={ styles.taskInput }
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={ taskContent }
            onChange={ handleChangeTaskInput }
            required
          />
          <button
            type="submit"
            disabled={ taskContent.length < 1 }
            className={ styles.taskSubmitButton }
          >
            Criar
            <PlusCircle weight='bold' size={20}/>
          </button>
        </form>

        <Tasks
          allTasks={ totalTasks }
          totalTasks={ totalTasks.length }
          allCompletedTasks={ completedTasks }
          completedTasks={ completedTasks.length }
          setTotalTasks={ setTotalTasks }
          setCompletedTasks={ setCompletedTasks }
        />
      </main>
    </>
  )
}
