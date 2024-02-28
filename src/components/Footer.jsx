import React from 'react'

function Footer() {
  return (
    <div className='App-footer'>
        
      <a href='tel:1800 200 1234' className='link'>
          <img src="phone.svg" alt="fb" width={30} />
          <p className='link-text'>Toll free 1800 200 1234</p>
        </a>
      <a href='https://www.facebook.com/cripumps' target='blank' className='link'>
          <img src="fb.png" alt="fb" width={30}  />
          <p className='link-text'>www.facebook.com/cripumps</p>
        </a>
      <a href='http://www.crigroups.com' target='blank' className='link'>
          <img src="web.png" alt="fb"width={30} />
          <p className='link-text'>www.crigroups.com</p>
        </a>
    </div>
  )
}

export default Footer