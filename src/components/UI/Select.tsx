import { BsChevronDown } from "react-icons/bs";
import { useState, useRef, useMemo } from "react"
import { useOutsideAlerter } from "@src/hooks/useOutsideAlerter";

type Props = {
  value?: string;
  style: {
    width?: string;
  };
  options?: SelectOption[];
  onChange?: (opt: SelectOption) => void;
  className?: string;
}

const Select = ({ style: { width = "w-full" }, options = [], className = "", ...props }: Props) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOutsideAlerter(ref, () => {
    setOpen(false)
  })

  const selectValue = (item: SelectOption) => {
    setOpen(false)
    props.onChange && props.onChange(item)
  }

  const selectedItem = useMemo(() => options.find((r) => r.value == props.value), [props.value, options])

  return (
    <div ref={ref} className={`relative ${width} ${className}`}>
      <div className={`select-input text-selection-none flex w-full items-center rounded border p-2 text-sm hover:cursor-pointer hover:bg-hover-card`} onClick={() => setOpen(s => !s)}>
        <div className="flex-1">
          { selectedItem?.label ? selectedItem?.label : <span className="placeholder text-neutral-400">Select an option</span> }
        </div>
        <div>
          <BsChevronDown />
        </div>
      </div>

      {open &&
        <div className="select-values absolute -bottom-1 z-10 flex w-full translate-y-full flex-col gap-1 rounded border bg-white shadow-md">
          {options.map((opt) => (
            <div key={opt.value} className={`p-2 hover:cursor-pointer ${selectedItem?.value == opt.value ? "bg-primary-thin text-white" : "hover:bg-hover-card"}`} onClick={() => selectValue(opt)}>
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Select