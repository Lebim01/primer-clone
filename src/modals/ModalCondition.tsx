import { useState, useMemo } from "react"
import type { ReactNode } from "react"
import { BsCart, BsCreditCard, BsBank, BsFile, BsQuestionLg, BsCurrencyDollar, BsCash } from "react-icons/bs"
import { FaTimes } from "react-icons/fa";
import Select from "@src/components/UI/Select";
import { CARD_SCHEMES, OPERATORS } from "@src/constans/filters";
import { motion, AnimatePresence } from "framer-motion";

type FilterProps = {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
  onRemove?: () => void;
}

const Filter = (props: FilterProps) => {
  return (
    <motion.div layout className="flex flex-col rounded border p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="flex items-center">
        <span className="flex flex-1 items-center gap-3 font-bold">{props.icon} {props.title}</span>
        <span className="remove-filter text-neutral-400 hover:cursor-pointer" onClick={props.onRemove}><FaTimes /></span>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {props.children}
      </div>
    </motion.div>
  )
}

type Filter = {
  label: string;
  name: string;
  options: SelectOption[];
  icon: ReactNode;
}

const FILTERS: Filter[] = [
  {
    label: "Metadata",
    name: "metadata",
    options: [],
    icon: <BsFile size={20} />
  },
  {
    label: "Issuer bank country",
    name: "issuer",
    options: [],
    icon: <BsBank size={20} />
  },
  {
    label: "Card Scheme",
    name: "cardscheme",
    options: CARD_SCHEMES,
    icon: <BsCreditCard size={20} />
  },
  {
    label: "BIN",
    name: "bin",
    options: [],
    icon: <BsQuestionLg size={20} />
  },
  {
    label: "Currency & Amount",
    name: "currency-amount",
    options: [],
    icon: <BsCurrencyDollar size={20} />
  },
  {
    label: "Payment Type",
    name: "payment-type",
    options: [],
    icon: <BsCash size={20} />
  }
]

const ModalCondition = (props: ModalProps) => {
  const [state, setState] = useState<any>({})

  const activeFilters = useMemo(() => Object.keys(state).reduce((a, b) => a + state[b].active ? 1 : 0, 0), [state])

  const addFilter = (filter: Filter) => () => {
    setState({
      ...state,
      [filter.name]: {
        ...filter,
        active: true,
        operator: "equals",
        value: null
      }
    })
  }

  const removeFilter = (filter: Filter) => () => {
    const _state = {...state}
    delete _state[filter.name]
    setState(_state)
  }

  const change = (filter:string, key: string) => (item: SelectOption) => setState({ ...state, [filter]: { ...state[filter], [key]: item.value } })

  return (
    <div className="flex w-[600px] flex-col p-3">
      <div className="flex items-center">
        <div className="flex flex-1 flex-col">
          <span className="text-lg text-black dark:text-white">Select Condition type(s)</span>
        </div>
        <div>
          <button className="btn-primary" 
            onClick={() => { 
              props.onSave(state, props.onClose)
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
          {FILTERS.map((filter) => 
            <button key={filter.name} className="btn py-2" disabled={state[filter.name]?.active} onClick={addFilter(filter)}>{filter.label}</button>
          )}
        </div>
      </div>
      {activeFilters > 0 &&
        <motion.div layout className="mt-8 flex flex-col gap-4 border-t pt-4">
          <AnimatePresence>
            {FILTERS.map((filter) => 
              state[filter.name] ? (
                <Filter key={filter.name} title={filter.label} icon={filter.icon} onRemove={removeFilter(filter)}>
                  <div className="flex gap-3">
                    <Select className="selector-operator" value={state[filter.name].operator} style={{width: "w-1/4"}} options={OPERATORS} onChange={change(filter.name, "operator")} />
                    <Select className="selector-value" value={state[filter.name].value} style={{}} options={filter.options} onChange={change(filter.name, "value")} />
                  </div>
                </Filter>
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
      }
    </div>
  )
}

export default ModalCondition