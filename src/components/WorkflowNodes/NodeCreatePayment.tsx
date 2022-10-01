import { BsPlayCircle } from "react-icons/bs"

type Props = {
  data: {
    options: {
      model: string;
    }[];
  }
}

const NodeCreatePayment = (props: Props) => {
  return (
    <>
      <div className='min-w-[200px] rounded-md border bg-white text-xxs font-medium shadow-sm'>
        <div className='flex gap-3 border-b p-4'>
          <div>
            <BsPlayCircle size={20} className='rounded-full bg-green-400/20 p-1' />
          </div>
          <div className='flex flex-col'>
            <span className='text-neutral-500'>Checkout</span>
            <span>Create Payment</span>
          </div>
        </div>
        <div className='flex p-4'>

        </div>
      </div>
    </>
  )
}

export default NodeCreatePayment