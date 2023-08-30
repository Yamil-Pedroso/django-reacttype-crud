import { useEffect, useState } from "react"
import { getUsers } from "../../api/auth"
import UserCard from "./UserCard"
import Aside from "../dashboard/Aside"

interface IUsers {
    id: string
    username: string
    bio: string
    last_name: string
    date_joined: string
    is_active: boolean
    profile_picture: string
}
const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getUsers()
            setUsers(res.data)

            console.log(res.data)
        }
        fetchUsers()
    }, [])

  return (
    <div>
        {users.map((user) => (
            <UserCard key={user.id} {...user} />
        ))}
    </div>
  )
}

export default UserList