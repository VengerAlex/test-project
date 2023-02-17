import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { UserCard } from './UserCard'

const Title = styled(Typography)`
  color: white;
  font-size: 24px;
  padding: 30px 0 0;
`

export const Header = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Title variant='h3'>Hello System</Title>
      <UserCard />
    </Box>
  )
}
