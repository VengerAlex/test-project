import * as yup from 'yup'

const SPACE_REGEXP = /^(.*)?\S+(.*)?$/
const SPACE_WARNING = 'can\'t be empty'

export const signInSchema = yup.object().shape({
  username: yup.string().required().min(5).max(30),
  password: yup.string().matches(SPACE_REGEXP, SPACE_WARNING).required().min(5).max(30),
})
