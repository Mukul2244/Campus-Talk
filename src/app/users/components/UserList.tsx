"use client"
import { User } from "@prisma/client";
interface UserListProps{
    items:User[]    
}

const UserList:React.FC<UserListProps> = ({
    items
}) => {
  return (
    <div>UserList</div>
  )
}

export default UserList