import { BsChevronDown } from "react-icons/bs";
import { useState, useRef, useMemo, useEffect, createContext, ReactNode, useContext } from "react"
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
  const ref = useRef(null)
  const { openSelect, closeSelect } = useContext(SelectContext)  

  const selectValue = (item: SelectOption) => {
    closeSelect()
    props.onChange && props.onChange(item)
  }

  const selectedItem = useMemo(() => options.find((r) => r.value == props.value), [props.value, options])

  return (
    <div ref={ref} className={`relative ${width} ${className}`}>
      <div 
        className={`select-input text-selection-none flex w-full items-center rounded border p-2 text-sm hover:cursor-pointer hover:bg-hover-card`} 
        onClick={() => openSelect(selectedItem, ref, options, selectValue)}
      >
        <div className="flex-1">
          { selectedItem?.label ? selectedItem?.label : <span className="placeholder text-neutral-400">Select an option</span> }
        </div>
        <div>
          <BsChevronDown />
        </div>
      </div>

    </div>
  )
}

interface ISelectContext {
  open: boolean;
  openSelect: (
    value: SelectOption | undefined, 
    selectRef: any, 
    options: SelectOption[], 
    callback: (option: SelectOption) => void
  ) => void;
  closeSelect: () => void;
}

const SelectContext = createContext<ISelectContext>({
  open: false,
  openSelect: (_: any, __: any) => {},
  closeSelect: () => {},
})

export const SelectContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SelectOption | undefined>(undefined)
  const [options, setOptions] = useState<SelectOption[]>([])
  const [rects, setRects] = useState<null | DOMRect>(null)
  
  const openedSelect = useRef(null)
  const openedSelectCallback = useRef<any>(null)

  useOutsideAlerter(openedSelect, () => {
    closeSelect()
  })

  const openSelect = (
    value: SelectOption | undefined,
    selectRef: any, 
    options: SelectOption[], 
    callback: (option: SelectOption) => void
  ): void => {
    setSelectedItem(value)
    setOpen(true)
    openedSelect.current = selectRef.current
    const rec = selectRef.current.getClientRects()
    setRects(rec["0"])
    openedSelectCallback.current = callback
    setOptions(options)
  }

  const closeSelect = (): void => {
    openedSelect.current = null
    openedSelectCallback.current = null
    setOptions([])
    setOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{
        open,
        openSelect,
        closeSelect
      }}
    >
      {children}

      {open && rects && openedSelect?.current && document.body.contains(openedSelect?.current) &&
        <div 
          className="select-values absolute z-10 flex flex-col gap-1 rounded border bg-white shadow-md"
          style={{
            top: rects.top + rects.height + 5,
            left: rects.left,
            width: rects.width
          }}
        >
          {options.map((opt) => (
            <div 
              key={opt.value} 
              className={`p-2 hover:cursor-pointer ${selectedItem?.value == opt.value ? "bg-primary-thin text-white" : "hover:bg-hover-card"}`} 
              onClick={() => {
                openedSelectCallback.current(opt)
                closeSelect()
              }}
            >
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      }
    </SelectContext.Provider>
  )
}

export default Select