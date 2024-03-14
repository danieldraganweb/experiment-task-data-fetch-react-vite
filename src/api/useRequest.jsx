import { useState } from 'react'
import requestFunction from './requestFunction'

export default function useRequest ({ defaultLoading = false } = {}) {
  const [loading, setLoading] = useState(defaultLoading)
  const [error, setError] = useState(null) // Any is acceptable here
  const [data, setData] = useState(null)

  const request = (url) => {
    setLoading(true)
    requestFunction(url)
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }

  return {
    request,
    loading,
    error,
    data
  }
}
