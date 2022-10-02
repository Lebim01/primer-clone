import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { ReactNode } from "react"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      maxHeight: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    maxHeight: '100%'
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      maxHeight: 0
    };
  }
};

type Props = {
  tabs: {
    label: string;
    children: ReactNode;
  }[];
  activeTabIndex?: number;
}

const Tabs = ({ activeTabIndex = 0, ...props }: Props) => {
  const [[activeTab, direction], setActiveTab] = useState([activeTabIndex, 0])

  const onClickTab = (index: number) => {
    const direction = index > activeTab ? 1 : -1
    setActiveTab([index, direction])
  }

  return (
    <motion.div layout className="tabs flex h-full w-full flex-col gap-4">
      <div className="flex gap-3">
        {props.tabs.map((tab, index) => 
          <span key={index} onClick={() => onClickTab(index)} className={`${activeTab == index ? "font-bold underline decoration-2" : "text-neutral-500"} tab-link underline-offset-8 hover:cursor-pointer hover:text-black hover:underline`}>
            {tab.label}
          </span>
        )}
      </div>
      <div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              maxHeight: { duration: 0 },
            }}
            className="tab-content"
          >
            {props.tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Tabs