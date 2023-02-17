import { useState } from 'react'
import { Box, ListItem, ListItemIcon, ListItemButton, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { MenuItemTS } from '@utils/types'
import styled from '@emotion/styled'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'

interface DropDownItemProps {
  item: MenuItemTS
}

const ListWrapper = styled(Box)`
  width: 100%;
`
const SListItemButton = styled(ListItemButton)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 14px;
  color: white;
  padding: 5px 10px;

  svg {
    fill: white;
  }
`
const SListItem = styled(ListItem)`
  width: 100%;

  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`
const LinkItem = styled(Link)`
  text-align: start;
  width: 100%;

  p {
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 14px;
    color: white;
  }
`
const SListItemIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: end;
`

export const DropDownItem = ({ item }: DropDownItemProps) => {
  const { pathname } = useLocation()
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const currentIcon = isDropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />
  const isActivePage = pathname === item.href

  if (item.items) {
    return (
      <ListWrapper>
        <SListItemButton onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {item.label}
          <SListItemIcon sx={{ marginLeft: 'auto' }}>{currentIcon}</SListItemIcon>
        </SListItemButton>
        {isDropDownOpen &&
          item.items.map((child, index) => (
            <SListItem key={index}>
              <DropDownItem item={child} />
            </SListItem>
          ))}
      </ListWrapper>
    )
  } else {
    return (
      <LinkItem to={item.href || '#'}>
        <Typography sx={isActivePage ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : {}}>
          {item.label}
        </Typography>
      </LinkItem>
    )
  }
}
