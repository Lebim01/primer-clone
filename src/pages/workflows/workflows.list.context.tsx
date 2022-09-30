import { createContext, useState, useContext, SetStateAction, Dispatch, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

interface IWowkflowListContext {
  status: [
    "active" | "inactive",
    Dispatch<SetStateAction<"active" | "inactive">>
  ]
}

const WorkflowListContext = createContext<IWowkflowListContext>({
  status: [
    "active",
    () => {}
  ]
})

const WorkflowListContextProvider = (props: Props) => {
  const status = useState<"active" | "inactive">("active")

  return (
    <WorkflowListContext.Provider value={{
      status
    }}>
      {props.children}
    </WorkflowListContext.Provider>
  )
}

export const useWorkflowListContext = () => {
  return useContext(WorkflowListContext)
}

export default WorkflowListContextProvider