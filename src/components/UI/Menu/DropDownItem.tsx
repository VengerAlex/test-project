import {useState} from 'react'
import {
  Box, Typography, ListItem, ListItemIcon, ListItemButton
} from '@mui/material'
import {Link, useLocation} from 'react-router-dom'
import {MenuItemTS} from '@utils/types'
import { CaretUp, CaretDown } from 'phosphor-react'

interface DropDownItemProps {
  item: MenuItemTS
}

export const DropDownItem = ({item}: DropDownItemProps) => {
  const {pathname} = useLocation()
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const currentIcon = isDropDownOpen ? <CaretUp size={32} /> : <CaretDown size={32} />
  const isActivePage = pathname === item.href

  if (item.items) {
    return (
      <Box>
        <ListItemButton
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {item.label}
          <ListItemIcon>
            {currentIcon}
          </ListItemIcon>
        </ListItemButton>
        {isDropDownOpen && item.items.map((child, index) =>
          <ListItem key={index}>
            <DropDownItem item={child} />
          </ListItem>
        )}
      </Box>
    )
  } else {
    return (
      <Link to={item.href || '#'}>
        <Typography sx={{color: isActivePage ? 'red' : ''}}>{item.label}</Typography>
      </Link>
    )
  }
}
