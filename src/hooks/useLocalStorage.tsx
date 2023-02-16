import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export const useLocalStorage = <TValue, >(key: string, initialValue: TValue) => {
  const [value, setValue] = useState<TValue>(() => {
    const data = localStorage.getItem(key)

    return data ? JSON.parse(data) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [TValue, SetValue<TValue>]
}
