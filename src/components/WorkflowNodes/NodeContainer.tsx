import { ReactNode, memo } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  topTitle: string;
  children: ReactNode;
}

const NodeContainer = (props: Props) => {
  return (
    <>
      <div className='min-w-[200px] rounded-md border border-gray-400 bg-white text-xxs font-medium shadow-sm'>
        <div className='flex gap-3 border-b p-4'>
          <div>
            {props.icon}
          </div>
          <div className='flex flex-col'>
            <span className='font-medium text-neutral-500'>{props.topTitle}</span>
            <span>{props.title}</span>
          </div>
        </div>
        <div className='flex p-4'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default NodeContainer