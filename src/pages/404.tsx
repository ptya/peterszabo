import { useEffect } from 'react'
import { navigate } from 'gatsby'

const Page: React.FC = () => {
  useEffect(() => {
    navigate('/')
  }, [])
  return null
}

export default Page
