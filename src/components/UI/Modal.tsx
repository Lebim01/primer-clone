import { useOutsideAlerter } from "@src/hooks/useOutsideAlerter";
import { useRef } from "react"
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"

interface ModalPropsRender extends ModalProps {
  show: boolean;
}

const Modal = (props: ModalPropsRender) => {
  const contentRef = useRef(null);
  useOutsideAlerter(contentRef, props.show ? props.onClose : () => {});

  return (
    <motion.div 
      key={props.uuid}
      ref={contentRef} 
      className={`modal absolute max-h-[80%] flex-col overflow-auto rounded-md border bg-white p-2 shadow-lg shadow-neutral-500 transition-all ${props.show ? "flex" : "hidden"} dark:border-zinc-400 dark:bg-gray-700 dark:shadow-gray-500/30`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        type: "keyframes"
      }}
    >
      <div className="flex w-full flex-1 justify-end">
        <FaTimes className="text-neutral-500 hover:cursor-pointer hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-400" onClick={props.onClose} />
      </div>
      <props.children {...props} />
    </motion.div>
  )
}

export default Modal