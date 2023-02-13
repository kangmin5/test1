import { useSelector } from "react-redux"
import { selectAllUsers } from "./usersSlice"

const UsersList = () => {
    const users = useSelector(selectAllUsers)

    const usersData = users.map(user => (
        <article key={user.id}>{user.name} {user.email}</article>
    ))
  return (
    <div>{usersData}</div>
  )
}

export default UsersList