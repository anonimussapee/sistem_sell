import {NavLink} from 'react-router-dom'



const NavBar = (props) => {

  return (
    <nav className=' fixed z-10 w-full h-[60px] bg-cyan-800 p-5 flex items-center justify-between text-white text-[2rem] font-bold'>
      <ul>
        <NavLink 
        to='/'
        className={({isActive})=> isActive ? 'underline underline-offset-4': undefined}
        > 
          <li className='flex  gap-5'>
           <img src={props.img} alt="logo" className=' w-14 h-14 rounded-full' />
           <p> YouMp3</p>
          </li>
        </NavLink>
      </ul>
      <ul>
      <NavLink
        to='/login'
        className={({isActive})=> isActive ? 'underline underline-offset-4': undefined}
        > 
          <li>
              Login
          </li>
        </NavLink>
      </ul>
    </nav>
  )

}

export {NavBar}