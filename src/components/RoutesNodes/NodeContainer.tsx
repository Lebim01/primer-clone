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
      <div className='min-w-[200px] rounded-md border border-gray-400 bg-white text-xxs font-medium shadow-sm dark:border-zinc-500 dark:bg-gray-600'>
        <div className='flex gap-3 border-b p-4 dark:border-zinc-500'>
          <div>
            {props.icon}
          </div>
          <div className='flex flex-col'>
            <span className='font-medium text-neutral-500 dark:text-neutral-300'>{props.topTitle}</span>
            <span>{props.title}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default NodeContainer