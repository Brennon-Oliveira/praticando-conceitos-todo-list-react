import { createContext, ReactNode, useState } from "react";
import { Task } from "../interfaces/task";

interface AppContextData {
  tasks: Task[]
  addTask: (task: Task)=>void
  removeTask: (taskIndex: number)=>void
  touchTask: (taskIndex: number)=>void
}

interface AppContextProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

export const AppProvider = ({children}: AppContextProps)=>{
  const [tasks, setTasks] = useState([{
    completed: false,
    content: "Minha task"
  }, {
    completed: true,
    content: "Minha outra task"
  }] as Task[])

  const addTask = (task: Task)=>{
    setTasks([...tasks, task])
  }

  const removeTask = (taskIndex: number)=>{
    setTasks(tasks.filter((_, index)=>index!==taskIndex))
  }

  const touchTask = (taskIndex: number)=>{
    setTasks(tasks.map((task, index)=>{
      if(index === taskIndex){
        task.completed = !task.completed
      }
      return task
    }))
  }

  return (
    <AppContext.Provider value={{
      tasks,
      addTask,
      removeTask,
      touchTask
    }}>
      {children}
    </AppContext.Provider>
  )
}