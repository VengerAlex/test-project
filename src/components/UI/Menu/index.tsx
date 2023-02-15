import {FC} from 'react'
import {Typography, MenuItem,} from '@mui/material'
import { MenuTS} from '@utils/types'
import {MenuWrapper, SMenuList} from '@ui/styles'
import {DropDownItem} from '@ui/Menu/DropDownItem'

interface MenuProps {
  menuData: MenuTS
}

const Menu: FC<MenuProps> = ({menuData}) => {
  const {title, items} = menuData

  return <MenuWrapper>
    <Typography variant='body1'>{title}</Typography>
    <SMenuList>
      {items.map((item, index) => (
        <MenuItem
          component='ul'
          key={index}
        >
          <DropDownItem item={item}/>
        </MenuItem>
      ))}
    </SMenuList>
  </MenuWrapper>
}

export default Menu

