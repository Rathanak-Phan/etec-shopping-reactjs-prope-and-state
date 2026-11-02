import React from 'react'

function Header({username, email}) {
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
            <p>{username}</p>
            <span className='text-xs text-gray-300'>{email}</span>
          </div>

          <div className='w-14 h-14 rounded-full overflow-hidden'>
            <img src="https://i.pinimg.com/736x/3b/b7/d5/3bb7d5a63e7b08129e61128e8c3ed09d.jpg" alt="" />
          </div>
        </div>
    </header>
  )
}

export default Header