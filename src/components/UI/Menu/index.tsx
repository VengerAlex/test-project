import {FC, useState} from 'react'
import {
  Box,
  Typography,
  MenuItem,
} from '@mui/material'
import { MenuTS} from '@utils/types'
import {
  DropDown,
  MenuWrapper,
  SMenuList
} from '@ui/styles'
import {Link} from 'react-router-dom'

interface MenuProps {
  menuData: MenuTS
}

const Menu: FC<MenuProps> = ({menuData}) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const {title, items} = menuData

  const toggleExpandedItemHandler = (index: number) => {
    expandedItems.includes(index)
      ?  setExpandedItems(expandedItems.filter((item) => item !== index))
      :  setExpandedItems([...expandedItems, index])
  }

  const renderItem = (item: any, index: number) => {
    const isExpanded = expandedItems.includes(index)

    const handleClick = () => {
      if (item.items) {
        toggleExpandedItemHandler(index)
      }
    }

    return (
      <Box>
        <Link to={item?.href}>
          <Typography onClick={handleClick} variant='body1'>
            {item?.label}
          </Typography>
        </Link>
        <DropDown>
          {isExpanded && item?.items?.map((subItem: string, index: number) => (
            <MenuItem key={index}>{renderItem(subItem, index)}</MenuItem>
          ))}
        </DropDown>
      </Box>
    )
  }

  return <MenuWrapper>
    <Typography variant='body1'>{title}</Typography>
    <SMenuList>
      {items.map((item, index) => (
        <MenuItem
          component='ul'
          key={index}
        >
          {renderItem(item, index)}
        </MenuItem>
      ))}
    </SMenuList>
  </MenuWrapper>
}

export default Menu
