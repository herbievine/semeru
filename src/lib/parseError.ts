import { errors } from '../data/errors.json'

type Error = {
  code: string
  message: string
}

const parseError = (code: string): Error => {
  let error: Error | undefined

  Object.entries(errors).forEach(([_, errorArray]) => {
    if (!error) {
      error = errorArray.find((value) => value.code === code)
    }
  })

  return (
    error ?? {
      code: '0000',
      message: 'An unexpected error has occured',
    }
  )
}

export { parseError }
