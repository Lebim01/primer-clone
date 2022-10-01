import { BsWallet } from "react-icons/bs"

const FilterPaymentMethod = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded border">
      <div className="flex gap-3">
        <BsWallet />
        Payment Type
      </div>
    </div>
  )
}

export default FilterPaymentMethod