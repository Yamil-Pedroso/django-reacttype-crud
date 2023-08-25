import { useState, useEffect } from 'react'
import { UserItemsContainer, NotificationIcon, ArrowDownIcon, NotificationCardWrapper } from './styles'
import { getUserById } from '../../api/auth'

interface IUser {
  id: number;
  username: string;
  last_name: string;
  profile_picture: string;
}

const UserItems = () => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(4)
      setUser(user.data)
    }
    fetchUser()
  }, [])
  return (
    <UserItemsContainer>
        <div style={{display: "flex", alignItems: "center"}}>
          <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden"}}>
            <img src={user?.profile_picture} alt="user" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
          <div style={{marginLeft: "1rem"}}>
            <h2> {user?.username} </h2>
            <p>{user?.last_name}</p>
          </div>
        </div>
        <NotificationCardWrapper>
            <NotificationIcon />
            <ArrowDownIcon />
        </NotificationCardWrapper>
    </UserItemsContainer>
  )
}

export default UserItems