import React, { useState } from 'react';
import './App.css';
import { Outlet, Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import MainSection from './components/MainSection';
import Rightbar from './components/Rightbar';
import { MenuItem } from './constant/types';
import { menuItems } from './constant/constent';
import Content from './components/Content';

function App() {
  const [selectedContent, setSelectedContent] = useState<MenuItem>(menuItems[0]);

  return (
    <Router>
      <div className="h-screen flex">
        <Sidebar setSelectedContent={(val) => setSelectedContent(val)} menuItems={menuItems} selectedContent={selectedContent} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <NavBar />
          <Outlet />
          <Routes>
            <Route path="/" element={<MainSection activeMenu={selectedContent} />} />
            <Route path="/account" element={<Content />} />
            <Route path="/banking" element={<Content />} />
            <Route path="/reports" element={<Content />} />
            <Route path="/contacts" element={<Content />} />
            <Route path="/invoicing" element={<Content />} />
            <Route path="/queries" element={<Content />} />
          </Routes>
        </div>
        <Rightbar />
      </div>
    </Router>
  );
}

export default App;
