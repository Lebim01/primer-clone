import { useState } from "react"
import { motion, useUnmountEffect } from "framer-motion"

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

type Props = {
  active: boolean;
  onChange?: (active: boolean) => void;
}

const Switch = (props: Props) => {
  const [isOn, setIsOn] = useState(props.active);

  const toggleSwitch = () => {
    setIsOn(isOn => {
      const newVal = !isOn
      props.onChange && props.onChange(newVal)
      return newVal
    })
  };

  return (
    <div className="switch" data-is-on={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}

export default Switch