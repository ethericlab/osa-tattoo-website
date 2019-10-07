import { useState } from "react"

/**
 * A simple hook that returns a function that, when called, will trigger a component render
 * @returns {function(): void}
 */
const useRerender = () => {
  const [, setSomething] = useState(1)

  return () => setSomething(Math.random())
}

export default useRerender
