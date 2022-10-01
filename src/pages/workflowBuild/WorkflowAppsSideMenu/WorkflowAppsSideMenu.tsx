import { useState } from "react"
import { TbLayoutSidebarRightCollapse, TbLayoutSidebarLeftCollapse } from "react-icons/tb"
import Applications from "./SubMenus/Applications"
import { useWorkflowBuildSidemenuContext } from "./workflow.build.sidemenu.context"

const WorkflowAppsSideMenu = () => {
  const [open, setOpen] = useState(false)
  const { apps } = useWorkflowBuildSidemenuContext()

  return (
    <div className={`border-r border-gray-200 bg-white ${open ? "w-[280px]" : "w-[50px]"} flex flex-col items-center overflow-auto p-4 transition-width`}>
      <span className={`${open ? "self-end" : ""} text-neutral-400 transition-all hover:cursor-pointer hover:text-black`}>
        {open
          ? <TbLayoutSidebarLeftCollapse size={20} onClick={() => setOpen(false)} />
          : <TbLayoutSidebarRightCollapse size={20} onClick={() => setOpen(true)} />
        }
      </span>
      {open &&
        <>
          <Applications />
        </>
      }
    </div>
  )
}

export default WorkflowAppsSideMenu