// @ts-nocheck
import { BsCheckCircleFill, BsExclamationCircleFill, BsPlus } from "react-icons/bs"
import { GiCancel } from "react-icons/gi";
import { Handle } from 'reactflow';

const NodeProcessor = (props: NodeProps) => {
  
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={props.isConnectable}
      />
      <div className="relative flex w-[200px] flex-col space-y-4 rounded-lg border-2 border-gray-200 bg-white p-4 shadow-md hover:cursor-pointer">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img className="h-4 w-4" src={props.data.icon} />
            <span>{props.data.title}</span>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <div className="flex items-center space-x-2 rounded-lg bg-green-500 py-1 px-2 text-sm text-white">
              <BsCheckCircleFill />
              <span>Success</span>
            </div>

            <div className="absolute right-0 translate-x-1/2 rounded-full bg-violet-500 p-1 text-white">
              <BsPlus />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <div className="flex items-center space-x-2 rounded-lg bg-yellow-500 py-1 px-2 text-sm text-white">
              <GiCancel />
              <span>Rejected</span>
            </div>

            <div className="absolute right-0 translate-x-1/2 rounded-full bg-violet-500 p-1 text-white">
              <BsPlus />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <div className="flex items-center space-x-2 rounded-lg bg-red-500 py-1 px-2 text-sm text-white">
              <BsExclamationCircleFill />
              <span>Error</span>
            </div>

            <div className="absolute right-0 translate-x-1/2 rounded-full bg-violet-500 p-1 text-white">
              <BsPlus />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NodeProcessor