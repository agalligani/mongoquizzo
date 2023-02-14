import EditUserForm from "./EditUserForm"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserById } from "./usersApiSlice"

const EditUser = () => {

    const { id } = useParams()
    const user = useSelector((state) => selectUserById(state, id))
   const content = user ? <EditUserForm user={user}/> : <p>User {id} not found</p>
    // const content = user ? user.username : <p>User {id} not found</p>
    
    return content
}
export default EditUser