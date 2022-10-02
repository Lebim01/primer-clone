import Switch from "@src/components/UI/Switch";
import { useCheckoutBuildSidemenuContext } from "../CheckoutSideMenu/checkout.build.sidemenu.context";

type ToggleItemProps = {
  icon: string;
  title: string;
  onChange: (active: boolean) => void;
}

const ToggleItem = (props: ToggleItemProps) => {
  return (
    <div className="flex items-center gap-2 rounded border p-3">
      <div>
        <img className="h-8 w-8" src={props.icon} />
      </div>
      <div className="flex-1">
        <span className="font-bold">{props.title}</span>
      </div>
      <div>
        <Switch active={false} onChange={props.onChange} />
      </div>
    </div>
  )
}

const TabPaymentMethods = () => {
  const { paymentMethods, togglePaymentMethod } = useCheckoutBuildSidemenuContext()

  return (
    <div className="flex flex-col gap-3">
      <button className="btn-primary whitespace-nowrap text-sm">Add payment method</button>
      {paymentMethods.map((method) => 
        <ToggleItem 
          key={method.name}
          title={method.label}
          icon={method.icon}
          onChange={(active) => togglePaymentMethod(method.name, active)}
        />
      )}
    </div>
  )
}

export default TabPaymentMethods