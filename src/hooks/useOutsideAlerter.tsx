import { useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: any, callback: () => void, className = "select-values") {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      const ignoreEvent = event?.path.find((el: HTMLElement) => el.classList?.contains(className))

      if (ref.current && !ref.current.contains(event.target) && !ignoreEvent) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}