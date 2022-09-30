import { motion } from 'framer-motion'
import moment from 'moment';

type Props = {
  data: IApp;
}

const WorkflowApp = (props: Props) => {
  return (
    <motion.div 
      animate={{ opacity: 1 }} 
      initial={{ opacity: 0 }} 
      exit={{ opacity: 0 }}
      layout
      className="flex flex-col gap-4 rounded border p-4"
    >
      <div className="flex items-center justify-center gap-2 text-center">
        <img src={props.data.icon} className="inline-block h-4 w-4" />
        <span>{props.data.name}</span>
      </div>
      <div className="flex w-max rounded-full border bg-neutral-100 py-1 px-2 text-neutral-500">
        <span className="text-xs">{props.data.methods} ACTIONS</span>
      </div>
      <div className="flex w-[250px] border-t border-gray-300 px-2 pt-3">
        <div className="flex gap-2">
          <div>
            <img src="//api.lorem.space/image/face?w=150&h=150" className="h-4 w-4 rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-xxs font-medium">Published by <span className="underline">Victor Alvarez</span></span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkflowApp