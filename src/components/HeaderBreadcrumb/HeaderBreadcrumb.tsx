import Link from "next/link";
import React from "react";
import { BsHouseDoor, BsMoonFill, BsSun } from "react-icons/bs"
import { useHeaderContext } from "./header.context";
import { motion } from "framer-motion"
import Switch from "../UI/Switch";

const HeaderBreadcrumb = () => {
  const { path, actionButtons } = useHeaderContext()

  const toggleDark = (active: boolean) => {
    const html = document.querySelector("html")
    if(active){
      if(!html?.classList.contains("dark")){
        html?.classList.add("dark")
      }
    }else{
      if(html?.classList.contains("dark")){
        html?.classList.remove("dark")
      }
    }
  }

  return (
    <motion.div layout className="header flex border-b p-6 dark:text-neutral-300">
      <div className="flex flex-1 items-center gap-3">
        <Link href="/workflows" className="hover:cursor-pointer">
          <BsHouseDoor />
        </Link>
        {"/"}
        {path.map((item, index) => {
          const isLast = Number(index)+1 == path.length
          return (
            <React.Fragment key={index}>
              <Link href={item.path} as={item.path}>
                <span className={`${isLast ? "text-black underline decoration-2 underline-offset-4 dark:text-white" : "text-neutral-500"} font-medium hover:cursor-pointer hover:text-black`}>{item.name}</span>
              </Link>
              {!isLast && <span className="text-neutral-500">{'>'}</span>}
            </React.Fragment>
          )
        })}
      </div>
      <motion.div>
        <div className="flex gap-3">
          <Switch 
            active={false} 
            onChange={toggleDark} 
            leftIcon={<BsSun />}
            rightIcon={<BsMoonFill />}
          />
          {actionButtons}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeaderBreadcrumb