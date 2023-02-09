// @ts-nocheck

import { classNames } from "@src/utils/classes";
import { AnimatePresence, motion } from "framer-motion"
import { BsCreditCard2Back, BsPlus } from "react-icons/bs"
import { Handle } from 'reactflow';

const Empty = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <span>All other payments</span>
      <span className="text-sm text-gray-400">Click (+) to select actions</span>
    </div>
  )
}

const DataProps = ({data}) => {
  return (
    <div className="w-max">
      <div className="flex space-x-3 rounded-lg border border-gray-300 p-3">
        <div className="pt-1">
          <BsCreditCard2Back />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="font-bold">Card brand</span>
          <span className="text-gray-500">{data.card_brand.value}</span>
        </div>
      </div>
    </div>
  )
}

const NodeCondition = (props: NodeProps) => {
  console.log({props})
  
  return (
    <>
      {props.data && props.data.connectors && Array(props.data.connectors).fill(1).map((_, index) => 
        <Handle
          type="source"
          position="right"
          style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={props.isConnectable}
          key={index}
        />
      )}

      <div className="relative w-[400px] rounded-lg border border-gray-300 bg-white p-4 shadow-md hover:cursor-pointer">
        <AnimatePresence mode="popLayout">
          {props.data 
            ? 
              <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DataProps data={props.data} /> 
              </motion.div>
            : <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Empty />
              </motion.div>
          }
        </AnimatePresence>

        <div className={classNames(
          "btn-plus absolute right-0 top-1/2 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xl text-white",
          {
            "bg-violet-600": props.data,
            "bg-gray-500": !props.data
          }
        )}>
          <BsPlus />
        </div>
      </div>
    </>
  )
}

export default NodeCondition