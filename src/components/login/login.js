import { useState, useContext } from 'react'
import UserContext from '../context/userContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()
        const objUser = {username, password}
        login(objUser)
        history.push('/')
    }

    return (
        <div>
          <h1>SignIn</h1>
          <form onSubmit={handleLogin}>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type='submit'>login</button>
          </form>
        </div>
      )
}

export default Login