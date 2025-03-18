import { useState } from "react";

import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import MainSectior from "./MainSection";
import { MenuItem } from "../constant/types";

const menuItems = [
  { id: 1, name: "Dashboard", content: "Welcome to the Dashboard!", icon: 'Home.svg' },
  { id: 2, name: "Accounting", content: "This is your Profiqeqeqeqwle page.", icon: 'account.svg' },
  { id: 3, name: "Banking", content: "Banking your settings here.", icon: 'bank.svg' },
  { id: 4, name: "Reports", content: "Reports your settings here.", icon: 'report.svg' },
  { id: 5, name: "Contacts", content: "Contacts your settings here.", icon: 'contact.svg' },
  { id: 6, name: "Invoicing", content: "Contacts your settings here.", icon: 'invoice.svg' },
  { id: 7, name: "Queries", content: "Queries your settings here.", icon: 'querie.svg' },
];

export default function Dashboard() {
  const [selectedContent, setSelectedContent] = useState<MenuItem>(menuItems[0]);
  return (
    <div className="h-screen flex">
      <Sidebar setSelectedContent={(val) => setSelectedContent(val)} menuItems={menuItems} selectedContent={selectedContent} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <MainSectior activeMenu={selectedContent} />
      </div>

      <Rightbar />
    </div>
  );
}
