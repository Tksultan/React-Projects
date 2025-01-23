import React, {useContext} from 'react'
import UserContext from '../context/Usercontext.js'

function Profile() {
  
  const {user} = useContext(UserContext)
  
  if(!user) return <div>Please Login</div>
  
  return <div>welcome {user.username}</div>

}
export default Profile