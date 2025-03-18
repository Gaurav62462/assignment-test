import React from "react"
import { MenuItem } from "../constant/types"

interface SidebarProps {
  setSelectedContent: (item: MenuItem) => void
  menuItems: { id: number, content: string, name: string, icon: string }[]
  selectedContent: MenuItem
}
const Sidebar: React.FC<SidebarProps> = ({
  setSelectedContent,
  menuItems,
  selectedContent
}) => {

  return (
    <aside className={`w-[7%] !bg-blue_500 text-white w-24  fixed top-0 left-0  md:relative h-full transition-transform md:translate-x-0`}>
      <div className="flex justify-center mb-4">
        <img src={'images/site-logo.svg'} alt='logo' />
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <div key={item.id} onClick={() => { setSelectedContent(item) }}
            className={`cursor-pointer pt-[13px] pb-[13px] !mt-0 flex items-center flex-col 
           ${selectedContent.id === item.id && 'bg-velvel_curtain border-l-4 border-white'}`}>
            <img src={`images/${item.icon}`} alt='logo' />
            <li
              className={`!mt-0 text-[14px] font-[500] text-center  `}
            >
              {item.name}
            </li>
          </div>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar