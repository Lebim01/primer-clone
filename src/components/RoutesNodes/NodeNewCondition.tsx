// @ts-nocheck
import { BsPlusCircle } from "react-icons/bs";

const NodeCondition = (props: NodeProps) => {
  return (
    <>
      <div className="w-[400px] rounded-lg bg-violet-600 p-8 text-xl text-white hover:cursor-pointer hover:bg-violet-700 hover:shadow-md">
        <div className="flex flex-col items-center space-y-2">
          <BsPlusCircle />
          <span>New condition</span>
        </div>
      </div>
    </>
  )
}

export default NodeCondition