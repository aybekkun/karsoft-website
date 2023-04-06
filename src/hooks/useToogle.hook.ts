import { Dispatch, SetStateAction, useCallback, useState } from "react"

export const useToggle = (defaultactive?: boolean) => {
  const [active, setActive] = useState(!!defaultactive)

  const toggle = useCallback(() => setActive((x) => !x), [])

  return { active, toggle, setActive }
}

export default useToggle
