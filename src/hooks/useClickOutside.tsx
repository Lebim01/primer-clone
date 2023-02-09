import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handler: any, ignoreClass = ""): void => {
  useEffect(() => {
    const listener = (event: any): void => {
      const ignoreEvent = event?.path.find((el: HTMLElement) => el.classList?.contains(ignoreClass))

      if (!ref.current || ref.current.contains(event.target) || ignoreEvent) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
