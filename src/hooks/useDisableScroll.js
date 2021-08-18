import { useEffect } from 'react'

const useDisableScroll = () => {
  useEffect(() => {
    document.body.classList.add('disable--scroll')
    return () => {
      document.body.classList.remove('disable--scroll')
    }
  }, [])
}

export default useDisableScroll
