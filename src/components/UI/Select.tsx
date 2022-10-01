import { BsChevronDown } from "react-icons/bs";

type Props = {
  value?: string;
}

const Select = (props: Props) => {
  return (
    <div className="text-md flex w-full items-center rounded border p-2">
      <div className="flex-1 text-primary">
        { props.value }
      </div>
      <div>
        <BsChevronDown />
      </div>
    </div>
  )
}

export default Select