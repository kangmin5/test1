import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <h1><NavLink to="/"> Redux Blog</NavLink></h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Post</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header