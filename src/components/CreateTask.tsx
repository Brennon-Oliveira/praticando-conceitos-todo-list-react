import { PlusCircle } from "@phosphor-icons/react"
import styles from "./CreateTask.module.css"


export const CreateTask = ()=>{
  return (
    <form className={styles.createTask}>
      <input placeholder="Adicione uma nova tarefa"></input>
      <button>Criar <PlusCircle size={20} weight="bold" /></button>
    </form>
  )
}
