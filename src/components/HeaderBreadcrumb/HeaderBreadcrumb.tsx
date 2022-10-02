import Link from "next/link";
import React from "react";
import { BsHouseDoor } from "react-icons/bs"
import { useHeaderContext } from "./header.context";
import { motion } from "framer-motion"

const HeaderBreadcrumb = () => {
  const { path, actionButtons } = useHeaderContext()

  return (
    <motion.div layout className="flex border-b p-6">
      <div className="flex flex-1 items-center gap-3">
        <Link href="/workflows" className="hover:cursor-pointer">
          <a>
            <BsHouseDoor />
          </a>
        </Link>
        {"/"}
        {path.map((item, index) => {
          const isLast = Number(index)+1 == path.length
          return (
            <React.Fragment key={index}>
              <Link href={item.path} as={item.path}>
                <a>
                  <span className={`${isLast ? "text-black" : "text-neutral-500"} font-medium hover:cursor-pointer hover:text-black`}>{item.name}</span>
                </a>
              </Link>
              {!isLast && <span className="text-neutral-500">{'>'}</span>}
            </React.Fragment>
          )
        })}
      </div>
      <motion.div>
        {actionButtons}
      </motion.div>
    </motion.div>
  )
}

export default HeaderBreadcrumb