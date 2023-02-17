import { AuthContext } from '@components/Contexts/AuthContext'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react'

const SUserCard = styled(Box)`
  width: 100%;
  border-top: 1px solid lightgray;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`
const UserIcon = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 32px;
  font-weight: bold;
  color: #0775b4;
`
const UserName = styled(Typography)`
  font-size: 18px;
  color: white;
`

export const UserCard = () => {
  const { user } = useContext(AuthContext)

  return user ? (
    <SUserCard>
      <UserIcon>{user?.username.substring(0, 1)}</UserIcon>
      <UserName variant='h5'>{user?.username}</UserName>
    </SUserCard>
  ) : null
}
