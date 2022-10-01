import type { ReactNode } from "react"
import { useState } from "react"
import { BiFilterAlt } from "react-icons/bi"
import { BsChevronDown, BsChevronUp, BsArrowRightShort } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"
import BadgeAppActions from "@src/components/UI/BadgeAppActions"
import { uuid } from "uuidv4"
import { useWorkflowBuildContext } from "@src/pages/workflowBuild/workflow.build.context"
import { useWorkflowBuildSidemenuContext } from "../../workflow.build.sidemenu.context"

type CollapsableItemProps = {
  icon: ReactNode;
  body: ReactNode;
  app: IApp;
}

const TriggerAction = ({ data }: { data: IAppMethodFull }) => {
  const { addNewNode } = useWorkflowBuildContext()

  return (
    <div className="relative pr-1" onClick={() => addNewNode(data)}>
      <div className="flex flex-col rounded-md border py-2 px-4 transition-all hover:cursor-pointer hover:bg-hover-card">
        <span className="text-xxs text-neutral-500">PAYMENTS</span>
        <span className="text-sm font-bold">{data.name}</span>
      </div>
      <div className="absolute bottom-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-r bg-white">
        <BsArrowRightShort />
      </div>
    </div>
  )
}

const CollapsableItem = (props: CollapsableItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`text-selection-none flex w-full flex-col rounded-md border`}>
      
      <div className={`flex items-center gap-2 p-3 text-xs hover:cursor-pointer hover:bg-hover-card`} onClick={() => setOpen(s => !s)}>
        {props.icon}
        <div className="flex flex-1 flex-wrap">
          {props.body}
        </div>
        <div>
          {open
            ? <BsChevronUp />
            : <BsChevronDown />
          }
        </div>
      </div>
      
      <motion.div>
        <AnimatePresence initial={false} mode="popLayout">
          {open &&
            <motion.div className="flex flex-col gap-3 overflow-hidden p-3" initial={{ scaleY: "10%", translateY: "-50%", maxHeight: 0 }} animate={{ scaleY: "100%", translateY: "0%", maxHeight: "100%" }} exit={{ scaleY: "0%", translateY: "-45%", maxHeight: 0 }}>
              <TriggerAction 
                data={{
                  name: "Authorize Payment",
                  app: {
                    ...props.app,
                    icon_component: <img src={props.app.icon} className="h-4 w-4" />
                  },
                  app_uuid: props.app.uuid,
                  type: "checkout",
                  uuid: uuid(),
                  node_type: "authorizePayment"
                }} 
              />
              <TriggerAction 
                data={{
                  name: "Authorize User",
                  app: {
                    ...props.app,
                    icon_component: <img src={props.app.icon} className="h-4 w-4" />
                  },
                  app_uuid: props.app.uuid,
                  type: "checkout",
                  uuid: uuid(),
                  node_type: "authorizeUser"
                }} 
              />
            </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

const Applications = () => {
  const { apps } = useWorkflowBuildSidemenuContext()

  return (
    <div className="w-full">
      <h3 className="font-bold">Applications</h3>
      <div className="mt-4 flex w-full flex-col gap-4">
        <div className="mb-2 flex w-full gap-3 rounded-md border px-2 py-3 text-neutral-500">
          <BiFilterAlt />
          <h3 className="flex-1 text-sm">Filter by categories</h3>
          
        </div>
        {apps.map((app) => 
          <CollapsableItem 
            key={app.uuid} 
            icon={<img src={app.icon} className="h-5 w-5" />}
            app={app}
            body={
              <div className="flex gap-1">
                {app.name}
                <BadgeAppActions 
                  methods={app.methods_count || 0} 
                  style={{
                    "text-size": "text-xxs",
                    padding: "px-1"
                  }}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  )
}

export default Applications