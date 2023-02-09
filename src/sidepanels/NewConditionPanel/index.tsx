import { useOnClickOutside } from "@src/hooks/useClickOutside"
import { classNames } from "@src/utils/classes"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"
import { useState } from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

type Props = {
  onComplete: () => void;
}

const NewConditionPanel = forwardRef((props: Props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(true)
  const _ref = useRef<any>(null)

  const [step, setStep] = useState(1)
  
  useOnClickOutside(_ref, () => {
    close()
  })

  useImperativeHandle(ref, () => {
    return {
      open
    }
  })

  const close = () => {
    setIsOpen(false)
    setTimeout(() => {
      setStep(1)
      setHidden(true)
    }, 500)
  }

  const open = () => {
    setHidden(false)
    setTimeout(() => {
      setIsOpen(true)
    }, 250)
  }

  const complete = () => {
    close()
    props.onComplete()
  }

  return (
    <div className={classNames("absolute left-0 top-0 z-10 h-full w-full bg-gray-500/40 transition-none", {
      "hidden": hidden,
    })}>
      <div 
        ref={_ref}
        className={classNames(
          "absolute right-0 top-0 h-full bg-white transition-all ui-panel shadow-md duration-500", 
          {
            "translate-x-full": !isOpen,
            "w-[800px]": step == 1,
            "w-[500px]": step == 2 || step == 3 || step == 4,
          }
        )}>
          <AnimatePresence initial={false} mode="wait">
            {step == 1 && 
              <motion.div className="h-full" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={"1"} layout>
                <Step1 onComplete={() => setStep(2)} onCancel={() => close()} />
              </motion.div>
            }
            {step == 2 && 
              <motion.div className="h-full" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={"2"} layout>
                <Step2 onComplete={() => setStep(3)} onCancel={() => close()} onBack={() => setStep(1)} />
              </motion.div>
            }
            {step == 3 && 
              <motion.div className="h-full" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={"3"} layout>
                <Step3 onComplete={() => setStep(4)} onCancel={() => close()} onBack={() => setStep(2)} />
              </motion.div>
            }
            {step == 4 && 
              <motion.div className="h-full" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={"4"} layout>
                <Step4 onComplete={() => complete()} onCancel={() => close()} onBack={() => setStep(3)} />
              </motion.div>
            }
          </AnimatePresence>
      </div>
    </div>
  )
})

NewConditionPanel.displayName = "NewConditionPanel"

export default NewConditionPanel