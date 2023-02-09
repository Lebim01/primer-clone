import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"
import RouteItem from "@src/pages/routes/list/RouteItem"
import WorkflowListContextProvider, { useWorkflowListContext } from "@src/pages/workflows/workflows.list.context"
import { useEffect, useState } from "react"
import { BsCheckCircle, BsPlusCircle } from "react-icons/bs"

const Routes = () => {
  const { status: [status] } = useWorkflowListContext()
  const { setActionButtons } = useHeaderContext()

  const [routes] = useState([
    {
      title: "Yuno payments V1",
      subtitle: "Route",
      icon: <BsCheckCircle />
    }
  ])

  useEffect(() => {
    setActionButtons(<></>)
  }, [])

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-x-4">
        {routes.map((route, index) => 
          <RouteItem key={index} {...route} />
        )}
        <RouteItem 
          title="Built a new route" 
          subtitle="Click here to create a new draft" 
          icon={<BsPlusCircle />}
          classes={{
            iconContainer: "bg-gray-400"
          }}
          href="/routes/new"
        />
      </div>
    </div>
  )
}

const Container = () => {
  return (
    <WorkflowListContextProvider>
      <Routes />
    </WorkflowListContextProvider>
  )
}

export default Container