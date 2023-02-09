import { classNames } from "@src/utils/classes";
import Link from "next/link";
import { FC, ReactElement } from "react"

type Props = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  classes?: {
    iconContainer?: string;
  };
  href?: string;
}

const Item: FC<Props> = (props) => {
  return (
    <div className="flex w-full space-x-3 rounded-lg border border-gray-200 p-3 shadow-none shadow-gray-400 transition-all hover:scale-105 hover:cursor-pointer hover:shadow-md dark:shadow-gray-500">
      <div className={classNames("flex h-16 w-16 items-center justify-center rounded-lg bg-green-300 text-2xl text-white", props.classes?.iconContainer)}>
        {props.icon}
      </div>
      <div>
        <h3 className="text-xl font-medium">{props.title}</h3>
        <span className="text-sm text-gray-400">{props.subtitle}</span>
      </div>
    </div>
  )
}

const RouteItem: FC<Props> = (props) => {
  if(props.href)
    return <Link href={props.href}><Item {...props} /></Link>
  
  return <Item {...props} />
}

export default RouteItem