import { classNames } from "@src/utils/classes"
import { FC, ReactElement } from "react"
import { useState } from "react"
import { BsArrowLeft } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"

type ItemProps = {
  title: string;
  icon: ReactElement;
  value: string;
}

const PSPItem: FC<ItemProps> = (props) => {

  return (
    <div className="flex flex-col space-y-3 rounded-lg border border-gray-200 p-4">
      <div className="flex space-x-2">
        {props.icon}
        <span>{props.title}</span>
      </div>
      <input className="rounded-lg border border-gray-200 p-2" value={props.value} readOnly />
    </div>
  )
}

type Props = {
  onComplete: () => void;
  onCancel: () => void;
  onBack: () => void;
}

const Step2: FC<Props> = (props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b border-gray-200 p-4">
        <div className="flex flex-1 items-center space-x-3">
          <BsArrowLeft className="hover:scale-105 hover:cursor-pointer" onClick={props.onBack} />
          <span>Transation load balancer</span>
        </div>
        <div>
          <FaTimes className="hover:scale-105 hover:cursor-pointer" onClick={props.onCancel} />
        </div>
      </div>
      <div className="mx-4 flex flex-col border-b border-gray-200 py-4 font-medium">
        Give each PSPs a percentage
        <span className="text-gray-400">Split and distribute payment volume across your PSPs</span>
      </div>
      <div className="grid flex-1 grid-cols-1 grid-rows-[min-content_min-content_min-content_min-content] gap-3 p-4">
        <PSPItem title="dLocal" value="50%" icon={<img className="h-6 w-6 rounded-lg" src="https://yt3.googleusercontent.com/ytc/AL5GRJWQPTDwQvVF3p-4RiUXyuNoAE6hfH0D3B0PXqbq=s900-c-k-c0x00ffffff-no-rj" />} />
        <PSPItem title="Adyen" value="50%" icon={<img className="h-6 w-6 rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU1tFT///+Q0p4qsk30+/Y5t1kfr0bR7djb8eAws1FZwHEksEkusk/8/v2n27JKu2Xu+PCX1aTK6tEYr0LD58tzyIaw3blBuV9SvWu24b/i8+V5yYqh2a1hwndqxX4/t1wKrTyHzpa948WR0p/1ecwCAAAEW0lEQVR4nO3di3LaMBAFUCkyBiELP8AxGDAl/f9/rAhJmyc0jRatb/d+gIczkjXGWnmV1nqWq3FlcijnbX3fVF5fjxqjMMQWxuXLbrvorynHKjzHFs6t6xmw8BRr3HpzYSDHLwyxzuwyaGGImyw+GUcUYTB2DbhQ2bz9aKoCCZUyagUuDMNYgwvD3Ti8XXDQhMqUFbhQFYceXKjsayKgMBArcKEqOg8uVGZAFypXowvVcoUutCoDFyrTogtV3qALbenBhcot0IV2koELlduhC5X16MJ8gy60a3ShcjN0oanRhXbtwYXK9fDCBbqw2KILbefBhWpZoQvzBl3o7tGFpkYXFi260M7RhaqEFx7ghRN4oRIhQEQ4/ohw/BHh+PN/CH+YBCluKKyOd7fPcZjk5lbCRPHT7fIWA5lOGFINDlyodU1PTCzUO/KFPLVQH6nXm9RA7Q8WXKg3xPM0tS+EFshBWNPeial5IQ3tNE3NC6nghRntYpqaF5JNRChCEaaOCEUowvQRoQhFmD4iFGEEYVY19/WxHfbzL6a8/PkfHsJsWg9dnjtjiqKwX8xyyl3oV+3EmeKf/4PnzIWzY+6+tznEW9gM39/f4yxs9nmEvT2+wmpwUd5/sRUuYozfKUyF/T7aG1qewlXEKgmWwjrmK3aGQr+NuofAT+j3cQsH2An9PPJOHjdhdCA7YfzyHWbCu/gblbyEFCURrIQzinIBTkK/pthq5iSkqaBjJOyXJBdnJNzTlEPwET4QVXmyEfqSqKKFjZCsOpCNsKMqSuIipKuc4yIkWkgVG2FPV97JRLigOxDARLinO7jCQ0g4SZkIN4SnVngIKU90sBCSPbGdwkKY0fxvOoeFcEpZKM9CSLnQ8BCSHlhhIWwpDzuwEM7hhSXlxVkID5QXZyEkvToLIWlEKEL+EaEI+UeEIuQfEYqQf0QoQv4RoQj5R4Qi5B8RipB/RChC/nnuWIsrdA/oQlNf941baEt04WObTGyhOaILlfmLQRy3sHjq/40rVGZAFyo3ZOBCZborTzajFyq7nK8ujaMfvTCsN7nZf9pE4+cx9c+Lk+JCu5LUv00ikUgkEomEfwCeeq+EtFafRUjPW7AI6ZkZFmlv1mkxVYibLTHI/Q06EKYNcTspBqkozwGziCf7dAuX6C36Ykr54Q8e0T28kOZre4xC3mAxebSegU9TrTX4NNX0zVwT57S7BT+Gegd9J543YZFH8XEXFvq55rzPTPkppdQ5b6Uj/0t8qhbY4j7YPFd8KNh5+lzysYKdp7+rWmi+d80gfwp3BtBb8UVpUon5PuNF9VV1gCS+LDDrIYmvauj6DpD4ukywKvGWm7eVkPFbsaTOu2rPOgd7unkn1I3CmqnvhTproYbxA2EYxjJO/0MW+VCo/eIAs+J8LAxTdWdj9XlMnM+EYRw3c4cwWT8Xhsx2a+f+vR0wj1wUhoHsF9tumX+n7XHqXBE+Kk9tudt5eRhlDdwvL5xJ/0Xo/pIAAAAASUVORK5CYII=" />} />
        <div className="flex flex-col items-end space-y-2">
          <div>dLocal: 50%</div>
          <div>Adyen: 50%</div>
          <div className="font-bold">Total: 50%</div>
        </div>
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

export default Step2