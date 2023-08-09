import { useMemo, useState } from 'react'

export const useTruncateString = (text: string, maxLength: number) => {
  const [truncatedText, setTruncatedText] = useState(text)

  useMemo(() => {
    if (text.length > maxLength) {
      const truncated = `${text.substring(0, maxLength)}...`
      setTruncatedText(truncated)
    }
  }, [text, maxLength])

  return truncatedText
}
