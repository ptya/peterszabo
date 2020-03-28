import { useSpring, ReactSpringHook, AnimatedValue } from 'react-spring'

type Arg = {
  delay?: number,
  ref?: React.RefObject<ReactSpringHook> | undefined
}

function useFadeIn({ delay = 0, ref = undefined }: Arg) {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: delay,
    ref: ref,
  })

  return fadeIn
}

export { useFadeIn }
