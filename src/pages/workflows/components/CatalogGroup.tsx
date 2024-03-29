import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
}

const CatalogGroup = ({ className = "", ...props }: Props) => {
  return (
    <div className="py-8">
      <h3 className="text-lg font-bold">{props.title}</h3>
      <motion.div 
        layout 
        className={`mt-6 flex flex-wrap gap-10 ${className}`}
      >
        <AnimatePresence>
          {props.children}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default CatalogGroup