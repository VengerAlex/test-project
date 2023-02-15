import {Box, MenuList, styled} from '@mui/material'

export const MenuWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: 20px;
`

export const SMenuList = styled(MenuList)`
  display: flex;
  align-items: center;
`

export const DropDown = styled(MenuList)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
