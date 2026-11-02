import React from 'react'

function Header({user}) {
  return (
    <header className='w-7xl flex items-center justify-between'>
        <div>Logo</div>

        <nav>
          <ul className='flex items-center gap-5'>
            <li>Home</li>
            <li>Products</li>
          </ul>
        </nav>

        {/* Profile */}
        <div className='flex items-center gap-5'>
          <div>
            <p>{user.username}</p>
            <span className='text-xs text-gray-300'>{user.email}</span>
          </div>

          <div className='w-14 h-14 rounded-full overflow-hidden'>
            <img src={user.profile} alt="{user.profile}" />
          </div>
        </div>
    </header>
  )
}

export default Header