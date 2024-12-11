import { Check, ClipboardText, Trash } from "@phosphor-icons/react"
import styles from "./TaskList.module.css"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export const TaskList = ()=>{
  
  const { tasks, touchTask, removeTask } = useContext(AppContext)

  return (
    <section className={styles.taskList}>
      <header>
        <p>Tarefas criadas <span>{tasks.length}</span></p>
        <p>Concluídas <span>{tasks.filter(task=>task.completed).length}</span></p>
      </header>
      {
        tasks.length < 1 ? (
          <div className={styles.emptyList}>
            <ClipboardText size={"3.5rem"} />
            <div>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.list}>
            {
              tasks.map((task, index)=>(
                <div key={index} className={task.completed ? styles.completed : ""} onClick={()=>{touchTask(index)}}>
                  <div>{task.completed && <Check weight="bold" size={"1rem"} />}</div>
                  <p>{task.content}</p>
                  <button><Trash size={"1.5rem"} onClick={(event)=>{
                    event.stopPropagation()
                    removeTask(index)
                  }}/></button>
                </div>
              ))
            }
          </div>
        )
      }
      
    </section>
  )
}