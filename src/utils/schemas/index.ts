import * as yup from 'yup'

const SPACE_REGEXP = /^(.*)?\S+(.*)?$/
const SPACE_WARNING = 'Can\'t be empty'

export const signInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().matches(SPACE_REGEXP, SPACE_WARNING).required(),
})
