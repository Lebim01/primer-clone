
import { TiFlowSwitch } from "react-icons/ti"
import { BsArrowRightShort } from "react-icons/bs"
import { useWorkflowBuildContext } from "@src/pages/workflowBuild/workflow.build.context"
import { useModalContext } from "@src/context/modal.context"
import ModalCondition from "@src/modals/ModalCondition"
import { uuid } from "uuidv4"

const Conditions = () => {
  const { addNewNode } = useWorkflowBuildContext()
  const { openModal, closeModal } = useModalContext()

  const Icon = () => <div className="rounded-full bg-blue-500 p-1 text-sm text-white"><TiFlowSwitch /></div>

  const addCondition = () => {
    const uuidModal = uuid()
    openModal({
      children: ModalCondition,
      onSave: (data) => {
        addNewNode({
          app: {
            icon: "",
            created_at: new Date(),
            methods_count: 0,
            name: "CONDITION",
            status: "active",
            uuid: uuidModal,
          },
          data: {
            filters: data
          },
          app_uuid: "",
          name: "CONDITION",
          uuid: uuidModal,
          type: "condition",
          node_type: "condition",
        })
      }
    })
  }

  return (
    <div className="w-full">
      <h3 className="font-bold">Utilities</h3>
      <div className="relative mt-4 flex w-full flex-col gap-4">
        <div className={`flex items-center gap-2 rounded-md border p-3 text-xs hover:cursor-pointer hover:bg-hover-card`} onClick={addCondition}>
          <Icon />
          <div className="flex flex-1 flex-wrap">
            CONDITION
          </div>
        </div>
        <div className="absolute top-[50%] right-0 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-r bg-white">
          <BsArrowRightShort />
        </div>
      </div>
    </div>
  )
}

export default Conditions