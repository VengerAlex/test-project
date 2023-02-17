import { MenuItem } from '@mui/material'
import { MenuWrapper, SMenuList } from '@ui/styles'
import { DropDownItem } from '@ui/Menu/DropDownItem'
import menuData from '@data/menu/index.json'

const Menu = () => {
  const { items } = menuData

  return (
    <MenuWrapper>
      <SMenuList>
        {items.map((item, index) => (
          <MenuItem
            component='ul'
            key={index}
          >
            <DropDownItem item={item} />
          </MenuItem>
        ))}
      </SMenuList>
    </MenuWrapper>
  )
}

export default Menu
