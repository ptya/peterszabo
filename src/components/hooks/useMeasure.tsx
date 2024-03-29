// https://gist.github.com/stolinski/1fecfb2677e0b2deda9039608fecf5d8

import { useRef, useState, useEffect, useContext } from 'react'

import ScreenContext from 'components/context/ScreenContext'

type Return = readonly [React.RefObject<HTMLDivElement>, { left: number; top: number; width: number; height: number }]

function useMeasure(): Return {
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const { isClient } = useContext(ScreenContext)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isClient || ref.current === null) return

    const ro = new ResizeObserver(([entry]) => set(entry.contentRect))
    ro.observe(ref.current)
    return () => {
      ro.disconnect()
    }
  }, [isClient])
  return [ref, bounds] as const
}

export { useMeasure }
