import styles from './App.module.css'
import logo from "./assets/logo.svg"
import { CreateTask } from './components/CreateTask'
import { TaskList } from './components/TaskList'

export const App = () => {

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logo todo" />
      </header>
      <CreateTask />
      <TaskList />
    </>
  )
}

