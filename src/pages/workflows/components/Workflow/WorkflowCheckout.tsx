import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import moment from "moment"

type Props = {
  data: IFlowCheckout;
}

const WorkflowCheckout = (props: Props) => {
  return (
    <motion.div 
      animate={{ opacity: 1 }} 
      initial={{ opacity: 0 }} 
      exit={{ opacity: 0 }}
      layout
      className="flex flex-col gap-4 rounded border p-4 dark:border-zinc-500 dark:bg-gray-600/30"
    >
      <div className="text-center">
        <span>{props.data.name}</span>
      </div>
      <Link href={`/workflows/[uuid]`} as={`/workflows/${props.data.workflow_uuid}`} shallow>
        <div className="dark:border-zinc:500 flex w-[250px] rounded border p-2 hover:cursor-pointer hover:bg-hover-card dark:hover:bg-gray-600">
          <div className="flex flex-1 flex-col">
            <span className="text-xs text-neutral-500 dark:text-neutral-300">CHECKOUT</span>
            <span className="text-sm">{props.data.action}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xxs text-neutral-500 dark:text-neutral-300">CONDITION</span>
            <span></span>
          </div>
        </div>
      </Link>
      <div className="flex border-t border-gray-300 px-2 pt-3">
        <div className="flex gap-2">
          <div>
            <img src="//api.lorem.space/image/face?w=150&h=150" className="h-4 w-4 rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-xxs font-medium">Published by <span className="underline">Victor Alvarez</span></span>
            <span className="text-xxs text-neutral-400">Updated {moment.duration(moment().diff(moment(props.data.updated_at))).humanize()} ago</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link className="flex items-center gap-1 text-xs text-primary-thin" href="#">
          1 Draft <BsArrowRight />
        </Link>
      </div>
    </motion.div>
  )
}

export default WorkflowCheckout