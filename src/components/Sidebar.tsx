import React from "react"
import { MenuItem } from "../constant/types"
import { Link } from "react-router-dom";

interface SidebarProps {
  setSelectedContent: (item: MenuItem) => void
  menuItems: MenuItem[]
  selectedContent?: MenuItem
}
const Sidebar: React.FC<SidebarProps> = ({
  setSelectedContent,
  menuItems,
  selectedContent
}) => {

  return (
    <aside className={`w-[7%] !bg-blue_500 text-white  fixed top-0 left-0  md:relative h-full transition-transform md:translate-x-0`}>
      <div className="flex justify-center mb-4">
        <img src={'images/site-logo.svg'} alt='logo' />
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => { setSelectedContent(item) }} >
            <Link to={item.to}
              className={`cursor-pointer pt-[13px] pb-[13px] flex items-center border-l-4 border-transparent flex-col 
            ${selectedContent?.id === item.id && 'bg-velvel_curtain border-l-4 border-white'}`}>
              <img src={`images/${item.icon}`} alt={item.name} />
              <span className="hidden md:block mt-2 text-sm">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar