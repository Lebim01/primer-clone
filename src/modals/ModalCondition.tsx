import { useState } from "react"
import { BsCart } from "react-icons/bs"

const ModalCondition = (props: ModalProps) => {
  const [state, setState] = useState<any>({})

  return (
    <div className="flex w-[600px] flex-col p-3">
      <div className="flex items-center">
        <div className="flex flex-1 flex-col">
          <span className="text-lg text-black">Select Condition type(s)</span>
        </div>
        <div>
          <button className="btn-primary" 
            onClick={() => { 
              props.onSave(state)
              props.onClose()
            }}
          >
            Done
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-3 py-3">
          <div className="rounded-full bg-green-300 p-1 text-sm text-green-800">
            <BsCart />
          </div> 
          Checkout
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="btn py-2">Metadata</button>
          <button className="btn py-2">Issuer bank country</button>
          <button className="btn py-2">Card Scheme</button>
          <button className="btn py-2">BIN</button>
          <button className="btn py-2">Currency & Amount</button>
          <button className="btn py-2">Payment Type</button>
        </div>
      </div>
    </div>
  )
}

export default ModalCondition