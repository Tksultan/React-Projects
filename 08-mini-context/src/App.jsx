
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/Usercontextprovidrer'

function App() {

  return (
    <UserContextProvider>
      <h1>Comming soon</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
