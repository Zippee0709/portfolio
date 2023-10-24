import { useEffect } from "react"

const OutsideClick = (
  ref: React.MutableRefObject<any>,
  setIsClicked: (isOpen: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target)) {
        setIsClicked(true)
      } else {
        setIsClicked(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, setIsClicked])
}

export { OutsideClick }
