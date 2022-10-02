import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const fakeRequest = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000) 
  })
}

const ModalConfirmation = (props: ModalProps) => {
  const [request, setRequest] = useState<null | "loading" | "success" | "error">(null)

  const onConfirm = async () => {
    try {
      setRequest("loading")
      await fakeRequest()
      props.onSave(undefined, props.onClose)
      setRequest("success")
    }catch(err){
      setRequest("error")
    }
    finally {
      
    }
  }

  return (
    <div className="flex w-[500px] flex-col items-center p-3">
      {!request &&
        <>
          <div className="flex justify-center">
            Please confirm you want continue with this action
          </div>
          <div className="mt-5 flex w-1/2 justify-around">
            <button className="btn" onClick={props.onClose}>Cancel</button>
            <button className="btn-primary" onClick={onConfirm}>Confirm</button>
          </div>
        </>
      }
      {request &&
        <motion.div layout className="flex items-center gap-2">
          <AnimatePresence>
            {request == "loading" &&
              <motion.img src="/gif/loading.gif" className="h-20 w-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            }
            {request == "success" &&
              <>
                <motion.img src="/gif/fast-green-check-finish.gif" className="h-20 w-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <span>Successfully published</span>
              </>
            }
            {request == "error" &&
              <>
                <motion.img src="/gif/failed-finish.gif" className="h-20 w-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <span>Something was wrong</span>
              </>
            }
          </AnimatePresence>
        </motion.div>
      }
    </div>
  )
}

export default ModalConfirmation