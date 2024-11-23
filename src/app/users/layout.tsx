import getUsers from "@/actions/getUsers";
import SideBar from "@/components/SideBar/SideBar"
import UserList from "./components/UserList";
export default async function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const users=await getUsers();
  return (
         <SideBar>
             <div>
             <UserList items={users}/> 
            {children}
          </div>
         </SideBar>
     );
}
