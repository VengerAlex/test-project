import {FC, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {DropDown} from '@ui/styles'
import {Link} from 'react-router-dom'
import {MenuItemTS} from '@utils/types'

interface DropDownItemProps {
  item: MenuItemTS
}

export const DropDownItem: FC<DropDownItemProps> = ({item}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  if (item.items) {
    return (
      <Box sx={{display: 'block'}} >
        <Box>
          <Typography  onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {item.label}
          </Typography>
        </Box>
        <DropDown sx={{display: isDropDownOpen ? 'block' : 'none'}}>
          {item.items.map((child: MenuItemTS, index: number) =>
            <DropDownItem key={index} item={child} />)
          }
        </DropDown>
      </Box>
    )
  } else {
    return (
      <Link to={item.href || '#'}>
        <Typography>{item.label}</Typography>
      </Link>
    )
  }
}
