import { useSpring } from 'react-spring'

function useFadeIn(delay = 0, ref = null) {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    delay,
    ref,
  })

  return fadeIn
}

export { useFadeIn }
