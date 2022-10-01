import { fetcherGET } from "@src/services/fetchers";
import { createContext, useContext, ReactNode, useState, useMemo } from "react";
import useSWR from "swr";
import type { Dispatch, SetStateAction } from "react"

type Props = {
  children: ReactNode;
}

interface IWorkflowBuildSidemenuContext {
  search: [
    string,
    Dispatch<SetStateAction<string>>
  ];
  apps: IApp[];
  conditions: any[];
}

const WorkflowBuildSidemenuContext = createContext<IWorkflowBuildSidemenuContext>({
  search: [
    "",
    () => {}
  ],
  apps: [],
  conditions: []
})

const WorkflowBuildSidemenuContextProvider = (props: Props) => {
  const [search, setSearch] = useState("")
  const { data: apps } = useSWR<IApp[]>(`/api/app`, fetcherGET<IApp[]>({}))
  const [conditions] = useState([])

  const filteredApps = useMemo(() => {
    return apps || []
  }, [search, apps])

  return (
    <WorkflowBuildSidemenuContext.Provider 
      value={{
        search: [search, setSearch],
        apps: filteredApps,
        conditions
      }}
    >
      {props.children}
    </WorkflowBuildSidemenuContext.Provider>
  )
}

export const useWorkflowBuildSidemenuContext = () => {
  return useContext(WorkflowBuildSidemenuContext)
}

export default WorkflowBuildSidemenuContextProvider