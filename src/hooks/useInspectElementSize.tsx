import { useCallback, useEffect, useState } from "react"

const useInspectElementSize = (ref: any) => {
  const [[width, height], setSize] = useState([undefined, undefined])

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event: any) => {
      console.log("inspector")
      setSize([
        event[0].contentBoxSize[0].inlineSize,
        event[0].contentBoxSize[0].blockSize
      ])
    });

    resizeObserver.observe(ref.current);
  }, [ref.current])

  return {
    width,
    height
  }
}

export default useInspectElementSize