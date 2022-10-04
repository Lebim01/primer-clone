import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  from: number;
  to: number;
  className?: string;
}

const Counter = ({ from, to, className }: Props) => {
  const nodeRef = useRef<any>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if(node){
          node.textContent = value.toFixed(1);
        }
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <p className={className} ref={nodeRef} />;
}

export default Counter