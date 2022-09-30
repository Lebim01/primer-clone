import Link from "next/link";
import React from "react";

type Props = {
  path: IMenuItem[];
}

const HeaderBreadcrumb = (props: Props) => {
  return (
    <div className="flex gap-3 border-b p-6">
      {props.path.map((item, index) => {
        const isLast = Number(index)+1 == props.path.length
        return (
          <React.Fragment key={index}>
            <Link href={item.path}>
              <span className={`${isLast ? "text-black" : "text-neutral-500"} font-medium hover:cursor-pointer hover:text-black`}>{item.name}</span>
            </Link>
            {!isLast && <span className="text-neutral-500">{'>'}</span>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HeaderBreadcrumb