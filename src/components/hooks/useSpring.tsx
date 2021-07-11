import { useSpring, SpringRef, SpringValue } from 'react-spring'

type Arg = {
  delay?: number
  ref?: SpringRef
}

type Return = {
  opacity: SpringValue<number>
}

function useFadeIn({ delay = 0, ref = undefined }: Arg): Return {
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
