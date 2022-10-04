import { useWorkflowListContext } from "../workflows.list.context"
import {FaSquare} from "react-icons/fa"

const OPTIONS: {title: string, status: any}[] = [
  {
    title: "Active",
    status: "active"
  },
  {
    title: "Disabled",
    status: "inactive"
  }
]

const StatusToggle = () => {
  const { status: [status, setStatus] } = useWorkflowListContext()

  return (
    <div className="group-toggle-status flex w-min gap-4">
      {OPTIONS.map((opt, index) => {
        const isActive = opt.status == status
        return (
          <div 
            key={index} 
            className={`flex items-center gap-2 font-medium ${isActive ? "text-black underline decoration-primary decoration-2 underline-offset-8 dark:text-white" : "text-neutral-400"} text-selection-none toggle-status transition-all hover:cursor-pointer hover:underline hover:decoration-neutral-500 hover:decoration-2 hover:underline-offset-8`} 
            onClick={() => {
              setStatus(opt.status)
            }}
          >
            <FaSquare size={8} className={`${isActive ? "visible" : "invisible"} text-green-600`} />
            <span>{opt.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default StatusToggle