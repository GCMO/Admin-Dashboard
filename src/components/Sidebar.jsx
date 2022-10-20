import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize < 768) {
    setActiveMenu(false);
  }};
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-grey-600 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className="ml-3 h-screen md:overflow-hidden overlow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className={'flex justify-between item-center'}>
        <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-while text-slate-900'>
          <SiShopware /> <span>SHOPSTER</span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter' >
          <button className='text-xl rounded-full p-2 hover:bg-gray-200 mt-4 block  md:hidden dark:hover:bg-gray-700' onClick={()=>{setActiveMenu(false)}}>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10'>
        { links.map((item) => (  
          <div key={item.title}>
            <p className='text-silver-400 m-3 mt-4 uppercase'> {item.title} </p>
            {item.links.map((link) => (
              <NavLink 
                key={link.name} 
                to={`/${link.name}`} 
                onClick={handleCloseSideBar} 
                className={({ isActive }) => isActive ? activeLink : normalLink} 
              >
                {link.icon}
                <span className='capitalize'>{link.name}</span>
              </NavLink>
            ))}  
          </div>
        ))}
      </div> {/* links's a const in link.jsx w/ icons for each page */}
      </>)}
    </div>
  )
}

export default Sidebar