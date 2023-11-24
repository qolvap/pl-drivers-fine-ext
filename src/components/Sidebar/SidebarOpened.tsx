import React from 'react';
import { useGlobalContext } from '../context/Context';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

function SidebarOpened() {
  const { openSideBar } = useGlobalContext();

 return (
    <div className="Sidebar-btn">
        <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
        </button>
    </div>
  );
}

export default SidebarOpened;