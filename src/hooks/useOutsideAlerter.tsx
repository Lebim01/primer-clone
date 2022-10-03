import { useEffect } from "react"

const DEFAULT_IGNORE = ['select-values']

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: any, callback: () => void, ignoreClass: string[] = DEFAULT_IGNORE) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      const ignoreEvent = event?.path.find((el: HTMLElement) => el.classList?.contains("select-values"))

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