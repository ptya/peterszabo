import { useLayoutEffect } from 'react'

import { constants } from 'utils'

function useTarget(base: number[], handler: (arg: number[]) => void): void {
  useLayoutEffect(() => {
    const menu = document.getElementById('menu')

    if (menu === null) return

    const home = document.getElementById('home')
    const about = document.getElementById('about')
    const work = document.getElementById('work')
    const contact = document.getElementById('contact')

    const hoverListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const left = target.offsetLeft
      const width = target.offsetWidth
      handler([left - constants.hoveredLeftOffset, width + constants.hoveredWidthOffset])
    }

    const resetListener = () => {
      handler(base)
    }

    menu.addEventListener('mouseleave', resetListener)
    home?.addEventListener('mouseenter', hoverListener)
    about?.addEventListener('mouseenter', hoverListener)
    work?.addEventListener('mouseenter', hoverListener)
    contact?.addEventListener('mouseenter', hoverListener)

    return () => {
      menu.removeEventListener('mouseleave', resetListener)
      home?.removeEventListener('mouseenter', hoverListener)
      about?.removeEventListener('mouseenter', hoverListener)
      work?.removeEventListener('mouseenter', hoverListener)
      contact?.removeEventListener('mouseenter', hoverListener)
    }
  }, [base, handler]) // Empty array ensures effect is only run on mount and unmount
}

export { useTarget }
