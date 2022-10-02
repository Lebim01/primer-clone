import { useModalContext } from "@src/context/modal.context";
import ModalAuthorizePayment from "@src/modals/ModalAuthorizePayment";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type Props = {
  activeMethods: PaymentMethod[];
  className?: string;
  readOnly?: boolean;
  onClose?: () => void;
}

const CheckoutForm = ({ className = "", ...props }: Props) => {
  const [loading, setLoading] = useState<null | string>(null)
  const [status, setStatus] = useState<null | "success" | "failed">(null)
  const { openModal } = useModalContext()

  const pay = () => {
    setLoading("card")
    openModal({
      children: ModalAuthorizePayment,
      onSave: (_) => {
        setTimeout(() => {
          setStatus("success")

          setTimeout(() => {
            props.onClose && props.onClose()
          }, 1200)
        }, 1500)
      }
    })
  }

  return (
    <motion.div className={`checkout w-[350px] bg-white p-8 ${className}`}>
      <AnimatePresence>
        {status == null &&
          <motion.div className="flex flex-col gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {props.activeMethods.map((method) => 
              <motion.div key={method.name} className="h-12 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {method.button}
              </motion.div>
            )}
            {props.activeMethods.length > 0 &&
              <div className="relative my-2 border-t" key="label">
                <span className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-3 text-sm">Or pay with card</span>
              </div>
            }
            <div className="mt-2 flex flex-col gap-3" key="form">
              <div className="flex flex-col gap-2">
                <span className="text-base font-medium">Card number</span>
                {props.readOnly
                  ? <span className="ml-2 text-xs text-neutral-400">**** **** **** ****</span>
                  : <input 
                      className="w-full rounded border border-neutral-100 bg-neutral-100 p-1 text-sm outline-none focus:border-neutral-300" 
                      placeholder="**** **** **** ****"
                    />
                }
              </div>
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-base font-medium">Expiry</span>
                  {props.readOnly
                    ? <span className="ml-2 text-xs text-neutral-400">MM/YY</span>
                    : <input 
                        className="w-full rounded border border-neutral-100 bg-neutral-100 p-1 text-sm outline-none focus:border-neutral-300" 
                        placeholder="MM/YY"
                      />
                  }
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-base font-medium">CVV</span>
                  {props.readOnly
                    ? <span className="ml-2 text-xs text-neutral-400">***</span>
                    : <input 
                        className="w-full rounded border border-neutral-100 bg-neutral-100 p-1 text-sm outline-none focus:border-neutral-300" 
                        placeholder="***"
                      />
                  }
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base font-medium">Name on card</span>
                  {props.readOnly
                    ? <span className="ml-2 text-xs text-neutral-400">First and last name</span>
                    : <input 
                        className="w-full rounded border border-neutral-100 bg-neutral-100 p-1 text-sm outline-none focus:border-neutral-300" 
                        placeholder="First and last name"
                      />
                  }
              </div>
              <div className="mt-4 w-full">
                <button className="btn-primary relative w-full" onClick={pay} disabled={loading == "card" || props.readOnly}>
                  Pay 
                  {loading == "card" &&
                    <svg className="absolute right-2 top-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  }
                </button>
              </div>
            </div>
          </motion.div>
        }
        {status &&
          <>
            {status == "success" &&
              <motion.div className="flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.img src="/gif/fast-green-check-finish.gif" className="h-20 w-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <span className="whitespace-nowrap">Your payment was successful!</span>
              </motion.div>
            }
          </>
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default CheckoutForm