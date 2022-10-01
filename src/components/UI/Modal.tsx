import { useRef, useEffect } from "react"
import { FaTimes } from "react-icons/fa";

/**
 * Hook that alerts clicks outside of the passed ref
 */
 function useOutsideAlerter(ref: any, callback: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Modal = (props: ModalProps) => {
  const contentRef = useRef(null);
  useOutsideAlerter(contentRef, props.onClose);

  return (
    <div ref={contentRef} className="absolute left-1/2 top-40 flex -translate-x-1/2 flex-col rounded-md border bg-white p-2 shadow-md shadow-neutral-500">
      <div className="flex w-full flex-1 justify-end">
        <FaTimes className="text-neutral-500 hover:cursor-pointer hover:text-neutral-400" onClick={props.onClose} />
      </div>
      <props.children {...props} />
    </div>
  )
}

export default Modal