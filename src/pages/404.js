import { useEffect } from 'react'
import { navigate } from 'gatsby'

const Page = () => {
  useEffect(() => {
    navigate('/')
  }, [])
  return null
}

export default Page
