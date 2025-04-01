import React from 'react'
import './style.scss'

const Footer: React.FC = () => {
  return (
    <div>
        Footer
        <button className='base-button'>BaseButton</button>
        <button className='login'>Login</button>
        <div className='flexx' style={{ width: '200px', height: '250px', background: 'green'}}>
          <div style={{ width: '45px', height: '45px', background: 'red'}}></div>
          <div style={{ width: '75px', height: '75px', background: 'blue'}}></div>
        </div>
    </div>
  )
}

export default Footer