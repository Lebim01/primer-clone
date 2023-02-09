import Select from "@src/components/UI/Select"
import { CARD_SCHEMES, OPERATORS } from "@src/constans/filters"
import { useOnClickOutside } from "@src/hooks/useClickOutside"
import { classNames } from "@src/utils/classes"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"
import { useState } from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { BsCreditCard2Back } from "react-icons/bs"

type Props = {
  onComplete: () => void;
}

const variants = {
  show: {
    opacity: {

    }
  },
  hide: {
    backgroundColor: "#fff",
    transition: { duration: 2 }
  }
}

const CreateCondition = forwardRef((props: Props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(true)
  const _ref = useRef<any>(null)

  const [showCardBrand, setShowCardBrand] = useState(false)
  
  useOnClickOutside(_ref, () => {
    close()
  }, "select-values")

  useImperativeHandle(ref, () => {
    return {
      open
    }
  })

  const close = () => {
    setIsOpen(false)
    setTimeout(() => {
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
          "absolute right-0 top-0 h-full bg-white transition-all ui-panel shadow-md duration-500 w-[600px]", 
          {
            "translate-x-full": !isOpen,
          }
        )}>
           <div className="flex h-full flex-col">
            <div className="border-b border-gray-200 p-4 text-lg font-medium">
              Add new condition
            </div>
            <div className="mx-4 border-b border-gray-200 py-4 text-lg font-medium">
              Select condition types
            </div>
            <div className="flex justify-between p-4">
              <div>
                Condition types
              </div>
            </div>
            <div className={"grid h-min grid-cols-2 grid-rows-[min-content_min-content_min-content] gap-3 px-4"}>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-1" />
                <label htmlFor="check-1">Issuer bank country</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-2" />
                <label htmlFor="check-2">Currency & amount</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-3" checked={showCardBrand} onChange={(e) => setShowCardBrand(e.target.checked)} />
                <label htmlFor="check-3">Card brand</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-4" />
                <label htmlFor="check-4">Additional fields</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-5" />
                <label htmlFor="check-5">BIN</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="check-6" />
                <label htmlFor="check-6">Metadata</label>
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <AnimatePresence>
                {showCardBrand &&
                  <motion.div 
                    transition={{ duration: 0.5 }} 
                    initial={{ opacity: 0, translateX: "-200%" }} 
                    animate={{ opacity: 1, translateX: "0%" }} 
                    exit={{ opacity: 0, translateX: "-200%" }} 
                    className="flex flex-1 flex-col space-y-3 rounded-lg border border-gray-200 bg-white p-4">
                    <div className="flex items-center space-x-3">
                      <BsCreditCard2Back />
                      <span className="font-bold">Card Brand</span>
                    </div>
                    <div className="flex space-x-4">
                      <Select 
                        style={{
                          width: "w-[60%]"
                        }}
                        options={OPERATORS}
                        value="equals"
                      />
                      <Select 
                        style={{}}
                        options={CARD_SCHEMES}
                        value="visa"
                      />
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div className="flex justify-end space-x-4 p-4">
              <button className="rounded-lg p-4 font-bold text-violet-700 hover:bg-violet-700/30" onClick={close}>
                Cancel
              </button>
              <button className="w-[100px] rounded-lg bg-violet-700 p-4 font-bold text-white hover:bg-violet-800" onClick={complete}>
                Done
              </button>
            </div>
          </div>
      </div>
    </div>
  )
})

CreateCondition.displayName = "CreateCondition"

export default CreateCondition