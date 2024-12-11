import { PlusCircle } from "@phosphor-icons/react"
import styles from "./CreateTask.module.css"
import { useContext, useRef, useState } from "react"
import { AppContext } from "../contexts/AppContext"


export const CreateTask = ()=>{

  const { addTask } = useContext(AppContext)

  const [content, setContent] = useState("")
  const input = useRef(null as HTMLInputElement | null)

  return (
    <form className={styles.createTask} onSubmit={(e)=>{
      e.preventDefault()
      if(!content){
        input.current?.focus()
        return
      }
      addTask({
        completed: false,
        content
      })

      setContent("")
      
    }}>
      <input ref={input} placeholder="Adicione uma nova tarefa" value={content} onChange={(e)=>{setContent(e.target.value)}}></input>
      <button>Criar <PlusCircle size={20} weight="bold" /></button>
    </form>
  )
}
