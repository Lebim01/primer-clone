import Switch from "@src/components/UI/Switch"
import { FC } from "react"
import { BsArrowLeft } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"

type ItemProps = {
  id: string;
  title: string;
  date: string;
}

const MerchantAccount: FC<ItemProps> = (props) => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-2">
        <input type="checkbox" id={props.id} />
        <label htmlFor={props.id}>{props.title}</label>
      </div>
      <div>
        {props.date}
      </div>
    </div>
  )
}

type Props = {
  onComplete: () => void;
  onCancel: () => void;
  onBack: () => void;
}

const Step4: FC<Props> = (props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b border-gray-200 p-4">
        <div className="flex flex-1 items-center space-x-3">
          <BsArrowLeft className="hover:scale-105 hover:cursor-pointer" onClick={props.onBack} />
          <span>Add Adyen</span>
        </div>
        <div>
          <FaTimes className="hover:scale-105 hover:cursor-pointer" onClick={props.onCancel} />
        </div>
      </div>
      <div className="mx-4 flex flex-col border-b border-gray-200 py-4 text-2xl font-medium">
        Authorization
      </div>
      <div className="mx-4 flex flex-col border-b border-gray-200 py-4 font-bold">
        Select metchant account
        <span className="text-sm font-medium text-gray-400">Assign a Merchant ID based on the connection configuration</span>
      </div>
      <div className="mx-4 grid grid-cols-1 grid-rows-[min-content_min-content_min-content_min-content] gap-3 border-b border-gray-200 py-4">
        <div className="flex justify-between">
          <div>Merchant account</div>
          <div>Date added</div>
        </div>
        <MerchantAccount id="check-1" title="Merchant_1" date="Mar 23, 2022" />
        <MerchantAccount id="check-2" title="Merchant_2" date="Jue 25, 2022" />
      </div>
      <div className="mx-4 flex flex-1 flex-col border-b border-gray-200 py-4">
        <span className="font-bold">Optimize for payment success</span>
        <span className="text-sm font-medium text-gray-400">Additional configuration options to automatically handle certain declines.</span>

        <div className="mt-2 flex space-x-3 rounded-lg border border-gray-200 p-4">
          <div className="font-medium">
            <Switch active />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Adaptive 3Ds</label>
            <div className="text-sm text-gray-500">
              Enabling this will automatically trigger 3D Secure when required. When 3D Secure passes successfully, then payment will be re-submitted for authorization.
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="auth-required" />
              <label htmlFor="auth-required">Authentication required</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="not-honor" />
              <label htmlFor="not-honor">Do not honor</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="fraud-suspected" />
              <label htmlFor="fraud-suspected">Fraud suspected</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button className="rounded-lg p-4 font-bold text-violet-700 hover:bg-violet-700/30" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="w-[100px] rounded-lg bg-violet-700 p-4 font-bold text-white hover:bg-violet-800" onClick={props.onComplete}>
          Done
        </button>
      </div>
    </div>
  )
}

export default Step4