import { ClipboardText } from "@phosphor-icons/react"
import styles from "./TaskList.module.css"

export const TaskList = ()=>{

  return (
    <section className={styles.taskList}>
      <header>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluídas <span>0</span></p>
      </header>
      <div className={styles.emptyList}>
        <ClipboardText size={"3.5rem"} />
        <div>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </section>
  )
}