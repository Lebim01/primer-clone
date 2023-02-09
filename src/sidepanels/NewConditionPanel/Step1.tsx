import { classNames } from "@src/utils/classes"
import { FC, ReactElement } from "react"
import { useState } from "react"
import { BsCheckCircleFill } from "react-icons/bs"

type ItemProps = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  classes?: {
    iconContainer?: string;
  };
  isActive?: boolean;
}

const ConditionItem: FC<ItemProps> = (props) => {
  const [isActive, setActive] = useState(false)
  
  const toggle = () => setActive(s => !s)

  return (
    <div 
      className={classNames(
        "border-gray-200 flex w-full space-x-3 rounded-lg border-2 p-3 shadow-none shadow-gray-400 hover:cursor-pointer hover:shadow-md dark:shadow-gray-500 transition-all h-min", 
        {
          "border-green-500": isActive
        }
      )}
      onClick={toggle}
    >
      <div className={classNames("flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300 text-2xl text-white", props.classes?.iconContainer)}>
        {props.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium">{props.title}</h3>
        <span className="text-sm text-gray-400">{props.subtitle}</span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="rounded-lg border border-gray-200 p-1 text-sm font-medium text-gray-500">
          Processor
        </div>
        {isActive &&
          <BsCheckCircleFill className="text-2xl text-green-500" />
        }
      </div>
    </div>
  )
}

type Props = {
  onComplete: () => void;
  onCancel: () => void;
}

const Step1: FC<Props> = (props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 p-4 font-medium">
        Choose a connection
      </div>
      <div className="mx-4 border-b border-gray-200 py-4 font-medium">
        Extend your route with one (or multiple) of your configured connections.
      </div>
      <div className="flex justify-between p-4">
        <div>
          Condition types
        </div>
        <div className="flex select-none items-center space-x-2">
          <input type="checkbox" id="check-1" /> <label htmlFor="check-1">Select multiple connections</label>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 grid-rows-[min-content_min-content_min-content_min-content] gap-3 p-4">
        <ConditionItem title="Wompi" subtitle="Wompi test" icon={<img className="rounded-lg" src="https://play-lh.googleusercontent.com/EMP_wIndYf_sP5UPDS9MA8hYOGCoNfR_TwqtUVHXUMDNfDzL5vs4lHlqLzl3SDcwrg" />} />
        <ConditionItem title="Addi" subtitle="Addi test" icon={<img className="rounded-lg" src="https://play-lh.googleusercontent.com/u2s_-FxIXBGcYyQT5RadjOl86FuTnJ-9yTWcswlLtQW0kWuCSFQr_G0RORt-JWK7Rjk" />} />
        <ConditionItem title="dLocal" subtitle="dLocal test" icon={<img src="https://yt3.googleusercontent.com/ytc/AL5GRJWQPTDwQvVF3p-4RiUXyuNoAE6hfH0D3B0PXqbq=s900-c-k-c0x00ffffff-no-rj" />} />
        <ConditionItem title="Mercado Pago" subtitle="Mercado Pago test" icon={<img src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q" />} />
        <ConditionItem title="Nupay" subtitle="Nupay test" icon={<img className="rounded-lg" src="https://nu.com.mx/images/seo/open-graph-logo.png?v=2" />} />
        <ConditionItem title="Adyen" subtitle="Adyen test" icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU1tFT///+Q0p4qsk30+/Y5t1kfr0bR7djb8eAws1FZwHEksEkusk/8/v2n27JKu2Xu+PCX1aTK6tEYr0LD58tzyIaw3blBuV9SvWu24b/i8+V5yYqh2a1hwndqxX4/t1wKrTyHzpa948WR0p/1ecwCAAAEW0lEQVR4nO3di3LaMBAFUCkyBiELP8AxGDAl/f9/rAhJmyc0jRatb/d+gIczkjXGWnmV1nqWq3FlcijnbX3fVF5fjxqjMMQWxuXLbrvorynHKjzHFs6t6xmw8BRr3HpzYSDHLwyxzuwyaGGImyw+GUcUYTB2DbhQ2bz9aKoCCZUyagUuDMNYgwvD3Ti8XXDQhMqUFbhQFYceXKjsayKgMBArcKEqOg8uVGZAFypXowvVcoUutCoDFyrTogtV3qALbenBhcot0IV2koELlduhC5X16MJ8gy60a3ShcjN0oanRhXbtwYXK9fDCBbqw2KILbefBhWpZoQvzBl3o7tGFpkYXFi260M7RhaqEFx7ghRN4oRIhQEQ4/ohw/BHh+PN/CH+YBCluKKyOd7fPcZjk5lbCRPHT7fIWA5lOGFINDlyodU1PTCzUO/KFPLVQH6nXm9RA7Q8WXKg3xPM0tS+EFshBWNPeial5IQ3tNE3NC6nghRntYpqaF5JNRChCEaaOCEUowvQRoQhFmD4iFGEEYVY19/WxHfbzL6a8/PkfHsJsWg9dnjtjiqKwX8xyyl3oV+3EmeKf/4PnzIWzY+6+tznEW9gM39/f4yxs9nmEvT2+wmpwUd5/sRUuYozfKUyF/T7aG1qewlXEKgmWwjrmK3aGQr+NuofAT+j3cQsH2An9PPJOHjdhdCA7YfzyHWbCu/gblbyEFCURrIQzinIBTkK/pthq5iSkqaBjJOyXJBdnJNzTlEPwET4QVXmyEfqSqKKFjZCsOpCNsKMqSuIipKuc4yIkWkgVG2FPV97JRLigOxDARLinO7jCQ0g4SZkIN4SnVngIKU90sBCSPbGdwkKY0fxvOoeFcEpZKM9CSLnQ8BCSHlhhIWwpDzuwEM7hhSXlxVkID5QXZyEkvToLIWlEKEL+EaEI+UeEIuQfEYqQf0QoQv4RoQj5R4Qi5B8RipB/RChC/nnuWIsrdA/oQlNf941baEt04WObTGyhOaILlfmLQRy3sHjq/40rVGZAFyo3ZOBCZborTzajFyq7nK8ujaMfvTCsN7nZf9pE4+cx9c+Lk+JCu5LUv00ikUgkEomEfwCeeq+EtFafRUjPW7AI6ZkZFmlv1mkxVYibLTHI/Q06EKYNcTspBqkozwGziCf7dAuX6C36Ykr54Q8e0T28kOZre4xC3mAxebSegU9TrTX4NNX0zVwT57S7BT+Gegd9J543YZFH8XEXFvq55rzPTPkppdQ5b6Uj/0t8qhbY4j7YPFd8KNh5+lzysYKdp7+rWmi+d80gfwp3BtBb8UVpUon5PuNF9VV1gCS+LDDrIYmvauj6DpD4ukywKvGWm7eVkPFbsaTOu2rPOgd7unkn1I3CmqnvhTproYbxA2EYxjJO/0MW+VCo/eIAs+J8LAxTdWdj9XlMnM+EYRw3c4cwWT8Xhsx2a+f+vR0wj1wUhoHsF9tumX+n7XHqXBE+Kk9tudt5eRhlDdwvL5xJ/0Xo/pIAAAAASUVORK5CYII=" />} />
        <ConditionItem title="PayU" subtitle="PayU test" icon={<img src="https://mexico.payu.com/wp-content/uploads/sites/10/2020/05/PAYU_LOGO_SQUARE_LIME-e1589277231542.jpg" />} />
        <ConditionItem title="Nequi" subtitle="Nequi test" icon={<img src="https://i0.wp.com/bixxus.com/wp-content/uploads/2022/06/nequi-logo-e1654706567977.png?fit=300%2C288&ssl=1" />} />
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button className="rounded-lg p-4 font-bold text-violet-700 hover:bg-violet-700/30" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="rounded-lg bg-violet-700 p-4 font-bold text-white hover:bg-violet-800" onClick={props.onComplete}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Step1