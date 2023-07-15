import { PlusCircle } from 'phosphor-react';

import styles from'./App.module.css';
import todoLogo from './assets/Logo.svg';

export function App() {

  return (
    <>
      <header className={ styles.headerContainer }>
        <img src={todoLogo} alt="Todo app" />
      </header>


      <main className={ styles.mainContainer }>
        <form className={ styles.taskForm }>
          <input
            className={ styles.taskInput }
            type="text"
            placeholder='Adicione uma nova tarefa'
          />
          <button
            type="submit"
            className={ styles.taskSubmitButton }
          >
            Criar
            <PlusCircle weight='bold' size={20}/>
          </button>
        </form>
      </main>
    </>
  )
}