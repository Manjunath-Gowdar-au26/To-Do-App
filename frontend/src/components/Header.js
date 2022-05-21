import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header>
      <nav>
        <Link to='/home' style={{ paddingRight: '20px' }}>
          HOME
        </Link>
        {userInfo ? (
          <>
            <button style={{ marginLeft: '20px' }} onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' style={{ paddingRight: '20px' }}>
              LOGIN
            </Link>

            <Link to='/register' style={{ paddingRight: '20px' }}>
              REGISTER
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
